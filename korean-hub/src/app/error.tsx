"use client";

import { ErrorState } from "@/components/ui";
import { useI18n } from "@/i18n";

export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
  const { l } = useI18n();
  return (
    <ErrorState
      title={l("pages.error.title")}
      description={
        <>
          {l("pages.error.description")}{" "}
          <button type="button" onClick={reset} className="underline">
            {l("pages.error.retry")}
          </button>
        </>
      }
    />
  );
}
