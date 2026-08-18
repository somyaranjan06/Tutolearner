import { EnquiryFormData, EnquirySubmissionResult } from "./enquiry-schema";

const DEFAULT_ADMIN_EMAIL = "tutolearner.edu@gmail.com";
const DEFAULT_WHATSAPP_RECIPIENT = "919827118949";
const DEFAULT_SECRET_TOKEN = "tutolearner_secure_lead_token_2026";

/**
 * Dispatch lead data to Google Sheets via Google Apps Script Webhook.
 * Google Sheets is the primary source of truth for all leads.
 */
async function saveLeadToGoogleSheets(
  data: EnquiryFormData,
  referenceId: string,
  timestamp: string
): Promise<{ success: boolean; error?: string; row?: number; emailSentByScript?: boolean }> {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  const secretToken = process.env.GOOGLE_SHEETS_SECRET_TOKEN || DEFAULT_SECRET_TOKEN;

  if (!webhookUrl) {
    console.warn("[Google Sheets] GOOGLE_SHEETS_WEBHOOK_URL is not configured.");
    return {
      success: false,
      error: "Google Sheets Webhook URL is not configured.",
    };
  }

  try {
    const payload = {
      secretToken,
      referenceId,
      timestamp,
      data: {
        referenceId,
        timestamp,
        fullName: data.fullName,
        userRole: data.userRole,
        email: data.email,
        phone: data.phone,
        studentGrade: data.studentGrade,
        subject: data.subject,
        preferredTutor: data.preferredTutor,
        preferredMode: data.preferredMode,
        message: data.message,
      },
    };

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      redirect: "follow", // Follow Google Apps Script 302 redirection
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => "Unknown HTTP error");
      console.error(`[Google Sheets] Webhook HTTP ${response.status}:`, errorText);
      return {
        success: false,
        error: `Google Sheets Webhook returned HTTP ${response.status}`,
      };
    }

    const responseData = await response.json().catch(() => null);

    if (responseData && responseData.success === true) {
      return {
        success: true,
        row: responseData.row,
        emailSentByScript: responseData.emailSent,
      };
    } else {
      const err = responseData?.error || "Google Sheets Webhook returned failure";
      console.error("[Google Sheets] Write failed:", err);
      return {
        success: false,
        error: err,
      };
    }
  } catch (error) {
    console.error("[Google Sheets] Network / Execution Error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Network error contacting Google Sheets",
    };
  }
}

/**
 * Dispatch transactional email notification via Resend if API key is provided.
 */
async function sendResendEmailNotification(
  data: EnquiryFormData,
  referenceId: string,
  timestamp: string
): Promise<{ success: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.ADMIN_NOTIFICATION_EMAIL || DEFAULT_ADMIN_EMAIL;

  if (!apiKey) {
    return { success: false, error: "RESEND_API_KEY not configured" };
  }

  try {
    const roleLabel = data.userRole === "parent" ? "Parent / Guardian" : "Student";
    const emailSubject = `🎓 New Student Enquiry [${referenceId}] - ${data.fullName} (${data.subject})`;
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #E2E8F0; border-radius: 12px; overflow: hidden; background: #ffffff;">
        <div style="background: #071F36; padding: 24px; color: #ffffff; text-align: center;">
          <h2 style="margin: 0 0 6px 0; font-size: 22px; color: #ffffff;">New Student Consultation Request</h2>
          <p style="margin: 0; color: #7ECB51; font-weight: bold; font-size: 14px;">Reference ID: ${referenceId}</p>
        </div>
        
        <div style="padding: 24px; color: #334155; font-size: 14px; line-height: 1.6;">
          <table style="width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 14px;">
            <tr style="background: #F8FAFC;">
              <td style="padding: 10px; border: 1px solid #E2E8F0; font-weight: bold; width: 35%;">Applicant Name</td>
              <td style="padding: 10px; border: 1px solid #E2E8F0;"><strong>${data.fullName}</strong> (${roleLabel})</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #E2E8F0; font-weight: bold;">Phone / WhatsApp</td>
              <td style="padding: 10px; border: 1px solid #E2E8F0;"><a href="tel:${data.phone}" style="color: #0B4982; font-weight: bold;">${data.phone}</a></td>
            </tr>
            <tr style="background: #F8FAFC;">
              <td style="padding: 10px; border: 1px solid #E2E8F0; font-weight: bold;">Email Address</td>
              <td style="padding: 10px; border: 1px solid #E2E8F0;"><a href="mailto:${data.email}" style="color: #0B4982;">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #E2E8F0; font-weight: bold;">Grade / Class</td>
              <td style="padding: 10px; border: 1px solid #E2E8F0;">${data.studentGrade}</td>
            </tr>
            <tr style="background: #F8FAFC;">
              <td style="padding: 10px; border: 1px solid #E2E8F0; font-weight: bold;">Subject Requested</td>
              <td style="padding: 10px; border: 1px solid #E2E8F0; color: #0B4982; font-weight: bold;">${data.subject}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #E2E8F0; font-weight: bold;">Preferred Faculty</td>
              <td style="padding: 10px; border: 1px solid #E2E8F0;"><strong>${data.preferredTutor}</strong></td>
            </tr>
            <tr style="background: #F8FAFC;">
              <td style="padding: 10px; border: 1px solid #E2E8F0; font-weight: bold;">Learning Mode</td>
              <td style="padding: 10px; border: 1px solid #E2E8F0; text-transform: capitalize;">${data.preferredMode}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #E2E8F0; font-weight: bold;">Timestamp</td>
              <td style="padding: 10px; border: 1px solid #E2E8F0;">${timestamp}</td>
            </tr>
          </table>

          <div style="background: #F0F7FF; border-left: 4px solid #0B4982; padding: 14px; border-radius: 4px; margin: 16px 0;">
            <p style="margin: 0 0 6px 0; font-weight: bold; color: #0B4982;">Learning Goals / Message:</p>
            <p style="margin: 0; color: #1E293B; white-space: pre-wrap;">${data.message}</p>
          </div>
        </div>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL || "TutoLearner Admissions <admissions@tutolearner.in>",
        to: [recipient],
        subject: emailSubject,
        html: htmlBody,
      }),
    });

    if (res.ok) {
      return { success: true };
    } else {
      const err = await res.text().catch(() => "Resend API error");
      console.error("[Resend Email Error]:", err);
      return { success: false, error: err };
    }
  } catch (error) {
    console.error("[Resend Exception]:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Error sending email via Resend",
    };
  }
}

