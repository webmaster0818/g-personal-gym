import { pageUrlMeta } from '@/lib/seo'
import type { Metadata } from 'next'
import { ArticleShell } from '@/components/ArticleShell'

// 出典（2026年11月20日確認）
// - 厚生労働省「健康づくりのための身体活動・運動ガイド2023」 https://www.mhlw.go.jp/content/001194020.pdf
//   INFORMATION 8：体脂肪1kg≒7,000kcal、1日に減らすエネルギー量＝kg×7,000÷か月÷30日／メッツ表：やや速歩（93m/分）4.3メッツ・普通歩行3.0メッツ
//   エネルギー消費量（kcal）＝メッツ×時間（h）×体重（kg）
// - 厚生労働省 標準的な健診・保健指導プログラム 学習教材 C-7「無理なく内臓脂肪を減らすために」 https://www.mhlw.go.jp/bunya/kenkou/seikatsu/pdf/03-c-07.pdf
//   「確実にじっくりコース」1cm/月・「急いでがんばるコース」2cm/月、腹囲1cm減＝体重1kg減＝約7,000kcal、減らせる腹囲は1か月で1cm程度
// - 厚生労働省「日本人の食事摂取基準（2020年版）」 https://www.mhlw.go.jp/content/10904750/000586553.pdf
//   参考表2 推定エネルギー必要量（女性・身体活動レベルふつう 18〜29歳2,000/30〜49歳2,050/50〜64歳1,950kcal）
//   3-3-3 特定保健指導終了者3,480人：6か月で3%以上の体重減少で全健診項目が改善／3-3-4 減量に伴いエネルギー消費量も減少し、体重減少は緩やかになる
// - 神奈川県「ダイエットで筋肉まで落とすと、太りやすくなる」 https://www.pref.kanagawa.jp/docs/mv4/kenken/contents12.html（2026年11月26日確認・県ページ更新日2025年11月25日）
//   極端なダイエットで脂肪だけでなく筋肉・骨・体内の水分まで減る危険／筋肉量が減ると代謝が落ちリバウンドを招く
// - ガイド2023 INFORMATION 8・学習教材C-7 は2026年11月26日に再確認（7,000kcal・1cm/月・2cm/月）
// - 参照体重 女性30〜49歳 53.1kg（食事摂取基準2015年版・e-ヘルスネット「加齢とエネルギー代謝」） https://kennet.mhlw.go.jp/information/information/food/e-07-002.html

export const metadata: Metadata = {
  title: '1ヶ月で5キロ痩せるには1日何kcal減らす？厚労省の式で計算した必要量と、現実的な期間の目安',
  description:
    '1ヶ月で5kg痩せるには、体脂肪1kg＝約7,000kcal（厚労省ガイド2023）で計算すると1日約1,167kcalを減らす必要があります。女性の推定エネルギー必要量の半分を超える量です。厚労省の保健指導教材の目安（1か月1〜2kg）と期間別の計算表を掲載します。',
  ...pageUrlMeta('/articles/1kagetsu-5kg/'),
}

const KG = 5
const perDay = (kg: number, m: number) => Math.round((kg * 7000) / m / 30)
const fmt = (n: number) => n.toLocaleString()
const target = perDay(KG, 1)
const months = [1, 2, 3, 5, 6]
const eer = [
  { age: '18〜29歳', mid: 2000 },
  { age: '30〜49歳', mid: 2050 },
  { age: '50〜64歳', mid: 1950 },
]
const W = 53.1
// 安静時（1メッツ）分を除いた正味の消費量（kcal/時）
const netPerHour = (mets: number) => (mets - 1) * W
const walkHours = (kcal: number, mets: number) => kcal / netPerHour(mets)

