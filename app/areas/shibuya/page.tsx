import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { GymCard } from '@/components/GymCard'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { FAQSchema } from '@/components/FAQSchema'
import { RelatedAreas } from '@/components/RelatedAreas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '【2026最新】渋谷の女性専用パーソナルジムおすすめ7選！料金比較',
  description: '【2026年4月最新】渋谷のおすすめ女性専用パーソナルジム7選を徹底比較。UNDEUX SUPERBODY・OUTLINE・ビーコンセプトなど人気ジムの料金・口コミ・特徴を網羅。',
  keywords: '女性専用パーソナルジム,渋谷,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'UNDEUX SUPERBODY 渋谷スタジオ',
    rating: 4.8,
    reviewCount: 24,
    reviews: [
      { author: 'A.S', rating: 5, date: '2週間前', text: '食事指導が徹底していて、糖質オフの宅配食も美味しい。2ヶ月で6kg減量できました。シャワー・パウダールーム完備で仕事帰りに通いやすいです。' },
      { author: 'M.K', rating: 5, date: '1ヶ月前', text: 'トレーナーさんが優しく丁寧に指導してくれます。渋谷駅から近いので通いやすい。女性専用なので安心感があります。' },
      { author: 'Y.H', rating: 4, date: '3週間前', text: '施設が綺麗で基礎化粧品も完備。手ぶらで通えるのが嬉しい。少し料金は高めですがサービスの質を考えると納得です。' },
    ],
    price: '2ヶ月16回 220,000円〜（税込）',
    trial: '体験レッスン0円',
    features: ['女性専用', '食事管理付き', '宅配食無料', 'パウダールーム完備', '渋谷駅近'],
    description: '全国40店舗以上展開の女性専用パーソナルジム。トレーニングに加え糖質オフ宅配食を無料提供する総合的なダイエットサポートが特徴。シャワー・パウダールーム・基礎化粧品完備で手ぶらOK。渋谷駅から好アクセス。',
    access: 'JR「渋谷駅」徒歩5分',
    address: '東京都渋谷区（渋谷駅徒歩5分）',
    popularPlan: { name: '2ヶ月集中コース', description: 'マンツーマントレーニング16回＋食事指導＋宅配食の総合サポートプラン。', price: '2ヶ月16回 220,000円〜（税込）' },
    options: ['糖質オフ宅配食無料', 'ウェア・タオルレンタル無料', 'シャワー・パウダールーム完備', '基礎化粧品完備', '月額制LIFEプランあり'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', '脚痩せ', '産後ダイエット', 'ボディメイク'] },
    basicInfo: { hours: '9:00〜22:00', closed: '不定休', facilities: ['完全個室', 'シャワー', 'パウダールーム', '基礎化粧品'] },
  },
  {
    name: 'OUTLINE 渋谷店',
    rating: 4.7,
    reviewCount: 18,
    reviews: [
      { author: 'K.T', rating: 5, date: '1週間前', text: '生涯アフターサポートが決め手で入会しました。完全個室で子連れOKなのもありがたい。16回コースで-5kg達成！' },
      { author: 'R.M', rating: 5, date: '2週間前', text: '女性専用マシンで効率よくトレーニングできます。トレーナーさんがとても親切で毎回楽しいです。' },
      { author: 'N.S', rating: 4, date: '1ヶ月前', text: '料金がリーズナブルなのに質が高い。卒業後も無料でサポートしてもらえるのが安心です。' },
    ],
    price: '16回 184,800円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '完全個室', '生涯サポート無料', 'ベビーサークル���備', '女性特化マシン'],
    description: '2年連続「女性に選ばれているパーソナルジム第1位」。業界初の生涯無料アフターサポートが最大の特徴。完全個室・女性専用マシン・ベビーサークル完備で、子連れママも安心。',
    access: 'JR「渋谷駅」徒歩7分',
    address: '東京都渋谷区（渋谷駅徒歩7分）',
    popularPlan: { name: '16回コース', description: '完全個室でのマンツーマントレーニング。���業後も生涯無料でアフターサポート。', price: '16回 184,800円〜（税込）' },
    options: ['生涯無料アフターサポート', 'ベビーサークル完備', 'ウェアレンタル無料', 'よもぎ蒸し', '高級アミノ酸提供'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '産後ダイエット', 'リバウンド防止'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'ベビーサークル', '女性専用マシン'] },
  },
  {
    name: 'ビーコンセプト 渋谷店',
    rating: 4.7,
    reviewCount: 20,
    reviews: [
      { author: 'S.Y', rating: 5, date: '2週間前', text: '太もも痩せに悩んでいましたが、2ヶ月で太もも-4cm達成！医師監修のメソッドが効果的でした。' },
      { author: 'H.N', rating: 5, date: '1ヶ月前', text: '下半身特化のトレーニングが本当に効く。分割払いで月々5,545円から始められるのも嬉しい。' },
      { author: 'A.M', rating: 4, date: '3週間前', text: '託児所費用の補助があるのがありがたい。産後の体型戻しに通っています。' },
    ],
    price: '2ヶ月18回 179,685円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '下半身特化', '医師×トレーナー共同開発', '託児所費用補助', '完全個室'],
    description: '医師とトレーナーが共同開発した独自の脚やせメソッドが人気。太もも痩せ・ヒップアップに特化し、2ヶ月で美脚を目指す。託児所費用補助で産後ママにも対応。月々5,545円〜の分割払い可。',
    access: 'JR「渋谷駅」徒歩5分',
    address: '東京都渋谷区（渋谷駅徒歩5分）',
    popularPlan: { name: '太ももダイエットプログラム', description: '医師×トレーナー共同開発の脚やせメソッド。75分×18回の集中プログラム。', price: '2ヶ月18回 179,685円〜（税込）' },
    options: ['託児所費用補助（最大1,000円/回）', 'ウェア・タオル無料レンタル', '食事指導付き', '分割払い対応（月々5,545円〜）'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['太もも痩せ', 'ヒップアップ', '産後ダイエット', '美脚'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'ロッカー', 'シャワー'] },
  },
  {
    name: 'リボーンマイセルフ 渋谷店',
    rating: 4.6,
    reviewCount: 15,
    reviews: [
      { author: 'T.K', rating: 5, date: '1週間前', text: 'トレーナーも全員女性なので安心して通えます。10年以上の実績があるだけあって指導の質が高い。' },
      { author: 'M.O', rating: 4, date: '2週間前', text: '食事指導が具体的で分かりやすい。女性らしい柔らかいボディラインを目指せるのが嬉しい。' },
      { author: 'E.S', rating: 5, date: '1ヶ月前', text: 'ブライダルダイエットコースで通いました。3ヶ月で-7kg、ドレスが綺麗に着れて大満足です。' },
    ],
    price: '入会金38,000円＋コース料金',
    trial: '無料カウンセリング',
    features: ['女性専用', '女性トレーナーのみ', '10年以上の実績', '産後ダイエット対応', 'ブライダルコース'],
    description: '2010年創業の日本初の女性専用ダイエットジム。トレーナーも全員女性。2万人以上の指導実績をもとにしたオリジナルメソッドで、女性本来の柔らかさを残したボディメイクを実現。',
    access: 'JR「渋谷駅」徒歩6分',
    address: '東京都渋谷区（渋谷駅徒歩6分）',
    popularPlan: { name: 'ダイエットコース', description: '2万人以上の指導実績をもとにしたオリジナルメソッド。女性トレーナーによるマンツーマン指導。', price: '入会金38,000円＋コース料金' },
    options: ['ウェアレンタル無料', '産後ダイエットコース', 'ブライダルダイエットコース', '部分痩せコース'],
    userProfile: { ageRange: '20代〜50代', genderRatio: '女性100%', purpose: ['ダイエット', 'ブライダル', '産後ダイエット', '部分痩せ'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['ロッカー', 'ウェアレンタル'] },
  },
  {
    name: 'クレビック 渋谷店',
    rating: 4.6,
    reviewCount: 12,
    reviews: [
      { author: 'C.H', rating: 5, date: '2週間前', text: '管理栄養士の食事指導が科学的で説得力がある。トレーニングもきちんとフォームを教えてくれるので効果的。' },
      { author: 'K.W', rating: 4, date: '1ヶ月前', text: '女性専門なので安心。施設も綺麗で手ぶらで通える。料金も他と比べてリーズナブルだと思います。' },
      { author: 'J.T', rating: 5, date: '3週間前', text: '内側（食事）と外側（トレーニング）の両面からアプローチしてくれるのが良い。確実に結果が出ます。' },
    ],
    price: '2ヶ月16回 149,800円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専門', '管理栄養士の食事指導', '完全個室', '手ぶらOK', 'リーズナブル'],
    description: '「身体の内側（食事）と外側（トレーニング）」の両面からボディメイクする女性専門パーソナルジム。管理栄養士による食事指導付きで、科学的根拠に基づいたプログラムを提供。比較的リーズナブルな料金設定。',
    access: 'JR「渋谷駅」徒歩5分',
    address: '東京都渋谷区（渋谷駅徒歩5分）',
    popularPlan: { name: 'ダイエッ��&ボディメイクコース', description: '管理栄養士の食事指導＋マンツーマントレーニングの総合プログラム。', price: '2ヶ月16回 149,800円〜（税込）' },
    options: ['管理栄養士による食事指導', 'ウェアレンタル無料', 'タオル完備', 'シャワー完備'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '食事改善', '美容'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'シャワー', 'ロッカー'] },
  },
  {
    name: 'かたぎり塾 渋谷店',
    rating: 4.5,
    reviewCount: 16,
    reviews: [
      { author: 'L.M', rating: 5, date: '1週間前', text: '月額制で始めやすい。AI食事指導も面白くて続けやすい。トレーナーの質も高いです。' },
      { author: 'P.N', rating: 4, date: '2週間前', text: '料金がリーズナブルで継続しやすい。女性のトレーナーさんもいるので相談しやすいです。' },
      { author: 'D.K', rating: 4, date: '1ヶ月前', text: '月4回プランから始められるのが良い。無理なく通えて着実に体が変わってきました。' },
    ],
    price: '月4回 30,800円〜（税込）',
    trial: '体験レッスンあり',
    features: ['月額制', 'AI食事指導', '女性トレーナー在籍', 'リーズナブル', '渋谷駅近'],
    description: '全国に店舗を展開するパーソナルジムチェーン。月額制で続けやすい料金設定が人気。AI食事指導など最新技術も活用。女性トレーナーも在籍しており、渋谷駅からアクセス良好。',
    access: 'JR「渋谷駅」徒歩5分',
    address: '東京都渋谷区（渋谷駅徒歩5分）',
    popularPlan: { name: '月4回プラン', description: '月額制のパーソナルトレーニング。AI食事指導付き。', price: '月4回 30,800円〜（税込）' },
    options: ['AI食事指導', '月額制で始めやすい', '回数変更可能'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性70% / 男性30%', purpose: ['ダイエット', '体力向上', '健康維持', 'ボディメイク'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['個室', 'ロッカー'] },
  },
  {
    name: 'エクササイズコーチ 渋谷店',
    rating: 4.4,
    reviewCount: 22,
    reviews: [
      { author: 'F.Y', rating: 5, date: '1週間前', text: '1回20分で効率的！忙しくても続けやすい。AI主導なので毎回最適な負荷でトレーニングできます。' },
      { author: 'G.S', rating: 4, date: '2週間前', text: '月4回12,000円は本当に安い。パーソナルジムのハードルがグンと下がりました。' },
      { author: 'B.T', rating: 4, date: '1ヶ月前', text: '利用者の8割が女性なので安心。短時��で効果的なトレーニングができるのが魅力です。' },
    ],
    price: '月4回 12,000円〜（税込）',
    trial: '無料体験あり',
    features: ['AI主導', '1回20分', '低価格', '女性利用者8割', '渋谷駅近'],
    description: 'アメリカ発のAI主導パーソナルトレーニングジム。1回わずか20分で効率的にトレーニングでき、月4回12,000円〜と低価格。利用者の8割以上が女性。忙しい女性に人気のジム。',
    access: 'JR「渋谷駅」徒歩3分',
    address: '東京都渋谷区（渋谷駅徒歩3分）',
    popularPlan: { name: '月4回プラン', description: 'AIが最適な負荷を設定。1回20分の効率トレーニング。', price: '月4回 12,000円〜（税込）' },
    options: ['AI個別最適化', '1回20分', 'ウェアレンタル無料'],
    userProfile: { ageRange: '20代〜50代', genderRatio: '女性80% / 男性20%', purpose: ['ダイエット', '健康維持', '体力向上', '運動習慣'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定���', facilities: ['トレーニングマシン', 'ロッカー'] },
  },
]

const faqs = [
  { question: '渋谷で女性専用のパーソナルジムはどこがおすすめ？', answer: 'UNDEUX SUPERBODY、OUTLINE、ビーコンセプト、リボーンマイセルフ、クレビックが渋谷で人気の女性専用パーソナルジムです。それぞれ特徴が異なるので、食事管理重視ならUNDEUX、コスパ重視ならOUTLINE、下半身痩せならビーコンセプトがおすすめです。' },
  { question: '渋谷のパーソナルジムの料金相場は？', answer: '渋谷エリアの女性向けパーソナルジムの2ヶ月��ース料金は約15万〜22万円。月額制なら月12,000円〜30,800円程度。エクササイズコーチは月4回12,000円〜と最安クラスです。' },
  { question: '渋谷駅から近いパーソナルジムは？', answer: 'エクササイズコーチ渋谷店（徒歩3分）、UNDEUX SUPERBODY（徒歩5分）、ビーコンセプト（徒歩5分）、クレビック（徒歩5分）が渋谷駅から特に近いジムです。' },
  { question: '子連れで通えるジムはある？', answer: 'OUTLINE渋谷店はベビーサークル完備で子連れOK。ビーコンセプトは託児所費用を最大1,000円/回補助してくれます。' },
  { question: '体験レッスンは無料で受けられる？', answer: 'UNDEUX SUPERBODYは体験0円、エクササイズコーチも無料体験あり。OUTLINE、ビーコンセプト、リボーンマイセルフは無料カウンセリングを実施しています。' },
  { question: '初心者でも大丈夫？', answer: 'はい、全ジムで初心者歓迎です。パーソナルジムはマンツーマン指導なので、運動経験がなくても一人ひとりのレベルに合わせたメニューを組んでもらえます。' },
  { question: '渋谷で最も安いパーソナルジムは？', answer: 'エクササイズコーチ（月4回12,000円〜）が最安。2ヶ月コースではクレビック（149,800円〜）がコスパ良好。OUTLINEは生涯サポート付きで184,800円〜。' },
  { question: '短時間で通えるジムは？', answer: 'エクササイズコーチは1回20分で完了。忙しい方に最適です。他のジムも50〜75分のセッションが一般的です。' },
  { question: '食事指導が充実しているジムは？', answer: 'UNDEUX SUPERBODYは糖質オフ宅配食を無料提供。クレビックは管理栄養士による食事指導。ビーコンセプトは医師監修の食事指導が受けられます。' },
  { question: 'リバウンドが心配な場合は？', answer: 'OUTLINE（アウトライン）は業界初の「生涯無料アフターサポート」があり、卒業後もずっとサポートが受けられます。リバウンドが心配な方に最もおすすめです。' },
]

export default function ShibuyaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-accent text-xs mb-2">更新日 2026年04月13日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              【2026最新】渋谷の女性専用パーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選！料金比較
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light">
              <Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}
              <span className="text-brand-muted">渋谷</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">こんにちは、G-PersonalGym編集部です。</p>
            <p className="text-brand-muted leading-relaxed mb-6">「渋谷で女性専用のパーソナルジムを探している」「駅近で通いやすいジムが知りたい」という方のために、渋谷エリアでおすすめの女性向けパーソナルジム{gyms.length}選をまとめました。</p>
            <div className="bg-ivory border-l-4 border-accent p-6 mb-8">
              <h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-brand-muted">
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>渋谷で女性専用パーソナルジムを探している</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>駅近で通いやすいジムが良い</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>料金を比較して選びたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>食事指導も受けたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>子連れで通いたい</span></li>
              </ul>
            </div>
          </div>
        </section>

        <PriceComparisonTable gyms={gyms} areaName="渋谷" />

        <section className="py-16 bg-ivory" id="gyms">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">渋谷のおすすめ女性向けパーソナルジム{gyms.length}選</h2>
            <div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">目的別おすすめ</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">コスパ重視</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・エクササイズコーチ（月4回 12,000円〜）</li><li className="text-brand-muted">・クレビック（16回 149,800円〜）</li><li className="text-brand-muted">・ビーコンセプト（18回 179,685円〜）</li></ul>
              </div>
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">食事サポート重視</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・UNDEUX SUPERBODY（宅配食無料）</li><li className="text-brand-muted">・クレビック（管理栄養士指導）</li><li className="text-brand-muted">・ビーコンセプト（医師監修指導）</li></ul>
              </div>
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">子連れ対応</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・OUTLINE（ベビーサークル完備）</li><li className="text-brand-muted">・ビーコンセプト（託児所費用補助）</li></ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-ivory">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">渋谷の料金相場【2026年4月】</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="font-bold text-brand-text mb-3">2ヶ月集中コース</h3>
                <p className="text-3xl font-bold text-accent mb-2">15万〜22万円</p>
                <p className="text-sm text-brand-muted">クレビック149,800円〜が最安。UNDEUX 220,000円〜が最高。平均18万円前後。</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="font-bold text-brand-text mb-3">月額制</h3>
                <p className="text-3xl font-bold text-accent mb-2">1.2万〜3.1万円/月</p>
                <p className="text-sm text-brand-muted">エクササイズコーチ12,000��〜が最安。かたぎり塾30,800円〜も人気。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">渋谷で選ぶ際の注意点</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="text-lg font-bold text-brand-text mb-3">渋谷駅は出口が多い</h3>
                <p className="text-brand-muted leading-relaxed">渋谷駅は複数の路線が乗り入れ、出口も多いです。通いたいジムがどの出口から近いかを事前に確認しましょう。</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="text-lg font-bold text-brand-text mb-3">体験レッスンは2〜3ジム比較を</h3>
                <p className="text-brand-muted leading-relaxed">渋谷は選択肢が多いエリア。最低2〜3ジムの体験に行って、トレーナーとの相性や雰囲気を比較してから決めましょう。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-ivory">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">体験時の持ち物ガイド</h2>
            <div className="bg-white rounded-xl p-8 border border-line">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-brand-text mb-4">必須の持ち物</h3>
                  <ul className="space-y-3 text-brand-muted text-sm">
                    <li>・<strong>動きやすいウェア</strong>（レンタルありのジムも多い）</li>
                    <li>・<strong>室内シューズ</strong>（レンタルありのジムも）</li>
                    <li>・<strong>水分（500ml以上）</strong></li>
                    <li>・<strong>フェイスタオル</strong></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-text mb-4">あると便利なもの</h3>
                  <ul className="space-y-3 text-brand-muted text-sm">
                    <li>・着替え（仕事帰りの場合）</li>
                    <li>・メイク道具（シャワー後用）</li>
                    <li>・目標の体型のイメージ写真</li>
                  </ul>
                </div>
              </div>
            </div>
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

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-brand-text mb-6 text-center">まとめ</h2>
            <p className="text-brand-muted leading-relaxed mb-4">渋谷エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。</p>
            <p className="text-brand-muted leading-relaxed mb-4">食事管理重視ならUNDEUX SUPERBODY、コスパと生涯サポートならOUTLINE、下半身痩せならビーコンセプト、女性トレーナー希望ならリボーンマイセルフがおすすめです。</p>
            <p className="text-brand-muted leading-relaxed">まずは気になるジムの体験レッスンに行ってみてください。</p>
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
      <RelatedAreas currentSlug="shibuya" />
      <SiteFooter />
    </>
  )
}
