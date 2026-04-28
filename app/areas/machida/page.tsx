import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { GymCard } from '@/components/GymCard'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { FAQSchema } from '@/components/FAQSchema'
import { RelatedAreas } from '@/components/RelatedAreas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '【2026最新】町田の女性専用パーソナルジムおすすめ5選！料金比較',
  description: '【2026年4月最新】町田のおすすめ女性専用パーソナルジム5選を徹底比較。OUTLINE・リボーンマイセルフ・UNDEUX SUPERBODYなど人気ジムの料金・口コミ・特徴を網羅。',
  keywords: '女性専用パーソナルジム,町田,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'OUTLINE 町田店',
    rating: 4.7,
    reviewCount: 15,
    reviews: [
      { author: 'K.S', rating: 5, date: '1週間前', text: '生涯サポート付きで安心。町田駅から徒歩圏内で通いやすいです。' },
      { author: 'R.T', rating: 5, date: '2週間前', text: '女性専用マシンでのトレーニングが効率的。完全個室でリラックスできます。' },
      { author: 'N.M', rating: 4, date: '1ヶ月前', text: 'ベビーサークル完備で子連れOK。町田で女性専用の完全個室ジムは貴重です。' },
    ],
    price: '16回 184,800円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '完全個室', '生涯サポート無料', 'ベビーサークル完備', '女性特化マシン'],
    description: '業界初の生涯無料アフターサポート。完全個室・女性専用マシン完備。町田駅から徒歩7分。ベビーサークルもあり子連れでも安心。',
    access: 'JR「町田駅」徒歩7分',
    address: '東京都町田市（町田駅徒歩7分）',
    popularPlan: { name: '16回コース', description: '完全個室マンツーマントレーニング。卒業後も生涯無料でアフターサポート。', price: '16回 184,800円〜（税込）' },
    options: ['生涯無料アフターサポート', 'ベビーサークル完備', 'よもぎ蒸し', '高級アミノ酸提供', 'ウェアレンタル無料'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '産後ダイエット', 'リバウンド防止'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'ベビーサークル', '女性専用マシン'] },
  },
  {
    name: 'リボーンマイセルフ 町田店',
    rating: 4.6,
    reviewCount: 14,
    reviews: [
      { author: 'T.K', rating: 5, date: '2週間前', text: 'トレーナーが全員女性で安心。町田駅から徒歩4分で通いやすい。' },
      { author: 'M.H', rating: 4, date: '1ヶ月前', text: 'アライメント分析で自分だけのメニューを作ってくれるのが魅力。' },
      { author: 'E.S', rating: 5, date: '3週間前', text: '産後ダイエットで-4kg。女性トレーナーだからこそ相談しやすかったです。' },
    ],
    price: '入会金38,000円＋コース料金',
    trial: '無料カウンセリング',
    features: ['女性専用', '女性トレーナーのみ', 'アライメント分析', '駅徒歩4分', '産後対応'],
    description: '日本初の女性専用ダイエットジム。町田駅徒歩4分。アライメント（姿勢や筋肉のつき方）を分析して一人ひとりに合わせたメニューを作成。トレーナーも全員女性。',
    access: 'JR「町田駅」徒歩4分',
    address: '東京都町田市（町田駅徒歩4分）',
    popularPlan: { name: 'ダイエットコース', description: 'アライメント分析に基づくオーダーメイドメニュー。女性トレーナーによるマンツーマン指導。', price: '入会金38,000円＋コース料金' },
    options: ['ウェアレンタル無料', '産後ダイエットコース', 'ブライダルダイエットコース', 'アライメント分析'],
    userProfile: { ageRange: '20代〜50代', genderRatio: '女性100%', purpose: ['ダイエット', '産後ダイエット', 'ブライダル', '姿勢改善'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['ロッカー', 'ウェアレンタル'] },
  },
  {
    name: 'UNDEUX SUPERBODY LIFE 町田スタジオ',
    rating: 4.6,
    reviewCount: 11,
    reviews: [
      { author: 'A.N', rating: 5, date: '2週間前', text: '月額制で1万円台から始められるのが嬉しい。町田駅から徒歩2分の好立地。' },
      { author: 'M.K', rating: 4, date: '1ヶ月前', text: '月の回数を2回〜8回から選べるので自分のペースで通える。女性専用で安心。' },
      { author: 'Y.S', rating: 4, date: '3週間前', text: '一流の女性専門トレーナーが在籍。気軽に始められる料金設定が魅力。' },
    ],
    price: '月額 19,800円〜（税込）',
    trial: '体験レッスンあり',
    features: ['女性専用', '月額制', '1万円台〜', '駅徒歩2分', '回数選択制'],
    description: '月額制の女性専用パーソナルジム。月額1万円台から通えるお手軽さが魅力。町田駅から徒歩2分の好立地。月2回〜8回から回数を選択可能。',
    access: 'JR「町田駅」徒歩2分',
    address: '東京都町田市（町田駅徒歩2分）',
    popularPlan: { name: '月4回プラン', description: '月額制のマンツーマンパーソナルトレーニング。1回50分。', price: '月額 33,000円〜（税込）' },
    options: ['月2回〜8回から選択', '継続割あり', 'ウェアレンタル', 'シャワー完備'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '体型維持', '運動習慣'] },
    basicInfo: { hours: '9:00〜22:00', closed: '不定休', facilities: ['トレーニングルーム', 'シャワー', 'ロッカー'] },
  },
  {
    name: 'ビーコンセプト 町田店',
    rating: 4.6,
    reviewCount: 12,
    reviews: [
      { author: 'S.M', rating: 5, date: '2週間前', text: '太もも痩せに特化。町田で脚やせメソッドが受けられるのは嬉しい。' },
      { author: 'H.T', rating: 5, date: '1ヶ月前', text: '医師監修で安心。完全個室で人目を気にせずトレーニングに集中できます。' },
      { author: 'A.K', rating: 4, date: '3週間前', text: '分割払いで月々5,545円〜。町田で通いやすい価格帯です。' },
    ],
    price: '2ヶ月18回 179,685円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '下半身特化', '医師×トレーナー共同開発', '託児所費用補助', '完全個室'],
    description: '医師とトレーナーが共同開発した脚やせメソッド。町田エリアで太もも痩せ・ヒップアップに特化。完全個室・託児所費用補助あり。',
    access: 'JR「町田駅」徒歩5分',
    address: '東京都町田市（町田駅徒歩5分）',
    popularPlan: { name: '太ももダイエットプログラム', description: '医師×トレーナー共同開発の脚やせメソッド。75分×18回の集中プログラム。', price: '2ヶ月18回 179,685円〜（税込）' },
    options: ['託児所費用補助（最大1,000円/回）', 'ウェア・タオル無料レンタル', '食事指導付き', '分割払い対応'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['太もも痩せ', 'ヒップアップ', '産後ダイエット', '美脚'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'ロッカー', 'シャワー'] },
  },
  {
    name: 'Bodyke 町田店',
    rating: 4.5,
    reviewCount: 10,
    reviews: [
      { author: 'L.H', rating: 5, date: '1週間前', text: '食べて痩せるメソッドが最高。町田の飲食店も楽しみながらダイエット成功。' },
      { author: 'P.S', rating: 4, date: '2週間前', text: '糖質制限なしで続けやすい。トレーナーの食事アドバイスが実践的。' },
      { author: 'D.K', rating: 4, date: '1ヶ月前', text: '町田南口エリアでアクセス良好。完全個室で集中してトレーニングできます。' },
    ],
    price: '2ヶ月16回 215,600円〜（税込）',
    trial: '無料カウンセリング',
    features: ['食べて痩せる', '糖質制限なし', '完全個室', '町田駅近', '食事指導充実'],
    description: '「食べて痩せる」がコンセプト。糖質制限に頼らない独自メソッド。町田駅からアクセス良好で通いやすい。',
    access: 'JR「町田駅」徒歩5分',
    address: '東京都町田市（町田駅徒歩5分）',
    popularPlan: { name: 'スタンダードコース', description: '食べて痩せるメソッドによるマンツーマントレーニング＋食事指導。', price: '2ヶ月16回 215,600円〜（税込）' },
    options: ['糖質制限なしの食事指導', 'ウェアレンタル無料', '完全個室', '食事報告サポート'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性70% / 男性30%', purpose: ['ダイエット', 'ボディメイク', '食事改善', '健康管理'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'シャワー', 'ロッカー'] },
  },
]

