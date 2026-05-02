import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { GymCard } from '@/components/GymCard'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { FAQSchema } from '@/components/FAQSchema'
import { RelatedAreas } from '@/components/RelatedAreas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '【2026最新】五反田の女性専用パーソナルジムおすすめ5選！料金比較',
  description: '【2026年4月最新】五反田のおすすめ女性専用パーソナルジム5選を徹底比較。Reborn Myself・OUTLINE・24/7 Workoutなど人気ジムの料金・口コミ・特徴を網羅。',
  keywords: '女性専用パーソナルジム,五反田,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'リボーンマイセルフ 五反田店',
    rating: 4.7,
    reviewCount: 14,
    reviews: [
      { author: 'A.H', rating: 5, date: '1週間前', text: 'トレーナーも全員女性で安心して通えます。10年以上の実績があり指導が的確。' },
      { author: 'M.Y', rating: 5, date: '2週間前', text: '女性らしい柔らかいボディラインを目指せるのが嬉しい。食事指導も具体的です。' },
      { author: 'K.S', rating: 4, date: '1ヶ月前', text: '五反田駅から近くて通いやすい。ブライダルコースで通っています。' },
    ],
    price: '入会金38,000円＋コース料金',
    trial: '無料カウンセリング',
    features: ['女性専用', '女性トレーナーのみ', '10年以上の実績', '産後ダイエット対応', 'ブライダルコース'],
    description: '日本初の女性専用ダイエットジム。トレーナーも全員女性。2万人以上の指導実績に基づくオリジナルメソッドで、女性本来の柔らかさを残したボディメイクを実現。五反田駅から好アクセス。',
    access: 'JR「五反田駅」徒歩4分',
    address: '東京都品川区東五反田（五反田駅徒歩4分）',
    popularPlan: { name: 'ダイエットコース', description: '2万人以上の指導実績に基づくオリジナルメソッド。女性トレーナーによるマンツーマン指導。', price: '入会金38,000円＋コース料金' },
    options: ['ウェアレンタル無料', '産後ダイエットコース', 'ブライダルダイエットコース', '部分痩せコース'],
    userProfile: { ageRange: '20代〜50代', genderRatio: '女性100%', purpose: ['ダイエット', 'ブライダル', '産後ダイエット', '部分痩せ'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['ロッカー', 'ウェアレンタル'] },
  },
  {
    name: 'OUTLINE 五反田店',
    rating: 4.7,
    reviewCount: 12,
    reviews: [
      { author: 'R.T', rating: 5, date: '2週間前', text: '生涯アフターサポートが心強い。リバウンドの不安がなくなりました。' },
      { author: 'S.K', rating: 5, date: '1ヶ月前', text: '完全個室で子連れOK。ベビーサークルがあるので安心です。' },
      { author: 'N.H', rating: 4, date: '3週間前', text: '女性専用マシンで効率的にトレーニング。卒業後のサポートが充実。' },
    ],
    price: '16回 184,800円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '完全個室', '生涯サポート無料', 'ベビーサークル完備', '女性特化マシン'],
    description: '生涯無料アフターサポートが最大の特徴。完全個室で女性専用マシンを使ったトレーニング。五反田駅から徒歩圏内で通いやすい。',
    access: 'JR「五反田駅」徒歩5分',
    address: '東京都品川区東五反田（五反田駅徒歩5分）',
    popularPlan: { name: '16回コース', description: '完全個室でのマンツーマントレーニング。卒業後も生涯無料でアフターサポート。', price: '16回 184,800円〜（税込）' },
    options: ['生涯無料アフターサポート', 'ベビーサークル完備', 'ウェアレンタル無料', 'よもぎ蒸し', '高級アミノ酸提供'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '産後ダイエット', 'リバウンド防止'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'ベビーサークル', '女性専用マシン'] },
  },
  {
    name: '24/7 Workout 五反田店',
    rating: 4.5,
    reviewCount: 20,
    reviews: [
      { author: 'F.M', rating: 5, date: '1週間前', text: '3食食べて痩せるメソッドが画期的。深夜まで営業で仕事帰りに通えます。' },
      { author: 'G.T', rating: 4, date: '2週間前', text: '全額返金保証があるので安心。トレーナーの質が高いです。' },
      { author: 'B.K', rating: 4, date: '1ヶ月前', text: '完全個室で人目を気にせずトレーニング。五反田は職場から近くて便利。' },
    ],
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
  {
    name: 'かたぎり塾 五反田店',
    rating: 4.4,
    reviewCount: 13,
    reviews: [
      { author: 'L.N', rating: 5, date: '2週間前', text: '月額制で気軽に始められる。AI食事指導も分かりやすくて続けやすい。' },
      { author: 'P.S', rating: 4, date: '1ヶ月前', text: '五反田駅から近い。リーズナブルな料金設定が魅力的です。' },
      { author: 'D.H', rating: 4, date: '3週間前', text: '無理のないペースで体が変わってきた。トレーナーさんが親切。' },
    ],
    price: '月4回 30,800円〜（税込）',
    trial: '体験レッスンあり',
    features: ['月額制', 'AI食事指導', '女性トレーナー在籍', 'リーズナブル', '五反田駅近'],
    description: '全国展開のパーソナルジムチェーン。月額制で続けやすく、AI食事指導も活用。五反田駅から近くて通いやすい。',
    access: 'JR「五反田駅」徒歩4分',
    address: '東京都品川区東五反田（五反田駅徒歩4分）',
    popularPlan: { name: '月4回プラン', description: '月額制のパーソナルトレーニング。AI食事指導付き。', price: '月4回 30,800円〜（税込）' },
    options: ['AI食事指導', '月額制で始めやすい', '回数変更可能'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性70% / 男性30%', purpose: ['ダイエット', '体力向上', '健康維持', 'ボディメイク'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['個室', 'ロッカー'] },
  },
  {
    name: 'エクササイズコーチ 五反田店',
    rating: 4.3,
    reviewCount: 17,
    reviews: [
      { author: 'W.M', rating: 5, date: '1週間前', text: '1回20分で終わるので忙しくても通える。月12,000円〜は本当にコスパが良い。' },
      { author: 'E.K', rating: 4, date: '2週間前', text: 'AI主導のトレーニングが効率的。女性利用者が多いので安心です。' },
      { author: 'C.T', rating: 4, date: '1ヶ月前', text: '五反田駅から近い。短時間集中型で結果が出ます。' },
    ],
    price: '月4回 12,000円〜（税込）',
    trial: '無料体験あり',
    features: ['AI主導', '1回20分', '低価格', '女性利用者8割', '五反田駅近'],
    description: 'AI主導の効率的パーソナルトレーニング。1回20分で月4回12,000円〜の低価格。利用者の8割以上が女性。五反田駅から近く通いやすい。',
    access: 'JR「五反田駅」徒歩3分',
    address: '東京都品川区東五反田（五反田駅徒歩3分）',
    popularPlan: { name: '月4回プラン', description: 'AIが最適な負荷を設定。1回20分の効率トレーニング。', price: '月4回 12,000円〜（税込）' },
    options: ['AI個別最適化', '1回20分', 'ウェアレンタル無料'],
    userProfile: { ageRange: '20代〜50代', genderRatio: '女性80% / 男性20%', purpose: ['ダイエット', '健康維持', '体力向上', '運動習慣'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['トレーニングマシン', 'ロッカー'] },
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
      <main className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-rose-100 via-rose-50 to-purple-50 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-rose-500 text-xs mb-2">更新日 2026年04月29日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              【2026最新】五反田の女性専用パーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選！料金比較
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-rose-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light">
              <Link href="/" className="hover:text-rose-500 transition">ホーム</Link>{' > '}
              <span className="text-brand-muted">五反田</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">こんにちは、G-PersonalGym編集部です。</p>
            <p className="text-brand-muted leading-relaxed mb-6">「五反田で女性専用のパーソナルジムを探している」「仕事帰りに通えるジムが知りたい」という方のために、五反田エリアでおすすめの女性向けパーソナルジム{gyms.length}選をまとめました。</p>
            <div className="bg-rose-50 border-l-4 border-rose-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-brand-muted">
                <li className="flex items-start"><span className="text-rose-400 mr-2">✓</span><span>五反田で女性専用パーソナルジムを探している</span></li>
                <li className="flex items-start"><span className="text-rose-400 mr-2">✓</span><span>仕事帰りに通いやすいジムが良い</span></li>
                <li className="flex items-start"><span className="text-rose-400 mr-2">✓</span><span>女性トレーナーに指導してほしい</span></li>
                <li className="flex items-start"><span className="text-rose-400 mr-2">✓</span><span>料金を比較して選びたい</span></li>
              </ul>
            </div>
          </div>
        </section>

        <PriceComparisonTable gyms={gyms} areaName="五反田" />

        <section className="py-16 bg-rose-50" id="gyms">
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
                <div key={index} className="border border-rose-200 rounded-xl overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-rose-50 transition">
                      <h3 className="font-bold text-brand-text pr-4 text-sm">Q{index + 1}. {faq.question}</h3>
                      <svg className="w-5 h-5 text-rose-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                    </summary>
                    <div className="px-5 pb-5 text-brand-muted leading-relaxed text-sm">{faq.answer}</div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-rose-500 to-purple-500 text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-4">まずは無料カウンセリングから</h2>
            <p className="text-white/80 mb-8">複数のジムを比較して、あなたに合うジムを見つけましょう。</p>
            <Link href="/ranking/" className="inline-block bg-white text-rose-500 px-10 py-4 text-sm font-bold rounded-full hover:bg-rose-50 transition-all">おすすめランキングを見る</Link>
          </div>
        </section>
      </main>
      <RelatedAreas currentSlug="gotanda" />
      <SiteFooter />
    </>
  )
}
