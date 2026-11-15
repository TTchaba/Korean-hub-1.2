import type { Metadata } from "next";
import { TeacherPageContent } from "@/components/LocalizedPages";

export const metadata: Metadata = {
  title: "Your Teacher",
  description: "Meet the teacher behind Korean Hub — background, qualifications, and teaching approach.",
};

export default function TeacherPage() {
  return <TeacherPageContent />;
}
