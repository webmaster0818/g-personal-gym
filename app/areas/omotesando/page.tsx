import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { IntentGuideLinks } from '@/components/IntentGuideLinks'
import { GymCard } from '@/components/GymCard'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { FAQSchema } from '@/components/FAQSchema'
import { RelatedAreas } from '@/components/RelatedAreas'
import { AreaContext } from '@/components/AreaContext'
import { WhyWomenOnly } from '@/components/WhyWomenOnly'
import { pageUrlMeta } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  ...pageUrlMeta('/areas/omotesando/'),
  title: '表参道の女性専用パーソナルジムおすすめ2選｜料金比較',
  description: '表参道・青山のおすすめ女性専用パーソナルジム2選を比較しています。UNDEUX SUPERBODY・AGLAIAの料金・口コミ・特徴を掲載しています。',
  keywords: '女性専用パーソナルジム,表参道,青山,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'UNDEUX SUPERBODY 青山・表参道スタジオ',
    officialUrl: 'https://www.diet-undeux.jp/',
    price: 'スタンダードプラン月2回 21,300円〜（税込）',
    trial: '体験レッスン0円',
    features: ['女性専用', '駅徒歩1分', '初月宅配食30食無料（コミット）', 'チーム担当制', 'パウダールーム完備'],
    description: '表参道駅徒歩1分の最高立地です。トレーナーと管理栄養士のチーム担当制で総合的にサポートしています。スタンダードプラン（食事指導と簡易相談）とコミットプラン（栄養士による毎日の食事管理・初月は宅配食30食無料）から選べます。',
    access: '東京メトロ「表参道駅」徒歩1分',
    address: '東京都港区南青山（表参道駅徒歩1分）',
    popularPlan: { name: 'コミットプラン', description: 'トレーニング月6回と栄養士による毎日の食事管理を組み合わせた月額制プランです（全店共通価格）。', price: '月額79,200円' },
    options: ['コミットプランは初月宅配食30食無料（スタンダードは会員優待価格のオプション）', '管理栄養士の毎食指導', 'シャワー・パウダールーム完備', '基礎化粧品完備'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', '脚痩せ', 'ボディメイク', '美容'] },
    basicInfo: { hours: '8:00〜22:00', closed: '不定休', facilities: ['完全個室', 'シャワー', 'パウダールーム', '基礎化粧品'] },
  },
  {
    name: 'AGLAIA（アグライア）表参道',
    price: '月4回 52,800円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '美尻特化', '姿勢改善', '未経験者80%', 'オリジナルメソッド'],
    description: '表参道の女性専用パーソナルジムです。ゼロから美尻を作るオリジナルメソッドが特徴です。会員の80%がトレーニング未経験者で、初心者でも安心です。姿勢改善にも定評があります。',
    access: '東京メトロ「表参道駅」徒歩6分',
    address: '東京都港区南青山（表参道駅徒歩6分）',
    popularPlan: { name: '美尻メイクコース', description: 'オリジナルメソッドによる美尻・姿勢改善特化トレーニングです。', price: '月4回 52,800円〜（税込）' },
    options: ['美尻専用マシン完備', '姿勢改善プログラム', '食事アドバイス', 'ウェアレンタル'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['美尻', 'ヒップアップ', '姿勢改善', 'ボディメイク'] },
    basicInfo: { hours: '10:00〜21:00', closed: '不定休', facilities: ['完全個室', '美尻専用マシン', 'ロッカー'] },
  },
]

const faqs = [
  { question: '表参道で女性専用のパーソナルジムはどこがおすすめですか？', answer: 'UNDEUX SUPERBODY、AGLAIAを掲載しています。食事管理重視ならUNDEUX、美尻特化ならAGLAIAがおすすめです。' },
  { question: '表参道のパーソナルジムの料金相場はいくらですか？', answer: '表参道の女性向けパーソナルジムの2ヶ月コースは約18万〜22万円です。表参道は高級エリアですが、郊外と大きな差はありません。' },
  { question: '表参道駅から最も近いジムはどこですか？', answer: 'UNDEUX SUPERBODYが表参道駅から徒歩1分で最も近く、AGLAIAは徒歩6分です。' },
  { question: '美尻・ヒップアップに特化したジムはどこですか？', answer: 'AGLAIA（アグライア）は美尻専用マシン「グルーツビルダー」を完備し、ゼロから美尻を作るオリジナルメソッドを提供しています。' },
  { question: '体験は無料ですか？', answer: 'UNDEUX SUPERBODYは体験レッスン0円です。AGLAIAは無料カウンセリングを実施しています。' },
  { question: '初心者でも大丈夫ですか？', answer: 'はい、全ジムで初心者歓迎です。AGLAIAは会員の80%がトレーニング未経験者で、特に初心者フレンドリーです。' },
  { question: '表参道と青山のジムは同じエリアですか？', answer: '表参道駅は港区南青山に位置しており、「表参道」「青山」は基本的に同じエリアです。ジムの所在地は「南青山」となっている場合が多いものの、いずれも表参道駅から徒歩圏内です。' },
  { question: '食事指導が充実しているジムはどこですか？', answer: 'UNDEUX SUPERBODYは、スタンダードプランで食事指導と簡易相談、コミットプランで栄養士による毎日の食事管理（初月は宅配食30食無料）が受けられます。' },
]

