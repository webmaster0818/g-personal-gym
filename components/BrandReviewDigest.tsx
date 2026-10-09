import { GYM_REVIEWS } from '@/data/gymReviews'
import { gymBrandSlugOf } from '@/lib/gymBrand'

// ブランドページ用のGoogle口コミ集約（2026-08-28）。
//
// 背景: 口コミ要約はエリアページの店舗カード（GymCard）にしか出ておらず、
// ブランドページ（/brands/{slug}/）には1件も出ていなかった。
// 「かたぎり塾」144imp pos7.8・0クリックのように、ブランド名で調べに来た人が
// 評判を確認できない状態だったため、ブランド単位で俯瞰できる枠を新設する。
//
// ⚠️ 出すのは編集部が書いた要約のみ。口コミ本文は転載しない（data/gymReviews.ts の方針）。
// ⚠️ 出典（Googleマップ）へのリンクを店舗ごとに必ず出す（MediaXAI指示 2026-08-28）。
// ⚠️ ★は取得できた実値のみ。件数・取得時点を併記し、良い店だけを選ばない
//    （並びは口コミ件数順。評価順にすると高評価店だけが上に来る）。

export function BrandReviewDigest({ brandSlug, brandName, unlisted = {} }: { brandSlug: string; brandName: string; unlisted?: Record<string, string> }) {
  const rows = Object.values(GYM_REVIEWS).filter((r) => gymBrandSlugOf(r.name) === brandSlug)
  if (rows.length < 3) return null // 3店舗未満は「ブランドの傾向」と言えないので出さない

  const totalReviews = rows.reduce((n, r) => n + r.userRatings, 0)
  // 平均は店舗ごとの★の単純平均ではなく口コミ件数で重みづけ（母数1件の店を74件の店と同じ重さにしない）
  const weighted = rows.reduce((n, r) => n + r.rating * r.userRatings, 0) / totalReviews
  const ratings = rows.map((r) => r.rating).sort((a, b) => a - b)
  const lo = ratings[0]
  const hi = ratings[ratings.length - 1]
  const fetched = rows.map((r) => r.fetchedAt).sort()
  const shown = [...rows].sort((a, b) => b.userRatings - a.userRatings)
  const low = rows.filter((r) => r.rating < 4.0).length

  return (
    <section className="py-14 bg-ivory">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-serif text-xl md:text-2xl text-ink border-b border-line pb-3 mb-6">
          {brandName}の口コミ・評判（Googleマップ {rows.length}店舗ぶんの要約）
        </h2>

        <div className="bg-white border border-line p-5 mb-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-[11px] text-ink-soft mb-1">確認できた店舗</p>
              <p className="text-lg font-medium text-ink">{rows.length}店舗</p>
            </div>
            <div>
              <p className="text-[11px] text-ink-soft mb-1">口コミ総数</p>
              <p className="text-lg font-medium text-ink">{totalReviews.toLocaleString()}件</p>
            </div>
            <div>
              <p className="text-[11px] text-ink-soft mb-1">平均評価</p>
              <p className="text-lg font-medium text-ink">★{weighted.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-[11px] text-ink-soft mb-1">店舗ごとの幅</p>
              <p className="text-lg font-medium text-ink">
                ★{lo.toFixed(1)}〜{hi.toFixed(1)}
              </p>
            </div>
          </div>
          <p className="text-[11px] text-ink-soft mt-4 leading-relaxed">
            平均は口コミ件数で重みづけした値です。
            {low > 0
              ? `★4.0未満の店舗も${low}店あり、同じ基準で掲載しています。`
              : ''}
            ブランド全体の平均が高くても店舗ごとの差はあるため、通う予定の店舗を個別に確認してください。
          </p>
        </div>

        <div className="space-y-4">
          {shown.map((r) => (
            <div key={r.name} className="bg-white border border-line p-5">
              <div className="flex items-baseline justify-between gap-3 flex-wrap mb-2">
                <p className="text-sm font-medium text-ink">
                  {r.name}
                  {unlisted[r.name] && <span className="ml-2 text-[11px] font-normal text-ink-faint">※{unlisted[r.name]}</span>}
                </p>
                <p className="text-xs text-ink-soft">
                  ★{r.rating}（{r.userRatings.toLocaleString()}件）
                </p>
              </div>
              <p className="text-sm text-ink-soft leading-relaxed">{r.summary}</p>
              <p className="mt-3 text-xs text-ink-soft">
                出典：
                <a
                  href={r.mapsUri}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-ink"
                >
                  Googleマップの口コミを見る
                </a>
                <span className="text-ink-soft/70">（{r.fetchedAt}時点）</span>
              </p>
            </div>
          ))}
        </div>

        <p className="text-[11px] text-ink-soft mt-4 leading-relaxed">
          ※上記は当編集部がGoogleマップの口コミを読んで書いた要約で、口コミ本文の転載ではありません。個人名は含めていません。
          評価・件数は{fetched[0]}〜{fetched[fetched.length - 1]}に取得した実測値で、現在の数値とは異なる場合があります。感じ方には個人差があります。
        </p>
      </div>
    </section>
  )
}