const faqs = [
  { question: '町田で女性専用のパーソナルジムはどこがおすすめ？', answer: 'OUTLINE、リボーンマイセルフ、UNDEUX SUPERBODY LIFE、ビーコンセプトが町田で人気。生涯サポートならOUTLINE、女性トレーナー希望ならリボーンマイセルフがおすすめ。' },
  { question: '町田のパーソナルジムの料金相場は？', answer: '町田の2ヶ月コースは約18万〜22万円。月額制ならUNDEUX SUPERBODY LIFEの月額19,800円〜。都心部より安くパーソナルジムに通えるエリアです。' },
  { question: '町田駅から最も近いジムは？', answer: 'UNDEUX SUPERBODY LIFE町田スタジオが徒歩2分で最寄り。リボーンマイセルフは徒歩4分、ビーコンセプト・Bodykeは徒歩5分。' },
  { question: '子連れで通えるジムは？', answer: 'OUTLINE町田店はベビーサークル完備。ビーコンセプトは託児所費用補助あり。' },
  { question: '体験は無料？', answer: 'OUTLINE・リボーンマイセルフ・ビーコンセプト・Bodykeは無料カウンセリング。UNDEUX SUPERBODY LIFEは体験レッスンあり。' },
  { question: '月額制で安く通えるジムは？', answer: 'UNDEUX SUPERBODY LIFEは月額19,800円〜（月2回）から始められます。お試し感覚で気軽にスタートできる料金設定です。' },
  { question: '町田は相場より安いって本当？', answer: 'はい、町田は都心部と比べてパーソナルジムの料金が若干安い傾向があります。特に町田駅南口エリアは低価格で通えるジムが集まっています。' },
  { question: '食事指導が充実しているジムは？', answer: 'Bodykeは糖質制限なしの「食べて痩せる」メソッド。ビーコンセプトは医師監修の食事指導。リボーンマイセルフも食事指導が充実。' },
  { question: '小田急線と横浜線、どちらの改札が近い？', answer: 'ジムによって異なりますが、多くは小田急町田駅の方が近い傾向。JR横浜線町田駅からも徒歩圏内です。事前にアクセスを確認しましょう。' },
  { question: 'リバウンド防止のサポートは？', answer: 'OUTLINEの「生涯無料アフターサポート」が最も手厚い。卒業後もずっとサポートが続きます。' },
]

