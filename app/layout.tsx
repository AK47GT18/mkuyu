import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Mkuyu Game Lodge | Boutique Eco-Safari Sanctuary | Salima, Malawi',
  description:
    'Discover Mkuyu Game Lodge in Salima, Malawi. 100% off-grid boutique eco-sanctuaries, guided safari game drives, panoramic watchtower, and tranquil bush hospitality near Lake Malawi.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/favicons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} font-sans h-full antialiased selection:bg-[#5B713A] selection:text-white`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
