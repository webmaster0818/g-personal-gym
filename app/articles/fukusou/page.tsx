import { pageUrlMeta } from '@/lib/seo'
import type { Metadata } from 'next'
import { ArticleShell } from '@/components/ArticleShell'

// 出典（2026年11月21日確認）
// - 厚生労働省「健康づくりのための身体活動・運動ガイド2023」 https://www.mhlw.go.jp/content/001194020.pdf
//   INFORMATION 4 身体活動・運動を安全に行うためのポイント「運動時の服装や靴については、快適で安全に運動できる適切なものを身につけることを勧めます」
// - UNDEUX SUPERBODY よくある質問 https://www.diet-undeux.jp/faq/
//   体験利用の際の用意＝ウェア、シューズ、靴下・お水・タオル／無料レンタルのウェア、シューズ、靴下、タオルあり（申込時などにサイズを伝える）
// - ビーコンセプト よくある質問 https://b-concept.tokyo/faq/ ／コース・料金 https://b-concept.tokyo/course/
//   FAQ：ウエア上下は最初に持参したものを預かり、毎回洗濯して保管／ソックス・シューズ・タオルは一式無料レンタル（基本的に毎回手ぶら）
//   コース：タオル・ウェア・シューズ・ソックス等すべて無料・手ぶらでOK
// - OUTLINE サービス https://www.outline-gym.com/service ／トップ https://www.outline-gym.com/
//   ウェア・タオルのレンタル（各回のトレーニングで無料）、手ぶらOK。シューズの貸出の記載は確認できず
// - リボーンマイセルフ よくある質問 https://www.shapes-international.co.jp/faq ／トップ https://www.shapes-international.co.jp/
//   FAQ：トレーニング時はウェア、タオルなどを無料貸出・お水のみ持参／トップ（無料体験の流れ）：ウェア、シューズ、タオルはすべて無料でレンタル
// - かたぎり塾 トップ https://katagirijuku.jp/ ／初めての方へ https://katagirijuku.jp/first-time
//   ウェア・シューズ・タオル無料貸出、持ち物は何も必要ない（ウェアやシューズや飲み物は全て用意）
// - エクササイズコーチ よくある質問 https://exercisecoach.co.jp/faq/
//   ウェア、ズボン、靴下、タオルは無料レンタル・ウォーターサーバー無料／靴22.5〜30.0cm・ウェアは男女共有サイズS〜3L／自分のウェアも可／シャワーなし

export const metadata: Metadata = {
  title: 'パーソナルトレーニングの服装｜ウェア・シューズの無料貸出を6ブランドの公式で比較',
  description:
    'パーソナルトレーニングの服装は、動きやすいウェア・室内用のシューズ・靴下・タオルが基本です。女性専用4ブランドと男女共用2ブランドの公式サイトを確認したところ、6ブランドすべてにウェアの無料貸出（ビーコンセプトは持参品の預かり）があり、シューズの貸出を明記しているのは5ブランドでした。',
  ...pageUrlMeta('/articles/fukusou/'),
}

type Row = {
  name: string
  women: string
  wear: string
  shoes: string
  other: string
  bring: string
  sources: { href: string; label: string }[]
}

const rows: Row[] = [
  {
    name: 'UNDEUX SUPERBODY',
    women: '女性専用',
    wear: '無料レンタル',
    shoes: '無料レンタル',
    other: '靴下・タオルも無料レンタル',
    bring: '体験時の用意として、ウェア・シューズ・靴下・お水・タオルを挙げたうえで、無料レンタルがあるため申込時などにサイズを伝えるよう案内',
    sources: [{ href: 'https://www.diet-undeux.jp/faq/', label: 'よくある質問' }],
  },
  {
    name: 'ビーコンセプト',
    women: '女性専用',
    wear: '最初に持参した上下を預かり、毎回洗濯して保管',
    shoes: '無料レンタル',
    other: 'ソックス・タオルも無料レンタル',
    bring: '基本的には毎回手ぶらで来店できると案内（コース・料金ページでもウェア・シューズ・ソックス・タオルを無料の項目に記載）',
    sources: [
      { href: 'https://b-concept.tokyo/faq/', label: 'よくある質問' },
      { href: 'https://b-concept.tokyo/course/', label: 'コース・料金' },
    ],
  },
  {
    name: 'OUTLINE',
    women: '女性専用',
    wear: '無料レンタル（各回）',
    shoes: '記載を確認できず',
    other: 'タオルも無料レンタル',
    bring: 'トップページに「手ぶらOK」と記載',
    sources: [
      { href: 'https://www.outline-gym.com/service', label: 'サービス' },
      { href: 'https://www.outline-gym.com/', label: 'トップ' },
    ],
  },
  {
    name: 'リボーンマイセルフ',
    women: '女性専用',
    wear: '無料貸出',
    shoes: '無料レンタル（無料体験の案内）',
    other: 'タオルも無料貸出',
    bring: 'トレーニング時はお水のみ持参するよう案内',
    sources: [
      { href: 'https://www.shapes-international.co.jp/faq', label: 'よくある質問' },
      { href: 'https://www.shapes-international.co.jp/', label: 'トップ' },
    ],
  },
  {
    name: 'かたぎり塾',
    women: '男女とも利用可',
    wear: '無料貸出',
    shoes: '無料貸出',
    other: 'タオルも無料貸出',
    bring: '持ち物は何も必要なく、ウェア・シューズ・飲み物は全て用意していると案内',
    sources: [
      { href: 'https://katagirijuku.jp/', label: 'トップ' },
      { href: 'https://katagirijuku.jp/first-time', label: '初めての方へ' },
    ],
  },
  {
    name: 'エクササイズコーチ',
    women: '男女とも利用可',
    wear: '無料レンタル（上下とも・男女共有サイズS〜3L）',
    shoes: '用意あり（22.5〜30.0cm）',
    other: '靴下・タオルも無料レンタル、ウォーターサーバー無料。シャワーはなし',
    bring: 'ウェアに指定はなく、持参したウェアでもトレーニングできると案内',
    sources: [{ href: 'https://exercisecoach.co.jp/faq/', label: 'よくある質問' }],
  },
]