export default function MachidaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-rose-100 via-rose-50 to-purple-50 py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-rose-500 text-xs mb-2">更新日 2026年04月13日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">【2026最新】町田の女性専用パーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選！料金比較</h1></div></section>
        <section className="bg-white py-3 border-b border-rose-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-brand-light"><Link href="/" className="hover:text-rose-500 transition">ホーム</Link>{' > '}<span className="text-brand-muted">町田</span></nav></div></section>
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">こんにちは、G-PersonalGym編集部です。</p>
            <p className="text-brand-muted leading-relaxed mb-6">「町田で女性専用のパーソナルジムを探している」「都心より安く通えるジムが知りたい」という方のために、町田エリアでおすすめの女性向けパーソナルジム{gyms.length}選をまとめました。</p>
            <div className="bg-rose-50 border-l-4 border-rose-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-brand-muted">
                <li className="flex items-start"><span className="text-rose-400 mr-2">✓</span><span>町田で女性専用パーソナルジムを探している</span></li>
                <li className="flex items-start"><span className="text-rose-400 mr-2">✓</span><span>都心より安く通いたい</span></li>
                <li className="flex items-start"><span className="text-rose-400 mr-2">✓</span><span>月額制で気軽に始めたい</span></li>
                <li className="flex items-start"><span className="text-rose-400 mr-2">✓</span><span>料金を比較して選びたい</span></li>
                <li className="flex items-start"><span className="text-rose-400 mr-2">✓</span><span>子連れで通いたい</span></li>
              </ul>
            </div>
          </div>
        </section>
        <PriceComparisonTable gyms={gyms} areaName="町田" />
        <section className="py-16 bg-rose-50" id="gyms"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">町田のおすすめ女性向けパーソナルジム{gyms.length}選</h2><div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div></div></section>
        <section className="py-16 bg-white"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">目的別おすすめ</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8"><div className="border border-rose-200 rounded-xl p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-brand-text mb-4">コスパ重視</h3><ul className="space-y-2 text-sm"><li className="text-brand-muted">・ビーコンセプト（18回 179,685円〜）</li><li className="text-brand-muted">・OUTLINE（16回 184,800円〜）</li><li className="text-brand-muted">・UNDEUX LIFE（月額19,800円〜）</li></ul></div><div className="border border-rose-200 rounded-xl p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-brand-text mb-4">食事サポート重視</h3><ul className="space-y-2 text-sm"><li className="text-brand-muted">・Bodyke（食べて痩せるメソッド）</li><li className="text-brand-muted">・ビーコンセプト（医師監修指導）</li><li className="text-brand-muted">・リボーンマイセルフ（食事指導充実）</li></ul></div><div className="border border-rose-200 rounded-xl p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-brand-text mb-4">子連れ対応</h3><ul className="space-y-2 text-sm"><li className="text-brand-muted">・OUTLINE（ベビーサークル完備）</li><li className="text-brand-muted">・ビーコンセプト（託児所費用補助）</li></ul></div></div></div></section>
        <section className="py-16 bg-rose-50"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">町田の料金相場【2026年4月】</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-6"><div className="bg-white rounded-xl p-6 border border-rose-200"><h3 className="font-bold text-brand-text mb-3">2ヶ月集中コース</h3><p className="text-3xl font-bold text-rose-500 mb-2">18万〜22万円</p><p className="text-sm text-brand-muted">ビーコンセプト179,685円〜が最安。都心部より相場が低めのエリア。</p></div><div className="bg-white rounded-xl p-6 border border-rose-200"><h3 className="font-bold text-brand-text mb-3">月額制</h3><p className="text-3xl font-bold text-rose-500 mb-2">2万円〜/月</p><p className="text-sm text-brand-muted">UNDEUX LIFE 月額19,800円〜。町田は気軽に始められる価格帯。</p></div></div></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">町田で選ぶ際の注意点</h2><div className="space-y-6"><div className="bg-white rounded-xl p-6 border border-rose-200"><h3 className="text-lg font-bold text-brand-text mb-3">JR町田駅と小田急町田駅は離れている</h3><p className="text-brand-muted leading-relaxed">JR横浜線の町田駅と小田急線の町田駅は約400m離れています。通いたいジムがどちらの駅に近いか、事前に確認しましょう。多くのジムは小田急町田駅寄りに集中しています。</p></div><div className="bg-white rounded-xl p-6 border border-rose-200"><h3 className="text-lg font-bold text-brand-text mb-3">南口エリアは低価格帯のジムが多い</h3><p className="text-brand-muted leading-relaxed">町田駅南口エリアは北口に比べてテナント賃料が低い傾向があり、その分ジムの料金もリーズナブル。コスパ重視なら南口エリアのジムもチェックしましょう。</p></div></div></div></section>
        <section className="py-16 bg-rose-50"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">よくある質問</h2><div className="space-y-4">{faqs.map((faq, index) => (<div key={index} className="border border-rose-200 rounded-xl overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-rose-50 transition"><h3 className="font-bold text-brand-text pr-4 text-sm">Q{index + 1}. {faq.question}</h3><svg className="w-5 h-5 text-rose-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-5 pb-5 text-brand-muted leading-relaxed text-sm">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl font-bold text-brand-text mb-6 text-center">まとめ</h2><p className="text-brand-muted leading-relaxed mb-4">町田エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。</p><p className="text-brand-muted leading-relaxed mb-4">生涯サポートならOUTLINE、女性トレーナー希望ならリボーンマイセルフ、月額制ならUNDEUX SUPERBODY LIFE、脚やせならビーコンセプトがおすすめです。</p><p className="text-brand-muted leading-relaxed">まずは気になるジムの体験レッスンに行ってみてください。</p></div></section>
        <section className="py-16 bg-gradient-to-r from-rose-500 to-purple-500 text-white"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl font-bold mb-4">まずは無料カウンセリングから</h2><p className="text-white/80 mb-8">複数のジムを比較して、あなたに合うジムを見つけましょう。</p><Link href="/ranking/" className="inline-block bg-white text-rose-500 px-10 py-4 text-sm font-bold rounded-full hover:bg-rose-50 transition-all">おすすめランキングを見る</Link></div></section>
      </main>
      <RelatedAreas currentSlug="machida" />
      <SiteFooter />
    </>
  )
}
