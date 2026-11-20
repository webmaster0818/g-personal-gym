import { pageUrlMeta } from '@/lib/seo'
import type { Metadata } from 'next'
import { ArticleShell } from '@/components/ArticleShell'

// 出典（2026年11月19日確認）
// - e-ヘルスネット「加齢とエネルギー代謝」（大河原一憲・最終更新2019年6月5日）
//   表1 日本人の基礎代謝基準値（食事摂取基準2015年版）・表2 臓器・組織の安静時代謝量（骨格筋13・脂肪組織4.5 kcal/kg/日）
//   https://kennet.mhlw.go.jp/information/information/food/e-07-002.html
// - e-ヘルスネット「身体活動とエネルギー・栄養素」 体脂肪1kg≒7,000kcal https://kennet.mhlw.go.jp/information/information/exercise/s-00-012.html
// - 厚生労働省「健康づくりのための身体活動・運動ガイド2023」 https://www.mhlw.go.jp/content/001194020.pdf（筋トレ週2〜3日・メッツ表 スクワット5.0）
// - 厚生労働省「私のアクティブプラン」解説書 エネルギー消費量＝メッツ・時×体重 https://kennet.mhlw.go.jp/tools/wp/wp-content/themes/targis_mhlw/pdf/guide-physical.pdf

export const metadata: Metadata = {
  title: '基礎代謝を上げるには｜女性の基礎代謝量の目安と、筋肉1kgで増える量を公的データで計算',
  description:
    '女性の基礎代謝量は参照体重で1日約1,020〜1,150kcalです（食事摂取基準2015年版・e-ヘルスネット）。骨格筋の安静時代謝量は1kgあたり1日約13kcalで、筋肉を1kg増やしたときの増加量を当サイトで計算しました。基礎代謝を上げる方法と、運動で消費するエネルギーとの比較も掲載します。',
  ...pageUrlMeta('/articles/kiso-taisha/'),
}

const rows = [
  { age: '18〜29歳', base: 22.1, kg: 50.0, bmr: 1110 },
  { age: '30〜49歳', base: 21.7, kg: 53.1, bmr: 1150 },
  { age: '50〜69歳', base: 20.7, kg: 53.0, bmr: 1100 },
  { age: '70歳以上', base: 20.7, kg: 49.5, bmr: 1020 },
]
const MUSCLE = 13
const FAT = 4.5
const squat30 = Math.round(5.0 * 0.5 * 53.1)

const faqs = [
  {
    question: '女性の基礎代謝量はどのくらいですか？',
    answer:
      'e-ヘルスネットに掲載されている日本人の食事摂取基準（2015年版）の値では、女性の基礎代謝量は参照体重で18〜29歳が1日約1,110kcal、30〜49歳が約1,150kcal、50〜69歳が約1,100kcal、70歳以上が約1,020kcalです。体重1kgあたりの基礎代謝基準値に、ご自身の体重を掛けると目安を計算できます。',
  },
  {
    question: '筋肉を1kg増やすと基礎代謝はどのくらい上がりますか？',
    answer: `e-ヘルスネットの表では、骨格筋の安静時代謝量は1kgあたり1日約${MUSCLE}kcalです。筋肉が1kg増えた場合、単純計算で1日約${MUSCLE}kcal、1か月（30日）で約${MUSCLE * 30}kcalの増加です。`,
  },
  {
    question: '年齢とともに基礎代謝が下がるのはなぜですか？',
    answer:
      'e-ヘルスネットでは、加齢に伴う基礎代謝量の低下の主な理由として、筋肉などの除脂肪量の低下が挙げられています。ただし、それだけではすべてを説明できず、各臓器の代謝率の低下も要因と考えられています。',
  },
  {
    question: '基礎代謝を上げるために何から始めればよいですか？',
    answer:
      '厚生労働省のガイド2023が成人に推奨している筋力トレーニング（週2〜3日）と、日常の身体活動を増やすことが基本です。e-ヘルスネットも、身体活動を活発に行うことは筋肉量の減少を遅らせ、加齢に伴う総エネルギー消費量の低下を防ぐことにつながるとしています。',
  },
]

