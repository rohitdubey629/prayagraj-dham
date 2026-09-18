"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "@/lib/useTranslation";

// Generic single-item expandable accordion, used to keep long content
// tucked away until the visitor asks for it (see brief section 42).
// `title`/`subtitle` accept either a plain string or a { hi, en } object.
export default function Accordion({ title, subtitle, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  const { t } = useTranslation();

  const resolve = (value) => (typeof value === "string" ? value : value ? t(value) : value);

  return (
    <div className="border border-gold/30 rounded-xl bg-white overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span>
          <span className="block font-semibold text-navy">{resolve(title)}</span>
          {subtitle && <span className="block text-sm text-gray-500 mt-0.5">{resolve(subtitle)}</span>}
        </span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-bhagwa-dark transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <div className="px-5 pb-5 text-sm text-gray-700 space-y-2">{children}</div>}
    </div>
  );
}
