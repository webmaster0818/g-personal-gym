import type { Metadata } from 'next'
import { ArticleShell } from '@/components/ArticleShell'
import { GYM_SURVEY } from '@/data/gymSurvey'

export const metadata: Metadata = {
  title: '女性向けパーソナルジム実態調査2026｜102エリア546ジムを独自集計（女性専用率・体験無料率）',
  description:
    'woman-gym編集部が全国102エリア・のべ546ジムの公式情報を独自集計。女性専用を掲げるジムは46%、体験・カウンセリング無料は60%、完全個室28%、食事指導26%、子連れ対応17%。出典明記での引用を歓迎します。',
  alternates: { canonical: '/articles/josei-gym-data/' },
}

const S = GYM_SURVEY.stats

const faqs = [
  { question: 'この調査データの出典・調べ方は？', answer: `当サイト woman-gym.com が、全国${GYM_SURVEY.areas}エリアの各ページに掲載している実在ジム（のべ${GYM_SURVEY.listings}件）の公式サイト掲載情報を集計した独自調査です（${GYM_SURVEY.period}時点）。各ジムは公式サイトで実在・内容を確認しています。` },
  { question: '女性専用のジムはどのくらいありますか？', answer: `掲載のべ${GYM_SURVEY.listings}件のうち、公式に「女性専用」を掲げるジムは${S.womenOnly.count}件（${S.womenOnly.pct}%）でした。残りは男女共用ですが、その中にも「女性専用エリア」「女性トレーナー在籍」「会員の大半が女性」といった女性向けに強いジムが多く含まれます。` },
  { question: '体験は無料で受けられますか？', answer: `体験レッスンまたは無料カウンセリングを実施しているジムは${S.trialFree.pct}%でした。まず複数社の無料体験を受けて比較するのが、失敗しないジム選びの基本です。` },
  { question: 'データを引用してもいいですか？', answer: '出典として「woman-gym.com 調べ」と本ページへのリンクを明記いただければ、数値の引用を歓迎します。データの改変はご遠慮ください。' },
]

const related = [
  { href: '/articles/', label: '記事一覧を見る' },
  { href: '/guide/', label: '女性専用パーソナルジムの選び方' },
  { href: '/cost/', label: '料金相場を見る' },
  { href: '/ranking/', label: 'おすすめランキング' },
]

