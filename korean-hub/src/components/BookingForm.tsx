"use client";

// The whole registration flow on the /book page, top to bottom:
//   1. Choose lesson (individual or group)
//   2. Your details + preferred days and time of day
//   3. Review and submit
//   4. Thank-you screen
//
// Nothing is paid or booked here. Submitting only sends a request to
// /api/registrations, which saves it as "pending" until the teacher
// contacts the student. Day/time options come from the selected locale.

import { useState, type FormEvent, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, CheckCircle2 } from "lucide-react";
import { Button, ButtonLink } from "@/components/ui";
import { cn, formatPrice } from "@/lib/utils";
import { registrationSchema, type RegistrationFormValues } from "@/lib/validation";
import { findLessonById } from "@/siteContent";
import { useI18n } from "@/i18n";

type StepId = "lesson" | "details" | "review" | "done";
type Details = Omit<RegistrationFormValues, "lessonType">;
type FieldErrors = Partial<Record<keyof RegistrationFormValues, string>>;

const EMPTY_DETAILS: Details = {
  fullName: "",
  email: "",
  phone: "",
  koreanLevel: "",
  preferredDays: [],
  preferredTime: "",
  goals: "",
  additionalInfo: "",
};

// ── Main component: keeps track of the current step and sends the request ──

export function BookingForm() {
  const { content, l } = useI18n();
  // /book?lesson=group pre-selects a lesson (used by the "Register" buttons on lesson cards).
  const requestedLesson = useSearchParams().get("lesson");
  const [lessonId, setLessonId] = useState<string | null>(
    requestedLesson && findLessonById(requestedLesson, content) ? requestedLesson : null
  );
  const [step, setStep] = useState<StepId>("lesson");
  const [details, setDetails] = useState<Details>(EMPTY_DETAILS);
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();

  const lesson = lessonId ? findLessonById(lessonId, content) : undefined;

  async function sendRequest() {
    if (!lesson) return;
    setIsSending(true);
    setSendError(null);

    try {
      const response = await fetch("/api/registrations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...details, lessonType: lesson.id }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => ({}))) as { error?: string };
        throw new Error(
          data.error?.startsWith("validation.") ? data.error : "booking.sendError"
        );
      }
      setStep("done");
    } catch (error) {
      setSendError(
        error instanceof Error && error.message.startsWith("validation.")
          ? error.message
          : "booking.sendError"
      );
    } finally {
      setIsSending(false);
    }
  }

  return (
    <div>
      {step !== "done" && <Stepper currentStep={step} />}

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 16 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -16 }}
          transition={{ duration: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          {step === "lesson" && (
            <LessonStep selectedId={lessonId} onSelect={setLessonId} onNext={() => setStep("details")} />
          )}

          {step === "details" && (
            <DetailsStep
              initialValues={details}
              lessonId={lessonId}
              onBack={() => setStep("lesson")}
              onNext={(values) => {
                setDetails(values);
                setStep("review");
              }}
            />
          )}

          {step === "review" && lesson && (
            <ReviewStep
              lessonId={lesson.id}
              details={details}
              isSending={isSending}
              error={sendError}
              onBack={() => setStep("details")}
              onSubmit={sendRequest}
            />
          )}

          {step === "done" && <ThankYou lessonTitle={lesson?.title} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ── Progress indicator ────────────────────────────────────────────────

function Stepper({ currentStep }: { currentStep: StepId }) {
  const { l } = useI18n();
  const steps = [
    { id: "lesson", label: l("booking.steps.lesson") },
    { id: "details", label: l("booking.steps.details") },
    { id: "review", label: l("booking.steps.review") },
  ];
  const currentIndex = steps.findIndex((step) => step.id === currentStep);

  return (
    <ol className="mb-12 flex items-center gap-2 sm:gap-4" aria-label={l("booking.progress")}>
      {steps.map((step, index) => {
        const isComplete = index < currentIndex;
        const isCurrent = index === currentIndex;
        return (
          <li key={step.id} className="flex flex-1 items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2">
              <span
                aria-current={isCurrent ? "step" : undefined}
                className={cn(
                  "flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-xs font-medium",
                  isComplete && "bg-celadon-600 text-porcelain",
                  isCurrent && "bg-ink text-porcelain",
                  !isComplete && !isCurrent && "bg-ink/10 text-ink/50"
                )}
              >
                {isComplete ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : index + 1}
              </span>
              <span className={cn("hidden text-sm sm:inline", isCurrent ? "font-medium" : "text-ink/50")}>
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className={cn("h-px flex-1", isComplete ? "bg-celadon-600" : "bg-ink/10")} />
            )}
          </li>
        );
      })}
    </ol>
  );
}

// ── Step 1: choose a lesson ───────────────────────────────────────────

function LessonStep({
  selectedId,
  onSelect,
  onNext,
}: {
  selectedId: string | null;
  onSelect: (id: string) => void;
  onNext: () => void;
}) {
  const { content, l, locale } = useI18n();
  return (
    <div>
      <h2 className="font-display text-2xl">{l("booking.chooseLesson")}</h2>
      <p className="mt-1 text-ink/60">{l("booking.chooseLessonDescription")}</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {content.lessons.map((lesson) => {
          const isSelected = selectedId === lesson.id;
          return (
            <button
              key={lesson.id}
              type="button"
              onClick={() => onSelect(lesson.id)}
              aria-pressed={isSelected}
              className={cn(
                "relative rounded-md border p-6 text-left transition-colors",
                isSelected ? "border-celadon-600 bg-celadon-50" : "border-ink/15 hover:border-ink/30"
              )}
            >
              {isSelected && (
                <span className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-celadon-600 text-porcelain">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              )}
              <p className="text-sm font-medium text-celadon-700">
                {l(lesson.isGroup ? "lessonCard.group" : "lessonCard.individual")}
              </p>
              <p className="mt-1 font-display text-xl">{lesson.title}</p>
              <p className="mt-2 text-sm text-ink/70">{lesson.shortDescription}</p>
              <p className="mt-4 font-display text-2xl">{formatPrice(lesson.price, lesson.currency, locale)}</p>
            </button>
          );
        })}
      </div>

      <div className="mt-8">
        <Button disabled={!selectedId} onClick={onNext}>
          {l("booking.continue")}
        </Button>
      </div>
    </div>
  );
}

// ── Step 2: personal details + preferred days and time ────────────────

function DetailsStep({
  initialValues,
  lessonId,
  onBack,
  onNext,
}: {
  initialValues: Details;
  lessonId: string | null;
  onBack: () => void;
  onNext: (values: Details) => void;
}) {
  const { content, l } = useI18n();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});

  function setField<K extends keyof Details>(key: K, value: Details[K]) {
    setValues((previous) => ({ ...previous, [key]: value }));
  }

  function toggleDay(dayId: string) {
    setField(
      "preferredDays",
      values.preferredDays.includes(dayId)
        ? values.preferredDays.filter((id) => id !== dayId)
        : [...values.preferredDays, dayId]
    );
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const result = registrationSchema.safeParse({ ...values, lessonType: lessonId });
    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof RegistrationFormValues;
        fieldErrors[field] ??= issue.message; // keep the first message per field
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    onNext(values);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="max-w-xl">
      <h2 className="font-display text-2xl">{l("booking.detailsTitle")}</h2>
      <p className="mt-1 text-ink/60">{l("booking.detailsDescription")}</p>

      <div className="mt-6 space-y-5">
        <Field label={l("booking.fullName")} htmlFor="fullName" error={errors.fullName}>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            value={values.fullName}
            onChange={(e) => setField("fullName", e.target.value)}
            aria-invalid={Boolean(errors.fullName)}
            className={inputClass(errors.fullName)}
          />
        </Field>

        <Field label={l("booking.email")} htmlFor="email" error={errors.email}>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => setField("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            className={inputClass(errors.email)}
          />
        </Field>

        <Field label={l("booking.phone")} htmlFor="phone" error={errors.phone}>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => setField("phone", e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            className={inputClass(errors.phone)}
          />
        </Field>

        <Field label={l("booking.koreanLevel")} htmlFor="koreanLevel" error={errors.koreanLevel}>
          <select
            id="koreanLevel"
            value={values.koreanLevel}
            onChange={(e) => setField("koreanLevel", e.target.value)}
            aria-invalid={Boolean(errors.koreanLevel)}
            className={inputClass(errors.koreanLevel)}
          >
            <option value="" disabled>
              {l("booking.selectLevel")}
            </option>
            {content.koreanLevels.map((level) => (
              <option key={level.id} value={level.id}>
                {level.label}
              </option>
            ))}
          </select>
        </Field>

        {/* Preferred days: real checkboxes, styled as pills */}
        <fieldset>
          <legend className="text-sm font-medium">{l("booking.preferredDays")}</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {content.booking.days.map((day) => (
              <PillOption
                key={day.id}
                type="checkbox"
                name="preferredDays"
                label={day.label}
                checked={values.preferredDays.includes(day.id)}
                onChange={() => toggleDay(day.id)}
              />
            ))}
          </div>
          {errors.preferredDays && <p className="mt-1 text-sm text-dancheong-500">{errors.preferredDays}</p>}
        </fieldset>

        {/* Preferred time of day: radio buttons, styled as pills */}
        <fieldset>
          <legend className="text-sm font-medium">{l("booking.preferredTime")}</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {content.booking.timeSlots.map((slot) => (
              <PillOption
                key={slot.id}
                type="radio"
                name="preferredTime"
                label={slot.label}
                checked={values.preferredTime === slot.id}
                onChange={() => setField("preferredTime", slot.id)}
              />
            ))}
          </div>
          {errors.preferredTime && <p className="mt-1 text-sm text-dancheong-500">{errors.preferredTime}</p>}
          <p className="mt-2 text-sm text-ink/50">{content.booking.scheduleNote}</p>
        </fieldset>

        <Field label={l("booking.goals")} htmlFor="goals" error={errors.goals} optional>
          <textarea
            id="goals"
            rows={3}
            value={values.goals ?? ""}
            onChange={(e) => setField("goals", e.target.value)}
            aria-invalid={Boolean(errors.goals)}
            className={cn(inputClass(errors.goals), "resize-none")}
            placeholder={l("booking.goalsPlaceholder")}
          />
        </Field>

        <Field label={l("booking.additionalInfo")} htmlFor="additionalInfo" error={errors.additionalInfo} optional>
          <textarea
            id="additionalInfo"
            rows={3}
            value={values.additionalInfo ?? ""}
            onChange={(e) => setField("additionalInfo", e.target.value)}
            aria-invalid={Boolean(errors.additionalInfo)}
            className={cn(inputClass(errors.additionalInfo), "resize-none")}
          />
        </Field>
      </div>

      <div className="mt-8 flex gap-3">
        <Button variant="secondary" onClick={onBack}>
          {l("booking.back")}
        </Button>
        <Button type="submit">{l("booking.continue")}</Button>
      </div>
    </form>
  );
}

// ── Step 3: review and submit ─────────────────────────────────────────

function ReviewStep({
  lessonId,
  details,
  isSending,
  error,
  onBack,
  onSubmit,
}: {
  lessonId: string;
  details: Details;
  isSending: boolean;
  error: string | null;
  onBack: () => void;
  onSubmit: () => void;
}) {
  const { content, l, locale } = useI18n();
  const lesson = findLessonById(lessonId, content);
  if (!lesson) return null;

  const labelOf = (list: Array<{ id: string; label: string }>, id: string) =>
    list.find((item) => item.id === id)?.label ?? id;

  const rows: Array<[string, string | undefined]> = [
    [l("booking.reviewRows.lesson"), lesson.title],
    [l("booking.reviewRows.duration"), lesson.duration],
    [l("booking.reviewRows.frequency"), lesson.frequency],
    [l("booking.reviewRows.price"), formatPrice(lesson.price, lesson.currency, locale)],
    [l("booking.reviewRows.name"), details.fullName],
    [l("booking.reviewRows.email"), details.email],
    [l("booking.reviewRows.phone"), details.phone],
    [l("booking.reviewRows.koreanLevel"), labelOf(content.koreanLevels, details.koreanLevel)],
    [
      l("booking.reviewRows.preferredDays"),
      details.preferredDays.map((id) => labelOf(content.booking.days, id)).join(", "),
    ],
    [l("booking.reviewRows.preferredTime"), labelOf(content.booking.timeSlots, details.preferredTime)],
    [l("booking.reviewRows.goals"), details.goals],
    [l("booking.reviewRows.notes"), details.additionalInfo],
  ];

  return (
    <div className="max-w-xl">
      <h2 className="font-display text-2xl">{l("booking.reviewTitle")}</h2>
      <p className="mt-1 text-ink/60">{l("booking.reviewDescription")}</p>

      <dl className="mt-6 divide-y divide-ink/10 rounded-md border border-ink/10">
        {rows
          .filter(([, value]) => value)
          .map(([label, value]) => (
            <div key={label} className="flex items-start justify-between gap-6 px-5 py-3.5">
              <dt className="flex-shrink-0 text-sm text-ink/50">{label}</dt>
              <dd className="break-words text-right text-sm font-medium">{value}</dd>
            </div>
          ))}
      </dl>

      <p className="mt-4 text-sm text-ink/50">{l("booking.pendingNotice")}</p>

      {error && (
        <p role="alert" className="mt-4 text-sm text-dancheong-500">
          {l(error)}
        </p>
      )}

      <div className="mt-8 flex gap-3">
        <Button variant="secondary" onClick={onBack} disabled={isSending}>
          {l("booking.back")}
        </Button>
        <Button onClick={onSubmit} disabled={isSending}>
          {isSending ? l("booking.sending") : l("booking.submit")}
        </Button>
      </div>
    </div>
  );
}

// ── Step 4: thank-you screen ──────────────────────────────────────────

function ThankYou({ lessonTitle }: { lessonTitle?: string }) {
  const reduceMotion = useReducedMotion();
  const { content, l } = useI18n();

  return (
    <div className="mx-auto max-w-lg text-center" role="status">
      <motion.span
        initial={reduceMotion ? { opacity: 0 } : { scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-celadon-100"
      >
        <CheckCircle2 className="h-8 w-8 text-celadon-700" aria-hidden="true" />
      </motion.span>
      <h1 className="mt-6 font-display text-3xl">
        {l("booking.thankYou")} — {content.brand.name}
      </h1>
      <p className="mt-3 text-ink/70">
        {l("booking.received")}
        {lessonTitle ? ` (${lessonTitle})` : ""} {l("booking.responseTime")}{" "}
        {content.contact.responseWindow}.
      </p>
      <p className="mt-2 text-sm text-ink/50">
        {l("booking.pending")}
      </p>
      <div className="mt-8">
        <ButtonLink href="/">{l("booking.home")}</ButtonLink>
      </div>
    </div>
  );
}

// ── Small form helpers ────────────────────────────────────────────────

function inputClass(error?: string) {
  return cn(
    "w-full rounded border bg-porcelain px-4 py-2.5 text-sm",
    error ? "border-dancheong-500" : "border-ink/20"
  );
}

function Field({
  label,
  htmlFor,
  error,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  optional?: boolean;
  children: ReactNode;
}) {
  const { l } = useI18n();
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-medium">
        {label} {optional && <span className="font-normal text-ink/40">({l("booking.optional")})</span>}
      </label>
      <div className="mt-1.5">{children}</div>
      {error && <p className="mt-1 text-sm text-dancheong-500">{l(error)}</p>}
    </div>
  );
}

/** A checkbox or radio button that looks like a pill. The real input stays in the page for keyboards and screen readers. */
function PillOption({
  type,
  name,
  label,
  checked,
  onChange,
}: {
  type: "checkbox" | "radio";
  name: string;
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="cursor-pointer">
      <input type={type} name={name} checked={checked} onChange={onChange} className="peer sr-only" />
      <span className="inline-block rounded-full border border-ink/20 px-4 py-2 text-sm transition-colors hover:border-ink/40 peer-checked:border-ink peer-checked:bg-ink peer-checked:text-porcelain peer-focus-visible:ring-2 peer-focus-visible:ring-celadon-600 peer-focus-visible:ring-offset-2">
        {label}
      </span>
    </label>
  );
}
