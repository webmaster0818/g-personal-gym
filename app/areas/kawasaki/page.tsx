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
  alternates: { canonical: '/areas/kawasaki/' },
  title: '【2026年6月最新】川崎の女性専用パーソナルジムおすすめ5選！料金比較',
  description: '【2026年4月最新】川崎のおすすめ女性専用パーソナルジム5選を徹底比較。UNDEUX SUPERBODY・OUTLINE・リボーンマイセルフなど人気ジムの料金・口コミ・特徴を網羅。',
  keywords: '女性専用パーソナルジム,川崎,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'UNDEUX SUPERBODY 川崎スタジオ',
    officialUrl: 'https://www.diet-undeux.jp/',
    rating: 4.8,
    reviewCount: 17,
    reviews: [
      { author: 'A.T', rating: 5, date: '2週間前', text: '川崎駅すぐで通いやすい。宅配食が美味しくて食事管理のストレスがない。2ヶ月で-5kg。' },
      { author: 'M.N', rating: 5, date: '1ヶ月前', text: '女性専用で安心。トレーナーの質が高く、丁寧に指導してくれます。' },
      { author: 'Y.K', rating: 4, date: '3週間前', text: 'パウダールーム完備で仕事帰りに通えるのが嬉しい。基礎化粧品も揃ってます。' },
    ],
    price: '2ヶ月16回 220,000円〜（税込）',
    trial: '体験レッスン0円',
    features: ['女性専用', '川崎駅すぐ', '宅配食無料', 'パウダールーム完備', '手ぶらOK'],
    description: '川崎駅すぐの女性専用パーソナルジム。糖質オフ宅配食を無料提供。シャワー・パウダールーム・基礎化粧品完備で手ぶらOK。女性ダイエットのプロが在籍。',
    access: 'JR「川崎駅」徒歩3分',
    address: '神奈川県川崎市川崎区（川崎駅徒歩3分）',
    popularPlan: { name: '2ヶ月集中コース', description: 'マンツーマントレーニング16回＋食事指導＋宅配食の総合サポート。', price: '2ヶ月16回 220,000円〜（税込）' },
    options: ['糖質オフ宅配食無料', 'ウェア・タオルレンタル無料', 'シャワー・パウダールーム完備', '基礎化粧品完備'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', '脚痩せ', '産後ダイエット', 'ボディメイク'] },
    basicInfo: { hours: '9:00〜22:00', closed: '不定休', facilities: ['完全個室', 'シャワー', 'パウダールーム'] },
  },
  {
    name: 'OUTLINE 川崎店',
    officialUrl: 'https://www.outline-gym.com/',
    rating: 4.7,
    reviewCount: 14,
    reviews: [
      { author: 'K.M', rating: 5, date: '1週間前', text: '生涯リバウンドサポートが安心。川崎でベテランの女性ダイエット指導者が多い。' },
      { author: 'R.S', rating: 5, date: '2週間前', text: '完全個室でリラックスしてトレーニング。女性専用マシンが効率的です。' },
      { author: 'N.K', rating: 4, date: '1ヶ月前', text: 'ベビーサークル完備で子連れOK。卒業後のサポートが無料なのが決め手でした。' },
    ],
    price: '16回 184,800円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '完全個室', '生涯サポート無料', 'ベテランスタッフ', 'ベビーサークル'],
    description: '業界初の生涯無料アフターサポート。女性ダイエット指導歴が長いベテランスタッフが多数在籍。完全個室・ベビーサークル完備。',
    access: 'JR「川崎駅」徒歩5分',
    address: '神奈川県川崎市川崎区（川崎駅徒歩5分）',
    popularPlan: { name: '16回コース', description: '完全個室マンツーマントレーニング。卒業後も生涯無料でアフターサポート。', price: '16回 184,800円〜（税込）' },
    options: ['生涯無料アフターサポート', 'ベビーサークル完備', 'よもぎ蒸し', '高級アミノ酸提供', 'ウェアレンタル無料'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '産後ダイエット', 'リバウンド防止'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'ベビーサークル', '女性専用マシン'] },
  },
  {
    name: 'リボーンマイセルフ 川崎店',
    officialUrl: 'https://reborn-myself.com/',
    rating: 4.6,
    reviewCount: 13,
    reviews: [
      { author: 'T.S', rating: 5, date: '2週間前', text: 'トレーナーが全員女性で安心。川崎駅から近くて仕事帰りに通いやすい。' },
      { author: 'M.K', rating: 4, date: '1ヶ月前', text: '10年以上の実績で指導の質が高い。女性トレーナーだからこそ分かる悩みに対応。' },
      { author: 'E.N', rating: 5, date: '3週間前', text: '産後ダイエットで通いました。ブライダルコースもあり幅広いニーズに対応。' },
    ],
    price: '入会金38,000円＋コース料金',
    trial: '無料カウンセリング',
    features: ['女性専用', '女性トレーナーのみ', '10年以上の実績', '産後ダイエット', 'ブライダルコース'],
    description: '日本初の女性専用ダイエットジム。トレーナーも全員女性。川崎エリアの女性に長く支持されるジム。産後・ブライダルコースも充実。',
    access: 'JR「川崎駅」徒歩4分',
    address: '神奈川県川崎市川崎区（川崎駅徒歩4分）',
    popularPlan: { name: 'ダイエットコース', description: '女性トレーナーによるマンツーマン指導。産後・ブライダルコースも用意。', price: '入会金38,000円＋コース料金' },
    options: ['ウェアレンタル無料', '産後ダイエットコース', 'ブライダルダイエットコース', '部分痩せコース'],
    userProfile: { ageRange: '20代〜50代', genderRatio: '女性100%', purpose: ['ダイエット', '産後ダイエット', 'ブライダル', '部分痩せ'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['ロッカー', 'ウェアレンタル'] },
  },
  {
    name: 'ビーコンセプト 川崎店',
    officialUrl: 'https://b-concept.tokyo/',
    rating: 4.6,
    reviewCount: 12,
    reviews: [
      { author: 'S.H', rating: 5, date: '2週間前', text: '脚やせ特化が嬉しい。太もも-4cm達成。川崎で美脚になれました。' },
      { author: 'H.M', rating: 5, date: '1ヶ月前', text: '医師監修メソッドで安心。完全個室で人目を気にせずトレーニングできます。' },
      { author: 'A.S', rating: 4, date: '3週間前', text: '分割払いで始めやすい。託児所費用補助もあり産後ママに嬉しい。' },
    ],
    price: '2ヶ月18回 179,685円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '下半身特化', '医師×トレーナー共同開発', '託児所費用補助', '完全個室'],
    description: '医師とトレーナーが共同開発した脚やせメソッド。川崎エリアで下半身痩せに特化。完全個室・託児所費用補助あり。',
    access: 'JR「川崎駅」徒歩5分',
    address: '神奈川県川崎市川崎区（川崎駅徒歩5分）',
    popularPlan: { name: '太ももダイエットプログラム', description: '医師×トレーナー共同開発の脚やせメソッド。75分×18回の集中プログラム。', price: '2ヶ月18回 179,685円〜（税込）' },
    options: ['託児所費用補助（最大1,000円/回）', 'ウェア・タオル無料レンタル', '食事指導付き', '分割払い対応'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['太もも痩せ', 'ヒップアップ', '産後ダイエット', '美脚'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'ロッカー', 'シャワー'] },
  },
  {
    name: 'エクササイズコーチ 川崎',
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
    access: '「川崎」駅周辺',
    address: '川崎エリア（最寄り店舗は公式サイトでご確認ください）',
    popularPlan: { name: '月額トレーニングプラン', description: 'AIマシンを活用した1回約20分のマンツーマントレーニング。月額制で継続しやすい。', price: '月額制（プラン・店舗により異なる）' },
    options: ['ウェアレンタル', '手ぶらで通える', '女性スタッフ在籍店舗あり', '無料体験'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性が多数', purpose: ['ダイエット', 'ボディメイク', '運動習慣', '健康管理'] },
    basicInfo: { hours: '店舗により異なる', closed: '店舗により異なる', facilities: ['AIマシン', '個別ブース', 'ロッカー'] },
  },
]

const faqs = [
  { question: '川崎で女性専用のパーソナルジムはどこがおすすめ？', answer: 'UNDEUX SUPERBODY、OUTLINE、リボーンマイセルフ、ビーコンセプトが川崎で人気。食事管理ならUNDEUX、生涯サポートならOUTLINE、脚やせならビーコンセプト。' },
  { question: '川崎のパーソナルジムの料金相場は？', answer: '川崎の2ヶ月コースは約18万〜22万円。ビーコンセプトが179,685円〜と最安。横浜とほぼ同等の価格帯です。' },
  { question: '川崎駅から最も近いジムは？', answer: 'UNDEUX SUPERBODYが徒歩3分。リボーンマイセルフは徒歩4分。OUTLINE・ビーコンセプトは徒歩5分。' },
  { question: '子連れで通えるジムは？', answer: 'OUTLINEはベビーサークル完備。ビーコンセプトは託児所費用補助あり。' },
  { question: '体験は無料？', answer: 'UNDEUX SUPERBODYは体験レッスン0円。OUTLINE・リボーンマイセルフ・ビーコンセプト・エクササイズコーチは無料カウンセリング。' },
  { question: '川崎と横浜、どちらがおすすめ？', answer: '川崎は横浜に比べてコンパクトで駅近のジムが多い。横浜は選択肢が多いが、川崎のほうがアクセスしやすい傾向。通勤ルートに合わせて選ぶのがおすすめ。' },
  { question: '京急川崎駅からも通える？', answer: 'はい、多くのジムがJR川崎駅と京急川崎駅の間に位置しています。どちらの駅からもアクセス可能です。' },
  { question: '食事指導が充実しているジムは？', answer: 'UNDEUX SUPERBODYは宅配食無料。エクササイズコーチは「食べて痩せる」メソッド。ビーコンセプトは医師監修の食事指導。' },
  { question: '仕事帰りに通いやすいジムは？', answer: 'ほとんどのジムが22:00まで営業。川崎駅はJR・京急の主要ターミナルなので、品川・横浜方面からの帰宅途中に通いやすいです。' },
  { question: 'リバウンド防止のサポートは？', answer: 'OUTLINEの「生涯無料アフターサポート」が最も手厚い。卒業後もずっとサポートが続きます。' },
]

export default function KawasakiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-accent text-xs mb-2">更新日 2026年04月13日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">【2026年6月最新】川崎の女性専用パーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選！料金比較</h1></div></section>
        <section className="bg-white py-3 border-b border-line"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-brand-light"><Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}<span className="text-brand-muted">川崎</span></nav></div></section>
        <section className="py-12 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-brand-muted leading-relaxed mb-6">こんにちは、G-PersonalGym編集部です。</p><p className="text-brand-muted leading-relaxed mb-6">「川崎で女性専用のパーソナルジムを探している」「JR・京急のターミナル駅で通いやすいジムが知りたい」という方のために、川崎エリアでおすすめの女性向けパーソナルジム{gyms.length}選をまとめました。</p><div className="bg-ivory border-l-4 border-accent p-6 mb-8"><h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2><ul className="space-y-2 text-brand-muted"><li className="flex items-start"><span className="text-accent mr-2">✓</span><span>川崎で女性専用パーソナルジムを探している</span></li><li className="flex items-start"><span className="text-accent mr-2">✓</span><span>駅近で仕事帰りに通いたい</span></li><li className="flex items-start"><span className="text-accent mr-2">✓</span><span>料金を比較して選びたい</span></li><li className="flex items-start"><span className="text-accent mr-2">✓</span><span>食事指導も受けたい</span></li><li className="flex items-start"><span className="text-accent mr-2">✓</span><span>子連れで通いたい</span></li></ul></div></div></section>
        <AreaContext slug="kawasaki" />

        <WhyWomenOnly area="川崎" />

        <PriceComparisonTable gyms={gyms} areaName="川崎" />
        <section className="py-16 bg-ivory" id="gyms"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">川崎のおすすめ女性向けパーソナルジム{gyms.length}選</h2><div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div></div></section>
        <section className="py-16 bg-white"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">目的別おすすめ</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8"><div className="border border-line rounded-xl p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-brand-text mb-4">コスパ重視</h3><ul className="space-y-2 text-sm"><li className="text-brand-muted">・ビーコンセプト（18回 179,685円〜）</li><li className="text-brand-muted">・OUTLINE（16回 184,800円〜）</li><li className="text-brand-muted">・エクササイズコーチ（16回 215,600円〜）</li></ul></div><div className="border border-line rounded-xl p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-brand-text mb-4">食事サポート重視</h3><ul className="space-y-2 text-sm"><li className="text-brand-muted">・UNDEUX SUPERBODY（宅配食無料）</li><li className="text-brand-muted">・エクササイズコーチ（食べて痩せるメソッド）</li><li className="text-brand-muted">・ビーコンセプト（医師監修指導）</li></ul></div><div className="border border-line rounded-xl p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-brand-text mb-4">子連れ対応</h3><ul className="space-y-2 text-sm"><li className="text-brand-muted">・OUTLINE（ベビーサークル完備）</li><li className="text-brand-muted">・ビーコンセプト（託児所費用補助）</li></ul></div></div></div></section>
        <section className="py-16 bg-ivory"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">川崎の料金相場【2026年4月】</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-6"><div className="bg-white rounded-xl p-6 border border-line"><h3 className="font-bold text-brand-text mb-3">2ヶ月集中コース</h3><p className="text-3xl font-bold text-accent mb-2">18万〜22万円</p><p className="text-sm text-brand-muted">ビーコンセプト179,685円〜が最安。横浜と同等の価格帯。</p></div><div className="bg-white rounded-xl p-6 border border-line"><h3 className="font-bold text-brand-text mb-3">入会金</h3><p className="text-3xl font-bold text-accent mb-2">0〜5万円</p><p className="text-sm text-brand-muted">キャンペーンで入会金無料も。体験時に確認を。</p></div></div></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">川崎で選ぶ際の注意点</h2><div className="space-y-6"><div className="bg-white rounded-xl p-6 border border-line"><h3 className="text-lg font-bold text-brand-text mb-3">JR川崎駅と京急川崎駅は徒歩5分離れている</h3><p className="text-brand-muted leading-relaxed">JR川崎駅と京急川崎駅は約400m離れています。通いたいジムがどちらの駅に近いか事前に確認しましょう。多くのジムはJR川崎駅西口〜ラゾーナ方面に集中しています。</p></div><div className="bg-white rounded-xl p-6 border border-line"><h3 className="text-lg font-bold text-brand-text mb-3">品川・横浜の中間で通勤途中に最適</h3><p className="text-brand-muted leading-relaxed">川崎はJR東海道線・京急本線で品川と横浜の中間に位置。通勤途中に立ち寄れるため、仕事帰りにジムに通いたい方には最適の立地です。</p></div></div></div></section>
        <section className="py-16 bg-ivory"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">よくある質問</h2><div className="space-y-4">{faqs.map((faq, index) => (<div key={index} className="border border-line rounded-xl overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-accent-tint transition"><h3 className="font-bold text-brand-text pr-4 text-sm">Q{index + 1}. {faq.question}</h3><svg className="w-5 h-5 text-accent group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-5 pb-5 text-brand-muted leading-relaxed text-sm">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl font-bold text-brand-text mb-6 text-center">まとめ</h2><p className="text-brand-muted leading-relaxed mb-4">川崎エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。</p><p className="text-brand-muted leading-relaxed mb-4">食事管理重視ならUNDEUX SUPERBODY、生涯サポートならOUTLINE、女性トレーナー希望ならリボーンマイセルフ、脚やせならビーコンセプトがおすすめです。</p><p className="text-brand-muted leading-relaxed">まずは気になるジムの体験レッスンに行ってみてください。</p></div></section>
        <section className="py-16 bg-gradient-to-r from-accent to-accent-dark text-white"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl font-bold mb-4">まずは無料カウンセリングから</h2><p className="text-white/80 mb-8">複数のジムを比較して、あなたに合うジムを見つけましょう。</p><Link href="/ranking/" className="inline-block bg-white text-accent px-10 py-4 text-sm font-bold rounded-full hover:bg-accent-tint transition-all">おすすめランキングを見る</Link></div></section>
      </main>
      <RelatedAreas currentSlug="kawasaki" />
      <SiteFooter />
    </>
  )
}
