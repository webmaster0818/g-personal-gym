import { pageUrlMeta } from '@/lib/seo'
import type { Metadata } from 'next'
import { ArticleShell } from '@/components/ArticleShell'

// 掲載内容は 2026年11月25日 に各公式サイトで確認
// - リボーンマイセルフ https://www.shapes-international.co.jp/program/ ：ショートコース 2ヶ月（16回）・ベーシックコース 3ヶ月（24回）。
//   「コース期間中 週2回トレーニング（週2回を目標にトレーニングにご来店）」。コース終了者限定のメンテナンスコースは「週1回のトレーニングで、筋量を維持しリバウンドを防ぐ」
// - ビーコンセプト https://b-concept.tokyo/ ：太ももダイエットプログラム 2ヶ月／16回、アフターフォロー付き 16回+6回（アフターフォロー6ヶ月（6回））。
//   お役立ち情報「ジムに通う理想的な頻度は？最も効果が出るのは週2～3回！」
// - UNDEUX SUPERBODY https://www.diet-undeux.jp/price/ ：スタンダードプラン 月2〜8回（月毎に回数を選べる）・コミットプラン 月6回。
//   よくある質問 https://www.diet-undeux.jp/faq/ ：月5回行きたいときは会員のみ購入できる「単発チケット」で追加
// - OUTLINE https://www.outline-gym.com/service ：16回・24回・32回コース。終了後のクラブメンバー 月2〜5回（フルサポートは月2回以上・最低3ヶ月の継続が必要）
// - かたぎり塾 https://katagirijuku.jp/price ：月4・月8・月16・月24プラン（男女とも利用可・女性専門店あり）
// - 厚生労働省「健康づくりのための身体活動・運動ガイド2023」 https://www.mhlw.go.jp/content/001194020.pdf ：成人・高齢者とも「筋力トレーニングを週2～3日」

export const metadata: Metadata = {
  title: 'パーソナルジムは週何回通う？女性専用ブランドの公式の回数と、厚労省「筋トレ週2〜3日」との比較',
  description:
    'パーソナルジムに通う頻度を、リボーンマイセルフ・ビーコンセプト・UNDEUX・OUTLINEなどの公式のコース回数から週あたりに換算し、厚労省ガイド2023の「筋トレ週2〜3日」と比べました。週1回のときに足りない分の考え方もまとめています。',
  ...pageUrlMeta('/articles/hindo/'),
}

// 1か月＝365÷12日、1週＝7日で週あたりに換算（当サイト計算）
const WEEKS_PER_MONTH = 365 / 12 / 7
const perWeek = (times: number, months: number) => times / (months * WEEKS_PER_MONTH)
const f1 = (n: number) => n.toFixed(1)

const plans = [
  { brand: 'リボーンマイセルフ（女性専用）', plan: 'ショートコース', official: '2ヶ月（16回）・週2回が目標', times: 16, months: 2 },
  { brand: 'リボーンマイセルフ（女性専用）', plan: 'ベーシックコース', official: '3ヶ月（24回）・週2回が目標', times: 24, months: 3 },
  { brand: 'ビーコンセプト（女性専用）', plan: '太ももダイエットプログラム', official: '2ヶ月／16回', times: 16, months: 2 },
  { brand: 'ビーコンセプト（女性専用）', plan: 'アフターフォロー', official: '6ヶ月（6回）', times: 6, months: 6 },
  { brand: 'UNDEUX SUPERBODY（女性専用）', plan: 'スタンダード（最少）', official: '月2回', times: 2, months: 1 },
  { brand: 'UNDEUX SUPERBODY（女性専用）', plan: 'スタンダード（最多）', official: '月8回', times: 8, months: 1 },
  { brand: 'UNDEUX SUPERBODY（女性専用）', plan: 'コミットプラン', official: '月6回', times: 6, months: 1 },
  { brand: 'OUTLINE（女性専用）', plan: 'クラブメンバー（コース終了後）', official: '月2〜5回', times: 2, months: 1 },
  { brand: 'かたぎり塾（男女利用可）', plan: '月4プラン', official: '月4回', times: 4, months: 1 },
  { brand: 'かたぎり塾（男女利用可）', plan: '月8プラン', official: '月8回', times: 8, months: 1 },
]

