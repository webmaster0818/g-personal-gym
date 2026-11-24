import { pageUrlMeta } from '@/lib/seo'
import type { Metadata } from 'next'
import { ArticleShell } from '@/components/ArticleShell'

// 出典（2026年11月20日確認）
// - 農林水産省「『食事バランスガイド』の適量と料理区分」 https://www.maff.go.jp/j/syokuiku/kenzensyokuseikatsu/about_b_guide.html
//   5区分と1つ（SV）の定義（主食＝炭水化物約40g・副菜＝主材料約70g・主菜＝たんぱく質約6g・牛乳乳製品＝カルシウム約100mg・果物＝約100g）、菓子・嗜好飲料1日200kcal程度
// - 農林水産省「食事バランスガイドの変更点」（食事摂取基準2010年版を踏まえた変更） https://www.maff.go.jp/j/syokuiku/kenzensyokuseikatsu/pdf/bg_kaitei.pdf
//   図2：身体活動量の低い12〜69歳女性＝1,400〜2,000kcal（主食4〜5・副菜5〜6・主菜3〜4・牛乳乳製品2・果物2）、
//        身体活動量ふつう以上の12〜69歳女性＝2,200±200kcal（主食5〜7・副菜5〜6・主菜3〜5・牛乳乳製品2・果物2）
//   図1注：肥満（成人でBMI≧25）の場合は、体重変化を見ながら「摂取の目安」のランクを1つ下げることを考慮
// - 農林水産省「適量チェックチャート」 https://www.maff.go.jp/j/syokuiku/kenzensyokuseikatsu/pdf/check_chart.pdf
// - 厚生労働省「健康づくりのための身体活動・運動ガイド2023」INFORMATION 8（食事の質・食べ方のコントロールの例） https://www.mhlw.go.jp/content/001194020.pdf

export const metadata: Metadata = {
  title: 'ダイエット中の食べ物の選び方｜食事バランスガイドの女性の1日量を、グラムに換算',
  description:
    'ダイエット中に何をどれだけ食べるかは、農林水産省・厚生労働省の「食事バランスガイド」が目安になります。活動量の低い女性は1日1,400〜2,000kcalで主食4〜5つ・主菜3〜4つなどが目安です。主食の炭水化物・主菜のたんぱく質・野菜の量をグラムに換算し、減らしたいときの調整方法を整理しました。',
  ...pageUrlMeta('/articles/diet-tabemono/'),
}

type Tier = { label: string; kcal: string; staple: [number, number]; side: [number, number]; main: [number, number]; milk: string; fruit: string }
const tiers: Tier[] = [
  { label: '身体活動量が低い（1日のほとんどを座って過ごす）12〜69歳女性', kcal: '1,400〜2,000kcal', staple: [4, 5], side: [5, 6], main: [3, 4], milk: '2', fruit: '2' },
  { label: '身体活動量がふつう以上の12〜69歳女性', kcal: '2,200±200kcal', staple: [5, 7], side: [5, 6], main: [3, 5], milk: '2', fruit: '2' },
]
const range = ([a, b]: [number, number], unit: number) => `${a * unit}〜${b * unit}`

const faqs = [
  {
    question: 'ダイエット中は何を食べればよいですか？',
    answer:
      '農林水産省・厚生労働省の「食事バランスガイド」は、毎日の食事を主食・副菜・主菜・牛乳乳製品・果物の5つに分け、それぞれの1日の目安量を「つ（SV）」で示しています。特定の食べ物に偏らず、5つの区分をそろえたうえで量を調整することが基本です。',
  },
  {
    question: '女性は1日にどのくらい食べればよいですか？',
    answer:
      '食事バランスガイドでは、身体活動量が低い12〜69歳の女性は1日1,400〜2,000kcal、ふつう以上の女性は2,200±200kcalが目安です。年齢や活動量の詳しい目安は、ダイエット中の摂取カロリーの目安のページで整理しています。',
  },
  {
    question: '体重を減らしたい場合は、どこを減らせばよいですか？',
    answer:
      '食事バランスガイドの変更点の資料では、成人でBMIが25以上の場合、体重の変化を見ながら摂取の目安のランクを1つ下げることを考慮するとしています。厚生労働省のガイド2023では、食べる量・料理の組み合わせ・調理方法・間食やアルコールのとりかたなどを変える方法が例として挙げられています。',
  },
  {
    question: 'お菓子は食べてもよいですか？',
    answer:
      '食事バランスガイドでは、菓子・嗜好飲料は「楽しく適度に」とされ、1日200kcal程度が目安です。せんべい3〜4枚、ショートケーキ小1個、ビール缶1本半（500ml）などが200kcalの目安として示されています。',
  },
]

