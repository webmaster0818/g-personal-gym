import { pageUrlMeta } from '@/lib/seo'
import type { Metadata } from 'next'
import { ArticleShell } from '@/components/ArticleShell'

// 掲載内容は 2026年11月26日 に各公式サイトで確認
// - カーブス https://www.curves.co.jp/price/ ：女性専用。入会金の通常価格16,500円（税込）。月会費 7,150円～8,360円（税込）。
//   「１か月に何日でも通い放題」「1回30分」「女性コーチが正しく安全で、効果的な運動方法をお教えいたします」。営業時間 平日10-13時・15-19時／土曜10-13時（店舗により異なる）
// - エニタイムフィットネス よくある質問 https://www.anytimefitness.co.jp/faq/ ：初期費用は「セキュリティキー発行手数料、入会当月、翌月の月会費」。
//   スタッフアワーは店舗で異なる。マシンの使い方のオリエンテーション（無料・予約制）。個別のメニュー作成やマンツーマン指導は「パーソナルトレーナーによる有料のセッション（※一部店舗除く）」。月会費の金額はFAQに記載なし（店舗ごと）
// - OUTLINE https://www.outline-gym.com/service ：女性専用・完全個室のマンツーマン。入会金0円。16回 通常220,000円（1回13,750円）・フルサポート184,800円（1回11,550円）。税込
// - かたぎり塾 https://katagirijuku.jp/price ：月8プラン 税込59,400円（1回60分あたり税込7,425円）。完全マンツーマン。男女利用可（女性専門店あり）。入会金は店舗により異なる
// - 厚生労働省「健康づくりのための身体活動・運動ガイド2023」 https://www.mhlw.go.jp/content/001194020.pdf ：筋力トレーニングは個別性の原則（個人に合った目標）、
//   必要に応じて運動指導の専門家に相談。成人・高齢者とも筋力トレーニングを週2～3日

export const metadata: Metadata = {
  title: 'パーソナルジムと普通のジムの違い｜指導の形・月額・1回あたりの費用を公式料金で比較',
  description:
    'パーソナルジムと普通のジム（フィットネスジム・女性専用の30分フィットネス）の違いを、指導の形・営業時間・料金で比較しました。カーブス・OUTLINE・かたぎり塾の公式料金から、週2回通ったときの1回あたりの費用と2ヶ月の総額を計算しています。',
  ...pageUrlMeta('/articles/futsu-gym-chigai/'),
}

const yen = (n: number) => n.toLocaleString()

// 週2回＝月8回で計算（当サイト計算）
const VISITS = 8
const curvesLow = 7150
const curvesHigh = 8360
const curvesJoin = 16500
const outline16 = 220000
const outlinePer = 13750
const katagiri8 = 59400
const katagiriPer = 7425

const curvesPerLow = Math.round(curvesLow / VISITS)
const curvesPerHigh = Math.round(curvesHigh / VISITS)
const curves2m = curvesJoin + curvesHigh * 2
const katagiri2m = katagiri8 * 2
const ptMonthsOfCurves = (outlinePer / curvesHigh).toFixed(1)

