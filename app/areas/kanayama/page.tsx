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
  title: '【2026年6月最新】金山の女性向けパーソナルジムおすすめ3選！料金比較',
  description: '【2026年6月最新】金山のおすすめ女性向けパーソナルジム3選を比較。リボーンマイセルフ・ビーコンセプト・ピラティス&ジム1to1など、料金・体験・特徴を各公式サイトで確認のうえ掲載しています。',
  keywords: '女性専用パーソナルジム,金山,愛知,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'リボーンマイセルフ 金山店',
    officialUrl: 'https://www.shapes-international.co.jp/store/kanayama/',
    price: 'ショートコース（2ヶ月16回）220,000円（税込・入会金22,000円）',
    trial: '無料カウンセリング随時',
    features: ['女性専用', 'トレーナー全員女性', '食事指導つき', 'パウダールーム完備'],
    description: '女性専用・トレーナーも全員女性のジム。食事指導つきで、個室パウダールーム・シャワー完備。ウェア・タオル無料貸出です。',
    access: '金山駅南口 徒歩3分',
    address: '名古屋市中区正木4-8-13 金山フクマルビル7F',
    options: ['ベーシックコース（3ヶ月24回）303,600円', 'チケット制あり', '入会金無料キャンペーンの時期あり'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '女性100%（女性専用）', purpose: ['ダイエット', 'ボディメイク', 'ブライダル'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['パウダールーム完備'] },
  },
  {
    name: 'ビーコンセプト 金山店',
    officialUrl: 'https://b-concept.tokyo/clublist/kanayama/',
    price: '太ももダイエットプログラム 18回 179,685円（税込）',
    trial: '無料カウンセリング＋体験トレーニングあり（当日入会で入会金無料）',
    features: ['女性専用', '完全個室', '脚やせ・下半身特化', '手ぶらOK'],
    description: '女性専用・完全個室。医師共同開発の下半身（脚やせ）特化メソッドと、3食食べる食事指導が特徴です。',
    access: '金山駅南口 徒歩6分',
    address: '名古屋市熱田区新尾頭1-10-6 ヴィラフローラ302',
    options: ['トライアルプラン4回44,000円'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '女性100%（女性専用）', purpose: ['太もも痩せ', '下半身痩せ', 'ダイエット'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['完全個室'] },
  },
  {
    name: 'ピラティス&ジム1to1 金山店',
    officialUrl: 'https://pilates.azure-collaboration.co.jp/',
    price: '都度払い 60分9,900円／ダイエットコース2ヶ月16回 179,685円（税込）',
    trial: '体験レッスン無料キャンペーン中（通常5,500円）',
    features: ['完全個室', 'マシンピラティス×ゆるトレ', '食事プラン提案', '手ぶらOK'],
    description: '「女性のためのボディメイク」特化の完全個室スタジオ（女性専用の明記はありません）。マシンピラティスとトレーニングを組み合わせ、食事プランの提案つきです。',
    access: 'JR金山駅南口 徒歩6分',
    address: '名古屋市熱田区新尾頭1-10-6 ヴィラフローラ302 Bフロア',
    options: ['40分6,600円／80分13,200円'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '公式サイトでご確認ください（女性向けコンセプト）', purpose: ['ボディメイク', 'ピラティス', '姿勢改善'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['完全個室'] },
  },
]

const faqs = [
  { question: '金山で女性専用のパーソナルジムはどこ？', answer: '公式サイトで女性専用（または女性専門）と確認できたのは、リボーンマイセルフ 金山店、ビーコンセプト 金山店です（2026年6月調査時点）。' },
  { question: '金山のパーソナルジムの料金の目安は？', answer: '公式サイト掲載の料金では、リボーンマイセルフ 金山店はショートコース（2ヶ月16回）220,000円（税込・入会金22,000円）。ビーコンセプト 金山店は太ももダイエットプログラム 18回 179,685円（税込）。ピラティス&ジム1to1 金山店は都度払い 60分9,900円／ダイエットコース2ヶ月16回 179,685円（税込）。キャンペーン等で変動するため最新は各公式サイトでご確認ください。' },
  { question: '金山駅から近いジムは？', answer: '駅徒歩3分以内・直結では、リボーンマイセルフ 金山店（金山駅南口 徒歩3分）があります。' },
  { question: '体験やカウンセリングは無料で受けられる？', answer: 'リボーンマイセルフ 金山店、ビーコンセプト 金山店、ピラティス&ジム1to1 金山店は無料の体験またはカウンセリングを実施しています（公式サイト記載・2026年6月時点）。有料体験でも当日入会で無料になるジムがあります。' },
  { question: '初心者でも大丈夫？', answer: 'はい。パーソナルジムはマンツーマン指導が基本のため、運動経験がなくても一人ひとりのレベルに合わせてメニューを組んでもらえます。不安な場合は体験時に運動歴を伝えて相談しましょう。' },
]

export default function KanayamaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-accent text-xs mb-2">更新日 2026年06月12日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              【2026年6月最新】金山の女性向けパーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選！料金比較
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light">
              <Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}
              <span className="text-brand-muted">金山</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">こんにちは、G-PersonalGym編集部です。</p>
            <p className="text-brand-muted leading-relaxed mb-6">「金山で女性が通いやすいパーソナルジムを探している」「駅近で通いやすいジムが知りたい」という方のために、金山エリアの女性向けパーソナルジム{gyms.length}選をまとめました。掲載情報はすべて各ジムの公式サイトで確認したものです（2026年6月時点）。</p>
            <div className="bg-ivory border-l-4 border-accent p-6 mb-8">
              <h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-brand-muted">
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>金山で女性向けのパーソナルジムを探している</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>駅近で通いやすいジムが良い</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>料金を比較して選びたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>体験を受けてから決めたい</span></li>
              </ul>
            </div>
          </div>
        </section>

        <AreaContext slug="kanayama" />

        <WhyWomenOnly area="金山" />

        <PriceComparisonTable gyms={gyms} areaName="金山" />

        <section className="py-16 bg-ivory" id="gyms">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">金山のおすすめ女性向けパーソナルジム{gyms.length}選</h2>
            <div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">目的別の選び方</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">女性専用にこだわる</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・リボーンマイセルフ 金山店</li><li className="text-brand-muted">・ビーコンセプト 金山店</li></ul>
              </div>
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">月額制で始めやすい</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・リボーンマイセルフ 金山店</li><li className="text-brand-muted">・ピラティス&ジム1to1 金山店</li></ul>
              </div>
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">完全個室でマンツーマン</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・ビーコンセプト 金山店</li><li className="text-brand-muted">・ピラティス&ジム1to1 金山店</li></ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-ivory">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-4 text-center">金山の料金一覧【2026年6月・公式サイト調べ】</h2>
            <p className="text-brand-light text-xs text-center mb-8">キャンペーン等により変動します。最新の料金は必ず各公式サイトでご確認ください。</p>
            <ul className="bg-white rounded-xl p-6 md:p-8 border border-line space-y-3">
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">リボーンマイセルフ 金山店</span><span className="text-brand-muted text-sm">ショートコース（2ヶ月16回）220,000円（税込・入会金22,000円）</span></li>
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">ビーコンセプト 金山店</span><span className="text-brand-muted text-sm">太ももダイエットプログラム 18回 179,685円（税込）</span></li>
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">ピラティス&ジム1to1 金山店</span><span className="text-brand-muted text-sm">都度払い 60分9,900円／ダイエットコース2ヶ月16回 179,685円（税込）</span></li>
            </ul>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">金山で選ぶ際の注意点</h2>
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
            <p className="text-brand-muted leading-relaxed mb-4">金山エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。掲載内容はすべて各ジムの公式サイトで確認した情報です（2026年6月時点）。</p>
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
      <RelatedAreas currentSlug="kanayama" />
      <SiteFooter />
    </>
  )
}
