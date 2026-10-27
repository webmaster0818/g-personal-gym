import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { IntentGuideLinks } from '@/components/IntentGuideLinks'
import { GymCard } from '@/components/GymCard'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { FAQSchema } from '@/components/FAQSchema'
import { RelatedAreas } from '@/components/RelatedAreas'
import { AreaContext } from '@/components/AreaContext'
import { WhyWomenOnly } from '@/components/WhyWomenOnly'
import { pageUrlMeta } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  ...pageUrlMeta('/areas/kawasaki/'),
  title: '川崎の女性専用パーソナルジムおすすめ3選｜料金比較',
  description: '川崎のおすすめ女性専用パーソナルジム3選を比較しています。UNDEUX SUPERBODY・リボーンマイセルフ・エクササイズコーチなど人気ジムの料金・口コミ・特徴を掲載しています。',
  keywords: '女性専用パーソナルジム,川崎,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'UNDEUX SUPERBODY 川崎スタジオ',
    officialUrl: 'https://www.diet-undeux.jp/',
    price: 'スタンダードプラン月2回 20,500円〜（税込）',
    trial: '体験レッスン0円',
    features: ['女性専用', '川崎駅すぐ', '初月宅配食30食無料（コミット）', 'パウダールーム完備', '手ぶらOK'],
    description: '川崎駅すぐの女性専用パーソナルジムです。コミットプランでは初月に宅配食30食を無料で提供しています。シャワー・パウダールーム・基礎化粧品を完備しており、手ぶらで通えます。女性ダイエットのプロが在籍しています。',
    access: 'JR「川崎駅」徒歩3分',
    address: '神奈川県川崎市川崎区（川崎駅徒歩3分）',
    popularPlan: { name: 'コミットプラン', description: 'トレーニング月6回と栄養士による毎日の食事管理を組み合わせた月額制プランです（全店共通価格）。', price: '月額79,200円' },
    options: ['コミットプランは初月宅配食30食無料（スタンダードは会員優待価格のオプション）', 'ウェア・タオルレンタル無料', 'シャワー・パウダールーム完備', '基礎化粧品完備'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', '脚痩せ', '産後ダイエット', 'ボディメイク'] },
    basicInfo: { hours: '8:00〜22:00', closed: '不定休', facilities: ['完全個室', 'シャワー', 'パウダールーム'] },
  },
  {
    name: 'リボーンマイセルフ 川崎店',
    officialUrl: 'https://www.shapes-international.co.jp/store/kawasaki/',
    price: '入会金22,000円＋コース料金',
    trial: '無料カウンセリング',
    features: ['女性専用', '女性トレーナーのみ', '10年以上の実績', '産後ダイエット', 'ブライダルコース'],
    description: '日本初の女性専用ダイエットジムです。トレーナーも全員女性です。川崎エリアの女性に長く支持されるジムです。産後・ブライダルコースも充実しています。',
    access: 'JR「川崎駅」北改札 徒歩5分',
    address: '神奈川県川崎市川崎区砂子1-1-14 JTB川崎共同ビル3階',
    popularPlan: { name: 'ダイエットコース', description: '女性トレーナーによるマンツーマン指導します。産後・ブライダルコースも用意しています。', price: '入会金22,000円＋コース料金' },
    options: ['ウェアレンタル無料', '産後ダイエットコース', 'ブライダルダイエットコース', '部分痩せコース'],
    userProfile: { ageRange: '20代〜50代', genderRatio: '女性100%', purpose: ['ダイエット', '産後ダイエット', 'ブライダル', '部分痩せ'] },
    basicInfo: { hours: '平日10:00〜22:00／土祝9:00〜20:00', closed: '公式サイトでご確認ください', facilities: ['ロッカー', 'ウェアレンタル'] },
  },
  {
    name: 'エクササイズコーチ 川崎',
    officialUrl: 'https://exercisecoach.co.jp/',
    price: '月額制（プラン・店舗により異なる）',
    trial: '無料体験あり',
    features: ['1回約20分', '月額制', 'AIマシン活用', '女性利用者が多い', '続けやすい'],
    description: '米国発のAIパーソナルジムです。1回約20分・月額制で、AIマシンが一人ひとりに最適な負荷を算出します。短時間で続けやすく、女性の利用者も多いのが特徴です。',
    access: '「川崎」駅周辺',
    address: '川崎エリア（最寄り店舗は公式サイトでご確認ください）',
    popularPlan: { name: '月額トレーニングプラン', description: 'AIマシンを活用した1回約20分のマンツーマントレーニングです。月額制のため、無理なく続けやすい料金体系です。', price: '月額制（プラン・店舗により異なる）' },
    options: ['ウェアレンタル', '手ぶらで通える', '女性スタッフ在籍店舗あり', '無料体験'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性が多数', purpose: ['ダイエット', 'ボディメイク', '運動習慣', '健康管理'] },
    basicInfo: { hours: '店舗により異なる', closed: '店舗により異なる', facilities: ['AIマシン', '個別ブース', 'ロッカー'] },
  },
]

