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
  alternates: { canonical: '/areas/ikebukuro/' },
  title: '【2026年6月最新】池袋の女性専用パーソナルジムおすすめ5選！料金比較',
  description: '【2026年4月最新】池袋のおすすめ女性専用・女性向けパーソナルジム5選を徹底比較。料金・口コミ・特徴を網羅。',
  keywords: '女性専用パーソナルジム,池袋,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'OUTLINE 池袋店',
    officialUrl: 'https://www.outline-gym.com/',
    rating: 4.8,
    reviewCount: 20,
    reviews: [
      { author: 'A.K', rating: 5, date: '2週間前', text: '生涯無料アフターサポート付き女性専用パーソナルジム。池袋駅から好アクセス。とても満足しています。' },
      { author: 'M.S', rating: 4, date: '1ヶ月前', text: 'トレーナーさんが親切で通いやすい。着実に結果が出ています。' },
    ],
    price: '16回 184,800円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '完全個室', '生涯サポート無料', 'ベビーサークル完備'],
    description: '生涯無料アフターサポート付き女性専用パーソナルジム。池袋駅から好アクセス。',
    access: 'JR「池袋駅」徒歩5分',
    address: 'JR「池袋駅」徒歩5分',
    popularPlan: { name: '人気プラン', description: '生涯無料アフターサポート付き女性専用パーソナルジム。池袋駅から好アクセス。', price: '16回 184,800円〜（税込）' },
    options: ['ウェアレンタル無料', 'タオル完備', '食事指導あり'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '姿勢改善'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'シャワー', 'ロッカー'] },
  },
  {
    name: 'UNDEUX SUPERBODY 池袋スタジオ',
    officialUrl: 'https://www.diet-undeux.jp/',
    rating: 4.7,
    reviewCount: 18,
    reviews: [
      { author: 'B.L', rating: 5, date: '2週間前', text: '糖質オフ宅配食を無料提供する女性専用パーソナルジム。とても満足しています。' },
      { author: 'N.T', rating: 4, date: '1ヶ月前', text: 'トレーナーさんが親切で通いやすい。着実に結果が出ています。' },
    ],
    price: '2ヶ月16回 220,000円〜（税込）',
    trial: '体験レッスン0円',
    features: ['女性専用', '食事管理付き', '宅配食無料'],
    description: '糖質オフ宅配食を無料提供する女性専用パーソナルジム。',
    access: 'JR「池袋駅」徒歩5分',
    address: 'JR「池袋駅」徒歩5分',
    popularPlan: { name: '人気プラン', description: '糖質オフ宅配食を無料提供する女性専用パーソナルジム。', price: '2ヶ月16回 220,000円〜（税込）' },
    options: ['ウェアレンタル無料', 'タオル完備', '食事指導あり'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '姿勢改善'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'シャワー', 'ロッカー'] },
  },
  {
    name: 'ビーコンセプト 池袋店',
    officialUrl: 'https://b-concept.tokyo/',
    rating: 4.7,
    reviewCount: 16,
    reviews: [
      { author: 'C.M', rating: 5, date: '2週間前', text: '下半身痩せ特化の女性専用パーソナルジム。医師監修メソッド。とても満足しています。' },
      { author: 'O.U', rating: 4, date: '1ヶ月前', text: 'トレーナーさんが親切で通いやすい。着実に結果が出ています。' },
    ],
    price: '2ヶ月18回 179,685円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '下半身特化', '完全個室', '託児所費用補助'],
    description: '下半身痩せ特化の女性専用パーソナルジム。医師監修メソッド。',
    access: 'JR「池袋駅」徒歩5分',
    address: 'JR「池袋駅」徒歩5分',
    popularPlan: { name: '人気プラン', description: '下半身痩せ特化の女性専用パーソナルジム。医師監修メソッド。', price: '2ヶ月18回 179,685円〜（税込）' },
    options: ['ウェアレンタル無料', 'タオル完備', '食事指導あり'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '姿勢改善'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'シャワー', 'ロッカー'] },
  },
  {
    name: 'Lastyle 池袋東口本店',
    rating: 4.6,
    reviewCount: 15,
    reviews: [
      { author: 'D.N', rating: 5, date: '2週間前', text: '筋トレ×ボクシング×有酸素×ピラティスの超効率トレーニング。女性人気No.1受賞。とても満足しています。' },
      { author: 'P.V', rating: 4, date: '1ヶ月前', text: 'トレーナーさんが親切で通いやすい。着実に結果が出ています。' },
    ],
    price: '2ヶ月16回 158,400円〜（税込）',
    trial: '無料カウンセリング',
    features: ['完全個室', '4つのメソッド', '女性人気高い', 'ボクシング'],
    description: '筋トレ×ボクシング×有酸素×ピラティスの超効率トレーニング。女性人気No.1受賞。',
    access: 'JR「池袋駅」東口 徒歩5分',
    address: 'JR「池袋駅」東口 徒歩5分',
    popularPlan: { name: '人気プラン', description: '筋トレ×ボクシング×有酸素×ピラティスの超効率トレーニング。女性人気No.1受賞', price: '2ヶ月16回 158,400円〜（税込）' },
    options: ['ウェアレンタル無料', 'タオル完備', '食事指導あり'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '姿勢改善'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'シャワー', 'ロッカー'] },
  },
  {
    name: 'エクササイズコーチ 池袋店',
    officialUrl: 'https://exercisecoach.co.jp/',
    rating: 4.4,
    reviewCount: 18,
    reviews: [
      { author: 'E.O', rating: 5, date: '2週間前', text: 'AI主導20分トレーニング。月4回12,000円〜。とても満足しています。' },
      { author: 'Q.W', rating: 4, date: '1ヶ月前', text: 'トレーナーさんが親切で通いやすい。着実に結果が出ています。' },
    ],
    price: '月4回 12,000円〜（税込）',
    trial: '無料体験あり',
    features: ['AI主導', '1回20分', '低価格', '女性利用者8割'],
    description: 'AI主導20分トレーニング。月4回12,000円〜。',
    access: 'JR「池袋駅」徒歩3分',
    address: 'JR「池袋駅」徒歩3分',
    popularPlan: { name: '人気プラン', description: 'AI主導20分トレーニング。月4回12,000円〜。', price: '月4回 12,000円〜（税込）' },
    options: ['ウェアレンタル無料', 'タオル完備', '食事指導あり'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '姿勢改善'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'シャワー', 'ロッカー'] },
  }
]

