import type { siteContent as englishContent } from "@/siteContent";
import type { en as englishDictionary } from "@/locales/en";

/**
 * ALL EDITABLE WEBSITE TEXT LIVES IN THIS FILE (the website is in Georgian).
 *
 *   site / brand ........ name, URL, short description
 *   navigation .......... menu links and the registration button label
 *   teachers ............ teacher name, photo, bio, qualifications
 *   lessons ............. lesson titles, descriptions and PRICES
 *   koreanLevels ........ options in the "Korean level" dropdown
 *   contact / socialMedia  email, phone, social links
 *   faq / testimonials .. FAQ answers and student quotes
 *   homepage ............ hero text, "why" cards, "how it works" steps
 *   forStudents ......... text of the "For Students" page
 *   booking ............. day/time options, Google Form fallback
 *   seo ................. page title and description for search engines
 *
 * Prices are informational only — the website takes no payments.
 * A price of 0 is shown on the site as "[ფასი]".
 * Anything written like [ეს] is a placeholder waiting for real content.
 * The brand name "Korean Hub" is intentionally kept in English.
 */

export const kaContent = {
  site: {
    name: "Korean Hub",
    tagline: "ისწავლე კორეული ნამდვილ მასწავლებელთან და არა აპლიკაციით.",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
    // Shown in the footer. Replace with the registered business name.
    legalName: "[იურიდიული დასახელება]",
  },

  brand: {
    name: "Korean Hub",
    logoText: "한국허브",
    description:
      "კორეული ენის პატარა სტუდია ერთი მასწავლებლით, ინდივიდუალური და ჯგუფური ცოცხალი ონლაინ გაკვეთილები.",
  },

  navigation: {
    links: [
      { href: "/", label: "მთავარი" },
      { href: "/lessons", label: "გაკვეთილები" },
      { href: "/teacher", label: "მასწავლებელი" },
      { href: "/for-students", label: "სტუდენტებისთვის" },
      { href: "/contact", label: "კონტაქტი" },
    ],
    ctaLabel: "რეგისტრაცია",
  },

  // A list so more teachers can be added later. For now the site shows
  // the FIRST teacher only.
  teachers: [
    {
      id: "teacher-1",
      name: "ელენე ჭაბაშვილი",
      role: "[მასწავლებლის როლი — მაგ. კორეული ენის მასწავლებელი]",
      photo: "/images/teacher-placeholder.svg",
      shortBio: "დამფუძნებელი და კორეული ენის მასწავლებელი",
      fullBio: [
        "[მასწავლებლის სრული ბიოგრაფია, პირველი აბზაცი. ჩაწერე რეალური გამოცდილება, როგორ დაიწყო კორეულის სწავლება და რა არის მისთვის მნიშვნელოვანი გაკვეთილზე.]",
        "[მეორე აბზაცი. ჩაწერე სწავლების სტილი, სხვადასხვა დონის მოსწავლეებთან მუშაობის გამოცდილება ან სპეციალიზაცია.]",
      ],
      experienceYears: 0,
      qualifications: ["[კვალიფიკაცია 1]", "[კვალიფიკაცია 2]", "[კვალიფიკაცია 3]"],
      teachingPhilosophy:
        "[სწავლების ფილოსოფია — მოკლე აბზაცი იმის შესახებ, როგორ არის აგებული გაკვეთილები და რას უნდა ელოდოს სტუდენტი.]",
      languagesSpoken: ["[ენა 1]", "[ენა 2]"],
    },
  ],

  // `price` is shown for information only. 0 displays as "[ფასი]".
  lessons: [
    {
      id: "individual",
      title: "ინდივიდუალური კორეული",
      shortDescription: "პირისპირ გაკვეთილები, მორგებული შენს ტემპსა და მიზნებზე.",
      description:
        "[გაკვეთილის აღწერა — ჩაწერე, რას მოიცავს ინდივიდუალური გაკვეთილი, რა მასალებით მუშაობთ და ვის ერგება.]",
      duration: "1 საათი",
      frequency: "კვირაში 2-ჯერ",
      price: 0,
      currency: "GEL",
      whatsIncluded: [
        "[რას მოიცავს 1 — მაგ. პირადი სასწავლო გეგმა]",
        "[რას მოიცავს 2 — მაგ. სასწავლო მასალები]",
        "[რას მოიცავს 3 — მაგ. საშინაო დავალება და უკუკავშირი]",
      ],
      isGroup: false,
    },
    {
      id: "group",
      title: "ჯგუფური კორეული",
      shortDescription: "ისწავლე მცირე ჯგუფში, მსგავსი დონის სტუდენტებთან ერთად.",
      description:
        "[გაკვეთილის აღწერა — ჩაწერე ჯგუფის ზომა, დონეების შესაბამისობა და გაკვეთილის სტილი.]",
      duration: "1 საათი",
      frequency: "კვირაში 2-ჯერ",
      price: 0,
      currency: "GEL",
      whatsIncluded: [
        "[რას მოიცავს 1 — მაგ. მცირე ჯგუფი, მაქსიმუმ N სტუდენტი]",
        "[რას მოიცავს 2 — მაგ. საერთო სასწავლო მასალები]",
        "[რას მოიცავს 3 — მაგ. სასაუბრო პრაქტიკა ჯგუფელებთან]",
      ],
      isGroup: true,
    },
  ],

  koreanLevels: [
    { id: "beginner", label: "დამწყები — ახლა ვიწყებ" },
    { id: "elementary", label: "საბაზისო — საფუძვლები ვიცი" },
    { id: "intermediate", label: "საშუალო — შემიძლია საუბარი" },
    { id: "advanced", label: "მაღალი — თავისუფალ საუბარს ვხვეწ" },
    { id: "unsure", label: "არ ვიცი — რჩევა მჭირდება" },
  ],

  contact: {
    email: "[ელფოსტა]",
    phone: "[ტელეფონი]",
    // Shown on the thank-you screen after someone registers.
    responseWindow: "1–2 სამუშაო დღის განმავლობაში",
  },

  socialMedia: {
    instagram: "[INSTAGRAM-ის ბმული]",
    facebook: "[FACEBOOK-ის ბმული]",
  },

  faq: [
    {
      id: "faq-1",
      question: "რეგისტრაციისთვის ანგარიშის შექმნა მჭირდება?",
      answer:
        "არა. ირჩევ გაკვეთილს, ავსებ მოკლე ფორმას და აგზავნი — არც ანგარიშია საჭირო, არც პაროლი.",
    },
    {
      id: "faq-2",
      question: "როდის დამიდასტურდება გაკვეთილების გრაფიკი?",
      answer:
        "რეგისტრაცია მოთხოვნის გაგზავნაა. Korean Hub პირადად დაგიკავშირდება ტელეფონით ან ელფოსტით და შეგითანხმდება შენთვის მოსახერხებელ გრაფიკზე. ეს პროცესი ავტომატური არ არის — შენთან ადამიანი დაკავშირდება.",
    },
    {
      id: "faq-3",
      question: "იხდება თუ არა რამე ამ ვებგვერდზე?",
      answer:
        "არა. ამ ვებგვერდზე გადახდა არ ხდება. რეგისტრაცია მხოლოდ შენს მონაცემებს გზავნის, რათა Korean Hub-მა დაგიკავშირდეს.",
    },
    {
      id: "faq-4",
      question: "შემიძლია მოგვიანებით ინდივიდუალურიდან ჯგუფურზე გადასვლა?",
      answer:
        "დიახ — უბრალოდ დაგვიკავშირდი და Korean Hub დაგეხმარება იმ ფორმატის არჩევაში, რომელიც შენთვის უკეთესია.",
    },
    {
      id: "faq-5",
      question: "[ხშირად დასმული კითხვა]",
      answer: "[პასუხი]",
    },
  ],

  testimonials: [
    {
      id: "t1",
      name: "[სტუდენტის სახელი]",
      level: "დამწყები",
      quote: "[სატესტო ციტატა — ჩაანაცვლე რეალური სტუდენტის შეფასებით.]",
    },
    {
      id: "t2",
      name: "[სტუდენტის სახელი]",
      level: "საშუალო დონე",
      quote: "[სატესტო ციტატა — ჩაანაცვლე რეალური სტუდენტის შეფასებით.]",
    },
    {
      id: "t3",
      name: "[სტუდენტის სახელი]",
      level: "ჯგუფის სტუდენტი",
      quote: "[სატესტო ციტატა — ჩაანაცვლე რეალური სტუდენტის შეფასებით.]",
    },
  ],

  homepage: {
    heroHeadline: "ისწავლე კორეული სწორად.",
    heroSubheadline:
      "ცოცხალი ონლაინ გაკვეთილები ერთგულ მასწავლებელთან ინდივიდუალურად ან მცირე ჯგუფში, შენს სწავლის სტილზე მორგებული.",
    heroPrimaryCta: "დარეგისტრირდი",
    heroSecondaryCta: "როგორ მუშაობს",
    finalCtaHeadline: "მზად ხარ კორეულის შესასწავლად?",
    finalCtaDescription:
      "გამოგვიგზავნე რეგისტრაცია — Korean Hub დაგიკავშირდება დეტალების შესათანხმებლად.",
    finalCtaLabel: "დარეგისტრირდი",

    whyKoreanHub: {
      title: "რატომ Korean Hub",
      description:
        "პატარა, მიზანმიმართული სტუდია — აგებული ცოცხალ საუბარზე და არა კურსების ბიბლიოთეკაზე.",
      reasons: [
        {
          icon: "teacher",
          title: "ერთი მასწავლებელი",
          description:
            "მასწავლებლები არ იცვლებიან — დროთა განმავლობაში ნამდვილ სასწავლო ურთიერთობას აყალიბებ.",
        },
        {
          icon: "schedule",
          title: "შენთვის მოსახერხებელი გრაფიკი",
          description:
            "გაკვეთილების დროს შენთან პირადად ვთანხმდებით და არა სისტემა გიწესებს.",
        },
        {
          icon: "speaking",
          title: "საუბარზე აგებული",
          description:
            "გაკვეთილები ცოცხალია და სასაუბრო, არა ჩაწერილი ვიდეოები, რომლებსაც მარტო უყურებ.",
        },
        {
          icon: "simple",
          title: "მარტივი დასაწყისი",
          description: "შეავსე ერთი მოკლე ფორმა — არც ანგარიში გჭირდება, არც პაროლი.",
        },
      ],
    },

    howItWorks: {
      title: "როგორ მუშაობს",
      description:
        "რეგისტრაცია რამდენიმე წამს გრძელდება. გაკვეთილების დროს შენთან პირადად ვათანხმებთ და არა ალგორითმი გვიწესებს.",
      steps: [
        { title: "აირჩიე გაკვეთილი", description: "აირჩიე ინდივიდუალური ან ჯგუფური კორეული." },
        { title: "დარეგისტრირდი", description: "მოგვიყევი შენს შესახებ და შენს მიზნებზე." },
        { title: "ჩვენ დაგიკავშირდებით", description: "Korean Hub დაგირეკავს ან მოგწერს ელფოსტაზე." },
        { title: "დაადასტურე გრაფიკი", description: "ერთად შევთანხმდებით გაკვეთილების დღეებსა და საათებზე." },
        { title: "დაიწყე სწავლა", description: "დაიწყე ცოცხალი ონლაინ გაკვეთილები." },
      ],
    },
    vocabulary: {
      driftingWords: [
        { hangul: "안녕", meaning: "გამარჯობა", top: "12%", left: "6%", delay: 0 },
        { hangul: "감사", meaning: "მადლობა", top: "68%", left: "10%", delay: 0.6 },
        { hangul: "배우다", meaning: "სწავლა", top: "22%", left: "82%", delay: 0.3 },
        { hangul: "잘했어", meaning: "ყოჩაღ", top: "78%", left: "78%", delay: 0.9 },
      ],
      cards: [
        { hangul: "사랑", romanization: "sarang", meaning: "სიყვარული" },
        { hangul: "친구", romanization: "chingu", meaning: "მეგობარი" },
        { hangul: "행복", romanization: "haengbok", meaning: "ბედნიერება" },
        { hangul: "여행", romanization: "yeohaeng", meaning: "მოგზაურობა" },
        { hangul: "용기", romanization: "yonggi", meaning: "გამბედაობა" },
        { hangul: "희망", romanization: "huimang", meaning: "იმედი" },
      ],
    },
  },

  // Text of the "For Students" page
  forStudents: {
    title: "სტუდენტებისთვის",
    description: "ყველაფერი, რაც რეგისტრაციამდე უნდა იცოდე — ანგარიში საჭირო არ არის.",
    sections: [
      {
        title: "ვისთვისაა ეს გაკვეთილები",
        body: "გაკვეთილები განკუთვნილია მათთვის, ვისაც სურს კორეულის სწავლა ცოცხალ საუბარზე დაყრდნობით — ნულიდან იწყებ თუ უკვე შეგიძლია საუბარი და გინდა წინსვლა. რეგისტრაციის შემდეგ მასწავლებელი დაგეხმარება შენი დონის განსაზღვრაში.",
      },
      {
        title: "როგორ მიმდინარეობს გაკვეთილები",
        body: "გაკვეთილები ცოცხალია და ონლაინ — ერთი საათი, კვირაში ორჯერ, როგორც ინდივიდუალური, ისე ჯგუფური ფორმატისთვის. ვიდეოზარით ერთვები შენთან შეთანხმებულ დროს. წინასწარ ჩაწერილი ვიდეოები ან დამოუკიდებლად გასავლელი მოდულები არ არსებობს.",
      },
      {
        title: "რას უნდა ელოდო",
        body: "გაკვეთილი საუბარზეა ორიენტირებული. მასწავლებელი ტემპსა და მასალას შენს დონესა და მიზნებზე არგებს — მაგალითად, ყოველდღიურ საუბარზე ან მოგზაურობისთვის მზადებაზე.",
      },
      {
        title: "როგორ მუშაობს ონლაინ გაკვეთილი",
        body: "დაგჭირდება სტაბილური ინტერნეტი და მოწყობილობა კამერითა და მიკროფონით. გრაფიკის დადასტურების შემდეგ მასწავლებელი გამოგიგზავნის ვიდეოზარის ბმულს და საჭირო მასალებს.",
      },
      {
        title: "რეგისტრაციის პროცესი",
        body: "რეგისტრაცია პირდაპირ ამ ვებგვერდზე ხდება — აირჩიე გაკვეთილის ტიპი, მიუთითე სასურველი დღეები და დრო და შეავსე მოკლე ფორმა შენი მონაცემებითა და მიზნებით. ეს მოთხოვნაა და არა მყისიერი დაჯავშნა; ანგარიშის შექმნა ან პაროლი საჭირო არ არის.",
      },
      {
        title: "გრაფიკის დადასტურება",
        body: "რეგისტრაციის შემდეგ Korean Hub პირადად დაგიკავშირდება ტელეფონით ან ელფოსტით, რათა განიხილოს შენი მიზნები და შეგითანხმდეს გაკვეთილების კონკრეტულ დღეებსა და საათებზე. ეს ეტაპი ავტომატური არ არის.",
      },
      {
        title: "რა ხდება რეგისტრაციის შემდეგ",
        body: "მოთხოვნის გაგზავნის შემდეგ ეკრანზე დადასტურებას ნახავ, ხოლო Korean Hub მალე დაგიკავშირდება. არც პანელია, არც ანგარიში — ყველაფერი პირდაპირი კონტაქტით ხდება.",
      },
    ],
    ctaHeadline: "მზად ხარ დასაწყებად?",
    ctaLabel: "მოითხოვე გაკვეთილი",
  },

  booking: {
    // The native registration form is the normal flow. Only if you set
    // useGoogleForm to true AND fill in googleFormUrl will /book send
    // visitors to that Google Form instead.
    useGoogleForm: false,
    googleFormUrl: "",

    // Options in the "preferred days" and "preferred time" part of the form.
    days: [
      { id: "mon", label: "ორშ" },
      { id: "tue", label: "სამ" },
      { id: "wed", label: "ოთხ" },
      { id: "thu", label: "ხუთ" },
      { id: "fri", label: "პარ" },
      { id: "sat", label: "შაბ" },
      { id: "sun", label: "კვი" },
    ],
    timeSlots: [
      { id: "morning", label: "დილა" },
      { id: "afternoon", label: "შუადღე" },
      { id: "evening", label: "საღამო" },
    ],
    // Small note shown under the schedule options.
    scheduleNote:
      "ეს მხოლოდ შენი სურვილებია — საბოლოო დროზე Korean Hub დაგიკავშირდება და შეგითანხმდება.",
  },

  seo: {
    defaultTitle: "Korean Hub — ისწავლე კორეული ონლაინ",
    titleTemplate: "%s | Korean Hub",
    defaultDescription:
      "Korean Hub გთავაზობს ცოცხალ ონლაინ ინდივიდუალურ და ჯგუფურ გაკვეთილებს კორეულ ენაში მასწავლებელთან. დარეგისტრირდი ონლაინ — გრაფიკს პირადად დაგიდასტურებთ.",
    ogImage: "/images/og-default.svg",
  },
} satisfies typeof englishContent;