const twoMonth16 = perWeek(16, 2)
const monthly4 = perWeek(4, 1)

const faqs = [
  {
    question: 'パーソナルジムは週何回通うのがよいですか？',
    answer:
      '当サイトで確認した女性専用ブランドでは、短期のコースは週2回前後が基準です。リボーンマイセルフは「週2回を目標に」と公式に記載し、ビーコンセプトの2ヶ月16回は週あたり約' +
      f1(twoMonth16) +
      '回になります。厚生労働省のガイド2023も、筋力トレーニングを週2〜3日行うことを推奨しています（2026年11月25日確認）。',
  },
  {
    question: '週1回では効果がありませんか？',
    answer:
      'リボーンマイセルフは、コース終了後のメンテナンスコースを「週1回のトレーニングで、筋量を維持しリバウンドを防ぐ」ものと案内しています。体を大きく変える期間と、維持する期間で回数を分ける考え方です。週1回の場合、ガイド2023の週2〜3日に届かない分は、自宅での筋力トレーニングで補う方法があります。',
  },
  {
    question: '毎日通ってもよいですか？',
    answer:
      'ガイド2023は筋力トレーニングを週2〜3日としています。毎日の筋力トレーニングについての考え方は「筋トレは毎日やってもいい？」の記事で解説しています。UNDEUX SUPERBODYでは、月の回数を増やしたいときは会員向けの単発チケットで追加する形です。',
  },
]

const related = [
  { href: '/articles/yameru-timing/', label: 'パーソナルジムを辞めるタイミング' },
  { href: '/articles/kintore-mainichi/', label: '筋トレは毎日やってもいい？' },
  { href: '/articles/personal-training/', label: 'パーソナルトレーニングとは' },
  { href: '/articles/kouka-itsukara/', label: 'パーソナルジムの効果はいつから' },
  { href: '/articles/jijuu-training/', label: '自重トレーニングとは' },
  { href: '/cost/', label: 'パーソナルジムの料金相場' },
]