const faqs = [
  { question: '池袋で女性専用のパーソナルジムはどこがおすすめ？', answer: 'OUTLINE 池袋店、UNDEUX SUPERBODY 池袋スタジオ、ビーコンセプト 池袋店が池袋で人気の女性向けパーソナルジムです。それぞれ特徴が異なるので、体験レッスンで比較するのがおすすめです。' },
  { question: '池袋のパーソナルジムの料金相場は？', answer: '池袋エリアの女性向けパーソナルジムの2ヶ月コース料金は約15万〜22万円。月額制なら月12,000円〜30,000円程度から通えます。' },
  { question: '初心者でも大丈夫？', answer: 'はい、全ジムで初心者歓迎です。パーソナルジムはマンツーマン指導なので、運動経験がなくても安心して始められます。' },
  { question: '体験レッスンは無料で受けられる？', answer: 'ジムによって異なります。無料カウンセリングや無料体験を実施しているジムも多いので、まずは気軽に問い合わせてみましょう。' },
  { question: 'どのくらいで効果が出る？', answer: '個人差はありますが、2ヶ月（16回）で平均5〜8kgの減量効果が期待できます。見た目の変化は1ヶ月目から感じる方が多いです。' },
  { question: '食事指導はありますか？', answer: 'ほとんどのパーソナルジムで食事指導が含まれています。LINEでの日々のサポートが一般的です。' },
  { question: 'ウェアは必要？', answer: 'ほとんどのジムでウェア・タオルの無料レンタルがあります。手ぶらで通えるジムが多いです。' },
  { question: '池袋駅から近いジムは？', answer: 'OUTLINE 池袋店、UNDEUX SUPERBODY 池袋スタジオ、ビーコンセプト 池袋店が駅から近いジムです。' },
  { question: 'リバウンドが心配', answer: 'OUTLINEは業界初の「生涯無料アフターサポート」があります。多くのジムでは卒業後のフォロープログラムが含まれています。' },
  { question: '子連れで通えるジムは？', answer: 'OUTLINEはベビーサークル全店完備、ビーコンセプトは託児所費用補助があります。事前に各ジムにお問い合わせください。' },
]

