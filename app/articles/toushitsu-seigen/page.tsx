import { pageUrlMeta } from '@/lib/seo'
import type { Metadata } from 'next'
import { ArticleShell } from '@/components/ArticleShell'

// 出典（2026年11月19日確認）
// - e-ヘルスネット「炭水化物 / 糖質」（最終更新2026年11月2日） 食事摂取基準2025年版 炭水化物の目標量＝総エネルギーの50〜65%・糖質1g≒4kcal
//   https://kennet.mhlw.go.jp/information/information/dictionary/food/ye-018.html
// - 日本糖尿病学会「糖尿病診療ガイドライン2024」3章 食事療法 CQ3-3 https://www.jds.or.jp/uploads/files/publications/gl2024/03_1.pdf
// - e-ヘルスネット「身体活動とエネルギー・栄養素」 体脂肪1kg≒7,000kcal https://kennet.mhlw.go.jp/information/information/exercise/s-00-012.html
// グラム換算（当サイト計算）: 摂取エネルギー×0.50〜0.65÷4

export const metadata: Metadata = {
  title: '糖質制限ダイエットとは｜食事摂取基準2025の炭水化物の目安と、学会ガイドラインの見解',
  description:
    '糖質制限ダイエットを始める前に知っておきたい公的な基準を整理しました。日本人の食事摂取基準（2025年版）では炭水化物の目標量は総エネルギーの50〜65%です。摂取エネルギー別のグラム換算表と、日本糖尿病学会ガイドライン2024の炭水化物制限についての記載を掲載します。',
  ...pageUrlMeta('/articles/toushitsu-seigen/'),
}

const faqs = [
  {
    question: '炭水化物は1日にどのくらいとればよいですか？',
    answer:
      '日本人の食事摂取基準（2025年版）では、1歳以上のすべての年齢階級で、炭水化物の目標量が1日の総エネルギー摂取量の50〜65%とされています（e-ヘルスネット「炭水化物 / 糖質」）。1日1,600kcalの場合、当サイトの計算で約200〜260gです。',
  },
  {
    question: '糖質制限は学会で推奨されていますか？',
    answer:
      '日本糖尿病学会の「糖尿病診療ガイドライン2024」は、2型糖尿病の血糖コントロールについて、6〜12か月以内の短期間であれば炭水化物制限は有効としています。一方で、総エネルギー摂取量を制限せずに炭水化物のみを極端に制限することは、長期的な遵守性や安全性を担保する科学的根拠が不足しており、現時点では勧められないとしています。これは糖尿病の治療についての記載で、減量目的の一般向けの推奨ではありません。',
  },
  {
    question: '糖質と炭水化物は同じですか？',
    answer:
      '炭水化物は、消化・吸収されてエネルギー源になる糖質と、人の消化酵素では分解されにくい食物繊維に分けられます。糖質は1gあたり約4kcalのエネルギーを産生します（e-ヘルスネット）。',
  },
  {
    question: '持病がある場合や妊娠中でも糖質制限をしてよいですか？',
    answer:
      '糖尿病の治療中で薬を使っている方、腎臓の病気がある方、妊娠中・授乳中の方は、食事内容を変える前に必ずかかりつけの医師にご相談ください。',
  },
]

const related = [
  { href: '/articles/diet/', label: 'ダイエット目的のジムの選び方' },
  { href: '/articles/kiso-taisha/', label: '基礎代謝を上げる方法と数字の目安' },
  { href: '/articles/jijuu-training/', label: '自重トレーニングの頻度と消費エネルギー' },
  { href: '/articles/kouka-itsukara/', label: 'パーソナルジムの効果はいつから' },
  { href: '/cost/', label: '料金相場ガイド' },
]

const intakes = [1400, 1600, 1800, 2000]
const g = (kcal: number, pct: number) => Math.round((kcal * pct) / 4)
const pctOf130 = (kcal: number) => Math.round(((130 * 4) / kcal) * 1000) / 10

