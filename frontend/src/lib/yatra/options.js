export const companionOptions = [
  { id: "solo", label: { hi: "अकेले", en: "Solo" }, icon: "🧍" },
  { id: "family", label: { hi: "परिवार", en: "Family" }, icon: "👨‍👩‍👦" },
  { id: "friends", label: { hi: "मित्र", en: "Friends" }, icon: "👥" },
  { id: "partner", label: { hi: "जीवनसाथी", en: "Partner" }, icon: "💑" },
  { id: "group", label: { hi: "समूह/यात्रा दल", en: "Group" }, icon: "🚌" },
  { id: "other", label: { hi: "अन्य", en: "Other" }, icon: "✨" },
];

export const travelMethodOptions = [
  { id: "car", label: { hi: "कार", en: "Car" } },
  { id: "train", label: { hi: "ट्रेन", en: "Train" } },
  { id: "flight", label: { hi: "फ्लाइट", en: "Flight" } },
  { id: "bus", label: { hi: "बस", en: "Bus" } },
  { id: "bike", label: { hi: "बाइक", en: "Bike" } },
  { id: "walking", label: { hi: "पैदल", en: "Walking" } },
  { id: "other", label: { hi: "अन्य", en: "Other" } },
];

export function findOption(options, id) {
  return options.find((o) => o.id === id) || null;
}
