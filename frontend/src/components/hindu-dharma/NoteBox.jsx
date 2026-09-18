"use client";

import { Info } from "lucide-react";

// A small callout used for "traditions vary" style disclaimers throughout the page.
export default function NoteBox({ children }) {
  return (
    <div className="flex gap-3 items-start bg-gold/10 border border-gold/30 rounded-lg px-4 py-3 text-sm text-navy/80 my-6">
      <Info size={18} className="text-bhagwa-dark shrink-0 mt-0.5" />
      <p>{children}</p>
    </div>
  );
}