const related = [
  { href: '/articles/diet-calorie/', label: 'ダイエット中の摂取カロリーの目安' },
  { href: '/articles/toushitsu-seigen/', label: '糖質制限ダイエットの公的な目安' },
  { href: '/articles/kintore-yaseru/', label: '筋トレで痩せる？体脂肪1kgまでの週数' },
  { href: '/articles/diet-tsuzukanai/', label: 'ダイエットが続かないときの考え方' },
  { href: '/articles/diet/', label: 'ダイエット目的のジムの選び方' },
  { href: '/articles/jinko-kanmiryo/', label: '人工甘味料はダイエットに効果がある？' },
]

export default function Page() {
  return (
    <ArticleShell
      eyebrow="Diet and Food"
      title="ダイエット中の食べ物の選び方｜食事バランスガイドの1日量をグラムで"
      updated="2026年11月20日"
      lead="ダイエット中の食べ物は、特定の食品を抜くよりも、主食・副菜・主菜・牛乳乳製品・果物の5つをそろえたうえで量を調整するのが基本です。農林水産省・厚生労働省の「食事バランスガイド」では、身体活動量が低い女性（12〜69歳）の1日の目安は1,400〜2,000kcalで、主食4〜5つ・副菜5〜6つ・主菜3〜4つなどとされています。このページでは、その目安をグラムに換算し、体重を減らしたいときの調整方法をまとめています。"
      breadcrumb="ダイエット中の食べ物の選び方"
      faqs={faqs}
      related={related}
    >
      <h2>女性の1日の目安（食事バランスガイド）</h2>
      <table>
        <thead>
          <tr>
            <th>対象</th>
            <th>エネルギー</th>
            <th>主食</th>
            <th>副菜</th>
            <th>主菜</th>
            <th>牛乳・乳製品</th>
            <th>果物</th>
          </tr>
        </thead>
        <tbody>
          {tiers.map((t) => (
            <tr key={t.label}>
              <td>{t.label}</td>
              <td>{t.kcal}</td>
              <td>{t.staple[0]}〜{t.staple[1]}つ</td>
              <td>{t.side[0]}〜{t.side[1]}つ</td>
              <td>{t.main[0]}〜{t.main[1]}つ</td>
              <td>{t.milk}つ</td>
              <td>{t.fruit}つ</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        出典：農林水産省「食事バランスガイドの変更点」図2・「適量チェックチャート」（2026年11月20日確認）。70歳以上の女性は、身体活動量にかかわらず1,400〜2,000kcalの区分です。
      </p>

      <h2>「つ（SV）」をグラムに換算する（当サイト計算）</h2>
      <p>食事バランスガイドの1つ（SV）の定義を使って、上の目安を1日のグラム数に直しました。</p>
      <table>
        <thead>
          <tr>
            <th>区分</th>
            <th>1つ（SV）の定義</th>
            <th>活動量が低い女性の1日量</th>
            <th>ふつう以上の女性の1日量</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>主食（ごはん・パン・麺）</td>
            <td>炭水化物 約40g</td>
            <td>炭水化物 約{range(tiers[0].staple, 40)}g</td>
            <td>炭水化物 約{range(tiers[1].staple, 40)}g</td>
          </tr>
          <tr>
            <td>副菜（野菜・いも・きのこ・海藻）</td>
            <td>主材料 約70g</td>
            <td>約{range(tiers[0].side, 70)}g</td>
            <td>約{range(tiers[1].side, 70)}g</td>
          </tr>
          <tr>
            <td>主菜（肉・魚・卵・大豆製品）</td>
            <td>たんぱく質 約6g</td>
            <td>たんぱく質 約{range(tiers[0].main, 6)}g</td>
            <td>たんぱく質 約{range(tiers[1].main, 6)}g</td>
          </tr>
          <tr>
            <td>牛乳・乳製品</td>
            <td>カルシウム 約100mg</td>
            <td>カルシウム 約200mg</td>
            <td>カルシウム 約200mg</td>
          </tr>
          <tr>
            <td>果物</td>
            <td>主材料 約100g</td>
            <td>約200g</td>
            <td>約200g</td>
          </tr>
        </tbody>
      </table>
      <p>
        いずれも「主材料に由来する量」です。主菜以外の料理や主食にもたんぱく質・炭水化物は含まれるため、1日の総摂取量はこれより多くなります。炭水化物の総量の目安は<a href="/articles/toushitsu-seigen/">糖質制限ダイエットの公的な目安</a>で整理しています。
      </p>

      <h2>体重を減らしたいときの調整方法</h2>
      <ul>
        <li><strong>ランクを1つ下げる</strong>：食事バランスガイドの変更点の資料では、成人でBMIが25以上の場合、体重の変化を見ながら摂取の目安のランクを1つ下げることを考慮するとしています。BMIは「体重（kg）÷身長（m）÷身長（m）」で計算します。</li>
        <li><strong>菓子・嗜好飲料は1日200kcal程度まで</strong>：せんべい3〜4枚、ショートケーキ小1個、ビール缶1本半（500ml）、ワインコップ1杯（260ml）が200kcalの目安として示されています。</li>
        <li><strong>食べ方を変える</strong>：厚生労働省のガイド2023は、食べる量・料理の組み合わせ・調理方法・食材・味付け・間食やアルコールのとりかた・食事の頻度やタイミングを変えることを、具体的な食行動の例として挙げています。</li>
      </ul>
      <div className="callout">
        <p>
          食事バランスガイドでは、主食は主に炭水化物、副菜は主にビタミン・ミネラル・食物繊維、主菜は主にたんぱく質の供給源と位置づけられています。特定の区分を抜くのではなく、5つの区分それぞれの量の目安の範囲で調整することをおすすめします。
        </p>
      </div>
      <p>
        1日に減らす量の計算は<a href="/articles/diet-calorie/">ダイエット中の摂取カロリーの目安</a>、運動との組み合わせは<a href="/articles/kintore-yaseru/">筋トレで痩せる？</a>で紹介しています。食事の相談を受けられるジムを探す方は<a href="/guide/">女性専用パーソナルジムの選び方</a>をご覧ください。なお、糖尿病・高血圧などで医師や管理栄養士から食事指導を受けている方は、その指導に従ってください。
      </p>

      <h2>出典</h2>
      <ul>
        <li><a href="https://www.maff.go.jp/j/syokuiku/kenzensyokuseikatsu/about_b_guide.html" target="_blank" rel="noopener noreferrer">農林水産省「『食事バランスガイド』の適量と料理区分」</a></li>
        <li><a href="https://www.maff.go.jp/j/syokuiku/kenzensyokuseikatsu/pdf/bg_kaitei.pdf" target="_blank" rel="noopener noreferrer">農林水産省「食事バランスガイドの変更点」</a>（図1・図2）</li>
        <li><a href="https://www.maff.go.jp/j/syokuiku/kenzensyokuseikatsu/pdf/check_chart.pdf" target="_blank" rel="noopener noreferrer">農林水産省「適量チェックチャート」</a></li>
        <li><a href="https://www.mhlw.go.jp/content/001194020.pdf" target="_blank" rel="noopener noreferrer">厚生労働省「健康づくりのための身体活動・運動ガイド2023」</a>（INFORMATION 8）</li>
      </ul>
      <p>いずれも2026年11月20日に確認しました。</p>
    </ArticleShell>
  )
}
