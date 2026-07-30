import Link from 'next/link'
import { GYM_SURVEY } from '@/data/gymSurvey'

/**
 * 当サイト独自調査（全国102エリア・のべ546ジムの公式情報集計）のハイライト。
 * 数値は data/gymSurvey.ts の集計値のみを使用し、推定・補完はしない。
 */
export function SurveyHighlight({ variant = 'default' }: { variant?: 'default' | 'compact' }) {
  const s = GYM_SURVEY.stats
  const items = [
    { label: '女性専用と明記', value: `${s.womenOnly.pct}%`, sub: `${s.womenOnly.count}件` },
    { label: '体験・カウンセリング無料', value: `${s.trialFree.pct}%`, sub: `${s.trialFree.count}件` },
    { label: '完全個室・個室対応', value: `${s.privateRoom.pct}%`, sub: `${s.privateRoom.count}件` },
    { label: '食事指導あり', value: `${s.mealGuide.pct}%`, sub: `${s.mealGuide.count}件` },
  ]
  return (
    <div className={`rounded-2xl border border-line bg-white ${variant === 'compact' ? 'p-5' : 'p-6 md:p-8'}`}>
      <p className="text-xs font-medium tracking-[0.15em] text-ink-soft uppercase mb-1">独自調査データ</p>
      <p className="text-sm text-ink mb-5">
        当サイトが全国{GYM_SURVEY.areas}エリア・のべ{GYM_SURVEY.listings}ジムの公式情報を調べた集計（{GYM_SURVEY.period}時点）
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {items.map((it) => (
          <div key={it.label}>
            <p className="text-2xl font-bold text-accent">{it.value}</p>
            <p className="mt-1 text-xs text-ink">{it.label}</p>
            <p className="text-[11px] text-ink-soft">{it.sub}</p>
          </div>
        ))}
      </div>
      <p className="mt-5 text-[11px] leading-relaxed text-ink-soft">
        出典: {GYM_SURVEY.source}。同一ブランドが複数エリアに登場するため、のべ掲載数での割合です。
        詳細は<Link href="/articles/josei-gym-data/" className="text-accent hover:underline">独自調査データの記事</Link>をご覧ください。
      </p>
    </div>
  )
}
