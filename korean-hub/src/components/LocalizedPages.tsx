"use client";

import Image from "next/image";
import { Facebook, Instagram, Languages, Mail, Phone, GraduationCap, Sparkles } from "lucide-react";
import { CTASection, ErrorState, Reveal, SectionTitle } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";
import { LessonCard } from "@/components/LessonCard";
import { getPrimaryTeacher } from "@/siteContent";
import { useI18n } from "@/i18n";

export function LessonsPageContent() {
  const { content, l } = useI18n();

  return (
    <>
      <section className="border-b border-ink/10 py-20 sm:py-28">
        <div className="container-hub">
          <SectionTitle title={l("pages.lessons.title")} description={l("pages.lessons.description")} />
        </div>
      </section>

      <section className="border-b border-ink/10 bg-porcelain-dim py-20 sm:py-28">
        <div className="container-hub grid gap-6 sm:grid-cols-2">
          {content.lessons.map((lesson, index) => (
            <Reveal key={lesson.id} delay={index * 0.1}>
              <LessonCard lesson={lesson} detailed />
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection
        headline={l("pages.lessons.unsureTitle")}
        description={l("pages.lessons.unsureDescription")}
        ctaLabel={l("pages.lessons.startRegistration")}
        ctaHref="/book"
      />
    </>
  );
}

export function TeacherPageContent() {
  const { content, l } = useI18n();
  const teacher = getPrimaryTeacher(content);

  return (
    <>
      <section className="border-b border-ink/10 py-20 sm:py-28">
        <div className="container-hub grid items-start gap-12 lg:grid-cols-[0.7fr_1fr]">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-celadon-100">
              <Image
                src={teacher.photo}
                alt={`${l("pages.teacher.portrait")}: ${teacher.name}`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 35vw, 90vw"
                priority
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-sm font-medium text-celadon-700">{l("pages.teacher.founder")}</p>
            <h1 className="mt-2 font-display text-5xl tracking-tight sm:text-6xl">{teacher.name}</h1>
            <p className="mt-2 text-ink/60">{teacher.role}</p>

            <div className="mt-8 space-y-5">
              {teacher.fullBio.map((paragraph, index) => (
                <p key={index} className="max-w-prose text-lg text-ink/80">
                  {paragraph}
                </p>
              ))}
            </div>

            <dl className="mt-10 grid gap-6 border-t border-ink/10 pt-8 sm:grid-cols-3">
              <div>
                <dt className="flex items-center gap-2 text-sm text-ink/50">
                  <Sparkles className="h-4 w-4" aria-hidden="true" /> {l("pages.teacher.experience")}
                </dt>
                <dd className="mt-1 font-display text-2xl">
                  {teacher.experienceYears > 0
                    ? `${teacher.experienceYears}+ ${l("pages.teacher.years")}`
                    : l("pages.teacher.experiencePlaceholder")}
                </dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 text-sm text-ink/50">
                  <GraduationCap className="h-4 w-4" aria-hidden="true" /> {l("pages.teacher.qualifications")}
                </dt>
                <dd className="mt-1 space-y-0.5 text-sm">
                  {teacher.qualifications.map((qualification) => (
                    <p key={qualification}>{qualification}</p>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 text-sm text-ink/50">
                  <Languages className="h-4 w-4" aria-hidden="true" /> {l("pages.teacher.languages")}
                </dt>
                <dd className="mt-1 text-sm">{teacher.languagesSpoken.join(", ")}</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-celadon-900 py-20 text-porcelain sm:py-28">
        <div className="container-hub max-w-2xl">
          <Reveal>
            <p className="text-sm font-medium text-ochre-300">{l("pages.teacher.philosophy")}</p>
            <p className="mt-4 font-display text-3xl leading-snug sm:text-4xl">
              {teacher.teachingPhilosophy}
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection
        headline={`${l("pages.teacher.ctaHeadline")} ${teacher.name}`}
        ctaLabel={l("pages.teacher.requestLesson")}
        ctaHref="/book"
      />
    </>
  );
}

export function ForStudentsPageContent() {
  const { content } = useI18n();
  const page = content.forStudents;

  return (
    <>
      <section className="border-b border-ink/10 py-20 sm:py-28">
        <div className="container-hub">
          <SectionTitle title={page.title} description={page.description} />
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-hub grid gap-12 sm:grid-cols-2">
          {page.sections.map((section, index) => (
            <Reveal key={section.title} delay={(index % 2) * 0.1}>
              <h2 className="font-display text-2xl">{section.title}</h2>
              <p className="mt-3 max-w-prose text-ink/70">{section.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection
        headline={page.ctaHeadline}
        ctaLabel={page.ctaLabel}
        ctaHref="/book"
      />
    </>
  );
}

export function ContactPageContent() {
  const { content, l } = useI18n();

  return (
    <section className="py-20 sm:py-28">
      <div className="container-hub grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionTitle title={l("pages.contact.title")} description={l("pages.contact.description")} />

          <ul className="mt-10 space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-celadon-600" aria-hidden="true" />
              <a href={`mailto:${content.contact.email}`} className="hover:text-celadon-700">
                {content.contact.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-celadon-600" aria-hidden="true" />
              <a href={`tel:${content.contact.phone}`} className="hover:text-celadon-700">
                {content.contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Instagram className="h-4 w-4 text-celadon-600" aria-hidden="true" />
              <a href={content.socialMedia.instagram} className="hover:text-celadon-700">
                Instagram
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Facebook className="h-4 w-4 text-celadon-600" aria-hidden="true" />
              <a href={content.socialMedia.facebook} className="hover:text-celadon-700">
                Facebook
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}

export function NotFoundContent() {
  const { l } = useI18n();
  return <ErrorState title={l("pages.notFound.title")} description={l("pages.notFound.description")} />;
}
