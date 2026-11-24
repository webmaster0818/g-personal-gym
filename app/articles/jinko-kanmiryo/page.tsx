import { pageUrlMeta } from '@/lib/seo'
import type { Metadata } from 'next'
import { ArticleShell } from '@/components/ArticleShell'

// 出典（2026年11月25日確認）
// - WHO ニュースリリース 2023年5月15日「WHO advises not to use non-sugar sweeteners for weight control in newly released guideline」
//   https://www.who.int/news/item/15-05-2023-who-advises-not-to-use-non-sugar-sweeteners-for-weight-control-in-newly-released-guideline
//   ・体重のコントロールや非感染性疾患のリスク低減のために非糖質系甘味料（NSS）を使わないよう推奨（conditional＝条件付き推奨）
//   ・対象：アセスルファムK、アスパルテーム、アドバンテーム、チクロ（シクラメート）、ネオテーム、サッカリン、スクラロース、ステビア及びステビア誘導体
//   ・既に糖尿病がある人を除く全ての人が対象。歯磨き粉・スキンクリーム・医薬品、低カロリーの糖類・糖アルコール（ポリオール）は対象外
//   ・システマティックレビュー：NSSの使用は成人・子どもの体脂肪の減少に長期的な効果をもたらさない。長期使用は成人の2型糖尿病・心血管疾患・死亡のリスク上昇と関連する可能性（参加者の特性や使用パターンが影響している可能性あり）
//   ・代わりに：果物など自然に糖を含む食品、甘味のない食品・飲料。食事全体の甘さを下げる
// - WHO ニュースリリース 2023年7月14日「Aspartame hazard and risk assessment results released」
//   https://www.who.int/news/item/14-07-2023-aspartame-hazard-and-risk-assessment-results-released
//   ・IARC：グループ2B（ヒトに対して発がん性がある可能性がある）。ハザードの証拠の強さの分類で、摂取量に応じたリスクではない
//   ・JECFA：許容一日摂取量（ADI）0〜40mg/kg体重を再確認。この範囲内なら1日に摂取しても安全
//   ・例：体重70kgの成人がアスパルテーム200〜300mgを含むダイエット飲料を1日9〜14缶を超えて飲む場合にADIを超える（他からの摂取がない前提）

export const metadata: Metadata = {
  title: '人工甘味料はダイエットに効果がある？WHOの2023年ガイドラインと、アスパルテームの許容量',
  description:
    'WHOは2023年、体重のコントロールを目的に人工甘味料などの非糖質系甘味料を使わないよう推奨しました。対象の甘味料・対象外のもの・根拠をまとめ、アスパルテームの許容一日摂取量を体重別のmgと缶数に換算しています。',
  ...pageUrlMeta('/articles/jinko-kanmiryo/'),
}

// JECFA の ADI（mg/kg体重/日）
const ADI = 40
const weights = [45, 50, 55, 60, 65]
const adiMg = (kg: number) => kg * ADI
// WHO の例で使われた1缶あたりのアスパルテーム量
const CAN_LOW = 200
const CAN_HIGH = 300

const faqs = [
  {
    question: '人工甘味料はダイエットに効果がありますか？',
    answer:
      'WHOが2023年5月に公表したガイドラインは、体重のコントロールや非感染性疾患のリスク低減を目的に非糖質系甘味料を使わないよう推奨しています。根拠となったレビューでは、非糖質系甘味料の使用は成人・子どもの体脂肪の減少に長期的な効果をもたらさないとされました。この推奨は「条件付き」で、国ごとの状況に応じた検討が必要とされています。',
  },
  {
    question: 'どの甘味料が対象ですか？',
    answer:
      'WHOの推奨の対象は、アセスルファムK、アスパルテーム、アドバンテーム、チクロ（シクラメート）、ネオテーム、サッカリン、スクラロース、ステビアとステビア誘導体などの非糖質系甘味料です。糖アルコール（ポリオール）などの低カロリーの糖類はカロリーがあるため対象外です。既に糖尿病がある人も対象外とされています。',
  },
  {
    question: 'アスパルテームは発がん性があるのですか？',
    answer:
      'WHOの国際がん研究機関（IARC）は2023年7月、アスパルテームを「ヒトに対して発がん性がある可能性がある」（グループ2B）に分類しました。この分類は証拠の強さを示すもので、摂取量に応じたリスクを示すものではありません。同時期にJECFA（FAO/WHO合同食品添加物専門家会議）は、許容一日摂取量を体重1kgあたり0〜40mgのまま維持し、この範囲内であれば安全としています。',
  },
  {
    question: '甘い飲み物をやめるには何に置き換えればよいですか？',
    answer:
      'WHOは、果物など自然に糖を含む食品や、甘味のない食品・飲料を選び、食事全体の甘さを下げることを勧めています。砂糖入りの飲料から人工甘味料入りの飲料に替えるのではなく、水やお茶など甘味のない飲料に替える方法です。',
  },
]

