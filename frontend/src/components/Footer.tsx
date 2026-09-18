// export default function Footer() {
//   return (
//     <footer className="bg-prayagraj-primary text-white py-6">
//       <div className="container mx-auto px-4 text-center">
//         <p>© {new Date().getFullYear()} Prayagraj Tourism Blog. All rights reserved.</p>
//         <p className="mt-2 text-prayagraj-secondary">
//           Explore the spiritual capital of India - Prayagraj
//         </p>
//       </div>
//     </footer>
//   )
// }

"use client"

import Link from "next/link"
import { useTranslation } from "@/lib/useTranslation"
import { translations } from "@/lib/translations"
// Simple Om symbol SVG component
function OmSymbol(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <text x="0" y="18" fontSize="18" fontFamily="sans-serif">ॐ</text>
    </svg>
  );
}

// components/Footer.js
export default function Footer() {
  const { t } = useTranslation()
  const f = translations.footer
  const nav = translations.navbar

  return (
    <footer className="bg-bhagwa-dark text-white py-12 border-t border-gold/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center text-xl font-serif-display font-bold text-gold">
              <OmSymbol className="mr-2 w-6 h-6" />
              {t(nav.brand)}
            </div>
            <p className="mt-2 text-cream/70">{t(f.tagline)}</p>
          </div>

          <div className="flex space-x-6">
            <Link href="/about" className="hover:text-gold transition">{t(f.about)}</Link>
          </div>
        </div>

        <div className="border-t border-gold/20 mt-6 pt-6 text-center text-sm text-cream/60">
          <p>© {new Date().getFullYear()} {t(nav.brand)}. {t(f.rights)}</p>
          <p className="mt-1 text-gold/80">
            ॐ असतो मा सद्गमय । तमसो मा ज्योतिर्गमय । मृत्योर्मा अमृतं गमय ॥
          </p>
        </div>
      </div>
    </footer>
  )
}