import './globals.css'
import SiteNav from '@/components/nav/SiteNav'
import { SITE_URL } from '@/lib/site'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'Is My E-Bike Legal? Australian E-Bike Laws 2026', template: '%s | AU E-Bike Laws' },
  description: 'Is your e-bike legal or illegal? The 2026 guide to e-bike (ebike) rules in every Australian state and territory: power limits, penalties, compliance, and what parents risk.',
  keywords: ['is my e-bike legal', 'ebike legal Australia', 'illegal e-bike', 'e-bike laws Australia', 'ebike laws', 'electric bike regulations', 'EN 15194', '250W limit', 'e-bike penalties Australia'],
  verification: { google: 'google93cc7acf4c60246f' },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'AU E-Bike Laws',
    images: [{ url: '/og-preview.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-preview.png'],
  },
  icons: {
    icon: [
      { url: '/Favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "try{var s=localStorage.getItem('textSize');var p={lg:118,xl:136}[s];if(p)document.documentElement.style.fontSize=p+'%'}catch(e){}" }} />
      </head>
      <body>
        <SiteNav />
        {children}
      </body>
    </html>
  )
}
