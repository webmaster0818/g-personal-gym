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
  title: '【2026年6月最新】中目黒の女性専用パーソナルジムおすすめ5選！料金比較',
  description: '【2026年4月最新】中目黒のおすすめ女性専用パーソナルジム5選を徹底比較。OUTLINE・zen place・ビーコンセプトなど人気ジムの料金・口コミ・特徴を網羅。',
  keywords: '女性専用パーソナルジム,中目黒,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'OUTLINE 中目黒店',
    officialUrl: 'https://www.outline-gym.com/',
    rating: 4.8,
    reviewCount: 16,
    reviews: [
      { author: 'A.M', rating: 5, date: '1週間前', text: '生涯アフターサポート付きでリバウンドの心配なし。中目黒の落ち着いた雰囲気の中でトレーニングできます。' },
      { author: 'K.S', rating: 5, date: '2週間前', text: '完全個室で子連れOK。ベビーサークルがあるので安心して通えます。' },
      { author: 'Y.T', rating: 4, date: '1ヶ月前', text: '女性専用マシンで効果的にトレーニング。卒業後のサポートが充実しています。' },
    ],
    price: '16回 184,800円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '完全個室', '生涯サポート無料', 'ベビーサークル完備', '女性特化マシン'],
    description: '業界初の生涯無料アフターサポートが特徴の女性専用パーソナルジム。中目黒の閑静なエリアに位置し、落ち着いた雰囲気でトレーニングに集中できる。完全個室・ベビーサークル完備。',
    access: '東急東横線「中目黒駅」徒歩5分',
    address: '東京都目黒区上目黒（中目黒駅徒歩5分）',
    popularPlan: { name: '16回コース', description: '完全個室でのマンツーマントレーニング。卒業後も生涯無料でアフターサポート。', price: '16回 184,800円〜（税込）' },
    options: ['生涯無料アフターサポート', 'ベビーサークル完備', 'ウェアレンタル無料', 'よもぎ蒸し', '高級アミノ酸提供'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '産後ダイエット', 'リバウンド防止'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'ベビーサークル', '女性専用マシン'] },
  },
  {
    name: 'zen place pilates 中目黒スタジオ',
    rating: 4.6,
    reviewCount: 19,
    reviews: [
      { author: 'M.H', rating: 5, date: '2週間前', text: 'ピラティスを取り入れたトレーニングで姿勢が劇的に改善。中目黒のおしゃれな空間で心もリフレッシュ。' },
      { author: 'S.K', rating: 4, date: '1ヶ月前', text: '体の歪みを整えながらトレーニングできるのが魅力。インナーマッスルが鍛えられます。' },
      { author: 'R.N', rating: 5, date: '3週間前', text: 'マシンピラティスが効果的。女性インストラクターが多くて安心です。' },
    ],
    price: '月4回 14,520円〜（税込）',
    trial: '体験レッスン1,000円',
    features: ['女性専用プランあり', 'ピラティス専門', '姿勢改善', 'マシンピラティス', '中目黒駅近'],
    description: '全国100店舗以上展開のピラティス専門スタジオ。マシンピラティスを活用した姿勢改善・インナーマッスル強化が得意。中目黒のおしゃれな空間でリラックスしながらトレーニング。',
    access: '東急東横線「中目黒駅」徒歩3分',
    address: '東京都目黒区上目黒（中目黒駅徒歩3分）',
    popularPlan: { name: 'マシンピラティス月4回プラン', description: '専用マシンを使ったピラティスで姿勢改善・体幹強化。', price: '月4回 14,520円〜（税込）' },
    options: ['マシンピラティス', 'マットピラティス', 'プライベートレッスン対応', '男女共用（女性8割）'],
    userProfile: { ageRange: '20代〜50代', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', 'インナーマッスル強化', 'ボディメイク', 'リラックス'] },
    basicInfo: { hours: '9:00〜21:00', closed: '不定休', facilities: ['マシンピラティス', 'マットスペース', 'ロッカー'] },
  },
  {
    name: 'ビーコンセプト 中目黒店',
    officialUrl: 'https://b-concept.tokyo/',
    rating: 4.7,
    reviewCount: 14,
    reviews: [
      { author: 'H.A', rating: 5, date: '2週間前', text: '下半身痩せに特化していて確実に効果が出る。中目黒は恵比寿からも近くて通いやすい。' },
      { author: 'N.M', rating: 5, date: '1ヶ月前', text: '医師監修のメソッドが安心。太もも-4cm達成できました！' },
      { author: 'T.K', rating: 4, date: '3週間前', text: '託児所費用補助があるので産後ママにはありがたいです。' },
    ],
    price: '2ヶ月18回 179,685円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '下半身特化', '医師×トレーナー共同開発', '託児所費用補助', '完全個室'],
    description: '医師とトレーナーが共同開発した脚やせメソッドが人気。太もも痩せ・ヒップアップに特化したプログラムで、2ヶ月で美脚を目指す。中目黒駅から徒歩圏内。',
    access: '東急東横線「中目黒駅」徒歩6分',
    address: '東京都目黒区上目黒（中目黒駅徒歩6分）',
    popularPlan: { name: '太ももダイエットプログラム', description: '医師×トレーナー共同開発の脚やせメソッド。75分×18回の集中プログラム。', price: '2ヶ月18回 179,685円〜（税込）' },
    options: ['託児所費用補助（最大1,000円/回）', 'ウェア・タオル無料レンタル', '食事指導付き', '分割払い対応（月々5,545円〜）'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['太もも痩せ', 'ヒップアップ', '産後ダイエット', '美脚'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'ロッカー', 'シャワー'] },
  },
  {
    name: 'かたぎり塾 中目黒店',
    officialUrl: 'https://katagirijuku.jp/',
    rating: 4.5,
    reviewCount: 12,
    reviews: [
      { author: 'L.S', rating: 5, date: '1週間前', text: '月額制で始めやすくて続けやすい。AI食事指導も参考になります。' },
      { author: 'P.M', rating: 4, date: '2週間前', text: '中目黒駅から近くて通いやすい。トレーナーさんの質も高いです。' },
      { author: 'D.T', rating: 4, date: '1ヶ月前', text: '無理なく通えるペースで体が変わってきた。月額制なのがいい。' },
    ],
    price: '月4回 30,800円〜（税込）',
    trial: '体験レッスンあり',
    features: ['月額制', 'AI食事指導', '女性トレーナー在籍', 'リーズナブル', '中目黒駅近'],
    description: '全国展開のパーソナルジムチェーン。月額制で続けやすい料金設定が人気。AI食事指導など最新技術も活用。中目黒の落ち着いた雰囲気で無理なく通える。',
    access: '東急東横線「中目黒駅」徒歩4分',
    address: '東京都目黒区上目黒（中目黒駅徒歩4分）',
    popularPlan: { name: '月4回プラン', description: '月額制のパーソナルトレーニング。AI食事指導付き。', price: '月4回 30,800円〜（税込）' },
    options: ['AI食事指導', '月額制で始めやすい', '回数変更可能'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性70% / 男性30%', purpose: ['ダイエット', '体力向上', '健康維持', 'ボディメイク'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['個室', 'ロッカー'] },
  },
  {
    name: 'Apple GYM 中目黒店',
    rating: 4.5,
    reviewCount: 10,
    reviews: [
      { author: 'W.K', rating: 5, date: '2週間前', text: '海外式ボディメイクで女性らしいシルエットに。料金もリーズナブルで通いやすい。' },
      { author: 'E.H', rating: 4, date: '1ヶ月前', text: '中目黒駅から近くて便利。トレーナーさんが明るくて楽しくトレーニングできます。' },
      { author: 'C.N', rating: 4, date: '3週間前', text: '芸能人も通っているジムだけあって質が高い。見た目の変化がわかりやすい。' },
    ],
    price: '8回 49,280円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用プランあり', '海外式ボディメイク', '完全個室', 'リーズナブル', '芸能人御用達'],
    description: '東京を中心に展開するパーソナルジム。海外式のボディメイクメソッドで、女性らしいシルエットを目指す。芸能人やモデルも通う人気ジム。リーズナブルな料金設定も魅力。',
    access: '東急東横線「中目黒駅」徒歩5分',
    address: '東京都目黒区上目黒（中目黒駅徒歩5分）',
    popularPlan: { name: '8回チケット', description: '海外式ボディメイクのパーソナルトレーニング8回。', price: '8回 49,280円〜（税込）' },
    options: ['海外式ボディメイク', '完全個室', 'ウェアレンタル無料', '食事指導付き'],
    userProfile: { ageRange: '20代〜30代が中心', genderRatio: '女性100%', purpose: ['ボディメイク', 'ダイエット', 'ヒップアップ', '美脚'] },
    basicInfo: { hours: '7:00〜23:00', closed: '不定休', facilities: ['完全個室', 'ロッカー'] },
  },
]

