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
  alternates: { canonical: '/areas/musashikosugi/' },
  title: '【2026年6月最新】武蔵小杉の女性向けパーソナルジムおすすめ4選！料金比較',
  description: '【2026年6月最新】武蔵小杉のおすすめ女性向けパーソナルジム4選を比較。UNDEUX・ファディー・かたぎり塾など、料金・体験・特徴を各公式サイトで確認のうえ掲載しています。',
  keywords: '女性専用パーソナルジム,武蔵小杉,神奈川,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'UNDEUX SUPERBODY 武蔵小杉スタジオ',
    officialUrl: 'https://www.diet-undeux.jp/studio/musashikosugi/',
    price: '月4回 30,300円〜（税込）',
    trial: '無料体験あり（0円）',
    features: ['女性専用', '女性トレーナー在籍', 'ピラティス対応', '手ぶらOK', '食事相談無料'],
    description: '女性専用パーソナルジム。ダイエット・ボディメイク・ピラティスに対応し、食事相談は無料。手ぶらで通えます。',
    access: '各線「武蔵小杉駅」徒歩1分',
    popularPlan: { name: 'スタンダードプラン', description: '月額制のマンツーマントレーニング。', price: '月2回21,300円／月4回30,300円〜／月8回60,600円〜（税込）' },
    options: ['コミットプラン月6回79,200円', 'ウェア・シューズ・タオル無料レンタル'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '女性100%（女性専用）', purpose: ['ダイエット', 'ボディメイク', 'ピラティス'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['公式サイトでご確認ください'] },
  },
  {
    name: 'ファディー（FURDI）武蔵小杉医大通り店',
    officialUrl: 'https://furdi.jp/studio/musashikosugi-idai/',
    price: '月額8,778円（税込・通い放題）',
    trial: '無料体験あり',
    features: ['女性専用', 'AIパーソナル', '通い放題', '予約不要', '1回30分'],
    description: '女性専用のAIフィットネス型パーソナルジム。1回30分・予約不要で通い放題、月額8,778円と始めやすい価格です。',
    access: 'JR南武線 武蔵小杉駅徒歩5分（東急 新丸子駅徒歩3分）',
    options: ['カード発行手数料3,300円＋事務手数料5,500円', 'AIマシンによる個別プログラム'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '女性100%（女性専用）', purpose: ['ダイエット', '運動習慣'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['公式サイトでご確認ください'] },
  },
  {
    name: 'かたぎり塾 武蔵小杉店',
    officialUrl: 'https://katagirijuku.jp/gyms/musashikosugi',
    price: '月4回 33,000円（税込）',
    trial: '無料体験あり（カウンセリング＋体組成測定＋20分トレーニング）',
    features: ['月額制', '完全個室', '手ぶらOK', '子連れOK'],
    description: '月額制の完全個室マンツーマンジム。女性専用ではありませんが女性利用に強く、手ぶらOK・子連れOKです。',
    access: '武蔵小杉駅徒歩5分',
    options: ['月8プラン59,400円', 'チケット8,800円/回', '体験当日入会で入会金11,000円'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '男女共用（女性利用多数）', purpose: ['ダイエット', 'ボディメイク'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['完全個室'] },
  },
  {
    name: 'BEYOND 武蔵小杉店',
    officialUrl: 'https://beyond-musashikosugi.com/',
    price: '料金は公式サイトでご確認ください（分割で月々4,300円〜・入会金無料）',
    trial: '無料体験あり（通常11,000円→0円）',
    features: ['女性比率約7割', '女性トレーナー多数在籍', 'ボディメイク特化'],
    description: '女性専用ではありませんが会員比率は女性約7割で、女性トレーナーが多数在籍。ボディメイクに強いパーソナルジムです。',
    access: '武蔵小杉駅北口徒歩5分',
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '男女共用（女性約7割）', purpose: ['ボディメイク', 'ダイエット'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['公式サイトでご確認ください'] },
  },
]

const faqs = [
  { question: '武蔵小杉で女性専用のパーソナルジムはどこ？', answer: '公式サイトで女性専用（または女性専門）と確認できたのは、UNDEUX SUPERBODY 武蔵小杉スタジオ、ファディー（FURDI）武蔵小杉医大通り店です（2026年6月調査時点）。' },
  { question: '武蔵小杉のパーソナルジムの料金の目安は？', answer: '公式サイト掲載の料金では、UNDEUX SUPERBODY 武蔵小杉スタジオは月4回 30,300円〜（税込）。ファディー（FURDI）武蔵小杉医大通り店は月額8,778円（税込・通い放題）。かたぎり塾 武蔵小杉店は月4回 33,000円（税込）。キャンペーン等で変動するため最新は各公式サイトでご確認ください。' },
  { question: '武蔵小杉駅から近いジムは？', answer: '駅徒歩3分以内・直結では、UNDEUX SUPERBODY 武蔵小杉スタジオ（各線「武蔵小杉駅」徒歩1分）、ファディー（FURDI）武蔵小杉医大通り店（JR南武線 武蔵小杉駅徒歩5分）があります。' },
  { question: '体験やカウンセリングは無料で受けられる？', answer: 'UNDEUX SUPERBODY 武蔵小杉スタジオ、ファディー（FURDI）武蔵小杉医大通り店、かたぎり塾 武蔵小杉店、BEYOND 武蔵小杉店は無料の体験またはカウンセリングを実施しています（公式サイト記載・2026年6月時点）。有料体験でも当日入会で無料になるジムがあります。' },
  { question: '子連れで通えるジムはある？', answer: 'かたぎり塾 武蔵小杉店が子連れ対応（キッズスペース・ベビーサークル・託児補助など）を公式に案内しています。条件は各公式サイトでご確認ください。' },
  { question: '初心者でも大丈夫？', answer: 'はい。パーソナルジムはマンツーマン指導が基本のため、運動経験がなくても一人ひとりのレベルに合わせてメニューを組んでもらえます。不安な場合は体験時に運動歴を伝えて相談しましょう。' },
]

export default function MusashikosugiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-accent text-xs mb-2">更新日 2026年06月12日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              【2026年6月最新】武蔵小杉の女性向けパーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選！料金比較
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light">
              <Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}
              <span className="text-brand-muted">武蔵小杉</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">こんにちは、G-PersonalGym編集部です。</p>
            <p className="text-brand-muted leading-relaxed mb-6">「武蔵小杉で女性が通いやすいパーソナルジムを探している」「駅近で通いやすいジムが知りたい」という方のために、武蔵小杉エリアの女性向けパーソナルジム{gyms.length}選をまとめました。掲載情報はすべて各ジムの公式サイトで確認したものです（2026年6月時点）。</p>
            <div className="bg-ivory border-l-4 border-accent p-6 mb-8">
              <h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-brand-muted">
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>武蔵小杉で女性向けのパーソナルジムを探している</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>駅近で通いやすいジムが良い</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>料金を比較して選びたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>体験を受けてから決めたい</span></li>
              </ul>
            </div>
          </div>
        </section>

        <AreaContext slug="musashikosugi" />

        <WhyWomenOnly area="武蔵小杉" />

        <PriceComparisonTable gyms={gyms} areaName="武蔵小杉" />

        <section className="py-16 bg-ivory" id="gyms">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">武蔵小杉のおすすめ女性向けパーソナルジム{gyms.length}選</h2>
            <div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">目的別の選び方</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">女性専用にこだわる</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・UNDEUX SUPERBODY 武蔵小杉スタジオ</li><li className="text-brand-muted">・ファディー（FURDI）武蔵小杉医大通り店</li></ul>
              </div>
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">月額制で始めやすい</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・UNDEUX SUPERBODY 武蔵小杉スタジオ</li><li className="text-brand-muted">・ファディー（FURDI）武蔵小杉医大通り店</li><li className="text-brand-muted">・かたぎり塾 武蔵小杉店</li></ul>
              </div>
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">完全個室でマンツーマン</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・かたぎり塾 武蔵小杉店</li></ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-ivory">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-4 text-center">武蔵小杉の料金一覧【2026年6月・公式サイト調べ】</h2>
            <p className="text-brand-light text-xs text-center mb-8">キャンペーン等により変動します。最新の料金は必ず各公式サイトでご確認ください。</p>
            <ul className="bg-white rounded-xl p-6 md:p-8 border border-line space-y-3">
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">UNDEUX SUPERBODY 武蔵小杉スタジオ</span><span className="text-brand-muted text-sm">月4回 30,300円〜（税込）</span></li>
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">ファディー（FURDI）武蔵小杉医大通り店</span><span className="text-brand-muted text-sm">月額8,778円（税込・通い放題）</span></li>
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">かたぎり塾 武蔵小杉店</span><span className="text-brand-muted text-sm">月4回 33,000円（税込）</span></li>
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">BEYOND 武蔵小杉店</span><span className="text-brand-muted text-sm">料金は公式サイトでご確認ください（分割で月々4,300円〜・入会金無料）</span></li>
            </ul>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">武蔵小杉で選ぶ際の注意点</h2>
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
            <p className="text-brand-muted leading-relaxed mb-4">武蔵小杉エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。掲載内容はすべて各ジムの公式サイトで確認した情報です（2026年6月時点）。</p>
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
      <RelatedAreas currentSlug="musashikosugi" />
      <SiteFooter />
    </>
  )
}
