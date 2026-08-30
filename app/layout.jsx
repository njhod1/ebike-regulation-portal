import './globals.css'
import SiteNav from '@/components/nav/SiteNav'
import { SITE_URL } from '@/lib/site'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'Australian E-Bike Laws 2026', template: '%s | AU E-Bike Laws' },
  description: 'The complete guide to e-bike regulations across all Australian states and territories — power limits, penalties, compliance requirements, and parental liability explained.',
  keywords: ['e-bike laws Australia', 'electric bike regulations', 'NSW e-bike', 'EPAC', '250W limit', 'e-bike compliance', 'e-bike penalties Australia'],
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
  icons: { icon: '/Favicon.svg', type: 'image/svg+xml' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU">
      <body>
        <SiteNav />
        {children}
      </body>
    </html>
  )
}
