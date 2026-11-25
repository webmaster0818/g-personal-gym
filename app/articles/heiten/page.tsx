import { pageUrlMeta } from '@/lib/seo'
import type { Metadata } from 'next'
import { ArticleShell } from '@/components/ArticleShell'

// 掲載内容は 2026年11月25日 に確認
// - 国民生活センター「パーソナルトレーニングに関する契約トラブル－痩身エステ等、関連商品・サービスも勧誘されて高額に！？－」（2026年10月7日公表）
//   https://www.kokusen.go.jp/news/data/n-20261007_1.html ：相談件数 2021年度495／2022年度722／2023年度861／2024年度885／2025年度1,457／2026年度537（8月31日までの登録分。前年同期468）。
//   問題点「中途解約時の手続や精算が複雑になりやすい」「契約したサービスを実際に利用できるか、事前に確認することが難しい」。相談先 消費者ホットライン188
// - ビーコンセプト https://b-concept.tokyo/clublist/omiya/ ：大宮店「新規会員様募集停止中」（11/20〜11/25 表示）
// - CREBIQ（クレビック）：公式トップの告知「CREBIQ全店閉店のお知らせ」（2025年2月16日をもって全店舗の営業を終了）＝Wayback Machine 2025-03-17 の公式トップで確認（当サイト 2026年10月）。crebiq.com は 11/25 も応答なし（HTTP 521）
// - リボーンマイセルフ https://www.shapes-international.co.jp/store/tokyo/ ：「返金保証制度をご利用の場合は、残セッション分の料金から解約手数料または残金の20％いずれか低い額を差し引いて返金」
// - UNDEUX SUPERBODY https://www.diet-undeux.jp/price/ ：全店で月額制プラン（スタンダード 月2〜8回・コミット 月6回）
// - OUTLINE https://www.outline-gym.com/service ：16回コース 184,800円（フルサポート）。終了後はクラブメンバー（月額）。使いきれなかったチケットは1ヶ月繰り越し

export const metadata: Metadata = {
  title: 'パーソナルジムが閉店したら？当サイトが確認した閉店・募集停止の事例と、前払いを抑える契約の選び方',
  description:
    'パーソナルジムの閉店・新規募集停止の事例を、当サイトが公式サイトで確認した記録からまとめました。国民生活センターの相談件数（2025年度1,457件）と、一括前払いを抑えられる月額制・返金保証の公式の条件も比較しています。',
  ...pageUrlMeta('/articles/heiten/'),
}

const consults = [
  { year: '2021年度', n: 495 },
  { year: '2022年度', n: 722 },
  { year: '2023年度', n: 861 },
  { year: '2024年度', n: 885 },
  { year: '2025年度', n: 1457 },
]
const ratio = (a: number, b: number) => (a / b).toFixed(1)

// リボーンマイセルフの返金保証制度：差し引かれる額は「解約手数料」と「残金の20％」の低いほう＝最大でも残金の20%
const remains = [50000, 100000, 150000]
const maxDeduct = (r: number) => Math.round(r * 0.2)

const faqs = [
  {
    question: '通っているパーソナルジムが閉店したらどうすればよいですか？',
    answer:
      'まず、契約書面と支払いの記録（残り回数・支払額）を手元にそろえ、運営会社に残りの回数の扱い（他店への振替・返金）を確認してください。話が進まない場合は、消費者ホットライン「188」で最寄りの消費生活センターに相談できます（国民生活センターの案内・2026年11月25日確認）。',
  },
  {
    question: '入会前に、店舗の受付状況を確かめる方法はありますか？',
    answer:
      '当サイトの確認では、店舗ページと店舗一覧に「新規会員様募集停止中」と表示された例がありました（ビーコンセプト大宮店）。入会前と契約更新の前に、公式の店舗一覧と店舗ページで、その店舗が掲載され受付中かを確認してください。',
  },
  {
    question: '途中で解約したときの返金はどうなりますか？',
    answer:
      'ジムごとに条件が異なります。リボーンマイセルフは、返金保証制度を利用した場合、残セッション分の料金から「解約手数料」または「残金の20%」のいずれか低い額を差し引いて返金すると公式に記載しています。契約前に、中途解約の精算方法を書面で確認してください。',
  },
]

const related = [
  { href: '/articles/yameru-timing/', label: 'パーソナルジムを辞めるタイミング' },
  { href: '/articles/shijo-kibo/', label: 'パーソナルジムの市場規模' },
  { href: '/articles/tsudobarai/', label: 'パーソナルジムの都度払い' },
  { href: '/articles/ryokin-osaeru/', label: 'パーソナルジムの料金を抑える方法' },
  { href: '/articles/shippai/', label: 'パーソナルジム選びの失敗例' },
  { href: '/cost/', label: 'パーソナルジムの料金相場' },
]

