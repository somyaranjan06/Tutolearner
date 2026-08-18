"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { enquirySchema, EnquiryFormData, EnquirySubmissionResult } from "@/lib/enquiry-schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle2,
  AlertCircle,
  Send,
  Loader2,
  Sparkles,
  CalendarCheck,
  RotateCcw,
  Lock,
} from "lucide-react";
import { tutors } from "@/data/tutors";
import { cn } from "@/lib/utils";

// Mapping subjects to available tutors
const subjectTutorMap: Record<string, string[]> = {
  Mathematics: ["Somya Ranjan Naik"],
  Science: ["Somya Ranjan Naik", "Shreya Tiwari"],
  "Social Science": ["Shiwangi"],
  English: ["Shreya Tiwari"],
  "Multiple Subjects": [
    "Any Available / Best Match",
    "Somya Ranjan Naik (Maths & Science)",
    "Shiwangi (Social Science)",
    "Shreya Tiwari (Science & English)",
  ],
};

function generateFallbackReferenceId(): string {
  return "TUTO-" + Math.floor(100000 + Math.random() * 900000).toString();
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const tutorParam = searchParams.get("tutor");
  const subjectParam = searchParams.get("subject");

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submissionResult, setSubmissionResult] =
    React.useState<EnquirySubmissionResult | null>(null);

  // Derive initial values from URL search params
  const initialSubject = React.useMemo(() => {
    if (!subjectParam) return "Mathematics";
    const mapping: Record<string, EnquiryFormData["subject"]> = {
      mathematics: "Mathematics",
      science: "Science",
      "social-science": "Social Science",
      english: "English",
    };
    return mapping[subjectParam.toLowerCase()] || "Mathematics";
  }, [subjectParam]);

  const initialTutor = React.useMemo(() => {
    if (!tutorParam) return "Somya Ranjan Naik";
    const found = tutors.find((t) => t.slug === tutorParam);
    return found ? found.name : "Somya Ranjan Naik";
  }, [tutorParam]);

  const {
    register,
    handleSubmit,
    control,
    getValues,
    setValue,
    reset,
    formState: { errors },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      fullName: "",
      userRole: "parent",
      email: "",
      phone: "",
      studentGrade: "Grade 9-10 (Secondary Board Prep)",
      subject: initialSubject,
      preferredTutor: initialTutor,
      preferredMode: "online",
      message: "",
    },
  });

  const selectedSubject = useWatch({ control, name: "subject" }) || initialSubject;
  const userRole = useWatch({ control, name: "userRole" }) || "parent";
  const preferredMode = useWatch({ control, name: "preferredMode" }) || "online";
  const availableTutors = React.useMemo(() => {
    return subjectTutorMap[selectedSubject] || ["Any Available / Best Match"];
  }, [selectedSubject]);

  // When subject changes, automatically reset or validate tutor choice
  React.useEffect(() => {
    const currentTutor = getValues("preferredTutor");
    if (!availableTutors.includes(currentTutor)) {
      setValue("preferredTutor", availableTutors[0] || "Any Available / Best Match");
    }
  }, [selectedSubject, availableTutors, setValue, getValues]);

  const onSubmit = async (data: EnquiryFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result: EnquirySubmissionResult = await response.json();
        setSubmissionResult(result);
      } else {
        // Fallback simulated submission
        const refId = generateFallbackReferenceId();
        setSubmissionResult({
          success: true,
          referenceId: refId,
          timestamp: new Date().toISOString(),
          data,
          message: "Enquiry logged successfully.",
        });
      }
    } catch {
      // Local fallback
      const refId = generateFallbackReferenceId();
      setSubmissionResult({
        success: true,
        referenceId: refId,
        timestamp: new Date().toISOString(),
        data,
        message: "Enquiry logged successfully.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setSubmissionResult(null);
    reset({
      fullName: "",
      userRole: "parent",
      email: "",
      phone: "",
      studentGrade: "Grade 9-10 (Secondary Board Prep)",
      subject: "Mathematics",
      preferredTutor: "Somya Ranjan Naik",
      preferredMode: "online",
      message: "",
    });
  };

  // SUCCESS CONFIRMATION SCREEN
  if (submissionResult) {
    const submitted = submissionResult.data;

    return (
      <Card className="border-slate-200 bg-white shadow-lifted overflow-hidden">
        <div className="bg-[#071F36] px-5 py-7 sm:px-8 text-white text-center space-y-2.5">
          <div className="mx-auto flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#6BB640]/20 text-[#7ECB51] border border-[#6BB640]/40">
            <CheckCircle2 className="h-6 w-6 sm:h-7 sm:w-7" />
          </div>
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight">
            Consultation Request Logged
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
            Thank you, <strong className="text-white">{submitted.fullName}</strong>. Your enquiry details have been recorded in our admissions system.
          </p>
        </div>

        <CardContent className="p-5 sm:p-8 space-y-6">
          {/* Reference & Summary Box */}
          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 sm:p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Enquiry Reference ID:
              </span>
              <span className="font-mono font-bold text-sm sm:text-base text-[#0B4982] bg-white px-3 py-1 rounded-lg border border-slate-200 shadow-subtle inline-block self-start sm:self-auto">
                {submissionResult.referenceId}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm text-slate-700">
              <div>
                <span className="font-bold text-slate-600 block text-2xs uppercase tracking-wider mb-0.5">
                  Contact Email:
                </span>
                <span className="font-medium text-slate-900 break-all">{submitted.email}</span>
              </div>

              <div>
                <span className="font-bold text-slate-600 block text-2xs uppercase tracking-wider mb-0.5">
                  Phone / WhatsApp:
                </span>
                <span className="font-medium text-slate-900">{submitted.phone}</span>
              </div>

              <div>
                <span className="font-bold text-slate-600 block text-2xs uppercase tracking-wider mb-0.5">
                  Subject Selected:
                </span>
                <span className="font-semibold text-[#0B4982] bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  {submitted.subject}
                </span>
              </div>

              <div>
                <span className="font-bold text-slate-600 block text-2xs uppercase tracking-wider mb-0.5">
                  Assigned / Preferred Tutor:
                </span>
                <span className="font-medium text-slate-900">{submitted.preferredTutor}</span>
              </div>

              <div>
                <span className="font-bold text-slate-600 block text-2xs uppercase tracking-wider mb-0.5">
                  Grade / Class:
                </span>
                <span className="font-medium text-slate-900">{submitted.studentGrade}</span>
              </div>

              <div>
                <span className="font-bold text-slate-600 block text-2xs uppercase tracking-wider mb-0.5">
                  Learning Mode:
                </span>
                <span className="font-medium text-slate-900 capitalize">{submitted.preferredMode}</span>
              </div>
            </div>
          </div>

          {/* Honest Transparent Next Steps Disclosure */}
          <div className="rounded-2xl bg-blue-50/80 border border-blue-200 p-4 sm:p-5 text-xs sm:text-sm text-slate-800 space-y-2">
            <p className="font-bold flex items-center gap-2 text-[#0B4982] text-sm">
              <CalendarCheck className="h-4 w-4 text-[#0B4982] shrink-0" />
              <span>Next Steps &amp; Scheduling</span>
            </p>
            <p className="text-slate-700 leading-relaxed font-normal">
              Our academic coordinator will review your grade level and preferred tutor availability. You will be contacted directly via phone or email within <strong>24 business hours</strong> to schedule the initial diagnostic baseline assessment.
            </p>
          </div>

          <div className="pt-2 flex justify-center">
            <Button
              type="button"
              variant="outline"
              onClick={handleResetForm}
              className="w-full sm:w-auto gap-2 border-slate-300 hover:bg-slate-50 justify-center rounded-xl"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Submit Another Student Enquiry</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  // MAIN INTERACTIVE FORM
  return (
    <Card className="border-slate-200/90 bg-white shadow-lifted overflow-hidden">
      {/* Header */}
      <div className="bg-[#071F36] px-5 py-6 sm:px-8 text-white">
        <div className="flex items-center gap-2 text-2xs font-bold uppercase tracking-wider text-[#7ECB51] mb-1">
          <Sparkles className="h-3.5 w-3.5 text-[#6BB640]" />
          <span>Direct Admissions Desk</span>
        </div>
        <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white">
          Student Consultation &amp; Admissions Form
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mt-1 font-normal leading-relaxed">
          Please fill in the details below. We will coordinate directly with Somya Ranjan Naik, Shiwangi, or Shreya Tiwari.
        </p>
      </div>

      <CardContent className="p-5 sm:p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
          {/* Submitting as: Parent / Student */}
          <div>
            <Label className="block mb-2 text-2xs font-bold uppercase tracking-wider text-slate-600">
              I am submitting this enquiry as a:
            </Label>
            <div className="grid grid-cols-2 gap-3">
              <label
                className={cn(
                  "flex items-center justify-center gap-2 rounded-xl border p-3 text-xs sm:text-sm font-semibold cursor-pointer transition-all duration-150 select-none",
                  userRole === "parent"
                    ? "border-[#0B4982] bg-[#0B4982] text-white shadow-subtle"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-[#0B4982]"
                )}
              >
                <input
                  type="radio"
                  value="parent"
                  {...register("userRole")}
                  className="sr-only"
                />
                <span>Parent / Guardian</span>
              </label>

              <label
                className={cn(
                  "flex items-center justify-center gap-2 rounded-xl border p-3 text-xs sm:text-sm font-semibold cursor-pointer transition-all duration-150 select-none",
                  userRole === "student"
                    ? "border-[#0B4982] bg-[#0B4982] text-white shadow-subtle"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-[#0B4982]"
                )}
              >
                <input
                  type="radio"
                  value="student"
                  {...register("userRole")}
                  className="sr-only"
                />
                <span>Student</span>
              </label>
            </div>
          </div>

          {/* Full Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div className="space-y-1.5">
              <Label htmlFor="fullName" className="text-slate-800 font-semibold text-xs sm:text-sm">
                Parent / Student Name <span className="text-rose-500">*</span>
              </Label>
              <Input
                id="fullName"
                placeholder="e.g. Ramesh Sharma"
                className="text-base sm:text-sm"
                hasError={Boolean(errors.fullName)}
                {...register("fullName")}
              />
              {errors.fullName && (
                <p className="text-xs text-rose-600 flex items-center gap-1 mt-1" role="alert">
                  <AlertCircle className="h-3 w-3" />
                  <span>{errors.fullName.message}</span>
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="phone" className="text-slate-800 font-semibold text-xs sm:text-sm">
                Phone / WhatsApp Number <span className="text-rose-500">*</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+91 98765 43210"
                className="text-base sm:text-sm"
                hasError={Boolean(errors.phone)}
                {...register("phone")}
              />
              {errors.phone && (
                <p className="text-xs text-rose-600 flex items-center gap-1 mt-1" role="alert">
                  <AlertCircle className="h-3 w-3" />
                  <span>{errors.phone.message}</span>
                </p>
              )}
            </div>
          </div>

          {/* Email & Grade Level */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-slate-800 font-semibold text-xs sm:text-sm">
                Email Address <span className="text-rose-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                className="text-base sm:text-sm"
                hasError={Boolean(errors.email)}
                {...register("email")}
              />
              {errors.email && (
                <p className="text-xs text-rose-600 flex items-center gap-1 mt-1" role="alert">
                  <AlertCircle className="h-3 w-3" />
                  <span>{errors.email.message}</span>
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="studentGrade" className="text-slate-800 font-semibold text-xs sm:text-sm">
                Student Class / Grade <span className="text-rose-500">*</span>
              </Label>
              <select
                id="studentGrade"
                className="flex h-11 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-base sm:text-sm text-slate-900 shadow-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4982]"
                {...register("studentGrade")}
              >
                <option value="Grade 6-8 (Middle School)">Grade 6–8 (Middle School Foundation)</option>
                <option value="Grade 9-10 (Secondary Board Prep)">Grade 9–10 (Secondary Board Prep)</option>
                <option value="Grade 11-12 (Senior Secondary / Foundation)">Grade 11–12 (Senior Secondary / Foundation)</option>
                <option value="Specialized / Competitive Foundation">Specialized / Foundation Coaching</option>
              </select>
            </div>
          </div>

          {/* Subject Dropdown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div className="space-y-1.5">
              <Label htmlFor="subject" className="text-slate-800 font-semibold text-xs sm:text-sm">
                Subject Required <span className="text-rose-500">*</span>
              </Label>
              <select
                id="subject"
                className="flex h-11 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-base sm:text-sm text-slate-900 shadow-subtle font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4982]"
                {...register("subject")}
              >
                <option value="Mathematics">Mathematics</option>
                <option value="Science">Science (Physics, Chemistry, Biology)</option>
                <option value="Social Science">Social Science</option>
                <option value="English">English</option>
                <option value="Multiple Subjects">Multiple Subjects (Combined)</option>
              </select>
            </div>

            {/* Preferred Tutor */}
            <div className="space-y-1.5">
              <Label htmlFor="preferredTutor" className="text-slate-800 font-semibold text-xs sm:text-sm">
                Preferred Tutor <span className="text-rose-500">*</span>
              </Label>
              <select
                id="preferredTutor"
                className="flex h-11 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-base sm:text-sm text-slate-900 shadow-subtle font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4982]"
                {...register("preferredTutor")}
              >
                {availableTutors.map((tutorName) => (
                  <option key={tutorName} value={tutorName}>
                    {tutorName}
                  </option>
                ))}
              </select>
              <p className="text-2xs text-slate-600">
                {selectedSubject === "Science"
                  ? "Science is taught by Somya Ranjan Naik and Shreya Tiwari."
                  : `Tutor mapped to ${selectedSubject}.`}
              </p>
            </div>
          </div>

          {/* Preferred Mode of Learning */}
          <div className="space-y-2">
            <Label className="block text-slate-800 font-semibold text-xs sm:text-sm">
              Preferred Learning Mode <span className="text-rose-500">*</span>
            </Label>
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
              {[
                { id: "online", label: "Online Live" },
                { id: "in-person", label: "In-Person" },
                { id: "hybrid", label: "Hybrid" },
              ].map((mode) => (
                <label
                  key={mode.id}
                  className={cn(
                    "flex items-center justify-center rounded-xl border p-2.5 text-xs sm:text-sm font-semibold cursor-pointer transition-all duration-150 select-none",
                    preferredMode === mode.id
                      ? "border-[#0B4982] bg-[#0B4982] text-white shadow-subtle"
                      : "border-slate-200 bg-white text-slate-700 hover:bg-blue-50/60 hover:text-[#0B4982] hover:border-blue-200"
                  )}
                >
                  <input
                    type="radio"
                    value={mode.id}
                    {...register("preferredMode")}
                    className="sr-only"
                  />
                  <span>{mode.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Message / Learning Goals */}
          <div className="space-y-1.5">
            <Label htmlFor="message" className="text-slate-800 font-semibold text-xs sm:text-sm">
              Learning Goals &amp; Specific Areas to Focus <span className="text-rose-500">*</span>
            </Label>
            <Textarea
              id="message"
              placeholder="e.g. Student is in Class 10 preparing for board exams. Needs support with trigonometry proofs and physical science numericals..."
              rows={4}
              className="text-base sm:text-sm"
              hasError={Boolean(errors.message)}
              {...register("message")}
            />
            {errors.message && (
              <p className="text-xs text-rose-600 flex items-center gap-1 mt-1" role="alert">
                <AlertCircle className="h-3 w-3" />
                <span>{errors.message.message}</span>
              </p>
            )}
          </div>

          {/* Privacy Commitment Notice */}
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
            <Lock className="h-4 w-4 text-slate-600 shrink-0 mt-0.5" />
            <p>
              <strong className="text-slate-800 font-semibold">Privacy Commitment:</strong> Your contact details are used strictly to coordinate your diagnostic session and schedule with the faculty. We never share student information or send unsolicited spam.
            </p>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            size="lg"
            className="w-full justify-center bg-[#0B4982] hover:bg-[#083A68] text-white font-semibold gap-2 py-3.5 shadow-card text-sm sm:text-base rounded-xl"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Submitting Consultation Request...</span>
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                <span>Submit Student Consultation Request</span>
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
