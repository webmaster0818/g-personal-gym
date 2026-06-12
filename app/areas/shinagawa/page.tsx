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
  title: '【2026年6月最新】品川の女性専用パーソナルジムおすすめ6選！料金比較',
  description: '【2026年4月最新】品川のおすすめ女性専用パーソナルジム6選を徹底比較。UNDEUX SUPERBODY・OUTLINE・Reborn Myselfなど人気ジムの料金・口コミ・特徴を網羅。',
  keywords: '女性専用パーソナルジム,品川,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'UNDEUX SUPERBODY 品川スタジオ',
    officialUrl: 'https://www.diet-undeux.jp/',
    rating: 4.8,
    reviewCount: 20,
    reviews: [
      { author: 'A.K', rating: 5, date: '2週間前', text: '宅配食が美味しくて食事管理が楽。品川駅から近いので仕事帰りに通いやすいです。2ヶ月で5kg減量できました。' },
      { author: 'M.T', rating: 5, date: '1ヶ月前', text: 'パウダールーム完備で手ぶらで通えるのが最高。トレーナーさんも優しく丁寧です。' },
      { author: 'S.N', rating: 4, date: '3週間前', text: '施設が綺麗で清潔感がある。女性専用なので安心して通えます。少し高めですがサービスに見合う価値あり。' },
    ],
    price: '2ヶ月16回 220,000円〜（税込）',
    trial: '体験レッスン0円',
    features: ['女性専用', '食事管理付き', '宅配食無料', 'パウダールーム完備', '品川駅近'],
    description: '全国40店舗以上展開の女性専用パーソナルジム。糖質オフ宅配食を無料提供する総合的なダイエットサポートが特徴。シャワー・パウダールーム・基礎化粧品完備で手ぶらOK。品川駅から好アクセス。',
    access: 'JR「品川駅」徒歩5分',
    address: '東京都港区港南（品川駅徒歩5分）',
    popularPlan: { name: '2ヶ月集中コース', description: 'マンツーマントレーニング16回＋食事指導＋宅配食の総合サポートプラン。', price: '2ヶ月16回 220,000円〜（税込）' },
    options: ['糖質オフ宅配食無料', 'ウェア・タオルレンタル無料', 'シャワー・パウダールーム完備', '基礎化粧品完備', '月額制LIFEプランあり'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', '脚痩せ', '産後ダイエット', 'ボディメイク'] },
    basicInfo: { hours: '9:00〜22:00', closed: '不定休', facilities: ['完全個室', 'シャワー', 'パウダールーム', '基礎化粧品'] },
  },
  {
    name: 'OUTLINE 品川店',
    officialUrl: 'https://www.outline-gym.com/',
    rating: 4.7,
    reviewCount: 15,
    reviews: [
      { author: 'R.S', rating: 5, date: '1週間前', text: '生涯アフターサポートが魅力的。完全個室で人目を気にせずトレーニングできます。' },
      { author: 'K.M', rating: 5, date: '2週間前', text: '女性専用マシンが使いやすい。トレーナーさんの指導が丁寧で効果を実感しています。' },
      { author: 'Y.A', rating: 4, date: '1ヶ月前', text: '料金がリーズナブルで卒業後もサポートしてもらえるのが安心。品川から通いやすいです。' },
    ],
    price: '16回 184,800円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '完全個室', '生涯サポート無料', 'ベビーサークル完備', '女性特化マシン'],
    description: '業界初の生涯無料アフターサポートが最大の特徴。完全個室・女性専用マシン・ベビーサークル完備で、子連れママも安心。リバウンド防止に力を入れたプログラム。',
    access: 'JR「品川駅」徒歩6分',
    address: '東京都港区港南（品川駅徒歩6分）',
    popularPlan: { name: '16回コース', description: '完全個室でのマンツーマントレーニング。卒業後も生涯無料でアフターサポート。', price: '16回 184,800円〜（税込）' },
    options: ['生涯無料アフターサポート', 'ベビーサークル完備', 'ウェアレンタル無料', 'よもぎ蒸し', '高級アミノ酸提供'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '産後ダイエット', 'リバウンド防止'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'ベビーサークル', '女性専用マシン'] },
  },
  {
    name: 'リボーンマイセルフ 品川店',
    officialUrl: 'https://reborn-myself.com/',
    rating: 4.6,
    reviewCount: 13,
    reviews: [
      { author: 'T.H', rating: 5, date: '1週間前', text: 'トレーナーも全員女性で安心。10年以上の実績があるだけあって指導の質が高いです。' },
      { author: 'M.S', rating: 4, date: '2週間前', text: '食事指導が具体的。女性らしいボディラインを目指せるのが嬉しいポイント。' },
      { author: 'E.K', rating: 5, date: '1ヶ月前', text: 'ブライダルコースで通いました。3ヶ月で見違えるほど変わりました。' },
    ],
    price: '入会金38,000円＋コース料金',
    trial: '無料カウンセリング',
    features: ['女性専用', '女性トレーナーのみ', '10年以上の実績', '産後ダイエット対応', 'ブライダルコース'],
    description: '日本初の女性専用ダイエットジム。トレーナーも全員女性。2万人以上の指導実績をもとにしたオリジナルメソッドで、女性本来の柔らかさを残したボディメイクを実現。',
    access: 'JR「品川駅」徒歩5分',
    address: '東京都港区港南（品川駅徒歩5分）',
    popularPlan: { name: 'ダイエットコース', description: '2万人以上の指導実績をもとにしたオリジナルメソッド。女性トレーナーによるマンツーマン指導。', price: '入会金38,000円＋コース料金' },
    options: ['ウェアレンタル無料', '産後ダイエットコース', 'ブライダルダイエットコース', '部分痩せコース'],
    userProfile: { ageRange: '20代〜50代', genderRatio: '女性100%', purpose: ['ダイエット', 'ブライダル', '産後ダイエット', '部分痩せ'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['ロッカー', 'ウェアレンタル'] },
  },
  {
    name: 'ビーコンセプト 品川店',
    officialUrl: 'https://b-concept.tokyo/',
    rating: 4.7,
    reviewCount: 18,
    reviews: [
      { author: 'H.Y', rating: 5, date: '2週間前', text: '太もも痩せに特化したプログラムが効果的。2ヶ月で太もも-3.5cm達成しました！' },
      { author: 'A.N', rating: 5, date: '1ヶ月前', text: '医師監修のメソッドで安心。分割払いで始めやすいのもポイント高いです。' },
      { author: 'K.T', rating: 4, date: '3週間前', text: '品川駅から近くて通いやすい。産後の体型戻しに効果を感じています。' },
    ],
    price: '2ヶ月18回 179,685円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '下半身特化', '医師×トレーナー共同開発', '託児所費用補助', '完全個室'],
    description: '医師とトレーナーが共同開発した独自の脚やせメソッドが人気。太もも痩せ・ヒップアップに特化し、2ヶ月で美脚を目指す。託児所費用補助で産後ママにも対応。',
    access: 'JR「品川駅」徒歩5分',
    address: '東京都港区港南（品川駅徒歩5分）',
    popularPlan: { name: '太ももダイエットプログラム', description: '医師×トレーナー共同開発の脚やせメソッド。75分×18回の集中プログラム。', price: '2ヶ月18回 179,685円〜（税込）' },
    options: ['託児所費用補助（最大1,000円/回）', 'ウェア・タオル無料レンタル', '食事指導付き', '分割払い対応（月々5,545円〜）'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['太もも痩せ', 'ヒップアップ', '産後ダイエット', '美脚'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'ロッカー', 'シャワー'] },
  },
  {
    name: 'クレビック 品川店',
    rating: 4.5,
    reviewCount: 11,
    reviews: [
      { author: 'C.M', rating: 5, date: '2週間前', text: '管理栄養士の食事指導が具体的で実践しやすい。科学的なアプローチが信頼できます。' },
      { author: 'N.K', rating: 4, date: '1ヶ月前', text: '手ぶらで通えるのが便利。料金も良心的で続けやすいです。' },
      { author: 'J.S', rating: 5, date: '3週間前', text: '内側と外側の両面からアプローチしてくれるので効果的。確実に変化を感じます。' },
    ],
    price: '2ヶ月16回 149,800円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専門', '管理栄養士の食事指導', '完全個室', '手ぶらOK', 'リーズナブル'],
    description: '「身体の内側（食事）と外側（トレーニング）」の両面からボディメイクする女性専門パーソナルジム。管理栄養士による食事指導付きで、科学的根拠に基づいたプログラムを提供。',
    access: 'JR「品川駅」徒歩6分',
    address: '東京都港区港南（品川駅徒歩6分）',
    popularPlan: { name: 'ダイエット&ボディメイクコース', description: '管理栄養士の食事指導＋マンツーマントレーニングの総合プログラム。', price: '2ヶ月16回 149,800円〜（税込）' },
    options: ['管理栄養士による食事指導', 'ウェアレンタル無料', 'タオル完備', 'シャワー完備'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '食事改善', '美容'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'シャワー', 'ロッカー'] },
  },
  {
    name: '24/7 Workout 品川店',
    rating: 4.4,
    reviewCount: 22,
    reviews: [
      { author: 'F.T', rating: 5, date: '1週間前', text: '3食食べて痩せるメソッドが魅力的。無理な食事制限がないので続けやすいです。' },
      { author: 'G.M', rating: 4, date: '2週間前', text: '深夜24時まで営業しているので仕事帰りでも余裕で通える。品川勤務には最適。' },
      { author: 'B.Y', rating: 4, date: '1ヶ月前', text: 'トレーナーの質が高い。マンツーマンで丁寧に指導してもらえます。' },
    ],
    price: '2ヶ月16回 257,400円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用プランあり', '完全個室', '深夜営業', '3食食べるダイエット', '全額返金保証'],
    description: '「3食食べて痩せる」がコンセプトの大手パーソナルジム。深夜24時まで営業しており、品川エリアのビジネスパーソンに人気。全額返金保証付きで安心。',
    access: 'JR「品川駅」徒歩5分',
    address: '東京都港区港南（品川駅徒歩5分）',
    popularPlan: { name: '2ヶ月コース', description: '3食食べながら理想の体型を目指す。マンツーマン指導16回。', price: '2ヶ月16回 257,400円〜（税込）' },
    options: ['全額返金保証', 'ウェアレンタル無料', '深夜24時まで営業', '食事指導付き'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '体力向上', '健康維持'] },
    basicInfo: { hours: '7:00〜24:00', closed: '不定休', facilities: ['完全個室', 'シャワー', 'ロッカー'] },
  },
]

