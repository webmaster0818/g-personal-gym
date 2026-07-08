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
  alternates: { canonical: '/areas/jiyugaoka/' },
  title: '【2026年6月最新】自由が丘の女性専用パーソナルジムおすすめ6選！料金比較',
  description: '【2026年4月最新】自由が丘のおすすめ女性専用パーソナルジム6選を徹底比較。UNDEUX SUPERBODY・OUTLINE・リボーンマイセルフなど人気ジムの料金・口コミ・特徴を網羅。',
  keywords: '女性専用パーソナルジム,自由が丘,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'UNDEUX SUPERBODY 自由が丘スタジオ',
    officialUrl: 'https://www.diet-undeux.jp/',
    rating: 4.8,
    reviewCount: 20,
    reviews: [
      { author: 'A.M', rating: 5, date: '2週間前', text: '自由が丘駅から徒歩1分！通いやすさ抜群。宅配食が美味しくて2ヶ月で-6kg達成できました。' },
      { author: 'M.N', rating: 5, date: '1ヶ月前', text: '集中コース終了後96%が目標体重達成というだけあって、結果が出ます。管理栄養士監修の食事指導も的確。' },
      { author: 'Y.K', rating: 4, date: '3週間前', text: 'おしゃれな自由が丘の雰囲気に合った綺麗なスタジオ。手ぶらで通えるのが嬉しい。' },
    ],
    price: '2ヶ月16回 220,000円〜（税込）',
    trial: '体験レッスン0円',
    features: ['女性専用', '駅徒歩1分', '宅配食無料', '管理栄養士監修', '目標達成率96%'],
    description: '自由が丘駅徒歩1分の好立地。集中コース終了後の目標体重達成率96%を誇る女性専用パーソナルジム。管理栄養士監修の糖質オフ宅配食20食が追加料金なしで付く。',
    access: '東急「自由が丘駅」徒歩1分',
    address: '東京都目黒区自由が丘（自由が丘駅徒歩1分）',
    popularPlan: { name: '2ヶ月集中コース', description: 'マンツーマントレーニング16回＋食事指導＋宅配食の総合サポートプラン。', price: '2ヶ月16回 220,000円〜（税込）' },
    options: ['糖質オフ宅配食20食無料', 'ウェア・タオルレンタル無料', 'シャワー・パウダールーム完備', '基礎化粧品完備'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', '脚痩せ', '産後ダイエット', 'ボディメイク'] },
    basicInfo: { hours: '9:00〜22:00', closed: '不定休', facilities: ['完全個室', 'シャワー', 'パウダールーム', '基礎化粧品'] },
  },
  {
    name: 'リボーンマイセルフ 自由が丘店',
    officialUrl: 'https://reborn-myself.com/',
    rating: 4.7,
    reviewCount: 15,
    reviews: [
      { author: 'T.S', rating: 5, date: '1週間前', text: 'トレーナーもお客さんも全員女性。キッズスペース併設で産後ママでも安心して通えます。' },
      { author: 'M.H', rating: 5, date: '2週間前', text: '自由が丘駅徒歩4分で通いやすい。女性特有の悩みに寄り添った指導が魅力です。' },
      { author: 'E.K', rating: 4, date: '1ヶ月前', text: '10年以上の実績でノウハウが豊富。食事指導も具体的で分かりやすかったです。' },
    ],
    price: '入会金38,000円＋コース料金',
    trial: '無料カウンセリング',
    features: ['女性専用', '女性トレーナーのみ', 'キッズスペース', '産後ダイエット', '自由が丘駅近'],
    description: '日本初の女性専用ダイエットジム。トレーナーも全員女性で、キッズスペース（託児所）併設。産後ママも安心して通える環境。自由が丘駅から徒歩4分。',
    access: '東急「自由が丘駅」徒歩4分',
    address: '東京都目黒区自由が丘（自由が丘駅徒歩4分）',
    popularPlan: { name: 'ダイエットコース', description: '女性トレーナーによるマンツーマン指導。産後ダイエットコースも用意。', price: '入会金38,000円＋コース料金' },
    options: ['ウェアレンタル無料', 'キッズスペース完備', '産後ダイエットコース', 'ブライダルダイエットコース'],
    userProfile: { ageRange: '20代〜50代', genderRatio: '女性100%', purpose: ['ダイエット', '産後ダイエット', 'ブライダル', '部分痩せ'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['ロッカー', 'キッズスペース', 'ウェアレンタル'] },
  },
  {
    name: 'OUTLINE 自由が丘店',
    officialUrl: 'https://www.outline-gym.com/',
    rating: 4.7,
    reviewCount: 13,
    reviews: [
      { author: 'K.Y', rating: 5, date: '2週間前', text: '生涯アフターサポートが決め手。卒業後もLINEで相談できるのが心強いです。' },
      { author: 'R.S', rating: 5, date: '1ヶ月前', text: '完全個室でベビーサークルもあり、子連れで安心。女性専用マシンが効果的です。' },
      { author: 'N.T', rating: 4, date: '3週間前', text: '自由が丘のおしゃれな雰囲気に合った清潔感のあるジム。料金もリーズナブル。' },
    ],
    price: '16回 184,800円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '完全個室', '生涯サポート無料', 'ベビーサークル完備', '女性特化マシン'],
    description: '業界初の生涯無料アフターサポートが最大の特徴。完全個室・女性専用マシン完備。ベビーサークルもあり子連れでも安心。自由が丘の落ち着いた環境でトレーニング。',
    access: '東急「自由が丘駅」徒歩5分',
    address: '東京都目黒区自由が丘（自由が丘駅徒歩5分）',
    popularPlan: { name: '16回コース', description: '完全個室マンツーマントレーニング。卒業後も生涯無料でアフターサポート。', price: '16回 184,800円〜（税込）' },
    options: ['生涯無料アフターサポート', 'ベビーサークル完備', 'よもぎ蒸し', '高級アミノ酸提供', 'ウェアレンタル無料'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '産後ダイエット', 'リバウンド防止'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'ベビーサークル', '女性専用マシン'] },
  },
  {
    name: 'ビーコンセプト 自由が丘店',
    officialUrl: 'https://b-concept.tokyo/',
    rating: 4.6,
    reviewCount: 14,
    reviews: [
      { author: 'S.M', rating: 5, date: '2週間前', text: '太もも-4cm、ヒップアップも実感。下半身に悩んでいたのが嘘みたいです。' },
      { author: 'H.K', rating: 5, date: '1ヶ月前', text: '医師とトレーナーの共同開発メソッドが信頼できる。月々5,545円〜の分割払いで始めやすい。' },
      { author: 'A.T', rating: 4, date: '3週間前', text: '自由が丘の街並みを楽しみながら通えるのが良い。完全個室で集中できます。' },
    ],
    price: '2ヶ月18回 179,685円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '下半身特化', '医師×トレーナー共同開発', '託児所費用補助', '完全個室'],
    description: '医師とトレーナーが共同開発した脚やせメソッドで人気。太もも痩せ・ヒップアップに特化。月々5,545円〜の分割払い対応。託児所費用補助もあり。',
    access: '東急「自由が丘駅」徒歩5分',
    address: '東京都目黒区自由が丘（自由が丘駅徒歩5分）',
    popularPlan: { name: '太ももダイエットプログラム', description: '医師×トレーナー共同開発の脚やせメソッド。75分×18回の集中プログラム。', price: '2ヶ月18回 179,685円〜（税込）' },
    options: ['託児所費用補助（最大1,000円/回）', 'ウェア・タオル無料レンタル', '食事指導付き', '分割払い対応'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['太もも痩せ', 'ヒップアップ', '産後ダイエット', '美脚'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'ロッカー', 'シャワー'] },
  },
  {
    name: 'パーソナルジムNICO 自由が丘',
    rating: 4.5,
    reviewCount: 10,
    reviews: [
      { author: 'C.M', rating: 5, date: '1週間前', text: '加圧トレーニングとピラティスを組み合わせられるのが魅力。お子様連れOKも嬉しい。' },
      { author: 'K.S', rating: 4, date: '2週間前', text: '女性専門のスタジオで安心。プログラムが多彩で飽きずに続けられます。' },
      { author: 'J.N', rating: 4, date: '1ヶ月前', text: '自由が丘の隠れ家的なジム。アットホームな雰囲気で通いやすいです。' },
    ],
    price: '月4回 35,200円〜（税込）',
    trial: '体験レッスンあり',
    features: ['女性専門', '加圧トレーニング', 'ピラティス', 'お子様連れOK', 'アットホーム'],
    description: '女性のボディメイクに特化した自由が丘のパーソナルジム。加圧トレーニングやピラティスなど多彩なプログラムを提供。お子様連れOKでママにも人気。',
    access: '東急「自由が丘駅」徒歩3分',
    address: '東京都目黒区自由が丘（自由が丘駅徒歩3分）',
    popularPlan: { name: '月4回プラン', description: '加圧トレーニング＋ピラティスの組み合わせ可能なプラン。', price: '月4回 35,200円〜（税込）' },
    options: ['加圧トレーニング', 'マシンピラティス', 'お子様連れOK', '食事アドバイス'],
    userProfile: { ageRange: '20代〜50代', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '姿勢改善', '産後ケア'] },
    basicInfo: { hours: '9:00〜21:00', closed: '日曜', facilities: ['トレーニングルーム', 'ロッカー'] },
  },
  {
    name: 'エクササイズコーチ 自由が丘',
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
    access: '「自由が丘」駅周辺',
    address: '自由が丘エリア（最寄り店舗は公式サイトでご確認ください）',
    popularPlan: { name: '月額トレーニングプラン', description: 'AIマシンを活用した1回約20分のマンツーマントレーニング。月額制で継続しやすい。', price: '月額制（プラン・店舗により異なる）' },
    options: ['ウェアレンタル', '手ぶらで通える', '女性スタッフ在籍店舗あり', '無料体験'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性が多数', purpose: ['ダイエット', 'ボディメイク', '運動習慣', '健康管理'] },
    basicInfo: { hours: '店舗により異なる', closed: '店舗により異なる', facilities: ['AIマシン', '個別ブース', 'ロッカー'] },
  },
]