const shoesListed = rows.filter((r) => !r.shoes.startsWith('記載を確認できず')).length

const faqs = [
  {
    question: 'パーソナルトレーニングには何を着ていけばよいですか？',
    answer:
      '動きやすいトレーニングウェア（上下）、室内用のシューズ、靴下、タオル、飲み物が基本です。厚生労働省の「健康づくりのための身体活動・運動ガイド2023」も、運動時の服装や靴は快適で安全に運動できる適切なものを身につけるよう勧めています。ただし、女性専用パーソナルジムではウェアやシューズを無料で貸し出すところが多いため、通う予定のジムの貸出品目を先に確認すると、用意するものを減らせます。',
  },
  {
    question: '手ぶらで行けるパーソナルジムはどこですか？',
    answer: `当サイトが公式サイトを確認した6ブランドでは、UNDEUX SUPERBODY・ビーコンセプト・OUTLINE・リボーンマイセルフ・かたぎり塾・エクササイズコーチのいずれもウェアの無料貸出（ビーコンセプトは最初に持参した上下の預かり）があり、シューズの貸出を明記しているのは${shoesListed}ブランドでした（2026年11月21日確認）。貸出の内容は変わることがあるため、予約時にご確認ください。`,
  },
  {
    question: '自分のウェアを着てもよいですか？',
    answer:
      'エクササイズコーチの公式サイトには、ウェアに指定はなく持参したウェアでもトレーニングできると記載されています。ビーコンセプトは、最初に持参したウェアの上下を預かり、毎回洗濯して保管する方式です。そのほかのブランドで持参したウェアを使いたい場合は、予約時にご確認ください。',
  },
  {
    question: '体験のときも服装の用意は必要ですか？',
    answer:
      'UNDEUX SUPERBODYの公式サイトは、体験利用の際の用意としてウェア・シューズ・靴下・お水・タオルを挙げ、無料レンタルを使う場合は申込時などにサイズを伝えるよう案内しています。リボーンマイセルフは無料体験の案内で、ウェア・シューズ・タオルはすべて無料でレンタルできるとしています。',
  },
]

const related = [
  { href: '/articles/taiken-nagare/', label: '無料体験・カウンセリングの流れと持ち物' },
  { href: '/articles/personal-training/', label: 'パーソナルトレーニングとは' },
  { href: '/articles/private-kanshitsu/', label: '完全個室・プライベートジムで選ぶ' },
  { href: '/articles/joseisenyo-vs-kyoyo/', label: '女性専用と男女共用、どっちを選ぶ？' },
  { href: '/articles/tsudobarai/', label: 'パーソナルジムの都度払い・チケット制' },
]

