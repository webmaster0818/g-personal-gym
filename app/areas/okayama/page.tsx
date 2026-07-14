import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { GymCard } from '@/components/GymCard'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { FAQSchema } from '@/components/FAQSchema'
import { RelatedAreas } from '@/components/RelatedAreas'
import { AreaContext } from '@/components/AreaContext'
import { WhyWomenOnly } from '@/components/WhyWomenOnly'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/areas/okayama/' },
  title: '【2026年7月最新】岡山の女性向けパーソナルジムおすすめ2選！料金比較',
  description: '【2026年7月最新】岡山のおすすめ女性向けパーソナルジム2選を比較。RITA-STYLE・FIREなど、料金・体験・特徴を各公式サイトで確認のうえ掲載しています。',
  keywords: '女性専用パーソナルジム,岡山,岡山,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'RITA-STYLE（リタスタイル）岡山駅前店',
    officialUrl: 'https://rita-style.co.jp/gym/okayama/ekimae/',
    price: '8回コース 98,000円（入会金は通常55,000円・キャンペーン変動）',
    trial: '無料カウンセリング・無料体験トレーニング実施中',
    features: ['女性会員約8割', '完全個室', '卒業後も続く食事サポート', '子連れ歓迎'],
    description: '女性専用ではありませんが女性会員約8割のダイエット特化ジム。完全個室マンツーマンで、卒業後も続く食事サポートつき。手ぶらOK・子連れ歓迎です。',
    access: '岡山駅徒歩3分・地下街で駅直結',
    address: '岡山市北区本町6-30 第一セントラルビル2号館6F',
    options: ['2週間コース24,500円〜', 'キャンペーンにより変動'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '男女共用（女性約8割）', purpose: ['ダイエット', 'ボディメイク'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['完全個室'] },
  },
  {
    name: 'FIRE FITNESS（ファイアフィットネス）岡山 島田本町店・伊福町店',
    officialUrl: 'https://www.firefitness-okayama.com/',
    price: 'パーソナルセッション1回 6,000円〜／Hard Plan12回 78,000円',
    trial: '体験セッション約60分 2,500円（LINE登録で無料）',
    features: ['女性約6割', '女性トレーナー在籍', '完全個室', '子連れOK'],
    description: '会員の約6割が女性で、女性トレーナーが在籍する完全個室マンツーマンジム。LINE食事サポートつきで子連れOK。岡山駅西口エリアに2店舗あります。',
    access: '岡山駅西口から徒歩5分（島田本町店）',
    address: '岡山市北区島田本町1-1-47 テクノ技研ビル2F',
    options: ['食事管理プラン月6,600円〜'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '男女共用（女性約6割）', purpose: ['ダイエット', 'ボディメイク'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['完全個室'] },
  },
]

const faqs = [
  { question: '岡山に女性専用のパーソナルジムはある？', answer: '2026年6月の調査時点では、岡山駅徒歩圏で「完全女性専用」を公式に掲げるジムは確認できませんでした。本ページでは女性比率が高い・女性トレーナー在籍など、女性が通いやすいジムを掲載しています。' },
  { question: '岡山のパーソナルジムの料金の目安は？', answer: '公式サイト掲載の料金では、RITA-STYLE（リタスタイル）岡山駅前店は8回コース 98,000円（入会金は通常55,000円・キャンペーン変動）。FIRE FITNESS（ファイアフィットネス）岡山 島田本町店・伊福町店はパーソナルセッション1回 6,000円〜／Hard Plan12回 78,000円。キャンペーン等で変動するため最新は各公式サイトでご確認ください。' },
  { question: '岡山駅から近いジムは？', answer: '駅徒歩3分以内・直結では、RITA-STYLE（リタスタイル）岡山駅前店（岡山駅徒歩3分・地下街で駅直結）があります。' },
  { question: '体験やカウンセリングは無料で受けられる？', answer: 'RITA-STYLE（リタスタイル）岡山駅前店、FIRE FITNESS（ファイアフィットネス）岡山 島田本町店・伊福町店は無料の体験またはカウンセリングを実施しています（公式サイト記載・2026年6月時点）。有料体験でも当日入会で無料になるジムがあります。' },
  { question: '子連れで通えるジムはある？', answer: 'RITA-STYLE（リタスタイル）岡山駅前店、FIRE FITNESS（ファイアフィットネス）岡山 島田本町店・伊福町店が子連れ対応（キッズスペース・ベビーサークル・託児補助など）を公式に案内しています。条件は各公式サイトでご確認ください。' },
  { question: '初心者でも大丈夫？', answer: 'はい。パーソナルジムはマンツーマン指導が基本のため、運動経験がなくても一人ひとりのレベルに合わせてメニューを組んでもらえます。不安な場合は体験時に運動歴を伝えて相談しましょう。' },
]