const related = [
  { href: '/articles/kintore-yaseru/', label: '筋トレで痩せる？体脂肪1kgまでの週数' },
  { href: '/articles/kinniku-iji/', label: '減量中に筋肉を維持するには' },
  { href: '/articles/jijuu-training/', label: '自重トレーニングの頻度と消費エネルギー' },
  { href: '/articles/kahanshin-kintore/', label: '下半身の筋トレ（スクワット・ロコトレ）' },
  { href: '/articles/40dai-50dai/', label: '40代・50代女性のジムの選び方' },
  { href: '/articles/toushitsu-seigen/', label: '糖質制限ダイエットの公的な目安' },
  { href: '/articles/diet/', label: 'ダイエット目的のジムの選び方' },
]

export default function Page() {
  return (
    <ArticleShell
      eyebrow="Basal Metabolism"
      title="基礎代謝を上げるには｜女性の基礎代謝量の目安と筋肉1kgで増える量"
      updated="2026年11月19日"
      lead={`基礎代謝を上げる中心的な方法は、筋力トレーニングで筋肉量を保つ・増やすことです。ただし、e-ヘルスネットの表では骨格筋の安静時代謝量は1kgあたり1日約${MUSCLE}kcalで、筋肉が1kg増えても基礎代謝の増加は1日約${MUSCLE}kcalにとどまります。このページでは、女性の基礎代謝量の目安と、筋肉量・運動・年齢による違いを公的なデータで計算しています。`}
      breadcrumb="基礎代謝を上げるには"
      faqs={faqs}
      related={related}
    >
      <h2>女性の基礎代謝量の目安</h2>
      <table>
        <thead>
          <tr>
            <th>年齢</th>
            <th>基礎代謝基準値（kcal/kg/日）</th>
            <th>参照体重（kg）</th>
            <th>基礎代謝量（kcal/日）</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.age}>
              <td>{r.age}</td>
              <td>{r.base.toFixed(1)}</td>
              <td>{r.kg.toFixed(1)}</td>
              <td>{r.bmr.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        出典：e-ヘルスネット「加齢とエネルギー代謝」表1（日本人の食事摂取基準2015年版の値、2026年11月19日確認）。ご自身の目安は「基礎代謝基準値×ご自身の体重」で計算できます。
      </p>
      <p>
        体重を同じ53kgにそろえて当サイトで計算すると、18〜29歳の基準値（22.1）では1日約{Math.round(22.1 * 53).toLocaleString()}kcal、50〜69歳の基準値（20.7）では約{Math.round(20.7 * 53).toLocaleString()}kcalで、<strong>同じ体重でも1日約{Math.round(22.1 * 53) - Math.round(20.7 * 53)}kcalの差</strong>があります。
      </p>

      <h2>筋肉と脂肪では、安静時の代謝量が約3倍違う</h2>
      <p>e-ヘルスネットに掲載されている臓器・組織ごとの安静時代謝量（体重70kgのモデル）は次のとおりです。</p>
      <table>
        <thead>
          <tr>
            <th>臓器・組織</th>
            <th>1kgあたり（kcal/日）</th>
            <th>全体に占める割合</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>骨格筋</td><td>{MUSCLE}</td><td>22%</td></tr>
          <tr><td>脂肪組織</td><td>{FAT}</td><td>4%</td></tr>
          <tr><td>肝臓</td><td>200</td><td>21%</td></tr>
          <tr><td>脳</td><td>240</td><td>20%</td></tr>
          <tr><td>心臓・腎臓</td><td>各440</td><td>各8〜9%</td></tr>
        </tbody>
      </table>
      <p>出典：e-ヘルスネット「加齢とエネルギー代謝」表2（2026年11月19日確認）。</p>

      <h3>筋肉が1kg増えたときの計算（当サイト計算）</h3>
      <div className="data-grid">
        <div className="data-card"><div className="num">約{MUSCLE}kcal</div><div className="label">1日あたりの増加</div></div>
        <div className="data-card"><div className="num">約{MUSCLE * 30}kcal</div><div className="label">1か月（30日）</div></div>
        <div className="data-card"><div className="num">約{Math.round(7000 / MUSCLE)}日</div><div className="label">体脂肪1kg分（約7,000kcal）に届くまで</div></div>
      </div>
      <p>
        体脂肪1kg＝約7,000kcalはe-ヘルスネット「身体活動とエネルギー・栄養素」の値です。筋肉を増やすことは基礎代謝を高めますが、その増加量は1日あたりでは小さい数字です。
      </p>

      <h2>基礎代謝を上げる方法と、運動で消費する量の比較</h2>
      <p>
        一方で、筋力トレーニングそのものもエネルギーを消費します。ガイド2023のメッツ表でスクワットは5.0メッツで、女性30〜49歳の参照体重（53.1kg）で30分行うと、計算上は約{squat30}kcal（安静時の分を含む）です。これは、筋肉1kg分の基礎代謝の増加（1日約{MUSCLE}kcal）の約{Math.round(squat30 / MUSCLE)}日分に当たります。
      </p>
      <ul>
        <li><strong>筋力トレーニングを週2〜3日</strong>：厚生労働省のガイド2023が成人に推奨している頻度です。筋肉量を保つことは、加齢による基礎代謝の低下への対策になります。</li>
        <li><strong>日常の身体活動を増やす</strong>：e-ヘルスネットは、身体活動を活発に行うことがエネルギー消費を高く保ち、筋肉量の減少を遅らせるとしています。</li>
        <li><strong>食事のエネルギー収支を確認する</strong>：体重の変化は、消費と摂取の差で決まります。炭水化物の目安は<a href="/articles/toushitsu-seigen/">糖質制限ダイエットの公的な目安</a>で整理しています。</li>
      </ul>
      <div className="callout">
        <p>
          「基礎代謝を上げる」ことは、筋トレを続けた結果として少しずつ積み上がるものです。短期間で体重を減らしたい場合は、運動そのものの消費と食事の調整のほうが、数字のうえでは大きく影響します。
        </p>
      </div>

      <h2>筋トレを続けるための環境を選ぶ</h2>
      <p>
        自宅での進め方は<a href="/articles/jijuu-training/">自重トレーニングの頻度と消費エネルギー</a>と<a href="/articles/kahanshin-kintore/">下半身の筋トレ</a>で紹介しています。フォームの確認や継続のサポートを受けたい方は、<a href="/guide/">女性専用パーソナルジムの選び方</a>、年代別の考え方は<a href="/articles/40dai-50dai/">40代・50代女性のジムの選び方</a>をご覧ください。
      </p>

      <h2>出典</h2>
      <ul>
        <li><a href="https://kennet.mhlw.go.jp/information/information/food/e-07-002.html" target="_blank" rel="noopener noreferrer">e-ヘルスネット「加齢とエネルギー代謝」</a>（表1 基礎代謝基準値・表2 臓器・組織の安静時代謝量）</li>
        <li><a href="https://kennet.mhlw.go.jp/information/information/exercise/s-00-012.html" target="_blank" rel="noopener noreferrer">e-ヘルスネット「身体活動とエネルギー・栄養素」</a></li>
        <li><a href="https://www.mhlw.go.jp/content/001194020.pdf" target="_blank" rel="noopener noreferrer">厚生労働省「健康づくりのための身体活動・運動ガイド2023」</a></li>
        <li><a href="https://kennet.mhlw.go.jp/tools/wp/wp-content/themes/targis_mhlw/pdf/guide-physical.pdf" target="_blank" rel="noopener noreferrer">厚生労働省「身体活動量アップで健康づくり！私のアクティブプラン」解説書</a></li>
      </ul>
      <p>いずれも2026年11月19日に確認しました。</p>
    </ArticleShell>
  )
}
