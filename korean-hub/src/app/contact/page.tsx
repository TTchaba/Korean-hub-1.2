import type { Metadata } from "next";
import { ContactPageContent } from "@/components/LocalizedPages";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Korean Hub by email, phone, or social media.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
