import type { Metadata } from 'next'
import { Playfair_Display, Inter, Dancing_Script } from 'next/font/google'

import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
})

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-cursive',
})

export const metadata: Metadata = {
  title: 'Happy Rose Day Pooja | A Special Tribute',
  description: 'A romantic Rose Day surprise for Pooja with 16 special roses, messages, and memories. Made with love for someone truly special.',
  keywords: ['Rose Day', 'Pooja', 'Love', 'Romantic', 'Special Message', 'Valentine Week'],
  openGraph: {
    title: 'Happy Rose Day Pooja 🌹',
    description: 'A special collection of roses and heartfelt messages for Pooja.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Happy Rose Day Pooja 🌹',
    description: 'A special collection of roses and heartfelt messages for Pooja.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${dancingScript.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
