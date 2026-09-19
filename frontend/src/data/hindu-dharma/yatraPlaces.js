// Unified "visitable places" index for the My Yatra tracker.
// Built from the same curated data already used by the Hindu Dharma Diary
// (temples.js + pilgrimage.js), so ids line up with the cards rendered there.
// Each entry gets a `state` (for the States Visited stat) and a
// `pilgrimageTags` array (for progress bars) alongside its display fields.

import { templesByRegion } from "./temples";
import { charDham, chotaCharDham, jyotirlingas, shaktiPeethas } from "./pilgrimage";

// Best-effort state extraction from a bilingual "City, State" / "State" string.
function lastCommaPart(bilingual) {
  const pick = (s) => {
    const parts = s.split(",").map((p) => p.trim());
    return parts[parts.length - 1];
  };
  return { hi: pick(bilingual.hi), en: pick(bilingual.en) };
}

function fromTemples() {
  const items = [];
  templesByRegion.forEach((group) => {
    group.temples.forEach((temple) => {
      items.push({
        id: temple.id,
        name: temple.name,
        category: { hi: "मंदिर", en: "Temple" },
        deity: temple.deity,
        state: lastCommaPart(temple.city),
        region: group.region,
        pilgrimageTags: [],
      });
    });
  });
  return items;
}

function fromCharDham() {
  return charDham.map((d) => ({
    id: d.id,
    name: d.name,
    category: { hi: "चार धाम", en: "Char Dham" },
    deity: d.deity,
    state: d.location,
    region: null,
    pilgrimageTags: ["char-dham"],
  }));
}

function fromChotaCharDham() {
  return chotaCharDham.map((d) => ({
    id: `chota-${d.id}`,
    name: d.name,
    category: { hi: "छोटा चार धाम", en: "Chota Char Dham" },
    deity: d.associated,
    state: d.location,
    region: null,
    pilgrimageTags: ["chota-char-dham"],
  }));
}

function fromJyotirlingas() {
  return jyotirlingas.map((j) => ({
    id: j.id,
    name: j.name,
    category: { hi: "ज्योतिर्लिंग", en: "Jyotirlinga" },
    deity: { hi: "शिव", en: "Shiva" },
    state: lastCommaPart(j.location),
    region: null,
    pilgrimageTags: ["jyotirlinga"],
  }));
}

function fromShaktiPeethas() {
  return shaktiPeethas.map((s) => ({
    id: `peetha-${s.id}`,
    name: s.name,
    category: { hi: "शक्ति पीठ", en: "Shakti Peetha" },
    deity: { hi: "देवी", en: "Devi" },
    state: lastCommaPart(s.location),
    region: null,
    pilgrimageTags: ["shakti-peetha"],
  }));
}

export const yatraPlaces = [
  ...fromCharDham(),
  ...fromChotaCharDham(),
  ...fromJyotirlingas(),
  ...fromShaktiPeethas(),
  ...fromTemples(),
];

export const yatraPlacesById = Object.fromEntries(yatraPlaces.map((p) => [p.id, p]));

// Denominators for progress bars. Shakti Peetha counts vary by text/tradition
// (see shaktiPeethasNote in pilgrimage.js) — "51+" reflects the commonly cited
// figure, not this app's curated (much shorter) sample.
export const pilgrimageTotals = {
  "jyotirlinga": { count: jyotirlingas.length, label: { hi: "12", en: "12" } },
  "char-dham": { count: charDham.length, label: { hi: "4", en: "4" } },
  "chota-char-dham": { count: chotaCharDham.length, label: { hi: "4", en: "4" } },
  "shakti-peetha": { count: null, label: { hi: "51+", en: "51+" } },
};
