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
  title: '【2026年6月最新】錦糸町の女性専用パーソナルジムおすすめ5選！料金比較',
  description: '【2026年4月最新】錦糸町のおすすめ女性専用パーソナルジム5選を徹底比較。OUTLINE・B-CONCEPT・かたぎり塾など人気ジムの料金・口コミ・特徴を網羅。',
  keywords: '女性専用パーソナルジム,錦糸町,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'OUTLINE 錦糸町店',
    officialUrl: 'https://www.outline-gym.com/',
    rating: 4.7,
    reviewCount: 14,
    reviews: [
      { author: 'A.K', rating: 5, date: '1週間前', text: '生涯アフターサポート付きで安心。錦糸町で女性専用パーソナルジムは貴重です。' },
      { author: 'M.S', rating: 5, date: '2週間前', text: '完全個室でベビーサークルも。子連れで通えるのがありがたい。' },
      { author: 'K.N', rating: 4, date: '1ヶ月前', text: '女性専用マシンで効率よくトレーニング。料金もリーズナブル。' },
    ],
    price: '16回 184,800円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '完全個室', '生涯サポート無料', 'ベビーサークル完備', '女性特化マシン'],
    description: '生涯無料アフターサポートが特徴の女性専用ジム。錦糸町駅から徒歩圏内。完全個室・ベビーサークル完備で産後ママも安心。コスパの良さで人気。',
    access: 'JR「錦糸町駅」徒歩5分',
    address: '東京都墨田区錦糸（錦糸町駅徒歩5分）',
    popularPlan: { name: '16回コース', description: '完全個室でのマンツーマントレーニング。卒業後も生涯無料でアフターサポート。', price: '16回 184,800円〜（税込）' },
    options: ['生涯無料アフターサポート', 'ベビーサークル完備', 'ウェアレンタル無料', 'よもぎ蒸し', '高級アミノ酸提供'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '産後ダイエット', 'リバウンド防止'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'ベビーサークル', '女性専用マシン'] },
  },
  {
    name: 'ビーコンセプト 錦糸町店',
    officialUrl: 'https://b-concept.tokyo/',
    rating: 4.7,
    reviewCount: 13,
    reviews: [
      { author: 'H.T', rating: 5, date: '2週間前', text: '下半身特化プログラムで太もも痩せに成功。医師監修なので安心感がある。' },
      { author: 'S.K', rating: 5, date: '1ヶ月前', text: '分割払いで月々5,545円から始められる。錦糸町駅からアクセス良好。' },
      { author: 'N.M', rating: 4, date: '3週間前', text: '託児所費用補助がありがたい。産後の体型戻しに効果を実感中。' },
    ],
    price: '2ヶ月18回 179,685円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '下半身特化', '医師×トレーナー共同開発', '託児所費用補助', '完全個室'],
    description: '医師とトレーナー共同開発の脚やせメソッドが人気。錦糸町エリアで太もも痩せ・ヒップアップに特化したプログラムを提供。託児所費用補助あり。',
    access: 'JR「錦糸町駅」徒歩5分',
    address: '東京都墨田区錦糸（錦糸町駅徒歩5分）',
    popularPlan: { name: '太ももダイエットプログラム', description: '医師×トレーナー共同開発の脚やせメソッド。75分×18回の集中プログラム。', price: '2ヶ月18回 179,685円〜（税込）' },
    options: ['託児所費用補助（最大1,000円/回）', 'ウェア・タオル無料レンタル', '食事指導付き', '分割払い対応（月々5,545円〜）'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['太もも痩せ', 'ヒップアップ', '産後ダイエット', '美脚'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'ロッカー', 'シャワー'] },
  },
  {
    name: 'かたぎり塾 錦糸町店',
    officialUrl: 'https://katagirijuku.jp/',
    rating: 4.5,
    reviewCount: 11,
    reviews: [
      { author: 'L.K', rating: 5, date: '1週間前', text: '月額制で気軽に始められる。AI食事指導も面白くて継続しやすい。' },
      { author: 'P.T', rating: 4, date: '2週間前', text: '錦糸町駅から近い。リーズナブルな料金で質の高いトレーニング。' },
      { author: 'D.S', rating: 4, date: '1ヶ月前', text: '女性トレーナーも在籍。月4回プランから無理なく通えます。' },
    ],
    price: '月4回 30,800円〜（税込）',
    trial: '体験レッスンあり',
    features: ['月額制', 'AI食事指導', '女性トレーナー在籍', 'リーズナブル', '錦糸町駅近'],
    description: '全国展開のパーソナルジムチェーン。月額制で続けやすい料金設定。AI食事指導で最新技術を活用。錦糸町駅からアクセス良好。',
    access: 'JR「錦糸町駅」徒歩4分',
    address: '東京都墨田区錦糸（錦糸町駅徒歩4分）',
    popularPlan: { name: '月4回プラン', description: '月額制のパーソナルトレーニング。AI食事指導付き。', price: '月4回 30,800円〜（税込）' },
    options: ['AI食事指導', '月額制で始めやすい', '回数変更可能'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性70% / 男性30%', purpose: ['ダイエット', '体力向上', '健康維持', 'ボディメイク'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['個室', 'ロッカー'] },
  },
  {
    name: 'Apple GYM 錦糸町店',
    rating: 4.5,
    reviewCount: 10,
    reviews: [
      { author: 'W.N', rating: 5, date: '2週間前', text: '海外式ボディメイクが新鮮。見た目の変化が分かりやすいです。' },
      { author: 'E.M', rating: 4, date: '1ヶ月前', text: '料金がリーズナブル。トレーナーさんが明るくて楽しい時間。' },
      { author: 'C.K', rating: 4, date: '3週間前', text: '錦糸町で本格パーソナルジム。8回から気軽に始められるのが良い。' },
    ],
    price: '8回 49,280円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用プランあり', '海外式ボディメイク', '完全個室', 'リーズナブル', '芸能人御用達'],
    description: '海外式ボディメイクで女性らしいシルエットを目指す。芸能人やモデルも通う人気ジム。8回49,280円〜のリーズナブルな料金で始めやすい。',
    access: 'JR「錦糸町駅」徒歩4分',
    address: '東京都墨田区錦糸（錦糸町駅徒歩4分）',
    popularPlan: { name: '8回チケット', description: '海外式ボディメイクのパーソナルトレーニング8回。', price: '8回 49,280円〜（税込）' },
    options: ['海外式ボディメイク', '完全個室', 'ウェアレンタル無料', '食事指導付き'],
    userProfile: { ageRange: '20代〜30代が中心', genderRatio: '女性100%', purpose: ['ボディメイク', 'ダイエット', 'ヒップアップ', '美脚'] },
    basicInfo: { hours: '7:00〜23:00', closed: '不定休', facilities: ['完全個室', 'ロッカー'] },
  },
  {
    name: 'エクササイズコーチ 錦糸町店',
    officialUrl: 'https://exercisecoach.co.jp/',
    rating: 4.3,
    reviewCount: 16,
    reviews: [
      { author: 'F.T', rating: 5, date: '1週間前', text: '1回20分で月12,000円。コスパ最強のパーソナルジムです。' },
      { author: 'G.K', rating: 4, date: '2週間前', text: 'AI主導で効率的。錦糸町駅から近くて通いやすい。' },
      { author: 'B.M', rating: 4, date: '1ヶ月前', text: '女性利用者が多くて安心。短時間でしっかり効果を感じます。' },
    ],
    price: '月4回 12,000円〜（税込）',
    trial: '無料体験あり',
    features: ['AI主導', '1回20分', '低価格', '女性利用者8割', '錦糸町駅近'],
    description: 'AI主導の効率的パーソナルトレーニング。1回20分で月4回12,000円〜。利用者の8割以上が女性。錦糸町駅近の便利な立地。',
    access: 'JR「錦糸町駅」徒歩3分',
    address: '東京都墨田区錦糸（錦糸町駅徒歩3分）',
    popularPlan: { name: '月4回プラン', description: 'AIが最適な負荷を設定。1回20分の効率トレーニング。', price: '月4回 12,000円〜（税込）' },
    options: ['AI個別最適化', '1回20分', 'ウェアレンタル無料'],
    userProfile: { ageRange: '20代〜50代', genderRatio: '女性80% / 男性20%', purpose: ['ダイエット', '健康維持', '体力向上', '運動習慣'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['トレーニングマシン', 'ロッカー'] },
  },
]

