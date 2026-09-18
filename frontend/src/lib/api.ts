// lib/api.ts
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export interface Place {
  _id: string;
  name: string;
  nameHindi: string;
  category: "Temple" | "Ghat" | "Ashram" | "Historical" | "Other";
  location: string;
  locationEnglish?: string;
  descriptionHindi: string;
  descriptionEnglish?: string;
  visitingHours?: string;
  visitingHoursEnglish?: string;
  importance?: string;
  importanceEnglish?: string;
  specialFeatures?: string[];
  specialFeaturesEnglish?: string[];
  imageUrl?: string;
  images?: string[];
  mapsLink?: string;
  status: "pending" | "approved" | "rejected";
  featured: boolean;
  rejectionReason?: string;
  createdAt: string;
}

export interface LocalizedPlace {
  name: string;
  description: string;
  importance?: string;
  location: string;
  visitingHours?: string;
  specialFeatures: string[];
}

export function getLocalizedPlace(place: Place, lang: "hi" | "en"): LocalizedPlace {
  if (lang === "en") {
    return {
      name: place.name,
      description: place.descriptionEnglish || place.descriptionHindi,
      importance: place.importanceEnglish || place.importance,
      location: place.locationEnglish || place.location,
      visitingHours: place.visitingHoursEnglish || place.visitingHours,
      specialFeatures: place.specialFeaturesEnglish || place.specialFeatures || [],
    };
  }
  return {
    name: place.nameHindi,
    description: place.descriptionHindi,
    importance: place.importance,
    location: place.location,
    visitingHours: place.visitingHours,
    specialFeatures: place.specialFeatures || [],
  };
}

async function handleResponse<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.message || `Request failed with status ${res.status}`);
  }
  return res.json();
}

export function getPlaces(category?: string, featured?: boolean): Promise<Place[]> {
  const params = new URLSearchParams();
  if (category) params.set("category", category);
  if (featured) params.set("featured", "true");
  const query = params.toString() ? `?${params.toString()}` : "";
  return fetch(`${API_URL}/api/places${query}`).then((res) => handleResponse<Place[]>(res));
}

export function getPlace(id: string): Promise<Place> {
  return fetch(`${API_URL}/api/places/${id}`).then((res) => handleResponse<Place>(res));
}

export function submitPlace(formData: FormData): Promise<Place> {
  return fetch(`${API_URL}/api/places`, {
    method: "POST",
    body: formData,
  }).then((res) => handleResponse<Place>(res));
}

export function adminLogin(email: string, password: string): Promise<{ token: string }> {
  return fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  }).then((res) => handleResponse<{ token: string }>(res));
}

function authHeaders(token: string) {
  return { Authorization: `Bearer ${token}` };
}

export function getPendingPlaces(token: string): Promise<Place[]> {
  return fetch(`${API_URL}/api/places/admin/pending`, {
    headers: authHeaders(token),
  }).then((res) => handleResponse<Place[]>(res));
}

export function approvePlace(id: string, token: string): Promise<Place> {
  return fetch(`${API_URL}/api/places/admin/${id}/approve`, {
    method: "POST",
    headers: authHeaders(token),
  }).then((res) => handleResponse<Place>(res));
}

export function rejectPlace(id: string, reason: string, token: string): Promise<Place> {
  return fetch(`${API_URL}/api/places/admin/${id}/reject`, {
    method: "POST",
    headers: { ...authHeaders(token), "Content-Type": "application/json" },
    body: JSON.stringify({ reason }),
  }).then((res) => handleResponse<Place>(res));
}

export function getApprovedPlacesAdmin(token: string): Promise<Place[]> {
  return fetch(`${API_URL}/api/places/admin/approved`, {
    headers: authHeaders(token),
  }).then((res) => handleResponse<Place[]>(res));
}

export function toggleFeaturedPlace(id: string, featured: boolean, token: string): Promise<Place> {
  return fetch(`${API_URL}/api/places/admin/${id}/feature`, {
    method: "POST",
    headers: { ...authHeaders(token), "Content-Type": "application/json" },
    body: JSON.stringify({ featured }),
  }).then((res) => handleResponse<Place>(res));
}

export interface Shloka {
  _id: string;
  text: string;
  source?: string;
  meaning?: string;
  scheduledDate?: string;
  status: "pending" | "approved" | "rejected";
  featured: boolean;
  rejectionReason?: string;
  submittedByName?: string;
  submittedByEmail?: string;
  submittedByMobile?: string;
  createdAt: string;
}

export interface NewShlokaInput {
  text: string;
  source?: string;
  meaning?: string;
  scheduledDate?: string;
  submittedByName: string;
  submittedByEmail: string;
  submittedByMobile?: string;
}

export function getShlokas(featured?: boolean): Promise<Shloka[]> {
  const query = featured ? "?featured=true" : "";
  return fetch(`${API_URL}/api/shlokas${query}`).then((res) => handleResponse<Shloka[]>(res));
}

export function getTodayShlokas(): Promise<Shloka[]> {
  return fetch(`${API_URL}/api/shlokas/today`).then((res) => handleResponse<Shloka[]>(res));
}

