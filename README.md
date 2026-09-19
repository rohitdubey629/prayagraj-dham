# Prayagraj Dham

Prayagraj ke religious/tourist places (temples, ghats, ashrams) ki directory. Project do alag folders mein split hai:

- **`/frontend`** — Next.js app (UI)
- **`/backend`** — Express + MongoDB API (data + user-submitted places moderation)

## Setup

### Backend

```bash
cd backend
cp .env.example .env   # fill in MongoDB, JWT, admin, Cloudinary credentials
npm install
npm run seed            # one-time: loads 38 real Prayagraj places (Temple/Ghat/Ashram/Historical/Other) into MongoDB, a few marked "featured"
npm run dev             # starts API on http://localhost:5000
```

### Frontend

```bash
cd frontend
cp .env.local.example .env.local   # set NEXT_PUBLIC_API_URL if backend isn't on localhost:5000
npm install
npm run dev              # starts app on http://localhost:3000
```

Run both `npm run dev` commands side by side during development.

## Feature: Hindi/English language switcher

The navbar has a हिं/EN toggle. It switches all static UI text (via `frontend/src/lib/translations.ts`) and, for temples/places, shows the English fields (`descriptionEnglish`, `importanceEnglish`, etc.) when available, falling back to the Hindi content otherwise. The choice is remembered in the browser (`localStorage`).

## Feature: Shlokas (sacred verses)

Anyone can add a shloka at `/shlokas/add` (Name and Email required, mobile optional — no login needed). It goes into a moderation queue just like places; the admin dashboard has a "Pending Shlokas" panel to approve/reject, plus a direct-add form for the admin (auto-approved). Approved shlokas show at `/shlokas`. A shloka can optionally have a scheduled date — on that date, a popup with the shloka shows on the homepage every time it loads.

## Feature: site-wide running background

The admin dashboard has a "Homepage Hero (Slideshow)" panel — upload any number of photos or short videos. `FixedBackground.tsx` renders this slideshow (crossfade every 3s, videos autoplay muted/looped) pinned behind the entire page, on every page except the admin dashboard, login, and the two submission forms (`/places/add`, `/shlokas/add`) — controlled via `<Layout noBackground>`. Content-heavy pages (About, Sangam, Kumbh, Temples, Shlokas, Blog, temple/post detail) wrap their text in a translucent cream card (`bg-cream/92 backdrop-blur-sm`) so it stays readable over the moving background. With no slides uploaded yet, it falls back to a single default photo.

## Feature: featured places/shlokas on homepage + category filter

The admin dashboard has "Manage Places" and "Manage Shlokas" panels (listing all approved items) with a "Feature on Homepage" toggle. The homepage's "पावन स्थल"/"पवित्र वचन" sections now show only the featured items pulled live from the backend, each with a "सभी देखें" (View All) button linking to the full `/temples` or `/shlokas` list. If nothing is featured yet, those sections simply don't render. `/temples` also has category filter buttons (All/Temple/Ghat/Ashram/Historical/Other).

## Feature: user-submitted places

Any visitor can go to **जगह जोड़ें** (`/places/add`) and submit a missing temple/ghat/ashram with details and a photo. Submissions start as `pending` and are not shown publicly. An admin logs in at `/login` (credentials from the backend's `ADMIN_EMAIL`/`ADMIN_PASSWORD`) and reviews pending submissions from the admin dashboard (`/admin`), approving or rejecting each one. Once approved, a place becomes visible on `/temples`. Submitters cannot edit or delete their own submissions — only the admin can.

## Learn More

This app uses [Next.js](https://nextjs.org) for the frontend. See the [Next.js Documentation](https://nextjs.org/docs) for framework details.