const faqs = [
  { question: '自由が丘で女性専用のパーソナルジムはどこがおすすめ？', answer: 'UNDEUX SUPERBODY、リボーンマイセルフ、OUTLINE、ビーコンセプトが自由が丘で人気の女性専用パーソナルジムです。駅近ならUNDEUX（徒歩1分）、産後ママならリボーンマイセルフ（キッズスペース完備）がおすすめ。' },
  { question: '自由が丘のパーソナルジムの料金相場は？', answer: '自由が丘の女性向けパーソナルジムの2ヶ月コースは約18万〜22万円。ビーコンセプトが179,685円〜と最もリーズナブル。月額制ならNICOの月4回35,200円〜も人気。' },
  { question: '自由が丘駅から最も近いジムは？', answer: 'UNDEUX SUPERBODY自由が丘スタジオが徒歩1分で最も駅近。NICO自由が丘は徒歩3分、リボーンマイセルフは徒歩4分です。' },
  { question: '子連れで通えるジムは？', answer: 'リボーンマイセルフ自由が丘店はキッズスペース併設。OUTLINEはベビーサークル完備。NICOもお子様連れOK。ビーコンセプトは託児所費用補助があります。自由が丘は子連れ対応のジムが充実しています。' },
  { question: '体験レッスンは無料で受けられる？', answer: 'UNDEUX SUPERBODYは体験レッスン0円。OUTLINE、ビーコンセプト、リボーンマイセルフ、エクササイズコーチは無料カウンセリングを実施。NICOも体験レッスンあり。' },
  { question: '初心者でも大丈夫？', answer: 'はい、全ジムで初心者歓迎です。マンツーマン指導なので、運動経験がなくても安心。自由が丘のジムはアットホームな雰囲気が多く、初めての方も通いやすいです。' },
  { question: '自由が丘はどんな雰囲気のエリア？', answer: '自由が丘はおしゃれなカフェやスイーツ店が並ぶ落ち着いた街。30〜40代の女性に人気のエリアで、トレーニング前後にカフェでリフレッシュするのもおすすめです。' },
  { question: '食事指導が充実しているジムは？', answer: 'UNDEUX SUPERBODYは管理栄養士監修の宅配食20食が無料。エクササイズコーチは糖質制限なしの「食べて痩せる」メソッド。リボーンマイセルフも食事指導が充実しています。' },
  { question: 'ピラティスも受けたい場合は？', answer: 'NICOは加圧トレーニングとピラティスを組み合わせたプログラムを提供。筋トレとピラティスの両方を受けたい方におすすめです。' },
  { question: 'リバウンド防止のサポートがあるジムは？', answer: 'OUTLINEの「生涯無料アフターサポート」が最も手厚い。エクササイズコーチも食習慣の改善を重視しておりリバウンドしにくい体質づくりをサポートします。' },
]

