// Flattens every data source into one uniform, searchable array.
// Each entry: { title: {hi,en}, description: {hi,en}, category: {hi,en}, sectionId }
// `category` powers the filter chips; `sectionId` powers "jump to section".
// Search matches against BOTH languages so a query works regardless of the
// site's active language toggle.

import { fourVedas } from "./vedas";
import { majorUpanishads } from "./upanishads";
import { epics, bhagavadGita } from "./itihasa";
import { mahapuranas } from "./puranas";
import { sixDarshanas, vedantaTraditions } from "./darshanas";
import { majorConcepts, glossaryTerms } from "./concepts";
import { trimurti, deviForms, dashavatara, otherDeities } from "./deities";
import {
  charDham,
  chotaCharDham,
  jyotirlingas,
  shaktiPeethas,
  sacredRivers,
  sacredCities,
} from "./pilgrimage";
import { templesByRegion } from "./temples";
import { festivals } from "./festivals";
import { yogaPaths } from "./yoga";
import { samskaras } from "./lifeStages";
import { symbols, mantras } from "./symbolsMantras";
import { sacredTexts, traditions } from "./textsTraditions";

const CATEGORY = {
  SCRIPTURES: { hi: "धर्मग्रंथ", en: "Scriptures" },
  DEITIES: { hi: "देवी-देवता", en: "Deities" },
  PLACES: { hi: "स्थल", en: "Places" },
  FESTIVALS: { hi: "त्योहार", en: "Festivals" },
  PHILOSOPHY: { hi: "दर्शनशास्त्र", en: "Philosophy" },
  CONCEPTS: { hi: "अवधारणाएँ", en: "Concepts" },
};

export const searchCategories = [
  { hi: "सभी", en: "All" },
  CATEGORY.SCRIPTURES,
  CATEGORY.DEITIES,
  CATEGORY.PLACES,
  CATEGORY.FESTIVALS,
  CATEGORY.PHILOSOPHY,
  CATEGORY.CONCEPTS,
];

function buildIndex() {
  const entries = [];

  fourVedas.forEach((v) =>
    entries.push({ title: v.name, description: v.description, category: CATEGORY.SCRIPTURES, sectionId: "vedas" })
  );
  majorUpanishads.forEach((u) =>
    entries.push({ title: u.name, description: u.note, category: CATEGORY.SCRIPTURES, sectionId: "upanishads" })
  );
  epics.forEach((e) =>
    entries.push({ title: e.name, description: e.description, category: CATEGORY.SCRIPTURES, sectionId: "itihasa" })
  );
  entries.push({ title: { hi: "भगवद्गीता", en: "Bhagavad Gita" }, description: bhagavadGita.what, category: CATEGORY.SCRIPTURES, sectionId: "itihasa" });
  mahapuranas.forEach((p) =>
    entries.push({ title: p.name, description: p.focus, category: CATEGORY.SCRIPTURES, sectionId: "puranas" })
  );
  sacredTexts.forEach((t) =>
    entries.push({ title: t.name, description: t.why, category: CATEGORY.SCRIPTURES, sectionId: "texts" })
  );

  sixDarshanas.forEach((d) =>
    entries.push({ title: d.name, description: d.simple, category: CATEGORY.PHILOSOPHY, sectionId: "philosophy" })
  );
  vedantaTraditions.forEach((v) =>
    entries.push({ title: v.name, description: v.view, category: CATEGORY.PHILOSOPHY, sectionId: "philosophy" })
  );
  traditions.forEach((t) =>
    entries.push({ title: t.name, description: t.ideas, category: CATEGORY.PHILOSOPHY, sectionId: "traditions" })
  );
  yogaPaths.forEach((y) =>
    entries.push({ title: y.name, description: y.description, category: CATEGORY.PHILOSOPHY, sectionId: "yoga" })
  );

  majorConcepts.forEach((c) =>
    entries.push({ title: c.term, description: c.definition, category: CATEGORY.CONCEPTS, sectionId: "concepts" })
  );
  glossaryTerms.forEach((g) =>
    entries.push({ title: g.term, description: g.definition, category: CATEGORY.CONCEPTS, sectionId: "glossary" })
  );

  trimurti.forEach((d) =>
    entries.push({ title: d.name, description: d.significance, category: CATEGORY.DEITIES, sectionId: "deities" })
  );
  deviForms.forEach((d) =>
    entries.push({ title: d.name, description: d.significance, category: CATEGORY.DEITIES, sectionId: "deities" })
  );
  dashavatara.forEach((d) =>
    entries.push({ title: d.name, description: d.note, category: CATEGORY.DEITIES, sectionId: "deities" })
  );
  otherDeities.forEach((d) =>
    entries.push({ title: d.name, description: d.significance, category: CATEGORY.DEITIES, sectionId: "deities" })
  );

  charDham.forEach((p) =>
    entries.push({ title: p.name, description: p.info, category: CATEGORY.PLACES, sectionId: "char-dham" })
  );
  chotaCharDham.forEach((p) =>
    entries.push({ title: p.name, description: p.info, category: CATEGORY.PLACES, sectionId: "char-dham" })
  );
  jyotirlingas.forEach((j) =>
    entries.push({ title: j.name, description: j.location, category: CATEGORY.PLACES, sectionId: "jyotirlingas" })
  );
  shaktiPeethas.forEach((s) =>
    entries.push({ title: s.name, description: s.note, category: CATEGORY.PLACES, sectionId: "shakti-peethas" })
  );
  sacredRivers.forEach((r) =>
    entries.push({ title: r.name, description: r.significance, category: CATEGORY.PLACES, sectionId: "sacred-places" })
  );
  sacredCities.forEach((c) =>
    entries.push({ title: c.name, description: c.info, category: CATEGORY.PLACES, sectionId: "sacred-places" })
  );
  templesByRegion.forEach((group) =>
    group.temples.forEach((t) =>
      entries.push({ title: t.name, description: t.why, category: CATEGORY.PLACES, sectionId: "temples" })
    )
  );

  festivals.forEach((f) =>
    entries.push({ title: f.name, description: f.significance, category: CATEGORY.FESTIVALS, sectionId: "festivals" })
  );

  symbols.forEach((s) =>
    entries.push({ title: s.name, description: s.meaning, category: CATEGORY.CONCEPTS, sectionId: "symbols" })
  );
  mantras.forEach((m) =>
    entries.push({ title: m.name, description: m.meaning, category: CATEGORY.CONCEPTS, sectionId: "mantras" })
  );
  samskaras.forEach((s) =>
    entries.push({ title: s.name, description: s.note, category: CATEGORY.CONCEPTS, sectionId: "samskaras" })
  );

  return entries;
}

export const searchIndex = buildIndex();

// Matches a query string against both hi and en text of an entry.
export function matchesQuery(entry, query) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  const haystacks = [entry.title.hi, entry.title.en, entry.description.hi, entry.description.en];
  return haystacks.some((h) => (h || "").toLowerCase().includes(q));
}

// Matches an entry's category against a selected filter's English key
// (categories are compared by their English label since that's stable
// regardless of the active display language).
export function matchesCategory(entry, selected) {
  return selected.en === "All" || entry.category.en === selected.en;
}
