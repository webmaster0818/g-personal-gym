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
  ...pageUrlMeta('/areas/fujisawa/'),
  title: '藤沢の女性専用パーソナルジムおすすめ2選｜料金比較',
  description: '藤沢の女性専用パーソナルジムの料金を2026年11月16日に公式で確認。UNDEUX SUPERBODY 藤沢スタジオは藤沢駅徒歩4分・女性トレーナー在籍・月2回18,900円〜（税込）・体験無料。住所・営業時間も掲載。',
  keywords: '女性専用パーソナルジム,藤沢,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'UNDEUX SUPERBODY 藤沢スタジオ',
    officialUrl: 'https://www.diet-undeux.jp/studio/fujisawa/',
    price: 'スタンダードプラン月2回 18,900円〜（税込）',
    trial: '無料体験トレーニングあり（約60分・初めての方）',
    features: ['女性専用', '女性トレーナー在籍', '月額制', 'マシンピラティス', '駅徒歩4分'],
    description: '藤沢駅徒歩4分の女性専用パーソナルジムです。月額制で、月2回 18,900円（税込）から通えます。マシンピラティスの設備もあり、筋トレとピラティスの両方が楽しめます。',
    access: '各線「藤沢駅」徒歩4分',
    address: '神奈川県藤沢市鵠沼石上1丁目8-1 Tsビル2F',
    popularPlan: { name: '月4回プラン', description: '月額制のマンツーマンパーソナルトレーニングです。マシンピラティスも受けられます。', price: '月4回 32,000円（終日）／平日9〜18時のDAYプランは27,500円（税込）' },
    options: ['マシンピラティス設備', '月2回〜8回から選択', '継続割あり', 'レンタルシューズ・ウェア・タオル'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '女性100%（女性専用）', purpose: ['ダイエット', 'ボディメイク', '姿勢改善', '体型維持'] },
    basicInfo: { hours: '8:00〜22:00（平日を中心に9:00開店の場合あり）', closed: '不定休', facilities: ['トレーニングルーム', 'ピラティスマシン'] },
  },
  {
    name: 'エクササイズコーチ 藤沢',
    officialUrl: 'https://exercisecoach.co.jp/',
    price: '月額制（プラン・店舗により異なる）',
    trial: '無料体験あり',
    features: ['1回約20分', '月額制', 'AIマシン活用', '女性利用者が多い', '続けやすい'],
    description: '米国発のAIパーソナルジムです。1回約20分・月額制で、AIマシンが一人ひとりに最適な負荷を算出します。短時間で続けやすく、女性の利用者も多いのが特徴です。',
    access: '藤沢駅周辺に店舗なし（公式の店舗一覧・2026年11月16日確認。神奈川県内は横浜・川崎ダイス・溝の口）',
    address: '藤沢市内の店舗は公式の店舗一覧に記載なし',
    popularPlan: { name: '月額トレーニングプラン', description: 'AIマシンを活用した1回約20分のマンツーマントレーニングです。月額制のため、無理なく続けやすい料金体系です。', price: '月額制（プラン・店舗により異なる）' },
    options: ['ウェアレンタル', '手ぶらで通える', '無料体験'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '男女利用可（女性専用ではありません）', purpose: ['ダイエット', 'ボディメイク', '運動習慣', '健康管理'] },
    basicInfo: { hours: '店舗により異なる', closed: '店舗により異なる', facilities: ['AIマシン', '個別ブース', 'ロッカー'] },
  },
]

const faqs = [
  { question: '藤沢で女性専用のパーソナルジムはどこがおすすめですか？', answer: '当サイトで藤沢エリアに掲載している女性専用ジムはUNDEUX SUPERBODY 藤沢スタジオです。月額制で通えます。' },
  { question: '藤沢のパーソナルジムの料金相場はいくらですか？', answer: '当サイト掲載のジムはいずれも月額制で、UNDEUX SUPERBODYは月2回 18,900円〜（税込）です。エクササイズコーチの料金はプラン・店舗により異なるため、公式サイトでご確認ください。' },
  { question: '藤沢駅から最も近いジムはどこですか？', answer: '掲載店では、UNDEUX SUPERBODY 藤沢スタジオが藤沢駅から徒歩4分です（藤沢市鵠沼石上1丁目8-1 Tsビル2F・公式・2026年11月16日確認）。' },
  { question: '体験は無料ですか？', answer: 'UNDEUX SUPERBODY 藤沢スタジオは、初めての方は無料で体験トレーニング（約60分）を受けられます。エクササイズコーチも無料体験がありますが、公式の店舗一覧に藤沢店はありません（2026年11月16日確認）。' },
  { question: '藤沢で女性トレーナーに担当してもらえますか？', answer: 'UNDEUX SUPERBODY 藤沢スタジオは「女性トレーナー在籍」と公式に記載しています。ただしトレーナーは専任制ではなく、複数名のチームで担当します（公式FAQ・2026年11月16日確認）。' },
  { question: 'マシンピラティスも受けたい場合はどうすればよいですか？', answer: 'UNDEUX SUPERBODY 藤沢スタジオはマシンピラティスの設備も完備しています。筋トレとピラティスの両方を楽しめます。' },
  { question: '食事指導が充実しているジムはどこですか？', answer: 'UNDEUX SUPERBODY 藤沢スタジオは食事相談0円で、コミットプラン（月6回79,200円・税込）は栄養士サポートと宅配食30食付き（送料別途）です（公式・2026年11月16日確認）。' },
]