export default function JiyugaokaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-accent text-xs mb-2">更新日 2026年04月13日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              【2026年6月最新】自由が丘の女性専用パーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選！料金比較
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light">
              <Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}
              <span className="text-brand-muted">自由が丘</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">こんにちは、G-PersonalGym編集部です。</p>
            <p className="text-brand-muted leading-relaxed mb-6">「自由が丘で女性専用のパーソナルジムを探している」「おしゃれな街で通いやすいジムが知りたい」という方のために、自由が丘エリアでおすすめの女性向けパーソナルジム{gyms.length}選をまとめました。</p>
            <div className="bg-ivory border-l-4 border-accent p-6 mb-8">
              <h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-brand-muted">
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>自由が丘で女性専用パーソナルジムを探している</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>子連れで通えるジムを探している</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>料金を比較して選びたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>産後ダイエットしたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>食事指導も受けたい</span></li>
              </ul>
            </div>
          </div>
        </section>

        <AreaContext slug="jiyugaoka" />

        <WhyWomenOnly area="自由が丘" />

        <PriceComparisonTable gyms={gyms} areaName="自由が丘" />

        <section className="py-16 bg-ivory" id="gyms">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">自由が丘のおすすめ女性向けパーソナルジム{gyms.length}選</h2>
            <div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">目的別おすすめ</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">コスパ重視</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・ビーコンセプト（18回 179,685円〜）</li><li className="text-brand-muted">・OUTLINE（16回 184,800円〜）</li><li className="text-brand-muted">・NICO（月4回 35,200円〜）</li></ul>
              </div>
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">子連れ対応</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・リボーンマイセルフ（キッズスペース）</li><li className="text-brand-muted">・OUTLINE（ベビーサークル完備）</li><li className="text-brand-muted">・NICO（お子様連れOK）</li></ul>
              </div>
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">食事サポート重視</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・UNDEUX SUPERBODY（宅配食無料）</li><li className="text-brand-muted">・エクササイズコーチ（食べて痩せるメソッド）</li><li className="text-brand-muted">・リボーンマイセルフ（食事指導充実）</li></ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-ivory">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">自由が丘の料金相場【2026年4月】</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="font-bold text-brand-text mb-3">2ヶ月集中コース</h3>
                <p className="text-3xl font-bold text-accent mb-2">18万〜22万円</p>
                <p className="text-sm text-brand-muted">ビーコンセプト179,685円〜が最安。UNDEUX 220,000円〜が最高。都心より若干落ち着いた価格帯。</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="font-bold text-brand-text mb-3">月額制</h3>
                <p className="text-3xl font-bold text-accent mb-2">3.5万円〜/月</p>
                <p className="text-sm text-brand-muted">NICO 月4回35,200円〜。継続しやすい月額プランも充実。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">自由が丘で選ぶ際の注意点</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="text-lg font-bold text-brand-text mb-3">正面口と南口で雰囲気が異なる</h3>
                <p className="text-brand-muted leading-relaxed">自由が丘駅は正面口側がメインの商業エリア、南口側は住宅街寄り。ジムの場所によって駅からのルートが異なるので、事前に確認しておきましょう。</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="text-lg font-bold text-brand-text mb-3">子連れ対応のジムが多い穴場エリア</h3>
                <p className="text-brand-muted leading-relaxed">自由が丘はファミリー層も多く、キッズスペースやベビーサークルを完備したジムが充実。産後ダイエットを考えているママには特におすすめのエリアです。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-ivory">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">よくある質問</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-line rounded-xl overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-accent-tint transition">
                      <h3 className="font-bold text-brand-text pr-4 text-sm">Q{index + 1}. {faq.question}</h3>
                      <svg className="w-5 h-5 text-accent group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
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
            <p className="text-brand-muted leading-relaxed mb-4">自由が丘エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。</p>
            <p className="text-brand-muted leading-relaxed mb-4">駅近で通いやすさ重視ならUNDEUX SUPERBODY、産後ダイエットならリボーンマイセルフ、生涯サポート付きならOUTLINE、下半身痩せならビーコンセプトがおすすめです。</p>
            <p className="text-brand-muted leading-relaxed">まずは気になるジムの体験レッスンに行ってみてください。</p>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-accent to-accent-dark text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-4">まずは無料カウンセリングから</h2>
            <p className="text-white/80 mb-8">複数のジムを比較して、あなたに合うジムを見つけましょう。</p>
            <Link href="/ranking/" className="inline-block bg-white text-accent px-10 py-4 text-sm font-bold rounded-full hover:bg-accent-tint transition-all">おすすめランキングを見る</Link>
          </div>
        </section>
      </main>
      <RelatedAreas currentSlug="jiyugaoka" />
      <SiteFooter />
    </>
  )
}
