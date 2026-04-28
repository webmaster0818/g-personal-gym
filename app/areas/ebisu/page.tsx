import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { GymCard } from '@/components/GymCard'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { FAQSchema } from '@/components/FAQSchema'
import { RelatedAreas } from '@/components/RelatedAreas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '【2026最新】恵比寿の女性専用パーソナルジムおすすめ6選！料金比較',
  description: '【2026年4月最新】恵比寿のおすすめ女性専用パーソナルジム6選を徹底比較。UNDEUX SUPERBODY・OUTLINE・ビーコンセプトなど人気ジムの料金・口コミ・特徴を網羅。',
  keywords: '女性専用パーソナルジム,恵比寿,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'UNDEUX SUPERBODY 恵比寿スタジオ',
    rating: 4.8,
    reviewCount: 22,
    reviews: [
      { author: 'A.K', rating: 5, date: '2週間前', text: '恵比寿駅から近くて通いやすい。宅配食が美味しくて食事管理が楽でした。2ヶ月で-5kg達成！' },
      { author: 'M.S', rating: 5, date: '1ヶ月前', text: 'パウダールーム完備で仕事帰りに通えるのが最高。トレーナーさんの指導も丁寧です。' },
      { author: 'Y.T', rating: 4, date: '3週間前', text: '基礎化粧品まで揃っていて手ぶらでOK。施設が綺麗で女性専用なので安心感があります。' },
    ],
    price: '2ヶ月16回 220,000円〜（税込）',
    trial: '体験レッスン0円',
    features: ['女性専用', '食事管理付き', '宅配食無料', 'パウダールーム完備', '恵比寿駅近'],
    description: '全国40店舗以上展開の女性専用パーソナルジム。トレーニングに加え糖質オフ宅配食を無料提供する総合的なダイエットサポートが特徴。シャワー・パウダールーム・基礎化粧品完備で手ぶらOK。恵比寿駅から好アクセス。',
    access: 'JR「恵比寿駅」徒歩4分',
    address: '東京都渋谷区恵比寿（恵比寿駅徒歩4分）',
    popularPlan: { name: '2ヶ月集中コース', description: 'マンツーマントレーニング16回＋食事指導＋宅配食の総合サポートプラン。', price: '2ヶ月16回 220,000円〜（税込）' },
    options: ['糖質オフ宅配食無料', 'ウェア・タオルレンタル無料', 'シャワー・パウダールーム完備', '基礎化粧品完備', '月額制LIFEプランあり'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', '脚痩せ', '産後ダイエット', 'ボディメイク'] },
    basicInfo: { hours: '9:00〜22:00', closed: '不定休', facilities: ['完全個室', 'シャワー', 'パウダールーム', '基礎化粧品'] },
  },
  {
    name: 'OUTLINE 恵比寿・広尾店',
    rating: 4.7,
    reviewCount: 16,
    reviews: [
      { author: 'K.N', rating: 5, date: '1週間前', text: '生涯アフターサポートが心強い。完全個室でベビーサークルもあり、子連れで通えました。' },
      { author: 'R.H', rating: 5, date: '2週間前', text: '女性専用マシンでのトレーニングが効率的。よもぎ蒸しも気持ちよくてリラックスできます。' },
      { author: 'N.M', rating: 4, date: '1ヶ月前', text: '卒業後も無料サポートが続くのが安心。リバウンドの心配がなくなりました。' },
    ],
    price: '16回 184,800円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '完全個室', '生涯サポート無料', 'ベビーサークル完備', 'よもぎ蒸し'],
    description: '業界初の生涯無料アフターサポートが最大の特徴。完全個室・女性専用マシン・ベビーサークル完備で子連れママも安心。恵比寿・広尾エリアで女性のダイエットに特化。',
    access: 'JR「恵比寿駅」徒歩6分',
    address: '東京都渋谷区恵比寿（恵比寿駅徒歩6分）',
    popularPlan: { name: '16回コース', description: '完全個室でのマンツーマントレーニング。卒業後も生涯無料でアフターサポート。', price: '16回 184,800円〜（税込）' },
    options: ['生涯無料アフターサポート', 'ベビーサークル完備', 'ウェアレンタル無料', 'よもぎ蒸し', '高級アミノ酸提供'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '産後ダイエット', 'リバウンド防止'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'ベビーサークル', '女性専用マシン'] },
  },
  {
    name: 'ビーコンセプト 恵比寿店',
    rating: 4.7,
    reviewCount: 19,
    reviews: [
      { author: 'S.A', rating: 5, date: '2週間前', text: '恵比寿駅から徒歩2分で最高の立地。太もも-5cm達成できて大満足です！' },
      { author: 'H.Y', rating: 5, date: '1ヶ月前', text: '下半身特化のプログラムが本当に効果的。医師監修メソッドの信頼感があります。' },
      { author: 'A.I', rating: 4, date: '3週間前', text: '託児所費用補助があるので産後ママに嬉しい。分割払いで始めやすかったです。' },
    ],
    price: '2ヶ月18回 179,685円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '下半身特化', '医師×トレーナー共同開発', '託児所費用補助', '駅徒歩2分'],
    description: '医師とトレーナーが共同開発した独自の脚やせメソッドが人気。恵比寿駅徒歩2分の好立地。太もも痩せ・ヒップアップに特化し、2ヶ月で美脚を目指す。託児所費用補助あり。',
    access: 'JR「恵比寿駅」徒歩2分',
    address: '東京都渋谷区恵比寿（恵比寿駅徒歩2分）',
    popularPlan: { name: '太ももダイエットプログラム', description: '医師×トレーナー共同開発の脚やせメソッド。75分×18回の集中プログラム。', price: '2ヶ月18回 179,685円〜（税込）' },
    options: ['託児所費用補助（最大1,000円/回）', 'ウェア・タオル無料レンタル', '食事指導付き', '分割払い対応（月々5,545円〜）'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['太もも痩せ', 'ヒップアップ', '産後ダイエット', '美脚'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'ロッカー', 'シャワー'] },
  },
  {
    name: 'リボーンマイセルフ 恵比寿店',
    rating: 4.6,
    reviewCount: 14,
    reviews: [
      { author: 'T.M', rating: 5, date: '1週間前', text: 'トレーナーが全員女性で本当に安心。食事指導も的確で無理なく続けられました。' },
      { author: 'M.K', rating: 4, date: '2週間前', text: '10年以上の実績があるだけあって指導の質が高い。ブライダルコースで理想の体型に。' },
      { author: 'E.N', rating: 5, date: '1ヶ月前', text: '恵比寿の落ち着いた雰囲気の中でトレーニングできるのが良い。結果も出ました。' },
    ],
    price: '入会金38,000円＋コース料金',
    trial: '無料カウンセリング',
    features: ['女性専用', '女性トレーナーのみ', '10年以上の実績', '産後ダイエット対応', 'ブライダルコース'],
    description: '日本初の女性専用ダイエットジム。トレーナーも全員女性。2万人以上の指導実績をもとにしたオリジナルメソッドで、女性本来の柔らかさを残したボディメイクを実現。',
    access: 'JR「恵比寿駅」徒歩5分',
    address: '東京都渋谷区恵比寿（恵比寿駅徒歩5分）',
    popularPlan: { name: 'ダイエットコース', description: '2万人以上の指導実績をもとにしたオリジナルメソッド。女性トレーナーによるマンツーマン指導。', price: '入会金38,000円＋コース料金' },
    options: ['ウェアレンタル無料', '産後ダイエットコース', 'ブライダルダイエットコース', '部分痩せコース'],
    userProfile: { ageRange: '20代〜50代', genderRatio: '女性100%', purpose: ['ダイエット', 'ブライダル', '産後ダイエット', '部分痩せ'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['ロッカー', 'ウェアレンタル'] },
  },
  {
    name: 'LIM 恵比寿店',
    rating: 4.5,
    reviewCount: 11,
    reviews: [
      { author: 'C.S', rating: 5, date: '2週間前', text: 'コース卒業後も毎月1回無料でパーソナルトレーニングが受けられるのが嬉しい。' },
      { author: 'K.O', rating: 4, date: '1ヶ月前', text: '女性専用で設備も女性向けに設計されていて居心地が良い。トレーナーさんも親切です。' },
      { author: 'J.H', rating: 5, date: '3週間前', text: '1対1のセッションにこだわっているので集中できます。結果もしっかり出ました。' },
    ],
    price: '2ヶ月16回 215,600円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '卒業後月1回無料', '完全マンツーマン', '女性向け設備', '恵比寿駅近'],
    description: '女性専用のパーソナルジム。ジム内の設備も女性にとって使いやすいように設計。コース終了後も毎月1回無料でパーソナルトレーニングが受けられるアフターフォローが魅力。',
    access: 'JR「恵比寿駅」徒歩5分',
    address: '東京都渋谷区恵比寿（恵比寿駅徒歩5分）',
    popularPlan: { name: '2ヶ月集中コース', description: '完全マンツーマンのパーソナルトレーニング。卒業後も月1回無料セッション付き。', price: '2ヶ月16回 215,600円〜（税込）' },
    options: ['卒業後月1回無料トレーニング', 'ウェアレンタル', '食事指導付き'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '体型維持', '健康管理'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'ロッカー'] },
  },
  {
    name: 'Bodyke 恵比寿店',
    rating: 4.5,
    reviewCount: 17,
    reviews: [
      { author: 'L.T', rating: 5, date: '1週間前', text: '食べて痩せるメソッドが画期的。無理な食事制限なしで-6kg達成できました。' },
      { author: 'P.M', rating: 4, date: '2週間前', text: '糖質制限なしのダイエット法が続けやすい。トレーナーの知識が豊富で安心です。' },
      { author: 'D.Y', rating: 4, date: '1ヶ月前', text: '恵比寿駅から近くて通いやすい。食事指導がとても参考になります。' },
    ],
    price: '2ヶ月16回 215,600円〜（税込）',
    trial: '無料カウンセリング',
    features: ['食べて痩せる', '糖質制限なし', '完全個室', '恵比寿駅近', '食事指導充実'],
    description: '「食べて痩せる」をコンセプトにしたパーソナルジム。糖質制限に頼らない独自のダイエットメソッドで、食事を楽しみながらボディメイクが可能。恵比寿駅からアクセス良好。',
    access: 'JR「恵比寿駅」徒歩5分',
    address: '東京都渋谷区恵比寿（恵比寿駅徒歩5分）',
    popularPlan: { name: 'スタンダードコース', description: '食べて痩せるメソッドによるマンツーマントレーニング＋食事指導。', price: '2ヶ月16回 215,600円〜（税込）' },
    options: ['糖質制限なしの食事指導', 'ウェアレンタル無料', '完全個室', '食事報告サポート'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性70% / 男性30%', purpose: ['ダイエット', 'ボディメイク', '食事改善', '健康管理'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'シャワー', 'ロッカー'] },
  },
]

