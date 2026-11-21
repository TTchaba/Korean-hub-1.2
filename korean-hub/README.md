# Korean Hub

Website for Korean Hub (online Korean lessons). Built with Next.js, React, TypeScript,
Tailwind CSS, Framer Motion and Firebase Firestore.

Students send a **registration request** (lesson type, details, preferred days and time of day).
The request is saved as `pending` and the teacher contacts the student by email or phone.
**The website takes no payments.**

## Run it

```powershell
npm install
Copy-Item .env.example .env.local
npm run dev
```

Copy `.env.example` to `.env.local` and fill in the Firebase Web app values
before building or submitting forms. The site uses local system-font fallbacks,
so development does not require access to Google Fonts. Run `npm run typecheck`,
`npm run lint` and `npm run build` to validate and export the site.

## Where to edit things

| I want to change… | Edit this |
|---|---|
| Website text and translations (English/Georgian), lesson **prices**, teacher info, contact details, FAQ, day/time options, SEO | `src/locales/en.ts` and `src/locales/ka.ts` |
| Language-switching behavior and saved language preference | `src/i18n.tsx` |
| Colours, fonts sizes, spacing scale | `tailwind.config.ts` |
| The teacher photo | replace `public/images/teacher-placeholder.svg`, then update `content.teachers[0].photo` in both locale files |
| Who can read/write Firestore | `firestore.rules` |

## Folder map

```
src/
  locales/
    en.ts                 ← English website content and UI translations
    ka.ts                 ← Georgian website content and UI translations
  i18n.tsx                ← Language provider and translation lookup
  siteContent.ts          ← Shared content helpers
  app/                    ← one folder per page; each page.tsx is that page
    page.tsx                  home
    lessons/ teacher/ for-students/ contact/ book/
    layout.tsx                fonts, page frame (Header + Footer)
    globals.css               base styles
  components/
    ui.tsx                  buttons, section title, scroll reveal, CTA band, error screen
    Header.tsx / Footer.tsx
    HomeHero.tsx            hero + Korean word flip-cards
    HomeSections.tsx        the other homepage sections
    LessonCard.tsx          lesson card (home + lessons page)
    BookingForm.tsx         the whole registration flow
    ContactForm.tsx
  lib/
    utils.ts                small helpers (class names, price formatting)
    validation.ts           browser-side form rules
    firebase.ts             Firebase Client SDK initialization
```

## Firestore

Collections: `registrations`, `contactSubmissions`.

A registration has: `fullName, email, phone, koreanLevel, lessonType, lessonTitle,
preferredDays, preferredTime, goals?, additionalInfo?, status, createdAt`.
`status` starts as `pending`. Contact messages are saved in `contactSubmissions`
with their name, email, message, and `createdAt` timestamp.

Create or use the Firebase project `koreanhubgeorgia`, enable Cloud Firestore,
and register a Web app under Project settings → General → Your apps. Copy its
`apiKey`, `projectId` and `appId` into `.env.local` as
`NEXT_PUBLIC_FIREBASE_API_KEY`, `NEXT_PUBLIC_FIREBASE_PROJECT_ID` and
`NEXT_PUBLIC_FIREBASE_APP_ID`. These are Web app identifiers, not private
credentials. `NEXT_PUBLIC_SITE_URL` should be set to the deployed site URL for
SEO metadata. Publish the root `firestore.rules` file; it permits validated
document creation only and denies public reads, updates and deletes.

## Deploying

The project is configured for Next.js static export; `npm run build` generates
`out`. Firebase Hosting serves that directory on the Spark plan. Build with the
Firebase Web app variables available, then deploy Hosting and Firestore rules
from the repository root with `firebase deploy --only hosting,firestore:rules`.