/**
 * Dispatch automated WhatsApp notification via Meta WhatsApp Business Cloud API if configured.
 * Recipient: +91 9827118949
 */
async function sendWhatsAppNotification(
  data: EnquiryFormData,
  referenceId: string
): Promise<{ success: boolean; error?: string }> {
  const token = process.env.WHATSAPP_API_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const recipientPhone = process.env.WHATSAPP_RECIPIENT_PHONE || DEFAULT_WHATSAPP_RECIPIENT;

  if (!token || !phoneNumberId) {
    return { success: false, error: "WhatsApp Business Cloud API credentials not configured" };
  }

  try {
    const messageText = `*🎓 New TutoLearner Enquiry [${referenceId}]*\n\n` +
      `*Name:* ${data.fullName} (${data.userRole})\n` +
      `*Phone:* ${data.phone}\n` +
      `*Email:* ${data.email}\n` +
      `*Grade:* ${data.studentGrade}\n` +
      `*Subject:* ${data.subject}\n` +
      `*Tutor:* ${data.preferredTutor}\n` +
      `*Mode:* ${data.preferredMode}\n` +
      `*Goals:* ${data.message.slice(0, 200)}${data.message.length > 200 ? "..." : ""}`;

    const res = await fetch(`https://graph.facebook.com/v19.0/${phoneNumberId}/messages`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: recipientPhone.replace(/[^0-9]/g, ""),
        type: "text",
        text: { body: messageText },
      }),
    });

    if (res.ok) {
      return { success: true };
    } else {
      const err = await res.text().catch(() => "WhatsApp API error");
      console.error("[WhatsApp Cloud API Error]:", err);
      return { success: false, error: err };
    }
  } catch (error) {
    console.error("[WhatsApp Exception]:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Error sending WhatsApp message",
    };
  }
}

/**
 * Main Lead Processing Pipeline
 * 
 * Flow:
 * 1. Validate payload and generate distinct reference code.
 * 2. Store row in Google Sheets (Primary Lead Database).
 *    - IF Google Sheets is configured and fails, abort and return failure to client (never show fake success).
 * 3. Asynchronously dispatch Email notification to tutolearner.edu@gmail.com.
 *    - Email failure does NOT fail the lead.
 * 4. Asynchronously dispatch WhatsApp notification to +91 9827118949 if configured.
 *    - WhatsApp failure does NOT fail the lead.
 * 5. Return success result with reference ID and notification statuses.
 */
export async function processEnquiry(
  data: EnquiryFormData
): Promise<EnquirySubmissionResult> {
  const referenceId = "TUTO-" + Math.floor(100000 + Math.random() * 900000).toString();
  const timestamp = new Date().toISOString();

  // 1. Google Sheets Storage (Primary Database)
  const isSheetsConfigured = Boolean(process.env.GOOGLE_SHEETS_WEBHOOK_URL);
  let sheetsStatus: "stored" | "failed" | "not_configured" = "not_configured";

  if (isSheetsConfigured) {
    const sheetsResult = await saveLeadToGoogleSheets(data, referenceId, timestamp);
    if (!sheetsResult.success) {
      console.error(`[Lead Processing Error] Google Sheets write failed for [${referenceId}]: ${sheetsResult.error}`);
      throw new Error(`Failed to persist lead to Google Sheets: ${sheetsResult.error}`);
    }
    sheetsStatus = "stored";
  } else {
    // In local dev without env vars, log and allow graceful testing
    console.info(`[Lead Processing] GOOGLE_SHEETS_WEBHOOK_URL not configured. Simulating lead storage for [${referenceId}].`);
  }

  // 2. Email Notification to tutolearner.edu@gmail.com
  let emailStatus: "sent" | "failed" | "not_configured" = "not_configured";
  if (process.env.RESEND_API_KEY) {
    const emailResult = await sendResendEmailNotification(data, referenceId, timestamp);
    emailStatus = emailResult.success ? "sent" : "failed";
  }

  // 3. WhatsApp Notification to +91 9827118949
  let whatsappStatus: "sent" | "failed" | "not_configured" = "not_configured";
  if (process.env.WHATSAPP_API_TOKEN && process.env.WHATSAPP_PHONE_NUMBER_ID) {
    const waResult = await sendWhatsAppNotification(data, referenceId);
    whatsappStatus = waResult.success ? "sent" : "failed";
  }

  return {
    success: true,
    referenceId,
    timestamp,
    data,
    message: "Enquiry recorded successfully. A faculty coordinator will review and contact you.",
    notifications: {
      sheets: sheetsStatus,
      email: emailStatus,
      whatsapp: whatsappStatus,
    },
  };
}
