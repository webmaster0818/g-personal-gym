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
  alternates: { canonical: '/areas/asahikawa/' },
  title: '【2026年6月最新】旭川の女性向けパーソナルジムおすすめ3選！料金比較',
  description: '【2026年6月最新】旭川のおすすめ女性向けパーソナルジム3選を比較。personal・KOKOA・ファディーなど、料金・体験・特徴を各公式サイトで確認のうえ掲載しています。',
  keywords: '女性専用パーソナルジム,旭川,北海道,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'personal gym TRIM（トリム）',
    officialUrl: 'https://personalgym-trim.com/',
    price: '60分コース回数券 1回10,000円〜（食事サポート付・税込/税抜は公式サイトでご確認ください）',
    trial: 'トライアルレッスン 3,000円（カウンセリング・姿勢評価・トレーニング）',
    features: ['整体×トレーニング', 'ヨガ・ピラティス要素', '女性向けボディメイク特化', '食事サポート付'],
    description: '整体×トレーニングにヨガ・ピラティス要素を組み合わせた、女性向けボディメイク特化のパーソナルジム（「女性専用」の文言は公式に未確認）。食事サポート付きの回数券制です。',
    access: '旭川駅より徒歩7分（買物公園至近）',
    options: ['90分コース（＋ストレッチ整体）1回15,000円〜'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '公式サイトでご確認ください（女性向け特化）', purpose: ['ボディメイク', '姿勢改善', 'ダイエット'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['公式サイトでご確認ください'] },
  },
  {
    name: 'KOKOA GYM（ココアジム）',
    officialUrl: 'https://kokoagym3.wixsite.com/website-1',
    price: 'パーソナル1回 8,000円（税抜・入会金10,000円＋事務手数料4,000円＋月会費2,000円いずれも税抜）',
    trial: '初回体験 2,000円（LINE追加で1,000円）',
    features: ['女性専用', '女性トレーナー', 'ルーム貸切マンツーマン', '食事指導'],
    description: '公式に「女性専用パーソナルジム」と明記するジム。女性トレーナーによるルーム貸切の完全マンツーマンで、食事指導を徹底しています。',
    access: '旭川市豊岡（中心部からやや東・アクセスは公式サイトでご確認ください）',
    options: ['セミパーソナル2名 1名あたり4,000円（税抜）'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '女性100%（女性専用）', purpose: ['ダイエット', 'ボディメイク'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['公式サイトでご確認ください'] },
  },
  {
    name: 'ファディー（FÜRDI）MEGAドン・キホーテ旭川店',
    officialUrl: 'https://furdi.jp/studio/asahikawa/',
    price: '月額8,778円〜（税込・通い放題・入会金不要）',
    trial: '無料体験・無料カウンセリングあり',
    features: ['女性専用', 'AIパーソナル', '通い放題', '予約不要'],
    description: '女性専用のAIフィットネス型パーソナルジム。AIマシン＋トレーナーの個別メニューで、1回30分・予約不要・通い放題。MEGAドンキ併設で駐車場があります。',
    access: 'バス停「花咲6丁目」徒歩1分（春光エリア・MEGAドンキ併設駐車場あり）',
    options: ['カード発行3,300円＋事務手数料5,500円', 'スタンダード月9,878円'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '女性100%（女性専用）', purpose: ['ダイエット', '運動習慣'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['公式サイトでご確認ください'] },
  },
]

const faqs = [
  { question: '旭川で女性専用のパーソナルジムはどこ？', answer: '公式サイトで女性専用（または女性専門）と確認できたのは、KOKOA GYM（ココアジム）、ファディー（FÜRDI）MEGAドン・キホーテ旭川店です（2026年6月調査時点）。' },
  { question: '旭川のパーソナルジムの料金の目安は？', answer: '公式サイト掲載の料金では、KOKOA GYM（ココアジム）はパーソナル1回 8,000円（税抜・入会金10,000円＋事務手数料4,000円＋月会費2,000円いずれも税抜）。ファディー（FÜRDI）MEGAドン・キホーテ旭川店は月額8,778円〜（税込・通い放題・入会金不要）。キャンペーン等で変動するため最新は各公式サイトでご確認ください。' },
  { question: '旭川駅から近いジムは？', answer: '駅徒歩3分以内・直結では、ファディー（FÜRDI）MEGAドン・キホーテ旭川店（バス停「花咲6丁目」徒歩1分）があります。' },
  { question: '体験やカウンセリングは無料で受けられる？', answer: 'personal gym TRIM（トリム）、KOKOA GYM（ココアジム）、ファディー（FÜRDI）MEGAドン・キホーテ旭川店は無料の体験またはカウンセリングを実施しています（公式サイト記載・2026年6月時点）。有料体験でも当日入会で無料になるジムがあります。' },
  { question: '初心者でも大丈夫？', answer: 'はい。パーソナルジムはマンツーマン指導が基本のため、運動経験がなくても一人ひとりのレベルに合わせてメニューを組んでもらえます。不安な場合は体験時に運動歴を伝えて相談しましょう。' },
]

export default function AsahikawaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-accent text-xs mb-2">更新日 2026年06月12日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              【2026年6月最新】旭川の女性向けパーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選！料金比較
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light">
              <Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}
              <span className="text-brand-muted">旭川</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">こんにちは、G-PersonalGym編集部です。</p>
            <p className="text-brand-muted leading-relaxed mb-6">「旭川で女性が通いやすいパーソナルジムを探している」「駅近で通いやすいジムが知りたい」という方のために、旭川エリアの女性向けパーソナルジム{gyms.length}選をまとめました。掲載情報はすべて各ジムの公式サイトで確認したものです（2026年6月時点）。</p>
            <div className="bg-accent-tint border border-line rounded-xl p-5 mb-8">
              <p className="text-brand-muted text-sm leading-relaxed">※調査時点で、旭川駅徒歩圏で「女性専用」を公式に明記するパーソナルジムは確認できませんでした（駅徒歩7分のTRIMは女性向け特化ですが「女性専用」の文言は公式未確認）。市内の女性専用ジムは中心部からやや離れたエリアにあります。</p>
            </div>
            <div className="bg-ivory border-l-4 border-accent p-6 mb-8">
              <h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-brand-muted">
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>旭川で女性向けのパーソナルジムを探している</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>駅近で通いやすいジムが良い</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>料金を比較して選びたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>体験を受けてから決めたい</span></li>
              </ul>
            </div>
          </div>
        </section>

        <AreaContext slug="asahikawa" />

        <WhyWomenOnly area="旭川" />

        <PriceComparisonTable gyms={gyms} areaName="旭川" />

        <section className="py-16 bg-ivory" id="gyms">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">旭川のおすすめ女性向けパーソナルジム{gyms.length}選</h2>
            <div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">目的別の選び方</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">女性専用にこだわる</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・KOKOA GYM（ココアジム）</li><li className="text-brand-muted">・ファディー（FÜRDI）MEGAドン・キホーテ旭川店</li></ul>
              </div>
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">月額制で始めやすい</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・ファディー（FÜRDI）MEGAドン・キホーテ旭川店</li></ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-ivory">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-4 text-center">旭川の料金一覧【2026年6月・公式サイト調べ】</h2>
            <p className="text-brand-light text-xs text-center mb-8">キャンペーン等により変動します。最新の料金は必ず各公式サイトでご確認ください。</p>
            <ul className="bg-white rounded-xl p-6 md:p-8 border border-line space-y-3">
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">personal gym TRIM（トリム）</span><span className="text-brand-muted text-sm">60分コース回数券 1回10,000円〜（食事サポート付・税込/税抜は公式サイトでご確認ください）</span></li>
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">KOKOA GYM（ココアジム）</span><span className="text-brand-muted text-sm">パーソナル1回 8,000円（税抜・入会金10,000円＋事務手数料4,000円＋月会費2,000円いずれも税抜）</span></li>
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">ファディー（FÜRDI）MEGAドン・キホーテ旭川店</span><span className="text-brand-muted text-sm">月額8,778円〜（税込・通い放題・入会金不要）</span></li>
            </ul>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">旭川で選ぶ際の注意点</h2>
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
            <p className="text-brand-muted leading-relaxed mb-4">旭川エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。掲載内容はすべて各ジムの公式サイトで確認した情報です（2026年6月時点）。</p>
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
      <RelatedAreas currentSlug="asahikawa" />
      <SiteFooter />
    </>
  )
}
