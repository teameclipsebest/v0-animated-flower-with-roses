import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

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
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
