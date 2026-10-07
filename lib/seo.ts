import type { Metadata } from 'next'

/**
 * OGP の共通値（layout.tsx と各ページで共用）。
 * ページ側で openGraph を定義すると layout の openGraph は引き継がれない（丸ごと置き換わる）ため、
 * 各ページは pageUrlMeta() 経由で必ずこの OG_BASE を展開する。
 */
export const OG_BASE: NonNullable<Metadata['openGraph']> = {
  type: 'website',
  locale: 'ja_JP',
  siteName: 'G-PersonalGym',
  images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'G-PersonalGym｜女性専用パーソナルジムをエリアと料金から探す' }],
}

/**
 * canonical と og:url を同じパスから組み立てる（2026-10-07）。
 * Next.js は openGraph.url を書かないと og:url を出さないので、canonical と同じ値を入れる。
 * 相対パスは layout.tsx の metadataBase で絶対URLに解決される。
 * 使い方: export const metadata: Metadata = { ...pageUrlMeta('/ranking/'), title: ... }
 */
export function pageUrlMeta(path: string): Pick<Metadata, 'alternates' | 'openGraph'> {
  return {
    alternates: { canonical: path },
    openGraph: { ...OG_BASE, url: path },
  }
}