const faqs = [
  { question: '錦糸町で女性専用のパーソナルジムはありますか？', answer: 'はい、錦糸町エリアにはOUTLINE、ビーコンセプトなどの女性専用パーソナルジムがあります。Apple GYMも女性専用プランを用意。エクササイズコーチも女性利用者が8割以上です。' },
  { question: '錦糸町のパーソナルジムの料金相場は？', answer: '錦糸町エリアの料金はエクササイズコーチ（月12,000円〜）からOUTLINE（184,800円〜）まで幅広いです。Apple GYM（8回49,280円〜）もお手頃。' },
  { question: '錦糸町で下半身痩せに特化したジムは？', answer: 'ビーコンセプト錦糸町店が下半身特化で最もおすすめ。医師とトレーナーが共同開発した脚やせメソッドで太もも痩せ・ヒップアップを目指せます。' },
  { question: '錦糸町で子連れで通えるジムは？', answer: 'OUTLINE錦糸町店はベビーサークル完備で子連れOK。ビーコンセプトは託児所費用を最大1,000円/回補助してくれます。' },
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
              【2026年6月最新】錦糸町の女性専用パーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選！料金比較
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
            <p className="text-brand-muted leading-relaxed mb-6">こんにちは、G-PersonalGym編集部です。</p>
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
            <p className="text-brand-muted leading-relaxed mb-4">コスパと生涯サポートならOUTLINE、下半身痩せならビーコンセプト、リーズナブルに始めるならApple GYMやエクササイズコーチがおすすめです。</p>
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
      </main>
      <RelatedAreas currentSlug="kinshicho" />
      <SiteFooter />
    </>
  )
}
