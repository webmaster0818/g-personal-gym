import { pageUrlMeta } from '@/lib/seo'
import type { Metadata } from 'next'
import { ArticleShell } from '@/components/ArticleShell'

// 出典（2026年11月25日確認）
// - 厚生労働省「健康づくりのための身体活動・運動ガイド2023」 https://www.mhlw.go.jp/content/001194020.pdf
//   推奨事項（成人版）：歩行又はそれと同等以上の強度の身体活動を1日60分以上（1日約8,000歩以上・週23メッツ・時以上）
//   60分の歩行は約6,000歩、3メッツ未満の生活活動は1日約2,000歩に相当 → 合計約8,000歩
//   エネルギー消費量(kcal)＝メッツ×時間(h)×体重(kg)（例：歩行3メッツ×0.5h×50kg＝75kcal）
//   健康日本21（第三次）目標：1日の歩数 20〜64歳女性 現状6,685歩（令和元年）→目標8,000歩（令和14年度）
//   生活活動のメッツ表（p.39）：ゆっくりした歩行 53m/分 2.8／普通歩行 67m/分 3.0／ほどほどの速さ 75〜85m/分 3.5／やや速歩 93m/分 4.3／かなり速歩 107m/分 5.0
//   INFORMATION 8：体脂肪1kgを減らすために必要なエネルギー量は約7,000kcal。肥満の方は身体活動による消費と食事の摂取を調整して計画的に減量
//   1日あたり10分の身体活動を増やすことで、生活習慣病発症や死亡リスクが約3%低下すると推測（推奨事項 成人版 科学的根拠）

export const metadata: Metadata = {
  title: 'ウォーキングダイエットの目安｜歩く速さ別の消費カロリーと、体脂肪1kgまでの日数を厚労省ガイドで計算',
  description:
    '厚生労働省のガイド2023のメッツ表と計算式で、歩く速さ（分速53〜107m）別の30分の消費カロリーを体重50〜60kgで計算しました。安静時の分を除いた増加分から、体脂肪1kg（約7,000kcal）に届く日数と、女性の歩数の目標8,000歩との差も示しています。',
  ...pageUrlMeta('/articles/walking-diet/'),
}

const speeds = [
  { name: 'ゆっくり歩く', pace: '分速53m', mets: 2.8 },
  { name: '普通歩行', pace: '分速67m', mets: 3.0 },
  { name: 'ほどほどの速さ', pace: '分速75〜85m', mets: 3.5 },
  { name: 'やや速歩', pace: '分速93m', mets: 4.3 },
  { name: 'かなり速歩', pace: '分速107m', mets: 5.0 },
]
const weights = [50, 55, 60]
const kcal = (mets: number, h: number, kg: number) => Math.round(mets * h * kg)
const net = (mets: number, h: number, kg: number) => Math.round((mets - 1) * h * kg)
const FAT = 7000
const KG = 55
const daysTo1kg = (mets: number, min: number) => Math.ceil(FAT / ((mets - 1) * (min / 60) * KG))

const NOW = 6685 // 20〜64歳女性の1日の歩数（令和元年）
const GOAL = 8000
const STEPS_PER_MIN = 6000 / 60 // 60分の歩行≒約6,000歩
const gapMin = Math.round((GOAL - NOW) / STEPS_PER_MIN)