const faqs = [
  { question: '品川で女性専用のパーソナルジムはありますか？', answer: 'はい、品川エリアにはUNDEUX SUPERBODY、OUTLINE、リボーンマイセルフ、ビーコンセプト、クレビックなど複数の女性専用パーソナルジムがあります。いずれも品川駅から徒歩圏内です。' },
  { question: '品川のパーソナルジムの料金相場はどれくらい？', answer: '品川エリアの女性向けパーソナルジムの2ヶ月コース料金は約15万〜26万円です。クレビック（149,800円〜）が最もリーズナブルで、ビーコンセプト（179,685円〜）もコスパが良いです。' },
  { question: '品川駅から近いパーソナルジムは？', answer: 'UNDEUX SUPERBODY（徒歩5分）、ビーコンセプト（徒歩5分）、リボーンマイセルフ（徒歩5分）、24/7 Workout（徒歩5分）が品川駅から特に近いジムです。' },
  { question: '品川で仕事帰りに通えるジムは？', answer: '24/7 Workoutは深夜24時まで営業しており、品川で働くビジネスパーソンに最適です。UNDEUX SUPERBODYも22時まで営業しています。' },
  { question: '品川で子連れで通えるジムは？', answer: 'OUTLINE品川店はベビーサークル完備で子連れOK。ビーコンセプトは託児所費用を最大1,000円/回補助してくれます。' },
]

