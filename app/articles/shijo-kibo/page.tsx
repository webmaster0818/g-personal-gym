import { pageUrlMeta } from '@/lib/seo'
import type { Metadata } from 'next'
import { ArticleShell } from '@/components/ArticleShell'
import { GYM_SURVEY } from '@/data/gymSurvey'

// 掲載内容は 2026年11月25日 に確認
// - 矢野経済研究所 プレスリリース No.3992（2026年3月12日）「フィットネス施設に関する調査を実施（2025年）」
//   https://www.yano.co.jp/press-release/show/press_id/3992 ：2025年8月時点の全国フィットネス施設数 13,876。
//   総合型 1,240／小規模型 2,156／24時間型 5,034／ヨガ型 1,877／パーソナルトレーニングジム 2,368／その他 1,201。
//   新規施設（2024年9月〜2025年8月）のうちパーソナルトレーニングジム 278施設（構成比22.0%）。金額の市場規模の記載なし
// - 同 No.3651（2024年10月24日）「フィットネス施設に関する調査を実施（2024年）」 https://www.yano.co.jp/press-release/show/press_id/3651 ：
//   2024年8月時点 12,543施設。総合型 1,142／小規模型 2,145／24時間型 4,348／ヨガ型 1,334／その他 3,574（パーソナルトレーニングジム等を含む）
// - 女性専用ブランドの公式店舗一覧（2026年11月25日）：UNDEUX SUPERBODY https://www.diet-undeux.jp/studio/ 50スタジオ／
//   リボーンマイセルフ https://www.shapes-international.co.jp/store/ 24店／ビーコンセプト https://b-concept.tokyo/clublist/ 19店／
//   OUTLINE https://www.outline-gym.com/gym/ 18店／プリッツジム https://plizgym.co.jp/ 「全国へ38店舗」（セミパーソナル・最大3名）／
//   かたぎり塾 女性専門店 https://katagirijuku.jp/ 14店（かたぎり塾全体は男女利用可）

export const metadata: Metadata = {
  title: 'パーソナルジムの市場規模｜全国2,368施設・新規開業の22%（矢野経済研究所2025年）と女性専用ブランドの店舗数',
  description:
    'パーソナルジムの市場規模を、矢野経済研究所の調査（2025年8月時点）の施設数で確認しました。全国のフィットネス施設13,876のうちパーソナルトレーニングジムは2,368施設。女性専用ブランドの公式店舗数も集計しています。',
  ...pageUrlMeta('/articles/shijo-kibo/'),
}

const Y2025 = {
  total: 13876,
  rows: [
    { type: '24時間型', n: 5034 },
    { type: 'パーソナルトレーニングジム', n: 2368 },
    { type: '小規模型', n: 2156 },
    { type: 'ヨガ型', n: 1877 },
    { type: '総合型', n: 1240 },
    { type: 'その他', n: 1201 },
  ],
}
const Y2024_TOTAL = 12543
const Y2024_OTHER = 3574 // パーソナルトレーニングジム等を含むその他（2024年の区分）
const PT_2025 = 2368
const PT_NEW = 278
const PT_NEW_SHARE = 22.0

const brands = [
  { name: 'UNDEUX SUPERBODY', n: 50, note: '女性専用・スタジオ一覧の掲載数' },
  { name: 'プリッツジム', n: 38, note: '女性専用・セミパーソナル（最大3名）・公式の「全国へ38店舗」' },
  { name: 'リボーンマイセルフ', n: 24, note: '女性専用・店舗一覧の掲載数' },
  { name: 'ビーコンセプト', n: 19, note: '女性専用・店舗一覧の掲載数' },
  { name: 'OUTLINE', n: 18, note: '女性専用・店舗一覧の掲載数' },
  { name: 'かたぎり塾 女性専門店', n: 14, note: 'かたぎり塾全体は男女利用可。女性専門店のみ' },
]
const brandTotal = brands.reduce((s, b) => s + b.n, 0)
const pct = (a: number, b: number) => ((a / b) * 100).toFixed(1)

