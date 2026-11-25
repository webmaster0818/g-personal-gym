import { pageUrlMeta } from '@/lib/seo'
import type { Metadata } from 'next'
import { ArticleShell } from '@/components/ArticleShell'
import { GYM_SURVEY } from '@/data/gymSurvey'

// 出典（2026年11月20日確認）
// - 厚生労働省「健康づくりのための身体活動・運動ガイド2023」 https://www.mhlw.go.jp/content/001194020.pdf
//   筋力トレーニングについて：個別性の原則（一律の目標回数ではなく個人に合った目標）、漸進性過負荷の原則、休息日、
//   Q&A：標準的な運動プログラム（マシンは最大挙上重量の60〜80%で8〜12回）をベースに個人に合った内容で、必要に応じて運動指導の専門家に相談、
//        息をこらえない、体型改善などが目的の場合は目的に合ったプログラム
// - OUTLINE 料金ページ https://www.outline-gym.com/service ：16回 フルサポート184,800円（1回11,550円）・通常220,000円（1回13,750円）、女性専用・完全個室のマンツーマン、食事指導・トレーニングのアドバイス
// - かたぎり塾 料金ページ https://katagirijuku.jp/price ：体験60分無料、月4プラン税込〜33,000円（1回60分あたり税込〜8,250円）、月8プラン税込59,400円（同7,425円）、完全マンツーマン・完全個室（一部店舗除く）、トレーニング合間の食事の相談
// - エクササイズコーチ 公式トップ https://exercisecoach.co.jp/ ：1回20分、AIマシンで負荷設定、スタンダード月4回 月額17,600円（1回あたり約4,400円・税込）、入会金0円
// - 当サイト独自調査（data/gymSurvey.ts・2026年6月集計）

export const metadata: Metadata = {
  title: 'パーソナルトレーニングとは｜1対1の指導の中身と、公式料金から計算した1回あたりの費用',
  description:
    'パーソナルトレーニングとは、トレーナーが1対1で体力や目的に合わせて運動を指導する方法です。厚労省ガイド2023の「個別性の原則」との関係、主要3ジムの公式料金から見た1回あたりの費用（約4,400〜13,750円）、当サイトの全国調査の数字を整理しました。',
  ...pageUrlMeta('/articles/personal-training/'),
}

const gyms = [
  { name: 'OUTLINE', url: 'https://www.outline-gym.com/service', style: 'コース制（16・24・32回）／女性専用・完全個室', time: '料金ページに記載なし', perLow: 11550, perHigh: 13750, note: '16回：フルサポート184,800円・通常220,000円' },
  { name: 'かたぎり塾', url: 'https://katagirijuku.jp/price', style: '月額制（月4・月8回）／完全マンツーマン', time: '60分', perLow: 7425, perHigh: 8250, note: '月8回59,400円・月4回〜33,000円' },
  { name: 'エクササイズコーチ', url: 'https://exercisecoach.co.jp/', style: '月額制／AIマシンで負荷を設定', time: '20分', perLow: 4400, perHigh: 4400, note: 'スタンダード月4回17,600円' },
]
const minPer = Math.min(...gyms.map((g) => g.perLow))
const maxPer = Math.max(...gyms.map((g) => g.perHigh))
const yen = (n: number) => n.toLocaleString()
const s = GYM_SURVEY.stats

const faqs = [
  {
    question: 'パーソナルトレーニングとは何ですか？',
    answer:
      'トレーナーが利用者1人に付いて、体力・目的・体の状態に合わせたメニューを組み、フォームや負荷を確認しながら運動を指導する方法です。ジムによっては食事の相談や記録の確認も含まれます。',
  },
  {
    question: '一般的なジムやグループレッスンとの違いは何ですか？',
    answer:
      '一般的なジムは器具や施設を自分で使う形、グループレッスンは複数人で同じ内容を行う形です。パーソナルトレーニングは1対1のため、内容を個人に合わせられる点が違います。厚生労働省のガイド2023も、筋トレは個人の特性や能力に合わせて行う「個別性の原則」が重要としています。',
  },
  {
    question: '1回の時間と料金はどのくらいですか？',
    answer:
      `公式サイトで確認した3社では、1回の時間はかたぎり塾が60分、エクササイズコーチが20分です。1回あたりの料金は公式の表記で約${yen(minPer)}円〜${yen(maxPer)}円（税込）と、形式によって3倍ほどの差があります（2026年11月20日確認）。`,
  },
  {
    question: '初心者でも受けられますか？',
    answer:
      'ガイド2023は、標準的な運動プログラムをベースに個人に合った内容で行い、必要に応じて運動指導の専門家に相談することを勧めています。多くのジムでは無料または低価格の体験があり、当サイトの調査では掲載ジムの60%が体験・カウンセリング無料でした。',
  },
]

