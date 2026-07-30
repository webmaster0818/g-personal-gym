import type { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { IntentGuideLinks } from '@/components/IntentGuideLinks'
import { SurveyHighlight } from '@/components/SurveyHighlight'
import { BRANDS } from '@/data/brands'
import brandStores from '@/data/brandStores.json'

export const metadata: Metadata = {
  title: '女性向けパーソナルジムのブランド別ガイド【2026年7月】料金・店舗数を比較',
  description: '女性向けパーソナルジムの主要ブランドを、料金・店舗数・利用条件（女性専用かどうか）で比較。各ブランドの店舗一覧はエリアページにリンクしています。',
  alternates: { canonical: '/brands/' },
}

const STORES = brandStores as Record<string, { areaSlug: string }[]>

export default function BrandsHub() {
  const rows = BRANDS.map((b) => ({ b, n: (STORES[b.slug] ?? []).length })).sort((x, y) => y.n - x.n)
  return (
    <>
      <Navigation />
      <main>
        <section className="py-14 bg-ivory">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h1 className="font-serif text-2xl md:text-3xl text-ink">女性向けパーソナルジム ブランド別ガイド</h1>
            <p className="mt-3 text-sm text-ink-soft">
              主要ブランドの料金・店舗数・利用条件を、各社公式情報と当サイト掲載データで整理しています。
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="grid gap-3 md:grid-cols-2">
              {rows.map(({ b, n }) => (
                <Link key={b.slug} href={`/brands/${b.slug}/`} className="block rounded-xl border border-line bg-white p-5 transition-colors hover:border-accent">
                  <p className="text-sm font-bold text-ink">{b.name}</p>
                  <p className="mt-1 text-xs text-ink-soft">{b.tagline}</p>
                  <p className="mt-2 text-xs text-ink-faint">
                    {b.womenOnly ? '女性専用' : '男女利用可'} ／ 当サイト掲載{n}店
                    {b.officialStores ? ` ／ 全国${b.officialStores.count}店舗` : ''}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-ivory">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <SurveyHighlight />
          </div>
        </section>

        <IntentGuideLinks />
      </main>
      <SiteFooter />
    </>
  )
}
