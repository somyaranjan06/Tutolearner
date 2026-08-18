import { NextRequest, NextResponse } from "next/server";
import { enquirySchema } from "@/lib/enquiry-schema";
import { processEnquiry } from "@/lib/enquiry-service";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate payload against schema
    const parseResult = enquirySchema.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json(
        {
          success: false,
          errors: parseResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const result = await processEnquiry(parseResult.data);
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("Enquiry processing error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while processing the enquiry.",
      },
      { status: 500 }
    );
  }
}
