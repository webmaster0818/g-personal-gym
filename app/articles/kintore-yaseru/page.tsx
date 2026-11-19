import { pageUrlMeta } from '@/lib/seo'
import type { Metadata } from 'next'
import { ArticleShell } from '@/components/ArticleShell'

// 出典（2026年11月20日確認）
// - 厚生労働省「健康づくりのための身体活動・運動ガイド2023」 https://www.mhlw.go.jp/content/001194020.pdf
//   筋力トレーニングについて（週2〜3日・全身の大きな筋群・筋トレと有酸素性身体活動の組み合わせ）
//   INFORMATION 8 身体活動とエネルギー・栄養素について（体脂肪1kg≒7,000kcal・減量計画の式・たんぱく質0.1g/kg/日→2〜3か月で筋量0.39kg、1.3g/kg/日超で効率低下）
//   運動のメッツ表（ほどほどの強度の筋トレ3.8・スクワット5.0・ウェイトトレーニング高強度6.0・激しい強度の筋トレ8.0）
// - 同ガイドの身体活動表は「メッツ×時間×体重から安静時のエネルギー量を引いた値」で示しており、本ページも同じ方法（(メッツ−1)×時間×体重）で計算
// - 女性の参照体重 53.1kg（30〜49歳・日本人の食事摂取基準2015年版、e-ヘルスネット「加齢とエネルギー代謝」掲載値）

export const metadata: Metadata = {
  title: '筋トレで痩せる？体脂肪1kg（約7,000kcal）に届くまでの週数を厚労省ガイドで計算',
  description:
    '筋トレだけで体脂肪1kg分（約7,000kcal）を消費するには、スクワット30分を週3日行っても約22週かかる計算です（厚生労働省ガイド2023のメッツ表・女性参照体重53.1kg・安静時分を除く）。筋トレで痩せるための食事との組み合わせ方と、目標体重から1日に減らす量の計算式を掲載します。',
  ...pageUrlMeta('/articles/kintore-yaseru/'),
}

const KG = 53.1
const KCAL_PER_KG_FAT = 7000
// (メッツ − 1) × 0.5時間 × 体重 = 安静時分を除いた30分の消費量
const net30 = (mets: number) => Math.round((mets - 1) * 0.5 * KG)
const items = [
  { name: 'ほどほどの強度で行う筋トレ（腕立て伏せ・腹筋運動）', mets: 3.8 },
  { name: '筋トレ（スクワット）', mets: 5.0 },
  { name: 'ウェイトトレーニング（高強度）', mets: 6.0 },
  { name: '激しい強度で行う筋トレ（腕立て伏せ・腹筋運動）', mets: 8.0 },
]
const weeks = (mets: number, perWeek: number) => Math.round(KCAL_PER_KG_FAT / (net30(mets) * perWeek))
const squat = net30(5.0)
const plan3kg3m = Math.round((3 * KCAL_PER_KG_FAT) / 3 / 30)
const squatPerDay3 = Math.round((squat * 3) / 7)

const faqs = [
  {
    question: '筋トレだけで痩せることはできますか？',
    answer: `体重はエネルギーの摂取と消費の差で変わります。厚生労働省のガイド2023のメッツ表で計算すると、スクワット30分（女性の参照体重53.1kg）で安静時の分を除いて約${squat}kcalです。週3日続けても、体脂肪1kg分（約7,000kcal）に届くまで約${weeks(5.0, 3)}週かかります。筋トレだけで短期間に体重を減らすのは、数字のうえでは時間がかかります。`,
  },
  {
    question: '筋トレは週に何回行えばよいですか？',
    answer:
      '厚生労働省のガイド2023は、成人と高齢者に筋トレを週2〜3日行うことを推奨しています。特定の部位だけでなく、胸・背中・腕・腹・お尻・脚などの大きな筋肉を全身まんべんなく鍛えることと、休息日をとることも示されています。',
  },
  {
    question: '筋トレを始めたら体重が増えたのはなぜですか？',
    answer:
      '筋肉が増えると、その分は体重に加わります。体重だけでなく、体脂肪率やウエストなど複数の指標で変化を見ると判断しやすくなります。体重の変化は食事量の変化にも左右されるため、原因は一つに決められません。',
  },
  {
    question: '筋トレ中はたんぱく質をどのくらいとればよいですか？',
    answer:
      'ガイド2023で紹介されている系統的レビューでは、1日のたんぱく質摂取量を体重1kgあたり0.1g増やすと、2〜3か月で筋量が約0.39kg増えることが期待できるとされています。一方、体重1kgあたり1.3g/日を超えると筋量増加の効率が悪くなるとされ、多くとるほど筋肉が増えるわけではありません。腎機能に不安がある方は医師にご相談ください。',
  },
]

const related = [
  { href: '/articles/jijuu-training/', label: '自重トレーニングの頻度と消費エネルギー' },
  { href: '/articles/kiso-taisha/', label: '基礎代謝を上げるには（筋肉1kgの増加量）' },
  { href: '/articles/yusanso-musanso/', label: '有酸素運動と無酸素運動の違い' },
  { href: '/articles/diet-calorie/', label: 'ダイエット中の摂取カロリーの目安' },
  { href: '/articles/diet/', label: 'ダイエット目的のジムの選び方' },
]

