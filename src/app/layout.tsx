import '@/styles/globals.css'

import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import PlausibleProvider from 'next-plausible'

const title = 'Astro Photography Exposure Calculator | Connor Dinnadge'
const description =
    'Get precise exposure times for your astro photography needs. Calculate the optimal exposure for your night sky photos with this simple tool'
const ogImage = '/images/meta_image.jpg'
const twitterImage = '/images/meta_image.jpg'

export const metadata: Metadata = {
    title: title,
    description: description,
    keywords: [
        'astro photography exposure calculator',
        'night sky exposure time',
        'astrophotography settings',
        'optimal exposure for star photos',
        'calculate exposure for night sky',
        'best settings for astro photography',
        'star photography exposure',
        'night sky photo settings',
        'astrophotography exposure tool',
        'exposure time calculator for stars',
        'night sky photo calculator',
        'ideal exposure for astro photos',
        'astro photography timing',
        'calculate night sky exposure',
        'star photography settings guide',
    ],
    openGraph: {
        title: title,
        description: description,
        url: 'https://www.astro-calculator.connordinnadge.com',
        siteName: 'Astro Photography Exposure Calculator',
        images: [
            {
                url: ogImage,
                width: 600,
                height: 400,
            },
        ],
        locale: 'en_UK',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: title,
        description: description,
        creator: '@connordinnadge',
        images: [
            {
                url: twitterImage,
                width: 600,
                height: 400,
            },
        ],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en' className={`${GeistSans.variable}`}>
            <PlausibleProvider domain='astro-calculator.connordinnadge.com' />
            <body>{children}</body>
        </html>
    )
}
