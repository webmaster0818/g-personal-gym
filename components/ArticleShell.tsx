import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { FAQSchema } from '@/components/FAQSchema'

type FAQ = { question: string; answer: string }
type Related = { href: string; label: string }

type Props = {
  eyebrow: string
  title: string
  lead: string
  updated?: string
  breadcrumb: string
  faqs?: FAQ[]
  related?: Related[]
  children: React.ReactNode
}

export function ArticleShell({ eyebrow, title, lead, updated = '2026年6月13日', breadcrumb, faqs, related, children }: Props) {
  return (
    <>
      {faqs && faqs.length > 0 && <FAQSchema faqs={faqs} />}
      <Navigation />
      <main data-reveal className="pt-16">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="eyebrow mb-3">{eyebrow}</p>
            <h1 className="text-2xl md:text-4xl font-bold text-ink mb-4 leading-snug">{title}</h1>
            <p className="text-ink-soft text-sm md:text-base leading-relaxed">{lead}</p>
            <p className="text-ink-faint text-xs mt-3">更新日 {updated}・監修 woman-gym編集部</p>
          </div>
        </section>

        <section className="py-3 bg-white border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-ink-faint">
              <Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}
              <Link href="/articles/" className="hover:text-accent transition">記事一覧</Link>{' > '}
              <span className="text-ink-soft">{breadcrumb}</span>
            </nav>
          </div>
        </section>

        <article className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 article-body">
            {children}
          </div>
        </article>

        {faqs && faqs.length > 0 && (
          <section className="py-12 bg-ivory">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <h2 className="text-xl md:text-2xl font-bold text-ink mb-6 text-center">よくある質問</h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-line rounded-xl overflow-hidden bg-white">
                    <details className="group">
                      <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-accent-tint transition">
                        <h3 className="font-bold text-ink pr-4 text-sm">Q. {faq.question}</h3>
                        <svg className="w-5 h-5 text-accent group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                      </summary>
                      <div className="px-5 pb-5 text-ink-soft leading-relaxed text-sm">{faq.answer}</div>
                    </details>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {related && related.length > 0 && (
          <section className="py-12 bg-white">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <h2 className="text-lg font-bold text-ink mb-5">関連記事・エリア</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {related.map((r, i) => (
                  <Link key={i} href={r.href} className="block border border-line rounded-xl px-5 py-4 hover:border-accent hover:bg-accent-tint transition text-sm font-medium text-ink">
                    {r.label} <span className="text-accent">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-14 bg-gradient-to-r from-accent to-accent-dark text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-4">まずは無料カウンセリングから</h2>
            <p className="text-white/80 mb-8">気になるジムを2〜3社比較して、あなたに合う1社を見つけましょう。</p>
            <Link href="/ranking/" className="inline-block bg-white text-accent px-10 py-4 text-sm font-bold rounded-full hover:bg-accent-tint transition-all">おすすめランキングを見る</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