export default function Page() {
  return (
    <ArticleShell
      eyebrow="Training and Weight"
      title="筋トレで痩せる？体脂肪1kgに届くまでの週数を計算"
      updated="2026年11月20日"
      lead={`筋トレは痩せるための手段の一つですが、筋トレだけで体脂肪を大きく減らすには時間がかかります。厚生労働省「健康づくりのための身体活動・運動ガイド2023」のメッツ表で計算すると、スクワット30分の消費量は安静時の分を除いて約${squat}kcal（女性の参照体重53.1kg）で、週3日続けても体脂肪1kg分（約7,000kcal）まで約${weeks(5.0, 3)}週です。このページでは、筋トレの消費量と、食事を組み合わせた減量計画の立て方を公的なデータで整理しています。`}
      breadcrumb="筋トレで痩せる？"
      faqs={faqs}
      related={related}
    >
      <h2>筋トレ30分の消費量と、体脂肪1kgに届くまでの週数</h2>
      <p>
        ガイド2023のメッツ表に載っている筋トレ4種目について、女性の参照体重（30〜49歳・53.1kg）で当サイトが計算しました。ガイドの身体活動の表と同じく、<strong>安静にしていても消費する分（1メッツ）を差し引いた値</strong>です。
      </p>
      <table>
        <thead>
          <tr>
            <th>種目（メッツ表の表記）</th>
            <th>メッツ</th>
            <th>30分の消費量</th>
            <th>週2日で1kg分まで</th>
            <th>週3日で1kg分まで</th>
          </tr>
        </thead>
        <tbody>
          {items.map((i) => (
            <tr key={i.name}>
              <td>{i.name}</td>
              <td>{i.mets.toFixed(1)}</td>
              <td>約{net30(i.mets)}kcal</td>
              <td>約{weeks(i.mets, 2)}週</td>
              <td>約{weeks(i.mets, 3)}週</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        計算式：（メッツ−1）×0.5時間×53.1kg。体脂肪1kg＝約7,000kcalはガイド2023の値です。実際の消費量は、体重・休憩時間・動作の速さで変わるため、目安としてご覧ください。
      </p>
      <div className="callout">
        <p>
          スクワット30分を週3日行った場合の消費量は、1日あたりにならすと約{squatPerDay3}kcalです。食事を1日100kcal減らした場合（約{Math.round(KCAL_PER_KG_FAT / 100)}日で7,000kcal）と比べると、筋トレだけで同じ量を減らすのは時間がかかることがわかります。
        </p>
      </div>

      <h2>痩せるための計画は「運動＋食事」で立てる</h2>
      <p>
        ガイド2023は、体脂肪1kgを減らすのに必要なエネルギー量を約7,000kcalとし、身体活動による消費と食事で摂取するエネルギー量を調整して、計画的に減量を図ることを示しています。ガイドに掲載されている計算式は次のとおりです。
      </p>
      <p>
        <strong>1日に減らしたいエネルギー量＝減らしたい体重（kg）×7,000kcal÷期間（か月）÷30日</strong>
      </p>
      <p>
        たとえば3か月で3kg減らす場合は、1日あたり約{plan3kg3m}kcalです。これを「身体活動で減らす分」と「食事で減らす分」に分けます。スクワット30分を週3日（1日あたり約{squatPerDay3}kcal）とすると、残りの約{plan3kg3m - squatPerDay3}kcalを食事で調整する計算になります。摂取量の目安は<a href="/articles/diet-calorie/">ダイエット中の摂取カロリーの目安</a>で整理しています。
      </p>

      <h2>体重以外に、筋トレで期待できること</h2>
      <ul>
        <li><strong>筋力・身体機能・骨密度</strong>：ガイド2023は、筋トレにより筋力・身体機能・骨密度が改善し、高齢者では転倒や骨折のリスクが低くなることを示しています。</li>
        <li><strong>有酸素性の活動との組み合わせ</strong>：筋トレと有酸素性身体活動を組み合わせると、さらなる健康増進効果が期待できるとされています。違いは<a href="/articles/yusanso-musanso/">有酸素運動と無酸素運動の違い</a>で整理しています。</li>
        <li><strong>基礎代謝</strong>：筋肉は1kgあたり1日約13kcalを安静時に消費します（e-ヘルスネット）。増加量は小さいものの、続けるほど積み上がります。詳しくは<a href="/articles/kiso-taisha/">基礎代謝を上げるには</a>をご覧ください。</li>
      </ul>

      <h2>筋トレの進め方（ガイド2023の要点）</h2>
      <ul>
        <li>週2〜3日、胸・背中・腕・腹・お尻・脚などの大きな筋肉を全身まんべんなく鍛えます。</li>
        <li>日常生活以上の負荷で行い、重さや回数で少しずつ負荷を高めます（漸進性過負荷の原則）。休息日をとることも重要です。</li>
        <li>マシンを使う場合の参考例として、最大挙上重量の60〜80%の重さで8〜12回繰り返す方法が紹介されています。</li>
      </ul>
      <p>
        自宅でできる種目は<a href="/articles/jijuu-training/">自重トレーニング</a>と<a href="/articles/kahanshin-kintore/">下半身の筋トレ</a>で紹介しています。フォームの確認や食事の相談を受けながら進めたい方は、<a href="/guide/">女性専用パーソナルジムの選び方</a>をご覧ください。
      </p>

      <h2>出典</h2>
      <ul>
        <li><a href="https://www.mhlw.go.jp/content/001194020.pdf" target="_blank" rel="noopener noreferrer">厚生労働省「健康づくりのための身体活動・運動ガイド2023」</a>（筋力トレーニングについて・INFORMATION 8 身体活動とエネルギー・栄養素について・運動のメッツ表）</li>
        <li><a href="https://kennet.mhlw.go.jp/information/information/food/e-07-002.html" target="_blank" rel="noopener noreferrer">e-ヘルスネット「加齢とエネルギー代謝」</a>（女性の参照体重・骨格筋の安静時代謝量）</li>
      </ul>
      <p>いずれも2026年11月20日に確認しました。</p>
    </ArticleShell>
  )
}
