import { NextRequest, NextResponse } from "next/server";
import { enquirySchema } from "@/lib/enquiry-schema";
import { processEnquiry } from "@/lib/enquiry-service";

/**
 * In-Memory IP Rate Limiter
 * 
 * Protects the endpoint against brute-force and rapid automated spamming.
 * Note: On serverless platforms like Vercel, this state is maintained per warm instance.
 */
interface RateLimitRecord {
  count: number;
  firstRequestTime: number;
}

const rateLimitMap = new Map<string, RateLimitRecord>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5; // Max 5 submissions per 10 minutes per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  // Periodically clean up expired records
  if (rateLimitMap.size > 1000) {
    for (const [key, value] of rateLimitMap.entries()) {
      if (now - value.firstRequestTime > RATE_LIMIT_WINDOW_MS) {
        rateLimitMap.delete(key);
      }
    }
  }

  if (!record) {
    rateLimitMap.set(ip, { count: 1, firstRequestTime: now });
    return false;
  }

  if (now - record.firstRequestTime > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, firstRequestTime: now });
    return false;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  record.count += 1;
  return false;
}

export async function POST(request: NextRequest) {
  try {
    // 1. IP Rate Limiting
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "anonymous-client";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many consultation submissions from this network. Please wait a few minutes or contact us directly on WhatsApp (+91 9827118949).",
        },
        { status: 429 }
      );
    }

    const body = await request.json().catch(() => null);

    if (!body) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid request payload.",
        },
        { status: 400 }
      );
    }

    // 2. Honeypot Spambot Filter
    // Automated bots fill hidden inputs. If filled, return a simulated success without saving spam.
    if (body.hp_website && typeof body.hp_website === "string" && body.hp_website.trim() !== "") {
      console.warn(`[Spambot Trap] Dropped automated submission from IP: ${ip}`);
      return NextResponse.json(
        {
          success: true,
          referenceId: "TUTO-999999",
          timestamp: new Date().toISOString(),
          message: "Enquiry logged successfully.",
        },
        { status: 200 }
      );
    }

    // 3. Server-side Validation with Zod
    const parseResult = enquirySchema.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed. Please review the highlighted fields.",
          errors: parseResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    // 4. Lead Processing Pipeline (Google Sheets + Email + WhatsApp)
    const result = await processEnquiry(parseResult.data);
    return NextResponse.json(result, { status: 200 });

  } catch (error) {
    console.error("[API /api/enquiry] Critical Error:", error);
    const errorMessage = error instanceof Error ? error.message : "An unexpected storage failure occurred.";

    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
        message: "We were unable to record your consultation request in our admissions system. Please retry or contact us directly on WhatsApp at +91 9827118949.",
      },
      { status: 502 }
    );
  }
}