const faqs = [
  { question: '川崎で女性専用のパーソナルジムはどこがおすすめですか？', answer: 'UNDEUX SUPERBODY、リボーンマイセルフ、エクササイズコーチが川崎で人気です。食事管理ならUNDEUX、女性トレーナー希望ならリボーンマイセルフです。' },
  { question: '川崎のパーソナルジムの料金相場はいくらですか？', answer: '川崎の2ヶ月コースは約18万〜22万円です。横浜とほぼ同等の価格帯です。' },
  { question: '川崎駅から最も近いジムはどこですか？', answer: 'UNDEUX SUPERBODYが徒歩3分です。リボーンマイセルフ（JR北改札から）は徒歩5分です。' },
  { question: '体験は無料ですか？', answer: 'UNDEUX SUPERBODYは体験レッスン0円です。リボーンマイセルフ・エクササイズコーチは無料カウンセリングです。' },
  { question: '川崎と横浜、どちらがおすすめですか？', answer: '川崎は横浜に比べてエリアがコンパクトで、駅近のジムが多いのが特長です。横浜は選択肢が多い一方、川崎はアクセスのしやすさに優れる傾向があります。通勤ルートに合わせて選ぶのがおすすめです。' },
  { question: '京急川崎駅からも通えますか？', answer: 'はい、多くのジムがJR川崎駅と京急川崎駅の間に位置しています。どちらの駅からもアクセス可能です。' },
  { question: '食事指導が充実しているジムはどこですか？', answer: 'UNDEUX SUPERBODYは栄養士による食事管理があり、コミットプランでは初月に宅配食30食が無料です。エクササイズコーチは「食べて痩せる」メソッドです。' },
  { question: '仕事帰りに通いやすいジムはどこですか？', answer: 'ほとんどのジムが22:00まで営業しています。川崎駅はJR・京急の主要ターミナルなので、品川・横浜方面からの帰宅途中にも立ち寄りやすい立地です。' },
]