export default function OmotesandoPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-accent text-xs mb-2">更新日 2026年04月13日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              表参道の女性専用パーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選・料金比較
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light">
              <Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}
              <span className="text-brand-muted">表参道</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">本ページはG-PersonalGym編集部が作成しています。</p>
            <p className="text-brand-muted leading-relaxed mb-6">「表参道・青山エリアで女性専用のパーソナルジムを探している」「おしゃれな街で美ボディを手に入れたい」という方のために、表参道エリアでおすすめの女性向けパーソナルジム{gyms.length}選をまとめました。</p>
            <div className="bg-ivory border-l-4 border-accent p-6 mb-8">
              <h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-brand-muted">
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>表参道で女性専用パーソナルジムを探している</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>美尻・美脚を目指したい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>料金を比較して選びたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>駅近のジムが良い</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>食事指導も受けたい</span></li>
              </ul>
            </div>
          </div>
        </section>

        <AreaContext slug="omotesando" />

        <WhyWomenOnly area="表参道" />

        <PriceComparisonTable gyms={gyms} areaName="表参道" />

        <section className="py-16 bg-ivory" id="gyms">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">表参道のおすすめ女性向けパーソナルジム{gyms.length}選</h2>
            <div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">目的別おすすめ</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">コスパ重視</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・UNDEUX SUPERBODY（スタンダードプラン月2回 21,300円〜）</li></ul>
              </div>
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">美尻・美脚特化</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・AGLAIA（美尻専用マシン）</li></ul>
              </div>
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">食事サポート重視</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・UNDEUX SUPERBODY（コミットプランは初月宅配食30食無料）</li></ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-ivory">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">表参道の料金相場</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="font-bold text-brand-text mb-3">2ヶ月集中コース</h3>
                <p className="text-3xl font-bold text-accent mb-2">18万〜22万円</p>
                <p className="text-sm text-brand-muted">表参道は高級なイメージがありますが、料金は都内の平均並みです。</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="font-bold text-brand-text mb-3">月額制</h3>
                <p className="text-3xl font-bold text-accent mb-2">5.3万円〜/月</p>
                <p className="text-sm text-brand-muted">AGLAIA 月4回52,800円〜です。部位特化型のジムは月額制が多い傾向です。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">表参道で選ぶ際の注意点</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="text-lg font-bold text-brand-text mb-3">高級エリアだが料金は都内平均並み</h3>
                <p className="text-brand-muted leading-relaxed">表参道・青山は高級イメージですが、パーソナルジムの料金は渋谷・新宿とほぼ同等です。エリアのイメージだけで判断せず、まずは無料カウンセリングをご利用ください。</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="text-lg font-bold text-brand-text mb-3">美容・ボディメイク特化のジムが多い</h3>
                <p className="text-brand-muted leading-relaxed">表参道エリアは美尻・美脚など美容特化のジムが多いのが特徴です。ダイエットだけでなくボディラインの美しさを追求したい方に最適です。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-ivory">
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
            <p className="text-brand-muted leading-relaxed mb-4">表参道エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。</p>
            <p className="text-brand-muted leading-relaxed mb-4">食事管理重視ならUNDEUX SUPERBODY、美尻ならAGLAIAがおすすめです。</p>
            <p className="text-brand-muted leading-relaxed">まずは気になるジムの体験レッスンをご利用ください。</p>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-accent to-accent-dark text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-4">まずは無料カウンセリングから</h2>
            <p className="text-white/80 mb-8">複数のジムを比較し、ご自身に合ったジムをお選びください。</p>
            <Link href="/ranking/" className="inline-block bg-white text-accent px-10 py-4 text-sm font-bold rounded-full hover:bg-accent-tint transition-all">おすすめランキングを見る</Link>
          </div>
        </section>
        <IntentGuideLinks />
      </main>
      <RelatedAreas currentSlug="omotesando" />
      <SiteFooter />
    </>
  )
}
