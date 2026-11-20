import { pageUrlMeta } from '@/lib/seo'
import type { Metadata } from 'next'
import { ArticleShell } from '@/components/ArticleShell'

// 出典（2026年11月20日確認）
// - 厚生労働省「日本人の食事摂取基準（2020年版）」策定検討会報告書 https://www.mhlw.go.jp/content/10904750/000586553.pdf
//   参考表2 推定エネルギー必要量（女性 18〜29歳 1,700/2,000/2,300 … 75歳以上 1,400/1,650/−）
//   表6 身体活動レベル（低い1.50・ふつう1.75・高い2.00）と日常生活の内容
//   目標とするBMI（18〜49歳 18.5〜24.9・50〜64歳 20.0〜24.9・65〜74歳 21.5〜24.9・75歳以上 21.5〜24.9）
//   活用上の留意点：エネルギーの過不足は体重の変化・BMIで評価する
// - 厚生労働省「健康づくりのための身体活動・運動ガイド2023」INFORMATION 8 https://www.mhlw.go.jp/content/001194020.pdf
//   体脂肪1kg≒7,000kcal、1日に減らしたいエネルギー量＝kg×7,000÷か月÷30日
// ※ 食事摂取基準は2025年版が公表済み。本ページの推定エネルギー必要量は、ガイド2023が出典としている2020年版の値

export const metadata: Metadata = {
  title: 'ダイエット中の摂取カロリーの目安｜女性の推定エネルギー必要量と、1日に減らす量の計算表',
  description:
    '女性の推定エネルギー必要量は、身体活動レベル「ふつう」で18〜29歳が1日2,000kcal、30〜49歳が2,050kcalです（食事摂取基準2020年版）。1日に減らす量を「減らしたい体重×7,000kcal÷日数」（厚労省ガイド2023）で計算した表と、目標BMIから求めた体重の範囲を掲載します。',
  ...pageUrlMeta('/articles/diet-calorie/'),
}

const eer = [
  { age: '18〜29歳', low: 1700, mid: 2000, high: 2300 },
  { age: '30〜49歳', low: 1750, mid: 2050, high: 2350 },
  { age: '50〜64歳', low: 1650, mid: 1950, high: 2250 },
  { age: '65〜74歳', low: 1550, mid: 1850, high: 2100 },
  { age: '75歳以上', low: 1400, mid: 1650, high: null as number | null },
]
const bmiTargets = [
  { age: '18〜49歳', min: 18.5, max: 24.9 },
  { age: '50〜64歳', min: 20.0, max: 24.9 },
  { age: '65歳以上', min: 21.5, max: 24.9 },
]
const heights = [150, 155, 160, 165]
const w = (bmi: number, cm: number) => (bmi * (cm / 100) ** 2).toFixed(1)
const kgs = [1, 2, 3]
const months = [1, 3, 6]
const perDay = (kg: number, m: number) => Math.round((kg * 7000) / m / 30)
const fmt = (n: number) => n.toLocaleString()

const faqs = [
  {
    question: '女性はダイエット中、1日何kcalまで食べてよいですか？',
    answer:
      '一律の上限はありません。日本人の食事摂取基準（2020年版）の推定エネルギー必要量は、女性で身体活動レベルが「ふつう」の場合、18〜29歳で1日2,000kcal、30〜49歳で2,050kcalです。減量したい場合は、この量から「減らしたい体重×7,000kcal÷日数」を差し引くのが、厚生労働省のガイド2023に示されている考え方です。',
  },
  {
    question: '1か月で2kg減らすには、1日何kcal減らせばよいですか？',
    answer: `体脂肪1kg＝約7,000kcalで計算すると、2kg×7,000kcal÷30日で1日約${fmt(perDay(2, 1))}kcalです。3か月かければ1日約${fmt(perDay(2, 3))}kcalになります。運動で消費する分と食事で減らす分に分けて考えます。`,
  },
  {
    question: '推定エネルギー必要量どおりに食べれば体重は維持できますか？',
    answer:
      '推定エネルギー必要量は集団の目安で、個人の必要量とは一致しません。食事摂取基準では、エネルギーの過不足は体重の変化で評価し、BMIが目標の範囲を外れていないかで判断するとしています。体重の推移を記録しながら、量を調整していく方法が現実的です。',
  },
  {
    question: '目標とするBMIは年齢で違いますか？',
    answer:
      '食事摂取基準（2020年版）の目標とするBMIは、18〜49歳が18.5〜24.9、50〜64歳が20.0〜24.9、65〜74歳と75歳以上が21.5〜24.9です。年齢が上がるほど下限が高く設定されています。',
  },
]

const related = [
  { href: '/articles/60dai-diet/', label: '60代女性のダイエット（目標BMIと運動）' },
  { href: '/articles/1kagetsu-5kg/', label: '1ヶ月で5キロ痩せるには' },
  { href: '/articles/taiju-heranai/', label: '体重が減らない原因' },
  { href: '/articles/diet-tabemono/', label: 'ダイエット中の食べ物の選び方' },
  { href: '/articles/kiso-taisha/', label: '基礎代謝を上げるには' },
  { href: '/articles/kintore-yaseru/', label: '筋トレで痩せる？体脂肪1kgまでの週数' },
  { href: '/articles/toushitsu-seigen/', label: '糖質制限ダイエットの公的な目安' },
  { href: '/articles/diet/', label: 'ダイエット目的のジムの選び方' },
]

