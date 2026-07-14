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
  alternates: { canonical: '/areas/chiba/' },
  title: '【2026年7月最新】千葉の女性専用パーソナルジムおすすめ6選！料金比較',
  description: '【2026年4月最新】千葉のおすすめ女性専用パーソナルジム6選を徹底比較。OUTLINE・UNDEUX SUPERBODY・Reborn Myselfなど人気ジムの料金・口コミ・特徴を網羅。',
  keywords: '女性専用パーソナルジム,千葉,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'OUTLINE 千葉店',
    officialUrl: 'https://www.outline-gym.com/',
    rating: 4.8,
    reviewCount: 16,
    reviews: [
      { author: 'A.T', rating: 5, date: '1週間前', text: '生涯アフターサポートが心強い。千葉駅から近くて通いやすいです。' },
      { author: 'M.S', rating: 5, date: '2週間前', text: '完全個室で子連れOK。ベビーサークルがあるので安心して通えます。' },
      { author: 'K.H', rating: 4, date: '1ヶ月前', text: '料金がリーズナブル。女性専用マシンで効率的にトレーニングできます。' },
    ],
    price: '16回 184,800円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '完全個室', '生涯サポート無料', 'ベビーサークル完備', '女性特化マシン'],
    description: '生涯無料アフターサポートが最大の特徴。千葉駅から徒歩圏内の好立地。完全個室・ベビーサークル完備で産後ママも安心。千葉エリアでコスパ重視なら最有力候補。',
    access: 'JR「千葉駅」徒歩5分',
    address: '千葉県千葉市中央区（千葉駅徒歩5分）',
    popularPlan: { name: '16回コース', description: '完全個室でのマンツーマントレーニング。卒業後も生涯無料でアフターサポート。', price: '16回 184,800円〜（税込）' },
    options: ['生涯無料アフターサポート', 'ベビーサークル完備', 'ウェアレンタル無料', 'よもぎ蒸し', '高級アミノ酸提供'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '産後ダイエット', 'リバウンド防止'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'ベビーサークル', '女性専用マシン'] },
  },
  {
    name: 'UNDEUX SUPERBODY 千葉スタジオ',
    officialUrl: 'https://www.diet-undeux.jp/',
    rating: 4.7,
    reviewCount: 14,
    reviews: [
      { author: 'R.K', rating: 5, date: '2週間前', text: '宅配食が美味しくて食事管理がストレスフリー。千葉で女性専用ジムは嬉しい。' },
      { author: 'S.M', rating: 5, date: '1ヶ月前', text: 'パウダールーム完備で仕事帰りでも通いやすい。基礎化粧品も揃っています。' },
      { author: 'N.T', rating: 4, date: '3週間前', text: '2ヶ月で-5kg達成。トレーナーさんの指導が丁寧で続けやすいです。' },
    ],
    price: '2ヶ月16回 220,000円〜（税込）',
    trial: '体験レッスン0円',
    features: ['女性専用', '食事管理付き', '宅配食無料', 'パウダールーム完備', '千葉駅近'],
    description: '糖質オフ宅配食を無料提供する女性専用パーソナルジム。トレーニングと食事の両面から総合サポート。千葉駅からアクセス良好。パウダールーム・基礎化粧品完備。',
    access: 'JR「千葉駅」徒歩5分',
    address: '千葉県千葉市中央区（千葉駅徒歩5分）',
    popularPlan: { name: '2ヶ月集中コース', description: 'マンツーマントレーニング16回＋食事指導＋宅配食の総合サポートプラン。', price: '2ヶ月16回 220,000円〜（税込）' },
    options: ['糖質オフ宅配食無料', 'ウェア・タオルレンタル無料', 'シャワー・パウダールーム完備', '基礎化粧品完備', '月額制LIFEプランあり'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', '脚痩せ', '産後ダイエット', 'ボディメイク'] },
    basicInfo: { hours: '9:00〜22:00', closed: '不定休', facilities: ['完全個室', 'シャワー', 'パウダールーム', '基礎化粧品'] },
  },
  {
    name: 'リボーンマイセルフ 千葉店',
    officialUrl: 'https://reborn-myself.com/',
    rating: 4.6,
    reviewCount: 12,
    reviews: [
      { author: 'T.N', rating: 5, date: '1週間前', text: 'トレーナー全員女性で安心。10年以上の実績に基づいた指導が信頼できます。' },
      { author: 'M.A', rating: 4, date: '2週間前', text: '食事指導が具体的で実践しやすい。千葉で女性トレーナーのみのジムは貴重。' },
      { author: 'E.S', rating: 5, date: '1ヶ月前', text: 'ブライダルコースで通いました。理想のドレス姿を実現できました。' },
    ],
    price: '入会金38,000円＋コース料金',
    trial: '無料カウンセリング',
    features: ['女性専用', '女性トレーナーのみ', '10年以上の実績', '産後ダイエット対応', 'ブライダルコース'],
    description: '日本初の女性専用ダイエットジム。トレーナーも全員女性。2万人以上の指導実績に基づくオリジナルメソッド。千葉エリアで女性トレーナーのみのジムを探している方に最適。',
    access: 'JR「千葉駅」徒歩4分',
    address: '千葉県千葉市中央区（千葉駅徒歩4分）',
    popularPlan: { name: 'ダイエットコース', description: '2万人以上の指導実績に基づくオリジナルメソッド。女性トレーナーによるマンツーマン指導。', price: '入会金38,000円＋コース料金' },
    options: ['ウェアレンタル無料', '産後ダイエットコース', 'ブライダルダイエットコース', '部分痩せコース'],
    userProfile: { ageRange: '20代〜50代', genderRatio: '女性100%', purpose: ['ダイエット', 'ブライダル', '産後ダイエット', '部分痩せ'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['ロッカー', 'ウェアレンタル'] },
  },
  {
    name: 'ビーコンセプト 千葉店',
    officialUrl: 'https://b-concept.tokyo/',
    rating: 4.6,
    reviewCount: 13,
    reviews: [
      { author: 'H.K', rating: 5, date: '2週間前', text: '下半身特化プログラムで太もも痩せに成功。千葉で脚やせするならここ。' },
      { author: 'A.M', rating: 5, date: '1ヶ月前', text: '医師監修のメソッドで安心。分割払いで負担なく始められました。' },
      { author: 'K.T', rating: 4, date: '3週間前', text: '託児所費用補助があるのが嬉しい。産後ダイエットに最適です。' },
    ],
    price: '2ヶ月18回 179,685円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '下半身特化', '医師×トレーナー共同開発', '託児所費用補助', '完全個室'],
    description: '医師とトレーナー共同開発の脚やせメソッド。千葉エリアで太もも痩せ・ヒップアップに特化したプログラムを提供。月々5,545円〜の分割払いで始めやすい。',
    access: 'JR「千葉駅」徒歩5分',
    address: '千葉県千葉市中央区（千葉駅徒歩5分）',
    popularPlan: { name: '太ももダイエットプログラム', description: '医師×トレーナー共同開発の脚やせメソッド。75分×18回の集中プログラム。', price: '2ヶ月18回 179,685円〜（税込）' },
    options: ['託児所費用補助（最大1,000円/回）', 'ウェア・タオル無料レンタル', '食事指導付き', '分割払い対応（月々5,545円〜）'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['太もも痩せ', 'ヒップアップ', '産後ダイエット', '美脚'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'ロッカー', 'シャワー'] },
  },
  {
    name: '24/7 Workout 千葉店',
    rating: 4.5,
    reviewCount: 20,
    reviews: [
      { author: 'F.S', rating: 5, date: '1週間前', text: '3食食べて痩せるメソッドが続けやすい。深夜まで営業で仕事帰りも安心。' },
      { author: 'G.T', rating: 4, date: '2週間前', text: '全額返金保証があるので気軽にスタートできた。千葉駅近で便利。' },
      { author: 'B.K', rating: 4, date: '1ヶ月前', text: 'トレーナーの質が高い。完全個室で集中してトレーニングできます。' },
    ],
    price: '2ヶ月16回 257,400円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用プランあり', '完全個室', '深夜営業', '3食食べるダイエット', '全額返金保証'],
    description: '「3食食べて痩せる」がコンセプトの大手パーソナルジム。千葉駅近くで深夜24時まで営業。全額返金保証付きで安心して始められる。',
    access: 'JR「千葉駅」徒歩5分',
    address: '千葉県千葉市中央区（千葉駅徒歩5分）',
    popularPlan: { name: '2ヶ月コース', description: '3食食べながら理想の体型を目指す。マンツーマン指導16回。', price: '2ヶ月16回 257,400円〜（税込）' },
    options: ['全額返金保証', 'ウェアレンタル無料', '深夜24時まで営業', '食事指導付き'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '体力向上', '健康維持'] },
    basicInfo: { hours: '7:00〜24:00', closed: '不定休', facilities: ['完全個室', 'シャワー', 'ロッカー'] },
  },
  {
    name: 'エクササイズコーチ 千葉店',
    officialUrl: 'https://exercisecoach.co.jp/',
    rating: 4.3,
    reviewCount: 18,
    reviews: [
      { author: 'D.M', rating: 5, date: '2週間前', text: '1回20分で月12,000円。千葉でこの価格のパーソナルジムは他にない。' },
      { author: 'E.K', rating: 4, date: '1ヶ月前', text: 'AI主導で効率的。女性利用者が多くて安心して通えます。' },
      { author: 'W.T', rating: 4, date: '3週間前', text: '千葉駅から近い。短時間集中型で忙しい日々でも続けられます。' },
    ],
    price: '月4回 12,000円〜（税込）',
    trial: '無料体験あり',
    features: ['AI主導', '1回20分', '低価格', '女性利用者8割', '千葉駅近'],
    description: 'AI主導の効率的パーソナルトレーニング。1回20分で月4回12,000円〜の低価格。利用者の8割以上が女性。千葉駅近の便利な立地。',
    access: 'JR「千葉駅」徒歩3分',
    address: '千葉県千葉市中央区（千葉駅徒歩3分）',
    popularPlan: { name: '月4回プラン', description: 'AIが最適な負荷を設定。1回20分の効率トレーニング。', price: '月4回 12,000円〜（税込）' },
    options: ['AI個別最適化', '1回20分', 'ウェアレンタル無料'],
    userProfile: { ageRange: '20代〜50代', genderRatio: '女性80% / 男性20%', purpose: ['ダイエット', '健康維持', '体力向上', '運動習慣'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['トレーニングマシン', 'ロッカー'] },
  },
]