const faqs = [
  {
    question: '1ヶ月で5キロ痩せることはできますか？',
    answer: `体脂肪1kg＝約7,000kcalで計算すると、5kgは約35,000kcalで、1か月（30日）では1日約${fmt(target)}kcalを減らす計算になります。30〜49歳の女性で身体活動レベル「ふつう」の推定エネルギー必要量（2,050kcal）の約${Math.round((target / 2050) * 100)}%に当たり、食事だけで減らすと1日の摂取量は約${fmt(2050 - target)}kcalになります。厚生労働省の保健指導の教材では、減らす目安を1か月で腹囲1cm（体重約1kg）程度、急ぐ場合でも2cmとしています。`,
  },
  {
    question: '5kgを無理なく減らすには何か月かければよいですか？',
    answer: `保健指導の教材の目安（1か月に約1kg）に当てはめると5か月です。この場合、1日に減らす量は約${fmt(perDay(KG, 5))}kcalです。「急いでがんばるコース」の1か月2kgでも、5kgには2.5か月かかります。`,
  },
  {
    question: '短期間で体重が大きく落ちた場合、脂肪がそれだけ減ったと考えてよいですか？',
    answer:
      '7,000kcal＝1kgは体脂肪で計算した目安で、短期間の体重の増減には体脂肪以外の要因も含まれます。また、日本人の食事摂取基準（2020年版）は、体重が減るとエネルギー消費量も減るため、体重の減り方は徐々に緩やかになるとしています。一定期間ごとに体重を測り、減らす量を設定し直すことが勧められています。',
  },
  {
    question: '少しだけ減らしても意味はありますか？',
    answer:
      '日本人の食事摂取基準（2020年版）では、特定保健指導を終えた3,480人を対象にした検討で、指導後6か月で3%以上の体重減少があった人は、特定健診のすべての健診項目に改善が見られたと紹介しています。体重60kgの人の3%は1.8kgです。',
  },
]

const related = [
  { href: '/articles/diet-calorie/', label: 'ダイエット中の摂取カロリーの目安' },
  { href: '/articles/taiju-heranai/', label: '体重が減らない原因（食事摂取基準の理論計算）' },
  { href: '/articles/onaka-shibou/', label: 'お腹の脂肪を落とす方法（腹囲1cm＝約7,000kcal）' },
  { href: '/articles/kintore-yaseru/', label: '筋トレで痩せる？体脂肪1kgまでの週数' },
  { href: '/articles/kouka-itsukara/', label: 'パーソナルジムの効果はいつから？' },
  { href: '/articles/diet/', label: 'ダイエット目的のジムの選び方' },
]

