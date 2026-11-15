import { z } from "zod";
import { siteContent } from "@/siteContent";

// Allowed values come from siteContent.ts, so editing the lists there
// automatically updates what the form (and the server) will accept.
function ids(list: Array<{ id: string }>): [string, ...string[]] {
  return list.map((item) => item.id) as [string, ...string[]];
}

/**
 * Used twice: in the browser for instant feedback, and again on the
 * server in /api/registrations (never trust the browser alone).
 */
export const registrationSchema = z.object({
  fullName: z.string().trim().min(2, "validation.fullName").max(80, "validation.nameTooLong"),
  email: z.string().trim().email("validation.email").max(120, "validation.emailTooLong"),
  phone: z
    .string()
    .trim()
    .min(6, "validation.phone")
    .max(20, "validation.phoneTooLong")
    .regex(/^[0-9+\s()-]+$/, "validation.phoneCharacters"),
  koreanLevel: z.enum(ids(siteContent.koreanLevels), {
    errorMap: () => ({ message: "validation.koreanLevel" }),
  }),
  lessonType: z.enum(ids(siteContent.lessons), {
    errorMap: () => ({ message: "validation.lessonType" }),
  }),
  preferredDays: z
    .array(z.enum(ids(siteContent.booking.days)))
    .min(1, "validation.preferredDays"),
  preferredTime: z.enum(ids(siteContent.booking.timeSlots), {
    errorMap: () => ({ message: "validation.preferredTime" }),
  }),
  goals: z.string().trim().max(600, "validation.maxCharacters").optional(),
  additionalInfo: z.string().trim().max(600, "validation.maxCharacters").optional(),
});

export type RegistrationFormValues = z.infer<typeof registrationSchema>;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "validation.fullName").max(80, "validation.nameTooLong"),
  email: z.string().trim().email("validation.email").max(254, "validation.emailTooLong"),
  message: z.string().trim().min(10, "validation.messageTooShort").max(2000, "validation.messageTooLong"),
});
