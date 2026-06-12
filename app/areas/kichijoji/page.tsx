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
  title: '【2026年6月最新】吉祥寺の女性専用パーソナルジムおすすめ5選！料金比較',
  description: '【2026年4月最新】吉祥寺のおすすめ女性専用パーソナルジム5選を徹底比較。ビーコンセプト・OUTLINE・UNDEUX SUPERBODYなど人気ジムの料金・口コミ・特徴を網羅。',
  keywords: '女性専用パーソナルジム,吉祥寺,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'ビーコンセプト 吉祥寺店',
    officialUrl: 'https://b-concept.tokyo/',
    rating: 4.7,
    reviewCount: 18,
    reviews: [
      { author: 'S.T', rating: 5, date: '2週間前', text: '吉祥寺駅徒歩1分で最高の立地。太もも-4cm達成で脚が細くなったと周りに言われます！' },
      { author: 'H.K', rating: 5, date: '1ヶ月前', text: '医師とトレーナー共同開発の脚やせメソッドが効果的。完全個室で人目を気にせずトレーニング。' },
      { author: 'A.M', rating: 4, date: '3週間前', text: '月々5,545円〜の分割払いで始めやすい。吉祥寺の帰りにサクッと通えるのが良い。' },
    ],
    price: '2ヶ月18回 179,685円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '駅徒歩1分', '下半身特化', '医師×トレーナー共同開発', '完全個室'],
    description: '吉祥寺駅徒歩1分の最高立地。医師とトレーナーが共同開発した独自の脚やせメソッドが人気。下半身太りに悩む女性に特化したプログラム。月々5,545円〜の分割払い可。',
    access: 'JR「吉祥寺駅」徒歩1分',
    address: '東京都武蔵野市吉祥寺（吉祥寺駅徒歩1分）',
    popularPlan: { name: '太ももダイエットプログラム', description: '医師×トレーナー共同開発の脚やせメソッド。75分×18回の集中プログラム。', price: '2ヶ月18回 179,685円〜（税込）' },
    options: ['託児所費用補助（最大1,000円/回）', 'ウェア・タオル無料レンタル', '食事指導付き', '分割払い対応（月々5,545円〜）'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['太もも痩せ', 'ヒップアップ', '産後ダイエット', '美脚'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'ロッカー', 'シャワー'] },
  },
  {
    name: 'OUTLINE 吉祥寺店',
    officialUrl: 'https://www.outline-gym.com/',
    rating: 4.7,
    reviewCount: 15,
    reviews: [
      { author: 'K.S', rating: 5, date: '1週間前', text: '生涯アフターサポートが決め手。完全個室でベビーサークルもあり、子連れで通えました。' },
      { author: 'R.N', rating: 5, date: '2週間前', text: '女性専用マシンが効率的。よもぎ蒸しも気持ちよくてリラックスできます。' },
      { author: 'N.H', rating: 4, date: '1ヶ月前', text: '吉祥寺で生涯サポート付きのジムは貴重。リバウンドの心配がなくなりました。' },
    ],
    price: '16回 184,800円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '完全個室', '生涯サポート無料', 'ベビーサークル完備', 'よもぎ蒸し'],
    description: '業界初の生涯無料アフターサポートが最大の特徴。完全個室・女性専用マシン完備。ベビーサークルもあり子連れでも安心。吉祥寺の住みたい街ランキング常連エリアで。',
    access: 'JR「吉祥寺駅」徒歩5分',
    address: '東京都武蔵野市吉祥寺（吉祥寺駅徒歩5分）',
    popularPlan: { name: '16回コース', description: '完全個室マンツーマントレーニング。卒業後も生涯無料でアフターサポート。', price: '16回 184,800円〜（税込）' },
    options: ['生涯無料アフターサポート', 'ベビーサークル完備', 'よもぎ蒸し', '高級アミノ酸提供', 'ウェアレンタル無料'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '産後ダイエット', 'リバウンド防止'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'ベビーサークル', '女性専用マシン'] },
  },
  {
    name: 'UNDEUX SUPERBODY 吉祥寺スタジオ',
    officialUrl: 'https://www.diet-undeux.jp/',
    rating: 4.8,
    reviewCount: 16,
    reviews: [
      { author: 'A.K', rating: 5, date: '2週間前', text: '宅配食が美味しくて食事管理が楽。吉祥寺の落ち着いた環境で通いやすいです。' },
      { author: 'M.S', rating: 5, date: '1ヶ月前', text: '美尻・脚痩せなど目的に合わせたトレーニングが受けられる。2ヶ月で-5kg達成！' },
      { author: 'Y.N', rating: 4, date: '3週間前', text: 'パウダールーム完備で手ぶらOK。吉祥寺でのショッピング帰りに通えて便利。' },
    ],
    price: '2ヶ月16回 220,000円〜（税込）',
    trial: '体験レッスン0円',
    features: ['女性専用', '宅配食無料', 'パウダールーム完備', '目的別トレーニング', '手ぶらOK'],
    description: '女性専用パーソナルジム。美尻・脚痩せ・産後ダイエットなど目的に合わせたトレーニングが可能。管理栄養士監修の糖質オフ宅配食20食が追加料金なし。',
    access: 'JR「吉祥寺駅」徒歩4分',
    address: '東京都武蔵野市吉祥寺（吉祥寺駅徒歩4分）',
    popularPlan: { name: '2ヶ月集中コース', description: 'マンツーマントレーニング16回＋食事指導＋宅配食の総合サポートプラン。', price: '2ヶ月16回 220,000円〜（税込）' },
    options: ['糖質オフ宅配食20食無料', 'ウェア・タオルレンタル無料', 'シャワー・パウダールーム完備', '基礎化粧品完備'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', '美尻', '脚痩せ', '産後ダイエット'] },
    basicInfo: { hours: '9:00〜22:00', closed: '不定休', facilities: ['完全個室', 'シャワー', 'パウダールーム'] },
  },
  {
    name: 'リボーンマイセルフ 吉祥寺店',
    officialUrl: 'https://reborn-myself.com/',
    rating: 4.6,
    reviewCount: 12,
    reviews: [
      { author: 'T.H', rating: 5, date: '1週間前', text: 'トレーナーが全員女性なのが安心。女性ならではの悩みに寄り添ってくれます。' },
      { author: 'M.A', rating: 4, date: '2週間前', text: '10年以上の実績でノウハウが豊富。吉祥寺の街を散歩しながら通えるのも良い。' },
      { author: 'E.T', rating: 5, date: '1ヶ月前', text: '食事指導が具体的で分かりやすい。無理なく続けられるプランを提案してくれました。' },
    ],
    price: '入会金38,000円＋コース料金',
    trial: '無料カウンセリング',
    features: ['女性専用', '女性トレーナーのみ', '10年以上の実績', '産後ダイエット対応', '吉祥寺駅近'],
    description: '日本初の女性専用ダイエットジム。トレーナーも全員女性。2万人以上の指導実績をもとにしたオリジナルメソッド。吉祥寺の穏やかな環境でトレーニング。',
    access: 'JR「吉祥寺駅」徒歩5分',
    address: '東京都武蔵野市吉祥寺（吉祥寺駅徒歩5分）',
    popularPlan: { name: 'ダイエットコース', description: '女性トレーナーによるマンツーマン指導。産後ダイエットコースも用意。', price: '入会金38,000円＋コース料金' },
    options: ['ウェアレンタル無料', '産後ダイエットコース', 'ブライダルダイエットコース', '部分痩せコース'],
    userProfile: { ageRange: '20代〜50代', genderRatio: '女性100%', purpose: ['ダイエット', '産後ダイエット', 'ブライダル', '部分痩せ'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['ロッカー', 'ウェアレンタル'] },
  },
  {
    name: 'エクササイズコーチ 吉祥寺',
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
    access: '「吉祥寺」駅周辺',
    address: '吉祥寺エリア（最寄り店舗は公式サイトでご確認ください）',
    popularPlan: { name: '月額トレーニングプラン', description: 'AIマシンを活用した1回約20分のマンツーマントレーニング。月額制で継続しやすい。', price: '月額制（プラン・店舗により異なる）' },
    options: ['ウェアレンタル', '手ぶらで通える', '女性スタッフ在籍店舗あり', '無料体験'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性が多数', purpose: ['ダイエット', 'ボディメイク', '運動習慣', '健康管理'] },
    basicInfo: { hours: '店舗により異なる', closed: '店舗により異なる', facilities: ['AIマシン', '個別ブース', 'ロッカー'] },
  },
]

const faqs = [
  { question: '吉祥寺で女性専用のパーソナルジムはどこがおすすめ？', answer: 'ビーコンセプト、OUTLINE、UNDEUX SUPERBODY、リボーンマイセルフが吉祥寺で人気の女性専用パーソナルジムです。駅近ならビーコンセプト（徒歩1分）、食事管理ならUNDEUXがおすすめ。' },
  { question: '吉祥寺のパーソナルジムの料金相場は？', answer: '吉祥寺の女性向けパーソナルジムの2ヶ月コースは約18万〜22万円。ビーコンセプトが179,685円〜と最安。都心部より若干リーズナブルな傾向があります。' },
  { question: '吉祥寺駅から最も近いジムは？', answer: 'ビーコンセプト吉祥寺店が徒歩1分で最も駅近。UNDEUX SUPERBODYは徒歩4分、OUTLINE・リボーンマイセルフは徒歩5分です。' },
  { question: '子連れで通えるジムは？', answer: 'OUTLINE吉祥寺店はベビーサークル完備で子連れOK。ビーコンセプトは託児所費用を最大1,000円/回補助してくれます。' },
  { question: '体験は無料？', answer: 'UNDEUX SUPERBODYは体験レッスン0円。ビーコンセプト、OUTLINE、リボーンマイセルフ、エクササイズコーチは無料カウンセリングを実施。' },
  { question: '初心者でも大丈夫？', answer: 'はい、全ジムで初心者歓迎です。マンツーマン指導なので運動経験がなくても安心。吉祥寺のジムはアットホームな雰囲気のところが多いです。' },
  { question: '吉祥寺は都心のジムと比べてどう？', answer: '吉祥寺は都心に比べてやや落ち着いた雰囲気。料金は都心とほぼ同等ですが、混雑が少なく予約が取りやすい傾向があります。JR中央線で新宿から約15分と好アクセス。' },
  { question: '食事指導が充実しているジムは？', answer: 'UNDEUX SUPERBODYは宅配食20食が無料。エクササイズコーチは糖質制限なしの「食べて痩せる」メソッド。吉祥寺はグルメの街なので食事指導重視がおすすめ。' },
  { question: '仕事帰りでも通える？', answer: 'ほとんどのジムが22:00まで営業。ウェアレンタルやシャワー完備のジムが多いので、仕事帰りでも手ぶらで通えます。' },
  { question: 'リバウンド防止のサポートは？', answer: 'OUTLINEの「生涯無料アフターサポート」が最も手厚い。卒業後もずっと無料でサポートが受けられるので、リバウンドが心配な方に最適です。' },
]

export default function KichijojiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-accent text-xs mb-2">更新日 2026年04月13日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              【2026年6月最新】吉祥寺の女性専用パーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選！料金比較
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light">
              <Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}
              <span className="text-brand-muted">吉祥寺</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">こんにちは、G-PersonalGym編集部です。</p>
            <p className="text-brand-muted leading-relaxed mb-6">「吉祥寺で女性専用のパーソナルジムを探している」「住みたい街ランキング常連の吉祥寺で通いやすいジムが知りたい」という方のために、吉祥寺エリアでおすすめの女性向けパーソナルジム{gyms.length}選をまとめました。</p>
            <div className="bg-ivory border-l-4 border-accent p-6 mb-8">
              <h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-brand-muted">
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>吉祥寺で女性専用パーソナルジムを探している</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>駅近で通いやすいジムが良い</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>料金を比較して選びたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>下半身痩せしたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>食事指導も受けたい</span></li>
              </ul>
            </div>
          </div>
        </section>

        <AreaContext slug="kichijoji" />

        <WhyWomenOnly area="吉祥寺" />

        <PriceComparisonTable gyms={gyms} areaName="吉祥寺" />

        <section className="py-16 bg-ivory" id="gyms">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">吉祥寺のおすすめ女性向けパーソナルジム{gyms.length}選</h2>
            <div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">目的別おすすめ</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">コスパ重視</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・ビーコンセプト（18回 179,685円〜）</li><li className="text-brand-muted">・OUTLINE（16回 184,800円〜）</li><li className="text-brand-muted">・エクササイズコーチ（16回 215,600円〜）</li></ul>
              </div>
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">食事サポート重視</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・UNDEUX SUPERBODY（宅配食無料）</li><li className="text-brand-muted">・エクササイズコーチ（食べて痩せるメソッド）</li><li className="text-brand-muted">・ビーコンセプト（医師監修指導）</li></ul>
              </div>
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">子連れ対応</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・OUTLINE（ベビーサークル完備）</li><li className="text-brand-muted">・ビーコンセプト（託児所費用補助）</li></ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-ivory">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">吉祥寺の料金相場【2026年4月】</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="font-bold text-brand-text mb-3">2ヶ月集中コース</h3>
                <p className="text-3xl font-bold text-accent mb-2">18万〜22万円</p>
                <p className="text-sm text-brand-muted">ビーコンセプト179,685円〜が最安。UNDEUX 220,000円〜が最高。都心部とほぼ同等の価格帯。</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="font-bold text-brand-text mb-3">入会金</h3>
                <p className="text-3xl font-bold text-accent mb-2">0〜5万円</p>
                <p className="text-sm text-brand-muted">キャンペーンで入会金無料のジムも。体験時に確認しましょう。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">吉祥寺で選ぶ際の注意点</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="text-lg font-bold text-brand-text mb-3">北口と南口でエリアの雰囲気が違う</h3>
                <p className="text-brand-muted leading-relaxed">吉祥寺駅は北口がサンロード商店街やハモニカ横丁などの繁華街、南口は井の頭公園方面で落ち着いた雰囲気。ジムの場所によって駅からのルートが異なるので事前確認を。</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="text-lg font-bold text-brand-text mb-3">食の誘惑が多いエリアだからこそ食事指導が重要</h3>
                <p className="text-brand-muted leading-relaxed">吉祥寺はカフェやレストランが充実したグルメの街。トレーニング後の食事で効果を台無しにしないよう、食事指導が充実したジムを選ぶのがおすすめです。</p>
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
            <p className="text-brand-muted leading-relaxed mb-4">吉祥寺エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。</p>
            <p className="text-brand-muted leading-relaxed mb-4">駅近で下半身痩せならビーコンセプト、生涯サポートならOUTLINE、食事管理重視ならUNDEUX SUPERBODY、女性トレーナー希望ならリボーンマイセルフがおすすめです。</p>
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
      <RelatedAreas currentSlug="kichijoji" />
      <SiteFooter />
    </>
  )
}