const faqs = [
  {
    question: 'パーソナルジムは全国に何施設ありますか？',
    answer:
      '矢野経済研究所の調査（2026年3月12日発表）では、2025年8月時点のパーソナルトレーニングジムは全国2,368施設です。全国のフィットネス施設13,876施設の約' +
      pct(PT_2025, Y2025.total) +
      '%にあたります（割合は当サイト計算）。',
  },
  {
    question: 'パーソナルジムの市場規模（売上金額）はいくらですか？',
    answer:
      '当サイトが確認した矢野経済研究所の公表資料（プレスリリース）は施設数の集計で、パーソナルトレーニングジム単独の売上金額は記載されていません。金額は同社の有料レポートなどで扱われています。このページでは、公表されている施設数をもとに規模をまとめています。',
  },
  {
    question: 'パーソナルジムは増えていますか？',
    answer:
      '矢野経済研究所によると、2024年9月〜2025年8月の新規施設のうち、パーソナルトレーニングジムは278施設で、新規施設全体の22.0%でした。2024年の調査ではパーソナルトレーニングジムは「その他」に含まれており、単独の施設数は示されていないため、前年との増減は比較できません。',
  },
]

const related = [
  { href: '/articles/josei-gym-data/', label: '女性向けパーソナルジムの独自調査データ' },
  { href: '/articles/joseisenyo-vs-kyoyo/', label: '女性専用と男女共用の違い' },
  { href: '/articles/personal-training/', label: 'パーソナルトレーニングとは' },
  { href: '/brands/', label: 'ブランド一覧' },
  { href: '/cost/', label: 'パーソナルジムの料金相場' },
]

