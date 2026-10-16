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
  ...pageUrlMeta('/areas/machida/'),
  title: '【2026年7月】町田の女性専用パーソナルジムおすすめ3選｜料金比較',
  description: '【2026年4月】町田のおすすめ女性専用パーソナルジム3選を比較しています。リボーンマイセルフ・UNDEUX SUPERBODY・エクササイズコーチなど人気ジムの料金・口コミ・特徴を掲載しています。',
  keywords: '女性専用パーソナルジム,町田,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'リボーンマイセルフ 町田店',
    officialUrl: 'https://www.shapes-international.co.jp/store/machida/',
    price: '入会金22,000円＋コース料金',
    trial: '無料カウンセリング',
    features: ['女性専用', '女性トレーナーのみ', 'アライメント分析', '駅徒歩4分', '産後対応'],
    description: '日本初の女性専用ダイエットジムです。町田駅徒歩4分です。アライメント（姿勢や筋肉のつき方）を分析して一人ひとりに合わせたメニューを作成します。トレーナーも全員女性です。',
    access: 'JR・小田急「町田駅」徒歩4分',
    address: '東京都町田市原町田6-21-17 Fビル3階',
    popularPlan: { name: 'ダイエットコース', description: 'アライメント分析に基づくオーダーメイドメニューです。女性トレーナーによるマンツーマン指導します。', price: '入会金22,000円＋コース料金' },
    options: ['ウェアレンタル無料', '産後ダイエットコース', 'ブライダルダイエットコース', 'アライメント分析'],
    userProfile: { ageRange: '20代〜50代', genderRatio: '女性100%', purpose: ['ダイエット', '産後ダイエット', 'ブライダル', '姿勢改善'] },
    basicInfo: { hours: '平日10:00〜22:00／土祝9:00〜20:00', closed: '公式サイトでご確認ください', facilities: ['ロッカー', 'ウェアレンタル'] },
  },
  {
    name: 'UNDEUX SUPERBODY LIFE 町田スタジオ',
    officialUrl: 'https://www.diet-undeux.jp/',
    price: '月額 19,800円〜（税込）',
    trial: '体験レッスンあり',
    features: ['女性専用', '月額制', '1万円台〜', '駅徒歩2分', '回数選択制'],
    description: '月額制の女性専用パーソナルジムです。月額1万円台から通えるお手軽さが魅力です。町田駅から徒歩2分の好立地です。月2回〜8回から回数を選択可能です。',
    access: 'JR「町田駅」徒歩2分',
    address: '東京都町田市（町田駅徒歩2分）',
    popularPlan: { name: '月4回プラン', description: '月額制のマンツーマンパーソナルトレーニングです。1回50分です。', price: '月額 33,000円〜（税込）' },
    options: ['月2回〜8回から選択', '継続割あり', 'ウェアレンタル', 'シャワー完備'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '体型維持', '運動習慣'] },
    basicInfo: { hours: '8:00〜22:00', closed: '不定休', facilities: ['トレーニングルーム', 'シャワー', 'ロッカー'] },
  },
  {
    name: 'エクササイズコーチ 町田',
    officialUrl: 'https://exercisecoach.co.jp/',
    price: '月額制（プラン・店舗により異なる）',
    trial: '無料体験あり',
    features: ['1回約20分', '月額制', 'AIマシン活用', '女性利用者が多い', '続けやすい'],
    description: '米国発のAIパーソナルジムです。1回約20分・月額制で、AIマシンが一人ひとりに最適な負荷を算出します。短時間で続けやすく、女性の利用者も多いのが特徴です。',
    access: '「町田」駅周辺',
    address: '町田エリア（最寄り店舗は公式サイトでご確認ください）',
    popularPlan: { name: '月額トレーニングプラン', description: 'AIマシンを活用した1回約20分のマンツーマントレーニングです。月額制のため、無理なく続けやすい料金体系です。', price: '月額制（プラン・店舗により異なる）' },
    options: ['ウェアレンタル', '手ぶらで通える', '女性スタッフ在籍店舗あり', '無料体験'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性が多数', purpose: ['ダイエット', 'ボディメイク', '運動習慣', '健康管理'] },
    basicInfo: { hours: '店舗により異なる', closed: '店舗により異なる', facilities: ['AIマシン', '個別ブース', 'ロッカー'] },
  },
]

const faqs = [
  { question: '町田で女性専用のパーソナルジムはどこがおすすめですか？', answer: 'リボーンマイセルフ、UNDEUX SUPERBODY LIFE、エクササイズコーチが町田で人気です。女性トレーナー希望ならリボーンマイセルフがおすすめです。' },
  { question: '町田のパーソナルジムの料金相場はいくらですか？', answer: '町田の2ヶ月コースは約18万〜22万円です。月額制ならUNDEUX SUPERBODY LIFEの月額19,800円〜です。都心部より安くパーソナルジムに通えるエリアです。' },
  { question: '町田駅から最も近いジムはどこですか？', answer: 'UNDEUX SUPERBODY LIFE町田スタジオが徒歩2分で最寄りです。リボーンマイセルフは徒歩4分、エクササイズコーチは徒歩5分です。' },
  { question: '体験は無料ですか？', answer: 'リボーンマイセルフ・エクササイズコーチは無料カウンセリングです。UNDEUX SUPERBODY LIFEは体験レッスンがあります。' },
  { question: '月額制で安く通えるジムはどこですか？', answer: 'UNDEUX SUPERBODY LIFEは月額19,800円〜（月2回）から始められます。お試し感覚で気軽にスタートできる料金設定です。' },
  { question: '町田は相場より安いというのは本当ですか？', answer: 'はい、町田は都心部と比べてパーソナルジムの料金が若干安い傾向があります。特に町田駅南口エリアは低価格で通えるジムが集まっています。' },
  { question: '食事指導が充実しているジムはどこですか？', answer: 'エクササイズコーチは糖質制限なしの「食べて痩せる」メソッドです。リボーンマイセルフも食事指導が充実しています。' },
  { question: '小田急線と横浜線、どちらの改札が近いですか？', answer: 'ジムによって異なりますが、多くは小田急町田駅の方が近い傾向です。JR横浜線町田駅からも徒歩圏内です。事前にアクセスをご確認ください。' },
]