export default function OkayamaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-accent text-xs mb-2">更新日 2026年06月12日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              【2026年7月最新】岡山の女性向けパーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選！料金比較
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light">
              <Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}
              <span className="text-brand-muted">岡山</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">こんにちは、G-PersonalGym編集部です。</p>
            <p className="text-brand-muted leading-relaxed mb-6">「岡山で女性が通いやすいパーソナルジムを探している」「駅近で通いやすいジムが知りたい」という方のために、岡山エリアの女性向けパーソナルジム{gyms.length}選をまとめました。掲載情報はすべて各ジムの公式サイトで確認したものです（2026年6月時点）。</p>
            <div className="bg-accent-tint border border-line rounded-xl p-5 mb-8">
              <p className="text-brand-muted text-sm leading-relaxed">※調査時点で、岡山駅徒歩圏に「完全女性専用」を公式に確認できるパーソナルジムは見つかりませんでした（女性専用とされる店舗はあるものの公式サイトの接続不可等で確認できず）。本ページでは女性会員比率が高い・女性トレーナー在籍など、女性が通いやすいジムを掲載しています。</p>
            </div>
            <div className="bg-ivory border-l-4 border-accent p-6 mb-8">
              <h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-brand-muted">
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>岡山で女性向けのパーソナルジムを探している</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>駅近で通いやすいジムが良い</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>料金を比較して選びたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>体験を受けてから決めたい</span></li>
              </ul>
            </div>
          </div>
        </section>

        <AreaContext slug="okayama" />

        <WhyWomenOnly area="岡山" />

        <PriceComparisonTable gyms={gyms} areaName="岡山" />

        <section className="py-16 bg-ivory" id="gyms">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">岡山のおすすめ女性向けパーソナルジム{gyms.length}選</h2>
            <div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">目的別の選び方</h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">完全個室でマンツーマン</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・RITA-STYLE（リタスタイル）岡山駅前店</li><li className="text-brand-muted">・FIRE FITNESS（ファイアフィットネス）岡山 島田本町店・伊福町店</li></ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-ivory">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-4 text-center">岡山の料金一覧【2026年6月・公式サイト調べ】</h2>
            <p className="text-brand-light text-xs text-center mb-8">キャンペーン等により変動します。最新の料金は必ず各公式サイトでご確認ください。</p>
            <ul className="bg-white rounded-xl p-6 md:p-8 border border-line space-y-3">
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">RITA-STYLE（リタスタイル）岡山駅前店</span><span className="text-brand-muted text-sm">8回コース 98,000円（入会金は通常55,000円・キャンペーン変動）</span></li>
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">FIRE FITNESS（ファイアフィットネス）岡山 島田本町店・伊福町店</span><span className="text-brand-muted text-sm">パーソナルセッション1回 6,000円〜／Hard Plan12回 78,000円</span></li>
            </ul>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">岡山で選ぶ際の注意点</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="text-lg font-bold text-brand-text mb-3">出口・動線を事前に確認</h3>
                <p className="text-brand-muted leading-relaxed">同じ「駅徒歩◯分」でも、利用する路線や出口によって体感距離は変わります。通いたいジムがどの出口から近いかを事前に確認しましょう。</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="text-lg font-bold text-brand-text mb-3">体験は2〜3ジム比較を</h3>
                <p className="text-brand-muted leading-relaxed">トレーナーとの相性は継続のカギです。最低2〜3ジムの体験・カウンセリングに行って、雰囲気と指導スタイルを比較してから決めるのがおすすめです。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-ivory">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">体験時の持ち物ガイド</h2>
            <div className="bg-white rounded-xl p-8 border border-line">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-brand-text mb-4">必須の持ち物</h3>
                  <ul className="space-y-3 text-brand-muted text-sm">
                    <li>・<strong>動きやすいウェア</strong>（レンタルありのジムも多い）</li>
                    <li>・<strong>室内シューズ</strong>（レンタルありのジムも）</li>
                    <li>・<strong>水分（500ml以上）</strong></li>
                    <li>・<strong>フェイスタオル</strong></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-text mb-4">あると便利なもの</h3>
                  <ul className="space-y-3 text-brand-muted text-sm">
                    <li>・着替え（仕事帰りの場合）</li>
                    <li>・メイク道具（シャワー後用）</li>
                    <li>・目標の体型のイメージ写真</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">よくある質問</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-line rounded-xl overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-accent-tint transition">
                      <h3 className="font-bold text-brand-text pr-4 text-sm">Q{index + 1}. {faq.question}</h3>
                      <svg className="w-5 h-5 text-accent group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                    </summary>
                    <div className="px-5 pb-5 text-brand-muted leading-relaxed text-sm">{faq.answer}</div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-brand-text mb-6 text-center">まとめ</h2>
            <p className="text-brand-muted leading-relaxed mb-4">岡山エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。掲載内容はすべて各ジムの公式サイトで確認した情報です（2026年6月時点）。</p>
            <p className="text-brand-muted leading-relaxed">料金やキャンペーンは変動するため、気になるジムが見つかったら公式サイトで最新情報を確認し、まずは体験・カウンセリングを受けてみてください。</p>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-accent to-accent-dark text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-4">まずは無料カウンセリングから</h2>
            <p className="text-white/80 mb-8">複数のジムを比較して、あなたに合うジムを見つけましょう。</p>
            <Link href="/ranking/" className="inline-block bg-white text-accent px-10 py-4 text-sm font-bold rounded-full hover:bg-accent-tint transition-all">おすすめランキングを見る</Link>
          </div>
        </section>
      </main>
      <RelatedAreas currentSlug="okayama" />
      <SiteFooter />
    </>
  )
}