export default function Page() {
  return (
    <ArticleShell
      eyebrow="Calorie Target"
      title="ダイエット中の摂取カロリーの目安｜女性の必要量と1日に減らす量"
      updated="2026年11月20日"
      lead="ダイエット中の摂取カロリーは、「ふだん必要な量」から「1日に減らす量」を差し引いて決めます。日本人の食事摂取基準（2020年版）では、女性の推定エネルギー必要量は身体活動レベルが「ふつう」で18〜29歳が1日2,000kcal、30〜49歳が2,050kcalです。1日に減らす量は、厚生労働省のガイド2023の式「減らしたい体重（kg）×7,000kcal÷期間（か月）÷30日」で計算できます。"
      breadcrumb="ダイエット中の摂取カロリーの目安"
      faqs={faqs}
      related={related}
    >
      <h2>女性の推定エネルギー必要量（kcal/日）</h2>
      <table>
        <thead>
          <tr>
            <th>年齢</th>
            <th>身体活動レベル 低い</th>
            <th>ふつう</th>
            <th>高い</th>
          </tr>
        </thead>
        <tbody>
          {eer.map((r) => (
            <tr key={r.age}>
              <td>{r.age}</td>
              <td>{fmt(r.low)}</td>
              <td>{fmt(r.mid)}</td>
              <td>{r.high ? fmt(r.high) : '−'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        出典：厚生労働省「日本人の食事摂取基準（2020年版）」参考表2（2026年11月20日確認）。食事摂取基準は2025年版も公表されていますが、ここでは厚生労働省のガイド2023が出典としている2020年版の値を掲載しています。
      </p>
      <ul>
        <li><strong>低い</strong>：生活の大部分が座っていて、静的な活動が中心の場合</li>
        <li><strong>ふつう</strong>：座って行う仕事が中心で、職場内の移動や立ち作業・通勤や買い物での歩行・家事・軽いスポーツのいずれかを含む場合</li>
        <li><strong>高い</strong>：移動や立ち作業の多い仕事、または余暇に活発な運動習慣がある場合</li>
      </ul>

      <h2>1日に減らす量の計算表（当サイト計算）</h2>
      <p>ガイド2023の式（体脂肪1kg＝約7,000kcal、1か月＝30日）で計算しました。</p>
      <table>
        <thead>
          <tr>
            <th>減らしたい体重</th>
            {months.map((m) => (
              <th key={m}>{m}か月で</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {kgs.map((k) => (
            <tr key={k}>
              <td>{k}kg</td>
              {months.map((m) => (
                <td key={m}>1日約{fmt(perDay(k, m))}kcal</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        たとえば30〜49歳・身体活動レベル「ふつう」（2,050kcal）の方が3か月で2kg減らす場合、1日約{fmt(perDay(2, 3))}kcalを、運動で増やす消費と食事で減らす摂取に分けます。すべてを食事で減らすなら、摂取量の目安は1日約{fmt(2050 - perDay(2, 3))}kcalです。
      </p>
      <div className="callout">
        <p>
          期間を短くするほど、1日に減らす量は大きくなります。1か月で3kgの場合は1日約{fmt(perDay(3, 1))}kcalで、18〜29歳の「低い」レベルの必要量（1,700kcal）の約{Math.round((perDay(3, 1) / 1700) * 100)}%に当たります。無理のない期間を設定することをおすすめします。
        </p>
      </div>

      <h2>目標とするBMIから見た体重の範囲（当サイト計算）</h2>
      <p>食事摂取基準（2020年版）の目標とするBMIに身長を当てはめて、体重の範囲を計算しました。</p>
      <table>
        <thead>
          <tr>
            <th>年齢（目標BMI）</th>
            {heights.map((h) => (
              <th key={h}>{h}cm</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bmiTargets.map((b) => (
            <tr key={b.age}>
              <td>{b.age}（{b.min.toFixed(1)}〜{b.max.toFixed(1)}）</td>
              {heights.map((h) => (
                <td key={h}>{w(b.min, h)}〜{w(b.max, h)}kg</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        計算式：BMI×身長（m）×身長（m）。食事摂取基準では、エネルギーの過不足は体重の変化で評価し、BMIが目標の範囲を下回っていれば「不足」、上回っていれば「過剰」のおそれがないかを、ほかの要因も含めて総合的に判断するとしています。
      </p>

      <h2>摂取カロリーを決めたあとの進め方</h2>
      <ul>
        <li>何をどれだけ食べるかは<a href="/articles/diet-tabemono/">ダイエット中の食べ物の選び方</a>（食事バランスガイドの1日量）で整理しています。</li>
        <li>運動で消費する分は<a href="/articles/kintore-yaseru/">筋トレで痩せる？</a>と<a href="/articles/yusanso-musanso/">有酸素運動と無酸素運動の違い</a>で計算しています。</li>
        <li>食事指導を受けながら進めたい方は<a href="/guide/">女性専用パーソナルジムの選び方</a>をご覧ください。持病がある方や妊娠中・授乳中の方は、医師にご相談ください。</li>
      </ul>

      <h2>出典</h2>
      <ul>
        <li><a href="https://www.mhlw.go.jp/content/10904750/000586553.pdf" target="_blank" rel="noopener noreferrer">厚生労働省「日本人の食事摂取基準（2020年版）」策定検討会報告書</a>（参考表2・表6・目標とするBMI・活用上の留意点）</li>
        <li><a href="https://www.mhlw.go.jp/content/001194020.pdf" target="_blank" rel="noopener noreferrer">厚生労働省「健康づくりのための身体活動・運動ガイド2023」</a>（INFORMATION 8 身体活動とエネルギー・栄養素について）</li>
      </ul>
      <p>いずれも2026年11月20日に確認しました。</p>
    </ArticleShell>
  )
}