const related = [
  { href: '/articles/futsu-gym-chigai/', label: 'パーソナルジムと普通のジムの違い' },
  { href: '/guide/', label: '女性専用パーソナルジムの選び方' },
  { href: '/cost/', label: '女性専用パーソナルジムの料金相場' },
  { href: '/articles/taiken-nagare/', label: '無料体験・カウンセリングの流れ' },
  { href: '/articles/joseisenyo-vs-kyoyo/', label: '女性専用と男女共用の違い' },
  { href: '/articles/jijuu-training/', label: '自重トレーニングとは' },
  { href: '/articles/shokuji-shidou/', label: 'パーソナルジムの食事指導はどこまで？' },
]

export default function Page() {
  return (
    <ArticleShell
      eyebrow="Personal Training"
      title="パーソナルトレーニングとは｜1対1の指導の中身と1回あたりの費用"
      updated="2026年11月20日"
      lead="パーソナルトレーニングとは、トレーナーが1対1で、利用者の体力や目的に合わせてメニューを組み、フォームと負荷を確認しながら運動を指導する方法です。厚生労働省のガイド2023は、筋トレは個人の特性や能力に合わせて行う「個別性の原則」が重要とし、必要に応じて運動指導の専門家に相談することを勧めています。このページでは、指導の中身と、公式料金から計算した1回あたりの費用を整理しています。"
      breadcrumb="パーソナルトレーニングとは"
      faqs={faqs}
      related={related}
    >
      <h2>パーソナルトレーニングで行うこと</h2>
      <ul>
        <li><strong>目的と体の確認</strong>：初回のカウンセリングで、目標・運動歴・体の不安を聞き取ります。</li>
        <li><strong>個人に合わせたメニュー</strong>：同じ回数を全員に課すのではなく、体力に合わせて種目と負荷を決めます。</li>
        <li><strong>フォームと負荷の調整</strong>：その場で動きを確認し、慣れに合わせて負荷を上げていきます。</li>
        <li><strong>食事や生活の相談</strong>：食事指導や相談を料金に含めるジムもあります（内容はジムにより異なります）。</li>
      </ul>

      <h2>ガイド2023の考え方との関係</h2>
      <p>
        厚生労働省「健康づくりのための身体活動・運動ガイド2023」の「筋力トレーニングについて」には、パーソナルトレーニングの仕組みと重なる考え方が書かれています。
      </p>
      <table>
        <thead>
          <tr>
            <th>ガイド2023の記載</th>
            <th>パーソナルトレーニングでの対応</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>個人の特性や能力に合わせて行う「個別性の原則」。一律の目標回数ではなく個人に合った目標を設定する</td><td>1対1でメニューを組み、回数や重さを個別に決める</td></tr>
          <tr><td>日常生活以上の負荷で行い、少しずつ負荷を高める「漸進性過負荷の原則」。休息日も重要</td><td>前回の記録をもとに負荷を上げる・通う間隔を決める</td></tr>
          <tr><td>マシンでは最大挙上重量の60〜80%で8〜12回をベースに、個人に合った内容で行う。必要に応じて運動指導の専門家に相談する</td><td>トレーナーが重さと回数を見極める</td></tr>
          <tr><td>血圧の急な上昇を抑えるため、息をこらえないように注意する</td><td>呼吸やフォームをその場で確認する</td></tr>
          <tr><td>推奨事項は健康の維持・増進の目安で、体型改善などが目的の場合は目的に合ったプログラムを行う</td><td>減量・ボディメイクなど目的別にプログラムを組む</td></tr>
        </tbody>
      </table>
      <p>出典：厚生労働省「健康づくりのための身体活動・運動ガイド2023」（筋力トレーニングについて・よくある疑問と回答、2026年11月20日確認）。</p>

      <h2>1回の時間と1回あたりの費用（公式料金・当サイト確認）</h2>
      <table>
        <thead>
          <tr>
            <th>ジム</th>
            <th>形式</th>
            <th>1回の時間</th>
            <th>1回あたり（税込）</th>
            <th>公式の料金例</th>
          </tr>
        </thead>
        <tbody>
          {gyms.map((g) => (
            <tr key={g.name}>
              <td><a href={g.url} target="_blank" rel="noopener noreferrer">{g.name}</a></td>
              <td>{g.style}</td>
              <td>{g.time}</td>
              <td>{g.perLow === g.perHigh ? `約${yen(g.perLow)}円` : `${yen(g.perLow)}〜${yen(g.perHigh)}円`}</td>
              <td>{g.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        2026年11月20日に各社の公式サイトで確認した金額です（1回あたりは公式の表記）。同じ「パーソナルトレーニング」でも、1回あたりは約{yen(minPer)}円から{yen(maxPer)}円まで約{(maxPer / minPer).toFixed(1)}倍の差があります。1回の時間（20分と60分）、コース制か月額制か、食事指導や施設の内容が違うためです。かたぎり塾とエクササイズコーチは男女とも利用でき、かたぎり塾には女性専門店があります。入会金や継続の条件も含めた総額は<a href="/cost/">料金相場のページ</a>で比較しています。
      </p>

      <h2>女性向けパーソナルジムの実態（当サイト調査）</h2>
      <div className="data-grid">
        <div className="data-card"><div className="num">{s.womenOnly.pct}%</div><div className="label">女性専用を明記</div></div>
        <div className="data-card"><div className="num">{s.privateRoom.pct}%</div><div className="label">完全個室・個室対応</div></div>
        <div className="data-card"><div className="num">{s.mealGuide.pct}%</div><div className="label">食事指導あり</div></div>
        <div className="data-card"><div className="num">{s.trialFree.pct}%</div><div className="label">体験・カウンセリング無料</div></div>
      </div>
      <p>
        出典：{GYM_SURVEY.source}（{GYM_SURVEY.period}集計）。同じブランドが複数のエリアに掲載されるため、のべ掲載数での割合です。個室の有無や食事指導の有無はジムによって異なるため、体験の際に確認してください。
      </p>
      <div className="callout">
        <p>
          はじめて利用する場合は、体験やカウンセリングで、1回の時間・料金の総額・指導の内容を確かめてから決める方法をおすすめします。<a href="/articles/taiken-nagare/">無料体験・カウンセリングの流れ</a>と<a href="/guide/">女性専用パーソナルジムの選び方</a>もあわせてご覧ください。
        </p>
      </div>

      <h2>出典</h2>
      <ul>
        <li><a href="https://www.mhlw.go.jp/content/001194020.pdf" target="_blank" rel="noopener noreferrer">厚生労働省「健康づくりのための身体活動・運動ガイド2023」</a>（筋力トレーニングについて）</li>
        <li><a href="https://www.outline-gym.com/service" target="_blank" rel="noopener noreferrer">OUTLINE 公式サイト 料金ページ</a></li>
        <li><a href="https://katagirijuku.jp/price" target="_blank" rel="noopener noreferrer">かたぎり塾 公式サイト 料金ページ</a></li>
        <li><a href="https://exercisecoach.co.jp/" target="_blank" rel="noopener noreferrer">エクササイズコーチ 公式サイト</a></li>
      </ul>
      <p>いずれも2026年11月20日に確認しました。料金はキャンペーンや店舗により変わるため、最新の金額は各公式サイトでご確認ください。</p>
    </ArticleShell>
  )
}
