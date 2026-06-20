import './globals.css'
import SiteNav from '@/components/nav/SiteNav'

export const metadata = {
  title: { default: 'Australian E-Bike Laws 2026', template: '%s | AU E-Bike Laws' },
  description: 'Complete guide to e-bike regulations across all Australian states and territories.',
  verification: { google: 'google93cc7acf4c60246f' },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'AU E-Bike Laws',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteNav />
        {children}
      </body>
    </html>
  )
}