const faqs = [
  { question: '中目黒で女性専用のパーソナルジムはありますか？', answer: 'はい、中目黒エリアにはOUTLINE、ビーコンセプトなどの女性専用パーソナルジムがあります。zen placeやかたぎり塾も女性の利用者が多いスタジオです。' },
  { question: '中目黒のパーソナルジムの料金相場は？', answer: '中目黒エリアのパーソナルジムは月額14,520円〜（zen place）から2ヶ月184,800円〜（OUTLINE）まで幅広い選択肢があります。Apple GYMは8回49,280円〜とリーズナブルです。' },
  { question: '中目黒でピラティスもできるパーソナルジムは？', answer: 'zen place pilates 中目黒スタジオでは、マシンピラティスを使った本格的なピラティストレーニングが受けられます。姿勢改善やインナーマッスル強化に効果的です。' },
  { question: '中目黒で子連れで通えるジムは？', answer: 'OUTLINE中目黒店はベビーサークル完備で子連れOK。ビーコンセプトは託児所費用を最大1,000円/回補助してくれます。' },
]

export default function NakameguroPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-accent text-xs mb-2">更新日 2026年04月29日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              【2026年6月最新】中目黒の女性専用パーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選！料金比較
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light">
              <Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}
              <span className="text-brand-muted">中目黒</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">こんにちは、G-PersonalGym編集部です。</p>
            <p className="text-brand-muted leading-relaxed mb-6">「中目黒で女性専用のパーソナルジムを探している」「おしゃれなエリアで通いやすいジムが知りたい」という方のために、中目黒エリアでおすすめの女性向けパーソナルジム{gyms.length}選をまとめました。</p>
            <div className="bg-ivory border-l-4 border-accent p-6 mb-8">
              <h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-brand-muted">
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>中目黒で女性専用パーソナルジムを探している</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>おしゃれな雰囲気のジムに通いたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>ピラティスも検討している</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>料金を比較して選びたい</span></li>
              </ul>
            </div>
          </div>
        </section>

        <AreaContext slug="nakameguro" />

        <WhyWomenOnly area="中目黒" />

        <PriceComparisonTable gyms={gyms} areaName="中目黒" />

        <section className="py-16 bg-ivory" id="gyms">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">中目黒のおすすめ女性向けパーソナルジム{gyms.length}選</h2>
            <div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-brand-text mb-6 text-center">まとめ</h2>
            <p className="text-brand-muted leading-relaxed mb-4">中目黒エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。</p>
            <p className="text-brand-muted leading-relaxed mb-4">リバウンド防止ならOUTLINE、姿勢改善ならzen place、下半身痩せならビーコンセプト、コスパ重視ならApple GYMがおすすめです。</p>
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
      <RelatedAreas currentSlug="nakameguro" />
      <SiteFooter />
    </>
  )
}
