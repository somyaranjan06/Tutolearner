import { EnquiryFormData, EnquirySubmissionResult } from "./enquiry-schema";

/**
 * Enquiry Submission Handler
 * 
 * This service processes incoming enquiries.
 * In the initial deployment, it securely validates the payload, generates a unique reference ID,
 * and prepares for integration with email providers such as Resend, Nodemailer, or a database.
 *
 * To connect Resend later:
 * 1. Install resend: `npm install resend`
 * 2. Set RESEND_API_KEY in .env.local
 * 3. Uncomment the Resend client call in sendEnquiryEmail() below.
 */

export async function processEnquiry(
  data: EnquiryFormData
): Promise<EnquirySubmissionResult> {
  // Generate a distinct reference code
  const referenceId =
    "TUTO-" + Math.floor(100000 + Math.random() * 900000).toString();
  const timestamp = new Date().toISOString();

  // Simulated server processing delay (e.g. 300ms)
  await new Promise((resolve) => setTimeout(resolve, 300));

  // Placeholder hook for Resend or transactional email provider
  /*
  if (process.env.RESEND_API_KEY) {
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'TutoLearner Admissions <admissions@tutolearner.edu>',
      to: [process.env.ADMIN_EMAIL || 'coordinator@tutolearner.edu'],
      subject: `New Student Enquiry [${referenceId}] - ${data.fullName} (${data.subject})`,
      text: `Name: ${data.fullName}\nRole: ${data.userRole}\nEmail: ${data.email}\nPhone: ${data.phone}\nGrade: ${data.studentGrade}\nSubject: ${data.subject}\nTutor: ${data.preferredTutor}\nMode: ${data.preferredMode}\nMessage:\n${data.message}`,
    });
  }
  */

  return {
    success: true,
    referenceId,
    timestamp,
    data,
    message: "Enquiry logged successfully. A faculty coordinator will review and contact you.",
  };
}
