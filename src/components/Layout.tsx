// components/Layout.tsx
'use client'

import { useSelector } from 'react-redux'
import Navbar from './Navbar'
import Footer from './Footer'
import { RootState } from '../lib/store'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth)
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isAuthenticated={isAuthenticated} />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      
      <Footer />
    </div>
  )
}