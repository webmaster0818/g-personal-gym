import { COST_MARKET_CHECKED, COURSE_ROWS, MONTHLY_ROWS, median, yen } from '@/data/costMarket'

const range = (low: number, high?: number) => (high ? `${yen(low)}〜${yen(high)}` : yen(low))

// /cost/ 冒頭。掲載ジムの公式料金（data/costMarket.ts）から幅と中央値を計算して表示する
export function CostMarketTable() {
  const courseLows = COURSE_ROWS.map((r) => r.low)
  const courseAll = COURSE_ROWS.map((r) => r.high ?? r.low)
  const courseWomen = COURSE_ROWS.filter((r) => r.women)
  const courseTotals = COURSE_ROWS.map((r) => r.low + r.joinFee)
  const monthlyLows = MONTHLY_ROWS.map((r) => r.low)
  const monthlyWomen = MONTHLY_ROWS.filter((r) => r.women)

  return (
    <section className="py-8 bg-white border-b border-line" id="market">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="text-xl md:text-2xl font-bold text-ink mb-3">掲載ジムの公式料金から計算した相場</h2>
        <ul className="space-y-2 text-sm text-ink mb-3">
          <li>■ <strong>2ヶ月コースの総額：{yen(Math.min(...courseLows))}〜{yen(Math.max(...courseAll))}、中央値 {yen(median(courseLows))}</strong>（{COURSE_ROWS.length}社・入会金別。入会金を足した中央値は{yen(median(courseTotals))}）</li>
          <li>■ <strong>女性専用と公式にある{courseWomen.length}社の2ヶ月コース：{yen(Math.min(...courseWomen.map((r) => r.low)))}〜{yen(Math.max(...courseWomen.map((r) => r.high ?? r.low)))}</strong></li>
          <li>■ <strong>月4回の月額：{yen(Math.min(...monthlyLows))}〜{yen(Math.max(...monthlyLows))}、中央値 {yen(median(monthlyLows))}</strong>（{MONTHLY_ROWS.length}社。女性専用と公式にある{monthlyWomen.length}社は{yen(Math.min(...monthlyWomen.map((r) => r.low)))}〜{yen(Math.max(...monthlyWomen.map((r) => r.low)))}）</li>
        </ul>
        <p className="text-ink-faint text-xs mb-5">計算方法：当サイト掲載ジムのうち、{COST_MARKET_CHECKED}に公式サイトで料金を確認できた社だけを集計した単純な幅と中央値です（各社の下限で計算・すべて税込）。全ジムの平均ではありません。1回の時間や食事指導の有無は社によって異なります。</p>

        <h3 className="font-bold text-ink mb-2">2ヶ月コース（{COURSE_ROWS.length}社）</h3>
        <div className="overflow-x-auto border border-line rounded-xl mb-5">
          <table className="w-full border-collapse text-sm min-w-[640px]">
            <thead>
              <tr className="bg-accent text-white">
                <th className="px-3 py-2 text-left whitespace-nowrap">ジム</th>
                <th className="px-3 py-2 text-left">プラン</th>
                <th className="px-3 py-2 text-left whitespace-nowrap">総額（税込）</th>
                <th className="px-3 py-2 text-left whitespace-nowrap">入会金</th>
                <th className="px-3 py-2 text-left">女性専用</th>
              </tr>
            </thead>
            <tbody>
              {COURSE_ROWS.map((r, i) => (
                <tr key={r.name} className={i % 2 === 0 ? 'bg-white align-top' : 'bg-ivory/50 align-top'}>
                  <th scope="row" className="px-3 py-2 text-left font-bold text-ink">
                    {r.name}
                    <a href={r.sourceUrl} target="_blank" rel="noopener noreferrer" className="block text-[11px] font-normal text-accent underline underline-offset-2 mt-1">公式サイト</a>
                  </th>
                  <td className="px-3 py-2 text-ink-soft">{r.plan}{r.note ? <span className="block text-xs text-ink-faint mt-1">{r.note}</span> : null}</td>
                  <td className="px-3 py-2 text-ink font-medium">{range(r.low, r.high)}</td>
                  <td className="px-3 py-2 text-ink-soft whitespace-nowrap">{r.joinFeeLabel}</td>
                  <td className="px-3 py-2 text-ink-soft">{r.womenLabel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="font-bold text-ink mb-2">月額制・月4回（{MONTHLY_ROWS.length}社）</h3>
        <div className="overflow-x-auto border border-line rounded-xl">
          <table className="w-full border-collapse text-sm min-w-[640px]">
            <thead>
              <tr className="bg-accent text-white">
                <th className="px-3 py-2 text-left whitespace-nowrap">ジム</th>
                <th className="px-3 py-2 text-left">プラン</th>
                <th className="px-3 py-2 text-left whitespace-nowrap">月額（税込）</th>
                <th className="px-3 py-2 text-left">女性専用</th>
              </tr>
            </thead>
            <tbody>
              {MONTHLY_ROWS.map((r, i) => (
                <tr key={r.name} className={i % 2 === 0 ? 'bg-white align-top' : 'bg-ivory/50 align-top'}>
                  <th scope="row" className="px-3 py-2 text-left font-bold text-ink">
                    {r.name}
                    <a href={r.sourceUrl} target="_blank" rel="noopener noreferrer" className="block text-[11px] font-normal text-accent underline underline-offset-2 mt-1">公式サイト</a>
                  </th>
                  <td className="px-3 py-2 text-ink-soft">{r.plan}</td>
                  <td className="px-3 py-2 text-ink font-medium whitespace-nowrap">{range(r.low, r.high)}</td>
                  <td className="px-3 py-2 text-ink-soft">{r.womenLabel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-ink-faint text-xs mt-2">出典：各ジムの公式サイト（{COST_MARKET_CHECKED}確認）。キャンペーン等で変わることがあるため、契約前に各ジムでご確認ください。</p>
      </div>
    </section>
  )
}
