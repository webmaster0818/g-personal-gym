import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { IntentGuideLinks } from '@/components/IntentGuideLinks'
import { FAQSchema } from '@/components/FAQSchema'
import { RelatedAreas } from '@/components/RelatedAreas'
import { AreaContext } from '@/components/AreaContext'
import { pageUrlMeta } from '@/lib/seo'
import type { Metadata } from 'next'

// 2026-10-18: 掲載していた24/7 Workout 五反田店が公式の東京店舗一覧・予約フォームの店舗リストに無く、店舗ページも404のため掲載を終了。現在の掲載ジムは0件。
export const metadata: Metadata = {
  ...pageUrlMeta('/areas/gotanda/'),
  title: '五反田の女性専用パーソナルジム｜現在の掲載ジムなし',
  description: '五反田エリアには、現在当サイトで掲載している女性向けパーソナルジムはありません。目黒・大井町エリアの掲載ジムをご覧ください。',
  keywords: '女性専用パーソナルジム,五反田,料金,比較',
}

const nearby = [
  { slug: 'meguro', name: '目黒', note: '当サイト掲載 2店' },
  { slug: 'oimachi', name: '大井町', note: '当サイト掲載 3店' },
]

const faqs = [
  { question: '五反田で女性専用のパーソナルジムはありますか？', answer: '当サイトでは、現在五反田エリアに掲載しているジムはありません。以前掲載していた24/7 Workout 五反田店は、2026年10月時点で24/7 Workout公式サイトの東京の店舗一覧に掲載がないため、掲載を終了しました。' },
  { question: '五反田から通いやすい近隣エリアはどこですか？', answer: '当サイトでは目黒・大井町エリアのジムを掲載しています。各エリアのページで料金・アクセスをご確認ください。' },
]

export default function GotandaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-accent text-xs mb-2">更新日 2026年10月19日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              五反田の女性専用パーソナルジム<br className="hidden md:block" />（現在の掲載ジムなし）
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light">
              <Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}
              <span className="text-brand-muted">五反田</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">本ページはG-PersonalGym編集部が作成しています。</p>
            <div className="bg-ivory border-l-4 border-accent p-6 mb-8">
              <h2 className="text-lg font-bold text-brand-text mb-4">掲載ジムなし</h2>
              <p className="text-brand-muted leading-relaxed mb-4">五反田エリアには、現在当サイトで掲載している女性向けパーソナルジムはありません。</p>
              <p className="text-brand-muted leading-relaxed">以前掲載していた24/7 Workout 五反田店は、2026年10月時点で24/7 Workout公式サイトの東京の店舗一覧に掲載がないため、掲載を終了しました。公式サイトで店舗を確認できたジムが見つかり次第、本ページに掲載します。</p>
            </div>
          </div>
        </section>

        <AreaContext slug="gotanda" />

        <section className="py-16 bg-ivory">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">近隣エリアの掲載ジム</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {nearby.map((a) => (
                <Link key={a.slug} href={`/areas/${a.slug}/`} className="block bg-white rounded-xl p-6 border border-line hover:shadow-lg transition">
                  <h3 className="font-bold text-brand-text mb-2">{a.name}の女性向けパーソナルジム</h3>
                  <p className="text-sm text-brand-muted">{a.note}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">よくある質問</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-line rounded-xl overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-accent-tint transition">
                      <h3 className="font-bold text-brand-text pr-4 text-sm">Q{index + 1}. {faq.question}</h3>
                      <svg className="w-5 h-5 text-accent group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                    </summary>
                    <div className="px-5 pb-5 text-brand-muted leading-relaxed text-sm">{faq.answer}</div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-accent to-accent-dark text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-4">ほかのエリアから探す</h2>
            <p className="text-white/80 mb-8">通勤・通学の動線上にあるエリアもあわせてご確認ください。</p>
            <Link href="/ranking/" className="inline-block bg-white text-accent px-10 py-4 text-sm font-bold rounded-full hover:bg-accent-tint transition-all">おすすめランキングを見る</Link>
          </div>
        </section>
        <IntentGuideLinks />
      </main>
      <RelatedAreas currentSlug="gotanda" />
      <SiteFooter />
    </>
  )
}
