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
  title: '【2026年6月最新】長野の女性向けパーソナルジムおすすめ3選！料金比較',
  description: '【2026年6月最新】長野のおすすめ女性向けパーソナルジム3選を比較。E9th・HPER・フィットネスサロンなど、料金・体験・特徴を各公式サイトで確認のうえ掲載しています。',
  keywords: '女性専用パーソナルジム,長野,長野,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'E9th PRIVATE GYM 長野駅前店',
    officialUrl: 'https://e9thprivategym.work/',
    price: '回数券10回 60,000円／各種コース2ヶ月 76,000円〜（入会金10,000円）',
    trial: '無料カウンセリングあり／体験トレーニング4,500円（60分・税込）',
    features: ['完全個室', '全店舗に女性トレーナー在籍', '産後ダイエットコースあり', '全コース食事指導付き'],
    description: '駅徒歩3分の完全個室パーソナルジム。全店舗に女性トレーナーが在籍し、産後ダイエットコースがあります。ピラティス・ヨガクラスは女性限定です。',
    access: '長野駅善光寺口から徒歩3分（提携駐車場あり）',
    options: ['産後ダイエットコース208,500円〜'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '男女共用（女性トレーナー在籍・女性限定クラスあり）', purpose: ['ダイエット', '産後ダイエット', 'ボディメイク'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['完全個室'] },
  },
  {
    name: 'HPER（ハイパー）長野七瀬店',
    officialUrl: 'https://hper-gym.com/location/naganonanase/',
    price: 'スタンダード2ヶ月16回 78,000円（入会金10,000円）',
    trial: '無料カウンセリングあり・1日体験コースあり',
    features: ['完全個室', 'ダイエット専門', '低価格', '毎日の食事サポート'],
    description: 'ダイエット専門の完全個室マンツーマンジム。2ヶ月16回78,000円と相場より抑えた価格で、毎日の食事改善サポートつき。回数券に有効期限がないのも特徴です。',
    access: '長野駅東口から徒歩10分',
    options: ['モニター2ヶ月16回68,000円', '回数券3回23,000円〜'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '男女共用', purpose: ['ダイエット', 'ボディメイク'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['完全個室'] },
  },
  {
    name: 'フィットネスサロン CLUB-J',
    officialUrl: 'https://clubjfit.com/',
    price: 'プレミアム（50分×18回/2ヶ月）168,000円（税込/税抜は公式サイトでご確認ください）',
    trial: '無料相談＆体験トレーニングあり（無料）',
    features: ['美容エステ併設', '食事コントロール指導', 'サロン型'],
    description: 'パーソナルトレーニングと美容エステを併設した「フィットネスサロン」業態。女性向けの色が強いサロン型ジムです。',
    access: '長野市稲葉（車アクセス前提・アクセスは公式サイトでご確認ください）',
    options: ['ライト（25分×16回/2ヶ月）105,600円'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '公式サイトでご確認ください（女性向けサロン型）', purpose: ['ダイエット', 'ボディメイク'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['公式サイトでご確認ください'] },
  },
]

const faqs = [
  { question: '長野に女性専用のパーソナルジムはある？', answer: '2026年6月の調査時点では、長野駅徒歩圏で「完全女性専用」を公式に掲げるジムは確認できませんでした。本ページでは女性比率が高い・女性トレーナー在籍など、女性が通いやすいジムを掲載しています。' },
  { question: '長野のパーソナルジムの料金の目安は？', answer: '公式サイト掲載の料金では、E9th PRIVATE GYM 長野駅前店は回数券10回 60,000円／各種コース2ヶ月 76,000円〜（入会金10,000円）。HPER（ハイパー）長野七瀬店はスタンダード2ヶ月16回 78,000円（入会金10,000円）。キャンペーン等で変動するため最新は各公式サイトでご確認ください。' },
  { question: '長野駅から近いジムは？', answer: '駅徒歩3分以内・直結では、E9th PRIVATE GYM 長野駅前店（長野駅善光寺口から徒歩3分）があります。' },
  { question: '体験やカウンセリングは無料で受けられる？', answer: 'E9th PRIVATE GYM 長野駅前店、HPER（ハイパー）長野七瀬店、フィットネスサロン CLUB-Jは無料の体験またはカウンセリングを実施しています（公式サイト記載・2026年6月時点）。有料体験でも当日入会で無料になるジムがあります。' },
  { question: '初心者でも大丈夫？', answer: 'はい。パーソナルジムはマンツーマン指導が基本のため、運動経験がなくても一人ひとりのレベルに合わせてメニューを組んでもらえます。不安な場合は体験時に運動歴を伝えて相談しましょう。' },
]

export default function NaganoPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-accent text-xs mb-2">更新日 2026年06月12日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              【2026年6月最新】長野の女性向けパーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選！料金比較
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light">
              <Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}
              <span className="text-brand-muted">長野</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">こんにちは、G-PersonalGym編集部です。</p>
            <p className="text-brand-muted leading-relaxed mb-6">「長野で女性が通いやすいパーソナルジムを探している」「駅近で通いやすいジムが知りたい」という方のために、長野エリアの女性向けパーソナルジム{gyms.length}選をまとめました。掲載情報はすべて各ジムの公式サイトで確認したものです（2026年6月時点）。</p>
            <div className="bg-accent-tint border border-line rounded-xl p-5 mb-8">
              <p className="text-brand-muted text-sm leading-relaxed">※調査時点で、長野駅周辺に「完全女性専用」を公式に確認できるパーソナルジムは見つかりませんでした。本ページでは女性トレーナー在籍・産後コースなど女性向けに強いジムを掲載しています。</p>
            </div>
            <div className="bg-ivory border-l-4 border-accent p-6 mb-8">
              <h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-brand-muted">
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>長野で女性向けのパーソナルジムを探している</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>駅近で通いやすいジムが良い</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>料金を比較して選びたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>体験を受けてから決めたい</span></li>
              </ul>
            </div>
          </div>
        </section>

        <AreaContext slug="nagano" />

        <WhyWomenOnly area="長野" />

        <PriceComparisonTable gyms={gyms} areaName="長野" />

        <section className="py-16 bg-ivory" id="gyms">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">長野のおすすめ女性向けパーソナルジム{gyms.length}選</h2>
            <div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">目的別の選び方</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">月額制で始めやすい</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・HPER（ハイパー）長野七瀬店</li></ul>
              </div>
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">完全個室でマンツーマン</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・E9th PRIVATE GYM 長野駅前店</li><li className="text-brand-muted">・HPER（ハイパー）長野七瀬店</li></ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-ivory">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-4 text-center">長野の料金一覧【2026年6月・公式サイト調べ】</h2>
            <p className="text-brand-light text-xs text-center mb-8">キャンペーン等により変動します。最新の料金は必ず各公式サイトでご確認ください。</p>
            <ul className="bg-white rounded-xl p-6 md:p-8 border border-line space-y-3">
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">E9th PRIVATE GYM 長野駅前店</span><span className="text-brand-muted text-sm">回数券10回 60,000円／各種コース2ヶ月 76,000円〜（入会金10,000円）</span></li>
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">HPER（ハイパー）長野七瀬店</span><span className="text-brand-muted text-sm">スタンダード2ヶ月16回 78,000円（入会金10,000円）</span></li>
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">フィットネスサロン CLUB-J</span><span className="text-brand-muted text-sm">プレミアム（50分×18回/2ヶ月）168,000円（税込/税抜は公式サイトでご確認ください）</span></li>
            </ul>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">長野で選ぶ際の注意点</h2>
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
            <p className="text-brand-muted leading-relaxed mb-4">長野エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。掲載内容はすべて各ジムの公式サイトで確認した情報です（2026年6月時点）。</p>
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
      <RelatedAreas currentSlug="nagano" />
      <SiteFooter />
    </>
  )
}
