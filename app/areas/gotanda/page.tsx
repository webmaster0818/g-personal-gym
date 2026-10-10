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
  ...pageUrlMeta('/areas/gotanda/'),
  title: '【2026年7月】五反田の女性専用パーソナルジムおすすめ1選！料金比較',
  description: '【2026年4月】五反田のおすすめ女性専用パーソナルジム1選を徹底比較。Reborn Myself・OUTLINE・24/7 Workoutなど人気ジムの料金・口コミ・特徴を網羅。',
  keywords: '女性専用パーソナルジム,五反田,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: '24/7 Workout 五反田店',
    price: '2ヶ月16回 257,400円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用プランあり', '完全個室', '深夜営業', '3食食べるダイエット', '全額返金保証'],
    description: '「3食食べて痩せる」がコンセプトの大手パーソナルジム。深夜24時まで営業で仕事帰りでも余裕。全額返金保証付きで安心して始められる。',
    access: 'JR「五反田駅」徒歩3分',
    address: '東京都品川区東五反田（五反田駅徒歩3分）',
    popularPlan: { name: '2ヶ月コース', description: '3食食べながら理想の体型を目指す。マンツーマン指導16回。', price: '2ヶ月16回 257,400円〜（税込）' },
    options: ['全額返金保証', 'ウェアレンタル無料', '深夜24時まで営業', '食事指導付き'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '体力向上', '健康維持'] },
    basicInfo: { hours: '7:00〜24:00', closed: '不定休', facilities: ['完全個室', 'シャワー', 'ロッカー'] },
  },
]

const faqs = [
  { question: '五反田で女性専用のパーソナルジムはありますか？', answer: 'はい、五反田エリアにはリボーンマイセルフ、OUTLINEなどの女性専用パーソナルジムがあります。24/7 Workoutも女性専用プランを用意しています。' },
  { question: '五反田のパーソナルジムの料金相場は？', answer: '五反田エリアの料金はエクササイズコーチ（月12,000円〜）から24/7 Workout（2ヶ月257,400円〜）まで幅広い選択肢があります。OUTLINE（184,800円〜）がコスパに優れています。' },
  { question: '五反田で深夜まで営業しているジムは？', answer: '24/7 Workout五反田店は深夜24時まで営業しています。仕事が遅くなっても通えるので、五反田エリアで働く方におすすめです。' },
  { question: '五反田で女性トレーナーのみのジムは？', answer: 'リボーンマイセルフ五反田店はトレーナーも全員女性。男性トレーナーに抵抗がある方でも安心して通えます。' },
]

export default function GotandaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-accent text-xs mb-2">更新日 2026年04月29日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              【2026年7月】五反田の女性専用パーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選！料金比較
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light">
              <Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}
              <span className="text-brand-muted">五反田</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">こんにちは、G-PersonalGym編集部です。</p>
            <p className="text-brand-muted leading-relaxed mb-6">「五反田で女性専用のパーソナルジムを探している」「仕事帰りに通えるジムが知りたい」という方のために、五反田エリアでおすすめの女性向けパーソナルジム{gyms.length}選をまとめました。</p>
            <div className="bg-ivory border-l-4 border-accent p-6 mb-8">
              <h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-brand-muted">
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>五反田で女性専用パーソナルジムを探している</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>仕事帰りに通いやすいジムが良い</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>女性トレーナーに指導してほしい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>料金を比較して選びたい</span></li>
              </ul>
            </div>
          </div>
        </section>

        <AreaContext slug="gotanda" />

        <WhyWomenOnly area="五反田" />

        <PriceComparisonTable gyms={gyms} areaName="五反田" />

        <section className="py-16 bg-ivory" id="gyms">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">五反田のおすすめ女性向けパーソナルジム{gyms.length}選</h2>
            <div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-brand-text mb-6 text-center">まとめ</h2>
            <p className="text-brand-muted leading-relaxed mb-4">五反田エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。</p>
            <p className="text-brand-muted leading-relaxed mb-4">女性トレーナー希望ならリボーンマイセルフ、コスパ重視ならOUTLINE、深夜まで通いたいなら24/7 Workoutがおすすめです。</p>
            <p className="text-brand-muted leading-relaxed">まずは気になるジムの体験レッスンに行ってみてください。</p>
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
            <p className="text-white/80 mb-8">複数のジムを比較して、あなたに合うジムを見つけましょう。</p>
            <Link href="/ranking/" className="inline-block bg-white text-accent px-10 py-4 text-sm font-bold rounded-full hover:bg-accent-tint transition-all">おすすめランキングを見る</Link>
          </div>
        </section>
        <IntentGuideLinks />
      </main>
      <RelatedAreas currentSlug="gotanda" />
      <SiteFooter />
    </>
  )
}