export function submitShloka(data: NewShlokaInput): Promise<Shloka> {
  return fetch(`${API_URL}/api/shlokas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => handleResponse<Shloka>(res));
}

export function getPendingShlokas(token: string): Promise<Shloka[]> {
  return fetch(`${API_URL}/api/shlokas/admin/pending`, {
    headers: authHeaders(token),
  }).then((res) => handleResponse<Shloka[]>(res));
}

export function adminCreateShloka(
  data: { text: string; source?: string; meaning?: string; scheduledDate?: string },
  token: string
): Promise<Shloka> {
  return fetch(`${API_URL}/api/shlokas/admin`, {
    method: "POST",
    headers: { ...authHeaders(token), "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => handleResponse<Shloka>(res));
}

export function approveShloka(id: string, token: string): Promise<Shloka> {
  return fetch(`${API_URL}/api/shlokas/admin/${id}/approve`, {
    method: "POST",
    headers: authHeaders(token),
  }).then((res) => handleResponse<Shloka>(res));
}

export function rejectShloka(id: string, reason: string, token: string): Promise<Shloka> {
  return fetch(`${API_URL}/api/shlokas/admin/${id}/reject`, {
    method: "POST",
    headers: { ...authHeaders(token), "Content-Type": "application/json" },
    body: JSON.stringify({ reason }),
  }).then((res) => handleResponse<Shloka>(res));
}

export function getApprovedShlokasAdmin(token: string): Promise<Shloka[]> {
  return fetch(`${API_URL}/api/shlokas/admin/approved`, {
    headers: authHeaders(token),
  }).then((res) => handleResponse<Shloka[]>(res));
}

export function toggleFeaturedShloka(id: string, featured: boolean, token: string): Promise<Shloka> {
  return fetch(`${API_URL}/api/shlokas/admin/${id}/feature`, {
    method: "POST",
    headers: { ...authHeaders(token), "Content-Type": "application/json" },
    body: JSON.stringify({ featured }),
  }).then((res) => handleResponse<Shloka>(res));
}

export interface Post {
  _id: string;
  title: string;
  content: string;
  category: string;
  image?: string;
  author: string;
  date: string;
  featured: boolean;
  createdAt: string;
}

export interface PostInput {
  title: string;
  content: string;
  category: string;
  image?: string;
  author: string;
  date: string;
}

export function getPosts(featured?: boolean): Promise<Post[]> {
  const query = featured ? "?featured=true" : "";
  return fetch(`${API_URL}/api/posts${query}`).then((res) => handleResponse<Post[]>(res));
}

export function getPost(id: string): Promise<Post> {
  return fetch(`${API_URL}/api/posts/${id}`).then((res) => handleResponse<Post>(res));
}

export function getPostsAdmin(token: string): Promise<Post[]> {
  return fetch(`${API_URL}/api/posts/admin`, {
    headers: authHeaders(token),
  }).then((res) => handleResponse<Post[]>(res));
}

export function createPost(data: PostInput, token: string): Promise<Post> {
  return fetch(`${API_URL}/api/posts/admin`, {
    method: "POST",
    headers: { ...authHeaders(token), "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => handleResponse<Post>(res));
}

export function updatePost(id: string, data: PostInput, token: string): Promise<Post> {
  return fetch(`${API_URL}/api/posts/admin/${id}`, {
    method: "PUT",
    headers: { ...authHeaders(token), "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => handleResponse<Post>(res));
}

export function deletePost(id: string, token: string): Promise<{ message: string }> {
  return fetch(`${API_URL}/api/posts/admin/${id}`, {
    method: "DELETE",
    headers: authHeaders(token),
  }).then((res) => handleResponse<{ message: string }>(res));
}

export function toggleFeaturedPost(id: string, featured: boolean, token: string): Promise<Post> {
  return fetch(`${API_URL}/api/posts/admin/${id}/feature`, {
    method: "POST",
    headers: { ...authHeaders(token), "Content-Type": "application/json" },
    body: JSON.stringify({ featured }),
  }).then((res) => handleResponse<Post>(res));
}

export interface HeroSlide {
  _id: string;
  mediaUrl: string;
  mediaType: "image" | "video";
  createdAt: string;
}

export function getHeroSlides(): Promise<HeroSlide[]> {
  return fetch(`${API_URL}/api/hero`).then((res) => handleResponse<HeroSlide[]>(res));
}

export function addHeroSlide(file: File, token: string): Promise<HeroSlide> {
  const formData = new FormData();
  formData.append("media", file);
  return fetch(`${API_URL}/api/hero`, {
    method: "POST",
    headers: authHeaders(token),
    body: formData,
  }).then((res) => handleResponse<HeroSlide>(res));
}

export function deleteHeroSlide(id: string, token: string): Promise<{ message: string }> {
  return fetch(`${API_URL}/api/hero/${id}`, {
    method: "DELETE",
    headers: authHeaders(token),
  }).then((res) => handleResponse<{ message: string }>(res));
}
