"use client";

import { useSyncExternalStore, useMemo, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import {
  subscribe,
  getSnapshot,
  getServerSnapshot,
  loadYatraData,
  resetYatra,
  addVisit as storeAddVisit,
  deleteVisit as storeDeleteVisit,
  toggleWishlist as storeToggleWishlist,
} from "./yatraStore";
import { yatraPlaces, yatraPlacesById, pilgrimageTotals } from "@/data/hindu-dharma/yatraPlaces";

/**
 * Subscribes a component to the Yatra store (visits + wishlist) and derives
 * every stat/progress number the UI needs. Also owns fetching the signed-in
 * user's data from the backend and re-fetching whenever the auth token
 * changes (login/logout).
 */
export function useYatra() {
  const token = useSelector((state) => state.auth.token);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const { visits, wishlist, status } = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    if (token) {
      loadYatraData(token);
    } else {
      resetYatra();
    }
  }, [token]);

  const addVisit = useCallback(
    (placeId, data) => (token ? storeAddVisit(placeId, data, token) : Promise.reject(new Error("Not signed in"))),
    [token]
  );
  const deleteVisit = useCallback(
    (visitId) => (token ? storeDeleteVisit(visitId, token) : Promise.reject(new Error("Not signed in"))),
    [token]
  );
  const toggleWishlist = useCallback(
    (placeId) => (token ? storeToggleWishlist(placeId, token) : Promise.reject(new Error("Not signed in"))),
    [token]
  );

  const stats = useMemo(() => {
    const uniquePlaceIds = new Set(visits.map((v) => v.placeId));
    const states = new Set();
    const tagCounts = {};

    uniquePlaceIds.forEach((placeId) => {
      const place = yatraPlacesById[placeId];
      if (!place) return;
      if (place.state?.en) states.add(place.state.en);
      place.pilgrimageTags.forEach((tag) => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      });
    });

    const progress = Object.entries(pilgrimageTotals).map(([tag, total]) => ({
      tag,
      visited: tagCounts[tag] || 0,
      total: total.count,
      totalLabel: total.label,
    }));

    return {
      uniqueTemples: uniquePlaceIds.size,
      totalVisits: visits.length,
      statesVisited: states.size,
      progress,
    };
  }, [visits]);

  const timeline = useMemo(
    () =>
      [...visits]
        .sort((a, b) => new Date(b.visitedAt) - new Date(a.visitedAt))
        .map((visit) => ({ ...visit, place: yatraPlacesById[visit.placeId] }))
        .filter((entry) => entry.place),
    [visits]
  );

  const wishlistPlaces = useMemo(
    () =>
      wishlist
        .map((id) => yatraPlacesById[id])
        .filter(Boolean)
        .map((place) => ({
          ...place,
          visited: visits.some((v) => v.placeId === place.id),
        })),
    [wishlist, visits]
  );

  const visitedPlaces = useMemo(() => {
    const byPlace = new Map();
    visits.forEach((v) => {
      const place = yatraPlacesById[v.placeId];
      if (!place) return;
      const entry = byPlace.get(place.id) || { place, visitCount: 0, lastVisitedAt: null };
      entry.visitCount += 1;
      if (!entry.lastVisitedAt || new Date(v.visitedAt) > new Date(entry.lastVisitedAt)) {
        entry.lastVisitedAt = v.visitedAt;
      }
      byPlace.set(place.id, entry);
    });
    return Array.from(byPlace.values());
  }, [visits]);

  const onThisDay = useMemo(() => {
    const today = new Date();
    const month = today.getMonth();
    const day = today.getDate();
    return visits
      .filter((v) => {
        const d = new Date(v.visitedAt);
        return d.getMonth() === month && d.getDate() === day && d.getFullYear() !== today.getFullYear();
      })
      .map((v) => ({ ...v, place: yatraPlacesById[v.placeId] }))
      .filter((v) => v.place);
  }, [visits]);

  return {
    isAuthenticated,
    status,
    visits,
    wishlist,
    stats,
    timeline,
    wishlistPlaces,
    visitedPlaces,
    onThisDay,
    allPlaces: yatraPlaces,
    addVisit,
    deleteVisit,
    toggleWishlist,
  };
}
