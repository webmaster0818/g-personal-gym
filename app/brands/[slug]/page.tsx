import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { BrandPage } from '@/components/BrandPage'
import { IntentGuideLinks } from '@/components/IntentGuideLinks'
import { FAQSchema } from '@/components/FAQSchema'
import { BRANDS, getBrand } from '@/data/brands'
import brandStores from '@/data/brandStores.json'

export function generateStaticParams() {
  return BRANDS.map((b) => ({ slug: b.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const brand = getBrand(slug)
  if (!brand) return { title: 'ブランドが見つかりません' }
  const n = ((brandStores as Record<string, unknown[]>)[slug] ?? []).length
  return {
    title: `${brand.name}の料金・店舗一覧・特徴【2026年7月】掲載${n}店を比較`,
    description: `${brand.name}の料金プラン・体験カウンセリング・店舗一覧を公式情報と掲載データで整理。${brand.tagline}。掲載${n}店舗のエリア別リンク付きで、近くの店舗がすぐ見つかります。`,
    alternates: { canonical: `/brands/${slug}/` },
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
