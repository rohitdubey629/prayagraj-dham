// Personal Yatra (pilgrimage visit diary) — backend-backed data store.
//
// Every visit/wishlist entry is scoped to the signed-in user by the backend
// (see backend/src/routes/yatra.ts, gated by requireUser). This module is a
// small client-side cache in front of that API: it fetches once per signed-in
// session, then keeps every mutation optimistic-free but instant by updating
// the cache from the server's response and notifying subscribers.
//
// Data model (mirrors the backend Visit/Wishlist Mongoose models):
//   Visit:     { id, placeId, visitedAt, visitNumber, companions,
//                travelMethod, memory, notes, photos, createdAt }
//   Wishlist:  a plain array of placeId strings.

import { getVisits, addVisit as apiAddVisit, deleteVisit as apiDeleteVisit, getWishlist, toggleWishlist as apiToggleWishlist } from "@/lib/api";

const EMPTY_STATE = { visits: [], wishlist: [], status: "idle" };

let state = EMPTY_STATE;
let loadedForToken = null;
const listeners = new Set();

function normalizeVisit(visit) {
  return { ...visit, id: visit._id };
}

function emit() {
  listeners.forEach((listener) => listener());
}

// --- useSyncExternalStore contract ---

export function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getSnapshot() {
  return state;
}

export function getServerSnapshot() {
  return EMPTY_STATE;
}

// --- Session lifecycle ---

export function resetYatra() {
  loadedForToken = null;
  state = EMPTY_STATE;
  emit();
}

export async function loadYatraData(token) {
  if (!token || loadedForToken === token) return;
  loadedForToken = token;
  state = { ...state, status: "loading" };
  emit();
  try {
    const [visits, wishlistItems] = await Promise.all([getVisits(token), getWishlist(token)]);
    state = {
      visits: visits.map(normalizeVisit),
      wishlist: wishlistItems.map((item) => item.placeId),
      status: "ready",
    };
  } catch {
    loadedForToken = null;
    state = { ...EMPTY_STATE, status: "error" };
  }
  emit();
}

// --- Writes (all require a valid token — callers get it from useYatra()) ---

export async function addVisit(placeId, data, token) {
  const visit = normalizeVisit(await apiAddVisit({ placeId, ...data }, token));
  state = { ...state, visits: [...state.visits, visit] };
  emit();
  return visit;
}

export async function deleteVisit(visitId, token) {
  await apiDeleteVisit(visitId, token);
  state = { ...state, visits: state.visits.filter((v) => v.id !== visitId) };
  emit();
}

export async function toggleWishlist(placeId, token) {
  const result = await apiToggleWishlist(placeId, token);
  state = {
    ...state,
    wishlist: result.wishlisted ? [...state.wishlist, placeId] : state.wishlist.filter((id) => id !== placeId),
  };
  emit();
  return result;
}
