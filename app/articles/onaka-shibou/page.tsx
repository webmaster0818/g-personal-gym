import { pageUrlMeta } from '@/lib/seo'
import type { Metadata } from 'next'
import { ArticleShell } from '@/components/ArticleShell'

// 出典（2026年11月20日確認・C-7／運動指針2006の腹囲1cm＝体重約1kgの原文は11月28日に再確認）
// - 厚生労働省 標準的な健診・保健指導プログラム 学習教材 C-7「無理なく内臓脂肪を減らすために」 https://www.mhlw.go.jp/bunya/kenkou/seikatsu/pdf/03-c-07.pdf
//   腹囲 男性85cm・女性90cm以上が対象、腹囲1cm減＝体重1kg減＝約7,000kcal、1日あたり240kcal、減らせる腹囲は1か月で1cm程度（じっくり1cm/月・急ぐ2cm/月）、身体活動と食事の両方が不可欠
// - 厚生労働省「健康づくりのための運動指針2006（エクササイズガイド2006）」【参考】内臓脂肪減少のための身体活動量 https://www.mhlw.go.jp/shingi/2006/07/dl/s0725-9f-7.pdf
//   内臓脂肪型肥満（腹囲 女性90cm以上）、腹囲1cm減≒体重約1kg（大部分が脂肪）、1か月1cmで1日約230kcal、食事改善と併用したほうが内臓脂肪の減少量も大きい、週10エクササイズ程度（30分の速歩を週5回相当）
// - 厚生労働省「健康づくりのための身体活動・運動ガイド2023」 https://www.mhlw.go.jp/content/001194020.pdf
//   特定保健指導における内臓脂肪減少のためのエネルギー調整（体脂肪1kg≒7,000kcal）／筋トレは特定の部位ではなく大きな筋群を全身まんべんなく／メッツ表 やや速歩4.3
// - 参照体重 女性30〜49歳 53.1kg https://kennet.mhlw.go.jp/information/information/food/e-07-002.html

export const metadata: Metadata = {
  title: 'お腹の脂肪を落とす方法｜厚労省の目安「腹囲1cm＝体重1kg＝約7,000kcal」で計算する期間と1日の量',
  description:
    '腹囲が1cm減ると体重は約1kg減る（大部分が脂肪・約7,000kcal）というのが厚生労働省の目安です。減らせる腹囲は1か月1cm程度、1日約230〜240kcal。運動と食事の併用が前提で、減らしたい腹囲ごとの期間・1日の量・速歩の時間を計算しました。',
  ...pageUrlMeta('/articles/onaka-shibou/'),
}

const W = 53.1
const cms = [1, 2, 3, 5]
const perDay = (cm: number, months: number) => Math.round((cm * 7000) / months / 30)
// やや速歩（4.3メッツ）を安静分を除いて計算した分数
const walkMin = (kcal: number) => Math.round((kcal / ((4.3 - 1) * W)) * 60)

const faqs = [
  {
    question: '腹囲が1cm減少すると、体重は何kg減少しますか？',
    answer:
      '厚生労働省の資料では、腹囲1cmの減少は約1kgの体重減少に相当するとしています（2006年の運動指針は「大部分が脂肪」と注記）。保健指導の教材も「腹囲1cmを減らす（＝体重1kgを減らす）のに、約7,000kcalが必要」としています。',
  },
  {
    question: '体重1kgは腹囲1cmに相当しますか？',
    answer:
      '厚生労働省の保健指導の目安では、体重約1kgの減少が腹囲約1cmの減少に相当するとされています。ただし減り方には個人差があり、筋肉や水分の増減でも体重は変わるため、腹囲はへその高さで定期的に測って確認するのが確実です。',
  },
  {
    question: 'お腹の脂肪だけを落とす方法はありますか？',
    answer:
      '当サイトが確認した厚生労働省の資料には、お腹だけの脂肪を落とす方法は示されていません。腹囲を減らす方法として示されているのは、身体活動による消費の増加と食事による摂取の減少の組み合わせです。筋力トレーニングについても、ガイド2023は特定の部位ではなく、腹を含む大きな筋群を全身まんべんなく鍛えることを勧めています。',
  },
  {
    question: '腹囲を1cm減らすには何kcal必要ですか？',
    answer:
      '厚生労働省の保健指導の教材では、腹囲1cmの減少は体重約1kgの減少に相当し、約7,000kcalが必要としています。1か月で1cm減らす場合、1日あたり約230〜240kcalです。',
  },
  {
    question: '1か月でどのくらい腹囲を減らせますか？',
    answer:
      '同じ教材では、減らせる腹囲は1か月で1cm程度とし、目標との差が大きい人はじっくり時間をかけるよう示しています。急ぐ場合の計画でも1か月2cmです。',
  },
  {
    question: '腹囲の基準は女性で何cmですか？',
    answer:
      '内臓脂肪型肥満の判定に使われる腹囲（へその高さ）の基準は、女性90cm以上、男性85cm以上です。メタボリックシンドロームは、これに加えて高血糖・脂質異常・高血圧のうち2つ以上を合併した状態とされています。',
  },
]

