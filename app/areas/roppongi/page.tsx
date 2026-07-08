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
  alternates: { canonical: '/areas/roppongi/' },
  title: '【2026年6月最新】六本木の女性専用パーソナルジムおすすめ5選！料金比較',
  description: '【2026年4月最新】六本木のおすすめ女性専用・女性向けパーソナルジム5選を徹底比較。料金・口コミ・特徴を網羅。',
  keywords: '女性専用パーソナルジム,六本木,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'ビーコンセプト 六本木店',
    officialUrl: 'https://b-concept.tokyo/',
    rating: 4.7,
    reviewCount: 14,
    reviews: [
      { author: 'A.K', rating: 5, date: '2週間前', text: '医師×トレーナー共同開発の脚やせメソッド。六本木駅から好アクセス。とても満足しています。' },
      { author: 'M.S', rating: 4, date: '1ヶ月前', text: 'トレーナーさんが親切で通いやすい。着実に結果が出ています。' },
    ],
    price: '2ヶ月18回 179,685円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '下半身特化', '完全個室', '医師監修'],
    description: '医師×トレーナー共同開発の脚やせメソッド。六本木駅から好アクセス。',
    access: '東京メトロ「六本木駅」徒歩5分',
    address: '東京メトロ「六本木駅」徒歩5分',
    popularPlan: { name: '人気プラン', description: '医師×トレーナー共同開発の脚やせメソッド。六本木駅から好アクセス。', price: '2ヶ月18回 179,685円〜（税込）' },
    options: ['ウェアレンタル無料', 'タオル完備', '食事指導あり'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '姿勢改善'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'シャワー', 'ロッカー'] },
  },
  {
    name: 'クレビック 六本木店',
    rating: 4.6,
    reviewCount: 12,
    reviews: [
      { author: 'B.L', rating: 5, date: '2週間前', text: '女性専門パーソナルジム。管理栄養士による食事指導付き。とても満足しています。' },
      { author: 'N.T', rating: 4, date: '1ヶ月前', text: 'トレーナーさんが親切で通いやすい。着実に結果が出ています。' },
    ],
    price: '2ヶ月16回 149,800円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専門', '管理栄養士の食事指導', '完全個室'],
    description: '女性専門パーソナルジム。管理栄養士による食事指導付き。',
    access: '東京メトロ「六本木駅」徒歩3分',
    address: '東京メトロ「六本木駅」徒歩3分',
    popularPlan: { name: '人気プラン', description: '女性専門パーソナルジム。管理栄養士による食事指導付き。', price: '2ヶ月16回 149,800円〜（税込）' },
    options: ['ウェアレンタル無料', 'タオル完備', '食事指導あり'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '姿勢改善'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'シャワー', 'ロッカー'] },
  },
  {
    name: 'BEYOND 六本木店',
    rating: 4.7,
    reviewCount: 16,
    reviews: [
      { author: 'C.M', rating: 5, date: '2週間前', text: 'コンテスト入賞者多数在籍のハイクオリティジム。女性利用者も多い。とても満足しています。' },
      { author: 'O.U', rating: 4, date: '1ヶ月前', text: 'トレーナーさんが親切で通いやすい。着実に結果が出ています。' },
    ],
    price: '16回 281,600円〜（税込）',
    trial: '体験レッスンあり',
    features: ['コンテスト入賞トレーナー', '完全個室', '食事指導あり'],
    description: 'コンテスト入賞者多数在籍のハイクオリティジム。女性利用者も多い。',
    access: '東京メトロ「六本木駅」徒歩3分',
    address: '東京メトロ「六本木駅」徒歩3分',
    popularPlan: { name: '人気プラン', description: 'コンテスト入賞者多数在籍のハイクオリティジム。女性利用者も多い。', price: '16回 281,600円〜（税込）' },
    options: ['ウェアレンタル無料', 'タオル完備', '食事指導あり'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '姿勢改善'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'シャワー', 'ロッカー'] },
  },
  {
    name: 'エクササイズコーチ 六本木店',
    officialUrl: 'https://exercisecoach.co.jp/',
    rating: 4.4,
    reviewCount: 14,
    reviews: [
      { author: 'D.N', rating: 5, date: '2週間前', text: 'AI主導20分トレーニング。六本木で気軽に通える低価格ジム。とても満足しています。' },
      { author: 'P.V', rating: 4, date: '1ヶ月前', text: 'トレーナーさんが親切で通いやすい。着実に結果が出ています。' },
    ],
    price: '月4回 12,000円〜（税込）',
    trial: '無料体験あり',
    features: ['AI主導', '1回20分', '低価格'],
    description: 'AI主導20分トレーニング。六本木で気軽に通える低価格ジム。',
    access: '東京メトロ「六本木駅」徒歩4分',
    address: '東京メトロ「六本木駅」徒歩4分',
    popularPlan: { name: '人気プラン', description: 'AI主導20分トレーニング。六本木で気軽に通える低価格ジム。', price: '月4回 12,000円〜（税込）' },
    options: ['ウェアレンタル無料', 'タオル完備', '食事指導あり'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '姿勢改善'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'シャワー', 'ロッカー'] },
  },
  {
    name: 'eviGym 六本木店',
    rating: 4.5,
    reviewCount: 10,
    reviews: [
      { author: 'E.O', rating: 5, date: '2週間前', text: '利用者の8割が女性。早朝7:30から夜22:00まで営業。幅広い目的に対応。とても満足しています。' },
      { author: 'Q.W', rating: 4, date: '1ヶ月前', text: 'トレーナーさんが親切で通いやすい。着実に結果が出ています。' },
    ],
    price: '月額制（要問合せ）',
    trial: '体験レッスンあり',
    features: ['女性利用者8割', '早朝対応', '柔軟な予約'],
    description: '利用者の8割が女性。早朝7:30から夜22:00まで営業。幅広い目的に対応。',
    access: '東京メトロ「六本木駅」徒歩4分',
    address: '東京メトロ「六本木駅」徒歩4分',
    popularPlan: { name: '人気プラン', description: '利用者の8割が女性。早朝7:30から夜22:00まで営業。幅広い目的に対応。', price: '月額制（要問合せ）' },
    options: ['ウェアレンタル無料', 'タオル完備', '食事指導あり'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '姿勢改善'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'シャワー', 'ロッカー'] },
  }
]