const faqs = [
  { question: '恵比寿で女性専用のパーソナルジムはどこがおすすめ？', answer: 'UNDEUX SUPERBODY、OUTLINE、ビーコンセプト、リボーンマイセルフ、LIMが恵比寿で人気の女性専用パーソナルジムです。食事管理重視ならUNDEUX、コスパと生涯サポートならOUTLINE、下半身痩せならビーコンセプトがおすすめです。' },
  { question: '恵比寿のパーソナルジムの料金相場は？', answer: '恵比寿エリアの女性向けパーソナルジムの2ヶ月コース料金は約18万〜22万円。ビーコンセプトが179,685円〜と比較的リーズナブル。OUTLINEは生涯サポート付きで184,800円〜です。' },
  { question: '恵比寿駅から最も近いパーソナルジムは？', answer: 'ビーコンセプト恵比寿店が徒歩2分で最も駅近です。UNDEUX SUPERBODYは徒歩4分、リボーンマイセルフ・LIMは徒歩5分です。' },
  { question: '子連れで通えるジムはある？', answer: 'OUTLINE恵比寿・広尾店はベビーサークル完備で子連れOK。ビーコンセプトは託児所費用を最大1,000円/回補助してくれます。' },
  { question: '体験レッスンは無料で受けられる？', answer: 'UNDEUX SUPERBODYは体験レッスン0円。OUTLINE、ビーコンセプト、リボーンマイセルフ、LIMは無料カウンセリングを実施しています。' },
  { question: '初心者でも大丈夫？', answer: 'はい、全ジムで初心者歓迎です。マンツーマン指導なので、運動経験がなくても一人ひとりのレベルに合わせたメニューを組んでもらえます。' },
  { question: '恵比寿で最も安いパーソナルジムは？', answer: 'ビーコンセプト（2ヶ月18回 179,685円〜）が最安クラス。OUTLINE（16回 184,800円〜）もコスパ良好。分割払いなら月々5,545円〜で始められます。' },
  { question: '食事指導が充実しているジムは？', answer: 'UNDEUX SUPERBODYは糖質オフ宅配食を無料提供。Bodykeは「食べて痩せる」メソッドで糖質制限なしの食事指導が好評です。' },
  { question: '恵比寿と渋谷のジム、どちらがおすすめ？', answer: '恵比寿は落ち着いた雰囲気で大人の女性に人気。渋谷は選択肢が多く低価格帯のジムも。どちらも駅近のジムが多いので、通いやすさで選ぶのがおすすめです。' },
  { question: 'リバウンドが心配な場合は？', answer: 'OUTLINEは「生涯無料アフターサポート」で卒業後もずっとサポート。LIMは卒業後も毎月1回無料セッションが受けられます。' },
]

