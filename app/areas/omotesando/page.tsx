import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { GymCard } from '@/components/GymCard'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { FAQSchema } from '@/components/FAQSchema'
import { RelatedAreas } from '@/components/RelatedAreas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '【2026最新】表参道の女性専用パーソナルジムおすすめ6選！料金比較',
  description: '【2026年4月最新】表参道・青山のおすすめ女性専用パーソナルジム6選を徹底比較。UNDEUX SUPERBODY・OUTLINE・ビーコンセプトなど人気ジムの料金・口コミ・特徴を網羅。',
  keywords: '女性専用パーソナルジム,表参道,青山,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'UNDEUX SUPERBODY 青山・表参道スタジオ',
    rating: 4.8,
    reviewCount: 21,
    reviews: [
      { author: 'A.H', rating: 5, date: '2週間前', text: '表参道駅徒歩1分で通いやすさ抜群。宅配食と管理栄養士の毎食指導が選べるのが便利。2ヶ月で-7kg。' },
      { author: 'M.T', rating: 5, date: '1ヶ月前', text: '表参道のおしゃれな雰囲気のスタジオ。チーム担当制でトレーナーと栄養士が連携してサポートしてくれます。' },
      { author: 'Y.S', rating: 4, date: '3週間前', text: 'パウダールーム完備で仕事帰りにそのまま表参道でショッピングできるのが嬉しい。' },
    ],
    price: '2ヶ月16回 220,000円〜（税込）',
    trial: '体験レッスン0円',
    features: ['女性専用', '駅徒歩1分', '宅配食無料', 'チーム担当制', 'パウダールーム完備'],
    description: '表参道駅徒歩1分の最高立地。トレーナーと管理栄養士のチーム担当制で総合的にサポート。宅配食と管理栄養士による毎食指導の2つのプランから選択可能。',
    access: '東京メトロ「表参道駅」徒歩1分',
    address: '東京都港区南青山（表参道駅徒歩1分）',
    popularPlan: { name: '2ヶ月集中コース', description: 'マンツーマントレーニング16回＋食事指導＋宅配食の総合サポートプラン。', price: '2ヶ月16回 220,000円〜（税込）' },
    options: ['糖質オフ宅配食無料', '管理栄養士の毎食指導', 'シャワー・パウダールーム完備', '基礎化粧品完備'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', '脚痩せ', 'ボディメイク', '美容'] },
    basicInfo: { hours: '9:00〜22:00', closed: '不定休', facilities: ['完全個室', 'シャワー', 'パウダールーム', '基礎化粧品'] },
  },
  {
    name: 'OUTLINE 表参道店',
    rating: 4.7,
    reviewCount: 14,
    reviews: [
      { author: 'K.A', rating: 5, date: '1週間前', text: '表参道という立地で生涯サポート付き。コスパが良いと思います。完全個室で落ち着ける。' },
      { author: 'R.T', rating: 5, date: '2週間前', text: '女性専用マシンでのトレーニングが効率的。よもぎ蒸しもリラックスできて気に入っています。' },
      { author: 'N.K', rating: 4, date: '1ヶ月前', text: '卒業後もずっとサポートが受けられるのが決め手でした。料金も表参道にしてはリーズナブル。' },
    ],
    price: '16回 184,800円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '完全個室', '生涯サポート無料', 'よもぎ蒸し', '表参道エリア'],
    description: '業界初の生涯無料アフターサポート。完全個室・女性専用マシン完備。表参道の洗練された環境で、女性に特化したトレーニングを提供。',
    access: '東京メトロ「表参道駅」徒歩5分',
    address: '東京都港区南青山（表参道駅徒歩5分）',
    popularPlan: { name: '16回コース', description: '完全個室マンツーマントレーニング。卒業後も生涯無料でアフターサポート。', price: '16回 184,800円〜（税込）' },
    options: ['生涯無料アフターサポート', 'ベビーサークル完備', 'よもぎ蒸し', '高級アミノ酸提供', 'ウェアレンタル無料'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', 'リバウンド防止', '美容'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'ベビーサークル', '女性専用マシン'] },
  },
  {
    name: 'ビーコンセプト 表参道店',
    rating: 4.6,
    reviewCount: 16,
    reviews: [
      { author: 'S.K', rating: 5, date: '2週間前', text: '表参道で脚やせ特化のジムは嬉しい。太もも-5cm達成でスキニーが履けるように！' },
      { author: 'H.M', rating: 5, date: '1ヶ月前', text: '医師監修のメソッドで安心。分割払いで月々5,545円〜始められるのも魅力的。' },
      { author: 'A.S', rating: 4, date: '3週間前', text: '完全個室で表参道の人目を気にせずトレーニングできます。結果もしっかり出ました。' },
    ],
    price: '2ヶ月18回 179,685円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '下半身特化', '医師×トレーナー共同開発', '完全個室', '表参道駅近'],
    description: '医師とトレーナーが共同開発した脚やせメソッド。表参道で美脚を目指す女性に人気。完全個室で人目を気にせずトレーニング可能。',
    access: '東京メトロ「表参道駅」徒歩4分',
    address: '東京都港区南青山（表参道駅徒歩4分）',
    popularPlan: { name: '太ももダイエットプログラム', description: '医師×トレーナー共同開発の脚やせメソッド。75分×18回の集中プログラム。', price: '2ヶ月18回 179,685円〜（税込）' },
    options: ['託児所費用補助（最大1,000円/回）', 'ウェア・タオル無料レンタル', '食事指導付き', '分割払い対応'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['太もも痩せ', 'ヒップアップ', '美脚', 'ボディメイク'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'ロッカー', 'シャワー'] },
  },
  {
    name: 'AGLAIA（アグライア）表参道',
    rating: 4.6,
    reviewCount: 10,
    reviews: [
      { author: 'C.N', rating: 5, date: '1週間前', text: '美尻特化のトレーニングが魅力。グルーツビルダーという専用マシンで効率的にヒップアップできました。' },
      { author: 'K.H', rating: 5, date: '2週間前', text: 'トレーニング未経験でしたが丁寧に教えてもらえて安心。姿勢改善も実感しています。' },
      { author: 'J.S', rating: 4, date: '1ヶ月前', text: '表参道のおしゃれな雰囲気のジム。会員の80%が未経験者なので安心して始められました。' },
    ],
    price: '月4回 52,800円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '美尻特化', '姿勢改善', '未経験者80%', 'オリジナルメソッド'],
    description: '表参道の女性専用パーソナルジム。ゼロから美尻を作るオリジナルメソッドが特徴。会員の80%がトレーニング未経験者で、初心者でも安心。姿勢改善にも定評あり。',
    access: '東京メトロ「表参道駅」徒歩6分',
    address: '東京都港区南青山（表参道駅徒歩6分）',
    popularPlan: { name: '美尻メイクコース', description: 'オリジナルメソッドによる美尻・姿勢改善特化トレーニング。', price: '月4回 52,800円〜（税込）' },
    options: ['美尻専用マシン完備', '姿勢改善プログラム', '食事アドバイス', 'ウェアレンタル'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['美尻', 'ヒップアップ', '姿勢改善', 'ボディメイク'] },
    basicInfo: { hours: '10:00〜21:00', closed: '不定休', facilities: ['完全個室', '美尻専用マシン', 'ロッカー'] },
  },
  {
    name: 'MMM（トリプルエム）表参道',
    rating: 4.5,
    reviewCount: 9,
    reviews: [
      { author: 'L.M', rating: 5, date: '2週間前', text: 'バストアッププランが他にない特徴。バストを維持しつつ脂肪だけ落とせるのが画期的。' },
      { author: 'P.K', rating: 4, date: '1ヶ月前', text: '表参道駅徒歩1分の好立地。一人ひとりに合わせたオーダーメイドダイエットが魅力。' },
      { author: 'D.S', rating: 4, date: '3週間前', text: '女性専用で安心。表参道の洗練された空間でモチベーションが上がります。' },
    ],
    price: '2ヶ月16回 220,000円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', 'バストアッププラン', '駅徒歩1分', 'オーダーメイド', '表参道'],
    description: '表参道駅徒歩1分の女性専用パーソナルジム。バストアッププランならバストを維持しつつ余分な脂肪のみを落とすことが可能。一人ひとりに合わせたオーダーメイドダイエット。',
    access: '東京メトロ「表参道駅」徒歩1分',
    address: '東京都港区南青山（表参道駅徒歩1分）',
    popularPlan: { name: 'バストアッププラン', description: 'バストを維持しつつ余分な脂肪を落とすオーダーメイドプラン。', price: '2ヶ月16回 220,000円〜（税込）' },
    options: ['バストアッププラン', 'オーダーメイドメニュー', '食事指導', 'ウェアレンタル'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'バストアップ', 'ボディメイク', '部分痩せ'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'ロッカー'] },
  },
  {
    name: 'Bodyke 表参道店',
    rating: 4.5,
    reviewCount: 13,
    reviews: [
      { author: 'F.T', rating: 5, date: '1週間前', text: '食べて痩せるメソッドで-5kg。表参道のおしゃれなレストランでの食事も楽しめました。' },
      { author: 'G.M', rating: 4, date: '2週間前', text: '糖質制限なしで続けやすい。トレーナーが食事の相談にも乗ってくれて心強い。' },
      { author: 'B.K', rating: 4, date: '1ヶ月前', text: '表参道のジムは高いイメージでしたが、Bodykeは納得の料金で質が高いです。' },
    ],
    price: '2ヶ月16回 215,600円〜（税込）',
    trial: '無料カウンセリング',
    features: ['食べて痩せる', '糖質制限なし', '完全個室', '表参道駅近', '食事指導充実'],
    description: '「食べて痩せる」をコンセプトにしたパーソナルジム。糖質制限なしの独自メソッドで食事を楽しみながらボディメイク。表参道エリアでアクセス良好。',
    access: '東京メトロ「表参道駅」徒歩5分',
    address: '東京都港区南青山（表参道駅徒歩5分）',
    popularPlan: { name: 'スタンダードコース', description: '食べて痩せるメソッドによるマンツーマントレーニング＋食事指導。', price: '2ヶ月16回 215,600円〜（税込）' },
    options: ['糖質制限なしの食事指導', 'ウェアレンタル無料', '完全個室', '食事報告サポート'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性70% / 男性30%', purpose: ['ダイエット', 'ボディメイク', '食事改善', '健康管理'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'シャワー', 'ロッカー'] },
  },
]