export default function IkebukuroPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-accent text-xs mb-2">更新日 2026年04月13日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              【2026年6月最新】池袋の女性専用パーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選！料金比較
            </h1>
          </div>
        </section>
        <section className="bg-white py-3 border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light"><Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}<span className="text-brand-muted">池袋</span></nav>
          </div>
        </section>
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">こんにちは、G-PersonalGym編集部です。</p>
            <p className="text-brand-muted leading-relaxed mb-6">「池袋で女性専用のパーソナルジムを探している」という方のために、池袋エリアでおすすめの女性向けパーソナルジム{gyms.length}選をまとめました。</p>
            <div className="bg-ivory border-l-4 border-accent p-6 mb-8">
              <h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-brand-muted">
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>池袋で女性専用パーソナルジムを探している</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>駅近で通いやすいジムが良い</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>料金を比較して選びたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>食事指導も受けたい</span></li>
              </ul>
            </div>
          </div>
        </section>
        <AreaContext slug="ikebukuro" />

        <WhyWomenOnly area="池袋" />

        <PriceComparisonTable gyms={gyms} areaName="池袋" />
        <section className="py-16 bg-ivory" id="gyms">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">池袋のおすすめ女性向けパーソナルジム{gyms.length}選</h2>
            <div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">池袋の料金相場【2026年4月】</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="font-bold text-brand-text mb-3">2ヶ月集中コース</h3>
                <p className="text-3xl font-bold text-accent mb-2">15万〜22万円</p>
                <p className="text-sm text-brand-muted">16回（週2回×2ヶ月）の一般的なコース料金。入会金は別途2〜5万円程度。</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="font-bold text-brand-text mb-3">月額制</h3>
                <p className="text-3xl font-bold text-accent mb-2">1.2万〜3万円/月</p>
                <p className="text-sm text-brand-muted">月4〜8回のプラン。継続しやすい料金設定。</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-ivory">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">池袋で選ぶ際の注意点</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="text-lg font-bold text-brand-text mb-3">体験レッスンは2〜3ジム比較を</h3>
                <p className="text-brand-muted leading-relaxed">最低2〜3ジムの体験に行って、トレーナーとの相性や雰囲気を比較してから決めましょう。</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="text-lg font-bold text-brand-text mb-3">総額で比較する</h3>
                <p className="text-brand-muted leading-relaxed">コース料金だけでなく、入会金・オプション費用も含めた総額で比較しましょう。キャンペーンで入会金無料になることも多いです。</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="text-lg font-bold text-brand-text mb-3">通いやすさを重視</h3>
                <p className="text-brand-muted leading-relaxed">継続が最も大切。自宅や職場から通いやすい場所のジムを選びましょう。</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">体験時の持ち物ガイド</h2>
            <div className="bg-white rounded-xl p-8 border border-line">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-brand-text mb-4">必須の持ち物</h3>
                  <ul className="space-y-3 text-brand-muted text-sm">
                    <li>・<strong>動きやすいウェア</strong>（レンタルありのジムも多い）</li>
                    <li>・<strong>室内シューズ</strong>（レンタルありのジムも）</li>
                    <li>・<strong>水分（500ml以上）</strong></li>
                    <li>・<strong>フェイスタオル</strong></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-text mb-4">あると便利なもの</h3>
                  <ul className="space-y-3 text-brand-muted text-sm">
                    <li>・着替え（仕事帰りの場合）</li>
                    <li>・メイク道具（シャワー後用）</li>
                    <li>・目標の体型のイメージ写真</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-ivory">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">よくある質問</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-line rounded-xl overflow-hidden bg-white">
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
            <p className="text-brand-muted leading-relaxed mb-4">池袋エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。</p>
            <p className="text-brand-muted leading-relaxed mb-4">まずは気になるジムの体験レッスンに行ってみてください。複数のジムを比較して、あなたに合うジムを見つけましょう。</p>
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
      <RelatedAreas currentSlug="ikebukuro" />
      <SiteFooter />
    </>
  )
}
