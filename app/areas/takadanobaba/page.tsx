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
  alternates: { canonical: '/areas/takadanobaba/' },
  title: '【2026年7月最新】高田馬場の女性向けパーソナルジムおすすめ3選！料金比較',
  description: '【2026年7月最新】高田馬場のおすすめ女性向けパーソナルジム3選を比較。Diet・パーソナルランド・Kireiなど、料金・体験・特徴を各公式サイトで確認のうえ掲載しています。',
  keywords: '女性専用パーソナルジム,高田馬場,東京,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'Diet Space 高田馬場',
    officialUrl: 'https://tr-in.com/takadanobaba',
    price: 'コース料金は公式サイトでご確認ください',
    trial: '無料カウンセリング20分（毎月先着）＋体験＆面談60分 5,500円（税込）',
    features: ['40〜50代女性の支持を明記', '骨格タイプ別プログラム', '週1回でOK', '食事指導あり'],
    description: '指導歴20年以上・延べ4万人超の実績を持つマンツーマンジム。骨格タイプ別プログラムで「女性らしいラインづくり」に特化し、40〜50代女性の支持を公式に明記しています。',
    access: '高田馬場駅 徒歩1分（BIGBOX高田馬場4F）',
    userProfile: { ageRange: '40代〜50代の利用を公式明記', genderRatio: '男女共用（40〜50代女性の支持を明記）', purpose: ['ボディメイク', 'ダイエット', '姿勢改善'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['公式サイトでご確認ください'] },
  },
  {
    name: 'パーソナルランド',
    officialUrl: 'https://www.personalland.site/',
    price: '月2回（30分）9,900円〜／月8回（60分）54,948円〜（税込）',
    trial: '初回体験60分 2,200円（通常8,800円・当日入会で無料）／カウンセリングのみ無料',
    features: ['利用者は女性中心と公式記載', 'マシンピラティス×筋トレ', 'キッズスペース完備', '初心者8割以上'],
    description: 'マシンピラティスと筋トレを併用できるパーソナルジム。利用者は女性中心と公式に記載され、キッズスペース完備で産後ママにも対応。会員の8割以上が初心者です。',
    access: '高田馬場駅・下落合駅・目白駅が徒歩圏（新宿区下落合2-6-21）',
    options: ['月4回（60分）30,628円〜', '食事指導あり'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '男女共用（利用者は女性中心と公式記載）', purpose: ['ダイエット', 'ピラティス', '産後ダイエット'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['キッズスペース完備'] },
  },
  {
    name: 'Kirei by QUALITAS 早稲田店',
    officialUrl: 'https://kirei-qualitas.com/',
    price: '月4回 22,000円／通い放題 49,500円（税込・入会金16,500円）',
    trial: '体験レッスン5,500円（体験当日入会で無料）',
    features: ['女性専用', 'セミパーソナル（最大2名）', '手ぶら可', 'セルフトレーニング無料付き'],
    description: '女性専用のセミパーソナルジム（トレーナー1名:最大2名・個別ブース）。ウェア・シューズ・タオル・水無料で手ぶら可、セルフトレーニング無料利用つき。高田馬場からは東西線1駅です。',
    access: '東西線 早稲田駅 徒歩1分（高田馬場から東西線1駅）',
    address: '東京都新宿区馬場下町61-4 長谷部第11ビル5F',
    options: ['月6回29,700円／月8回36,300円', '公式LINEで予約'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '女性100%（女性専用）', purpose: ['ダイエット', '運動習慣', 'ボディメイク'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['公式サイトでご確認ください'] },
  },
]

const faqs = [
  { question: '高田馬場で女性専用のパーソナルジムはどこ？', answer: '公式サイトで女性専用（または女性専門）と確認できたのは、Kirei by QUALITAS 早稲田店です（2026年6月調査時点）。' },
  { question: '高田馬場のパーソナルジムの料金の目安は？', answer: '公式サイト掲載の料金では、パーソナルランドは月2回（30分）9,900円〜／月8回（60分）54,948円〜（税込）。Kirei by QUALITAS 早稲田店は月4回 22,000円／通い放題 49,500円（税込・入会金16,500円）。キャンペーン等で変動するため最新は各公式サイトでご確認ください。' },
  { question: '高田馬場駅から近いジムは？', answer: '駅徒歩3分以内・直結では、Diet Space 高田馬場（高田馬場駅 徒歩1分）、Kirei by QUALITAS 早稲田店（東西線 早稲田駅 徒歩1分）があります。' },
  { question: '体験やカウンセリングは無料で受けられる？', answer: 'Diet Space 高田馬場、パーソナルランド、Kirei by QUALITAS 早稲田店は無料の体験またはカウンセリングを実施しています（公式サイト記載・2026年6月時点）。有料体験でも当日入会で無料になるジムがあります。' },
  { question: '子連れで通えるジムはある？', answer: 'パーソナルランドが子連れ対応（キッズスペース・ベビーサークル・託児補助など）を公式に案内しています。条件は各公式サイトでご確認ください。' },
  { question: '初心者でも大丈夫？', answer: 'はい。パーソナルジムはマンツーマン指導が基本のため、運動経験がなくても一人ひとりのレベルに合わせてメニューを組んでもらえます。不安な場合は体験時に運動歴を伝えて相談しましょう。' },
]

export default function TakadanobabaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-accent text-xs mb-2">更新日 2026年06月12日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              【2026年7月最新】高田馬場の女性向けパーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選！料金比較
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light">
              <Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}
              <span className="text-brand-muted">高田馬場</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">こんにちは、G-PersonalGym編集部です。</p>
            <p className="text-brand-muted leading-relaxed mb-6">「高田馬場で女性が通いやすいパーソナルジムを探している」「駅近で通いやすいジムが知りたい」という方のために、高田馬場エリアの女性向けパーソナルジム{gyms.length}選をまとめました。掲載情報はすべて各ジムの公式サイトで確認したものです（2026年6月時点）。</p>
            <div className="bg-accent-tint border border-line rounded-xl p-5 mb-8">
              <p className="text-brand-muted text-sm leading-relaxed">※調査時点で、高田馬場駅徒歩圏に「完全女性専用のマンツーマンパーソナルジム」は公式に確認できませんでした。本ページでは女性向けに強いジムと、隣駅・早稲田の女性専用セミパーソナルを掲載しています。</p>
            </div>
            <div className="bg-ivory border-l-4 border-accent p-6 mb-8">
              <h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-brand-muted">
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>高田馬場で女性向けのパーソナルジムを探している</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>駅近で通いやすいジムが良い</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>料金を比較して選びたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>体験を受けてから決めたい</span></li>
              </ul>
            </div>
          </div>
        </section>

        <AreaContext slug="takadanobaba" />

        <WhyWomenOnly area="高田馬場" />

        <PriceComparisonTable gyms={gyms} areaName="高田馬場" />

        <section className="py-16 bg-ivory" id="gyms">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">高田馬場のおすすめ女性向けパーソナルジム{gyms.length}選</h2>
            <div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">目的別の選び方</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">女性専用にこだわる</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・Kirei by QUALITAS 早稲田店</li></ul>
              </div>
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">月額制で始めやすい</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・パーソナルランド</li><li className="text-brand-muted">・Kirei by QUALITAS 早稲田店</li></ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-ivory">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-4 text-center">高田馬場の料金一覧【2026年6月・公式サイト調べ】</h2>
            <p className="text-brand-light text-xs text-center mb-8">キャンペーン等により変動します。最新の料金は必ず各公式サイトでご確認ください。</p>
            <ul className="bg-white rounded-xl p-6 md:p-8 border border-line space-y-3">
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">Diet Space 高田馬場</span><span className="text-brand-muted text-sm">コース料金は公式サイトでご確認ください</span></li>
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">パーソナルランド</span><span className="text-brand-muted text-sm">月2回（30分）9,900円〜／月8回（60分）54,948円〜（税込）</span></li>
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">Kirei by QUALITAS 早稲田店</span><span className="text-brand-muted text-sm">月4回 22,000円／通い放題 49,500円（税込・入会金16,500円）</span></li>
            </ul>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">高田馬場で選ぶ際の注意点</h2>
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
            <p className="text-brand-muted leading-relaxed mb-4">高田馬場エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。掲載内容はすべて各ジムの公式サイトで確認した情報です（2026年6月時点）。</p>
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
      <RelatedAreas currentSlug="takadanobaba" />
      <SiteFooter />
    </>
  )
}
