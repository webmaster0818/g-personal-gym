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
  ...pageUrlMeta('/areas/kinshicho/'),
  title: '錦糸町の女性専用パーソナルジムおすすめ2選｜料金比較',
  description: '錦糸町のおすすめ女性専用パーソナルジム2選を比較しています。ビーコンセプト・Apple GYMの料金・口コミ・特徴を掲載しています。',
  keywords: '女性専用パーソナルジム,錦糸町,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'ビーコンセプト 錦糸町店',
    officialUrl: 'https://b-concept.tokyo/clublist/kinshicho/',
    price: '2ヶ月18回 179,685円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '下半身特化', '医師×トレーナー共同開発', '託児所費用補助', '完全個室'],
    description: '医師とトレーナー共同開発の脚やせメソッドが人気です。錦糸町エリアで太もも痩せ・ヒップアップに特化したプログラムを提供しています。託児所費用の補助があります。',
    access: 'JR「錦糸町駅」徒歩6分',
    address: '東京都墨田区錦糸1-11-2 日本住宅錦糸町ビル501',
    popularPlan: { name: '太ももダイエットプログラム', description: '医師×トレーナー共同開発の脚やせメソッドです。75分×18回の集中プログラムです。', price: '2ヶ月18回 179,685円〜（税込）' },
    options: ['託児所費用補助（最大1,000円/回）', 'ウェア・タオル無料レンタル', '食事指導付き', '分割払い対応（月々5,545円〜）'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['太もも痩せ', 'ヒップアップ', '産後ダイエット', '美脚'] },
    basicInfo: { hours: '7:00〜23:00', closed: '公式サイトでご確認ください', facilities: ['完全個室', 'ロッカー', 'シャワー'] },
  },
  {
    name: 'Apple GYM 錦糸町店',
    price: '8回 49,280円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用プランあり', '海外式ボディメイク', '完全個室', 'リーズナブル', '芸能人御用達'],
    description: '海外式ボディメイクで女性らしいシルエットを目指します。芸能人やモデルも通う人気ジムです。8回49,280円〜のリーズナブルな料金設定で、初めての方も始めやすくなっています。',
    access: 'JR「錦糸町駅」徒歩4分',
    address: '東京都墨田区錦糸（錦糸町駅徒歩4分）',
    popularPlan: { name: '8回チケット', description: '海外式ボディメイクのパーソナルトレーニング8回です。', price: '8回 49,280円〜（税込）' },
    options: ['海外式ボディメイク', '完全個室', 'ウェアレンタル無料', '食事指導付き'],
    userProfile: { ageRange: '20代〜30代が中心', genderRatio: '女性100%', purpose: ['ボディメイク', 'ダイエット', 'ヒップアップ', '美脚'] },
    basicInfo: { hours: '7:00〜23:00', closed: '不定休', facilities: ['完全個室', 'ロッカー'] },
  },
]

const faqs = [
  { question: '錦糸町で女性専用のパーソナルジムはありますか？', answer: 'はい、錦糸町エリアにはビーコンセプトなどの女性専用パーソナルジムがあります。Apple GYMも女性専用プランを用意しています。' },
  { question: '錦糸町のパーソナルジムの料金相場はいくらですか？', answer: '当サイト掲載では、Apple GYM（8回 49,280円〜）からビーコンセプト（2ヶ月18回 179,685円〜）まで幅があります（いずれも税込）。' },
  { question: '錦糸町で下半身痩せに特化したジムはどこですか？', answer: 'ビーコンセプト錦糸町店が下半身特化で最もおすすめです。医師とトレーナーが共同開発した脚やせメソッドで太もも痩せ・ヒップアップを目指せます。' },
  { question: '錦糸町で子連れで通えるジムはどこですか？', answer: 'ビーコンセプトは託児所費用を最大1,000円/回補助してくれます。' },
]

export default function KinshichoPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-accent text-xs mb-2">更新日 2026年04月29日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              錦糸町の女性専用パーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選・料金比較
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light">
              <Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}
              <span className="text-brand-muted">錦糸町</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">本ページはG-PersonalGym編集部が作成しています。</p>
            <p className="text-brand-muted leading-relaxed mb-6">「錦糸町で女性専用のパーソナルジムを探している」「駅近で通いやすいジムが知りたい」という方のために、錦糸町エリアでおすすめの女性向けパーソナルジム{gyms.length}選をまとめました。</p>
            <div className="bg-ivory border-l-4 border-accent p-6 mb-8">
              <h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-brand-muted">
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>錦糸町で女性専用パーソナルジムを探している</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>駅近で通いやすいジムが良い</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>料金を比較して選びたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>子連れで通いたい</span></li>
              </ul>
            </div>
          </div>
        </section>

        <AreaContext slug="kinshicho" />

        <WhyWomenOnly area="錦糸町" />

        <PriceComparisonTable gyms={gyms} areaName="錦糸町" />

        <section className="py-16 bg-ivory" id="gyms">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">錦糸町のおすすめ女性向けパーソナルジム{gyms.length}選</h2>
            <div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-brand-text mb-6 text-center">まとめ</h2>
            <p className="text-brand-muted leading-relaxed mb-4">錦糸町エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。</p>
            <p className="text-brand-muted leading-relaxed mb-4">下半身痩せならビーコンセプト、リーズナブルに始めるならApple GYMがおすすめです。</p>
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
      <RelatedAreas currentSlug="kinshicho" />
      <SiteFooter />
    </>
  )
}
