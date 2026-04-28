import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { GymCard } from '@/components/GymCard'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { FAQSchema } from '@/components/FAQSchema'
import { RelatedAreas } from '@/components/RelatedAreas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '【2026最新】二子玉川の女性専用パーソナルジムおすすめ5選！料金比較',
  description: '【2026年4月最新】二子玉川のおすすめ女性専用パーソナルジム5選を徹底比較。UNDEUX SUPERBODY・ビーコンセプト・OUTLINEなど人気ジムの料金・口コミ・特徴を網羅。',
  keywords: '女性専用パーソナルジム,二子玉川,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'UNDEUX SUPERBODY 二子玉川スタジオ',
    rating: 4.8,
    reviewCount: 18,
    reviews: [
      { author: 'A.S', rating: 5, date: '2週間前', text: '二子玉川駅から徒歩3分。宅配食プランが便利で食事管理が楽。2ヶ月で-6kg達成できました。' },
      { author: 'M.K', rating: 5, date: '1ヶ月前', text: 'ニコタマのおしゃれな雰囲気のスタジオ。管理栄養士の毎食指導も選べるのが嬉しい。' },
      { author: 'Y.H', rating: 4, date: '3週間前', text: '高評価が多い人気店で安心。女性専用なのでリラックスしてトレーニングできます。' },
    ],
    price: '2ヶ月16回 220,000円〜（税込）',
    trial: '体験レッスン0円',
    features: ['女性専用', '駅徒歩3分', '宅配食無料', '管理栄養士指導', 'パウダールーム完備'],
    description: '二子玉川駅徒歩3分の女性専用パーソナルジム。糖質オフ宅配食プランと管理栄養士の毎食指導の2つから選択可能。女性ダイエットのプロ集団が在籍。',
    access: '東急「二子玉川駅」徒歩3分',
    address: '東京都世田谷区玉川（二子玉川駅徒歩3分）',
    popularPlan: { name: '2ヶ月集中コース', description: 'マンツーマントレーニング16回＋食事指導＋宅配食の総合サポート。', price: '2ヶ月16回 220,000円〜（税込）' },
    options: ['糖質オフ宅配食無料', '管理栄養士の毎食指導', 'シャワー・パウダールーム完備', '基礎化粧品完備'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', '脚痩せ', '産後ダイエット', 'ボディメイク'] },
    basicInfo: { hours: '9:00〜22:00', closed: '不定休', facilities: ['完全個室', 'シャワー', 'パウダールーム'] },
  },
  {
    name: 'ビーコンセプト 二子玉川店',
    rating: 4.7,
    reviewCount: 15,
    reviews: [
      { author: 'S.N', rating: 5, date: '2週間前', text: '脚やせ特化で太もも-5cm！ニコタマでショッピングついでに通えるのも便利。' },
      { author: 'H.T', rating: 5, date: '1ヶ月前', text: '医師監修のメソッドで安心。完全個室で集中できます。分割払いで始めやすかった。' },
      { author: 'A.K', rating: 4, date: '3週間前', text: '産後の体型戻しに通いました。託児所費用の補助があるのが本当にありがたい。' },
    ],
    price: '2ヶ月18回 179,685円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '下半身特化', '医師×トレーナー共同開発', '託児所費用補助', '完全個室'],
    description: '医師とトレーナーが共同開発した脚やせメソッド。二子玉川エリアで下半身痩せに特化。託児所費用補助で産後ママにも対応。月々5,545円〜の分割払い可。',
    access: '東急「二子玉川駅」徒歩5分',
    address: '東京都世田谷区玉川（二子玉川駅徒歩5分）',
    popularPlan: { name: '太ももダイエットプログラム', description: '医師×トレーナー共同開発の脚やせメソッド。75分×18回の集中プログラム。', price: '2ヶ月18回 179,685円〜（税込）' },
    options: ['託児所費用補助（最大1,000円/回）', 'ウェア・タオル無料レンタル', '食事指導付き', '分割払い対応'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['太もも痩せ', 'ヒップアップ', '産後ダイエット', '美脚'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'ロッカー', 'シャワー'] },
  },
  {
    name: 'OUTLINE 二子玉川店',
    rating: 4.6,
    reviewCount: 12,
    reviews: [
      { author: 'K.M', rating: 5, date: '1週間前', text: '生涯サポート付きで安心。ベビーサークル完備なので子連れでも大丈夫。' },
      { author: 'R.K', rating: 5, date: '2週間前', text: '女性専用マシンでのトレーニングが効率的。ニコタマの落ち着いた雰囲気も良い。' },
      { author: 'N.S', rating: 4, date: '1ヶ月前', text: '卒業後もずっとサポートが受けられるのが決め手。料金もリーズナブルで満足です。' },
    ],
    price: '16回 184,800円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '完全個室', '生涯サポート無料', 'ベビーサークル完備', 'よもぎ蒸し'],
    description: '業界初の生涯無料アフターサポート。完全個室・女性専用マシン完備。ベビーサークルもあり子連れでも安心。二子玉川の住みやすい環境でトレーニング。',
    access: '東急「二子玉川駅」徒歩5分',
    address: '東京都世田谷区玉川（二子玉川駅徒歩5分）',
    popularPlan: { name: '16回コース', description: '完全個室マンツーマントレーニング。卒業後も生涯無料でアフターサポート。', price: '16回 184,800円〜（税込）' },
    options: ['生涯無料アフターサポート', 'ベビーサークル完備', 'よもぎ蒸し', '高級アミノ酸提供', 'ウェアレンタル無料'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '産後ダイエット', 'リバウンド防止'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'ベビーサークル', '女性専用マシン'] },
  },
  {
    name: 'リボーンマイセルフ 二子玉川店',
    rating: 4.6,
    reviewCount: 11,
    reviews: [
      { author: 'T.N', rating: 5, date: '2週間前', text: 'トレーナーが全員女性なので相談しやすい。産後ダイエットで-4kg達成しました。' },
      { author: 'M.H', rating: 4, date: '1ヶ月前', text: '10年以上の実績で安心。二子玉川の子育てママ仲間から紹介されて入会しました。' },
      { author: 'E.S', rating: 5, date: '3週間前', text: '食事指導が具体的で分かりやすい。ブライダルコースで理想の体型に近づけました。' },
    ],
    price: '入会金38,000円＋コース料金',
    trial: '無料カウンセリング',
    features: ['女性専用', '女性トレーナーのみ', '10年以上の実績', '産後ダイエット', 'ブライダルコース'],
    description: '日本初の女性専用ダイエットジム。トレーナーも全員女性。二子玉川の子育てファミリーに人気のエリアで、産後ダイエットコースも充実。',
    access: '東急「二子玉川駅」徒歩5分',
    address: '東京都世田谷区玉川（二子玉川駅徒歩5分）',
    popularPlan: { name: 'ダイエットコース', description: '女性トレーナーによるマンツーマン指導。産後ダイエットにも対応。', price: '入会金38,000円＋コース料金' },
    options: ['ウェアレンタル無料', '産後ダイエットコース', 'ブライダルダイエットコース', '部分痩せコース'],
    userProfile: { ageRange: '20代〜50代', genderRatio: '女性100%', purpose: ['ダイエット', '産後ダイエット', 'ブライダル', '部分痩せ'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['ロッカー', 'ウェアレンタル'] },
  },
  {
    name: 'Bodyke 二子玉川店',
    rating: 4.5,
    reviewCount: 10,
    reviews: [
      { author: 'L.K', rating: 5, date: '1週間前', text: '食べて痩せるメソッドで-6kg。ニコタマのレストランも楽しみながらダイエットできました。' },
      { author: 'P.M', rating: 4, date: '2週間前', text: '糖質制限なしが続けやすい。ライズの買い物帰りに通えて便利です。' },
      { author: 'D.S', rating: 4, date: '1ヶ月前', text: 'トレーナーの知識が豊富で信頼できる。食事の相談にも気軽に乗ってくれます。' },
    ],
    price: '2ヶ月16回 215,600円〜（税込）',
    trial: '無料カウンセリング',
    features: ['食べて痩せる', '糖質制限なし', '完全個室', '二子玉川駅近', '食事指導充実'],
    description: '「食べて痩せる」がコンセプト。二子玉川ライズでのショッピングついでに通える好立地。糖質制限に頼らない独自メソッド。',
    access: '東急「二子玉川駅」徒歩5分',
    address: '東京都世田谷区玉川（二子玉川駅徒歩5分）',
    popularPlan: { name: 'スタンダードコース', description: '食べて痩せるメソッドによるマンツーマントレーニング＋食事指導。', price: '2ヶ月16回 215,600円〜（税込）' },
    options: ['糖質制限なしの食事指導', 'ウェアレンタル無料', '完全個室', '食事報告サポート'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性70% / 男性30%', purpose: ['ダイエット', 'ボディメイク', '食事改善', '健康管理'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'シャワー', 'ロッカー'] },
  },
]

const faqs = [
  { question: '二子玉川で女性専用のパーソナルジムはどこがおすすめ？', answer: 'UNDEUX SUPERBODY、ビーコンセプト、OUTLINE、リボーンマイセルフが人気。食事管理ならUNDEUX、下半身痩せならビーコンセプト、生涯サポートならOUTLINEがおすすめ。' },
  { question: '二子玉川のパーソナルジムの料金相場は？', answer: '2ヶ月コースは約18万〜22万円。ビーコンセプトが179,685円〜と最安。都心部と同等かやや割安な傾向があります。' },
  { question: '二子玉川駅から最も近いジムは？', answer: 'UNDEUX SUPERBODYが徒歩3分で最も近い。ビーコンセプト・OUTLINE・リボーンマイセルフは徒歩5分程度です。' },
  { question: '子連れで通えるジムは？', answer: 'OUTLINEはベビーサークル完備。ビーコンセプトは託児所費用補助あり。二子玉川は子育てファミリーが多いエリアで、子連れ対応のジムが揃っています。' },
  { question: '体験は無料？', answer: 'UNDEUX SUPERBODYは体験レッスン0円。ビーコンセプト・OUTLINE・リボーンマイセルフ・Bodykeは無料カウンセリング。' },
  { question: '初心者でも大丈夫？', answer: 'はい、全ジムで初心者歓迎。マンツーマン指導なので運動経験がなくても安心です。' },
  { question: '二子玉川ライズでのショッピングと両立できる？', answer: 'ほとんどのジムが二子玉川駅から徒歩5分圏内。ショッピング前後にトレーニングを組み込めます。ウェアレンタルありのジムなら手ぶらでOK。' },
  { question: '産後ダイエットに対応しているジムは？', answer: 'リボーンマイセルフは産後ダイエットコースあり。ビーコンセプトは託児所費用補助。OUTLINEはベビーサークル完備。二子玉川は産後ママ向けサービスが充実。' },
  { question: '食事指導が充実しているジムは？', answer: 'UNDEUX SUPERBODYは宅配食と管理栄養士の毎食指導の2プランから選択可。Bodykeは糖質制限なしの「食べて痩せる」メソッド。' },
  { question: 'リバウンド防止のサポートは？', answer: 'OUTLINEの「生涯無料アフターサポート」が最も手厚い。卒業後もずっとサポートが受けられます。' },
]

export default function FutakotamagawaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-rose-100 via-rose-50 to-purple-50 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-rose-500 text-xs mb-2">更新日 2026年04月13日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              【2026最新】二子玉川の女性専用パーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選！料金比較
            </h1>
          </div>
        </section>
        <section className="bg-white py-3 border-b border-rose-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light">
              <Link href="/" className="hover:text-rose-500 transition">ホーム</Link>{' > '}
              <span className="text-brand-muted">二子玉川</span>
            </nav>
          </div>
        </section>
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">こんにちは、G-PersonalGym編集部です。</p>
            <p className="text-brand-muted leading-relaxed mb-6">「二子玉川で女性専用のパーソナルジムを探している」「ニコタマの買い物ついでに通いたい」という方のために、二子玉川エリアでおすすめの女性向けパーソナルジム{gyms.length}選をまとめました。</p>
            <div className="bg-rose-50 border-l-4 border-rose-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-brand-muted">
                <li className="flex items-start"><span className="text-rose-400 mr-2">✓</span><span>二子玉川で女性専用パーソナルジムを探している</span></li>
                <li className="flex items-start"><span className="text-rose-400 mr-2">✓</span><span>産後ダイエットしたい</span></li>
                <li className="flex items-start"><span className="text-rose-400 mr-2">✓</span><span>子連れで通いたい</span></li>
                <li className="flex items-start"><span className="text-rose-400 mr-2">✓</span><span>料金を比較して選びたい</span></li>
                <li className="flex items-start"><span className="text-rose-400 mr-2">✓</span><span>ショッピングついでに通いたい</span></li>
              </ul>
            </div>
          </div>
        </section>
        <PriceComparisonTable gyms={gyms} areaName="二子玉川" />
        <section className="py-16 bg-rose-50" id="gyms">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">二子玉川のおすすめ女性向けパーソナルジム{gyms.length}選</h2>
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
                <h3 className="text-xl font-bold text-brand-text mb-4">産後ママ向け</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・リボーンマイセルフ（産後コース）</li><li className="text-brand-muted">・OUTLINE（ベビーサークル完備）</li><li className="text-brand-muted">・ビーコンセプト（託児所費用補助）</li></ul>
              </div>
              <div className="border border-rose-200 rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">食事サポート重視</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・UNDEUX SUPERBODY（宅配食無料）</li><li className="text-brand-muted">・Bodyke（食べて痩せるメソッド）</li><li className="text-brand-muted">・ビーコンセプト（医師監修指導）</li></ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-rose-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">二子玉川の料金相場【2026年4月】</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-rose-200">
                <h3 className="font-bold text-brand-text mb-3">2ヶ月集中コース</h3>
                <p className="text-3xl font-bold text-rose-500 mb-2">18万〜22万円</p>
                <p className="text-sm text-brand-muted">ビーコンセプト179,685円〜が最安。世田谷エリアの中では標準的な価格帯。</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-rose-200">
                <h3 className="font-bold text-brand-text mb-3">入会金</h3>
                <p className="text-3xl font-bold text-rose-500 mb-2">0〜5万円</p>
                <p className="text-sm text-brand-muted">キャンペーンで入会金無料のジムも。体験時に要確認。</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">二子玉川で選ぶ際の注意点</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-rose-200">
                <h3 className="text-lg font-bold text-brand-text mb-3">ファミリー層が多く週末は混雑しやすい</h3>
                <p className="text-brand-muted leading-relaxed">二子玉川は子育てファミリーに人気のエリア。週末は二子玉川ライズ周辺が混雑するため、平日に通えるなら予約が取りやすい。ジムの予約状況は事前に確認を。</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-rose-200">
                <h3 className="text-lg font-bold text-brand-text mb-3">産後ダイエット需要が高いエリア</h3>
                <p className="text-brand-muted leading-relaxed">二子玉川は30〜40代の子育てママが多いエリア。そのため産後ダイエットに対応したジムが充実しています。キッズスペースや託児所費用補助の有無をチェックしましょう。</p>
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
            <p className="text-brand-muted leading-relaxed mb-4">二子玉川エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。</p>
            <p className="text-brand-muted leading-relaxed mb-4">食事管理重視ならUNDEUX SUPERBODY、下半身痩せならビーコンセプト、生涯サポートならOUTLINE、産後ダイエットならリボーンマイセルフがおすすめです。</p>
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
      <RelatedAreas currentSlug="futakotamagawa" />
      <SiteFooter />
    </>
  )
}