const faqs = [
  {
    question: 'ウォーキングで痩せるには1日何分歩けばよいですか？',
    answer: `体重${KG}kgの人がやや速歩（分速93m・4.3メッツ）で毎日30分歩くと、安静時の分を除いて1日約${net(4.3, 0.5, KG)}kcalの増加になります（当サイト計算）。体脂肪1kg（約7,000kcal）に届くのは計算上 約${daysTo1kg(4.3, 30)}日です。食事を変えずに歩くだけでは時間がかかるため、厚生労働省のガイド2023も、減量時は身体活動による消費と食事の摂取の両方を調整することを求めています。`,
  },
  {
    question: '1日何歩歩けばよいですか？',
    answer: `ガイド2023は、成人に歩行またはそれと同等以上の身体活動を1日60分以上（1日約8,000歩以上に相当）行うことを推奨しています。健康日本21（第三次）の目標も、20〜64歳女性で1日${GOAL.toLocaleString()}歩です。令和元年の20〜64歳女性の平均は${NOW.toLocaleString()}歩で、差は${(GOAL - NOW).toLocaleString()}歩です。`,
  },
  {
    question: 'ゆっくり歩いても効果はありますか？',
    answer: 'ガイド2023の推奨事項は、強度が3メッツ以上の身体活動を対象にしています。メッツ表では、普通歩行（分速67m）が3.0メッツ、ゆっくりした歩行（分速53m）は2.8メッツです。消費量は速いほど多くなりますが、ガイドは1日10分の身体活動を増やすことで生活習慣病の発症や死亡のリスクが約3%低下すると推測されていることも紹介しており、まずは今より少しでも多く体を動かすことを勧めています。',
  },
  {
    question: '消費カロリーはどう計算しますか？',
    answer: `ガイド2023では、身体活動のエネルギー消費量を「メッツ×時間（h）×体重（kg）」で推定しています。体重${KG}kgの人がやや速歩（4.3メッツ）で30分歩くと、4.3×0.5×${KG}＝約${kcal(4.3, 0.5, KG)}kcalです。この値には、座っていても消費する安静時の分（1メッツ）が含まれます。`,
  },
]

const related = [
  { href: '/articles/yusanso-musanso/', label: '有酸素運動と無酸素運動の違い' },
  { href: '/articles/onaka-shibou/', label: 'お腹の脂肪を落とす方法' },
  { href: '/articles/diet-calorie/', label: 'ダイエット中の摂取カロリーの目安' },
  { href: '/articles/diet-tsuzukanai/', label: 'ダイエットが続かないときの考え方' },
  { href: '/articles/kintore-mainichi/', label: '筋トレは毎日やるべき？' },
]

