import { pageUrlMeta } from '@/lib/seo'
import type { Metadata } from 'next'
import { ArticleShell } from '@/components/ArticleShell'

// 出典（2026年11月19日確認）
// - 厚生労働省「健康づくりのための身体活動・運動ガイド2023」 https://www.mhlw.go.jp/content/001194020.pdf
//   p.17 特定の部位を重点的に鍛えるのではなく大きな筋群を全身まんべんなく／p.39-40 メッツ表（腕立て伏せ 3.8・8.0）
// - e-ヘルスネット「身体活動とエネルギー・栄養素」 体脂肪1kg≒7,000kcal https://kennet.mhlw.go.jp/information/information/exercise/s-00-012.html
// - e-ヘルスネット「加齢とエネルギー代謝」表1 女性30〜49歳の参照体重53.1kg https://kennet.mhlw.go.jp/information/information/food/e-07-002.html
// - 厚生労働省「私のアクティブプラン」解説書 エネルギー消費量＝メッツ・時×体重 https://kennet.mhlw.go.jp/tools/wp/wp-content/themes/targis_mhlw/pdf/guide-physical.pdf
// 計算: 3.8×0.5×53.1=100.9kcal/30分 → 7,000÷100.9≒69回。安静分を除く（3.8−1）×0.5×53.1=74.3kcal → 7,000÷74.3≒94回。

const W = 53.1
const perSession = (m: number) => m * 0.5 * W
const sessions = (k: number) => Math.round(7000 / k)

export const metadata: Metadata = {
  title: '二の腕ダイエットの考え方｜部分やせの公的な見解と、腕の筋トレで消費するエネルギーの計算',
  description:
    '二の腕だけの脂肪を落とす方法として示された公的な推奨はありません。厚生労働省のガイド2023は大きな筋群を全身まんべんなく鍛えることを勧めています。体脂肪1kg＝約7,000kcalを腕立て伏せで消費するには何回分か、女性の参照体重で計算しました。',
  ...pageUrlMeta('/articles/ninoude-diet/'),
}

const faqs = [
  {
    question: '二の腕の筋トレをすれば二の腕だけ細くなりますか？',
    answer:
      '二の腕の脂肪だけを落とす方法として示された公的な推奨は、当サイトが確認した厚生労働省の資料にはありません。厚生労働省のガイド2023は、特定の部位を重点的に鍛えるのではなく、大きな筋群を全身まんべんなく鍛えることを勧めています。体脂肪を減らすには、食事と身体活動によるエネルギー収支の調整が基本とされています。',
  },
  {
    question: '体脂肪を1kg減らすには、どのくらいのエネルギーが必要ですか？',
    answer:
      'e-ヘルスネット（厚生労働省）では、体脂肪1kgを減らすために必要なエネルギー量は約7,000kcalとされています。',
  },
  {
    question: '腕立て伏せはどのくらいエネルギーを消費しますか？',
    answer: `ガイド2023のメッツ表で、ほどほどの強度の腕立て伏せは3.8メッツです。体重${W}kgの方が30分行うと、計算上は約${Math.round(perSession(3.8))}kcal（安静時の分を含む）です。`,
  },
  {
    question: '二の腕を引き締めたい場合、ジムでは何を相談すればよいですか？',
    answer:
      '体験やカウンセリングで、二の腕を含む全身のトレーニング内容、頻度、食事の相談ができるかをご確認ください。ブライダルなど期日がある場合は、残りの期間も伝えると計画を立てやすくなります。',
  },
]

const related = [
  { href: '/articles/bridal-diet/', label: 'ブライダルダイエットの期間別プラン' },
  { href: '/articles/jijuu-training/', label: '自重トレーニングの頻度と消費エネルギー' },
  { href: '/articles/kiso-taisha/', label: '基礎代謝を上げる方法と数字の目安' },
  { href: '/articles/onaka-shibou/', label: 'お腹の脂肪を落とす方法（腹囲1cm＝約7,000kcal）' },
  { href: '/articles/diet/', label: 'ダイエット目的のジムの選び方' },
  { href: '/articles/bodymake/', label: 'ボディメイクに強いジムの選び方' },
]