export default function KawasakiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-accent text-xs mb-2">更新日 2026年04月13日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">川崎の女性専用パーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選・料金比較</h1></div></section>
        <section className="bg-white py-3 border-b border-line"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-brand-light"><Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}<span className="text-brand-muted">川崎</span></nav></div></section>
        <section className="py-12 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-brand-muted leading-relaxed mb-6">本ページはG-PersonalGym編集部が作成しています。</p><p className="text-brand-muted leading-relaxed mb-6">「川崎で女性専用のパーソナルジムを探している」「JR・京急のターミナル駅で通いやすいジムが知りたい」という方のために、川崎エリアでおすすめの女性向けパーソナルジム{gyms.length}選をまとめました。</p><div className="bg-ivory border-l-4 border-accent p-6 mb-8"><h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2><ul className="space-y-2 text-brand-muted"><li className="flex items-start"><span className="text-accent mr-2">✓</span><span>川崎で女性専用パーソナルジムを探している</span></li><li className="flex items-start"><span className="text-accent mr-2">✓</span><span>駅近で仕事帰りに通いたい</span></li><li className="flex items-start"><span className="text-accent mr-2">✓</span><span>料金を比較して選びたい</span></li><li className="flex items-start"><span className="text-accent mr-2">✓</span><span>食事指導も受けたい</span></li><li className="flex items-start"><span className="text-accent mr-2">✓</span><span>子連れで通いたい</span></li></ul></div></div></section>
        <AreaContext slug="kawasaki" />

        <WhyWomenOnly area="川崎" />

        <PriceComparisonTable gyms={gyms} areaName="川崎" />
        <section className="py-16 bg-ivory" id="gyms"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">川崎のおすすめ女性向けパーソナルジム{gyms.length}選</h2><div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div></div></section>
        <section className="py-16 bg-white"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">目的別おすすめ</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div className="border border-line rounded-xl p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-brand-text mb-4">コスパ重視</h3><ul className="space-y-2 text-sm"><li className="text-brand-muted">・エクササイズコーチ（月4回 17,600円〜・税込）</li></ul></div><div className="border border-line rounded-xl p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-brand-text mb-4">食事サポート重視</h3><ul className="space-y-2 text-sm"><li className="text-brand-muted">・UNDEUX SUPERBODY（コミットプランは初月宅配食30食無料）</li><li className="text-brand-muted">・エクササイズコーチ（食べて痩せるメソッド）</li></ul></div></div></div></section>
        <section className="py-16 bg-ivory"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">川崎の料金相場</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-6"><div className="bg-white rounded-xl p-6 border border-line"><h3 className="font-bold text-brand-text mb-3">2ヶ月集中コース</h3><p className="text-3xl font-bold text-accent mb-2">18万〜22万円</p><p className="text-sm text-brand-muted">横浜と同等の価格帯です。</p></div><div className="bg-white rounded-xl p-6 border border-line"><h3 className="font-bold text-brand-text mb-3">入会金</h3><p className="text-3xl font-bold text-accent mb-2">0〜5万円</p><p className="text-sm text-brand-muted">キャンペーンで入会金が無料になる場合もあります。体験時にご確認ください。</p></div></div></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">川崎で選ぶ際の注意点</h2><div className="space-y-6"><div className="bg-white rounded-xl p-6 border border-line"><h3 className="text-lg font-bold text-brand-text mb-3">JR川崎駅と京急川崎駅は徒歩5分離れている</h3><p className="text-brand-muted leading-relaxed">JR川崎駅と京急川崎駅は約400m離れています。通いたいジムがどちらの駅に近いか事前にご確認ください。多くのジムはJR川崎駅西口〜ラゾーナ方面に集中しています。</p></div><div className="bg-white rounded-xl p-6 border border-line"><h3 className="text-lg font-bold text-brand-text mb-3">品川・横浜の中間で通勤途中に最適</h3><p className="text-brand-muted leading-relaxed">川崎はJR東海道線・京急本線で品川と横浜の中間に位置です。通勤途中に立ち寄れるため、仕事帰りにジムに通いたい方には最適の立地です。</p></div></div></div></section>
        <section className="py-16 bg-ivory"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">よくある質問</h2><div className="space-y-4">{faqs.map((faq, index) => (<div key={index} className="border border-line rounded-xl overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-accent-tint transition"><h3 className="font-bold text-brand-text pr-4 text-sm">Q{index + 1}. {faq.question}</h3><svg className="w-5 h-5 text-accent group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-5 pb-5 text-brand-muted leading-relaxed text-sm">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl font-bold text-brand-text mb-6 text-center">まとめ</h2><p className="text-brand-muted leading-relaxed mb-4">川崎エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。</p><p className="text-brand-muted leading-relaxed mb-4">食事管理重視ならUNDEUX SUPERBODY、女性トレーナー希望ならリボーンマイセルフがおすすめです。</p><p className="text-brand-muted leading-relaxed">まずは気になるジムの体験レッスンをご利用ください。</p></div></section>
        <section className="py-16 bg-gradient-to-r from-accent to-accent-dark text-white"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl font-bold mb-4">まずは無料カウンセリングから</h2><p className="text-white/80 mb-8">複数のジムを比較し、ご自身に合ったジムをお選びください。</p><Link href="/ranking/" className="inline-block bg-white text-accent px-10 py-4 text-sm font-bold rounded-full hover:bg-accent-tint transition-all">おすすめランキングを見る</Link></div></section>
        <IntentGuideLinks />
      </main>
      <RelatedAreas currentSlug="kawasaki" />
      <SiteFooter />
    </>
  )
}
