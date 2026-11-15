import type { Metadata } from "next";
import { LessonsPageContent } from "@/components/LocalizedPages";

export const metadata: Metadata = {
  title: "Lessons & Pricing",
  description: "Compare individual and group Korean lessons at Korean Hub, including pricing and what's included.",
};

export default function LessonsPage() {
  return <LessonsPageContent />;
}