export default function Page() {
  return (
    <ArticleShell
      eyebrow="Walking Diet"
      title="ウォーキングダイエットの目安｜速さ別の消費カロリーと日数"
      updated="2026年11月25日"
      lead={`ウォーキングで体脂肪を減らすなら、速さと時間をそろえて計算すると目安がつかめます。厚生労働省の「健康づくりのための身体活動・運動ガイド2023」のメッツ表と計算式で求めると、体重${KG}kgの人がやや速歩（分速93m）で毎日30分歩いた場合、安静時の分を除いた増加は1日約${net(4.3, 0.5, KG)}kcalで、体脂肪1kg（約7,000kcal）に届くのは約${daysTo1kg(4.3, 30)}日です。このページでは、歩く速さ・体重別の消費量と、歩数の目標との差を計算しました。`}
      breadcrumb="ウォーキングダイエットの目安"
      faqs={faqs}
      related={related}
    >
      <h2>ガイド2023が勧める歩く量</h2>
      <ul>
        <li><strong>1日60分以上・約8,000歩以上</strong>：成人には、歩行またはそれと同等以上の強度の身体活動を1日60分以上行うことが推奨されています（週23メッツ・時以上）。60分の歩行は約6,000歩、家事などの3メッツ未満の生活活動は1日約2,000歩に相当し、合計で約8,000歩とされています。</li>
        <li><strong>運動は週60分以上</strong>：これとは別に、息が弾み汗をかく程度の運動を週60分以上（週4メッツ・時以上）行うことが推奨されています。やや速歩（4.3メッツ）やかなり速歩（5.0メッツ）は、メッツ表の「運動」にも掲載されています。</li>
        <li><strong>減量は食事とあわせて</strong>：体脂肪1kgを減らすために必要なエネルギー量は約7,000kcalで、肥満の方は身体活動による消費と食事で摂取するエネルギー量を調整して、計画的に減量を図ることが必要とされています。</li>
      </ul>

      <h2>歩く速さ・体重別の30分の消費カロリー（当サイト計算）</h2>
      <p>
        ガイド2023の式（メッツ×時間×体重）で、30分歩いた場合の消費量を計算しました。メッツはガイド2023の生活活動のメッツ表の値です。
      </p>
      <table>
        <thead>
          <tr>
            <th>歩き方（速さ）</th>
            <th>メッツ</th>
            {weights.map((w) => (
              <th key={w}>{w}kg</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {speeds.map((s) => (
            <tr key={s.name}>
              <td>{s.name}（{s.pace}）</td>
              <td>{s.mets.toFixed(1)}</td>
              {weights.map((w) => (
                <td key={w}>約{kcal(s.mets, 0.5, w)}kcal</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        この値には、座っていても消費する安静時の分（1メッツ）が含まれます。歩いたことで増えた分だけを見るには、メッツから1を引いて計算します。
      </p>

      <h2>体脂肪1kg（約7,000kcal）に届く日数（体重{KG}kg・当サイト計算）</h2>
      <table>
        <thead>
          <tr>
            <th>歩き方（速さ）</th>
            <th>毎日30分の増加分</th>
            <th>毎日30分で届く日数</th>
            <th>毎日60分で届く日数</th>
          </tr>
        </thead>
        <tbody>
          {speeds.map((s) => (
            <tr key={s.name}>
              <td>{s.name}（{s.pace}）</td>
              <td>約{net(s.mets, 0.5, KG)}kcal</td>
              <td>約{daysTo1kg(s.mets, 30)}日</td>
              <td>約{daysTo1kg(s.mets, 60)}日</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="callout">
        <p>
          同じ30分でも、普通歩行（分速67m）とかなり速歩（分速107m）では、増加分に約{(net(5.0, 0.5, KG) / net(3.0, 0.5, KG)).toFixed(1)}倍の差があります。ただし、この日数は食事量が変わらない前提の理論計算です。体重の減り方は、体の水分や筋肉量の変化、食事量の変化によっても変わるため、目安としてご覧ください。
        </p>
      </div>

      <h2>女性の歩数の現状と目標の差（当サイト計算）</h2>
      <table>
        <thead>
          <tr>
            <th>項目</th>
            <th>20〜64歳女性</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>1日の歩数の平均（令和元年）</td><td>{NOW.toLocaleString()}歩</td></tr>
          <tr><td>健康日本21（第三次）の目標（令和14年度）</td><td>{GOAL.toLocaleString()}歩</td></tr>
          <tr><td>差</td><td>{(GOAL - NOW).toLocaleString()}歩</td></tr>
          <tr><td>差を歩行時間に換算（60分≒約6,000歩）</td><td>1日 約{gapMin}分</td></tr>
        </tbody>
      </table>
      <p>
        平均的な20〜64歳女性の場合、1日あと約{gapMin}分歩くと目標の歩数に届く計算です。ガイド2023は、1日10分の身体活動を増やすことで生活習慣病の発症や死亡のリスクが約3%低下すると推測されていることを紹介しています。まとまった時間がとれない日は、通勤や買い物で歩く時間を少しずつ足す方法もあります。続け方の考え方は<a href="/articles/diet-tsuzukanai/">ダイエットが続かないときの考え方</a>で整理しています。
      </p>

      <h2>ウォーキングで減量するときの進め方</h2>
      <ol>
        <li><strong>速さを1段階上げる</strong>：普通歩行からやや速歩に変えるだけで、同じ時間の増加分が増えます。息が弾む程度の速さが目安です。</li>
        <li><strong>食事の量もあわせて決める</strong>：歩くだけで体脂肪1kgに届くには時間がかかります。1日に減らす量の計算は<a href="/articles/diet-calorie/">ダイエット中の摂取カロリーの目安</a>をご覧ください。</li>
        <li><strong>筋トレを週2〜3日加える</strong>：ガイド2023は筋トレと有酸素性の身体活動の組み合わせを勧めています。頻度の考え方は<a href="/articles/kintore-mainichi/">筋トレは毎日やるべき？</a>にまとめています。</li>
      </ol>
      <p>
        持病がある方や、膝・腰に痛みがある方は、歩く量や速さをかかりつけの医師にご相談ください。食事と運動を一緒に見てもらいたい方は、<a href="/articles/diet/">ダイエット目的のパーソナルジムの選び方</a>もあわせてご覧ください。
      </p>

      <h2>出典</h2>
      <ul>
        <li><a href="https://www.mhlw.go.jp/content/001194020.pdf" target="_blank" rel="noopener noreferrer">厚生労働省「健康づくりのための身体活動・運動ガイド2023」</a>（推奨事項 成人版・健康日本21（第三次）身体活動・運動分野の目標項目・生活活動と運動のメッツ表・INFORMATION 8）</li>
      </ul>
      <p>2026年11月25日に確認しました。</p>
    </ArticleShell>
  )
}