export default function Page() {
  return (
    <ArticleShell
      eyebrow="What to Wear"
      title="パーソナルトレーニングの服装｜ウェア・シューズの貸出と持ち物"
      updated="2026年11月21日"
      lead={`パーソナルトレーニングの服装は、動きやすいウェアの上下、室内用のシューズ、靴下、タオルが基本です。厚生労働省の「健康づくりのための身体活動・運動ガイド2023」も、運動時の服装や靴は快適で安全に運動できるものを身につけるよう勧めています。ただし、女性専用パーソナルジムの多くはウェアやシューズを無料で貸し出しています。当サイトに掲載している6ブランドの公式サイトを確認したところ、すべてにウェアの無料貸出（ビーコンセプトは持参品の預かり）があり、シューズの貸出を明記しているのは${shoesListed}ブランドでした。`}
      breadcrumb="パーソナルトレーニングの服装"
      faqs={faqs}
      related={related}
    >
      <h2>6ブランドのウェア・シューズの貸出（公式・2026年11月21日確認）</h2>
      <p>
        女性専用の4ブランドと、男女とも利用できる2ブランドの公式サイト（よくある質問・サービス・料金ページ）で、貸出品と持ち物の案内を確認しました。「記載を確認できず」は、貸出がないという意味ではなく、公式サイトで記載を見つけられなかったものです。
      </p>
      <table>
        <thead>
          <tr>
            <th>ブランド</th>
            <th>ウェア</th>
            <th>シューズ</th>
            <th>そのほか</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name}>
              <td>
                {r.name}
                <br />
                <small>{r.women}</small>
              </td>
              <td>{r.wear}</td>
              <td>{r.shoes}</td>
              <td>{r.other}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>持ち物についての各社の案内</h2>
      <ul>
        {rows.map((r) => (
          <li key={r.name}>
            <strong>{r.name}</strong>：{r.bring}（
            {r.sources.map((s, i) => (
              <span key={s.href}>
                {i > 0 ? '・' : ''}
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              </span>
            ))}
            ）
          </li>
        ))}
      </ul>
      <div className="callout">
        <p>
          6ブランドのうち、ウェアを毎回貸し出す方式が5ブランド、持参したウェアを預かって洗濯・保管する方式がビーコンセプトの1ブランドです。シューズは、OUTLINE以外の{shoesListed}ブランドが貸出を明記しています。OUTLINEに通う場合は、シューズの要否を予約時に確認すると安心です。
        </p>
      </div>

      <h2>自分で用意する場合に確認すること</h2>
      <ol>
        <li><strong>貸出品目とサイズ</strong>：同じ「手ぶらOK」でも、シューズや靴下まで含むかはブランドで異なります。UNDEUX SUPERBODYのように、申込時にサイズを伝えるよう案内しているところもあります。エクササイズコーチの貸出シューズは22.5〜30.0cmです。</li>
        <li><strong>動きやすさと安全</strong>：ガイド2023は、快適で安全に運動できる服装と靴を勧めています。スクワットなど脚を大きく曲げる種目もあるため、伸び縮みする素材で、動いたときに裾や袖が引っかからないものが向いています。</li>
        <li><strong>汗をかいた後の着替え</strong>：エクササイズコーチの公式サイトには、シャワーはないと記載されています（室温を低く設定し、タオルと汗拭きシートを用意）。シャワーの有無は店舗で異なる場合があるため、仕事帰りなどに通う方は事前にご確認ください。</li>
      </ol>
      <p>
        初回の体験で当日の流れや所要時間も確認したい方は、<a href="/articles/taiken-nagare/">無料体験・カウンセリングの流れと持ち物</a>をあわせてご覧ください。人目が気になる方は<a href="/articles/private-kanshitsu/">完全個室のジムの選び方</a>も参考になります。
      </p>

      <h2>出典</h2>
      <ul>
        <li><a href="https://www.mhlw.go.jp/content/001194020.pdf" target="_blank" rel="noopener noreferrer">厚生労働省「健康づくりのための身体活動・運動ガイド2023」</a>（INFORMATION 4 身体活動・運動を安全に行うためのポイント）</li>
        <li><a href="https://www.diet-undeux.jp/faq/" target="_blank" rel="noopener noreferrer">UNDEUX SUPERBODY「よくある質問」</a></li>
        <li><a href="https://b-concept.tokyo/faq/" target="_blank" rel="noopener noreferrer">ビーコンセプト「よくある質問」</a>・<a href="https://b-concept.tokyo/course/" target="_blank" rel="noopener noreferrer">「コース・料金」</a></li>
        <li><a href="https://www.outline-gym.com/service" target="_blank" rel="noopener noreferrer">OUTLINE「サービス」</a>・<a href="https://www.outline-gym.com/" target="_blank" rel="noopener noreferrer">トップページ</a></li>
        <li><a href="https://www.shapes-international.co.jp/faq" target="_blank" rel="noopener noreferrer">リボーンマイセルフ「よくある質問」</a>・<a href="https://www.shapes-international.co.jp/" target="_blank" rel="noopener noreferrer">トップページ</a></li>
        <li><a href="https://katagirijuku.jp/" target="_blank" rel="noopener noreferrer">かたぎり塾 トップページ</a>・<a href="https://katagirijuku.jp/first-time" target="_blank" rel="noopener noreferrer">「初めての方へ」</a></li>
        <li><a href="https://exercisecoach.co.jp/faq/" target="_blank" rel="noopener noreferrer">エクササイズコーチ「よくある質問」</a></li>
      </ul>
      <p>いずれも2026年11月21日に確認しました。貸出品や案内は変わることがあるため、ご利用前に公式サイトにて最新情報をご確認ください。</p>
    </ArticleShell>
  )
}