export default function ShinagawaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-accent text-xs mb-2">更新日 2026年04月29日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              【2026年6月最新】品川の女性専用パーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選！料金比較
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light">
              <Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}
              <span className="text-brand-muted">品川</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">こんにちは、G-PersonalGym編集部です。</p>
            <p className="text-brand-muted leading-relaxed mb-6">「品川で女性専用のパーソナルジムを探している」「駅近で仕事帰りに通いやすいジムが知りたい」という方のために、品川エリアでおすすめの女性向けパーソナルジム{gyms.length}選をまとめました。</p>
            <div className="bg-ivory border-l-4 border-accent p-6 mb-8">
              <h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-brand-muted">
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>品川で女性専用パーソナルジムを探している</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>仕事帰りに通いやすいジムが良い</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>料金を比較して選びたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>食事指導も受けたい</span></li>
              </ul>
            </div>
          </div>
        </section>

        <AreaContext slug="shinagawa" />

        <WhyWomenOnly area="品川" />

        <PriceComparisonTable gyms={gyms} areaName="品川" />

        <section className="py-16 bg-ivory" id="gyms">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">品川のおすすめ女性向けパーソナルジム{gyms.length}選</h2>
            <div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-brand-text mb-6 text-center">まとめ</h2>
            <p className="text-brand-muted leading-relaxed mb-4">品川エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。</p>
            <p className="text-brand-muted leading-relaxed mb-4">食事管理重視ならUNDEUX SUPERBODY、コスパと生涯サポートならOUTLINE、下半身痩せならビーコンセプト、女性トレーナー希望ならリボーンマイセルフがおすすめです。</p>
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
      <RelatedAreas currentSlug="shinagawa" />
      <SiteFooter />
    </>
  )
}