export default function Page() {
  return (
    <ArticleShell
      eyebrow="Market Size"
      title="パーソナルジムの市場規模｜全国2,368施設と女性専用ブランドの店舗数"
      updated="2026年11月25日"
      lead={
        '矢野経済研究所の調査では、2025年8月時点のパーソナルトレーニングジムは全国2,368施設で、フィットネス施設全体（13,876施設）の約' +
        pct(PT_2025, Y2025.total) +
        '%です。2024年9月〜2025年8月に新しくできた施設のうち22.0%（278施設）がパーソナルトレーニングジムでした。同社の公表資料は施設数の集計で、売上金額は示されていません（2026年11月25日確認）。'
      }
      breadcrumb="パーソナルジムの市場規模"
      faqs={faqs}
      related={related}
    >
      <h2>業態別のフィットネス施設数（2025年8月時点）</h2>
      <table>
        <thead>
          <tr>
            <th>業態</th>
            <th>施設数</th>
            <th>全体に占める割合（当サイト計算）</th>
          </tr>
        </thead>
        <tbody>
          {Y2025.rows.map((r) => (
            <tr key={r.type}>
              <td>{r.type}</td>
              <td>{r.n.toLocaleString()}</td>
              <td>{pct(r.n, Y2025.total)}%</td>
            </tr>
          ))}
          <tr>
            <td>合計</td>
            <td>{Y2025.total.toLocaleString()}</td>
            <td>100%</td>
          </tr>
        </tbody>
      </table>
      <p>
        出典は矢野経済研究所のプレスリリース「フィットネス施設に関する調査を実施（2025年）」（2026年3月12日）です。パーソナルトレーニングジムは、24時間型に次いで2番目に多い業態です。
      </p>

      <h2>新規開業に占めるパーソナルジムの割合</h2>
      <p>
        2024年9月〜2025年8月の新規施設のうち、パーソナルトレーニングジムは{PT_NEW}施設、構成比{PT_NEW_SHARE.toFixed(1)}%でした。全施設に占める割合（約{pct(PT_2025, Y2025.total)}%）より新規施設に占める割合のほうが高く、全体より速いペースで増えている業態と読み取れます。
      </p>
      <div className="callout">
        <p>
          前年の調査（2024年8月時点・全国{Y2024_TOTAL.toLocaleString()}施設）では、パーソナルトレーニングジムは「その他」（{Y2024_OTHER.toLocaleString()}施設）に含まれ、単独の数は公表されていません。全施設数は1年で{(Y2025.total - Y2024_TOTAL).toLocaleString()}施設（約{pct(Y2025.total - Y2024_TOTAL, Y2024_TOTAL)}%）増えています（当サイト計算）。
        </p>
      </div>

      <h2>女性専用ブランドの店舗数（公式の店舗一覧・2026年11月25日）</h2>
      <table>
        <thead>
          <tr>
            <th>ブランド</th>
            <th>店舗数</th>
            <th>数え方</th>
          </tr>
        </thead>
        <tbody>
          {brands.map((b) => (
            <tr key={b.name}>
              <td>{b.name}</td>
              <td>{b.n}</td>
              <td>{b.note}</td>
            </tr>
          ))}
          <tr>
            <td>6ブランド計</td>
            <td>{brandTotal}</td>
            <td>当サイト集計</td>
          </tr>
        </tbody>
      </table>
      <p>
        6ブランドの合計{brandTotal}店は、矢野経済研究所のパーソナルトレーニングジム2,368施設の約{pct(brandTotal, PT_2025)}%にあたります。ただし、調査の時点（2025年8月と2026年11月）と施設の数え方が異なり、プリッツジムのようなセミパーソナル型が同社の分類でどこに入るかは公表資料からはわからないため、目安としてご覧ください。
      </p>
      <p>
        当サイトの独自調査（{GYM_SURVEY.period}集計・全国{GYM_SURVEY.areas}エリア・のべ{GYM_SURVEY.listings}ジム）では、掲載ジムのうち女性専用を公式に明記していたのは{GYM_SURVEY.stats.womenOnly.count}枠（{GYM_SURVEY.stats.womenOnly.pct}%）でした。集計の方法は<a href="/articles/josei-gym-data/">独自調査データ</a>に掲載しています。
      </p>

      <h2>施設が増えるなかで、ジム選びで確認したいこと</h2>
      <ul>
        <li><strong>店舗の継続性</strong>：コース料金を一括で支払う前に、運営会社と店舗の所在地を確認してください。</li>
        <li><strong>女性専用の範囲</strong>：会員が女性のみでも、トレーナーに男性が在籍するジムがあります。<a href="/articles/josei-trainer/">女性トレーナーの選び方</a>で解説しています。</li>
        <li><strong>料金の比較</strong>：ブランドごとの料金は<a href="/cost/">料金相場</a>と<a href="/brands/">ブランド一覧</a>で比較できます。</li>
      </ul>

      <h2>出典</h2>
      <ul>
        <li><a href="https://www.yano.co.jp/press-release/show/press_id/3992" target="_blank" rel="noopener noreferrer">矢野経済研究所「フィットネス施設に関する調査を実施（2025年）」</a>（2026年3月12日）</li>
        <li><a href="https://www.yano.co.jp/press-release/show/press_id/3651" target="_blank" rel="noopener noreferrer">矢野経済研究所「フィットネス施設に関する調査を実施（2024年）」</a>（2024年10月24日）</li>
        <li><a href="https://www.diet-undeux.jp/studio/" target="_blank" rel="noopener noreferrer">UNDEUX SUPERBODY スタジオ一覧</a>／<a href="https://www.shapes-international.co.jp/store/" target="_blank" rel="noopener noreferrer">リボーンマイセルフ 店舗一覧</a>／<a href="https://b-concept.tokyo/clublist/" target="_blank" rel="noopener noreferrer">ビーコンセプト 店舗一覧</a>／<a href="https://www.outline-gym.com/gym/" target="_blank" rel="noopener noreferrer">OUTLINE 店舗一覧</a>／<a href="https://plizgym.co.jp/" target="_blank" rel="noopener noreferrer">プリッツジム</a>／<a href="https://katagirijuku.jp/" target="_blank" rel="noopener noreferrer">かたぎり塾</a></li>
      </ul>
      <p>2026年11月25日に確認しました。</p>
    </ArticleShell>
  )
}
