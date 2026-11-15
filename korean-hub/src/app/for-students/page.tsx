import type { Metadata } from "next";
import { ForStudentsPageContent } from "@/components/LocalizedPages";

export const metadata: Metadata = {
  title: "For Students",
  description: "Who Korean Hub lessons are for, how online lessons work, and what to expect after you register.",
};

export default function ForStudentsPage() {
  return <ForStudentsPageContent />;
}
