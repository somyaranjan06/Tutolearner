import * as z from "zod";

export const enquirySchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters.")
    .max(100, "Full name is too long."),
  userRole: z.enum(["parent", "student"], {
    required_error: "Please select whether you are a parent or student.",
  }),
  email: z
    .string()
    .email("Please provide a valid email address (e.g. name@example.com)."),
  phone: z
    .string()
    .min(7, "Please enter a valid phone or WhatsApp number (at least 7 digits).")
    .max(16, "Phone number is too long.")
    .regex(
      /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/,
      "Please enter a valid phone format (e.g. +91 98765 43210 or 9876543210)."
    ),
  studentGrade: z.enum(
    [
      "Grade 6-8 (Middle School)",
      "Grade 9-10 (Secondary Board Prep)",
      "Grade 11-12 (Senior Secondary / Foundation)",
      "Specialized / Competitive Foundation",
    ],
    {
      required_error: "Please select student grade level.",
    }
  ),
  subject: z.enum(
    ["Mathematics", "Science", "Social Science", "English", "Multiple Subjects"],
    {
      required_error: "Please select a subject of interest.",
    }
  ),
  preferredTutor: z.string().min(1, "Please select a tutor preference."),
  preferredMode: z.enum(["online", "in-person", "hybrid"], {
    required_error: "Please select your preferred mode of learning.",
  }),
  message: z
    .string()
    .min(10, "Please describe the student's learning goals or challenges (at least 10 characters).")
    .max(1000, "Message cannot exceed 1000 characters."),
});

export type EnquiryFormData = z.infer<typeof enquirySchema>;

export interface EnquirySubmissionResult {
  success: boolean;
  referenceId: string;
  timestamp: string;
  data: EnquiryFormData;
  message: string;
}
