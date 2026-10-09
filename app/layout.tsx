import type { Metadata, Viewport } from 'next'
import { Noto_Sans_JP, Shippori_Mincho, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import ContentReveal from '@/components/ContentReveal'
import { OG_BASE, TWITTER_BASE } from '@/lib/seo'
import { AREA_COUNT, BRAND_COUNT } from '@/lib/site'

const notoSansJP = Noto_Sans_JP({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-noto-sans-jp',
})

// 見出し用の上質な明朝（清潔感・上品さを演出）
const shipporiMincho = Shippori_Mincho({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-mincho',
})

// 欧文アクセント用のエレガントなセリフ
const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-cormorant',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#FFFFFF',
  colorScheme: 'light',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://woman-gym.com'),
  title: {
    default: `女性専用パーソナルジムを料金・エリアで探す【2026年8月】全国${AREA_COUNT}エリア・主要${BRAND_COUNT}ブランドを掲載 | G-PersonalGym`,
    template: '%s | G-PersonalGym',
  },
  description: `女性専用パーソナルジムを、お住まいのエリアと料金から探せます。全国${AREA_COUNT}エリア・主要${BRAND_COUNT}ブランド（ビーコンセプト、リボーンマイセルフ、かたぎり塾ほか）の料金・入会金・体験の有無を独自調査でまとめました。ランキングで比較したい方は「おすすめランキング」をご覧ください。【2026年8月時点】`,
  keywords: ['女性専用パーソナルジム', 'パーソナルジム', '比較', 'おすすめ', 'ランキング', '料金', '口コミ', '2026'],
  authors: [{ name: 'G-PersonalGym編集部' }],
  // 2026-10-06 url・title・description を外した。固定値だと全135ページの og:url が TOP、og:title が共通になる。
  // title / description は Next.js がページごとの値から埋める。og:url は各ページが lib/seo.ts の pageUrlMeta() で
  // canonical と同じ値を入れる（2026-10-07）。共通値（type/locale/siteName/images）は OG_BASE に一本化。
  openGraph: OG_BASE,
  // 2026-10-08 twitter の固定 title/description を外した。固定値だと全135ページの twitter:title が共通になる。
  // card/images は lib/seo.ts の TWITTER_BASE に一本化。title/description は Next.js がページごとの og:title/og:description から埋める。
  twitter: TWITTER_BASE,
  icons: {
    icon: [{ url: '/favicon.ico', sizes: 'any' }, { url: '/icon.png', type: 'image/png', sizes: '512x512' }],
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
  url: 'https://woman-gym.com',
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
  url: 'https://woman-gym.com',
  description: '女性専用パーソナルジムの比較・ランキングメディア',
  inLanguage: 'ja-JP',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://woman-gym.com/areas/{search_term_string}/',
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
    <html lang="ja" className={`${notoSansJP.variable} ${shipporiMincho.variable} ${cormorant.variable}`}>
      <head>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        {/* JS有効時のみ js クラス付与（フェードイン初期非表示のチラつき防止・描画前に実行） */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="bg-white font-sans text-ink antialiased">
        {children}
        <ContentReveal />
      </body>
    </html>
  )
}
