import { AREA_QUICK_PRICES } from '@/data/areaQuickPrices'
import { AREA_CONTEXT } from './areaContextData'

// エリアページ冒頭の料金早見表（data/areaQuickPrices.ts にデータがあるエリアだけ表示）
export function AreaQuickPrices({ slug }: { slug: string }) {
  const q = AREA_QUICK_PRICES[slug]
  if (!q) return null
  const areaName = AREA_CONTEXT[slug]?.name ?? ''
  return (
    <section className="py-10 bg-white" id="quick-prices">
      <div className="max-w-5xl mx-auto px-4 lg:px-8">
        <h2 className="text-xl md:text-2xl font-bold text-brand-text mb-2">{areaName}の掲載店 料金早見表</h2>
        <p className="text-brand-muted text-sm leading-relaxed mb-4">
          {q.checked}に各ジムの公式サイトで確認した料金・入会金・体験・アクセスです。税込・税抜は公式の表記どおりに記載し、公式に記載がない項目は「公式に記載なし」としています。
        </p>
        <div className="overflow-x-auto border border-line rounded-xl">
          <table className="w-full border-collapse text-sm min-w-[760px]">
            <thead>
              <tr className="bg-accent text-white">
                <th className="px-3 py-2.5 text-left font-bold whitespace-nowrap">ジム</th>
                <th className="px-3 py-2.5 text-left font-bold">料金（公式）</th>
                <th className="px-3 py-2.5 text-left font-bold">入会金</th>
                <th className="px-3 py-2.5 text-left font-bold">体験・カウンセリング</th>
                <th className="px-3 py-2.5 text-left font-bold">最寄り駅・アクセス</th>
                <th className="px-3 py-2.5 text-left font-bold">女性専用・トレーナー</th>
                <th className="px-3 py-2.5 text-left font-bold">設備・お子様連れ</th>
              </tr>
            </thead>
            <tbody>
              {q.rows.map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white align-top' : 'bg-ivory/50 align-top'}>
                  <th scope="row" className="px-3 py-2 text-left font-bold text-brand-text">
                    {r.name}
                    <a href={r.sourceUrl} target="_blank" rel="noopener noreferrer" className="block text-[11px] font-normal text-accent underline underline-offset-2 mt-1">公式サイト</a>
                  </th>
                  <td className="px-3 py-2 text-brand-muted">{r.plan}</td>
                  <td className="px-3 py-2 text-brand-muted">{r.joinFee}</td>
                  <td className="px-3 py-2 text-brand-muted">{r.trial}</td>
                  <td className="px-3 py-2 text-brand-muted">{r.access}</td>
                  <td className="px-3 py-2 text-brand-muted">{r.women}</td>
                  <td className="px-3 py-2 text-brand-muted">{r.facilities}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-brand-light text-xs mt-2">
          出典：各ジムの公式サイト（{q.checked}確認）。本表は同日に公式サイトで店舗ページを確認できた店舗を掲載しています。キャンペーン等で変わるため、申し込み前に公式サイトでご確認ください。
        </p>
        {q.note ? <p className="text-brand-light text-xs mt-1">{q.note}</p> : null}
      </div>
    </section>
  )
}
