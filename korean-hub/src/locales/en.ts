/**
 * ALL EDITABLE WEBSITE CONTENT LIVES IN THIS FILE.
 *
 *   site / brand ........ name, URL, short description
 *   navigation .......... menu links and the "Register Now" button label
 *   teachers ............ teacher name, photo, bio, qualifications
 *   lessons ............. lesson titles, descriptions and PRICES
 *   koreanLevels ........ options in the "Korean level" dropdown
 *   contact / socialMedia  email, phone, social links
 *   faq / testimonials .. FAQ answers and student quotes
 *   homepage ............ hero text, "why" cards, "how it works" steps
 *   booking ............. day/time options, Google Form fallback
 *   seo ................. page title and description for search engines
 *
 * Prices are informational only — the website takes no payments.
 * A price of 0 is shown on the site as "[PRICE]".
 * Anything written like [THIS] is a placeholder waiting for real content.
 */

const content = {
  site: {
    name: "Korean Hub",
    tagline: "Learn Korean with a real teacher, not an app.",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
    // Shown in the footer. Replace with the registered business name.
    legalName: "[LEGAL BUSINESS NAME]",
  },

  brand: {
    name: "Korean Hub",
    logoText: "한국허브",
    description:
      "A focused, one-teacher Korean language studio offering live online individual and group lessons.",
  },

  navigation: {
    links: [
      { href: "/", label: "Home" },
      { href: "/lessons", label: "Lessons" },
      { href: "/teacher", label: "Teacher" },
      { href: "/for-students", label: "For Students" },
      { href: "/contact", label: "Contact" },
    ],
    ctaLabel: "Register Now",
  },

  // A list so more teachers can be added later. For now the site shows
  // the FIRST teacher only.
  teachers: [
    {
      id: "teacher-1",
      name: "[TEACHER NAME]",
      role: "Founder & Korean Language Teacher",
      photo: "/images/teacher-placeholder.svg",
      shortBio: "[SHORT TEACHER BIO — one or two sentences for cards and previews.]",
      fullBio: [
        "[TEACHER FULL BIOGRAPHY PARAGRAPH ONE. Replace with the teacher's real background, how they started teaching Korean, and what they care about in the classroom.]",
        "[TEACHER FULL BIOGRAPHY PARAGRAPH TWO. Replace with more detail on teaching style, experience with different levels, or specialisation such as exam prep, conversation, or business Korean.]",
      ],
      experienceYears: 0,
      qualifications: ["[QUALIFICATION 1]", "[QUALIFICATION 2]", "[QUALIFICATION 3]"],
      teachingPhilosophy:
        "[TEACHING PHILOSOPHY — a short paragraph on how lessons are structured and what students can expect.]",
      languagesSpoken: ["Korean", "English"],
    },
  ],

  // `price` is shown for information only. 0 displays as "[PRICE]".
  lessons: [
    {
      id: "individual",
      title: "Individual Korean",
      shortDescription: "One-on-one lessons tailored to your pace and goals.",
      description:
        "[LESSON DESCRIPTION — replace with real detail about what an individual lesson covers, materials used, and who it suits.]",
      duration: "1 hour",
      frequency: "2 times per week",
      price: 0,
      currency: "GEL",
      whatsIncluded: [
        "[INCLUSION 1 — e.g. personalised lesson plan]",
        "[INCLUSION 2 — e.g. learning materials]",
        "[INCLUSION 3 — e.g. homework and feedback]",
      ],
      isGroup: false,
    },
    {
      id: "group",
      title: "Group Korean",
      shortDescription: "Learn alongside a small group at a similar level.",
      description:
        "[LESSON DESCRIPTION — replace with real detail about group size, level matching, and lesson style.]",
      duration: "1 hour",
      frequency: "2 times per week",
      price: 0,
      currency: "GEL",
      whatsIncluded: [
        "[INCLUSION 1 — e.g. small group, max N students]",
        "[INCLUSION 2 — e.g. shared learning materials]",
        "[INCLUSION 3 — e.g. speaking practice with peers]",
      ],
      isGroup: true,
    },
  ],

  koreanLevels: [
    { id: "beginner", label: "Beginner — just starting out" },
    { id: "elementary", label: "Elementary — know the basics" },
    { id: "intermediate", label: "Intermediate — can hold conversations" },
    { id: "advanced", label: "Advanced — refining fluency" },
    { id: "unsure", label: "Not sure — I'd like guidance" },
  ],

  contact: {
    email: "[EMAIL]",
    phone: "[PHONE]",
    // Shown on the thank-you screen after someone registers.
    responseWindow: "within 1–2 business days",
  },

  socialMedia: {
    instagram: "[INSTAGRAM URL]",
    facebook: "[FACEBOOK URL]",
  },

  faq: [
    {
      id: "faq-1",
      question: "Do I need to create an account to register?",
      answer:
        "No. You choose a lesson, fill in a short registration form, and send it — there's no account or password to manage.",
    },
    {
      id: "faq-2",
      question: "When will my lesson schedule be confirmed?",
      answer:
        "Registering sends a request. Korean Hub will contact you directly by email or phone to agree on a schedule that works for you. This isn't automated — a real person confirms it with you.",
    },
    {
      id: "faq-3",
      question: "Is anything paid on this website?",
      answer:
        "No. This website doesn't take any payment. Registering only sends your details so Korean Hub can get in touch with you.",
    },
    {
      id: "faq-4",
      question: "Can I switch between individual and group lessons later?",
      answer:
        "Yes — just get in touch and Korean Hub will help you move to the option that fits you best going forward.",
    },
    {
      id: "faq-5",
      question: "[FAQ QUESTION PLACEHOLDER]",
      answer: "[FAQ ANSWER PLACEHOLDER]",
    },
  ],

  testimonials: [
    {
      id: "t1",
      name: "[STUDENT NAME]",
      level: "Beginner",
      quote: "[PLACEHOLDER TESTIMONIAL — replace with a real student quote once available.]",
    },
    {
      id: "t2",
      name: "[STUDENT NAME]",
      level: "Intermediate",
      quote: "[PLACEHOLDER TESTIMONIAL — replace with a real student quote once available.]",
    },
    {
      id: "t3",
      name: "[STUDENT NAME]",
      level: "Group student",
      quote: "[PLACEHOLDER TESTIMONIAL — replace with a real student quote once available.]",
    },
  ],

  homepage: {
    heroHeadline: "Korean, taught properly.",
    heroSubheadline:
      "Live online lessons with a dedicated teacher — individual or small group, twice a week, built around how you actually learn.",
    heroPrimaryCta: "Request a lesson",
    heroSecondaryCta: "See how it works",
    finalCtaHeadline: "Ready to start learning Korean?",
    finalCtaDescription: "Send your registration — Korean Hub will get in touch to arrange the details.",
    finalCtaLabel: "Register now",

    whyKoreanHub: {
      title: "Why learn with Korean Hub",
      description: "A small, focused studio — built around real conversation, not a course library.",
      reasons: [
        {
          icon: "teacher",
          title: "One dedicated teacher",
          description: "No rotating instructors — you build a real teaching relationship over time.",
        },
        {
          icon: "schedule",
          title: "A schedule that fits you",
          description: "Your lesson times are agreed personally with you, not assigned by a system.",
        },
        {
          icon: "speaking",
          title: "Built around speaking",
          description: "Lessons are live and conversational, not pre-recorded videos to watch alone.",
        },
        {
          icon: "simple",
          title: "Simple to start",
          description: "Fill in one short form — no account and no password to manage.",
        },
      ],
    },

    howItWorks: {
      title: "How it works",
      description:
        "Registration takes a few minutes. Your lesson times are agreed with you personally, not assigned by an algorithm.",
      steps: [
        { title: "Choose your lesson", description: "Choose individual or group Korean." },
        { title: "Register", description: "Tell us a little about you and your goals." },
        { title: "We'll get in touch", description: "Korean Hub will call or email you." },
        { title: "Confirm your schedule", description: "Agree on lesson days and times together." },
        { title: "Start learning", description: "Begin your live online lessons." },
      ],
    },
    vocabulary: {
      driftingWords: [
        { hangul: "안녕", meaning: "hello", top: "12%", left: "6%", delay: 0 },
        { hangul: "감사", meaning: "thanks", top: "68%", left: "10%", delay: 0.6 },
        { hangul: "배우다", meaning: "to learn", top: "22%", left: "82%", delay: 0.3 },
        { hangul: "잘했어", meaning: "well done", top: "78%", left: "78%", delay: 0.9 },
      ],
      cards: [
        { hangul: "사랑", romanization: "sarang", meaning: "love" },
        { hangul: "친구", romanization: "chingu", meaning: "friend" },
        { hangul: "행복", romanization: "haengbok", meaning: "happiness" },
        { hangul: "여행", romanization: "yeohaeng", meaning: "journey" },
        { hangul: "용기", romanization: "yonggi", meaning: "courage" },
        { hangul: "희망", romanization: "huimang", meaning: "hope" },
      ],
    },
  },

  forStudents: {
    title: "For Students",
    description: "Everything you need to know before registering — no account required.",
    sections: [
      {
        title: "Who these lessons are for",
        body: "These lessons are for anyone who wants to learn Korean through real conversation — whether you are starting from scratch or already speak and want to improve. After registration, your teacher will help determine your level.",
      },
      {
        title: "How lessons work",
        body: "Lessons are live and online — one hour, twice a week, for both individual and group formats. Join by video call at a time agreed with your teacher. There are no prerecorded videos or self-study modules.",
      },
      {
        title: "What to expect",
        body: "Lessons focus on conversation. Your teacher adapts the pace and materials to your level and goals, such as everyday conversation or preparing for travel.",
      },
      {
        title: "How online lessons work",
        body: "You will need a stable internet connection and a device with a camera and microphone. Once your schedule is confirmed, your teacher will send a video-call link and any required materials.",
      },
      {
        title: "Registration process",
        body: "Register directly on this website: choose a lesson type, select preferred days and times, and fill in a short form with your details and goals. This is a request, not an instant booking; no account or password is needed.",
      },
      {
        title: "Confirming your schedule",
        body: "After registration, Korean Hub will contact you personally by phone or email to discuss your goals and agree on lesson days and times. This step is not automated.",
      },
      {
        title: "What happens after registering",
        body: "You will see an on-screen confirmation after sending your request, and Korean Hub will contact you soon. There is no dashboard or account — everything happens through direct contact.",
      },
    ],
    ctaHeadline: "Ready to get started?",
    ctaLabel: "Request a lesson",
  },

  booking: {
    // The native registration form is the normal flow. Only if you set
    // useGoogleForm to true AND fill in googleFormUrl will /book send
    // visitors to that Google Form instead.
    useGoogleForm: false,
    googleFormUrl: "",

    // Options in the "preferred days" and "preferred time" part of the form.
    days: [
      { id: "mon", label: "Mon" },
      { id: "tue", label: "Tue" },
      { id: "wed", label: "Wed" },
      { id: "thu", label: "Thu" },
      { id: "fri", label: "Fri" },
      { id: "sat", label: "Sat" },
      { id: "sun", label: "Sun" },
    ],
    timeSlots: [
      { id: "morning", label: "Morning" },
      { id: "afternoon", label: "Afternoon" },
      { id: "evening", label: "Evening" },
    ],
    // Small note shown under the schedule options.
    scheduleNote:
      "These are only your preferences — Korean Hub will contact you to agree the final lesson times.",
  },

  seo: {
    defaultTitle: "Korean Hub — Learn Korean Online",
    titleTemplate: "%s | Korean Hub",
    defaultDescription:
      "Korean Hub offers live online individual and group Korean lessons with a dedicated teacher. Register online — your schedule is confirmed personally.",
    ogImage: "/images/og-default.svg",
  },
};