export default function Page() {
  return (
    <ArticleShell
      eyebrow="Original Survey"
      title="女性向けパーソナルジム実態調査2026"
      lead={`woman-gym編集部が全国${GYM_SURVEY.areas}エリア・のべ${GYM_SURVEY.listings}ジムの公式情報を独自集計。「女性専用率」「体験無料率」など、ジム選びの前に知っておきたい実態を数字で公開します。`}
      breadcrumb="女性向けジム実態調査2026"
      faqs={faqs}
      related={related}
    >
      <div className="callout">
        <p><strong>調査概要</strong>／対象: 全国{GYM_SURVEY.areas}エリア・のべ{GYM_SURVEY.listings}ジム掲載枠（各公式サイトで実在確認）／集計時点: {GYM_SURVEY.period}／調査主体: woman-gym.com編集部。割合は各ジムの掲載特徴（公式記載ベース）の集計で、同一ブランドが複数エリアに登場するため「のべ掲載数での割合」です。</p>
      </div>

      <h2>主要データ（5指標）</h2>
      <div className="data-grid">
        <div className="data-card"><div className="num">{S.womenOnly.pct}%</div><div className="label">女性専用を明記</div></div>
        <div className="data-card"><div className="num">{S.trialFree.pct}%</div><div className="label">体験・カウンセリング無料</div></div>
        <div className="data-card"><div className="num">{S.privateRoom.pct}%</div><div className="label">完全個室・個室対応</div></div>
        <div className="data-card"><div className="num">{S.mealGuide.pct}%</div><div className="label">食事指導あり</div></div>
        <div className="data-card"><div className="num">{S.kidsOk.pct}%</div><div className="label">子連れ・託児対応</div></div>
      </div>

      <h2>① 女性専用は約半数。残りも「女性向けに強い」が多い</h2>
      <p>掲載のべ{GYM_SURVEY.listings}件のうち、公式に「女性専用」を掲げるジムは<strong>{S.womenOnly.count}件（{S.womenOnly.pct}%）</strong>でした。「女性専用パーソナルジム」と検索すると多くの選択肢が出てきますが、実際には完全な女性専用は約半数で、残りは男女共用です。</p>
      <p>ただし男女共用のジムにも、<strong>女性専用エリアを設けている・女性トレーナーが在籍する・会員の6〜8割が女性</strong>といった「女性が通いやすい」ジムが多く含まれます。「女性専用」という看板だけでなく、こうした実態まで見て選ぶのが大切です。詳しい考え方は<a href="/articles/joseisenyo-vs-kyoyo/">女性専用と男女共用どっちを選ぶ？</a>でも解説しています。</p>

      <h2>② 体験・カウンセリングは6割が無料</h2>
      <p>体験レッスンまたは無料カウンセリングを実施しているジムは<strong>{S.trialFree.count}件（{S.trialFree.pct}%）</strong>。有料体験でも「当日入会で無料」とするケースが多く、<strong>実質的にはほとんどのジムを無料〜数千円で試せる</strong>のが実態です。「まず体験に行く」ハードルは想像以上に低いと言えます。</p>
      <div className="callout">
        <p><strong>編集部の推奨</strong>：体験が無料のジムが6割もある以上、いきなり1社に決めず<strong>2〜3社の無料体験を受けて比較する</strong>のが鉄則です。トレーナーとの相性・雰囲気・通いやすさは行ってみないと分かりません。</p>
      </div>

      <h2>③ 完全個室28%・食事指導26%・子連れ対応17%</h2>
      <p>設備・サービス面では次のような結果でした。</p>
      <table>
        <thead><tr><th>項目</th><th>掲載数</th><th>割合</th><th>こんな人に</th></tr></thead>
        <tbody>
          <tr><td>完全個室・個室対応</td><td>{S.privateRoom.count}件</td><td>{S.privateRoom.pct}%</td><td>人目が気になる・集中したい</td></tr>
          <tr><td>食事指導あり</td><td>{S.mealGuide.count}件</td><td>{S.mealGuide.pct}%</td><td>ダイエット目的・自己流に不安</td></tr>
          <tr><td>子連れ・託児対応</td><td>{S.kidsOk.count}件</td><td>{S.kidsOk.pct}%</td><td>産後・小さな子どもがいる</td></tr>
        </tbody>
      </table>
      <p>子連れ対応は17%とまだ少数派のため、産後で子連れ通いを考えている方は<strong>対応ジムを早めに絞り込む</strong>のが効率的です。詳しくは<a href="/articles/sango-diet/">産後ダイエット向けパーソナルジムの選び方</a>をご覧ください。</p>

      <h2>データから言える「賢い選び方」</h2>
      <ol>
        <li><strong>体験は無料が当たり前</strong>。6割が無料なので、2〜3社を比較してから決める</li>
        <li><strong>「女性専用」だけで絞らない</strong>。女性専用エリア・女性トレーナーありの共用ジムも候補に</li>
        <li><strong>必須条件（子連れ・完全個室など）は少数派</strong>。該当する人は対応ジムを先に絞る</li>
      </ol>

      <h2>📊 データの引用について</h2>
      <p>本調査の数値は、<strong>出典の明記</strong>を条件に引用いただけます（例:「出典: woman-gym.com 女性向けパーソナルジム実態調査2026」＋本ページへのリンク）。データの改変や、誤解を招く切り取りはご遠慮ください。取材・データに関するお問い合わせは各エリアページ下部の窓口からどうぞ。</p>
    </ArticleShell>
  )
}