export default function FujisawaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-accent text-xs mb-2">更新日 2026年11月16日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">藤沢の女性専用パーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選・料金比較</h1></div></section>
        <section className="bg-white py-3 border-b border-line"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-brand-light"><Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}<span className="text-brand-muted">藤沢</span></nav></div></section>
        <section className="py-12 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-brand-muted leading-relaxed mb-6">本ページはG-PersonalGym編集部が作成しています。</p><p className="text-brand-muted leading-relaxed mb-6">「藤沢・湘南エリアで女性専用のパーソナルジムを探している」「ビーチシーズンに向けて体を引き締めたい」という方のために、藤沢エリアでおすすめの女性向けパーソナルジム{gyms.length}選をまとめました。</p><p className="text-brand-muted leading-relaxed mb-6">藤沢駅周辺で女性専用と公式に記載がある掲載店は、UNDEUX SUPERBODY 藤沢スタジオ（藤沢駅徒歩4分・女性トレーナー在籍・月2回18,900円〜・体験無料）です（公式サイト・2026年11月16日確認・税込）。エクササイズコーチは同日時点で公式の店舗一覧に藤沢店がありません。料金はすぐ下の早見表をご覧ください。</p><div className="bg-ivory border-l-4 border-accent p-6 mb-8"><h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2><ul className="space-y-2 text-brand-muted"><li className="flex items-start"><span className="text-accent mr-2">✓</span><span>藤沢・湘南エリアで女性専用ジムを探している</span></li><li className="flex items-start"><span className="text-accent mr-2">✓</span><span>夏に向けて美脚を目指したい</span></li><li className="flex items-start"><span className="text-accent mr-2">✓</span><span>月額制で気軽に始めたい</span></li><li className="flex items-start"><span className="text-accent mr-2">✓</span><span>料金を比較して選びたい</span></li></ul></div></div></section>
        <AreaContext slug="fujisawa" />

        <WhyWomenOnly area="藤沢" />

        <PriceComparisonTable gyms={gyms} areaName="藤沢" />
        <section className="py-16 bg-ivory" id="gyms"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">藤沢のおすすめ女性向けパーソナルジム{gyms.length}選</h2><div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div></div></section>
        <section className="py-16 bg-white"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">目的別おすすめ</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div className="border border-line rounded-xl p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-brand-text mb-4">コスパ重視</h3><ul className="space-y-2 text-sm"><li className="text-brand-muted">・UNDEUX SUPERBODY（月2回 18,900円〜）</li></ul></div><div className="border border-line rounded-xl p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-brand-text mb-4">美脚・ビーチボディ</h3><ul className="space-y-2 text-sm"><li className="text-brand-muted">・UNDEUX SUPERBODY（ピラティスも可）</li></ul></div></div></div></section>
        <section className="py-16 bg-ivory"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">藤沢の料金相場</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-6"><div className="bg-white rounded-xl p-6 border border-line"><h3 className="font-bold text-brand-text mb-3">2ヶ月集中コース</h3><p className="text-3xl font-bold text-accent mb-2">掲載なし</p><p className="text-sm text-brand-muted">当サイトで藤沢エリアに掲載しているジムは月額制のみです。</p></div><div className="bg-white rounded-xl p-6 border border-line"><h3 className="font-bold text-brand-text mb-3">月額制</h3><p className="text-3xl font-bold text-accent mb-2">18,900円〜/月</p><p className="text-sm text-brand-muted">UNDEUX SUPERBODY 月2回 18,900円〜（税込）です。気軽に始められる価格帯です。</p></div></div></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">藤沢で選ぶ際の注意点</h2><div className="space-y-6"><div className="bg-white rounded-xl p-6 border border-line"><h3 className="text-lg font-bold text-brand-text mb-3">店舗の有無を公式で確かめる</h3><p className="text-brand-muted leading-relaxed">ほかのまとめサイトで紹介されている OUTLINE 藤沢・リボーンマイセルフ藤沢店は、2026年11月16日時点で公式の店舗ページが表示されません。申し込み前に、各ジムの公式の店舗一覧で藤沢店があるかをご確認ください。</p></div><div className="bg-white rounded-xl p-6 border border-line"><h3 className="text-lg font-bold text-brand-text mb-3">夏のビーチシーズンを見据えた計画</h3><p className="text-brand-muted leading-relaxed">湘南は夏のビーチが人気です。夏に向けて取り組む場合は、2ヶ月前の4〜5月頃に始めることをおすすめします。早めの無料カウンセリングがおすすめです。</p></div></div></div></section>
        <section className="py-16 bg-ivory"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">よくある質問</h2><div className="space-y-4">{faqs.map((faq, index) => (<div key={index} className="border border-line rounded-xl overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-accent-tint transition"><h3 className="font-bold text-brand-text pr-4 text-sm">Q{index + 1}. {faq.question}</h3><svg className="w-5 h-5 text-accent group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-5 pb-5 text-brand-muted leading-relaxed text-sm">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl font-bold text-brand-text mb-6 text-center">まとめ</h2><p className="text-brand-muted leading-relaxed mb-4">藤沢エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。</p><p className="text-brand-muted leading-relaxed mb-4">月額制で通うならUNDEUX SUPERBODYがおすすめです。</p><p className="text-brand-muted leading-relaxed">まずは気になるジムの体験レッスンをご利用ください。</p></div></section>
        <section className="py-16 bg-gradient-to-r from-accent to-accent-dark text-white"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl font-bold mb-4">まずは無料カウンセリングから</h2><p className="text-white/80 mb-8">複数のジムを比較し、ご自身に合ったジムをお選びください。</p><Link href="/ranking/" className="inline-block bg-white text-accent px-10 py-4 text-sm font-bold rounded-full hover:bg-accent-tint transition-all">おすすめランキングを見る</Link></div></section>
        <IntentGuideLinks />
      </main>
      <RelatedAreas currentSlug="fujisawa" />
      <SiteFooter />
    </>
  )
}
