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
import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/areas/meguro/' },
  title: '【2026年7月最新】目黒の女性専用パーソナルジムおすすめ6選！料金比較',
  description: '【2026年4月最新】目黒のおすすめ女性専用パーソナルジム6選を徹底比較。B-CONCEPT・OUTLINE・Bodiesなど人気ジムの料金・口コミ・特徴を網羅。',
  keywords: '女性専用パーソナルジム,目黒,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'ビーコンセプト 目黒店',
    officialUrl: 'https://b-concept.tokyo/',
    price: '2ヶ月18回 179,685円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '下半身特化', '医師×トレーナー共同開発', '託児所費用補助', '完全個室'],
    description: '医師とトレーナーが共同開発した脚やせメソッドが人気。太もも痩せ・ヒップアップに特化したプログラムで美脚を目指す。目黒駅から徒歩圏内で通いやすい立地。',
    access: 'JR「目黒駅」徒歩5分',
    address: '東京都品川区上大崎（目黒駅徒歩5分）',
    popularPlan: { name: '太ももダイエットプログラム', description: '医師×トレーナー共同開発の脚やせメソッド。75分×18回の集中プログラム。', price: '2ヶ月18回 179,685円〜（税込）' },
    options: ['託児所費用補助（最大1,000円/回）', 'ウェア・タオル無料レンタル', '食事指導付き', '分割払い対応（月々5,545円〜）'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['太もも痩せ', 'ヒップアップ', '産後ダイエット', '美脚'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'ロッカー', 'シャワー'] },
  },
  {
    name: 'OUTLINE 目黒店',
    officialUrl: 'https://www.outline-gym.com/',
    price: '16回 184,800円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '完全個室', '生涯サポート無料', 'ベビーサークル完備', '女性特化マシン'],
    description: '生涯無料アフターサポートが最大の特徴。完全個室で女性専用マシンを使ったトレーニング。ベビーサークル完備で産後ママも安心して通える。',
    access: 'JR「目黒駅」徒歩6分',
    address: '東京都品川区上大崎（目黒駅徒歩6分）',
    popularPlan: { name: '16回コース', description: '完全個室でのマンツーマントレーニング。卒業後も生涯無料でアフターサポート。', price: '16回 184,800円〜（税込）' },
    options: ['生涯無料アフターサポート', 'ベビーサークル完備', 'ウェアレンタル無料', 'よもぎ蒸し', '高級アミノ酸提供'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '産後ダイエット', 'リバウンド防止'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'ベビーサークル', '女性専用マシン'] },
  },
  {
    name: 'Bodies 目黒店',
    price: '月会費 5,970円〜（税込）',
    trial: '無料体験あり',
    features: ['女性専用', 'サーキットトレーニング', 'ゲルマニウム温浴', '駅直結', 'リーズナブル'],
    description: 'ABCクッキングスタジオが手がける女性専用フィットネス。1回30分のサーキットトレーニングで効率的に運動。ゲルマニウム温浴も利用可能。目黒駅直結で雨の日も安心。',
    access: 'JR「目黒駅」直結',
    address: '東京都品川区上大崎（目黒駅直結）',
    popularPlan: { name: 'レギュラー会員', description: 'サーキットトレーニング＋ゲルマニウム温浴が使い放題。', price: '月会費 5,970円〜（税込）' },
    options: ['ゲルマニウム温浴', 'サーキットトレーニング', 'ランニング', 'ヨガプログラム'],
    userProfile: { ageRange: '20代〜50代', genderRatio: '女性100%', purpose: ['健康維持', '運動習慣', 'リラックス', 'ダイエット'] },
    basicInfo: { hours: '10:00〜21:00', closed: '施設定休日に準ずる', facilities: ['サーキットエリア', 'ゲルマニウム温浴', 'ロッカー'] },
  },
  {
    name: 'UNDEUX SUPERBODY 目黒スタジオ',
    officialUrl: 'https://www.diet-undeux.jp/',
    price: '2ヶ月16回 220,000円〜（税込）',
    trial: '体験レッスン0円',
    features: ['女性専用', '食事管理付き', '宅配食無料', 'パウダールーム完備', '目黒駅近'],
    description: '糖質オフ宅配食を無料提供する女性専用パーソナルジム。トレーニングと食事の両面から総合的にサポート。パウダールーム・基礎化粧品完備で手ぶらOK。',
    access: 'JR「目黒駅」徒歩5分',
    address: '東京都品川区上大崎（目黒駅徒歩5分）',
    popularPlan: { name: '2ヶ月集中コース', description: 'マンツーマントレーニング16回＋食事指導＋宅配食の総合サポートプラン。', price: '2ヶ月16回 220,000円〜（税込）' },
    options: ['糖質オフ宅配食無料', 'ウェア・タオルレンタル無料', 'シャワー・パウダールーム完備', '基礎化粧品完備', '月額制LIFEプランあり'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', '脚痩せ', '産後ダイエット', 'ボディメイク'] },
    basicInfo: { hours: '9:00〜22:00', closed: '不定休', facilities: ['完全個室', 'シャワー', 'パウダールーム', '基礎化粧品'] },
  },
  {
    name: 'かたぎり塾 目黒店',
    officialUrl: 'https://katagirijuku.jp/',
    price: '月4回 30,800円〜（税込）',
    trial: '体験レッスンあり',
    features: ['月額制', 'AI食事指導', '女性トレーナー在籍', 'リーズナブル', '目黒駅近'],
    description: '全国展開のパーソナルジムチェーン。月額制で続けやすい料金設定が人気。AI食事指導で最新技術を活用。目黒駅からのアクセスも良好。',
    access: 'JR「目黒駅」徒歩4分',
    address: '東京都品川区上大崎（目黒駅徒歩4分）',
    popularPlan: { name: '月4回プラン', description: '月額制のパーソナルトレーニング。AI食事指導付き。', price: '月4回 30,800円〜（税込）' },
    options: ['AI食事指導', '月額制で始めやすい', '回数変更可能'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性70% / 男性30%', purpose: ['ダイエット', '体力向上', '健康維持', 'ボディメイク'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['個室', 'ロッカー'] },
  },
  {
    name: 'エクササイズコーチ 目黒店',
    officialUrl: 'https://exercisecoach.co.jp/',
    price: '月4回 12,000円〜（税込）',
    trial: '無料体験あり',
    features: ['AI主導', '1回20分', '低価格', '女性利用者8割', '目黒駅近'],
    description: 'AI主導の効率的パーソナルトレーニング。1回20分で月4回12,000円〜の低価格。利用者の8割以上が女性で、短時間で効果的なトレーニングが可能。',
    access: 'JR「目黒駅」徒歩3分',
    address: '東京都品川区上大崎（目黒駅徒歩3分）',
    popularPlan: { name: '月4回プラン', description: 'AIが最適な負荷を設定。1回20分の効率トレーニング。', price: '月4回 12,000円〜（税込）' },
    options: ['AI個別最適化', '1回20分', 'ウェアレンタル無料'],
    userProfile: { ageRange: '20代〜50代', genderRatio: '女性80% / 男性20%', purpose: ['ダイエット', '健康維持', '体力向上', '運動習慣'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['トレーニングマシン', 'ロッカー'] },
  },
]

const faqs = [
  { question: '目黒で女性専用のパーソナルジムはありますか？', answer: 'はい、目黒エリアにはビーコンセプト、OUTLINE、Bodies、UNDEUX SUPERBODYなど複数の女性専用パーソナルジムがあります。いずれも目黒駅から徒歩圏内です。' },
  { question: '目黒のパーソナルジムの料金相場は？', answer: '目黒エリアの料金は月5,970円〜（Bodies）から2ヶ月220,000円〜（UNDEUX SUPERBODY）まで幅広い選択肢があります。エクササイズコーチは月12,000円〜と低価格です。' },
  { question: '目黒駅直結のジムはある？', answer: 'Bodies目黒店は目黒駅直結で、雨の日でも濡れずに通えます。月会費5,970円〜のリーズナブルな料金で、ゲルマニウム温浴も利用可能です。' },
  { question: '目黒で子連れで通えるジムは？', answer: 'OUTLINE目黒店はベビーサークル完備で子連れOK。ビーコンセプトは託児所費用を最大1,000円/回補助してくれます。' },
]

export default function MeguroPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-accent text-xs mb-2">更新日 2026年04月29日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              【2026年7月最新】目黒の女性専用パーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選！料金比較
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light">
              <Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}
              <span className="text-brand-muted">目黒</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">こんにちは、G-PersonalGym編集部です。</p>
            <p className="text-brand-muted leading-relaxed mb-6">「目黒で女性専用のパーソナルジムを探している」「駅近で通いやすいジムが知りたい」という方のために、目黒エリアでおすすめの女性向けパーソナルジム{gyms.length}選をまとめました。</p>
            <div className="bg-ivory border-l-4 border-accent p-6 mb-8">
              <h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-brand-muted">
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>目黒で女性専用パーソナルジムを探している</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>駅近で通いやすいジムが良い</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>料金を比較して選びたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>下半身痩せに力を入れたい</span></li>
              </ul>
            </div>
          </div>
        </section>

        <AreaContext slug="meguro" />

        <WhyWomenOnly area="目黒" />

        <PriceComparisonTable gyms={gyms} areaName="目黒" />

        <section className="py-16 bg-ivory" id="gyms">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">目黒のおすすめ女性向けパーソナルジム{gyms.length}選</h2>
            <div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-brand-text mb-6 text-center">まとめ</h2>
            <p className="text-brand-muted leading-relaxed mb-4">目黒エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。</p>
            <p className="text-brand-muted leading-relaxed mb-4">下半身痩せならビーコンセプト、コスパと生涯サポートならOUTLINE、手軽に始めるならBodiesやエクササイズコーチがおすすめです。</p>
            <p className="text-brand-muted leading-relaxed">まずは気になるジムの体験レッスンに行ってみてください。</p>
          </div>
        </section>

        <section className="py-16 bg-white">
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

        <section className="py-16 bg-gradient-to-r from-accent to-accent-dark text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-4">まずは無料カウンセリングから</h2>
            <p className="text-white/80 mb-8">複数のジムを比較して、あなたに合うジムを見つけましょう。</p>
            <Link href="/ranking/" className="inline-block bg-white text-accent px-10 py-4 text-sm font-bold rounded-full hover:bg-accent-tint transition-all">おすすめランキングを見る</Link>
          </div>
        </section>
        <IntentGuideLinks />
      </main>
      <RelatedAreas currentSlug="meguro" />
      <SiteFooter />
    </>
  )
}
