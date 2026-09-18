// components/Layout.tsx
'use client'

import { useSelector } from 'react-redux'
import Navbar from './Navbar'
import Footer from './Footer'
import FixedBackground from './FixedBackground'
import { RootState } from '../lib/store'

export default function Layout({
  children,
  noBackground = false,
}: {
  children: React.ReactNode
  /** Set true for functional pages (forms, admin) where the running background would distract. */
  noBackground?: boolean
}) {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth)

  return (
    <div className="min-h-screen flex flex-col">
      {!noBackground && <FixedBackground />}
      <Navbar isAuthenticated={isAuthenticated} />

      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      <Footer />
    </div>
  )
}