const faqs = [
  { question: '表参道で女性専用のパーソナルジムはどこがおすすめ？', answer: 'UNDEUX SUPERBODY、OUTLINE、ビーコンセプト、AGLAIA、MMMが表参道で人気の女性専用パーソナルジムです。食事管理重視ならUNDEUX、美尻特化ならAGLAIA、バストアップならMMMがおすすめ。' },
  { question: '表参道のパーソナルジムの料金相場は？', answer: '表参道の女性向けパーソナルジムの2ヶ月コースは約18万〜22万円。ビーコンセプトが179,685円〜と最もリーズナブル。表参道は高級エリアですが、郊外と大きな差はありません。' },
  { question: '表参道駅から最も近いジムは？', answer: 'UNDEUX SUPERBODYとMMM（トリプルエム）が表参道駅徒歩1分で最も近い。ビーコンセプトは徒歩4分です。' },
  { question: '美尻・ヒップアップに特化したジムは？', answer: 'AGLAIA（アグライア）は美尻専用マシン「グルーツビルダー」を完備し、ゼロから美尻を作るオリジナルメソッドを提供。ビーコンセプトも下半身特化でヒップアップに効果的。' },
  { question: '体験は無料？', answer: 'UNDEUX SUPERBODYは体験レッスン0円。OUTLINE、ビーコンセプト、AGLAIA、MMM、Bodykeは無料カウンセリングを実施しています。' },
  { question: '初心者でも大丈夫？', answer: 'はい、全ジムで初心者歓迎。AGLAIAは会員の80%がトレーニング未経験者で、特に初心者フレンドリーです。' },
  { question: '表参道と青山のジムは同じエリア？', answer: '表参道駅は港区南青山に位置しており、「表参道」「青山」は基本的に同じエリアです。ジムの住所は「南青山」が多いですが、いずれも表参道駅から徒歩圏内です。' },
  { question: 'バストアップしながらダイエットできるジムは？', answer: 'MMM（トリプルエム）の「バストアッププラン」は、バストを維持しつつ余分な脂肪だけを落とすことが可能。他にはない独自のプランです。' },
  { question: '食事指導が充実しているジムは？', answer: 'UNDEUX SUPERBODYは宅配食と管理栄養士の毎食指導の2プランから選択可能。Bodykeは糖質制限なしの「食べて痩せる」メソッドが好評。' },
  { question: 'リバウンド防止のサポートは？', answer: 'OUTLINEは「生涯無料アフターサポート」で卒業後もずっとサポート。表参道エリアで最も手厚いリバウンド対策です。' },
]

