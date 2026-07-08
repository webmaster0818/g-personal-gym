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
  alternates: { canonical: '/areas/ogikubo/' },
  title: '【2026年6月最新】荻窪の女性向けパーソナルジムおすすめ4選！料金比較',
  description: '【2026年6月最新】荻窪のおすすめ女性向けパーソナルジム4選を比較。かたぎり塾・Apple・24/7SPORTSなど、料金・体験・特徴を各公式サイトで確認のうえ掲載しています。',
  keywords: '女性専用パーソナルジム,荻窪,東京,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'かたぎり塾 荻窪店',
    officialUrl: 'https://katagirijuku.jp/gyms/ogikubo',
    price: '月4回 33,000円（税込）',
    trial: '無料体験あり',
    features: ['月額制', '完全個室', 'AI食事指導', '手ぶらOK', '子連れOK'],
    description: '月額制の完全個室マンツーマンジム。医師・理学療法士監修プログラムで、AI食事指導アプリが無料。女性専用ではありませんが女性利用者が多い店舗です。',
    access: 'JR中央線「荻窪駅」徒歩5分',
    popularPlan: { name: '月4プラン', description: '月額制のマンツーマントレーニング。AI食事指導アプリ無料。', price: '月4回 33,000円（税込）' },
    options: ['AI食事指導アプリ無料', '無期限チケット8,800円/回', '入会金キャンペーンあり（通常55,000円）'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '男女共用（女性利用多数）', purpose: ['ダイエット', 'ボディメイク'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['完全個室'] },
  },
  {
    name: 'Apple GYM（アップルジム）荻窪店',
    officialUrl: 'https://applegym.jp/shop/ogikubo/',
    price: '月4回 11,440円〜（税込・共用設備費330円/月）',
    trial: '無料カウンセリング・体験あり',
    features: ['月額制', '低価格', '姿勢改善', '食事指導あり'],
    description: '月4回11,440円〜と通いやすい月額制。姿勢・猫背改善プログラムに強みがあります。完全マンツーマンのプレミアムプランも選べます。',
    access: '荻窪駅南口b出口徒歩2分',
    options: ['プレミアム（完全マンツーマン）月4回14,850円〜', '入会金半額キャンペーンあり（通常30,000円）'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '男女共用', purpose: ['姿勢改善', 'ダイエット', 'ボディメイク'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['公式サイトでご確認ください'] },
  },
  {
    name: '24/7SPORTS CLUB 荻窪店（FITTERIA併設）',
    officialUrl: 'https://247-sports.jp/gym/kantou/tokyo/ogikubo.html',
    price: '女性専用パーソナル「FITTERIA」月額8,690円〜（税込）',
    trial: '無料カウンセリング・体験・見学あり',
    features: ['女性専用パーソナル併設', '駅徒歩1分', '女性専用ピラティスあり', '個室貸切可'],
    description: '駅徒歩1分の総合ジム内に女性専用パーソナル「FITTERIA」を併設。女性インストラクターによる女性専用ピラティスや、個室貸切プランもあります。',
    access: '荻窪駅徒歩1分',
    options: ['個室貸切「Private Box Fit」4,840円〜（税込）', '女性専用ピラティス'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '施設は男女共用（FITTERIAは女性専用）', purpose: ['ダイエット', '運動習慣', 'ピラティス'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['個室貸切可'] },
  },
  {
    name: 'パーソナルジムMeRRY（メリー）荻窪店',
    officialUrl: 'https://personalgymmerry.com/',
    price: '月額定額 14,400円〜（税込）',
    trial: '体験 3,000円（税込）',
    features: ['月額制', '女性トレーナー在籍', 'ママ・子連れOK', '食事指導コースあり'],
    description: '月額定額14,400円〜の地域密着型パーソナルジム。女性トレーナーが在籍し、ママ・子連れでの利用にも対応しています。食事指導付きのダイエットコースもあります。',
    access: '杉並区荻窪3丁目（駅からの徒歩分数は公式サイトでご確認ください）',
    options: ['ダイエットコース（食事指導付き）172,000円', '入会金無料キャンペーンあり（通常33,000円）'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '男女共用', purpose: ['ダイエット', '産後ダイエット', 'ボディメイク'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['公式サイトでご確認ください'] },
  },
]

const faqs = [
  { question: '荻窪に女性専用のパーソナルジムはある？', answer: '2026年6月の調査時点では、荻窪駅徒歩圏で「完全女性専用」を公式に掲げるジムは確認できませんでした。本ページでは女性比率が高い・女性トレーナー在籍など、女性が通いやすいジムを掲載しています。' },
  { question: '荻窪のパーソナルジムの料金の目安は？', answer: '公式サイト掲載の料金では、かたぎり塾 荻窪店は月4回 33,000円（税込）。Apple GYM（アップルジム）荻窪店は月4回 11,440円〜（税込・共用設備費330円/月）。24/7SPORTS CLUB 荻窪店（FITTERIA併設）は女性専用パーソナル「FITTERIA」月額8,690円〜（税込）。パーソナルジムMeRRY（メリー）荻窪店は月額定額 14,400円〜（税込）。キャンペーン等で変動するため最新は各公式サイトでご確認ください。' },
  { question: '荻窪駅から近いジムは？', answer: '駅徒歩3分以内・直結では、Apple GYM（アップルジム）荻窪店（荻窪駅南口b出口徒歩2分）、24/7SPORTS CLUB 荻窪店（FITTERIA併設）（荻窪駅徒歩1分）があります。' },
  { question: '体験やカウンセリングは無料で受けられる？', answer: 'かたぎり塾 荻窪店、Apple GYM（アップルジム）荻窪店、24/7SPORTS CLUB 荻窪店（FITTERIA併設）、パーソナルジムMeRRY（メリー）荻窪店は無料の体験またはカウンセリングを実施しています（公式サイト記載・2026年6月時点）。有料体験でも当日入会で無料になるジムがあります。' },
  { question: '子連れで通えるジムはある？', answer: 'かたぎり塾 荻窪店、パーソナルジムMeRRY（メリー）荻窪店が子連れ対応（キッズスペース・ベビーサークル・託児補助など）を公式に案内しています。条件は各公式サイトでご確認ください。' },
  { question: '初心者でも大丈夫？', answer: 'はい。パーソナルジムはマンツーマン指導が基本のため、運動経験がなくても一人ひとりのレベルに合わせてメニューを組んでもらえます。不安な場合は体験時に運動歴を伝えて相談しましょう。' },
]

export default function OgikuboPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-accent text-xs mb-2">更新日 2026年06月12日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              【2026年6月最新】荻窪の女性向けパーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選！料金比較
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light">
              <Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}
              <span className="text-brand-muted">荻窪</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">こんにちは、G-PersonalGym編集部です。</p>
            <p className="text-brand-muted leading-relaxed mb-6">「荻窪で女性が通いやすいパーソナルジムを探している」「駅近で通いやすいジムが知りたい」という方のために、荻窪エリアの女性向けパーソナルジム{gyms.length}選をまとめました。掲載情報はすべて各ジムの公式サイトで確認したものです（2026年6月時点）。</p>
            <div className="bg-ivory border-l-4 border-accent p-6 mb-8">
              <h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-brand-muted">
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>荻窪で女性向けのパーソナルジムを探している</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>駅近で通いやすいジムが良い</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>料金を比較して選びたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>体験を受けてから決めたい</span></li>
              </ul>
            </div>
          </div>
        </section>

        <AreaContext slug="ogikubo" />

        <WhyWomenOnly area="荻窪" />

        <PriceComparisonTable gyms={gyms} areaName="荻窪" />

        <section className="py-16 bg-ivory" id="gyms">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">荻窪のおすすめ女性向けパーソナルジム{gyms.length}選</h2>
            <div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">目的別の選び方</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">月額制で始めやすい</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・かたぎり塾 荻窪店</li><li className="text-brand-muted">・Apple GYM（アップルジム）荻窪店</li><li className="text-brand-muted">・24/7SPORTS CLUB 荻窪店（FITTERIA併設）</li></ul>
              </div>
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">完全個室でマンツーマン</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・かたぎり塾 荻窪店</li></ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-ivory">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-4 text-center">荻窪の料金一覧【2026年6月・公式サイト調べ】</h2>
            <p className="text-brand-light text-xs text-center mb-8">キャンペーン等により変動します。最新の料金は必ず各公式サイトでご確認ください。</p>
            <ul className="bg-white rounded-xl p-6 md:p-8 border border-line space-y-3">
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">かたぎり塾 荻窪店</span><span className="text-brand-muted text-sm">月4回 33,000円（税込）</span></li>
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">Apple GYM（アップルジム）荻窪店</span><span className="text-brand-muted text-sm">月4回 11,440円〜（税込・共用設備費330円/月）</span></li>
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">24/7SPORTS CLUB 荻窪店（FITTERIA併設）</span><span className="text-brand-muted text-sm">女性専用パーソナル「FITTERIA」月額8,690円〜（税込）</span></li>
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">パーソナルジムMeRRY（メリー）荻窪店</span><span className="text-brand-muted text-sm">月額定額 14,400円〜（税込）</span></li>
            </ul>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">荻窪で選ぶ際の注意点</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="text-lg font-bold text-brand-text mb-3">出口・動線を事前に確認</h3>
                <p className="text-brand-muted leading-relaxed">同じ「駅徒歩◯分」でも、利用する路線や出口によって体感距離は変わります。通いたいジムがどの出口から近いかを事前に確認しましょう。</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="text-lg font-bold text-brand-text mb-3">体験は2〜3ジム比較を</h3>
                <p className="text-brand-muted leading-relaxed">トレーナーとの相性は継続のカギです。最低2〜3ジムの体験・カウンセリングに行って、雰囲気と指導スタイルを比較してから決めるのがおすすめです。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-ivory">
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

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-brand-text mb-6 text-center">まとめ</h2>
            <p className="text-brand-muted leading-relaxed mb-4">荻窪エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。掲載内容はすべて各ジムの公式サイトで確認した情報です（2026年6月時点）。</p>
            <p className="text-brand-muted leading-relaxed">料金やキャンペーンは変動するため、気になるジムが見つかったら公式サイトで最新情報を確認し、まずは体験・カウンセリングを受けてみてください。</p>
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
      <RelatedAreas currentSlug="ogikubo" />
      <SiteFooter />
    </>
  )
}