const faqs = [
  {
    question: 'パーソナルジムと普通のジムの一番の違いは何ですか？',
    answer:
      '指導の形です。普通のジムは器具を自分で使うのが基本で、エニタイムフィットネスはマシンの使い方のオリエンテーション（無料・予約制）を案内し、マンツーマンの指導は有料のセッションとしています。パーソナルジムはトレーナーが1対1で毎回指導します（2026年11月26日、各公式サイトで確認）。',
  },
  {
    question: '料金はどのくらい違いますか？',
    answer:
      '女性専用のカーブスは月会費7,150〜8,360円（税込）で通い放題です。週2回（月8回）通うと1回あたり約' +
      yen(curvesPerLow) +
      '〜' +
      yen(curvesPerHigh) +
      '円の計算です。パーソナルジムはOUTLINEの16回通常コースが1回13,750円、かたぎり塾の月8プランが1回7,425円（いずれも税込）です（当サイト計算）。',
  },
  {
    question: '普通のジムに女性専用はありますか？',
    answer:
      'あります。カーブスは女性専用のフィットネスで、女性コーチが運動方法を教えると公式に記載しています。1回30分のプログラムを行う形で、1対1の指導ではありません。女性専用のパーソナルジムとの違いは「女性専用と男女共用の違い」の記事でも整理しています。',
  },
  {
    question: 'どちらを選べばよいですか？',
    answer:
      '器具の使い方や体に合うメニューが分からない場合は、パーソナルジムで1対1の指導を受ける方法があります。厚生労働省のガイド2023も、筋力トレーニングは個人に合った内容で行い、必要に応じて運動指導の専門家に相談するよう記載しています。費用を抑えて回数を確保したい場合は、普通のジムや自宅での運動を組み合わせる方法もあります。',
  },
]

const related = [
  { href: '/articles/personal-training/', label: 'パーソナルトレーニングとは' },
  { href: '/articles/joseisenyo-vs-kyoyo/', label: '女性専用と男女共用、どっちを選ぶ？' },
  { href: '/articles/hindo/', label: 'パーソナルジムは週何回通う？' },
  { href: '/cost/', label: 'パーソナルジムの料金相場' },
  { href: '/articles/tsudobarai/', label: 'パーソナルジムの都度払い・チケット制' },
]

