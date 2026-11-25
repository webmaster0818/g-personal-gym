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
  title: '川崎の女性専用パーソナルジムおすすめ3選｜料金・女性トレーナー比較',
  description: '川崎の女性向けパーソナルジム3選の料金を2026年11月16日に公式で確認。トレーナー全員女性はリボーンマイセルフ（2ヶ月16回202,400円）、UNDEUXは女性トレーナー在籍・月2回20,500円（税込）。住所・営業時間も掲載。',
  keywords: '女性専用パーソナルジム,川崎,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'UNDEUX SUPERBODY 川崎スタジオ',
    officialUrl: 'https://www.diet-undeux.jp/studio/kawasaki/',
    price: 'スタンダードプラン月2回 20,500円〜（税込）',
    trial: '無料体験トレーニング',
    features: ['女性専用', '女性トレーナー在籍', '京急川崎駅徒歩1分', '宅配食30食付き（コミット）', '手ぶらOK'],
    description: '京急川崎駅徒歩1分・JR川崎駅徒歩2分の女性専用パーソナルジムです。コミットプランは栄養士サポートと宅配食30食付き（送料別途）です。シャワールーム・パウダールームがあり、ウェア・シューズをレンタルして手ぶらで通えます。女性トレーナーが在籍しています（トレーナーは専任制ではなくチーム制）。',
    access: 'JR「川崎駅」徒歩2分・「京急川崎駅」徒歩1分',
    address: '神奈川県川崎市川崎区駅前本町10-1 MEFULL川崎10F',
    popularPlan: { name: 'コミットプラン', description: 'トレーニング月6回と栄養士による毎日の食事管理を組み合わせた月額制プランです（全店共通価格）。', price: '月額79,200円' },
    options: ['コミットプランは宅配食30食付き（送料別途）', 'ウェア・シューズ・タオルレンタル', 'シャワールーム・パウダールーム', 'マシンピラティス'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', '脚痩せ', '産後ダイエット', 'ボディメイク'] },
    basicInfo: { hours: '8:00〜22:00（平日を中心に9:00開店の場合あり）', closed: '不定休', facilities: ['シャワールーム', 'パウダールーム'] },
  },
  {
    name: 'リボーンマイセルフ 川崎店',
    officialUrl: 'https://www.shapes-international.co.jp/store/kawasaki/',
    price: 'ショートコース2ヶ月16回 202,400円（税込・入会金22,000円）',
    trial: '無料カウンセリング・無料体験トレーニング（0円）',
    features: ['女性専用', '女性トレーナーのみ', '10年以上の実績', '産後ダイエット'],
    description: '女性専用のダイエットジムです。トレーナーも全員女性です。川崎エリアの女性に長く支持されるジムです。',
    access: 'JR「川崎駅」北改札 徒歩5分',
    address: '神奈川県川崎市川崎区砂子1-1-14 JTB川崎共同ビル3階',
    popularPlan: { name: 'ショートコース（2ヶ月16回）', description: '女性トレーナーによるマンツーマン指導です。', price: '202,400円（税込）。入会金22,000円（店舗ページのキャンペーンで入会金無料＋全コース10％OFF）' },
    options: ['ウェアレンタル無料'],
    userProfile: { ageRange: '20代〜50代', genderRatio: '女性100%', purpose: ['ダイエット', '産後ダイエット', 'ブライダル', '部分痩せ'] },
    basicInfo: { hours: '平日10:00〜22:00／土祝9:00〜20:00', closed: '日曜日', facilities: ['シャワールーム', '個室のパウダールーム', '個室のカウンセリングルーム'] },
  },
  {
    name: 'エクササイズコーチ 川崎ダイス店',
    officialUrl: 'https://exercisecoach.co.jp/store/kawasaki/',
    price: 'スタンダード月4回 17,600円〜（税込）',
    trial: '無料体験あり',
    features: ['1回約20分', '月額制', 'AIマシン活用', '男女利用可', '駅から地下直結'],
    description: '米国発のAIパーソナルジムです。1回約20分・月額制で、AIマシンが一人ひとりに最適な負荷を算出します。男女とも利用でき、女性専用ではありません。川崎DICEの5階で、駅から地下で直結しています。',
    access: '京急川崎駅 徒歩2分・JR川崎駅東口 徒歩3分',
    address: '神奈川県川崎市川崎区駅前本町8 川崎DICEビル5階',
    popularPlan: { name: 'スタンダード（全営業時間）', description: 'AIマシンを活用した1回約20分のマンツーマントレーニングです。月額会費制です。', price: '月4回17,600円／月6回25,080円／月8回31,680円（税込）。平日10〜17時のデイプランは月4回14,960円〜' },
    options: ['デイプラン（平日10〜17時）', '個室更衣室', 'タイムズステーション川崎と提携', '無料体験'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '男女利用可（女性専用ではありません）', purpose: ['ダイエット', 'ボディメイク', '運動習慣', '健康管理'] },
    basicInfo: { hours: '平日10:00〜21:00／土日祝10:00〜20:00', closed: '年中無休', facilities: ['AIマシン', '個室更衣室'] },
  },
]

