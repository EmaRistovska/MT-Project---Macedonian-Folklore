import React from "react"
import type { Metadata } from 'next'
import { Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant"
});

export const metadata: Metadata = {
  title: 'Македонски Културен Атлас | Таму каде традицијата живее',
  description: 'Доживејте го богатото културно наследство на Македонија преку едно импресивно патување низ фолклор, музика, традиционални носии, обичаи и автентична кујна.',
  // generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/mac.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/mac.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/mac.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