export default function OmotesandoPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-rose-100 via-rose-50 to-purple-50 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-rose-500 text-xs mb-2">更新日 2026年04月13日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              【2026最新】表参道の女性専用パーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選！料金比較
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-rose-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light">
              <Link href="/" className="hover:text-rose-500 transition">ホーム</Link>{' > '}
              <span className="text-brand-muted">表参道</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">こんにちは、G-PersonalGym編集部です。</p>
            <p className="text-brand-muted leading-relaxed mb-6">「表参道・青山エリアで女性専用のパーソナルジムを探している」「おしゃれな街で美ボディを手に入れたい」という方のために、表参道エリアでおすすめの女性向けパーソナルジム{gyms.length}選をまとめました。</p>
            <div className="bg-rose-50 border-l-4 border-rose-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-brand-muted">
                <li className="flex items-start"><span className="text-rose-400 mr-2">✓</span><span>表参道で女性専用パーソナルジムを探している</span></li>
                <li className="flex items-start"><span className="text-rose-400 mr-2">✓</span><span>美尻・美脚を目指したい</span></li>
                <li className="flex items-start"><span className="text-rose-400 mr-2">✓</span><span>料金を比較して選びたい</span></li>
                <li className="flex items-start"><span className="text-rose-400 mr-2">✓</span><span>駅近のジムが良い</span></li>
                <li className="flex items-start"><span className="text-rose-400 mr-2">✓</span><span>食事指導も受けたい</span></li>
              </ul>
            </div>
          </div>
        </section>

        <PriceComparisonTable gyms={gyms} areaName="表参道" />

        <section className="py-16 bg-rose-50" id="gyms">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">表参道のおすすめ女性向けパーソナルジム{gyms.length}選</h2>
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
                <h3 className="text-xl font-bold text-brand-text mb-4">美尻・美脚特化</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・AGLAIA（美尻専用マシン）</li><li className="text-brand-muted">・ビーコンセプト（脚やせメソッド）</li><li className="text-brand-muted">・MMM（バストアッププラン）</li></ul>
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
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">表参道の料金相場【2026年4月】</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-rose-200">
                <h3 className="font-bold text-brand-text mb-3">2ヶ月集中コース</h3>
                <p className="text-3xl font-bold text-rose-500 mb-2">18万〜22万円</p>
                <p className="text-sm text-brand-muted">ビーコンセプト179,685円〜が最安。表参道は高級イメージですが料金は都内平均並み。</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-rose-200">
                <h3 className="font-bold text-brand-text mb-3">月額制</h3>
                <p className="text-3xl font-bold text-rose-500 mb-2">5.3万円〜/月</p>
                <p className="text-sm text-brand-muted">AGLAIA 月4回52,800円〜。部位特化型のジムは月額制が多い傾向。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">表参道で選ぶ際の注意点</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-rose-200">
                <h3 className="text-lg font-bold text-brand-text mb-3">高級エリアだが料金は都内平均並み</h3>
                <p className="text-brand-muted leading-relaxed">表参道・青山は高級イメージですが、パーソナルジムの料金は渋谷・新宿とほぼ同等。エリアイメージで敬遠せず、まずは無料カウンセリングに行ってみましょう。</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-rose-200">
                <h3 className="text-lg font-bold text-brand-text mb-3">美容・ボディメイク特化のジムが多い</h3>
                <p className="text-brand-muted leading-relaxed">表参道エリアは美尻・美脚・バストアップなど美容特化のジムが多いのが特徴。ダイエットだけでなくボディラインの美しさを追求したい方に最適です。</p>
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
            <p className="text-brand-muted leading-relaxed mb-4">表参道エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。</p>
            <p className="text-brand-muted leading-relaxed mb-4">食事管理重視ならUNDEUX SUPERBODY、コスパと生涯サポートならOUTLINE、美脚ならビーコンセプト、美尻ならAGLAIAがおすすめです。</p>
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
      <RelatedAreas currentSlug="omotesando" />
      <SiteFooter />
    </>
  )
}
