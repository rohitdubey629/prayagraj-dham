import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import ReduxProvider from '../providers/ReduxProvider'
import LanguageInitializer from '../providers/LanguageInitializer'
import AuthInitializer from '../providers/AuthInitializer'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif-display' })

export const metadata: Metadata = {
  title: 'Prayagraj Tourism Blog',
  description: 'Explore the spiritual and cultural heritage of Prayagraj',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${inter.className}`}>
        <ReduxProvider>
          <LanguageInitializer />
          <AuthInitializer />
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