export default function Page() {
  return (
    <ArticleShell
      eyebrow="Frequency"
      title="パーソナルジムは週何回通う？公式の回数と週2〜3日の目安"
      updated="2026年11月25日"
      lead={
        'パーソナルジムの短期コースは、週2回前後で組まれているものが中心です。リボーンマイセルフは「週2回を目標に」と公式に記載し、ビーコンセプトの2ヶ月16回は週あたり約' +
        f1(twoMonth16) +
        '回、月4回のプランは週あたり約' +
        f1(monthly4) +
        '回になります（当サイト計算）。厚生労働省のガイド2023は、筋力トレーニングを週2〜3日行うことを推奨しています（2026年11月25日確認）。'
      }
      breadcrumb="パーソナルジムに通う頻度"
      faqs={faqs}
      related={related}
    >
      <h2>公式のコース回数を週あたりに換算（当サイト計算）</h2>
      <p>
        各ブランドの公式サイトに記載されたコースの回数と期間から、週あたりの回数を計算しました。1か月は365÷12日として換算しています。
      </p>
      <table>
        <thead>
          <tr>
            <th>ブランド</th>
            <th>プラン</th>
            <th>公式の回数・期間</th>
            <th>週あたり（当サイト計算）</th>
          </tr>
        </thead>
        <tbody>
          {plans.map((p) => (
            <tr key={p.brand + p.plan}>
              <td>{p.brand}</td>
              <td>{p.plan}</td>
              <td>{p.official}</td>
              <td>約{f1(perWeek(p.times, p.months))}回</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        OUTLINEのクラブメンバーは月2〜5回から選べるため、表は最少の月2回で計算しています（月5回なら週あたり約{f1(perWeek(5, 1))}回）。OUTLINEの16回・24回・32回コースは、公式サイトに通う期間の記載がないため、週あたりの回数は計算していません。料金と店舗は<a href="/ranking/">おすすめランキング</a>で比較しています。
      </p>

      <h2>回数の組み方は「集中期間」と「維持期間」で分かれる</h2>
      <ul>
        <li><strong>集中期間（2〜3か月）</strong>：リボーンマイセルフのショート・ベーシック、ビーコンセプトの2ヶ月コースは、週2回前後で組まれています。</li>
        <li><strong>維持期間</strong>：リボーンマイセルフのメンテナンスコースは週1回、ビーコンセプトのアフターフォローは6ヶ月で6回（月1回程度）です。</li>
        <li><strong>月額で回数を選ぶ形</strong>：UNDEUX SUPERBODYは月2〜8回を月ごとに選べ、かたぎり塾は月4〜24回のプランがあります。</li>
      </ul>

      <h2>厚労省ガイド2023の「筋トレ週2〜3日」と比べると</h2>
      <p>
        厚生労働省の「健康づくりのための身体活動・運動ガイド2023」は、成人・高齢者とも筋力トレーニングを週2〜3日行うことを推奨しています。ジムの回数がこれに届かない場合の、自宅での回数の目安を計算しました。
      </p>
      <table>
        <thead>
          <tr>
            <th>ジムに通う回数</th>
            <th>週あたり</th>
            <th>週2日に届くまでの自宅での回数</th>
          </tr>
        </thead>
        <tbody>
          {[2, 4, 8].map((t) => {
            const w = perWeek(t, 1)
            return (
              <tr key={t}>
                <td>月{t}回</td>
                <td>約{f1(w)}回</td>
                <td>{w >= 2 ? 'ジムだけで届く' : `週約${f1(2 - w)}回`}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="callout">
        <p>
          月4回（週約{f1(monthly4)}回）のプランでは、週2日に届くまで自宅で週約{f1(2 - monthly4)}回の筋力トレーニングが必要な計算です。自宅でできる種目と回数の目安は<a href="/articles/jijuu-training/">自重トレーニングとは</a>、毎日行う場合の考え方は<a href="/articles/kintore-mainichi/">筋トレは毎日やってもいい？</a>で解説しています。
        </p>
      </div>

      <h2>回数を決める前に確認しておきたいこと</h2>
      <ul>
        <li><strong>予約の取りやすさ</strong>：週2回を続けるには、通いたい時間帯に予約が取れるかが重要です。体験の際に確認してください。</li>
        <li><strong>回数を増やす方法</strong>：UNDEUX SUPERBODYは会員のみ購入できる単発チケットで回数を追加できます。</li>
        <li><strong>使い切れなかった回数</strong>：OUTLINEのクラブメンバーは、使いきれなかったチケットを1ヶ月繰り越せます。</li>
        <li><strong>持病のある方・妊娠中の方</strong>：運動の頻度は主治医の指示を優先し、カウンセリングで伝えてください。</li>
      </ul>

      <h2>出典</h2>
      <ul>
        <li><a href="https://www.shapes-international.co.jp/program/" target="_blank" rel="noopener noreferrer">リボーンマイセルフ コースと料金</a></li>
        <li><a href="https://b-concept.tokyo/" target="_blank" rel="noopener noreferrer">ビーコンセプト 公式サイト</a></li>
        <li><a href="https://www.diet-undeux.jp/price/" target="_blank" rel="noopener noreferrer">UNDEUX SUPERBODY 料金</a>・<a href="https://www.diet-undeux.jp/faq/" target="_blank" rel="noopener noreferrer">よくある質問</a></li>
        <li><a href="https://www.outline-gym.com/service" target="_blank" rel="noopener noreferrer">OUTLINE 料金・サービス</a></li>
        <li><a href="https://katagirijuku.jp/price" target="_blank" rel="noopener noreferrer">かたぎり塾 料金</a></li>
        <li><a href="https://www.mhlw.go.jp/content/001194020.pdf" target="_blank" rel="noopener noreferrer">厚生労働省「健康づくりのための身体活動・運動ガイド2023」</a>（推奨事項一覧：筋力トレーニングを週2〜3日）</li>
      </ul>
      <p>2026年11月25日に確認しました。</p>
    </ArticleShell>
  )
}