export const ka = {
  content: kaContent,
  ui: {
    header: {
      primaryNavigation: "მთავარი ნავიგაცია",
      mobileNavigation: "მობილური ნავიგაცია",
      languageSelector: "ენა",
      openMenu: "მენიუს გახსნა",
      closeMenu: "მენიუს დახურვა",
      switchToEnglish: "ინგლისურზე გადართვა",
      switchToGeorgian: "ქართულზე გადართვა",
    },
    footer: {
      site: "საიტი",
      contact: "კონტაქტი",
      follow: "გამოგვყევი",
      rightsReserved: "ყველა უფლება დაცულია.",
      registrationNote: "რეგისტრაცია მოთხოვნაა — გრაფიკს პირადად დაგიდასტურებთ.",
    },
    home: {
      vocabularyHeading: "დღეში ერთი სიტყვაც დიდი შედეგია",
      vocabularyDescription:
        "თითოეული ბარათი მნიშვნელობას მალავს, სანამ არ შეეხები. ასე რჩება ლექსიკა მეხსიერებაში — ცოტა ცნობისმოყვარეობა და ცოტა გამეორება.",
      revealMeaning: "მნიშვნელობის გამოჩენა",
      lessonWaysTitle: "სწავლის ორი გზა",
      lessonWaysDescription:
        "ორივე ცოცხალი ონლაინ გაკვეთილია — 1 საათი, კვირაში ორჯერ. განსხვავება მხოლოდ ისაა, ვინ არის გაკვეთილზე შენთან ერთად.",
      teacher: "შენი მასწავლებელი",
      meetTeacher: "გაიცანი მასწავლებელი",
      teacherPortrait: "მასწავლებლის პორტრეტი",
      testimonialsHeading: "რას ამბობენ სტუდენტები",
      faqHeading: "ხშირად დასმული კითხვები",
    },
    lessonCard: {
      group: "ჯგუფური",
      individual: "ინდივიდუალური",
      duration: "ხანგრძლივობა",
      frequency: "სიხშირე",
      register: "რეგისტრაცია",
    },
    pages: {
      lessons: {
        title: "გაკვეთილები და ფასები",
        description:
          "ორი ფორმატი, ერთი საათი, კვირაში ორჯერ, სრულად ონლაინ. აირჩიე ის, რომელიც სწავლის შენს სტილს შეესაბამება.",
        unsureTitle: "არ იცი, რომელი ფორმატი შეგეფერება?",
        unsureDescription:
          "გამოგზავნე რეგისტრაციის მოთხოვნა და Korean Hub პირველ გაკვეთილამდე სწორი არჩევანის გაკეთებაში დაგეხმარება.",
        startRegistration: "რეგისტრაციის დაწყება",
      },
      teacher: {
        founder: "დამფუძნებელი და მასწავლებელი",
        experience: "გამოცდილება",
        years: "წელი",
        qualifications: "კვალიფიკაცია",
        languages: "ენები",
        philosophy: "სწავლების ფილოსოფია",
        requestLesson: "მოითხოვე გაკვეთილი",
        portrait: "მასწავლებლის პორტრეტი",
        experiencePlaceholder: "[გამოცდილება]",
        ctaHeadline: "ისწავლე კორეული მასწავლებელთან:",
      },
      contact: {
        title: "დაგვიკავშირდი",
        description:
          "რეგისტრაციამდე კითხვები გაქვს? მოგვწერე ნებისმიერ დროს — პასუხს ადამიანი გაგცემს.",
      },
      notFound: {
        title: "გვერდი ვერ მოიძებნა",
        description: "გვერდი, რომელსაც ეძებ, არ არსებობს ან მისამართი შეიცვალა.",
      },
      error: {
        title: "რაღაც შეცდომა მოხდა",
        description: "მოულოდნელი შეცდომა დაფიქსირდა.",
        retry: "სცადე თავიდან",
      },
    },
    contactForm: {
      sent: "შეტყობინება გაიგზავნა",
      thanks: "მადლობა, რომ დაგვიკავშირდი — Korean Hub მალე გიპასუხებს.",
      name: "სახელი",
      email: "ელფოსტა",
      message: "შეტყობინება",
      error: "რაღაც შეცდომა მოხდა. სცადე თავიდან.",
      submit: "შეტყობინების გაგზავნა",
    },
    booking: {
      progress: "რეგისტრაციის პროგრესი",
      steps: { lesson: "გაკვეთილი", details: "შენი მონაცემები", review: "შემოწმება" },
      chooseLesson: "აირჩიე გაკვეთილი",
      chooseLessonDescription: "ორივე ცოცხალი ონლაინ გაკვეთილია — 1 საათი, კვირაში ორჯერ.",
      continue: "გაგრძელება",
      detailsTitle: "შენი მონაცემები",
      detailsDescription: "Korean Hub-ს შენთან დასაკავშირებლად მხოლოდ ესაა საჭირო.",
      fullName: "სრული სახელი",
      email: "ელფოსტა",
      phone: "ტელეფონის ნომერი",
      koreanLevel: "კორეულის ამჟამინდელი დონე",
      selectLevel: "აირჩიე დონე",
      preferredDays: "სასურველი დღეები",
      preferredTime: "სასურველი დრო",
      goals: "შენი სასწავლო მიზნები",
      additionalInfo: "კიდევ რამე ხომ არ უნდა ვიცოდეთ?",
      optional: "არასავალდებულო",
      goalsPlaceholder: "მაგ., კორეულს სეულში მოგზაურობისთვის ვსწავლობ.",
      back: "უკან",
      reviewTitle: "შეამოწმე შენი მოთხოვნა",
      reviewDescription: "დარწმუნდი, რომ ყველაფერი სწორია და გაუგზავნე Korean Hub-ს.",
      reviewRows: {
        lesson: "გაკვეთილი",
        duration: "ხანგრძლივობა",
        frequency: "სიხშირე",
        price: "მითითებული ფასი",
        name: "სახელი",
        email: "ელფოსტა",
        phone: "ტელეფონი",
        koreanLevel: "კორეულის დონე",
        preferredDays: "სასურველი დღეები",
        preferredTime: "სასურველი დრო",
        goals: "მიზნები",
        notes: "შენიშვნა",
      },
      pendingNotice:
        "ეს რეგისტრაციის მოთხოვნაა. Korean Hub ელფოსტით ან ტელეფონით დაკავშირებამდე და დადასტურებამდე მოთხოვნა მოლოდინის რეჟიმშია და გაკვეთილის დრო დაჯავშნილი არ არის.",
      sending: "იგზავნება…",
      submit: "რეგისტრაციის გაგზავნა",
      thankYou: "მადლობა, რომ დარეგისტრირდი",
      received: "შენი ინფორმაცია წარმატებით მივიღეთ.",
      responseTime: "დაგიკავშირდებით ტელეფონით ან ელფოსტით, რათა დავადასტუროთ გაკვეთილის დეტალები და გრაფიკი.",
      pending: "შენი მოთხოვნა მოლოდინშია — გაკვეთილის დრო ჯერ დაჯავშნილი არ არის.",
      home: "მთავარ გვერდზე დაბრუნება",
      sendError: "რაღაც შეცდომა მოხდა. სცადე თავიდან.",
      invalidForm: "გთხოვთ, შეამოწმე მონიშნული ველები.",
    },
    validation: {
      fullName: "შეიყვანე სრული სახელი.",
      nameTooLong: "სახელი ძალიან გრძელია.",
      email: "შეიყვანე ელფოსტის სწორი მისამართი.",
      emailTooLong: "ელფოსტის მისამართი ძალიან გრძელია.",
      phone: "შეიყვანე ტელეფონის სწორი ნომერი.",
      phoneTooLong: "ტელეფონის ნომერი ძალიან გრძელია.",
      phoneCharacters: "გამოიყენე მხოლოდ ციფრები, ინტერვალი და სიმბოლოები + ( ) -.",
      koreanLevel: "აირჩიე კორეულის შენი მიმდინარე დონე.",
      lessonType: "აირჩიე გაკვეთილის ტიპი.",
      preferredDays: "აირჩიე მინიმუმ ერთი დღე, რომელიც შეგეფერება.",
      preferredTime: "აირჩიე სასურველი დროის მონაკვეთი.",
      maxCharacters: "მაქსიმუმ 600 სიმბოლო.",
      messageTooShort: "შეტყობინება ძალიან მოკლეა.",
      messageTooLong: "შეტყობინება ძალიან გრძელია.",
    },
    shared: {
      backHome: "მთავარ გვერდზე დაბრუნება",
      contactUs: "დაგვიკავშირდი",
      skipToContent: "შიგთავსზე გადასვლა",
    },
  },
} satisfies typeof englishDictionary;