export default function Page() {
  return (
    <ArticleShell
      eyebrow="Closure"
      title="パーソナルジムが閉店したら？閉店・募集停止の事例と契約の選び方"
      updated="2026年11月25日"
      lead="当サイトが公式サイトで確認した範囲では、全店閉店の告知（CREBIQ・2025年2月16日）、新規会員の募集停止（ビーコンセプト大宮店）といった事例がありました。コースを一括で前払いすると、閉店や中途解約のときに精算の問題が起きやすくなります。国民生活センターへのパーソナルトレーニングの相談は2025年度に1,457件で、前年度の約1.6倍でした（2026年11月25日確認）。"
      breadcrumb="パーソナルジムの閉店"
      faqs={faqs}
      related={related}
    >
      <h2>当サイトが確認した閉店・募集停止の事例</h2>
      <p>
        当サイトは、掲載している店舗を各ブランドの公式サイトで定期的に照合しています。その中で確認した事例です。
      </p>
      <table>
        <thead>
          <tr>
            <th>ブランド・店舗</th>
            <th>公式サイトの状況</th>
            <th>当サイトの確認</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>CREBIQ（クレビック）全店</td><td>公式トップに「CREBIQ全店閉店のお知らせ」（2025年2月16日をもって全店舗の営業を終了）。現在、公式サイトは応答なし</td><td>2026年10月（告知はWayback Machineの2025年3月17日の記録）・2026年11月25日も応答なし</td></tr>
          <tr><td>ビーコンセプト 大宮店</td><td>店舗ページ・店舗一覧に「新規会員様募集停止中」</td><td>2026年11月20日〜11月25日</td></tr>
        </tbody>
      </table>
      <p>
        新規会員の募集を止めている店舗もあります。入会前と更新前に、公式の店舗一覧と店舗ページで、その店舗の受付状況を確認してください。
      </p>

      <h2>パーソナルトレーニングの相談件数（国民生活センター）</h2>
      <table>
        <thead>
          <tr>
            <th>年度</th>
            <th>相談件数</th>
            <th>2021年度比（当サイト計算）</th>
          </tr>
        </thead>
        <tbody>
          {consults.map((c) => (
            <tr key={c.year}>
              <td>{c.year}</td>
              <td>{c.n.toLocaleString()}件</td>
              <td>{ratio(c.n, consults[0].n)}倍</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        2026年度は8月31日までの登録分で537件（前年同期は468件）です。国民生活センターは問題点として「中途解約時の手続や精算が複雑になりやすい」「契約したサービスを実際に利用できるか、事前に確認することが難しい」を挙げています（2026年10月7日公表）。
      </p>

      <h2>前払いを抑える契約の選び方（公式の条件）</h2>
      <ul>
        <li><strong>月額制を選ぶ</strong>：UNDEUX SUPERBODYは全店で月額制のプラン（月2〜8回のスタンダード・月6回のコミット）を用意しています。支払いが月ごとのため、まとめて前払いする額を抑えられます。</li>
        <li><strong>コース後の月額プラン</strong>：OUTLINEは16回などのコース（16回 184,800円・フルサポート）の後、月額のクラブメンバーに移行する形です。最初のコースは一括の料金になります。</li>
        <li><strong>返金の条件を確認する</strong>：リボーンマイセルフは返金保証制度の利用時、残セッション分の料金から「解約手数料」または「残金の20%」の低いほうを差し引いて返金すると記載しています。</li>
      </ul>
      <p>
        リボーンマイセルフの条件では、差し引かれる額は最大でも残金の20%です。残金の額ごとの上限を計算しました（当サイト計算）。
      </p>
      <table>
        <thead>
          <tr>
            <th>残セッション分の料金</th>
            <th>差し引かれる額の上限（20%）</th>
            <th>返金の下限</th>
          </tr>
        </thead>
        <tbody>
          {remains.map((r) => (
            <tr key={r}>
              <td>{r.toLocaleString()}円</td>
              <td>{maxDeduct(r).toLocaleString()}円</td>
              <td>{(r - maxDeduct(r)).toLocaleString()}円</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="callout">
        <p>
          解約手数料のほうが低い場合は、差し引かれる額はさらに少なくなります。条件はブランド・プランによって異なるため、契約前に中途解約の精算方法を書面で確認してください。1回ごとに支払える方法は<a href="/articles/tsudobarai/">パーソナルジムの都度払い</a>、料金の比較は<a href="/cost/">料金相場</a>でまとめています。
        </p>
      </div>

      <h2>閉店や解約で困ったときの相談先</h2>
      <ul>
        <li><strong>運営会社</strong>：契約書面・支払いの記録・残り回数をそろえて、残りの回数の扱い（他店への振替・返金）を確認します。</li>
        <li><strong>消費者ホットライン「188」</strong>：最寄りの消費生活センター等を案内してもらえます（国民生活センターの案内）。</li>
      </ul>

      <h2>出典</h2>
      <ul>
        <li><a href="https://www.kokusen.go.jp/news/data/n-20261007_1.html" target="_blank" rel="noopener noreferrer">国民生活センター「パーソナルトレーニングに関する契約トラブル」</a>（2026年10月7日公表）</li>
        <li><a href="https://b-concept.tokyo/clublist/" target="_blank" rel="noopener noreferrer">ビーコンセプト 店舗一覧</a>・<a href="https://b-concept.tokyo/clublist/omiya/" target="_blank" rel="noopener noreferrer">大宮店</a></li>
        <li><a href="https://www.shapes-international.co.jp/store/tokyo/" target="_blank" rel="noopener noreferrer">リボーンマイセルフ 東京店（返金保証制度の記載）</a></li>
        <li><a href="https://www.diet-undeux.jp/price/" target="_blank" rel="noopener noreferrer">UNDEUX SUPERBODY 料金</a></li>
        <li><a href="https://www.outline-gym.com/service" target="_blank" rel="noopener noreferrer">OUTLINE 料金・サービス</a></li>
      </ul>
      <p>2026年11月25日に確認しました。CREBIQの閉店告知は、公式サイトが応答しないため、Wayback Machineに保存された2025年3月17日の公式トップで確認したものです。</p>
    </ArticleShell>
  )
}