const faqs = [
  { question: '川崎で女性専用のパーソナルジムはどこがおすすめですか？', answer: '当サイトの掲載店で女性専用と公式に記載があるのは UNDEUX SUPERBODY 川崎スタジオとリボーンマイセルフ 川崎店です。エクササイズコーチ 川崎ダイス店は男女利用可です。食事管理ならUNDEUX、女性トレーナー希望ならトレーナーが全員女性のリボーンマイセルフです。' },
  { question: '川崎で女性トレーナーに担当してもらえるジムはどこですか？', answer: 'リボーンマイセルフ 川崎店は「トレーナーも全員女性」と公式に記載しています。UNDEUX SUPERBODY 川崎スタジオは「女性トレーナー在籍」ですが、トレーナーは専任制ではなく複数名のチームで担当します（公式FAQ）。エクササイズコーチの店舗ページには女性トレーナーの記載がありません（各公式・2026年11月16日確認）。' },
  { question: '川崎のパーソナルジムの料金相場はいくらですか？', answer: '掲載店の公式料金（2026年11月16日確認・税込）は、リボーンマイセルフのショートコース2ヶ月16回202,400円、UNDEUX SUPERBODYの月2回20,500円・月4回33,400円、エクササイズコーチの月4回17,600円です。' },
  { question: '川崎駅から最も近いジムはどこですか？', answer: 'UNDEUX SUPERBODYは京急川崎駅から徒歩1分・JR川崎駅から徒歩2分、エクササイズコーチは京急川崎駅から徒歩2分・JR川崎駅東口から徒歩3分、リボーンマイセルフはJR北改札から徒歩5分・京急川崎駅から徒歩2分です（各公式・2026年11月16日確認）。' },
  { question: '体験は無料ですか？', answer: 'UNDEUX SUPERBODYは無料体験トレーニング、リボーンマイセルフはカウンセリング・体験トレーニングとも0円、エクササイズコーチも無料体験があります（各公式・2026年11月16日確認）。' },
  { question: '川崎と横浜、どちらがおすすめですか？', answer: '川崎は横浜に比べてエリアがコンパクトで、駅近のジムが多いのが特長です。横浜は選択肢が多い一方、川崎はアクセスのしやすさに優れる傾向があります。通勤ルートに合わせて選ぶのがおすすめです。' },
  { question: '京急川崎駅からも通えますか？', answer: 'はい。掲載3店はいずれもJR川崎駅の東口側にあり、京急川崎駅から徒歩1〜2分です。' },
  { question: '食事指導が充実しているジムはどこですか？', answer: 'UNDEUX SUPERBODYのコミットプラン（月6回79,200円・税込）は栄養士サポートと宅配食30食付き（送料別途）です。リボーンマイセルフは食事改善を含むダイエットプランです。' },
  { question: '仕事帰りに通いやすいジムはどこですか？', answer: 'UNDEUX SUPERBODYは22:00まで（毎日）、リボーンマイセルフは平日22:00まで、エクササイズコーチは平日21:00まで営業しています（各公式・2026年11月16日確認）。' },
]