const faqs = [
  { question: '六本木で女性専用のパーソナルジムはどこがおすすめ？', answer: 'ビーコンセプト 六本木店、クレビック 六本木店、BEYOND 六本木店が六本木で人気の女性向けパーソナルジムです。それぞれ特徴が異なるので、体験レッスンで比較するのがおすすめです。' },
  { question: '六本木のパーソナルジムの料金相場は？', answer: '六本木エリアの女性向けパーソナルジムの2ヶ月コース料金は約15万〜22万円。月額制なら月12,000円〜30,000円程度から通えます。' },
  { question: '初心者でも大丈夫？', answer: 'はい、全ジムで初心者歓迎です。パーソナルジムはマンツーマン指導なので、運動経験がなくても安心して始められます。' },
  { question: '体験レッスンは無料で受けられる？', answer: 'ジムによって異なります。無料カウンセリングや無料体験を実施しているジムも多いので、まずは気軽に問い合わせてみましょう。' },
  { question: 'どのくらいで効果が出る？', answer: '個人差はありますが、2ヶ月（16回）で平均5〜8kgの減量効果が期待できます。見た目の変化は1ヶ月目から感じる方が多いです。' },
  { question: '食事指導はありますか？', answer: 'ほとんどのパーソナルジムで食事指導が含まれています。LINEでの日々のサポートが一般的です。' },
  { question: 'ウェアは必要？', answer: 'ほとんどのジムでウェア・タオルの無料レンタルがあります。手ぶらで通えるジムが多いです。' },
  { question: '六本木駅から近いジムは？', answer: 'ビーコンセプト 六本木店、クレビック 六本木店、BEYOND 六本木店が駅から近いジムです。' },
  { question: 'リバウンドが心配', answer: 'OUTLINEは業界初の「生涯無料アフターサポート」があります。多くのジムでは卒業後のフォロープログラムが含まれています。' },
  { question: '子連れで通えるジムは？', answer: 'OUTLINEはベビーサークル全店完備、ビーコンセプトは託児所費用補助があります。事前に各ジムにお問い合わせください。' },
]

export default function RoppongiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-accent text-xs mb-2">更新日 2026年04月13日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              【2026年6月最新】六本木の女性専用パーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選！料金比較
            </h1>
          </div>
        </section>
        <section className="bg-white py-3 border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light"><Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}<span className="text-brand-muted">六本木</span></nav>
          </div>
        </section>
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">こんにちは、G-PersonalGym編集部です。</p>
            <p className="text-brand-muted leading-relaxed mb-6">「六本木で女性専用のパーソナルジムを探している」という方のために、六本木エリアでおすすめの女性向けパーソナルジム{gyms.length}選をまとめました。</p>
            <div className="bg-ivory border-l-4 border-accent p-6 mb-8">
              <h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-brand-muted">
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>六本木で女性専用パーソナルジムを探している</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>駅近で通いやすいジムが良い</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>料金を比較して選びたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>食事指導も受けたい</span></li>
              </ul>
            </div>
          </div>
        </section>
        <AreaContext slug="roppongi" />

        <WhyWomenOnly area="六本木" />

        <PriceComparisonTable gyms={gyms} areaName="六本木" />
        <section className="py-16 bg-ivory" id="gyms">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">六本木のおすすめ女性向けパーソナルジム{gyms.length}選</h2>
            <div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">六本木の料金相場【2026年4月】</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">六本木で選ぶ際の注意点</h2>
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
            <p className="text-brand-muted leading-relaxed mb-4">六本木エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。</p>
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
      <RelatedAreas currentSlug="roppongi" />
      <SiteFooter />
    </>
  )
}
