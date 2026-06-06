import { DM_Sans, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans'
})

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant'
})

export const metadata = {
  title: 'Centro Dental Alroza — Implantes Dentales en CDMX | Dr. Alejandro Hurtado',
  description: 'Especialistas en implantes dentales en Benito Juárez, CDMX. Dr. Alejandro Hurtado, cirujano oral con 15+ años de experiencia. Consulta tu caso, All-on-4, coronas de zirconia. Atención en español e inglés.',
  keywords: 'implantes dentales cdmx, implantes dentales benito juarez, dentista implantes ciudad de mexico, all on 4 cdmx, dr alejandro hurtado dentista, centro dental alroza',
  authors: [{ name: 'Centro Dental Alroza' }],
  openGraph: {
    title: 'Centro Dental Alroza — Implantes Dentales en CDMX',
    description: 'Especialistas en implantes dentales. Dr. Alejandro Hurtado. Benito Juárez, CDMX.',
    url: 'https://centro-dental-alroza.vercel.app',
    siteName: 'Centro Dental Alroza',
    locale: 'es_MX',
    type: 'website',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://centro-dental-alroza.vercel.app',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              "name": "Centro Dental Alroza",
              "description": "Especialistas en implantes dentales en Benito Juárez, CDMX",
              "url": "https://centro-dental-alroza.vercel.app",
              "telephone": "+52-55-1233-0305",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Manzanas 44-4, Tlacoquemecatl del Valle",
                "addressLocality": "Benito Juárez",
                "addressRegion": "CDMX",
                "postalCode": "03200",
                "addressCountry": "MX"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "19.3910",
                "longitude": "-99.1676"
              },
              "openingHours": "Mo-Fr 09:00-19:00",
              "sameAs": [
                "https://www.instagram.com/centrodentalalroza/",
                "https://www.facebook.com/centrodentalalroza/"
              ],
              "medicalSpecialty": "Dentistry",
              "hasMap": "https://maps.app.goo.gl/96bfjtTjixAfkBVg7",
              "employee": {
                "@type": "Person",
                "name": "Dr. Alejandro Hurtado",
                "jobTitle": "Implantólogo y Cirujano Oral"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "47"
              }
            })
          }}
        />
      </head>
      <body className={`${dmSans.variable} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  )
}