export default function EbisuPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-rose-100 via-rose-50 to-purple-50 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-rose-500 text-xs mb-2">更新日 2026年04月13日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              【2026最新】恵比寿の女性専用パーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選！料金比較
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-rose-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light">
              <Link href="/" className="hover:text-rose-500 transition">ホーム</Link>{' > '}
              <span className="text-brand-muted">恵比寿</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">こんにちは、G-PersonalGym編集部です。</p>
            <p className="text-brand-muted leading-relaxed mb-6">「恵比寿で女性専用のパーソナルジムを探している」「おしゃれな街で通いやすいジムが知りたい」という方のために、恵比寿エリアでおすすめの女性向けパーソナルジム{gyms.length}選をまとめました。</p>
            <div className="bg-rose-50 border-l-4 border-rose-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-brand-muted">
                <li className="flex items-start"><span className="text-rose-400 mr-2">✓</span><span>恵比寿で女性専用パーソナルジムを探している</span></li>
                <li className="flex items-start"><span className="text-rose-400 mr-2">✓</span><span>おしゃれなエリアで通いたい</span></li>
                <li className="flex items-start"><span className="text-rose-400 mr-2">✓</span><span>料金を比較して選びたい</span></li>
                <li className="flex items-start"><span className="text-rose-400 mr-2">✓</span><span>食事指導も受けたい</span></li>
                <li className="flex items-start"><span className="text-rose-400 mr-2">✓</span><span>卒業後のサポートが欲しい</span></li>
              </ul>
            </div>
          </div>
        </section>

        <PriceComparisonTable gyms={gyms} areaName="恵比寿" />

        <section className="py-16 bg-rose-50" id="gyms">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">恵比寿のおすすめ女性向けパーソナルジム{gyms.length}選</h2>
            <div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">目的別おすすめ</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-rose-200 rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">コスパ重視</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・ビーコンセプト（18回 179,685円〜）</li><li className="text-brand-muted">・OUTLINE（16回 184,800円〜）</li><li className="text-brand-muted">・Bodyke（16回 215,600円〜）</li></ul>
              </div>
              <div className="border border-rose-200 rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">食事サポート重視</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・UNDEUX SUPERBODY（宅配食無料）</li><li className="text-brand-muted">・Bodyke（食べて痩せるメソッド）</li><li className="text-brand-muted">・ビーコンセプト（医師監修指導）</li></ul>
              </div>
              <div className="border border-rose-200 rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">アフターサポート重視</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・OUTLINE（生涯無料サポート）</li><li className="text-brand-muted">・LIM（卒業後月1回無料）</li></ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-rose-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">恵比寿の料金相場【2026年4月】</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-rose-200">
                <h3 className="font-bold text-brand-text mb-3">2ヶ月集中コース</h3>
                <p className="text-3xl font-bold text-rose-500 mb-2">18万〜22万円</p>
                <p className="text-sm text-brand-muted">ビーコンセプト179,685円〜が最安。UNDEUX 220,000円〜が最高。恵比寿は渋谷より若干高め。</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-rose-200">
                <h3 className="font-bold text-brand-text mb-3">入会金</h3>
                <p className="text-3xl font-bold text-rose-500 mb-2">0〜5万円</p>
                <p className="text-sm text-brand-muted">キャンペーンで入会金無料のジムも。体験時に確認しましょう。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">恵比寿で選ぶ際の注意点</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-rose-200">
                <h3 className="text-lg font-bold text-brand-text mb-3">恵比寿は渋谷区でも家賃相場が高いエリア</h3>
                <p className="text-brand-muted leading-relaxed">恵比寿は渋谷区の中でも高級エリアのため、ジムの料金も若干高めの傾向があります。その分、施設の質やサービスは充実しています。コスパ重視なら渋谷のジムも比較検討しましょう。</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-rose-200">
                <h3 className="text-lg font-bold text-brand-text mb-3">恵比寿駅の東口・西口で距離が変わる</h3>
                <p className="text-brand-muted leading-relaxed">恵比寿駅は東口と西口で出る場所が大きく異なります。通いたいジムがどちら側にあるか、事前に確認しておきましょう。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-rose-50">
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

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-brand-text mb-6 text-center">まとめ</h2>
            <p className="text-brand-muted leading-relaxed mb-4">恵比寿エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。</p>
            <p className="text-brand-muted leading-relaxed mb-4">食事管理重視ならUNDEUX SUPERBODY、コスパと生涯サポートならOUTLINE、下半身痩せならビーコンセプト、女性トレーナー希望ならリボーンマイセルフがおすすめです。</p>
            <p className="text-brand-muted leading-relaxed">まずは気になるジムの体験レッスンに行ってみてください。</p>
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
      <RelatedAreas currentSlug="ebisu" />
      <SiteFooter />
    </>
  )
}