export default function Page() {
  return (
    <ArticleShell
      eyebrow="Comparison"
      title="パーソナルジムと普通のジムの違い｜指導の形と費用"
      updated="2026年11月26日"
      lead={
        'パーソナルジムと普通のジムの一番の違いは、トレーナーが毎回1対1で指導するかどうかです。料金は、女性専用のカーブスが月会費7,150〜8,360円（税込）で通い放題、パーソナルジムはOUTLINEの16回通常コースが1回13,750円です。週2回通った場合、カーブスは1回あたり約' +
        yen(curvesPerLow) +
        '〜' +
        yen(curvesPerHigh) +
        '円の計算になります（2026年11月26日に公式サイトで確認・当サイト計算）。'
      }
      breadcrumb="パーソナルジムと普通のジムの違い"
      faqs={faqs}
      related={related}
    >
      <h2>指導の形・営業時間・料金の違い</h2>
      <table>
        <thead>
          <tr>
            <th>項目</th>
            <th>普通のジム（24時間型）</th>
            <th>女性専用の30分フィットネス</th>
            <th>パーソナルジム</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>例</td>
            <td>エニタイムフィットネス（男女共用）</td>
            <td>カーブス（女性専用）</td>
            <td>OUTLINE（女性専用）・かたぎり塾（男女利用可）</td>
          </tr>
          <tr>
            <td>指導</td>
            <td>マシンの使い方のオリエンテーション（無料・予約制）。マンツーマン指導は有料セッション（一部店舗除く）</td>
            <td>女性コーチが運動方法をサポート。1回30分のプログラム</td>
            <td>トレーナーが1対1で毎回指導（OUTLINEは完全個室）</td>
          </tr>
          <tr>
            <td>通える回数</td>
            <td>月会費制</td>
            <td>1か月に何日でも通い放題</td>
            <td>コースの回数・月の回数を契約（OUTLINE 16回、かたぎり塾 月8回など）</td>
          </tr>
          <tr>
            <td>料金（税込）</td>
            <td>月会費は店舗ごと。初期費用にセキュリティキー発行手数料</td>
            <td>月会費7,150〜8,360円・入会金16,500円（通常価格）</td>
            <td>OUTLINE 16回 220,000円（入会金0円）／かたぎり塾 月8回 59,400円</td>
          </tr>
          <tr>
            <td>営業時間</td>
            <td>スタッフアワーは店舗ごと</td>
            <td>平日10〜13時・15〜19時、土曜10〜13時（店舗により異なる）</td>
            <td>予約制（店舗ごと）</td>
          </tr>
        </tbody>
      </table>
      <p>2026年11月26日に各公式サイトで確認しました。料金は店舗やエリアで異なる場合があります。</p>

      <h2>週2回通ったときの1回あたりと2ヶ月の総額（当サイト計算）</h2>
      <p>
        厚生労働省のガイド2023が推奨する筋力トレーニング週2〜3日のうち、週2回（月8回）で通った場合を計算しました。カーブスは月会費の上限（8,360円）と入会金の通常価格で計算しています。
      </p>
      <table>
        <thead>
          <tr>
            <th>ジム</th>
            <th>1回あたり</th>
            <th>2ヶ月（16回）の総額</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>カーブス（女性専用・通い放題）</td>
            <td>約{yen(curvesPerLow)}〜{yen(curvesPerHigh)}円</td>
            <td>約{yen(curves2m)}円（入会金含む）</td>
          </tr>
          <tr>
            <td>かたぎり塾 月8プラン（男女利用可）</td>
            <td>{yen(katagiriPer)}円</td>
            <td>{yen(katagiri2m)}円（入会金は店舗により異なり別途）</td>
          </tr>
          <tr>
            <td>OUTLINE 16回 通常コース（女性専用）</td>
            <td>{yen(outlinePer)}円</td>
            <td>{yen(outline16)}円（入会金0円）</td>
          </tr>
        </tbody>
      </table>
      <div className="callout">
        <p>
          OUTLINEの1回分（13,750円）は、カーブスの月会費（上限8,360円）の約{ptMonthsOfCurves}か月分にあたります。料金の相場は<a href="/cost/">女性専用パーソナルジムの料金相場</a>、1回ずつ払える方法は<a href="/articles/tsudobarai/">都度払い・チケット制</a>で比較しています。
        </p>
      </div>

      <h2>パーソナルジムが向いている人・普通のジムが向いている人</h2>
      <ul>
        <li><strong>パーソナルジムが向いている</strong>：器具の使い方やフォームが分からない、自分に合うメニューを決めてほしい、期間を決めて体を変えたい。厚生労働省のガイド2023は、筋力トレーニングは個人に合った内容で行い、必要に応じて運動指導の専門家に相談するよう記載しています。</li>
        <li><strong>普通のジムが向いている</strong>：メニューを自分で組める、費用を抑えて回数を確保したい、好きな時間に通いたい。</li>
        <li><strong>組み合わせる</strong>：最初の数か月はパーソナルジムでフォームを覚え、その後は普通のジムや自宅で週2〜3日を続ける方法もあります。辞める時期の考え方は<a href="/articles/yameru-timing/">パーソナルジムを辞めるタイミング</a>で解説しています。</li>
      </ul>

      <h2>出典</h2>
      <ul>
        <li><a href="https://www.curves.co.jp/price/" target="_blank" rel="noopener noreferrer">カーブス 料金プラン</a></li>
        <li><a href="https://www.anytimefitness.co.jp/faq/" target="_blank" rel="noopener noreferrer">エニタイムフィットネス よくある質問</a></li>
        <li><a href="https://www.outline-gym.com/service" target="_blank" rel="noopener noreferrer">OUTLINE 料金・サービス</a></li>
        <li><a href="https://katagirijuku.jp/price" target="_blank" rel="noopener noreferrer">かたぎり塾 料金</a></li>
        <li><a href="https://www.mhlw.go.jp/content/001194020.pdf" target="_blank" rel="noopener noreferrer">厚生労働省「健康づくりのための身体活動・運動ガイド2023」</a>（筋力トレーニングの個別性の原則・週2〜3日）</li>
      </ul>
      <p>2026年11月26日に確認しました。</p>
    </ArticleShell>
  )
}
