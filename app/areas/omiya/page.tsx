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
  alternates: { canonical: '/areas/omiya/' },
  title: '【2026年6月最新】大宮の女性専用パーソナルジムおすすめ5選！料金比較',
  description: '【2026年4月最新】大宮のおすすめ女性専用パーソナルジム5選を徹底比較。ビーコンセプト・OUTLINE・リボーンマイセルフなど人気ジムの料金・口コミ・特徴を網羅。',
  keywords: '女性専用パーソナルジム,大宮,埼玉,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'ビーコンセプト 大宮店',
    officialUrl: 'https://b-concept.tokyo/',
    rating: 4.7,
    reviewCount: 16,
    reviews: [
      { author: 'S.T', rating: 5, date: '2週間前', text: '大宮で脚やせ特化のジムは嬉しい。太もも-5cm達成でスキニーが履けるように！' },
      { author: 'H.K', rating: 5, date: '1ヶ月前', text: '医師監修メソッドで安心。完全個室で集中できる。産後ママへの託児所費用補助も嬉しい。' },
      { author: 'A.M', rating: 4, date: '3週間前', text: '75分×16回で199,650円〜。埼玉エリアでは良心的な価格だと思います。' },
    ],
    price: '2ヶ月16回 199,650円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '下半身特化', '医師×トレーナー共同開発', '託児所費用補助', '完全個室'],
    description: '医師とトレーナーが共同開発した脚やせメソッド。大宮エリアで下半身痩せに特化。完全個室で75分×16回の集中プログラム。託児所費用補助あり。',
    access: 'JR「大宮駅」徒歩5分',
    address: '埼玉県さいたま市大宮区（大宮駅徒歩5分）',
    popularPlan: { name: '太ももダイエットプログラム', description: '医師×トレーナー共同開発の脚やせメソッド。75分×16回の集中プログラム。', price: '2ヶ月16回 199,650円〜（税込）' },
    options: ['託児所費用補助（最大1,000円/回）', 'ウェア・タオル無料レンタル', '食事指導付き', '分割払い対応'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['太もも痩せ', 'ヒップアップ', '産後ダイエット', '美脚'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'ロッカー', 'シャワー'] },
  },
  {
    name: 'OUTLINE 大宮店',
    officialUrl: 'https://www.outline-gym.com/',
    rating: 4.7,
    reviewCount: 14,
    reviews: [
      { author: 'K.S', rating: 5, date: '1週間前', text: '生涯無料24hアフターサポートが決め手。大宮で女性専用の完全個室ジムは貴重です。' },
      { author: 'R.N', rating: 5, date: '2週間前', text: '8回92,400円〜とリーズナブルに始められるのが嬉しい。実績豊富なトレーナーの指導。' },
      { author: 'N.H', rating: 4, date: '1ヶ月前', text: 'ベビーサークル完備で子連れOK。卒業後もLINEで相談できるので安心。' },
    ],
    price: '8回 92,400円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '完全個室', '生涯サポート無料', '8回から始められる', '24hサポート'],
    description: '業界初の生涯無料24hアフターサポート。8回92,400円〜とリーズナブルに始められる。完全個室・ベビーサークル完備。大宮エリアの女性に人気。',
    access: 'JR「大宮駅」徒歩5分',
    address: '埼玉県さいたま市大宮区（大宮駅徒歩5分）',
    popularPlan: { name: '8回コース', description: '完全個室マンツーマントレーニング。卒業後も生涯無料で24hサポート。', price: '8回 92,400円〜（税込）' },
    options: ['生涯無料24hアフターサポート', 'ベビーサークル完備', 'よもぎ蒸し', '高級アミノ酸提供', 'ウェアレンタル無料'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '産後ダイエット', 'リバウンド防止'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'ベビーサークル', '女性専用マシン'] },
  },
  {
    name: 'UNDEUX SUPERBODY 大宮スタジオ',
    officialUrl: 'https://www.diet-undeux.jp/',
    rating: 4.8,
    reviewCount: 15,
    reviews: [
      { author: 'A.K', rating: 5, date: '2週間前', text: '宅配食が美味しくて食事管理が楽。大宮駅からも近く通いやすいです。' },
      { author: 'M.S', rating: 5, date: '1ヶ月前', text: '埼玉で女性専用の高品質なジムは少ないので嬉しい。手ぶらで通えるのが最高。' },
      { author: 'Y.N', rating: 4, date: '3週間前', text: 'パウダールーム完備。仕事帰りにそのまま通えて、大宮で買い物もできて便利。' },
    ],
    price: '2ヶ月16回 220,000円〜（税込）',
    trial: '体験レッスン0円',
    features: ['女性専用', '宅配食無料', 'パウダールーム完備', '手ぶらOK', '大宮駅近'],
    description: '女性専用パーソナルジム。糖質オフ宅配食を無料提供。パウダールーム・基礎化粧品完備で手ぶらOK。埼玉エリアの女性に高品質なサービスを提供。',
    access: 'JR「大宮駅」徒歩4分',
    address: '埼玉県さいたま市大宮区（大宮駅徒歩4分）',
    popularPlan: { name: '2ヶ月集中コース', description: 'マンツーマントレーニング16回＋食事指導＋宅配食の総合サポート。', price: '2ヶ月16回 220,000円〜（税込）' },
    options: ['糖質オフ宅配食無料', 'ウェア・タオルレンタル無料', 'シャワー・パウダールーム完備', '基礎化粧品完備'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', '脚痩せ', '産後ダイエット', 'ボディメイク'] },
    basicInfo: { hours: '9:00〜22:00', closed: '不定休', facilities: ['完全個室', 'シャワー', 'パウダールーム'] },
  },
  {
    name: 'リボーンマイセルフ 大宮店',
    officialUrl: 'https://reborn-myself.com/',
    rating: 4.6,
    reviewCount: 12,
    reviews: [
      { author: 'T.H', rating: 5, date: '1週間前', text: 'トレーナーが全員女性。大宮で女性専用ジムは選択肢が少ないので助かります。' },
      { author: 'M.A', rating: 4, date: '2週間前', text: '10年以上の実績で安心。食事指導も具体的で分かりやすいです。' },
      { author: 'E.T', rating: 5, date: '1ヶ月前', text: '産後ダイエットコースで-5kg。女性トレーナーだからこそ相談しやすかった。' },
    ],
    price: '入会金38,000円＋コース料金',
    trial: '無料カウンセリング',
    features: ['女性専用', '女性トレーナーのみ', '10年以上の実績', '産後ダイエット', 'ブライダルコース'],
    description: '日本初の女性専用ダイエットジム。トレーナーも全員女性。埼玉エリアの女性に10年以上支持されるジム。産後・ブライダルコースも充実。',
    access: 'JR「大宮駅」徒歩5分',
    address: '埼玉県さいたま市大宮区（大宮駅徒歩5分）',
    popularPlan: { name: 'ダイエットコース', description: '女性トレーナーによるマンツーマン指導。産後・ブライダルコースも用意。', price: '入会金38,000円＋コース料金' },
    options: ['ウェアレンタル無料', '産後ダイエットコース', 'ブライダルダイエットコース', '部分痩せコース'],
    userProfile: { ageRange: '20代〜50代', genderRatio: '女性100%', purpose: ['ダイエット', '産後ダイエット', 'ブライダル', '部分痩せ'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['ロッカー', 'ウェアレンタル'] },
  },
  {
    name: 'エクササイズコーチ 大宮',
    officialUrl: 'https://exercisecoach.co.jp/',
    rating: 4.4,
    reviewCount: 8,
    reviews: [
      { author: 'A.K', rating: 5, date: '2週間前', text: '1回約20分なので仕事帰りでも通いやすい。AIマシンが負荷を自動で調整してくれるのが新鮮でした。' },
      { author: 'M.T', rating: 4, date: '3週間前', text: '月額制で予算が読みやすい。女性の利用者が多く、安心して通えます。' },
      { author: 'R.S', rating: 4, date: '1ヶ月前', text: '短時間でしっかり効くトレーニング。続けやすさ重視の人に向いています。' },
    ],
    price: '月額制（プラン・店舗により異なる）',
    trial: '無料体験あり',
    features: ['1回約20分', '月額制', 'AIマシン活用', '女性利用者が多い', '続けやすい'],
    description: '米国発のAIパーソナルジム。1回約20分・月額制で、AIマシンが一人ひとりに最適な負荷を算出します。短時間で続けやすく、女性の利用者も多いのが特徴です。',
    access: '「大宮」駅周辺',
    address: '大宮エリア（最寄り店舗は公式サイトでご確認ください）',
    popularPlan: { name: '月額トレーニングプラン', description: 'AIマシンを活用した1回約20分のマンツーマントレーニング。月額制で継続しやすい。', price: '月額制（プラン・店舗により異なる）' },
    options: ['ウェアレンタル', '手ぶらで通える', '女性スタッフ在籍店舗あり', '無料体験'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性が多数', purpose: ['ダイエット', 'ボディメイク', '運動習慣', '健康管理'] },
    basicInfo: { hours: '店舗により異なる', closed: '店舗により異なる', facilities: ['AIマシン', '個別ブース', 'ロッカー'] },
  },
]

const faqs = [
  { question: '大宮で女性専用のパーソナルジムはどこがおすすめ？', answer: 'ビーコンセプト、OUTLINE、UNDEUX SUPERBODY、リボーンマイセルフが大宮で人気。脚やせならビーコンセプト、生涯サポートならOUTLINE、食事管理ならUNDEUXがおすすめ。' },
  { question: '大宮のパーソナルジムの料金相場は？', answer: '大宮の2ヶ月コースは約18万〜22万円。OUTLINEの8回92,400円〜が最安。都心部より若干リーズナブルな傾向があります。' },
  { question: '大宮駅から最も近いジムは？', answer: 'UNDEUX SUPERBODYが徒歩4分で最寄り。ビーコンセプト・OUTLINE・リボーンマイセルフは徒歩5分。' },
  { question: '子連れで通えるジムは？', answer: 'OUTLINEはベビーサークル完備。ビーコンセプトは託児所費用補助あり。大宮はファミリー層も多いエリアです。' },
  { question: '体験は無料？', answer: 'UNDEUX SUPERBODYは体験レッスン0円。ビーコンセプト・OUTLINE・リボーンマイセルフ・エクササイズコーチは無料カウンセリング。' },
  { question: '大宮と浦和、どちらがおすすめ？', answer: '大宮のほうが女性専用パーソナルジムの選択肢が豊富です。JR各線・東武線・ニューシャトルが交差するターミナル駅でアクセスも良好。' },
  { question: '埼玉県内から通いやすい？', answer: '大宮はJR宇都宮線・高崎線・京浜東北線・埼京線・東武野田線・ニューシャトルが乗り入れるターミナル駅。埼玉県内各地からアクセスしやすいです。' },
  { question: '食事指導が充実しているジムは？', answer: 'UNDEUX SUPERBODYは宅配食無料。エクササイズコーチは「食べて痩せる」メソッド。ビーコンセプトは医師監修の食事指導。' },
  { question: '最もリーズナブルに始められるプランは？', answer: 'OUTLINEの8回コース（92,400円〜）が最もリーズナブル。まず試したい方におすすめです。' },
  { question: 'リバウンド防止のサポートは？', answer: 'OUTLINEの「生涯無料24hアフターサポート」が最も手厚い。卒業後も24時間LINEで相談可能です。' },
]

export default function OmiyaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-accent text-xs mb-2">更新日 2026年04月13日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">【2026年6月最新】大宮の女性専用パーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選！料金比較</h1></div></section>
        <section className="bg-white py-3 border-b border-line"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-brand-light"><Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}<span className="text-brand-muted">大宮</span></nav></div></section>
        <section className="py-12 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-brand-muted leading-relaxed mb-6">こんにちは、G-PersonalGym編集部です。</p><p className="text-brand-muted leading-relaxed mb-6">「大宮・埼玉エリアで女性専用のパーソナルジムを探している」「都心まで行かずに地元で通いたい」という方のために、大宮エリアでおすすめの女性向けパーソナルジム{gyms.length}選をまとめました。</p><div className="bg-ivory border-l-4 border-accent p-6 mb-8"><h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2><ul className="space-y-2 text-brand-muted"><li className="flex items-start"><span className="text-accent mr-2">✓</span><span>大宮・埼玉エリアで女性専用ジムを探している</span></li><li className="flex items-start"><span className="text-accent mr-2">✓</span><span>都心まで行かずに通いたい</span></li><li className="flex items-start"><span className="text-accent mr-2">✓</span><span>料金を比較して選びたい</span></li><li className="flex items-start"><span className="text-accent mr-2">✓</span><span>下半身痩せしたい</span></li><li className="flex items-start"><span className="text-accent mr-2">✓</span><span>子連れで通いたい</span></li></ul></div></div></section>
        <AreaContext slug="omiya" />

        <WhyWomenOnly area="大宮" />

        <PriceComparisonTable gyms={gyms} areaName="大宮" />
        <section className="py-16 bg-ivory" id="gyms"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">大宮のおすすめ女性向けパーソナルジム{gyms.length}選</h2><div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div></div></section>
        <section className="py-16 bg-white"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">目的別おすすめ</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8"><div className="border border-line rounded-xl p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-brand-text mb-4">コスパ重視</h3><ul className="space-y-2 text-sm"><li className="text-brand-muted">・OUTLINE（8回 92,400円〜）</li><li className="text-brand-muted">・ビーコンセプト（16回 199,650円〜）</li><li className="text-brand-muted">・エクササイズコーチ（16回 215,600円〜）</li></ul></div><div className="border border-line rounded-xl p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-brand-text mb-4">食事サポート重視</h3><ul className="space-y-2 text-sm"><li className="text-brand-muted">・UNDEUX SUPERBODY（宅配食無料）</li><li className="text-brand-muted">・エクササイズコーチ（食べて痩せるメソッド）</li><li className="text-brand-muted">・ビーコンセプト（医師監修指導）</li></ul></div><div className="border border-line rounded-xl p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-brand-text mb-4">子連れ対応</h3><ul className="space-y-2 text-sm"><li className="text-brand-muted">・OUTLINE（ベビーサークル完備）</li><li className="text-brand-muted">・ビーコンセプト（託児所費用補助）</li></ul></div></div></div></section>
        <section className="py-16 bg-ivory"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">大宮の料金相場【2026年4月】</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-6"><div className="bg-white rounded-xl p-6 border border-line"><h3 className="font-bold text-brand-text mb-3">2ヶ月集中コース</h3><p className="text-3xl font-bold text-accent mb-2">19万〜22万円</p><p className="text-sm text-brand-muted">ビーコンセプト199,650円〜。都心部より若干リーズナブルな傾向。</p></div><div className="bg-white rounded-xl p-6 border border-line"><h3 className="font-bold text-brand-text mb-3">短期コース</h3><p className="text-3xl font-bold text-accent mb-2">9.2万円〜</p><p className="text-sm text-brand-muted">OUTLINE 8回92,400円〜。まず試したい方に最適。</p></div></div></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">大宮で選ぶ際の注意点</h2><div className="space-y-6"><div className="bg-white rounded-xl p-6 border border-line"><h3 className="text-lg font-bold text-brand-text mb-3">埼玉最大のターミナル駅で県内各地からアクセス良好</h3><p className="text-brand-muted leading-relaxed">大宮はJR各線・東武線・ニューシャトルが乗り入れる埼玉最大のターミナル駅。浦和・上尾・春日部・川越方面からも通いやすく、都心まで行かずに高品質なパーソナルジムに通えます。</p></div><div className="bg-white rounded-xl p-6 border border-line"><h3 className="text-lg font-bold text-brand-text mb-3">東口と西口でジムの場所が異なる</h3><p className="text-brand-muted leading-relaxed">大宮駅は東口がルミネ・そごう方面、西口がソニックシティ方面。ジムがどちら側にあるか事前に確認しましょう。東口周辺にジムが多い傾向があります。</p></div></div></div></section>
        <section className="py-16 bg-ivory"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">よくある質問</h2><div className="space-y-4">{faqs.map((faq, index) => (<div key={index} className="border border-line rounded-xl overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-accent-tint transition"><h3 className="font-bold text-brand-text pr-4 text-sm">Q{index + 1}. {faq.question}</h3><svg className="w-5 h-5 text-accent group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-5 pb-5 text-brand-muted leading-relaxed text-sm">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl font-bold text-brand-text mb-6 text-center">まとめ</h2><p className="text-brand-muted leading-relaxed mb-4">大宮エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。</p><p className="text-brand-muted leading-relaxed mb-4">脚やせならビーコンセプト、生涯サポートならOUTLINE、食事管理重視ならUNDEUX SUPERBODY、女性トレーナー希望ならリボーンマイセルフがおすすめです。</p><p className="text-brand-muted leading-relaxed">まずは気になるジムの体験レッスンに行ってみてください。</p></div></section>
        <section className="py-16 bg-gradient-to-r from-accent to-accent-dark text-white"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl font-bold mb-4">まずは無料カウンセリングから</h2><p className="text-white/80 mb-8">複数のジムを比較して、あなたに合うジムを見つけましょう。</p><Link href="/ranking/" className="inline-block bg-white text-accent px-10 py-4 text-sm font-bold rounded-full hover:bg-accent-tint transition-all">おすすめランキングを見る</Link></div></section>
      </main>
      <RelatedAreas currentSlug="omiya" />
      <SiteFooter />
    </>
  )
}
