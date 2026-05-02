import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { GymCard } from '@/components/GymCard'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { FAQSchema } from '@/components/FAQSchema'
import { RelatedAreas } from '@/components/RelatedAreas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '【2026最新】上野の女性専用パーソナルジムおすすめ6選！料金比較',
  description: '【2026年4月最新】上野のおすすめ女性専用パーソナルジム6選を徹底比較。OUTLINE・B-CONCEPT・CREBIQなど人気ジムの料金・口コミ・特徴を網羅。',
  keywords: '女性専用パーソナルジム,上野,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'OUTLINE 上野店',
    rating: 4.8,
    reviewCount: 15,
    reviews: [
      { author: 'A.S', rating: 5, date: '1週間前', text: '生涯アフターサポート付きでリバウンドの心配がない。上野駅からも近くて便利。' },
      { author: 'M.K', rating: 5, date: '2週間前', text: '完全個室で子連れOK。女性専用マシンで効果的にトレーニングできます。' },
      { author: 'Y.T', rating: 4, date: '1ヶ月前', text: '料金がリーズナブル。卒業後もサポートしてもらえるのが安心です。' },
    ],
    price: '16回 184,800円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '完全個室', '生涯サポート無料', 'ベビーサークル完備', '女性特化マシン'],
    description: '生涯無料アフターサポートが特徴の女性専用ジム。上野駅から徒歩圏内の好立地。完全個室・ベビーサークル完備で産後ママも安心。コスパの良さで人気。',
    access: 'JR「上野駅」徒歩5分',
    address: '東京都台東区上野（上野駅徒歩5分）',
    popularPlan: { name: '16回コース', description: '完全個室でのマンツーマントレーニング。卒業後も生涯無料でアフターサポート。', price: '16回 184,800円〜（税込）' },
    options: ['生涯無料アフターサポート', 'ベビーサークル完備', 'ウェアレンタル無料', 'よもぎ蒸し', '高級アミノ酸提供'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '産後ダイエット', 'リバウンド防止'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'ベビーサークル', '女性専用マシン'] },
  },
  {
    name: 'ビーコンセプト 上野店',
    rating: 4.7,
    reviewCount: 16,
    reviews: [
      { author: 'H.N', rating: 5, date: '2週間前', text: '下半身特化のプログラムが効果的。太もも-3.5cm達成しました！' },
      { author: 'S.M', rating: 5, date: '1ヶ月前', text: '医師監修で安心感がある。分割払いで始めやすいです。' },
      { author: 'K.A', rating: 4, date: '3週間前', text: '上野駅から近い。産後の体型戻しに通っています。' },
    ],
    price: '2ヶ月18回 179,685円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '下半身特化', '医師×トレーナー共同開発', '託児所費用補助', '完全個室'],
    description: '医師とトレーナー共同開発の脚やせメソッドが人気。上野エリアで太もも痩せ・ヒップアップに特化。託児所費用補助で産後ママにも対応。',
    access: 'JR「上野駅」徒歩5分',
    address: '東京都台東区上野（上野駅徒歩5分）',
    popularPlan: { name: '太ももダイエットプログラム', description: '医師×トレーナー共同開発の脚やせメソッド。75分×18回の集中プログラム。', price: '2ヶ月18回 179,685円〜（税込）' },
    options: ['託児所費用補助（最大1,000円/回）', 'ウェア・タオル無料レンタル', '食事指導付き', '分割払い対応（月々5,545円〜）'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['太もも痩せ', 'ヒップアップ', '産後ダイエット', '美脚'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'ロッカー', 'シャワー'] },
  },
  {
    name: 'クレビック 上野店',
    rating: 4.6,
    reviewCount: 11,
    reviews: [
      { author: 'C.T', rating: 5, date: '2週間前', text: '管理栄養士の食事指導が科学的で実践しやすい。コスパが良いです。' },
      { author: 'J.K', rating: 4, date: '1ヶ月前', text: '手ぶらで通えるのが便利。完全個室で安心してトレーニングできます。' },
      { author: 'L.S', rating: 5, date: '3週間前', text: '食事と運動の両面からアプローチしてくれるので確実に効果が出ます。' },
    ],
    price: '2ヶ月16回 149,800円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専門', '管理栄養士の食事指導', '完全個室', '手ぶらOK', 'リーズナブル'],
    description: '管理栄養士による食事指導と科学的トレーニングが特徴。上野エリアでリーズナブルに本格的なボディメイクが可能。手ぶらで通える充実した設備。',
    access: 'JR「上野駅」徒歩6分',
    address: '東京都台東区上野（上野駅徒歩6分）',
    popularPlan: { name: 'ダイエット&ボディメイクコース', description: '管理栄養士の食事指導＋マンツーマントレーニングの総合プログラム。', price: '2ヶ月16回 149,800円〜（税込）' },
    options: ['管理栄養士による食事指導', 'ウェアレンタル無料', 'タオル完備', 'シャワー完備'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '食事改善', '美容'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'シャワー', 'ロッカー'] },
  },
  {
    name: 'UNDEUX SUPERBODY 上野スタジオ',
    rating: 4.7,
    reviewCount: 13,
    reviews: [
      { author: 'R.H', rating: 5, date: '1週間前', text: '宅配食が美味しくて食事管理が楽。上野駅から近くて通いやすいです。' },
      { author: 'N.Y', rating: 5, date: '2週間前', text: 'パウダールーム完備で仕事帰りでも安心。トレーナーさんが優しい。' },
      { author: 'T.M', rating: 4, date: '1ヶ月前', text: '女性専用で安心。施設が綺麗で手ぶらで通えるのが嬉しいです。' },
    ],
    price: '2ヶ月16回 220,000円〜（税込）',
    trial: '体験レッスン0円',
    features: ['女性専用', '食事管理付き', '宅配食無料', 'パウダールーム完備', '上野駅近'],
    description: '糖質オフ宅配食を無料提供する女性専用パーソナルジム。トレーニングと食事の総合サポート。パウダールーム・基礎化粧品完備で手ぶらOK。',
    access: 'JR「上野駅」徒歩5分',
    address: '東京都台東区上野（上野駅徒歩5分）',
    popularPlan: { name: '2ヶ月集中コース', description: 'マンツーマントレーニング16回＋食事指導＋宅配食の総合サポートプラン。', price: '2ヶ月16回 220,000円〜（税込）' },
    options: ['糖質オフ宅配食無料', 'ウェア・タオルレンタル無料', 'シャワー・パウダールーム完備', '基礎化粧品完備', '月額制LIFEプランあり'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', '脚痩せ', '産後ダイエット', 'ボディメイク'] },
    basicInfo: { hours: '9:00〜22:00', closed: '不定休', facilities: ['完全個室', 'シャワー', 'パウダールーム', '基礎化粧品'] },
  },
  {
    name: 'かたぎり塾 上野店',
    rating: 4.4,
    reviewCount: 14,
    reviews: [
      { author: 'F.S', rating: 5, date: '2週間前', text: '月額制で始めやすい。AI食事指導が面白くて続けやすいです。' },
      { author: 'G.K', rating: 4, date: '1ヶ月前', text: '上野駅から近い。リーズナブルな料金で質の高いトレーニング。' },
      { author: 'B.M', rating: 4, date: '3週間前', text: '月4回から始められるのが良い。着実に変化を感じています。' },
    ],
    price: '月4回 30,800円〜（税込）',
    trial: '体験レッスンあり',
    features: ['月額制', 'AI食事指導', '女性トレーナー在籍', 'リーズナブル', '上野駅近'],
    description: '全国展開のパーソナルジムチェーン。月額制で続けやすく、AI食事指導も活用。上野エリアでリーズナブルにパーソナルトレーニング。',
    access: 'JR「上野駅」徒歩4分',
    address: '東京都台東区上野（上野駅徒歩4分）',
    popularPlan: { name: '月4回プラン', description: '月額制のパーソナルトレーニング。AI食事指導付き。', price: '月4回 30,800円〜（税込）' },
    options: ['AI食事指導', '月額制で始めやすい', '回数変更可能'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性70% / 男性30%', purpose: ['ダイエット', '体力向上', '健康維持', 'ボディメイク'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['個室', 'ロッカー'] },
  },
  {
    name: 'エクササイズコーチ 上野店',
    rating: 4.3,
    reviewCount: 19,
    reviews: [
      { author: 'D.T', rating: 5, date: '1週間前', text: '1回20分で効率的。月12,000円〜はパーソナルジムとしては破格の安さ。' },
      { author: 'E.N', rating: 4, date: '2週間前', text: 'AI主導で毎回最適化。上野駅から近くて通いやすいです。' },
      { author: 'W.S', rating: 4, date: '1ヶ月前', text: '女性利用者が8割以上で安心。短時間で効果的なのが魅力。' },
    ],
    price: '月4回 12,000円〜（税込）',
    trial: '無料体験あり',
    features: ['AI主導', '1回20分', '低価格', '女性利用者8割', '上野駅近'],
    description: 'AI主導の効率的パーソナルトレーニング。1回20分で月4回12,000円〜。利用者の8割以上が女性。上野駅から近く、短時間で効果的なトレーニング。',
    access: 'JR「上野駅」徒歩3分',
    address: '東京都台東区上野（上野駅徒歩3分）',
    popularPlan: { name: '月4回プラン', description: 'AIが最適な負荷を設定。1回20分の効率トレーニング。', price: '月4回 12,000円〜（税込）' },
    options: ['AI個別最適化', '1回20分', 'ウェアレンタル無料'],
    userProfile: { ageRange: '20代〜50代', genderRatio: '女性80% / 男性20%', purpose: ['ダイエット', '健康維持', '体力向上', '運動習慣'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['トレーニングマシン', 'ロッカー'] },
  },
]

const faqs = [
  { question: '上野で女性専用のパーソナルジムはありますか？', answer: 'はい、上野エリアにはOUTLINE、ビーコンセプト、クレビック、UNDEUX SUPERBODYなど複数の女性専用パーソナルジムがあります。いずれも上野駅から徒歩圏内です。' },
  { question: '上野のパーソナルジムの料金相場は？', answer: '上野エリアの料金はエクササイズコーチ（月12,000円〜）からUNDEUX SUPERBODY（2ヶ月220,000円〜）まで幅広い選択肢。クレビック（149,800円〜）が2ヶ月コースで最安クラスです。' },
  { question: '上野で食事指導が充実しているジムは？', answer: 'UNDEUX SUPERBODY（糖質オフ宅配食無料）、クレビック（管理栄養士指導）が食事サポートに特に力を入れています。' },
  { question: '上野で最も安いパーソナルジムは？', answer: 'エクササイズコーチ上野店（月4回12,000円〜）が最安。2ヶ月コースではクレビック（149,800円〜）がコスパに優れています。' },
  { question: '上野で子連れで通えるジムは？', answer: 'OUTLINE上野店はベビーサークル完備で子連れOK。ビーコンセプトは託児所費用を最大1,000円/回補助してくれます。' },
]

export default function UenoPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-rose-100 via-rose-50 to-purple-50 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-rose-500 text-xs mb-2">更新日 2026年04月29日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              【2026最新】上野の女性専用パーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選！料金比較
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-rose-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light">
              <Link href="/" className="hover:text-rose-500 transition">ホーム</Link>{' > '}
              <span className="text-brand-muted">上野</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">こんにちは、G-PersonalGym編集部です。</p>
            <p className="text-brand-muted leading-relaxed mb-6">「上野で女性専用のパーソナルジムを探している」「駅近で通いやすいジムが知りたい」という方のために、上野エリアでおすすめの女性向けパーソナルジム{gyms.length}選をまとめました。</p>
            <div className="bg-rose-50 border-l-4 border-rose-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-brand-muted">
                <li className="flex items-start"><span className="text-rose-400 mr-2">✓</span><span>上野で女性専用パーソナルジムを探している</span></li>
                <li className="flex items-start"><span className="text-rose-400 mr-2">✓</span><span>駅近で通いやすいジムが良い</span></li>
                <li className="flex items-start"><span className="text-rose-400 mr-2">✓</span><span>料金を比較して選びたい</span></li>
                <li className="flex items-start"><span className="text-rose-400 mr-2">✓</span><span>食事指導も受けたい</span></li>
              </ul>
            </div>
          </div>
        </section>

        <PriceComparisonTable gyms={gyms} areaName="上野" />

        <section className="py-16 bg-rose-50" id="gyms">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">上野のおすすめ女性向けパーソナルジム{gyms.length}選</h2>
            <div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-brand-text mb-6 text-center">まとめ</h2>
            <p className="text-brand-muted leading-relaxed mb-4">上野エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。</p>
            <p className="text-brand-muted leading-relaxed mb-4">コスパ重視ならOUTLINEやクレビック、食事管理重視ならUNDEUX SUPERBODY、下半身痩せならビーコンセプトがおすすめです。</p>
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
      <RelatedAreas currentSlug="ueno" />
      <SiteFooter />
    </>
  )
}
