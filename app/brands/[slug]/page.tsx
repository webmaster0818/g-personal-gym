import { pageUrlMeta } from '@/lib/seo'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { BrandPage } from '@/components/BrandPage'
import { IntentGuideLinks } from '@/components/IntentGuideLinks'
import { FAQSchema } from '@/components/FAQSchema'
import { BRANDS, getBrand } from '@/data/brands'
import brandStores from '@/data/brandStores.json'
import { GYM_REVIEWS } from '@/data/gymReviews'
import { gymBrandSlugOf } from '@/lib/gymBrand'

export function generateStaticParams() {
  return BRANDS.map((b) => ({ slug: b.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const brand = getBrand(slug)
  if (!brand) return { title: 'ブランドが見つかりません' }
  const n = ((brandStores as Record<string, unknown[]>)[slug] ?? []).length
  if (brand.reviewThemes) {
    // 2026-10-09: 口コミテーマ節を持つブランドは「{ブランド} 口コミ／評判」の受け皿。店舗数はデータから算出
    const r = Object.values(GYM_REVIEWS).filter((x) => gymBrandSlugOf(x.name) === slug).length
    return {
      title: `${brand.name}の口コミ・評判｜料金・店舗一覧【${brand.titleMonth ?? '2026年8月'}】Googleマップ${r}店舗を要約`,
      description: `${brand.name}の口コミ・評判を、Googleマップ${r}店舗の口コミから良い点と注意点（延長の勧め・シャワー・トレーナーの性別など）に整理。料金・返金制度・体験・子連れ対応は公式サイトで確認した内容を出典付きで掲載。`,
      ...pageUrlMeta(`/brands/${slug}/`),
    }
  }
  return {
    title: `${brand.name}の料金・店舗一覧・特徴【${brand.titleMonth ?? '2026年8月'}】掲載${n}店を比較`,
    description: `${brand.name}の料金プラン・体験カウンセリング・店舗一覧を公式情報と掲載データで整理。${brand.tagline}。掲載${n}店舗のエリア別リンク付きで、近くの店舗がすぐ見つかります。`,
    ...pageUrlMeta(`/brands/${slug}/`),
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const brand = getBrand(slug)
  if (!brand) notFound()
  return (
    <>
      <Navigation />
      <FAQSchema faqs={brand.faq.map((f) => ({ question: f.q, answer: f.a }))} />
      <BrandPage brand={brand} />
      <IntentGuideLinks heading="他のジムとも比べる" />
      <SiteFooter />
    </>
  )
}
