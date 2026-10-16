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
  ...pageUrlMeta('/areas/daikanyama/'),
  title: '【2026年7月】代官山の女性専用パーソナルジムおすすめ1選｜料金比較',
  description: '【2026年4月】代官山のおすすめ女性専用パーソナルジム1選を比較しています。RIZAP WOMANの料金・口コミ・特徴を掲載しています。',
  keywords: '女性専用パーソナルジム,代官山,おすすめ,料金,比較,ダイエット,ボディメイク,高級',
}

const gyms = [
  {
    name: 'RIZAP WOMAN 代官山店',
    price: '2ヶ月16回 327,800円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', 'エステ付き', 'コラーゲンマシン', '完全個室', 'ラグジュアリー空間'],
    description: 'RIZAP初の女性専用ジムです。トレーニングに加え、コラーゲンマシンやエステも受けられる贅沢なプログラムです。代官山の高級感ある空間で「美しく痩せる」を実現しています。30日間の全額返金保証が付いています。',
    access: '東急東横線「代官山駅」徒歩3分',
    address: '東京都渋谷区代官山町（代官山駅徒歩3分）',
    popularPlan: { name: '美ボディメイクコース', description: 'トレーニング＋エステ＋コラーゲンマシンの美容総合プログラムです。', price: '2ヶ月16回 327,800円〜（税込）' },
    options: ['コラーゲンマシン', 'エステ施術', '30日間全額返金保証', 'ウェアレンタル無料', '食事指導付き'],
    userProfile: { ageRange: '30代〜50代が中心', genderRatio: '女性100%', purpose: ['美ボディメイク', 'ダイエット', 'エイジングケア', '美容'] },
    basicInfo: { hours: '7:00〜23:00', closed: '不定休', facilities: ['完全個室', 'エステルーム', 'コラーゲンマシン', 'シャワー'] },
  },
]

const faqs = [
  { question: '代官山で女性専用のパーソナルジムはありますか？', answer: 'はい、当サイトで代官山エリアに掲載しているのはRIZAP WOMAN 代官山店です。高級感のある空間が多いのが代官山の特徴です。' },
  { question: '代官山で高級なパーソナルジムはどこですか？', answer: 'RIZAP WOMAN代官山店はエステ・コラーゲンマシン付きの贅沢なプログラムを提供しています。' },
  { question: '代官山のパーソナルジムの料金相場はいくらですか？', answer: '当サイト掲載のRIZAP WOMAN 代官山店は2ヶ月16回 327,800円〜（税込）です。最新の料金は公式サイトでご確認ください。' },
  { question: '代官山でエステも受けられるジムはどこですか？', answer: 'RIZAP WOMAN代官山店では、トレーニングに加えてコラーゲンマシンやエステ施術も受けられます。美しく痩せたい方に最適です。' },
]

export default function DaikanyamaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-accent text-xs mb-2">更新日 2026年04月29日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              【2026年7月】代官山の女性専用パーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選・料金比較
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light">
              <Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}
              <span className="text-brand-muted">代官山</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">本ページはG-PersonalGym編集部が作成しています。</p>
            <p className="text-brand-muted leading-relaxed mb-6">「代官山で女性専用のパーソナルジムを探している」「高級感のある空間でトレーニングしたい」という方のために、代官山エリアでおすすめの女性向けパーソナルジム{gyms.length}選をまとめました。</p>
            <div className="bg-ivory border-l-4 border-accent p-6 mb-8">
              <h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-brand-muted">
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>代官山で女性専用パーソナルジムを探している</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>高級感のある空間でトレーニングしたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>エステも一緒に受けたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>料金を比較して選びたい</span></li>
              </ul>
            </div>
          </div>
        </section>

        <AreaContext slug="daikanyama" />

        <WhyWomenOnly area="代官山" />

        <PriceComparisonTable gyms={gyms} areaName="代官山" />

        <section className="py-16 bg-ivory" id="gyms">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">代官山のおすすめ女性向けパーソナルジム{gyms.length}選</h2>
            <div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-brand-text mb-6 text-center">まとめ</h2>
            <p className="text-brand-muted leading-relaxed mb-4">代官山エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。</p>
            <p className="text-brand-muted leading-relaxed mb-4">ラグジュアリーな美容体験ならRIZAP WOMANがおすすめです。</p>
            <p className="text-brand-muted leading-relaxed">まずは気になるジムの体験レッスンをご利用ください。</p>
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

        <section className="py-16 bg-gradient-to-r from-accent to-accent-dark text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-4">まずは無料カウンセリングから</h2>
            <p className="text-white/80 mb-8">複数のジムを比較し、ご自身に合ったジムをお選びください。</p>
            <Link href="/ranking/" className="inline-block bg-white text-accent px-10 py-4 text-sm font-bold rounded-full hover:bg-accent-tint transition-all">おすすめランキングを見る</Link>
          </div>
        </section>
        <IntentGuideLinks />
      </main>
      <RelatedAreas currentSlug="daikanyama" />
      <SiteFooter />
    </>
  )
}