const related = [
  { href: '/articles/1kagetsu-5kg/', label: '1ヶ月で5キロ痩せるには（1日に減らす量）' },
  { href: '/articles/taiju-heranai/', label: '体重が減らない原因' },
  { href: '/articles/ninoude-diet/', label: '二の腕ダイエットの考え方（部分やせ）' },
  { href: '/articles/yusanso-musanso/', label: '有酸素運動と無酸素運動の違い' },
  { href: '/articles/bodymake/', label: 'くびれ作りに強いジムの選び方' },
  { href: '/articles/shisei/', label: '姿勢改善に強いジムの選び方' },
]

export default function Page() {
  return (
    <ArticleShell
      eyebrow="Belly Fat"
      title="お腹の脂肪を落とす方法｜腹囲1cmに必要な量と期間の目安"
      updated="2026年11月28日"
      lead="お腹の脂肪（内臓脂肪）を減らす方法として、厚生労働省の保健指導の教材は、運動で消費を増やすことと食事で摂取を減らすことの両方が欠かせないとしています。腹囲1cmの減少は体重約1kg（約7,000kcal）に相当し、減らす目安は1か月で1cm程度、1日あたり約240kcalです。お腹だけを狙って脂肪を落とす方法は、当サイトが確認した厚生労働省の資料には示されていません。"
      breadcrumb="お腹の脂肪を落とす方法"
      faqs={faqs}
      related={related}
    >
      <h2>腹囲が1cm減ると体重は何kg減る？</h2>
      <p>
        <strong>約1kgです。</strong>厚生労働省の「健康づくりのための運動指針2006」は「腹囲の1cm減少は、約1kgの体重（大部分が脂肪）の減少に相当」とし、保健指導の教材（学習教材C-7）も「腹囲1cmを減らす（＝体重1kgを減らす）のに、約7,000kcalが必要」としています。逆に言えば、体重を1kg落とすと腹囲は約1cm減る、という目安です。
      </p>
      <table>
        <thead>
          <tr>
            <th>腹囲の減少</th>
            <th>体重の減少の目安</th>
            <th>必要なエネルギー</th>
          </tr>
        </thead>
        <tbody>
          {cms.map((c) => (
            <tr key={`kg-${c}`}>
              <td>{c}cm</td>
              <td>約{c}kg</td>
              <td>約{(c * 7000).toLocaleString('ja-JP')}kcal</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        どちらも腹囲の基準（女性90cm以上）を超える方を対象にした資料の目安で、減り方には個人差があります（2026年11月28日に原文を確認）。
      </p>

      <h2>厚生労働省の資料に示されている内容</h2>
      <ul>
        <li><strong>腹囲1cm＝体重約1kg＝約7,000kcal</strong>：保健指導の教材（学習教材C-7）は、腹囲1cmを減らすには体重1kgの減量、すなわち約7,000kcalが必要としています。</li>
        <li><strong>1か月1cm程度</strong>：減らせる腹囲は1か月で1cm程度とし、「確実にじっくりコース」は1か月1cm、「急いでがんばるコース」は1か月2cmで計画を立てる形になっています。</li>
        <li><strong>運動と食事の併用</strong>：腹囲の減少には、身体活動による消費の増加と食事の摂取量の減少の両方が不可欠としています。2006年の運動指針（エクササイズガイド2006）も、運動のみより食事の改善と合わせたほうが、内臓脂肪の減少量も大きくなるとしています。</li>
        <li><strong>必要な運動量の目安</strong>：同指針は、内臓脂肪を確実に減らすには週10エクササイズ程度以上の運動量が必要と考えられるとし、30分の速歩を週5回行う量に相当するとしています。</li>
      </ul>

      <h2>減らしたい腹囲ごとの期間と1日の量（当サイト計算）</h2>
      <p>
        教材の目安（1cm＝約7,000kcal、1か月＝30日）で計算しました。速歩の時間は、ガイド2023のメッツ表の「やや速歩（93m/分）4.3メッツ」と女性30〜49歳の参照体重（{W}kg）から、安静時の1メッツ分を除いて計算しています。
      </p>
      <table>
        <thead>
          <tr>
            <th>減らしたい腹囲</th>
            <th>じっくり（1cm/月）</th>
            <th>急ぐ（2cm/月）</th>
            <th>1日の量（じっくり）</th>
            <th>すべて速歩で消費する場合</th>
          </tr>
        </thead>
        <tbody>
          {cms.map((c) => (
            <tr key={c}>
              <td>{c}cm</td>
              <td>{c}か月</td>
              <td>{(c / 2).toFixed(1)}か月</td>
              <td>約{perDay(c, c)}kcal</td>
              <td>1日約{walkMin(perDay(c, c))}分</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        「急ぐ」場合の1日の量は約{perDay(2, 1)}kcalで、速歩だけなら1日約{walkMin(perDay(2, 1))}分になります。教材の例でも、1日の量を運動で減らす分と食事で減らす分に分けて書き込む形になっています。たとえば1日240kcalを、速歩30分（約{Math.round((4.3 - 1) * W * 0.5)}kcal）と食事で残り約{240 - Math.round((4.3 - 1) * W * 0.5)}kcalに分けることができます。
      </p>
      <div className="callout">
        <p>
          この教材は、腹囲が女性90cm以上の方を対象にした特定保健指導向けのものです。腹囲が基準未満の方にも計算の考え方は使えますが、減り方には個人差があります。持病がある方や妊娠中・授乳中の方は、医師にご相談ください。
        </p>
      </div>

      <h2>お腹まわりの筋トレについて</h2>
      <p>
        ガイド2023は、筋力トレーニングを特定の部位に偏らせるのではなく、胸・背中・腹・臀部・下肢などの大きな筋群に負荷がかかる種目を全身まんべんなく行うよう勧めています。腹筋の種目だけでお腹の脂肪が減るという記載は、当サイトが確認した資料にはありません。全身の筋トレの消費量は<a href="/articles/kintore-yaseru/">筋トレで痩せる？</a>、運動の種類ごとの違いは<a href="/articles/yusanso-musanso/">有酸素運動と無酸素運動の違い</a>で計算しています。
      </p>
      <p>
        くびれなど見た目の変化を目的にトレーニングを受けたい方は、<a href="/articles/bodymake/">ボディメイクに強いジムの選び方</a>もあわせてご覧ください。
      </p>

      <h2>出典</h2>
      <ul>
        <li><a href="https://www.mhlw.go.jp/bunya/kenkou/seikatsu/pdf/03-c-07.pdf" target="_blank" rel="noopener noreferrer">厚生労働省 標準的な健診・保健指導プログラム 学習教材C-7「無理なく内臓脂肪を減らすために」</a></li>
        <li><a href="https://www.mhlw.go.jp/shingi/2006/07/dl/s0725-9f-7.pdf" target="_blank" rel="noopener noreferrer">厚生労働省「健康づくりのための運動指針2006」【参考】内臓脂肪減少のための身体活動量</a>（2006年の資料）</li>
        <li><a href="https://www.mhlw.go.jp/content/001194020.pdf" target="_blank" rel="noopener noreferrer">厚生労働省「健康づくりのための身体活動・運動ガイド2023」</a>（筋力トレーニング・メッツ表・INFORMATION 8）</li>
        <li><a href="https://kennet.mhlw.go.jp/information/information/food/e-07-002.html" target="_blank" rel="noopener noreferrer">e-ヘルスネット「加齢とエネルギー代謝」</a>（参照体重）</li>
      </ul>
      <p>いずれも2026年11月20日に確認しました。</p>
    </ArticleShell>
  )
}
