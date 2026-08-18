/**
 * ============================================================================
 * TUTOLEARNER GOOGLE SHEETS LEAD-CAPTURE & NOTIFICATION WEBHOOK (Google Apps Script)
 * ============================================================================
 * 
 * INSTRUCTIONS FOR DEPLOYMENT:
 * 1. Open your Google Sheet where you want leads to be saved.
 * 2. In the top menu, click: Extensions > Apps Script.
 * 3. Delete any existing code in the editor and PASTE this entire script.
 * 4. (Optional) Set your custom SECRET_TOKEN in the CONFIG object below or in Project Settings > Script Properties.
 * 5. Click "Save" (disk icon) or Ctrl+S.
 * 6. Click "Deploy" > "New deployment".
 * 7. Select type: "Web app".
 * 8. Set the following fields:
 *    - Description: "TutoLearner Lead Webhook"
 *    - Execute as: "Me" (your Google account)
 *    - Who has access: "Anyone" (allows Vercel Next.js server to post securely with secret token)
 * 9. Click "Deploy", authorize permissions when prompted.
 * 10. Copy the Web App URL (starts with https://script.google.com/macros/s/.../exec).
 * 11. Add it to your Vercel / .env.local environment variables:
 *     GOOGLE_SHEETS_WEBHOOK_URL="https://script.google.com/macros/s/.../exec"
 *     GOOGLE_SHEETS_SECRET_TOKEN="your_chosen_secret_token_here"
 * ============================================================================
 */

const CONFIG = {
  // Shared secret token to prevent unauthorized submissions.
  // Must match GOOGLE_SHEETS_SECRET_TOKEN in your Next.js environment.
  SECRET_TOKEN: "tutolearner_secure_lead_token_2026",
  
  // Sheet tab name
  SHEET_NAME: "Enquiries",
  
  // Email recipient for notifications (uses Google's built-in quota, 100/day free or 1500/day Workspace)
  NOTIFICATION_EMAIL: "tutolearner.edu@gmail.com",
  
  // Enable or disable direct email dispatch from Google Apps Script
  ENABLE_EMAIL_NOTIFICATION: true,
};

/**
 * Handle HTTP GET Requests (Health Check)
 */
function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({
      status: "ok",
      service: "TutoLearner Google Sheets Lead Webhook",
      timestamp: new Date().toISOString(),
      sheetName: CONFIG.SHEET_NAME,
      notificationEmail: CONFIG.NOTIFICATION_EMAIL,
    })
  ).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Handle HTTP POST Requests (New Lead Submission)
 */