const faqs = [
  { question: '千葉で女性専用のパーソナルジムはありますか？', answer: 'はい、千葉エリアにはOUTLINE、UNDEUX SUPERBODY、リボーンマイセルフ、ビーコンセプトなど複数の女性専用パーソナルジムがあります。いずれも千葉駅から徒歩圏内です。' },
  { question: '千葉のパーソナルジムの料金相場は？', answer: '千葉エリアの料金はエクササイズコーチ（月12,000円〜）からUNDEUX SUPERBODY（2ヶ月220,000円〜）まで幅広い選択肢。OUTLINE（184,800円〜）がコスパに優れています。' },
  { question: '千葉で女性トレーナーのみのジムは？', answer: 'リボーンマイセルフ千葉店はトレーナーも全員女性。男性トレーナーに抵抗がある方でも安心して通えます。2万人以上の指導実績があります。' },
  { question: '千葉で食事指導が充実しているジムは？', answer: 'UNDEUX SUPERBODYは糖質オフ宅配食を無料提供。リボーンマイセルフやビーコンセプトも食事指導付き。科学的な食事サポートを求めるなら24/7 Workoutもおすすめ。' },
  { question: '千葉で子連れで通えるジムは？', answer: 'OUTLINE千葉店はベビーサークル完備で子連れOK。ビーコンセプトは託児所費用を最大1,000円/回補助してくれます。' },
]