export default function MachidaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-accent text-xs mb-2">更新日 2026年04月13日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">【2026年7月】町田の女性専用パーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選・料金比較</h1></div></section>
        <section className="bg-white py-3 border-b border-line"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-brand-light"><Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}<span className="text-brand-muted">町田</span></nav></div></section>
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">本ページはG-PersonalGym編集部が作成しています。</p>
            <p className="text-brand-muted leading-relaxed mb-6">「町田で女性専用のパーソナルジムを探している」「都心より安く通えるジムが知りたい」という方のために、町田エリアでおすすめの女性向けパーソナルジム{gyms.length}選をまとめました。</p>
            <div className="bg-ivory border-l-4 border-accent p-6 mb-8">
              <h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-brand-muted">
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>町田で女性専用パーソナルジムを探している</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>都心より安く通いたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>月額制で気軽に始めたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>料金を比較して選びたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>子連れで通いたい</span></li>
              </ul>
            </div>
          </div>
        </section>
        <AreaContext slug="machida" />

        <WhyWomenOnly area="町田" />

        <PriceComparisonTable gyms={gyms} areaName="町田" />
        <section className="py-16 bg-ivory" id="gyms"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">町田のおすすめ女性向けパーソナルジム{gyms.length}選</h2><div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div></div></section>
        <section className="py-16 bg-white"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">目的別おすすめ</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div className="border border-line rounded-xl p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-brand-text mb-4">コスパ重視</h3><ul className="space-y-2 text-sm"><li className="text-brand-muted">・UNDEUX LIFE（月額19,800円〜）</li></ul></div><div className="border border-line rounded-xl p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-brand-text mb-4">食事サポート重視</h3><ul className="space-y-2 text-sm"><li className="text-brand-muted">・エクササイズコーチ（食べて痩せるメソッド）</li><li className="text-brand-muted">・リボーンマイセルフ（食事指導充実）</li></ul></div></div></div></section>
        <section className="py-16 bg-ivory"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">町田の料金相場【2026年4月】</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-6"><div className="bg-white rounded-xl p-6 border border-line"><h3 className="font-bold text-brand-text mb-3">2ヶ月集中コース</h3><p className="text-3xl font-bold text-accent mb-2">18万〜22万円</p><p className="text-sm text-brand-muted">都心部より相場が低めのエリアです。</p></div><div className="bg-white rounded-xl p-6 border border-line"><h3 className="font-bold text-brand-text mb-3">月額制</h3><p className="text-3xl font-bold text-accent mb-2">2万円〜/月</p><p className="text-sm text-brand-muted">UNDEUX LIFE 月額19,800円〜です。町田は気軽に始められる価格帯です。</p></div></div></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">町田で選ぶ際の注意点</h2><div className="space-y-6"><div className="bg-white rounded-xl p-6 border border-line"><h3 className="text-lg font-bold text-brand-text mb-3">JR町田駅と小田急町田駅は離れている</h3><p className="text-brand-muted leading-relaxed">JR横浜線の町田駅と小田急線の町田駅は約400m離れています。通いたいジムがどちらの駅に近いか、事前にご確認ください。多くのジムは小田急町田駅寄りに集中しています。</p></div><div className="bg-white rounded-xl p-6 border border-line"><h3 className="text-lg font-bold text-brand-text mb-3">南口エリアは低価格帯のジムが多い</h3><p className="text-brand-muted leading-relaxed">町田駅南口エリアは北口に比べてテナント賃料が低い傾向があり、その分ジムの料金もリーズナブルです。コスパ重視なら南口エリアのジムもご確認ください。</p></div></div></div></section>
        <section className="py-16 bg-ivory"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">よくある質問</h2><div className="space-y-4">{faqs.map((faq, index) => (<div key={index} className="border border-line rounded-xl overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-accent-tint transition"><h3 className="font-bold text-brand-text pr-4 text-sm">Q{index + 1}. {faq.question}</h3><svg className="w-5 h-5 text-accent group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-5 pb-5 text-brand-muted leading-relaxed text-sm">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl font-bold text-brand-text mb-6 text-center">まとめ</h2><p className="text-brand-muted leading-relaxed mb-4">町田エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。</p><p className="text-brand-muted leading-relaxed mb-4">女性トレーナー希望ならリボーンマイセルフ、月額制ならUNDEUX SUPERBODY LIFEがおすすめです。</p><p className="text-brand-muted leading-relaxed">まずは気になるジムの体験レッスンをご利用ください。</p></div></section>
        <section className="py-16 bg-gradient-to-r from-accent to-accent-dark text-white"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl font-bold mb-4">まずは無料カウンセリングから</h2><p className="text-white/80 mb-8">複数のジムを比較し、ご自身に合ったジムをお選びください。</p><Link href="/ranking/" className="inline-block bg-white text-accent px-10 py-4 text-sm font-bold rounded-full hover:bg-accent-tint transition-all">おすすめランキングを見る</Link></div></section>
        <IntentGuideLinks />
      </main>
      <RelatedAreas currentSlug="machida" />
      <SiteFooter />
    </>
  )
}