const related = [
  { href: '/articles/diet-tabemono/', label: 'ダイエット中の食べ物の選び方' },
  { href: '/articles/toushitsu-seigen/', label: '糖質制限ダイエットとは' },
  { href: '/articles/diet-calorie/', label: 'ダイエットの摂取カロリーの決め方' },
  { href: '/articles/pfc-balance/', label: 'PFCバランスとは' },
]

export default function Page() {
  return (
    <ArticleShell
      eyebrow="Sweeteners"
      title="人工甘味料はダイエットに効果がある？WHOの見解"
      updated="2026年11月25日"
      lead="世界保健機関（WHO）は2023年5月、体重のコントロールを目的に、人工甘味料を含む非糖質系甘味料を使わないよう推奨するガイドラインを公表しました。長期的には体脂肪を減らす効果がみられず、長期使用は2型糖尿病などのリスク上昇と関連する可能性があるためです。安全性の基準である許容一日摂取量とは別の観点の推奨です。このページでは推奨の内容を整理し、アスパルテームの許容量を体重別に換算しました。"
      breadcrumb="人工甘味料とダイエット"
      faqs={faqs}
      related={related}
    >
      <h2>WHOのガイドライン（2023年5月）の内容</h2>
      <table>
        <thead>
          <tr>
            <th>項目</th>
            <th>内容</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>推奨</td><td>体重のコントロールや非感染性疾患のリスク低減のために、非糖質系甘味料を使わない（条件付き推奨）</td></tr>
          <tr><td>対象の甘味料</td><td>アセスルファムK、アスパルテーム、アドバンテーム、チクロ（シクラメート）、ネオテーム、サッカリン、スクラロース、ステビア及びステビア誘導体など。加工食品に含まれるものと、消費者が自分で加えるものの両方</td></tr>
          <tr><td>対象の人</td><td>既に糖尿病がある人を除く全ての人</td></tr>
          <tr><td>対象外</td><td>歯磨き粉・スキンクリーム・医薬品などに含まれるもの／糖アルコール（ポリオール）などの低カロリーの糖類（カロリーがあるため非糖質系甘味料に当たらない）</td></tr>
          <tr><td>根拠</td><td>システマティックレビューで、成人・子どもの体脂肪の減少に長期的な効果がみられなかった。長期使用は成人の2型糖尿病・心血管疾患・死亡のリスク上昇と関連する可能性（参加者の特性や使い方が影響している可能性も指摘）</td></tr>
          <tr><td>代わりに勧めること</td><td>果物など自然に糖を含む食品、甘味のない食品・飲料を選ぶ。食事全体の甘さを下げる</td></tr>
        </tbody>
      </table>
      <p>
        「条件付き」は、各国で政策にする際に、年齢層ごとの摂取状況など国の事情に応じた議論が必要になりうるという意味です。人工甘味料を使ったからといって太るという意味でも、すぐに健康被害が出るという意味でもありません。
      </p>

      <h2>安全性の基準（許容一日摂取量）は別の評価</h2>
      <p>
        WHOのガイドラインは「体重を減らす手段として役立つか」の評価です。食品添加物として安全に摂れる量は、JECFA（FAO/WHO合同食品添加物専門家会議）が許容一日摂取量（ADI）として評価しています。2023年7月、JECFAはアスパルテームのADIを体重1kgあたり0〜{ADI}mgのまま維持しました。同時期にIARCはアスパルテームをグループ2B（ヒトに対して発がん性がある可能性がある）に分類しましたが、WHOはこの分類が証拠の強さを示すもので、摂取量に応じたリスクではないと説明しています。
      </p>

      <h2>体重別のアスパルテームの許容一日摂取量（当サイト計算）</h2>
      <p>
        ADI（体重1kgあたり{ADI}mg）に体重をかけ、WHOの例と同じく1缶にアスパルテームが{CAN_LOW}mgまたは{CAN_HIGH}mg含まれるダイエット飲料に換算しました。ほかの食品からの摂取がない前提です。
      </p>
      <table>
        <thead>
          <tr>
            <th>体重</th>
            <th>1日の許容量</th>
            <th>1缶{CAN_LOW}mgの場合</th>
            <th>1缶{CAN_HIGH}mgの場合</th>
          </tr>
        </thead>
        <tbody>
          {weights.map((kg) => (
            <tr key={kg}>
              <td>{kg}kg</td>
              <td>{adiMg(kg).toLocaleString()}mg</td>
              <td>{Math.floor(adiMg(kg) / CAN_LOW)}缶まで</td>
              <td>{Math.floor(adiMg(kg) / CAN_HIGH)}缶まで</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="callout">
        <p>
          体重50kgの人の許容量は1日{adiMg(50).toLocaleString()}mgで、1缶{CAN_HIGH}mgの飲料なら{Math.floor(adiMg(50) / CAN_HIGH)}缶、{CAN_LOW}mgなら{Math.floor(adiMg(50) / CAN_LOW)}缶までに相当します。WHOは、一般的に使われる量では安全性は大きな懸念ではないとしています。一方で、許容量の範囲内であっても、体重のコントロールに役立つとはいえないというのがWHOの見解です。
        </p>
      </div>
      <p>
        実際の製品に含まれるアスパルテームの量は製品ごとに異なります。上の表は、許容量の大きさをつかむための目安です。
      </p>

      <h2>ダイエット中の甘い飲み物・食べ物の考え方</h2>
      <ul>
        <li><strong>甘い飲み物は、甘味のない飲料に置き換える</strong>：WHOは、甘味のない食品・飲料を選ぶことを勧めています。</li>
        <li><strong>甘いものは果物から</strong>：自然に糖を含む食品として果物が例に挙げられています。1日にとりたい果物の量は<a href="/articles/diet-tabemono/">ダイエット中の食べ物の選び方</a>でグラムに換算しています。</li>
        <li><strong>体重を減らす中心は摂取エネルギーの調整</strong>：1日の摂取カロリーの決め方は<a href="/articles/diet-calorie/">ダイエットの摂取カロリー</a>、糖質の量の考え方は<a href="/articles/toushitsu-seigen/">糖質制限ダイエットとは</a>をご覧ください。</li>
      </ul>
      <p>
        糖尿病の治療中の方は、甘味料の使い方を含め、主治医の指示に従ってください。
      </p>

      <h2>出典</h2>
      <ul>
        <li><a href="https://www.who.int/news/item/15-05-2023-who-advises-not-to-use-non-sugar-sweeteners-for-weight-control-in-newly-released-guideline" target="_blank" rel="noopener noreferrer">WHO「WHO advises not to use non-sugar sweeteners for weight control in newly released guideline」（2023年5月15日）</a></li>
        <li><a href="https://www.who.int/news/item/14-07-2023-aspartame-hazard-and-risk-assessment-results-released" target="_blank" rel="noopener noreferrer">WHO「Aspartame hazard and risk assessment results released」（2023年7月14日・IARC／JECFA）</a></li>
      </ul>
      <p>2026年11月25日に確認しました。</p>
    </ArticleShell>
  )
}