export default function Page() {
  return (
    <ArticleShell
      eyebrow="Upper Arm"
      title="二の腕ダイエットの考え方｜部分やせの見解と、腕の筋トレの消費エネルギー"
      updated="2026年11月19日"
      lead="二の腕だけの脂肪を落とす方法として示された公的な推奨は、当サイトが確認した厚生労働省の資料にはありません。厚生労働省の「健康づくりのための身体活動・運動ガイド2023」は、特定の部位ではなく大きな筋群を全身まんべんなく鍛えることを勧めています。このページでは、二の腕を含む全身の筋トレと食事のエネルギー収支を、公的な数字で計算して示しています。"
      breadcrumb="二の腕ダイエットの考え方"
      faqs={faqs}
      related={related}
    >
      <h2>二の腕の脂肪と「部分やせ」についての公的な記載</h2>
      <ul>
        <li>ガイド2023（厚生労働省）：<strong>特定の部位を重点的に鍛えるのではなく</strong>、胸・背中・上肢・腹・臀部・下肢などの大きな筋群に負荷がかかる筋トレを全身まんべんなく行うよう勧めています。二の腕は「上肢」に含まれます。</li>
        <li>e-ヘルスネット「身体活動とエネルギー・栄養素」：体脂肪1kgを減らすために必要なエネルギー量は<strong>約7,000kcal</strong>で、身体活動による消費と食事で摂取するエネルギー量を調整して計画的に減量を図るとしています。</li>
      </ul>
      <p>
        このため、二の腕の見た目を変えたい場合も、腕の筋トレだけに頼るのではなく、全身の筋トレと食事を組み合わせて考えるのが、公的な資料に沿った進め方です。
      </p>

      <h2>腕立て伏せで7,000kcalを消費するには何回分か（当サイト計算）</h2>
      <p>
        ガイド2023のメッツ表と、女性30〜49歳の参照体重（{W}kg、日本人の食事摂取基準2015年版・e-ヘルスネット掲載値）を使い、「メッツ×時間（時）×体重（kg）」で計算しました。
      </p>
      <table>
        <thead>
          <tr>
            <th>種目（メッツ）</th>
            <th>30分あたり</th>
            <th>7,000kcalに必要な30分の回数</th>
            <th>週3回で続けた場合</th>
          </tr>
        </thead>
        <tbody>
          {[
            { name: 'ほどほどの強度の腕立て伏せ・腹筋運動', m: 3.8 },
            { name: '激しい強度の腕立て伏せ・腹筋運動', m: 8.0 },
          ].map((r) => {
            const k = perSession(r.m)
            const n = sessions(k)
            return (
              <tr key={r.m}>
                <td>{r.name}（{r.m.toFixed(1)}）</td>
                <td>約{Math.round(k)}kcal</td>
                <td>約{n}回</td>
                <td>約{Math.round(n / 3)}週</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <p>
        当サイト計算（2026年11月19日）。この値には安静にしていても消費する分（1メッツ分）が含まれます。安静時の分を除いて運動で上乗せされる分だけで数えると、ほどほどの強度で約{Math.round((3.8 - 1) * 0.5 * W)}kcal／30分、7,000kcalまで約{sessions((3.8 - 1) * 0.5 * W)}回分です。実際の消費量は体重や動作の速さで変わるため、目安としてご覧ください。
      </p>
      <div className="callout">
        <p>
          腕の筋トレだけで体脂肪1kg分のエネルギーを消費するには、計算上、30分の腕立て伏せを数十回以上続ける必要があります。食事の見直しと、下半身など大きな筋群を使う運動を組み合わせるほうが、エネルギー収支を調整しやすくなります。
        </p>
      </div>

      <h2>二の腕を含めた筋トレの進め方</h2>
      <ul>
        <li><strong>頻度</strong>：筋力トレーニングは週2〜3日（ガイド2023）。筋肉を休める日も設けます。</li>
        <li><strong>種目</strong>：腕立て伏せは、ガイド2023で自重トレーニングの例として挙げられています。負荷が強い場合は膝をついた姿勢から始めます。下半身のスクワット（5.0メッツ）など、大きな筋群の種目も組み合わせます。</li>
        <li><strong>負荷の上げ方</strong>：楽にできるようになったら、回数や動作の強度で少しずつ負荷を上げます（漸進性過負荷の原則）。</li>
        <li><strong>呼吸</strong>：息をこらえずに行います（e-ヘルスネット）。</li>
      </ul>
      <p>
        自重での全身の筋トレは<a href="/articles/jijuu-training/">自重トレーニングの頻度と消費エネルギー</a>、下半身の種目は<a href="/articles/kahanshin-kintore/">下半身の筋トレ</a>で紹介しています。
      </p>

      <h2>期日に合わせて二の腕を整えたい場合</h2>
      <p>
        結婚式などで二の腕を出す予定がある場合は、残りの期間から逆算して計画を立てることになります。期間別の考え方は<a href="/articles/bridal-diet/">ブライダルダイエットの期間別プラン</a>をご覧ください。食事の相談やフォームの確認を受けたい方は、<a href="/guide/">女性専用パーソナルジムの選び方</a>や<a href="/areas/">エリア別のジム一覧</a>から、食事指導の有無を比べて選ぶことができます。
      </p>

      <h2>出典</h2>
      <ul>
        <li><a href="https://www.mhlw.go.jp/content/001194020.pdf" target="_blank" rel="noopener noreferrer">厚生労働省「健康づくりのための身体活動・運動ガイド2023」</a>（筋力トレーニングについて・運動のメッツ表）</li>
        <li><a href="https://kennet.mhlw.go.jp/information/information/exercise/s-00-012.html" target="_blank" rel="noopener noreferrer">e-ヘルスネット「身体活動とエネルギー・栄養素」</a></li>
        <li><a href="https://kennet.mhlw.go.jp/information/information/food/e-07-002.html" target="_blank" rel="noopener noreferrer">e-ヘルスネット「加齢とエネルギー代謝」</a>（女性の参照体重）</li>
        <li><a href="https://kennet.mhlw.go.jp/tools/wp/wp-content/themes/targis_mhlw/pdf/guide-physical.pdf" target="_blank" rel="noopener noreferrer">厚生労働省「身体活動量アップで健康づくり！私のアクティブプラン」解説書</a>（エネルギー消費量の計算方法）</li>
      </ul>
      <p>いずれも2026年11月19日に確認しました。</p>
    </ArticleShell>
  )
}