export const en = {
  content,
  ui: {
    header: {
      primaryNavigation: "Primary navigation",
      mobileNavigation: "Mobile navigation",
      languageSelector: "Language",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      switchToEnglish: "Switch to English",
      switchToGeorgian: "Switch to Georgian",
    },
    footer: {
      site: "Site",
      contact: "Contact",
      follow: "Follow",
      rightsReserved: "All rights reserved.",
      registrationNote: "Registration is a request — your schedule is confirmed personally.",
    },
    home: {
      vocabularyHeading: "One word a day adds up",
      vocabularyDescription:
        "Each card hides its meaning until you tap it. That's how real vocabulary sticks — a little curiosity, a little repetition.",
      revealMeaning: "Reveal meaning",
      lessonWaysTitle: "Two ways to learn",
      lessonWaysDescription:
        "Both are live online lessons — one hour, twice a week. The only difference is who joins you in the lesson.",
      teacher: "Your teacher",
      meetTeacher: "Meet your teacher",
      teacherPortrait: "Portrait of the teacher",
      testimonialsHeading: "What students say",
      faqHeading: "Frequently asked questions",
    },
    lessonCard: {
      group: "Group",
      individual: "Individual",
      duration: "Duration",
      frequency: "Frequency",
      register: "Register",
    },
    pages: {
      lessons: {
        title: "Lessons & Pricing",
        description:
          "Two formats, one hour, twice a week, fully online. Choose the one that fits how you like to learn.",
        unsureTitle: "Not sure which format is right for you?",
        unsureDescription:
          "Send a registration request and Korean Hub will help you choose before your first lesson.",
        startRegistration: "Start registration",
      },
      teacher: {
        founder: "Founder & teacher",
        experience: "Experience",
        years: "years",
        qualifications: "Qualifications",
        languages: "Languages",
        philosophy: "Teaching philosophy",
        requestLesson: "Request a lesson",
        portrait: "Portrait of the teacher",
        experiencePlaceholder: "[EXPERIENCE]",
        ctaHeadline: "Learn Korean with",
      },
      contact: {
        title: "Get in touch",
        description: "Questions before you register? Reach out any time — a real person will reply.",
      },
      notFound: {
        title: "Page not found",
        description: "The page you're looking for doesn't exist or may have moved.",
      },
      error: {
        title: "Something went wrong",
        description: "An unexpected error occurred.",
        retry: "Try again",
      },
    },
    contactForm: {
      sent: "Message sent",
      thanks: "Thanks for reaching out — Korean Hub will get back to you soon.",
      name: "Name",
      email: "Email",
      message: "Message",
      error: "Something went wrong. Please try again.",
      submit: "Send message",
    },
    booking: {
      progress: "Registration progress",
      steps: { lesson: "Lesson", details: "Your details", review: "Review" },
      chooseLesson: "Choose your lesson",
      chooseLessonDescription: "Both are live online lessons — one hour, twice a week.",
      continue: "Continue",
      detailsTitle: "Your details",
      detailsDescription: "This is all Korean Hub needs to get in touch with you.",
      fullName: "Full name",
      email: "Email",
      phone: "Phone number",
      koreanLevel: "Your current Korean level",
      selectLevel: "Select a level",
      preferredDays: "Preferred days",
      preferredTime: "Preferred time of day",
      goals: "Your learning goals",
      additionalInfo: "Anything else we should know?",
      optional: "optional",
      goalsPlaceholder: "e.g. I'm learning for an upcoming trip to Seoul.",
      back: "Back",
      reviewTitle: "Review your request",
      reviewDescription: "Check that everything looks right, then send it to Korean Hub.",
      reviewRows: {
        lesson: "Lesson",
        duration: "Duration",
        frequency: "Frequency",
        price: "Listed price",
        name: "Name",
        email: "Email",
        phone: "Phone",
        koreanLevel: "Korean level",
        preferredDays: "Preferred days",
        preferredTime: "Preferred time",
        goals: "Goals",
        notes: "Notes",
      },
      pendingNotice:
        "This is a registration request. It stays pending and no lesson time is booked until Korean Hub contacts you by email or phone to confirm.",
      sending: "Sending…",
      submit: "Submit registration",
      thankYou: "Thank you for registering",
      received: "We received your information successfully.",
      responseTime:
        "We will contact you by phone or email to confirm your lesson details and schedule.",
      pending: "Your request is pending — no lesson time has been booked yet.",
      home: "Back to homepage",
      sendError: "Something went wrong. Please try again.",
      invalidForm: "Please check the highlighted fields.",
    },
    validation: {
      fullName: "Enter your full name.",
      nameTooLong: "Name is too long.",
      email: "Enter a valid email address.",
      emailTooLong: "Email address is too long.",
      phone: "Enter a valid phone number.",
      phoneTooLong: "Phone number is too long.",
      phoneCharacters: "Use only numbers, spaces, and + ( ) -.",
      koreanLevel: "Select your current Korean level.",
      lessonType: "Select a lesson type.",
      preferredDays: "Choose at least one day that could work for you.",
      preferredTime: "Choose a preferred time of day.",
      maxCharacters: "Keep this under 600 characters.",
      messageTooShort: "Message is too short.",
      messageTooLong: "Message is too long.",
    },
    shared: {
      backHome: "Back to homepage",
      contactUs: "Contact us",
      skipToContent: "Skip to content",
    },
  },
};
