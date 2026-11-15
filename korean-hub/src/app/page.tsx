import { Hero, VocabCards } from "@/components/HomeHero";
import {
  FAQSection,
  HomeFinalCTA,
  HowItWorks,
  LessonsPreview,
  TeacherPreview,
  Testimonials,
  WhyKoreanHub,
} from "@/components/HomeSections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <VocabCards />
      <WhyKoreanHub />
      <LessonsPreview />
      <TeacherPreview />
      <HowItWorks />
      <Testimonials />
      <FAQSection />
      <HomeFinalCTA />
    </>
  );
}