export default function Page() {
  return (
    <ArticleShell
      eyebrow="Carbohydrate"
      title="糖質制限ダイエットとは｜炭水化物の公的な目安と学会ガイドラインの見解"
      updated="2026年11月19日"
      lead="糖質制限ダイエットは、ごはん・パン・麺などの糖質（炭水化物）を減らして体重を落とそうとする方法です。日本人の食事摂取基準（2025年版）では、炭水化物の目標量は1日の総エネルギーの50〜65%とされています。このページでは、摂取エネルギー別のグラム換算と、日本糖尿病学会のガイドラインが炭水化物制限をどう評価しているかを整理しています。"
      breadcrumb="糖質制限ダイエットとは"
      faqs={faqs}
      related={related}
    >
      <h2>炭水化物の公的な目安（食事摂取基準2025年版）</h2>
      <p>
        e-ヘルスネット（厚生労働省）によると、日本人の食事摂取基準（2025年版）では、1歳以上のすべての年齢階級で、<strong>炭水化物の目標量が1日の総エネルギー摂取量の50〜65%</strong>に設定されています。糖質は1gあたり約4kcalで、特に脳の重要なエネルギー源とされています。
      </p>
      <p>当サイトで、この割合を摂取エネルギー別のグラム数に換算しました。</p>
      <table>
        <thead>
          <tr>
            <th>1日の摂取エネルギー</th>
            <th>炭水化物 50%</th>
            <th>炭水化物 65%</th>
            <th>130gが占める割合</th>
          </tr>
        </thead>
        <tbody>
          {intakes.map((k) => (
            <tr key={k}>
              <td>{k.toLocaleString()}kcal</td>
              <td>約{g(k, 0.5)}g</td>
              <td>約{g(k, 0.65)}g</td>
              <td>約{pctOf130(k).toFixed(1)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        当サイト計算（2026年11月19日）。計算式は「摂取エネルギー×割合÷4kcal」です。厳密には炭水化物には食物繊維も含まれるため、目安としてご覧ください。必要な摂取エネルギーは年齢・体格・活動量で異なります。
      </p>

      <h2>日本糖尿病学会ガイドライン2024の記載</h2>
      <p>
        日本糖尿病学会の「糖尿病診療ガイドライン2024」第3章（食事療法）は、炭水化物制限について次のように記載しています。対象は糖尿病の治療で、健康な方の減量についての推奨ではない点にご注意ください。
      </p>
      <ul>
        <li>2型糖尿病の血糖コントロールのために、<strong>6〜12か月以内の短期間であれば炭水化物制限は有効</strong>（推奨グレードB）。</li>
        <li>消化性炭水化物の最低許容量は130g/日とされているが、実際の最低許容量は不明。</li>
        <li>日本人2型糖尿病では、約130g/日の炭水化物制限で有害事象なく6か月後のHbA1cの改善を認めた研究がある。</li>
        <li>一方、<strong>総エネルギー摂取量を制限せずに炭水化物のみを極端に制限すること</strong>は、効果だけでなく長期的な遵守性や安全性を担保する科学的根拠が不足しており、<strong>現時点では勧められない</strong>。</li>
      </ul>
      <div className="callout">
        <p>
          上の表のとおり、1日130gの炭水化物は、1,600kcalの食事なら総エネルギーの約{pctOf130(1600)}%に当たり、食事摂取基準の目標量（50〜65%）を下回ります。糖質を減らす場合も、総エネルギー量と栄養素のバランスをあわせて確認することが、公的な資料に沿った考え方です。
        </p>
      </div>

      <h2>体重を減らすときの基本はエネルギー収支</h2>
      <p>
        e-ヘルスネットでは、体脂肪1kgを減らすために必要なエネルギー量は約7,000kcalとされ、身体活動による消費と食事で摂取するエネルギー量を調整して計画的に減量を図ることが必要としています。糖質を減らすことは摂取エネルギーを減らす手段の一つですが、たんぱく質・脂質を含めた総量で考える必要があります。
      </p>
      <p>
        運動による消費エネルギーの目安は<a href="/articles/jijuu-training/">自重トレーニングの消費エネルギー</a>、筋肉量と代謝の関係は<a href="/articles/kiso-taisha/">基礎代謝を上げる方法と数字の目安</a>で計算しています。
      </p>

      <h2>パーソナルジムの食事指導を利用する場合</h2>
      <p>
        パーソナルジムの中には、食事指導を料金に含むところがあります。糖質の減らし方や1日の摂取量の目安を個別に相談したい方は、体験時に食事指導の内容（糖質制限を前提とするか、バランス型か）を確認すると、ご自身に合うかを判断しやすくなります。ジム選びの観点は<a href="/articles/diet/">ダイエット目的のパーソナルジムの選び方</a>、エリア別の一覧は<a href="/areas/">エリアから探す</a>をご覧ください。
      </p>

      <h2>出典</h2>
      <ul>
        <li><a href="https://kennet.mhlw.go.jp/information/information/dictionary/food/ye-018.html" target="_blank" rel="noopener noreferrer">e-ヘルスネット「炭水化物 / 糖質」</a>（日本人の食事摂取基準2025年版の目標量）</li>
        <li><a href="https://www.jds.or.jp/uploads/files/publications/gl2024/03_1.pdf" target="_blank" rel="noopener noreferrer">日本糖尿病学会「糖尿病診療ガイドライン2024」3章 食事療法</a></li>
        <li><a href="https://kennet.mhlw.go.jp/information/information/exercise/s-00-012.html" target="_blank" rel="noopener noreferrer">e-ヘルスネット「身体活動とエネルギー・栄養素」</a></li>
      </ul>
      <p>いずれも2026年11月19日に確認しました。</p>
    </ArticleShell>
  )
}
