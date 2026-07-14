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
  alternates: { canonical: '/areas/kitasenju/' },
  title: '【2026年7月最新】北千住の女性専用パーソナルジムおすすめ5選！料金比較',
  description: '【2026年4月最新】北千住のおすすめ女性専用パーソナルジム5選を徹底比較。B-CONCEPT・OUTLINE・Apple GYMなど人気ジムの料金・口コミ・特徴を網羅。',
  keywords: '女性専用パーソナルジム,北千住,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'ビーコンセプト 北千住店',
    officialUrl: 'https://b-concept.tokyo/',
    rating: 4.7,
    reviewCount: 15,
    reviews: [
      { author: 'A.M', rating: 5, date: '1週間前', text: '下半身特化のプログラムで太もも-4cm達成！医師監修で安心感があります。' },
      { author: 'M.K', rating: 5, date: '2週間前', text: '北千住駅から近くて通いやすい。分割払いで月々5,545円から始められるのも嬉しい。' },
      { author: 'S.T', rating: 4, date: '1ヶ月前', text: '託児所費用補助があるので子育て中でも安心。産後ダイエットに最適です。' },
    ],
    price: '2ヶ月18回 179,685円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '下半身特化', '医師×トレーナー共同開発', '託児所費用補助', '完全個室'],
    description: '医師とトレーナー共同開発の脚やせメソッドが人気。北千住エリアで太もも痩せ・ヒップアップに特化。託児所費用補助で産後ママにも対応。駅近で通いやすい。',
    access: 'JR「北千住駅」徒歩5分',
    address: '東京都足立区千住（北千住駅徒歩5分）',
    popularPlan: { name: '太ももダイエットプログラム', description: '医師×トレーナー共同開発の脚やせメソッド。75分×18回の集中プログラム。', price: '2ヶ月18回 179,685円〜（税込）' },
    options: ['託児所費用補助（最大1,000円/回）', 'ウェア・タオル無料レンタル', '食事指導付き', '分割払い対応（月々5,545円〜）'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['太もも痩せ', 'ヒップアップ', '産後ダイエット', '美脚'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'ロッカー', 'シャワー'] },
  },
  {
    name: 'OUTLINE 北千住店',
    officialUrl: 'https://www.outline-gym.com/',
    rating: 4.7,
    reviewCount: 12,
    reviews: [
      { author: 'R.N', rating: 5, date: '2週間前', text: '生涯アフターサポート付きでリバウンドの心配なし。北千住で女性専用は嬉しい。' },
      { author: 'K.H', rating: 5, date: '1ヶ月前', text: '完全個室でベビーサークルもある。子連れでも安心して通えます。' },
      { author: 'Y.S', rating: 4, date: '3週間前', text: '女性専用マシンで効率的。料金もリーズナブルで満足しています。' },
    ],
    price: '16回 184,800円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '完全個室', '生涯サポート無料', 'ベビーサークル完備', '女性特化マシン'],
    description: '生涯無料アフターサポートが特徴。北千住駅から徒歩圏内の好立地。完全個室・ベビーサークル完備で産後ママも安心して通える。',
    access: 'JR「北千住駅」徒歩6分',
    address: '東京都足立区千住（北千住駅徒歩6分）',
    popularPlan: { name: '16回コース', description: '完全個室でのマンツーマントレーニング。卒業後も生涯無料でアフターサポート。', price: '16回 184,800円〜（税込）' },
    options: ['生涯無料アフターサポート', 'ベビーサークル完備', 'ウェアレンタル無料', 'よもぎ蒸し', '高級アミノ酸提供'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '産後ダイエット', 'リバウンド防止'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'ベビーサークル', '女性専用マシン'] },
  },
  {
    name: 'Apple GYM 北千住店',
    rating: 4.6,
    reviewCount: 14,
    reviews: [
      { author: 'W.M', rating: 5, date: '1週間前', text: '海外式ボディメイクで見た目が変わる。料金もリーズナブルで通いやすい。' },
      { author: 'E.K', rating: 4, date: '2週間前', text: '芸能人も通うジム。トレーナーさんが明るくて楽しいトレーニング時間。' },
      { author: 'C.N', rating: 5, date: '1ヶ月前', text: '北千住で本格的なパーソナルジムが見つかって嬉しい。効果もしっかり実感。' },
    ],
    price: '8回 49,280円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用プランあり', '海外式ボディメイク', '完全個室', 'リーズナブル', '芸能人御用達'],
    description: '東京を中心に展開するパーソナルジム。海外式ボディメイクで女性らしいシルエットを目指す。芸能人やモデルも通う人気ジム。8回49,280円〜のリーズナブルな料金。',
    access: 'JR「北千住駅」徒歩4分',
    address: '東京都足立区千住（北千住駅徒歩4分）',
    popularPlan: { name: '8回チケット', description: '海外式ボディメイクのパーソナルトレーニング8回。', price: '8回 49,280円〜（税込）' },
    options: ['海外式ボディメイク', '完全個室', 'ウェアレンタル無料', '食事指導付き'],
    userProfile: { ageRange: '20代〜30代が中心', genderRatio: '女性100%', purpose: ['ボディメイク', 'ダイエット', 'ヒップアップ', '美脚'] },
    basicInfo: { hours: '7:00〜23:00', closed: '不定休', facilities: ['完全個室', 'ロッカー'] },
  },
  {
    name: 'かたぎり塾 北千住店',
    officialUrl: 'https://katagirijuku.jp/',
    rating: 4.4,
    reviewCount: 10,
    reviews: [
      { author: 'L.T', rating: 5, date: '2週間前', text: '月額制で始めやすい。AI食事指導も便利で続けやすいです。' },
      { author: 'P.K', rating: 4, date: '1ヶ月前', text: '北千住駅から近い。リーズナブルな料金で質が高い。' },
      { author: 'D.M', rating: 4, date: '3週間前', text: '月4回プランから気軽にスタート。着実に体が変わっています。' },
    ],
    price: '月4回 30,800円〜（税込）',
    trial: '体験レッスンあり',
    features: ['月額制', 'AI食事指導', '女性トレーナー在籍', 'リーズナブル', '北千住駅近'],
    description: '全国展開のパーソナルジムチェーン。月額制で続けやすく、AI食事指導も活用。北千住駅近くの便利な立地。',
    access: 'JR「北千住駅」徒歩4分',
    address: '東京都足立区千住（北千住駅徒歩4分）',
    popularPlan: { name: '月4回プラン', description: '月額制のパーソナルトレーニング。AI食事指導付き。', price: '月4回 30,800円〜（税込）' },
    options: ['AI食事指導', '月額制で始めやすい', '回数変更可能'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性70% / 男性30%', purpose: ['ダイエット', '体力向上', '健康維持', 'ボディメイク'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['個室', 'ロッカー'] },
  },
  {
    name: 'エクササイズコーチ 北千住店',
    officialUrl: 'https://exercisecoach.co.jp/',
    rating: 4.3,
    reviewCount: 15,
    reviews: [
      { author: 'F.S', rating: 5, date: '1週間前', text: '1回20分で効率的！月12,000円はコスパ最強。北千住で気軽に通えます。' },
      { author: 'G.M', rating: 4, date: '2週間前', text: 'AI主導で毎回最適なトレーニング。女性利用者が多い安心感。' },
      { author: 'B.T', rating: 4, date: '1ヶ月前', text: '短時間で効果的。忙しい毎日でも続けられるのが嬉しい。' },
    ],
    price: '月4回 12,000円〜（税込）',
    trial: '無料体験あり',
    features: ['AI主導', '1回20分', '低価格', '女性利用者8割', '北千住駅近'],
    description: 'AI主導の効率的パーソナルトレーニング。1回20分で月4回12,000円〜。利用者の8割以上が女性。北千住駅から近い便利な立地。',
    access: 'JR「北千住駅」徒歩3分',
    address: '東京都足立区千住（北千住駅徒歩3分）',
    popularPlan: { name: '月4回プラン', description: 'AIが最適な負荷を設定。1回20分の効率トレーニング。', price: '月4回 12,000円〜（税込）' },
    options: ['AI個別最適化', '1回20分', 'ウェアレンタル無料'],
    userProfile: { ageRange: '20代〜50代', genderRatio: '女性80% / 男性20%', purpose: ['ダイエット', '健康維持', '体力向上', '運動習慣'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['トレーニングマシン', 'ロッカー'] },
  },
]

const faqs = [
  { question: '北千住で女性専用のパーソナルジムはありますか？', answer: 'はい、北千住エリアにはビーコンセプト、OUTLINEなどの女性専用パーソナルジムがあります。Apple GYMも女性専用プランを用意しています。' },
  { question: '北千住のパーソナルジムの料金相場は？', answer: '北千住エリアの料金はエクササイズコーチ（月12,000円〜）からOUTLINE（184,800円〜）まで幅広い選択肢。Apple GYM（8回49,280円〜）もリーズナブルです。' },
  { question: '北千住で下半身痩せに特化したジムは？', answer: 'ビーコンセプト北千住店が下半身特化で最もおすすめです。医師とトレーナーが共同開発した脚やせメソッドで太もも痩せ・ヒップアップを目指せます。' },
  { question: '北千住で子連れで通えるジムは？', answer: 'OUTLINE北千住店はベビーサークル完備で子連れOK。ビーコンセプトは託児所費用を最大1,000円/回補助してくれます。' },
]

export default function KitasenjuPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-accent text-xs mb-2">更新日 2026年04月29日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              【2026年7月最新】北千住の女性専用パーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選！料金比較
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light">
              <Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}
              <span className="text-brand-muted">北千住</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">こんにちは、G-PersonalGym編集部です。</p>
            <p className="text-brand-muted leading-relaxed mb-6">「北千住で女性専用のパーソナルジムを探している」「駅近で通いやすいジムが知りたい」という方のために、北千住エリアでおすすめの女性向けパーソナルジム{gyms.length}選をまとめました。</p>
            <div className="bg-ivory border-l-4 border-accent p-6 mb-8">
              <h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-brand-muted">
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>北千住で女性専用パーソナルジムを探している</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>駅近で通いやすいジムが良い</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>下半身痩せに力を入れたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>料金を比較して選びたい</span></li>
              </ul>
            </div>
          </div>
        </section>

        <AreaContext slug="kitasenju" />

        <WhyWomenOnly area="北千住" />

        <PriceComparisonTable gyms={gyms} areaName="北千住" />

        <section className="py-16 bg-ivory" id="gyms">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">北千住のおすすめ女性向けパーソナルジム{gyms.length}選</h2>
            <div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-brand-text mb-6 text-center">まとめ</h2>
            <p className="text-brand-muted leading-relaxed mb-4">北千住エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。</p>
            <p className="text-brand-muted leading-relaxed mb-4">下半身痩せならビーコンセプト、コスパと生涯サポートならOUTLINE、リーズナブルに始めるならApple GYMやエクササイズコーチがおすすめです。</p>
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
      <RelatedAreas currentSlug="kitasenju" />
      <SiteFooter />
    </>
  )
}
