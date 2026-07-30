import Link from 'next/link'

/**
 * 検索意図別の受け皿ページへの導線。エリア/記事ページから
 * /ranking/(おすすめ) /guide/(選び方) /cost/(料金) /faq/ へ需要を振り分ける。
 */
const LINKS = [
  { href: '/ranking/', label: 'おすすめジムを比較する', desc: '女性専用ジムをランキングで比較' },
  { href: '/guide/', label: '失敗しない選び方を知る', desc: '目的別の選び方と体験前チェック' },
  { href: '/cost/', label: '料金相場を確認する', desc: '回数・期間別の相場と入会金' },
  { href: '/faq/', label: 'よくある質問を見る', desc: '初心者の不安をまとめて解消' },
]

export function IntentGuideLinks({ heading = 'ジム選びで迷ったら' }: { heading?: string }) {
  return (
    <section className="py-12 bg-ivory">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="font-serif text-xl md:text-2xl text-ink mb-2">{heading}</h2>
        <p className="text-sm text-ink-soft mb-6">目的に合わせて、比較・選び方・料金の各ガイドをご覧ください。</p>
        <div className="grid gap-3 md:grid-cols-2">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block rounded-xl border border-line bg-white p-4 transition-colors hover:border-accent"
            >
              <p className="text-sm font-bold text-ink">{l.label}</p>
              <p className="mt-1 text-xs text-ink-soft">{l.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