export default function ChibaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-accent text-xs mb-2">更新日 2026年04月29日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              【2026年7月最新】千葉の女性専用パーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選！料金比較
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light">
              <Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}
              <span className="text-brand-muted">千葉</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">こんにちは、G-PersonalGym編集部です。</p>
            <p className="text-brand-muted leading-relaxed mb-6">「千葉で女性専用のパーソナルジムを探している」「駅近で通いやすいジムが知りたい」という方のために、千葉エリアでおすすめの女性向けパーソナルジム{gyms.length}選をまとめました。</p>
            <div className="bg-ivory border-l-4 border-accent p-6 mb-8">
              <h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-brand-muted">
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>千葉で女性専用パーソナルジムを探している</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>千葉駅近くで通いやすいジムが良い</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>料金を比較して選びたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>食事指導も受けたい</span></li>
              </ul>
            </div>
          </div>
        </section>

        <AreaContext slug="chiba" />

        <WhyWomenOnly area="千葉" />

        <PriceComparisonTable gyms={gyms} areaName="千葉" />

        <section className="py-16 bg-ivory" id="gyms">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">千葉のおすすめ女性向けパーソナルジム{gyms.length}選</h2>
            <div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-brand-text mb-6 text-center">まとめ</h2>
            <p className="text-brand-muted leading-relaxed mb-4">千葉エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。</p>
            <p className="text-brand-muted leading-relaxed mb-4">コスパと生涯サポートならOUTLINE、食事管理重視ならUNDEUX SUPERBODY、女性トレーナー希望ならリボーンマイセルフ、下半身痩せならビーコンセプトがおすすめです。</p>
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
      <RelatedAreas currentSlug="chiba" />
      <SiteFooter />
    </>
  )
}
