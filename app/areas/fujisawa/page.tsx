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
  alternates: { canonical: '/areas/fujisawa/' },
  title: '【2026年6月最新】藤沢の女性専用パーソナルジムおすすめ5選！料金比較',
  description: '【2026年4月最新】藤沢のおすすめ女性専用パーソナルジム5選を徹底比較。OUTLINE・リボーンマイセルフ・UNDEUX SUPERBODYなど人気ジムの料金・口コミ・特徴を網羅。',
  keywords: '女性専用パーソナルジム,藤沢,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'OUTLINE 藤沢駅前店',
    officialUrl: 'https://www.outline-gym.com/',
    rating: 4.7,
    reviewCount: 14,
    reviews: [
      { author: 'K.M', rating: 5, date: '1週間前', text: '藤沢駅から徒歩4分。生涯アフターサポートが決め手でした。完全個室で安心。' },
      { author: 'R.S', rating: 5, date: '2週間前', text: '女性専用マシンで効率的にトレーニング。トレーナーが女性のボディメイクに詳しい。' },
      { author: 'N.T', rating: 4, date: '1ヶ月前', text: 'ベビーサークル完備で子連れOK。湘南エリアで女性専用のジムは貴重です。' },
    ],
    price: '16回 184,800円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '完全個室', '生涯サポート無料', 'ベビーサークル完備', '駅徒歩4分'],
    description: '藤沢駅徒歩4分。業界初の生涯無料アフターサポート。女性のボディメイクに合わせたマシンと専門トレーナーが揃う。ベビーサークル完備で子連れOK。',
    access: 'JR「藤沢駅」徒歩4分',
    address: '神奈川県藤沢市（藤沢駅徒歩4分）',
    popularPlan: { name: '16回コース', description: '完全個室マンツーマントレーニング。卒業後も生涯無料でアフターサポート。', price: '16回 184,800円〜（税込）' },
    options: ['生涯無料アフターサポート', 'ベビーサークル完備', 'よもぎ蒸し', '高級アミノ酸提供', 'ウェアレンタル無料'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '産後ダイエット', 'リバウンド防止'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'ベビーサークル', '女性専用マシン'] },
  },
  {
    name: 'UNDEUX SUPERBODY LIFE 藤沢店',
    officialUrl: 'https://www.diet-undeux.jp/',
    rating: 4.6,
    reviewCount: 11,
    reviews: [
      { author: 'A.K', rating: 5, date: '2週間前', text: '藤沢駅から徒歩2分。月額制で始めやすく、マシンピラティスの設備もあるのが嬉しい。' },
      { author: 'M.H', rating: 4, date: '1ヶ月前', text: '女性専用で安心。洗練された雰囲気のスタジオでモチベーションが上がります。' },
      { author: 'Y.N', rating: 4, date: '3週間前', text: '月額1万円台から通えるのが魅力。無理なく続けられる料金設定です。' },
    ],
    price: '月額 19,800円〜（税込）',
    trial: '体験レッスンあり',
    features: ['女性専用', '月額制', 'マシンピラティス', '駅徒歩2分', '1万円台〜'],
    description: '藤沢駅徒歩2分の女性専用パーソナルジム。月額制で1万円台から通える。マシンピラティスの設備もあり、筋トレとピラティスの両方が楽しめる。',
    access: 'JR「藤沢駅」徒歩2分',
    address: '神奈川県藤沢市（藤沢駅徒歩2分）',
    popularPlan: { name: '月4回プラン', description: '月額制のマンツーマンパーソナルトレーニング。マシンピラティスも可。', price: '月額 33,000円〜（税込）' },
    options: ['マシンピラティス設備', '月2回〜8回から選択', '継続割あり', 'シャワー完備'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '姿勢改善', '体型維持'] },
    basicInfo: { hours: '9:00〜22:00', closed: '不定休', facilities: ['トレーニングルーム', 'ピラティスマシン', 'シャワー'] },
  },
  {
    name: 'リボーンマイセルフ 藤沢店',
    officialUrl: 'https://reborn-myself.com/',
    rating: 4.6,
    reviewCount: 12,
    reviews: [
      { author: 'T.S', rating: 5, date: '2週間前', text: 'トレーナーが全員女性で安心。藤沢駅から徒歩4分で通いやすいです。' },
      { author: 'M.K', rating: 4, date: '1ヶ月前', text: '完全プライベート空間で60分間集中してトレーニング。湘南エリアで貴重な女性専用ジム。' },
      { author: 'E.N', rating: 5, date: '3週間前', text: '産後ダイエットで-4kg達成。女性トレーナーだからこその寄り添い力が違います。' },
    ],
    price: '入会金38,000円＋コース料金',
    trial: '無料カウンセリング',
    features: ['女性専用', '女性トレーナーのみ', '完全プライベート', '産後対応', '藤沢駅近'],
    description: '日本初の女性専用ダイエットジム。藤沢駅徒歩4分。トレーナーも全員女性で完全プライベート空間。湘南エリアの女性に支持されるジム。',
    access: 'JR「藤沢駅」徒歩4分',
    address: '神奈川県藤沢市（藤沢駅徒歩4分）',
    popularPlan: { name: 'ダイエットコース', description: '女性トレーナーによるマンツーマン指導。60分の完全プライベートセッション。', price: '入会金38,000円＋コース料金' },
    options: ['ウェアレンタル無料', '産後ダイエットコース', 'ブライダルダイエットコース', '部分痩せコース'],
    userProfile: { ageRange: '20代〜50代', genderRatio: '女性100%', purpose: ['ダイエット', '産後ダイエット', 'ブライダル', '部分痩せ'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全プライベート空間', 'ロッカー', 'ウェアレンタル'] },
  },
  {
    name: 'ビーコンセプト 藤沢店',
    officialUrl: 'https://b-concept.tokyo/',
    rating: 4.5,
    reviewCount: 10,
    reviews: [
      { author: 'S.N', rating: 5, date: '2週間前', text: '湘南エリアで脚やせ特化のジムは嬉しい。太もも-4cm達成で夏の水着が楽しみ。' },
      { author: 'H.T', rating: 5, date: '1ヶ月前', text: '医師監修メソッドで安心。完全個室で集中できます。分割払いで始めやすい。' },
      { author: 'A.M', rating: 4, date: '3週間前', text: '藤沢で女性専用の完全個室ジムは選択肢が少ないので貴重。結果も出ました。' },
    ],
    price: '2ヶ月18回 179,685円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '下半身特化', '医師×トレーナー共同開発', '完全個室', '藤沢駅近'],
    description: '医師とトレーナーが共同開発した脚やせメソッド。湘南エリアで下半身痩せに特化。夏のビーチシーズンに向けた美脚づくりに人気。',
    access: 'JR「藤沢駅」徒歩5分',
    address: '神奈川県藤沢市（藤沢駅徒歩5分）',
    popularPlan: { name: '太ももダイエットプログラム', description: '医師×トレーナー共同開発の脚やせメソッド。75分×18回の集中プログラム。', price: '2ヶ月18回 179,685円〜（税込）' },
    options: ['託児所費用補助（最大1,000円/回）', 'ウェア・タオル無料レンタル', '食事指導付き', '分割払い対応'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['太もも痩せ', 'ヒップアップ', '美脚', 'ビーチボディ'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'ロッカー', 'シャワー'] },
  },
  {
    name: 'エクササイズコーチ 藤沢',
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
    access: '「藤沢」駅周辺',
    address: '藤沢エリア（最寄り店舗は公式サイトでご確認ください）',
    popularPlan: { name: '月額トレーニングプラン', description: 'AIマシンを活用した1回約20分のマンツーマントレーニング。月額制で継続しやすい。', price: '月額制（プラン・店舗により異なる）' },
    options: ['ウェアレンタル', '手ぶらで通える', '女性スタッフ在籍店舗あり', '無料体験'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性が多数', purpose: ['ダイエット', 'ボディメイク', '運動習慣', '健康管理'] },
    basicInfo: { hours: '店舗により異なる', closed: '店舗により異なる', facilities: ['AIマシン', '個別ブース', 'ロッカー'] },
  },
]

const faqs = [
  { question: '藤沢で女性専用のパーソナルジムはどこがおすすめ？', answer: 'OUTLINE、UNDEUX SUPERBODY LIFE、リボーンマイセルフ、ビーコンセプトが藤沢で人気。生涯サポートならOUTLINE、月額制ならUNDEUX LIFE、女性トレーナー希望ならリボーンマイセルフ。' },
  { question: '藤沢のパーソナルジムの料金相場は？', answer: '藤沢の2ヶ月コースは約18万〜22万円。月額制ならUNDEUX LIFE月額19,800円〜。横浜・川崎と同等か若干安い傾向。' },
  { question: '藤沢駅から最も近いジムは？', answer: 'UNDEUX SUPERBODY LIFE藤沢店が徒歩2分で最寄り。OUTLINE・リボーンマイセルフは徒歩4分。' },
  { question: '子連れで通えるジムは？', answer: 'OUTLINE藤沢駅前店はベビーサークル完備。ビーコンセプトは託児所費用補助あり。' },
  { question: '体験は無料？', answer: 'OUTLINE・リボーンマイセルフ・ビーコンセプト・エクササイズコーチは無料カウンセリング。UNDEUX SUPERBODY LIFEは体験レッスンあり。' },
  { question: '湘南エリアで他に選択肢は？', answer: '藤沢は湘南エリアで最も女性専用パーソナルジムが充実しています。辻堂や茅ヶ崎からも藤沢駅は東海道線で数分なのでアクセス良好。' },
  { question: 'マシンピラティスも受けたい場合は？', answer: 'UNDEUX SUPERBODY LIFE藤沢店はマシンピラティスの設備も完備。筋トレとピラティスの両方を楽しめます。' },
  { question: '夏のビーチシーズンに向けて通いたい', answer: 'ビーコンセプトの脚やせメソッドは2ヶ月で美脚を目指せます。湘南のビーチに自信を持って行きたい方におすすめ。4〜5月に始めれば夏に間に合います。' },
  { question: '食事指導が充実しているジムは？', answer: 'エクササイズコーチは糖質制限なしの「食べて痩せる」メソッド。湘南の新鮮な海鮮やグルメを楽しみながらダイエットが可能です。' },
  { question: 'リバウンド防止のサポートは？', answer: 'OUTLINEの「生涯無料アフターサポート」が最も手厚い。卒業後もずっとサポートが続きます。' },
]

export default function FujisawaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-accent text-xs mb-2">更新日 2026年04月13日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">【2026年6月最新】藤沢の女性専用パーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選！料金比較</h1></div></section>
        <section className="bg-white py-3 border-b border-line"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-brand-light"><Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}<span className="text-brand-muted">藤沢</span></nav></div></section>
        <section className="py-12 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-brand-muted leading-relaxed mb-6">こんにちは、G-PersonalGym編集部です。</p><p className="text-brand-muted leading-relaxed mb-6">「藤沢・湘南エリアで女性専用のパーソナルジムを探している」「ビーチシーズンに向けて体を引き締めたい」という方のために、藤沢エリアでおすすめの女性向けパーソナルジム{gyms.length}選をまとめました。</p><div className="bg-ivory border-l-4 border-accent p-6 mb-8"><h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2><ul className="space-y-2 text-brand-muted"><li className="flex items-start"><span className="text-accent mr-2">✓</span><span>藤沢・湘南エリアで女性専用ジムを探している</span></li><li className="flex items-start"><span className="text-accent mr-2">✓</span><span>夏に向けて美脚を目指したい</span></li><li className="flex items-start"><span className="text-accent mr-2">✓</span><span>月額制で気軽に始めたい</span></li><li className="flex items-start"><span className="text-accent mr-2">✓</span><span>料金を比較して選びたい</span></li><li className="flex items-start"><span className="text-accent mr-2">✓</span><span>子連れで通いたい</span></li></ul></div></div></section>
        <AreaContext slug="fujisawa" />

        <WhyWomenOnly area="藤沢" />

        <PriceComparisonTable gyms={gyms} areaName="藤沢" />
        <section className="py-16 bg-ivory" id="gyms"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">藤沢のおすすめ女性向けパーソナルジム{gyms.length}選</h2><div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div></div></section>
        <section className="py-16 bg-white"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">目的別おすすめ</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8"><div className="border border-line rounded-xl p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-brand-text mb-4">コスパ重視</h3><ul className="space-y-2 text-sm"><li className="text-brand-muted">・ビーコンセプト（18回 179,685円〜）</li><li className="text-brand-muted">・OUTLINE（16回 184,800円〜）</li><li className="text-brand-muted">・UNDEUX LIFE（月額19,800円〜）</li></ul></div><div className="border border-line rounded-xl p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-brand-text mb-4">美脚・ビーチボディ</h3><ul className="space-y-2 text-sm"><li className="text-brand-muted">・ビーコンセプト（脚やせメソッド）</li><li className="text-brand-muted">・OUTLINE（全身ボディメイク）</li><li className="text-brand-muted">・UNDEUX LIFE（ピラティスも可）</li></ul></div><div className="border border-line rounded-xl p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-brand-text mb-4">子連れ対応</h3><ul className="space-y-2 text-sm"><li className="text-brand-muted">・OUTLINE（ベビーサークル完備）</li><li className="text-brand-muted">・ビーコンセプト（託児所費用補助）</li></ul></div></div></div></section>
        <section className="py-16 bg-ivory"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">藤沢の料金相場【2026年4月】</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-6"><div className="bg-white rounded-xl p-6 border border-line"><h3 className="font-bold text-brand-text mb-3">2ヶ月集中コース</h3><p className="text-3xl font-bold text-accent mb-2">18万〜22万円</p><p className="text-sm text-brand-muted">ビーコンセプト179,685円〜が最安。都心部より若干リーズナブル。</p></div><div className="bg-white rounded-xl p-6 border border-line"><h3 className="font-bold text-brand-text mb-3">月額制</h3><p className="text-3xl font-bold text-accent mb-2">2万円〜/月</p><p className="text-sm text-brand-muted">UNDEUX LIFE 月額19,800円〜。気軽に始められる価格帯。</p></div></div></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">藤沢で選ぶ際の注意点</h2><div className="space-y-6"><div className="bg-white rounded-xl p-6 border border-line"><h3 className="text-lg font-bold text-brand-text mb-3">湘南エリアで最もジムが充実した駅</h3><p className="text-brand-muted leading-relaxed">藤沢は湘南エリアの中心的な駅で、女性専用パーソナルジムの選択肢が最も多い。辻堂・茅ヶ崎・鎌倉からも東海道線やJR湘南新宿ラインで数分〜十数分でアクセス可能です。</p></div><div className="bg-white rounded-xl p-6 border border-line"><h3 className="text-lg font-bold text-brand-text mb-3">夏のビーチシーズンを見据えた計画を</h3><p className="text-brand-muted leading-relaxed">湘南は夏のビーチが人気。水着を自信を持って着たいなら、2ヶ月前の4〜5月頃にはスタートしましょう。早めの無料カウンセリングがおすすめです。</p></div></div></div></section>
        <section className="py-16 bg-ivory"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">よくある質問</h2><div className="space-y-4">{faqs.map((faq, index) => (<div key={index} className="border border-line rounded-xl overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-accent-tint transition"><h3 className="font-bold text-brand-text pr-4 text-sm">Q{index + 1}. {faq.question}</h3><svg className="w-5 h-5 text-accent group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-5 pb-5 text-brand-muted leading-relaxed text-sm">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl font-bold text-brand-text mb-6 text-center">まとめ</h2><p className="text-brand-muted leading-relaxed mb-4">藤沢エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。</p><p className="text-brand-muted leading-relaxed mb-4">生涯サポートならOUTLINE、月額制ならUNDEUX SUPERBODY LIFE、女性トレーナー希望ならリボーンマイセルフ、脚やせならビーコンセプトがおすすめです。</p><p className="text-brand-muted leading-relaxed">まずは気になるジムの体験レッスンに行ってみてください。</p></div></section>
        <section className="py-16 bg-gradient-to-r from-accent to-accent-dark text-white"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl font-bold mb-4">まずは無料カウンセリングから</h2><p className="text-white/80 mb-8">複数のジムを比較して、あなたに合うジムを見つけましょう。</p><Link href="/ranking/" className="inline-block bg-white text-accent px-10 py-4 text-sm font-bold rounded-full hover:bg-accent-tint transition-all">おすすめランキングを見る</Link></div></section>
      </main>
      <RelatedAreas currentSlug="fujisawa" />
      <SiteFooter />
    </>
  )
}
