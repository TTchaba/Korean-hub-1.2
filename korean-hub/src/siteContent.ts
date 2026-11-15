import { en } from "@/locales/en";

export const siteContent = en.content;

export type Lesson = (typeof siteContent.lessons)[number];
export type SiteContent = typeof siteContent;

export function getPrimaryTeacher(content: SiteContent = siteContent) {
  const teacher = content.teachers[0];
  if (!teacher) throw new Error("siteContent.teachers must contain at least one teacher.");
  return teacher;
}

export function findLessonById(
  lessonId: string,
  content: SiteContent = siteContent
): Lesson | undefined {
  return content.lessons.find((lesson) => lesson.id === lessonId);
}
