import { GYM_REVIEWS } from '@/data/gymReviews'
import { gymBrandSlugOf } from '@/lib/gymBrand'
import type { ReviewTheme, ReviewThemes } from '@/data/brands'

/**
 * 口コミに多いテーマと注意点（2026-10-09・pilates-biyori の同名コンポーネントを移植）
 * BrandReviewDigest が「店舗ごとの要約」なのに対し、こちらは複数店舗に共通するテーマを
 * 注意点／良い点に分けて示す。根拠の店舗は GYM_REVIEWS のキーで持ち、出典リンク（Googleマップ）に解決する。
 * キーが GYM_REVIEWS に無い店舗は表示しない（存在しない出典を出さないため）。
 * 店舗数・口コミ件数はデータから算出する（手で数字を書かない）。
 */
function Theme({ t, brandName, unlisted }: { t: ReviewTheme; brandName: string; unlisted: Record<string, string> }) {
  const refs = t.stores.map((k) => GYM_REVIEWS[k]).filter(Boolean)
  return (
    <div className="rounded-xl border border-line bg-white p-5">
      <p className="text-sm font-bold text-ink mb-2">{t.title}</p>
      <p className="text-sm leading-relaxed text-ink-soft">{t.text}</p>
      {refs.length > 0 && (
        <p className="mt-3 text-xs leading-relaxed text-ink-faint">
          根拠にした店舗の口コミ:{' '}
          {refs.map((r, i) => (
            <span key={r.name}>
              {i > 0 && '／'}
              <a href={r.mapsUri} target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">
                {r.name.replace(`${brandName} `, '')}
              </a>
              <span>（★{r.rating}・{r.userRatings.toLocaleString()}件{unlisted[r.name] ? '・公式の店舗一覧に掲載なし' : ''}）</span>
            </span>
          ))}
        </p>
      )}
    </div>
  )
}

export function BrandReviewThemes({
  brandSlug,
  brandName,
  themes,
  unlisted = {},
}: {
  brandSlug: string
  brandName: string
  themes: ReviewThemes
  unlisted?: Record<string, string>
}) {
  const has = (t: ReviewTheme) => t.stores.some((k) => GYM_REVIEWS[k])
  const good = themes.good.filter(has)
  const caution = themes.caution.filter(has)
  if (good.length === 0 && caution.length === 0) return null

  const rows = Object.values(GYM_REVIEWS).filter((r) => gymBrandSlugOf(r.name) === brandSlug)
  const total = rows.reduce((n, r) => n + r.userRatings, 0)
  const small = rows.filter((r) => r.userRatings < 10).length
  const fetched = rows.map((r) => r.fetchedAt).sort()

  return (
    <section className="py-14">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="font-serif text-xl md:text-2xl text-ink border-b border-line pb-3 mb-6">
          {brandName}の口コミに多いテーマと注意点
        </h2>
        <p className="text-sm leading-relaxed text-ink-soft mb-3">
          Googleマップで当サイト掲載店舗と照合できた{rows.length}店舗（口コミ件数の合計{total.toLocaleString()}件・{fetched[0]}〜{fetched[fetched.length - 1]}取得）の口コミを当編集部が店舗ごとに読んで要約し、複数店舗に共通するテーマを整理しました。
        </p>
        <p className="text-sm leading-relaxed text-ink-soft mb-6">{themes.basis}</p>
        {small > 0 && (
          <p className="text-xs leading-relaxed text-ink-faint -mt-4 mb-6">※口コミが10件未満の店舗が{small}店あり、その店舗の傾向は判断材料として弱い点にご注意ください。</p>
        )}

        {caution.length > 0 && (
          <>
            <h3 className="text-base font-bold text-ink mb-3">入会前に確認したい注意点（低評価や具体的な指摘に多い内容）</h3>
            <div className="space-y-3 mb-8">
              {caution.map((t) => (
                <Theme key={t.title} t={t} brandName={brandName} unlisted={unlisted} />
              ))}
            </div>
          </>
        )}

        {good.length > 0 && (
          <>
            <h3 className="text-base font-bold text-ink mb-3">評価されている点（高評価に多い内容）</h3>
            <div className="space-y-3">
              {good.map((t) => (
                <Theme key={t.title} t={t} brandName={brandName} unlisted={unlisted} />
              ))}
            </div>
          </>
        )}

        <p className="text-[11px] text-ink-faint mt-4 leading-relaxed">
          ※店舗差が大きいため、ブランド全体の傾向だけで判断せず、通う予定の店舗の口コミを出典リンクから個別に確認してください。評価・件数は取得時点の実測値で、現在とは異なる場合があります。口コミ本文の転載ではなく編集部の要約で、個人名は含めていません。感じ方には個人差があります。
        </p>
      </div>
    </section>
  )
}