function doPost(e) {
  const lock = LockService.getScriptLock();
  
  // Wait up to 30 seconds for any concurrent writes to finish safely
  try {
    lock.waitLock(30000);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        error: "Server busy: Could not acquire lock to write lead",
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }

  try {
    if (!e || !e.postData || !e.postData.contents) {
      return ContentService.createTextOutput(
        JSON.stringify({
          success: false,
          error: "Invalid request: No payload received",
        })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    const payload = JSON.parse(e.postData.contents);
    const data = payload.data || payload;
    const providedSecret = payload.secretToken || (e.parameter && e.parameter.secret);

    // 1. Validate Secret Token
    const configuredSecret = PropertiesService.getScriptProperties().getProperty("SECRET_TOKEN") || CONFIG.SECRET_TOKEN;
    if (configuredSecret && providedSecret !== configuredSecret) {
      return ContentService.createTextOutput(
        JSON.stringify({
          success: false,
          error: "Unauthorized: Invalid secret token",
        })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    // 2. Validate Required Fields
    if (!data.fullName || !data.email || !data.phone || !data.subject) {
      return ContentService.createTextOutput(
        JSON.stringify({
          success: false,
          error: "Missing required fields: fullName, email, phone, and subject are mandatory",
        })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    const referenceId = payload.referenceId || data.referenceId || ("TUTO-" + Math.floor(100000 + Math.random() * 900000));
    const timestamp = payload.timestamp || data.timestamp || new Date().toISOString();
    const formattedDate = Utilities.formatDate(new Date(), "Asia/Kolkata", "yyyy-MM-dd HH:mm:ss") + " IST";

    // 3. Access or Create Sheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(CONFIG.SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(CONFIG.SHEET_NAME);
    }

    // 4. Initialize Headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      const headers = [
        "Reference ID",
        "Date & Time (IST)",
        "Lead Status",
        "Enquiry Type",
        "Student / Parent Name",
        "Phone / WhatsApp",
        "Email",
        "Grade / Class",
        "Subject",
        "Preferred Tutor",
        "Learning Mode",
        "Learning Goals / Message",
        "Raw Timestamp"
      ];
      
      sheet.appendRow(headers);
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground("#071F36");
      headerRange.setFontColor("#FFFFFF");
      headerRange.setFontWeight("bold");
      headerRange.setFontFamily("Arial");
      sheet.setFrozenRows(1);
    }

    // 5. Append New Lead Row
    const roleLabel = data.userRole === "parent" ? "Parent / Guardian" : (data.userRole === "student" ? "Student" : (data.userRole || "Parent / Guardian"));
    const rowValues = [
      referenceId,
      formattedDate,
      "New",
      roleLabel,
      data.fullName,
      data.phone,
      data.email,
      data.studentGrade,
      data.subject,
      data.preferredTutor,
      data.preferredMode,
      data.message,
      timestamp
    ];

    sheet.appendRow(rowValues);
    const lastRow = sheet.getLastRow();

    // Auto-format the reference ID and status cells
    sheet.getRange(lastRow, 1).setFontWeight("bold").setFontFamily("Courier New");
    sheet.getRange(lastRow, 3).setBackground("#EBF5FB").setFontColor("#1B4F72").setFontWeight("bold");

    // 6. Send Email Notification to tutolearner.edu@gmail.com
    let emailSent = false;
    if (CONFIG.ENABLE_EMAIL_NOTIFICATION && CONFIG.NOTIFICATION_EMAIL) {
      try {
        const emailSubject = "🎓 New Student Enquiry [" + referenceId + "] - " + data.fullName + " (" + data.subject + ")";
        const htmlBody = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #E2E8F0; border-radius: 12px; overflow: hidden; background: #ffffff;">
            <div style="background: #071F36; padding: 24px; color: #ffffff; text-align: center;">
              <h2 style="margin: 0 0 6px 0; font-size: 22px; color: #ffffff;">New Student Consultation Request</h2>
              <p style="margin: 0; color: #7ECB51; font-weight: bold; font-size: 14px;">Reference ID: ${referenceId}</p>
            </div>
            
            <div style="padding: 24px; color: #334155; font-size: 14px; line-height: 1.6;">
              <p style="margin-top: 0;">A new enquiry has been submitted on <strong>tutolearner.in</strong> and recorded in Google Sheets.</p>
              
              <table style="width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 14px;">
                <tr style="background: #F8FAFC;">
                  <td style="padding: 10px; border: 1px solid #E2E8F0; font-weight: bold; width: 35%;">Applicant Name</td>
                  <td style="padding: 10px; border: 1px solid #E2E8F0;"><strong>${data.fullName}</strong> (${roleLabel})</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border: 1px solid #E2E8F0; font-weight: bold;">Phone / WhatsApp</td>
                  <td style="padding: 10px; border: 1px solid #E2E8F0;"><a href="tel:${data.phone}" style="color: #0B4982; font-weight: bold;">${data.phone}</a> &nbsp;|&nbsp; <a href="https://wa.me/${data.phone.replace(/[^0-9]/g, '')}" style="color: #25D366; font-weight: bold;">WhatsApp Chat</a></td>
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
                  <td style="padding: 10px; border: 1px solid #E2E8F0; font-weight: bold;">Time (IST)</td>
                  <td style="padding: 10px; border: 1px solid #E2E8F0;">${formattedDate}</td>
                </tr>
              </table>

              <div style="background: #F0F7FF; border-left: 4px solid #0B4982; padding: 14px; border-radius: 4px; margin: 16px 0;">
                <p style="margin: 0 0 6px 0; font-weight: bold; color: #0B4982;">Learning Goals / Message from Student/Parent:</p>
                <p style="margin: 0; color: #1E293B; white-space: pre-wrap;">${data.message}</p>
              </div>

              <p style="font-size: 12px; color: #64748B; margin-bottom: 0;">Lead Status: <strong>New</strong> | Recorded on Row #${lastRow} in TutoLearner Google Sheet.</p>
            </div>
          </div>
        `;

        MailApp.sendEmail({
          to: CONFIG.NOTIFICATION_EMAIL,
          subject: emailSubject,
          htmlBody: htmlBody,
        });
        emailSent = true;
      } catch (mailErr) {
        Logger.log("Email notification error: " + mailErr.toString());
      }
    }

    // 7. Return Clean JSON Success Response
    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        referenceId: referenceId,
        row: lastRow,
        timestamp: formattedDate,
        emailSent: emailSent,
        message: "Lead successfully recorded in Google Sheets.",
      })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log("Error processing POST: " + error.toString());
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        error: error.toString(),
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
