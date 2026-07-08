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
  alternates: { canonical: '/areas/hamamatsu/' },
  title: '【2026年6月最新】浜松の女性向けパーソナルジムおすすめ3選！料金比較',
  description: '【2026年6月最新】浜松のおすすめ女性向けパーソナルジム3選を比較。BEYOND・パーソナルトレーニングジムNINE・STUDIOなど、料金・体験・特徴を各公式サイトで確認のうえ掲載しています。',
  keywords: '女性専用パーソナルジム,浜松,静岡,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'BEYOND 浜松店',
    officialUrl: 'https://beyond-gym.com/gym/gym-hamamatsu/',
    price: '回数券10回 102,300円（1回あたり10,230円）／マンスリープラン月2回 17,600円',
    trial: '初回限定の無料カウンセリング・体験トレーニングあり',
    features: ['女性会員6〜7割を公式明記', '個室あり', '食事管理あり', '手ぶらOK', '無料駐車場'],
    description: '会員の6〜7割が女性と公式に明記するボディメイクジム。食事管理つきコースがあり、ウェア・シューズ・タオル無料の手ぶらOK。無料駐車場・シャワーあり（女性トレーナーは調査時点で未配置と公式記載）。',
    access: '浜松駅南口から徒歩10分',
    address: '浜松市中央区龍禅寺町74-1 フジビル101&2F',
    options: ['ACHIEVE20回187,000円', '食事管理付きライフプランニング16（2ヶ月）290,400円'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '男女共用（女性6〜7割と公式明記）', purpose: ['ボディメイク', 'ダイエット'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['個室あり', '無料駐車場'] },
  },
  {
    name: 'パーソナルトレーニングジムNINE（浜松高林店ほか市内4店舗）',
    officialUrl: 'https://www.ninegym.online/',
    price: '月18,000円〜継続可能（コース詳細は公式サイトでご確認ください）',
    trial: '無料体験トレーニングあり',
    features: ['完全個室', '遺伝子検査・InBody分析', '栄養指導・食事管理アプリ', 'リバウンド防止サポート'],
    description: '完全個室マンツーマンのジム。InBody体成分分析＋肥満遺伝子検査、専用アプリでの食事管理があり、女性のダイエット・ボディメイク支援を訴求しています（女性専用ではありません）。市内に4店舗。',
    access: '浜松市中央区高林5-2-19（浜松駅徒歩圏外・店舗前無料駐車場あり）',
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '男女共用（女性のダイエット支援を訴求）', purpose: ['ダイエット', 'ボディメイク'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['完全個室'] },
  },
  {
    name: 'STUDIO AYAKO（スタジオ・アヤコ）',
    officialUrl: 'https://www.studioayako.com/',
    price: 'パーソナルトレーニング50分 7,700円（入会手数料15,000円＋月会費5,000円）',
    trial: 'トライアルパーソナルトレーニングを割引料金で受付中',
    features: ['女性トレーナーによる専門スタジオ', '完全カスタマイズプログラム', '食事面の提案あり'],
    description: '女性トレーナー（代表AYAKO）によるパーソナルトレーニング専門スタジオ。完全カスタマイズのプログラムと食事面の提案があります。車アクセス向けの立地です。',
    access: '浜松市中央区住吉2-33-25（浜松駅から車約15分・無料駐車場あり）',
    options: ['75分11,550円', '月〜土営業・日曜定休'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '公式サイトでご確認ください（女性トレーナー専門スタジオ）', purpose: ['ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['公式サイトでご確認ください'] },
  },
]

const faqs = [
  { question: '浜松に女性専用のパーソナルジムはある？', answer: '2026年6月の調査時点では、浜松駅徒歩圏で「完全女性専用」を公式に掲げるジムは確認できませんでした。本ページでは女性比率が高い・女性トレーナー在籍など、女性が通いやすいジムを掲載しています。' },
  { question: '浜松のパーソナルジムの料金の目安は？', answer: '公式サイト掲載の料金では、BEYOND 浜松店は回数券10回 102,300円（1回あたり10,230円）／マンスリープラン月2回 17,600円。STUDIO AYAKO（スタジオ・アヤコ）はパーソナルトレーニング50分 7,700円（入会手数料15,000円＋月会費5,000円）。キャンペーン等で変動するため最新は各公式サイトでご確認ください。' },
  { question: '体験やカウンセリングは無料で受けられる？', answer: 'BEYOND 浜松店、パーソナルトレーニングジムNINE（浜松高林店ほか市内4店舗）は無料の体験またはカウンセリングを実施しています（公式サイト記載・2026年6月時点）。有料体験でも当日入会で無料になるジムがあります。' },
  { question: '初心者でも大丈夫？', answer: 'はい。パーソナルジムはマンツーマン指導が基本のため、運動経験がなくても一人ひとりのレベルに合わせてメニューを組んでもらえます。不安な場合は体験時に運動歴を伝えて相談しましょう。' },
]

export default function HamamatsuPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-accent text-xs mb-2">更新日 2026年06月12日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              【2026年6月最新】浜松の女性向けパーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選！料金比較
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light">
              <Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}
              <span className="text-brand-muted">浜松</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">こんにちは、G-PersonalGym編集部です。</p>
            <p className="text-brand-muted leading-relaxed mb-6">「浜松で女性が通いやすいパーソナルジムを探している」「駅近で通いやすいジムが知りたい」という方のために、浜松エリアの女性向けパーソナルジム{gyms.length}選をまとめました。掲載情報はすべて各ジムの公式サイトで確認したものです（2026年6月時点）。</p>
            <div className="bg-accent-tint border border-line rounded-xl p-5 mb-8">
              <p className="text-brand-muted text-sm leading-relaxed">※調査時点で、浜松駅徒歩圏に「完全女性専用」のパーソナルジムは公式に確認できませんでした。本ページでは女性会員比率が高い・女性トレーナー専門など「女性向けに強い」ジムを、車アクセスの店舗も含めて掲載しています。</p>
            </div>
            <div className="bg-ivory border-l-4 border-accent p-6 mb-8">
              <h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-brand-muted">
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>浜松で女性向けのパーソナルジムを探している</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>駅近で通いやすいジムが良い</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>料金を比較して選びたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>体験を受けてから決めたい</span></li>
              </ul>
            </div>
          </div>
        </section>

        <AreaContext slug="hamamatsu" />

        <WhyWomenOnly area="浜松" />

        <PriceComparisonTable gyms={gyms} areaName="浜松" />

        <section className="py-16 bg-ivory" id="gyms">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">浜松のおすすめ女性向けパーソナルジム{gyms.length}選</h2>
            <div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">目的別の選び方</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">月額制で始めやすい</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・BEYOND 浜松店</li></ul>
              </div>
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">完全個室でマンツーマン</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・パーソナルトレーニングジムNINE（浜松高林店ほか市内4店舗）</li></ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-ivory">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-4 text-center">浜松の料金一覧【2026年6月・公式サイト調べ】</h2>
            <p className="text-brand-light text-xs text-center mb-8">キャンペーン等により変動します。最新の料金は必ず各公式サイトでご確認ください。</p>
            <ul className="bg-white rounded-xl p-6 md:p-8 border border-line space-y-3">
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">BEYOND 浜松店</span><span className="text-brand-muted text-sm">回数券10回 102,300円（1回あたり10,230円）／マンスリープラン月2回 17,600円</span></li>
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">パーソナルトレーニングジムNINE（浜松高林店ほか市内4店舗）</span><span className="text-brand-muted text-sm">月18,000円〜継続可能（コース詳細は公式サイトでご確認ください）</span></li>
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">STUDIO AYAKO（スタジオ・アヤコ）</span><span className="text-brand-muted text-sm">パーソナルトレーニング50分 7,700円（入会手数料15,000円＋月会費5,000円）</span></li>
            </ul>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">浜松で選ぶ際の注意点</h2>
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
            <p className="text-brand-muted leading-relaxed mb-4">浜松エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。掲載内容はすべて各ジムの公式サイトで確認した情報です（2026年6月時点）。</p>
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
      <RelatedAreas currentSlug="hamamatsu" />
      <SiteFooter />
    </>
  )
}
