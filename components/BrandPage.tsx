import Link from 'next/link'
import type { BrandInfo } from '@/data/brands'
import brandStores from '@/data/brandStores.json'
import { SurveyHighlight } from '@/components/SurveyHighlight'

type Store = {
  name: string
  areaSlug: string
  areaName: string
  officialUrl: string
  /** A8等の計測リンク。未設定なら公式URLへ（成果計上のため生URLで送客しない） */
  affiliateUrl?: string
  price: string
  trial: string
  access: string
  address: string
  features: string[]
}
const STORES = brandStores as Record<string, Store[]>

/** 掲載店舗の料金表記から代表プランを頻度順に抽出(推定はしない) */
function priceSummary(stores: Store[]) {
  const freq = new Map<string, number>()
  for (const s of stores) if (s.price) freq.set(s.price, (freq.get(s.price) ?? 0) + 1)
  return [...freq.entries()].sort((a, b) => b[1] - a[1]).slice(0, 3).map(([label, count]) => ({ label, count }))
}

function freeTrialCount(stores: Store[]) {
  return stores.filter((s) => s.trial.includes('無料')).length
}

export function BrandPage({ brand }: { brand: BrandInfo }) {
  const stores = STORES[brand.slug] ?? []
  const prices = priceSummary(stores)
  const freeTrial = freeTrialCount(stores)
  const areas = [...new Map(stores.map((s) => [s.areaSlug, s.areaName])).entries()]

  return (
    <main>
      {/* 結論 */}
      <section className="py-14 bg-ivory">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="text-xs text-ink-faint mb-5">
            <Link href="/" className="hover:text-accent">ホーム</Link>
            <span className="mx-2">/</span>
            <Link href="/brands/" className="hover:text-accent">ブランド一覧</Link>
            <span className="mx-2">/</span>
            <span className="text-ink-soft">{brand.name}</span>
          </nav>
          <h1 className="font-serif text-2xl md:text-3xl text-ink leading-snug">
            {brand.name}の料金・店舗一覧・特徴
            <span className="block mt-2 text-base text-ink-soft font-sans">{brand.tagline}</span>
          </h1>

          <div className="mt-8 rounded-2xl border border-line bg-white p-6">
            <p className="text-xs font-medium tracking-[0.15em] text-ink-faint uppercase mb-4">まず結論</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-accent">{brand.officialStores ? `${brand.officialStores.count}店舗` : `${stores.length}店`}</p>
                <p className="mt-1 text-xs text-ink-soft">{brand.officialStores ? `全国店舗数（${brand.officialStores.asOf}時点）` : '当サイト掲載店舗'}</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent">{brand.womenOnly ? '女性専用' : '男女利用可'}</p>
                <p className="mt-1 text-xs text-ink-soft">利用条件</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent">{freeTrial > 0 ? `${freeTrial}店` : '—'}</p>
                <p className="mt-1 text-xs text-ink-soft">無料体験・カウンセリング掲載</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent">{areas.length}</p>
                <p className="mt-1 text-xs text-ink-soft">掲載エリア数</p>
              </div>
            </div>
            {brand.officialStores && (
              <p className="mt-4 text-[11px] leading-relaxed text-ink-faint">
                ※全国店舗数は
                <a href={brand.officialStores.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline">公式サイト</a>
                の{brand.officialStores.kind === '公式明記' ? '記載' : '店舗一覧の掲載数'}に基づきます（{brand.officialStores.asOf}時点）。
                {brand.officialStores.caveat ?? ''}当サイトではうち{stores.length}店舗をエリアページ付きで掲載しています。
              </p>
            )}
          </div>
        </div>
      </section>

      {/* 特徴 */}
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-xl md:text-2xl text-ink border-b border-line pb-3 mb-6">{brand.name}の特徴</h2>
          <div className="flex flex-wrap gap-2 mb-5">
            {brand.features.map((f) => (
              <span key={f} className="text-xs text-ink-soft border border-line bg-white px-3 py-1.5 rounded-full">{f}</span>
            ))}
          </div>
          {brand.intro.map((p, i) => (
            <p key={i} className="text-sm leading-relaxed text-ink-soft mb-3">{p}</p>
          ))}
        </div>
      </section>

      {/* 料金 */}
      <section className="py-14 bg-ivory">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-xl md:text-2xl text-ink border-b border-line pb-3 mb-6">{brand.name}の料金</h2>
          <p className="text-sm leading-relaxed text-ink-soft mb-5">{brand.pricingNote}</p>
          {prices.length > 0 && (
            <div className="overflow-x-auto rounded-xl border border-line bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-line text-left text-xs uppercase tracking-wider text-ink-faint">
                    <th className="px-4 py-3">当サイト掲載店舗の代表的なプラン</th>
                    <th className="px-4 py-3 whitespace-nowrap">掲載店舗数</th>
                  </tr>
                </thead>
                <tbody>
                  {prices.map((p) => (
                    <tr key={p.label} className="border-b border-line/60 last:border-0">
                      <td className="px-4 py-3 text-ink">{p.label}</td>
                      <td className="px-4 py-3 text-ink-faint">{p.count}店</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <p className="mt-3 text-[11px] leading-relaxed text-ink-faint">
            ※料金は当サイト掲載時点の各店舗公式情報の集計であり、金額を保証するものではありません。キャンペーン・改定があるため最新は公式サイトでご確認ください。
          </p>
        </div>
      </section>

      {/* 体験 */}
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-xl md:text-2xl text-ink border-b border-line pb-3 mb-6">体験・カウンセリング</h2>
          <p className="text-sm leading-relaxed text-ink-soft">{brand.trialNote}</p>
        </div>
      </section>

      {/* 店舗一覧 */}
      <section className="py-14 bg-ivory">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-xl md:text-2xl text-ink border-b border-line pb-3 mb-6">
            {brand.name}の店舗一覧（当サイト掲載{stores.length}店）
          </h2>
          <div className="overflow-x-auto rounded-xl border border-line bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-line text-left text-xs uppercase tracking-wider text-ink-faint">
                  <th className="px-4 py-3">店舗</th>
                  <th className="px-4 py-3">エリア</th>
                  <th className="px-4 py-3">アクセス</th>
                </tr>
              </thead>
              <tbody>
                {stores.map((s, i) => (
                  <tr key={i} className="border-b border-line/60 last:border-0">
                    <td className="px-4 py-3 text-ink">{s.name}</td>
                    <td className="px-4 py-3">
                      <Link href={`/areas/${s.areaSlug}/`} className="text-accent hover:underline">{s.areaName}</Link>
                    </td>
                    <td className="px-4 py-3 text-ink-faint">{s.access || '公式サイトでご確認ください'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[11px] text-ink-faint">※エリア名をタップすると、その地域の他ジムとまとめて比較できます。</p>
        </div>
      </section>

      {/* 独自調査データ */}
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-xl md:text-2xl text-ink border-b border-line pb-3 mb-6">女性向けジム全体のデータと比べる</h2>
          <SurveyHighlight />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-ivory">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-xl md:text-2xl text-ink border-b border-line pb-3 mb-6">よくある質問</h2>
          <div className="space-y-4">
            {brand.faq.map((f) => (
              <div key={f.q} className="rounded-xl border border-line bg-white p-5">
                <p className="text-sm font-bold text-ink mb-2">Q. {f.q}</p>
                <p className="text-sm leading-relaxed text-ink-soft">A. {f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <a
            href={brand.affiliateUrl ?? brand.officialUrl}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className="inline-block rounded-full bg-accent px-10 py-4 text-sm font-bold text-white transition-colors hover:bg-accent-dark"
          >
            {brand.name}の公式サイトを見る
          </a>
          <p className="mt-3 text-[11px] text-ink-faint">
            情報引用元: <a href={brand.officialUrl} target="_blank" rel="noopener noreferrer" className="underline">{brand.name}公式サイト</a>
          </p>
        </div>
      </section>
    </main>
  )
}