export default function KawasakiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-accent text-xs mb-2">更新日 2026年11月16日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">川崎の女性専用パーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選・料金比較</h1></div></section>
        <section className="bg-white py-3 border-b border-line"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-brand-light"><Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}<span className="text-brand-muted">川崎</span></nav></div></section>
        <section className="py-12 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-brand-muted leading-relaxed mb-6">本ページはG-PersonalGym編集部が作成しています。</p><p className="text-brand-muted leading-relaxed mb-6">「川崎で女性専用のパーソナルジムを探している」「JR・京急のターミナル駅で通いやすいジムが知りたい」という方のために、川崎エリアでおすすめの女性向けパーソナルジム{gyms.length}選をまとめました。</p><p className="text-brand-muted leading-relaxed mb-6">川崎で女性トレーナーに担当してほしい場合、トレーナーが全員女性なのはリボーンマイセルフ 川崎店です。UNDEUX SUPERBODY 川崎スタジオも女性トレーナー在籍ですが、専任制ではなくチームで担当します（各公式サイト・2026年11月16日確認）。料金はすぐ下の早見表で比べられます。</p><div className="bg-ivory border-l-4 border-accent p-6 mb-8"><h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2><ul className="space-y-2 text-brand-muted"><li className="flex items-start"><span className="text-accent mr-2">✓</span><span>川崎で女性専用パーソナルジムを探している</span></li><li className="flex items-start"><span className="text-accent mr-2">✓</span><span>駅近で仕事帰りに通いたい</span></li><li className="flex items-start"><span className="text-accent mr-2">✓</span><span>料金を比較して選びたい</span></li><li className="flex items-start"><span className="text-accent mr-2">✓</span><span>食事指導も受けたい</span></li><li className="flex items-start"><span className="text-accent mr-2">✓</span><span>子連れで通いたい</span></li></ul></div></div></section>
        <AreaContext slug="kawasaki" />

        <WhyWomenOnly area="川崎" />

        <PriceComparisonTable gyms={gyms} areaName="川崎" />
        <section className="py-16 bg-ivory" id="gyms"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">川崎のおすすめ女性向けパーソナルジム{gyms.length}選</h2><div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div></div></section>
        <section className="py-16 bg-white"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">目的別おすすめ</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div className="border border-line rounded-xl p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-brand-text mb-4">コスパ重視</h3><ul className="space-y-2 text-sm"><li className="text-brand-muted">・エクササイズコーチ（月4回 17,600円〜・税込）</li></ul></div><div className="border border-line rounded-xl p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-brand-text mb-4">食事サポート重視</h3><ul className="space-y-2 text-sm"><li className="text-brand-muted">・UNDEUX SUPERBODY（コミットプランは栄養士サポート・宅配食30食付き）</li><li className="text-brand-muted">・リボーンマイセルフ（食事改善を含むダイエットプラン）</li></ul></div></div></div></section>
        <section className="py-16 bg-ivory"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">川崎の料金相場</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-6"><div className="bg-white rounded-xl p-6 border border-line"><h3 className="font-bold text-brand-text mb-3">2ヶ月集中コース</h3><p className="text-3xl font-bold text-accent mb-2">202,400円</p><p className="text-sm text-brand-muted">リボーンマイセルフ 川崎店のショートコース（2ヶ月16回・税込・公式・2026年11月16日確認）です。</p></div><div className="bg-white rounded-xl p-6 border border-line"><h3 className="font-bold text-brand-text mb-3">入会金</h3><p className="text-3xl font-bold text-accent mb-2">19,800〜22,000円</p><p className="text-sm text-brand-muted">エクササイズコーチ19,800円、リボーンマイセルフ22,000円（店舗ページのキャンペーンで無料）。UNDEUX SUPERBODYは料金表・店舗ページに記載がありません（各公式・2026年11月16日確認）。</p></div></div></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">川崎で選ぶ際の注意点</h2><div className="space-y-6"><div className="bg-white rounded-xl p-6 border border-line"><h3 className="text-lg font-bold text-brand-text mb-3">JR川崎駅と京急川崎駅のどちらに近いか</h3><p className="text-brand-muted leading-relaxed">掲載3店はいずれもJR川崎駅の東口側にあり、京急川崎駅からは徒歩1〜2分です。JR川崎駅からは徒歩2〜5分です（各公式の表記）。</p></div><div className="bg-white rounded-xl p-6 border border-line"><h3 className="text-lg font-bold text-brand-text mb-3">品川・横浜の中間で通勤途中に最適</h3><p className="text-brand-muted leading-relaxed">川崎はJR東海道線・京急本線で品川と横浜の中間に位置です。通勤途中に立ち寄れるため、仕事帰りにジムに通いたい方には最適の立地です。</p></div></div></div></section>
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
