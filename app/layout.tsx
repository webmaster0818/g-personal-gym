import type { Metadata, Viewport } from 'next'
import { Noto_Sans_JP, Zen_Maru_Gothic } from 'next/font/google'
import './globals.css'

const notoSansJP = Noto_Sans_JP({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-noto-sans-jp',
})

const zenMaruGothic = Zen_Maru_Gothic({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-zen-maru-gothic',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#FFF5F8',
  colorScheme: 'light',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://g-personal-gym.com'),
  title: {
    default: 'G-PersonalGym | 女性専用パーソナルジム比較・おすすめランキング【2026年最新】',
    template: '%s | G-PersonalGym',
  },
  description: '【2026年最新】女性専用パーソナルジムを徹底比較。ビーコンセプト・リボーンマイセルフ・UNDEUX SUPERBODYなど人気ジムの料金・口コミ・特徴を網羅。あなたにぴったりのパーソナルジムが見つかります。',
  keywords: ['女性専用パーソナルジム', 'パーソナルジム', '比較', 'おすすめ', 'ランキング', '料金', '口コミ', '2026'],
  authors: [{ name: 'G-PersonalGym編集部' }],
  alternates: {
    canonical: 'https://g-personal-gym.com/',
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://g-personal-gym.com/',
    title: 'G-PersonalGym | 女性専用パーソナルジム比較・おすすめランキング',
    description: '女性専用パーソナルジムを徹底比較。料金・口コミ・特徴を網羅。',
    siteName: 'G-PersonalGym',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'G-PersonalGym | 女性専用パーソナルジム比較',
    description: '女性専用パーソナルジムを徹底比較。あなたにぴったりのジムが見つかります。',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'format-detection': 'telephone=no',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'G-PersonalGym',
  url: 'https://g-personal-gym.com',
  description: '女性専用パーソナルジムの比較・ランキングメディア',
  publisher: {
    '@type': 'Organization',
    name: 'G-PersonalGym編集部',
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'G-PersonalGym',
  url: 'https://g-personal-gym.com',
  description: '女性専用パーソナルジムの比較・ランキングメディア',
  inLanguage: 'ja-JP',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://g-personal-gym.com/areas/{search_term_string}/',
    },
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${zenMaruGothic.variable}`}>
      <head>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="bg-rose-50 font-sans text-brand-text">
        {children}
      </body>
    </html>
  )
}