export default function Page() {
  return (
    <ArticleShell
      eyebrow="5kg in a Month"
      title="1ヶ月で5キロ痩せるには｜1日に減らすエネルギー量と現実的な期間"
      updated="2026年11月26日"
      lead={`1ヶ月で5kg痩せるには、厚生労働省のガイド2023の目安「体脂肪1kg＝約7,000kcal」で計算すると、5kg×7,000kcal÷30日で1日約${fmt(target)}kcalを減らす必要があります。30〜49歳の女性の推定エネルギー必要量（身体活動レベル「ふつう」で2,050kcal）の半分を超える量です。厚生労働省の保健指導の教材は、減らす目安を1か月に腹囲1cm（体重約1kg）程度、急ぐ場合でも2cmとしており、5kgなら2.5〜5か月が一つの目安になります。`}
      breadcrumb="1ヶ月で5キロ痩せるには"
      faqs={faqs}
      related={related}
    >
      <h2>結論：1ヶ月で5kgは可能か（早見表）</h2>
      <p>
        計算上は、1日約{fmt(target)}kcalのエネルギー不足を30日続ければ届く量です。ただし、食事だけなら女性の1日の必要量の半分以下、運動だけならやや速歩で毎日約{walkHours(target, 4.3).toFixed(1)}時間に当たり、厚生労働省の保健指導の教材が示す目安（1か月1〜2kg）の2.5〜5倍のペースです。教材の目安に合わせると、5kgは2.5〜5か月が一つの目安です。
      </p>
      <table>
        <thead>
          <tr>
            <th>項目</th>
            <th>値</th>
            <th>根拠</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>5kg分のエネルギー</td>
            <td>約{fmt(KG * 7000)}kcal</td>
            <td>体脂肪1kg＝約7,000kcal（厚労省ガイド2023）×5kg（当サイト計算）</td>
          </tr>
          <tr>
            <td>1ヶ月（30日）で減らす場合の1日あたり</td>
            <td>約{fmt(target)}kcal</td>
            <td>35,000kcal÷30日（当サイト計算）</td>
          </tr>
          <tr>
            <td>食事だけで減らす場合の摂取量</td>
            <td>約{fmt(2050 - target)}kcal/日</td>
            <td>女性30〜49歳・身体活動レベル「ふつう」の推定エネルギー必要量2,050kcalから差し引き（当サイト計算）</td>
          </tr>
          <tr>
            <td>運動だけで減らす場合（やや速歩）</td>
            <td>毎日約{walkHours(target, 4.3).toFixed(1)}時間</td>
            <td>メッツ表4.3・体重{W}kg・安静時分を除いて計算（当サイト計算）</td>
          </tr>
          <tr>
            <td>厚労省の保健指導の教材の目安</td>
            <td>1か月に体重約1kg（じっくり）〜2kg（急ぐ場合）</td>
            <td>学習教材C-7（腹囲1cm＝体重1kg＝約7,000kcal）</td>
          </tr>
          <tr>
            <td>目安どおりに5kgを減らす期間</td>
            <td>2.5〜5か月</td>
            <td>5kg÷1か月2kg〜1kg（当サイト計算）</td>
          </tr>
          <tr>
            <td>1kg＝7,200kcalで計算した場合</td>
            <td>1日約{fmt(Math.round((KG * 7200) / 30))}kcal</td>
            <td>7,200kcalとする記事もあるため併記（当サイト計算）</td>
          </tr>
        </tbody>
      </table>
      <p>
        パーソナルジムで1か月トレーニングを受ける場合の料金は、<a href="/cost/#types">料金相場ページ</a>に掲載の公式料金で、月額制は月4回17,600円（エクササイズコーチ）から、2ヶ月集中コースは179,685円（ビーコンセプト）からです。体重の減り方には個人差があり、ジムに通っても1ヶ月で5kgが保証されるわけではありません。
      </p>

      <h2>5kgを減らすのに必要な量と、期間別の1日あたり（当サイト計算）</h2>
      <p>ガイド2023（INFORMATION 8）の式「減らしたい体重（kg）×7,000kcal÷期間（か月）÷30日」で計算しました。</p>
      <table>
        <thead>
          <tr>
            <th>期間</th>
            <th>1日に減らす量</th>
            <th>保健指導の教材の目安との比較</th>
          </tr>
        </thead>
        <tbody>
          {months.map((m) => (
            <tr key={m}>
              <td>{m}か月</td>
              <td>約{fmt(perDay(KG, m))}kcal</td>
              <td>1か月あたり{(KG / m).toFixed(1)}kg（目安1〜2kgの{(KG / m / 2).toFixed(1)}〜{(KG / m).toFixed(1)}倍）</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        保健指導の教材（厚生労働省 学習教材C-7）は、腹囲を「確実にじっくりコース」で1か月1cm、「急いでがんばるコース」で1か月2cm減らす計画を立てるよう示し、腹囲1cmの減少を体重1kg（約7,000kcal）の減少として扱っています。1か月で5kgは、急ぐ場合の目安の2.5倍に当たります。
      </p>

      <h2>食事だけで減らした場合の摂取量（当サイト計算）</h2>
      <p>日本人の食事摂取基準（2020年版）の推定エネルギー必要量（女性・身体活動レベル「ふつう」）から、1日{fmt(target)}kcalを差し引きました。</p>
      <table>
        <thead>
          <tr>
            <th>年齢</th>
            <th>推定エネルギー必要量</th>
            <th>1ヶ月5kgの場合の摂取量</th>
            <th>5か月かける場合の摂取量</th>
          </tr>
        </thead>
        <tbody>
          {eer.map((r) => (
            <tr key={r.age}>
              <td>{r.age}</td>
              <td>{fmt(r.mid)}kcal</td>
              <td>約{fmt(r.mid - target)}kcal（{Math.round(((r.mid - target) / r.mid) * 100)}%）</td>
              <td>約{fmt(r.mid - perDay(KG, 5))}kcal（{Math.round(((r.mid - perDay(KG, 5)) / r.mid) * 100)}%）</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="callout">
        <p>
          1ヶ月で5kgを食事だけで達成しようとすると、ふだん必要な量の半分以下で1か月過ごす計算になります。推定エネルギー必要量は集団の目安で、個人の必要量とは一致しません。極端な食事制限を考えている場合や、持病がある方・妊娠中・授乳中の方は、医師にご相談ください。
        </p>
      </div>

      <h2>運動だけで減らした場合の時間（当サイト計算）</h2>
      <p>
        ガイド2023のメッツ表と、女性30〜49歳の参照体重（{W}kg）を使い、安静時の1メッツ分を除いた正味の消費量で計算しました（メッツ×時間×体重）。
      </p>
      <table>
        <thead>
          <tr>
            <th>運動（メッツ）</th>
            <th>1時間の正味の消費</th>
            <th>1日{fmt(target)}kcalに必要な時間</th>
            <th>1日{fmt(perDay(KG, 5))}kcalに必要な時間</th>
          </tr>
        </thead>
        <tbody>
          {[
            { name: '普通歩行（67m/分）', mets: 3.0 },
            { name: 'やや速歩（93m/分）', mets: 4.3 },
            { name: 'かなり速歩（107m/分）', mets: 5.0 },
          ].map((r) => (
            <tr key={r.name}>
              <td>{r.name}（{r.mets.toFixed(1)}）</td>
              <td>約{Math.round(netPerHour(r.mets))}kcal</td>
              <td>約{walkHours(target, r.mets).toFixed(1)}時間</td>
              <td>約{walkHours(perDay(KG, 5), r.mets).toFixed(1)}時間</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        運動だけで1ヶ月5kgを目指すと、やや速歩でも毎日{walkHours(target, 4.3).toFixed(1)}時間程度が必要です。ガイド2023が成人に勧める運動量（歩行またはそれと同等以上の身体活動を1日60分以上）を大きく超えるため、食事と運動に分けて、期間を長めに設定する方法が現実的です。
      </p>

      <h2>極端な食事制限で起こること</h2>
      <p>
        神奈川県の健康づくりのページ（2026年11月26日確認）は、食事を抜くなどの極端なダイエットでは、脂肪だけでなく筋肉や骨、体内の水分まで減ってしまう危険があり、筋肉量が減ると代謝が落ちてリバウンドを招くとしています。同ページは、自分に必要なエネルギー量の目安を知り、必要な栄養素はとったうえで、とり過ぎていた分を減らし、運動で消費することを勧めています。
      </p>
      <p>
        短期間で体重が大きく落ちても、その分の体脂肪が減ったとは限りません。1ヶ月で5kgという数字にこだわるより、上の表の1日あたりの量を見て、続けられる期間を選ぶ方法が現実的です。
      </p>

      <h2>期間を決めるときの考え方</h2>
      <ul>
        <li><strong>体重が減るほど減り方は緩やかになる</strong>：日本人の食事摂取基準（2020年版）は、体重の減少に伴ってエネルギー消費量も減るため、計画どおりに減り続けるわけではないとしています。詳しくは<a href="/articles/taiju-heranai/">体重が減らない原因</a>で計算しています。</li>
        <li><strong>小さな減量にも意味がある</strong>：特定保健指導を終えた3,480人の検討では、6か月で3%以上の体重減少があった人に、すべての健診項目の改善が見られたと紹介されています。</li>
        <li><strong>測り直して設定し直す</strong>：同基準は、一定期間ごとに体重を測り、減らすエネルギー量を設定し直すことを勧めています。</li>
      </ul>
      <p>
        食事指導とトレーニングを組み合わせて計画を立てたい方は、<a href="/articles/diet/">ダイエット目的のパーソナルジムの選び方</a>や<a href="/articles/kouka-itsukara/">効果が出るまでの期間の目安</a>もあわせてご覧ください。
      </p>

      <h2>出典</h2>
      <ul>
        <li><a href="https://www.mhlw.go.jp/content/001194020.pdf" target="_blank" rel="noopener noreferrer">厚生労働省「健康づくりのための身体活動・運動ガイド2023」</a>（INFORMATION 8・生活活動のメッツ表）</li>
        <li><a href="https://www.mhlw.go.jp/bunya/kenkou/seikatsu/pdf/03-c-07.pdf" target="_blank" rel="noopener noreferrer">厚生労働省 標準的な健診・保健指導プログラム 学習教材C-7「無理なく内臓脂肪を減らすために」</a></li>
        <li><a href="https://www.mhlw.go.jp/content/10904750/000586553.pdf" target="_blank" rel="noopener noreferrer">厚生労働省「日本人の食事摂取基準（2020年版）」策定検討会報告書</a>（参考表2・3-3-3 減量や肥満の是正への考え方・3-3-4 エネルギー摂取制限と体重減少との関係）</li>
        <li><a href="https://kennet.mhlw.go.jp/information/information/food/e-07-002.html" target="_blank" rel="noopener noreferrer">e-ヘルスネット「加齢とエネルギー代謝」</a>（参照体重）</li>
        <li><a href="https://www.pref.kanagawa.jp/docs/mv4/kenken/contents12.html" target="_blank" rel="noopener noreferrer">神奈川県「ダイエットで筋肉まで落とすと、太りやすくなる」</a></li>
      </ul>
      <p>厚生労働省ガイド2023・学習教材C-7・神奈川県のページは2026年11月26日に、そのほかは2026年11月20日に確認しました。</p>
    </ArticleShell>
  )
}
