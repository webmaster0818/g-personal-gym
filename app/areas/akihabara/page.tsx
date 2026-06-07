import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { GymCard } from '@/components/GymCard'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { FAQSchema } from '@/components/FAQSchema'
import { RelatedAreas } from '@/components/RelatedAreas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '【2026最新】秋葉原の女性専用パーソナルジムおすすめ5選！料金比較',
  description: '【2026年4月最新】秋葉原のおすすめ女性専用パーソナルジム5選を徹底比較。OUTLINE・Bodies・24/7 Workoutなど人気ジムの料金・口コミ・特徴を網羅。',
  keywords: '女性専用パーソナルジム,秋葉原,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'OUTLINE 秋葉原店',
    rating: 4.7,
    reviewCount: 13,
    reviews: [
      { author: 'A.N', rating: 5, date: '1週間前', text: '生涯アフターサポートが心強い。秋葉原駅から近くて通いやすいです。' },
      { author: 'M.T', rating: 5, date: '2週間前', text: '完全個室で女性専用。ベビーサークルもあるので子連れでも安心。' },
      { author: 'K.S', rating: 4, date: '1ヶ月前', text: '料金がリーズナブルで質が高い。女性専用マシンが使いやすいです。' },
    ],
    price: '16回 184,800円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '完全個室', '生涯サポート無料', 'ベビーサークル完備', '女性特化マシン'],
    description: '生涯無料アフターサポートが最大の特徴。秋葉原駅から徒歩圏内で、完全個室・女性専用マシン完備。コスパ重視の方にも人気のジム。',
    access: 'JR「秋葉原駅」徒歩5分',
    address: '東京都千代田区外神田（秋葉原駅徒歩5分）',
    popularPlan: { name: '16回コース', description: '完全個室でのマンツーマントレーニング。卒業後も生涯無料でアフターサポート。', price: '16回 184,800円〜（税込）' },
    options: ['生涯無料アフターサポート', 'ベビーサークル完備', 'ウェアレンタル無料', 'よもぎ蒸し', '高級アミノ酸提供'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '産後ダイエット', 'リバウンド防止'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'ベビーサークル', '女性専用マシン'] },
  },
  {
    name: 'Bodies 丸の内店',
    rating: 4.5,
    reviewCount: 22,
    reviews: [
      { author: 'Y.K', rating: 5, date: '2週間前', text: '月会費がリーズナブル。ゲルマニウム温浴も気持ちいい。秋葉原からもアクセスしやすいです。' },
      { author: 'H.M', rating: 4, date: '1ヶ月前', text: '女性専用で安心。サーキットトレーニングが1回30分で手軽に続けられます。' },
      { author: 'T.S', rating: 4, date: '3週間前', text: '運動初心者でも安心。スタッフさんが丁寧にサポートしてくれます。' },
    ],
    price: '月会費 5,970円〜（税込）',
    trial: '無料体験あり',
    features: ['女性専用', 'サーキットトレーニング', 'ゲルマニウム温浴', '駅近', 'リーズナブル'],
    description: 'ABCクッキングスタジオが手がける女性専用フィットネス。1回30分のサーキットトレーニングで効率的に運動。ゲルマニウム温浴も利用可能。秋葉原エリアからもアクセスしやすい。',
    access: 'JR「秋葉原駅」徒歩8分 / 東京メトロ「末広町駅」徒歩5分',
    address: '東京都千代田区神田（秋葉原エリア）',
    popularPlan: { name: 'レギュラー会員', description: 'サーキットトレーニング＋ゲルマニウム温浴が使い放題。', price: '月会費 5,970円〜（税込）' },
    options: ['ゲルマニウム温浴', 'サーキットトレーニング', 'ランニング', 'ヨガプログラム'],
    userProfile: { ageRange: '20代〜50代', genderRatio: '女性100%', purpose: ['健康維持', '運動習慣', 'リラックス', 'ダイエット'] },
    basicInfo: { hours: '10:00〜21:00', closed: '施設定休日に準ずる', facilities: ['サーキットエリア', 'ゲルマニウム温浴', 'ロッカー'] },
  },
  {
    name: '24/7 Workout 秋葉原・神田店',
    rating: 4.5,
    reviewCount: 18,
    reviews: [
      { author: 'F.N', rating: 5, date: '1週間前', text: '3食食べて痩せられるのが嬉しい。深夜まで営業しているので仕事帰りに通えます。' },
      { author: 'G.K', rating: 4, date: '2週間前', text: '全額返金保証があるので安心して始められた。トレーナーの質も高い。' },
      { author: 'B.T', rating: 4, date: '1ヶ月前', text: '秋葉原・神田エリアで通いやすい立地。完全個室で集中できます。' },
    ],
    price: '2ヶ月16回 257,400円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用プランあり', '完全個室', '深夜営業', '3食食べるダイエット', '全額返金保証'],
    description: '「3食食べて痩せる」がコンセプト。深夜24時まで営業で秋葉原エリアのビジネスパーソンに人気。全額返金保証付きで安心。',
    access: 'JR「秋葉原駅」徒歩6分 / JR「神田駅」徒歩3分',
    address: '東京都千代田区神田（秋葉原・神田エリア）',
    popularPlan: { name: '2ヶ月コース', description: '3食食べながら理想の体型を目指す。マンツーマン指導16回。', price: '2ヶ月16回 257,400円〜（税込）' },
    options: ['全額返金保証', 'ウェアレンタル無料', '深夜24時まで営業', '食事指導付き'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '体力向上', '健康維持'] },
    basicInfo: { hours: '7:00〜24:00', closed: '不定休', facilities: ['完全個室', 'シャワー', 'ロッカー'] },
  },
  {
    name: 'かたぎり塾 秋葉原店',
    rating: 4.4,
    reviewCount: 11,
    reviews: [
      { author: 'L.M', rating: 5, date: '2週間前', text: '月額制で始めやすい。AI食事指導が便利で続けやすいです。' },
      { author: 'P.K', rating: 4, date: '1ヶ月前', text: '秋葉原駅から近い。リーズナブルな料金で満足度が高い。' },
      { author: 'D.S', rating: 4, date: '3週間前', text: '女性トレーナーもいて安心。月4回から気軽に始められます。' },
    ],
    price: '月4回 30,800円〜（税込）',
    trial: '体験レッスンあり',
    features: ['月額制', 'AI食事指導', '女性トレーナー在籍', 'リーズナブル', '秋葉原駅近'],
    description: '全国展開のパーソナルジムチェーン。月額制で続けやすい料金設定。AI食事指導も活用。秋葉原駅からアクセス良好。',
    access: 'JR「秋葉原駅」徒歩4分',
    address: '東京都千代田区外神田（秋葉原駅徒歩4分）',
    popularPlan: { name: '月4回プラン', description: '月額制のパーソナルトレーニング。AI食事指導付き。', price: '月4回 30,800円〜（税込）' },
    options: ['AI食事指導', '月額制で始めやすい', '回数変更可能'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性70% / 男性30%', purpose: ['ダイエット', '体力向上', '健康維持', 'ボディメイク'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['個室', 'ロッカー'] },
  },
  {
    name: 'エクササイズコーチ 秋葉原店',
    rating: 4.3,
    reviewCount: 16,
    reviews: [
      { author: 'W.T', rating: 5, date: '1週間前', text: '1回20分で効率的。月12,000円は破格。忙しい日々でも通いやすい。' },
      { author: 'E.M', rating: 4, date: '2週間前', text: 'AI主導で毎回最適化されるのが良い。秋葉原駅から近い。' },
      { author: 'C.K', rating: 4, date: '1ヶ月前', text: '女性利用者が多くて安心。短時間で効果を実感できます。' },
    ],
    price: '月4回 12,000円〜（税込）',
    trial: '無料体験あり',
    features: ['AI主導', '1回20分', '低価格', '女性利用者8割', '秋葉原駅近'],
    description: 'AI主導の効率的パーソナルトレーニング。1回20分で月4回12,000円〜。利用者の8割以上が女性。秋葉原駅近の便利な立地。',
    access: 'JR「秋葉原駅」徒歩3分',
    address: '東京都千代田区外神田（秋葉原駅徒歩3分）',
    popularPlan: { name: '月4回プラン', description: 'AIが最適な負荷を設定。1回20分の効率トレーニング。', price: '月4回 12,000円〜（税込）' },
    options: ['AI個別最適化', '1回20分', 'ウェアレンタル無料'],
    userProfile: { ageRange: '20代〜50代', genderRatio: '女性80% / 男性20%', purpose: ['ダイエット', '健康維持', '体力向上', '運動習慣'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['トレーニングマシン', 'ロッカー'] },
  },
]

const faqs = [
  { question: '秋葉原で女性専用のパーソナルジムはありますか？', answer: 'はい、秋葉原エリアにはOUTLINE、Bodiesなどの女性専用ジムがあります。24/7 Workoutも女性専用プランを用意しています。エクササイズコーチも女性利用者が8割以上です。' },
  { question: '秋葉原のパーソナルジムの料金相場は？', answer: '秋葉原エリアの料金はBodies（月5,970円〜）やエクササイズコーチ（月12,000円〜）からOUTLINE（184,800円〜）まで幅広い選択肢があります。' },
  { question: '秋葉原で深夜まで営業しているジムは？', answer: '24/7 Workout秋葉原・神田店は深夜24時まで営業。エクササイズコーチも22時まで営業しているので、仕事帰りにも通えます。' },
  { question: '秋葉原で初心者でも通えるジムは？', answer: 'Bodiesは1回30分のサーキットトレーニングで初心者向け。エクササイズコーチもAI主導で1回20分から始められます。どのジムもマンツーマン指導なので初心者歓迎です。' },
]

export default function AkihabaraPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-accent text-xs mb-2">更新日 2026年04月29日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              【2026最新】秋葉原の女性専用パーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選！料金比較
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light">
              <Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}
              <span className="text-brand-muted">秋葉原</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">こんにちは、G-PersonalGym編集部です。</p>
            <p className="text-brand-muted leading-relaxed mb-6">「秋葉原で女性専用のパーソナルジムを探している」「駅近で手軽に通えるジムが知りたい」という方のために、秋葉原エリアでおすすめの女性向けパーソナルジム{gyms.length}選をまとめました。</p>
            <div className="bg-ivory border-l-4 border-accent p-6 mb-8">
              <h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-brand-muted">
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>秋葉原で女性専用パーソナルジムを探している</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>駅近で通いやすいジムが良い</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>短時間で効率的にトレーニングしたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>料金を比較して選びたい</span></li>
              </ul>
            </div>
          </div>
        </section>

        <PriceComparisonTable gyms={gyms} areaName="秋葉原" />

        <section className="py-16 bg-ivory" id="gyms">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">秋葉原のおすすめ女性向けパーソナルジム{gyms.length}選</h2>
            <div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-brand-text mb-6 text-center">まとめ</h2>
            <p className="text-brand-muted leading-relaxed mb-4">秋葉原エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。</p>
            <p className="text-brand-muted leading-relaxed mb-4">コスパと生涯サポートならOUTLINE、手軽に始めるならBodiesやエクササイズコーチ、本格的にダイエットするなら24/7 Workoutがおすすめです。</p>
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
      <RelatedAreas currentSlug="akihabara" />
      <SiteFooter />
    </>
  )
}
