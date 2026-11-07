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
import { pageUrlMeta } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  ...pageUrlMeta('/areas/hachioji/'),
  title: '八王子の女性向けパーソナルジムおすすめ3選｜料金比較',
  description: '八王子の女性向けパーソナルジム3選を公式料金で比較。女性専用のM\'S FIELDは16回128,000円・入会金10,000円、BAILESは月8回（30分）35,200円、かたぎり塾は月4回33,000円。体験・アクセスも掲載しています（2026年11月確認）。',
  keywords: '女性専用パーソナルジム,八王子,東京,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'M\'S FIELD（エムズフィールド）',
    officialUrl: 'https://ms-field.net/',
    price: '4回 35,000円／8回 68,000円／16回 128,000円（1回50分・税区分の記載なし）',
    trial: '初回体験トレーニング（50分）1回 5,000円／2回 9,000円（税区分の記載なし）',
    features: ['女性専用', '女性トレーナー', '完全個室', '駐車場あり', 'シャワー完備'],
    description: '女性トレーナーがマンツーマンで指導する女性専用のパーソナルジムです（入会は16歳以上の女性）。朝7時から22時まで営業し、駐車場・シャワー・無料プロテインがあります。入会金は10,000円です。',
    access: '八王子駅南口徒歩5分',
    address: '東京都八王子市子安町3-9-10 MOISTURE GARDEN VOL Ⅱ 101',
    options: ['1回 9,000円', 'トレーニング後のプロテイン無料', 'ウェア・タオル・お水を用意（シューズは持参）', '駐車場あり', '入会金 10,000円'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '女性100%（女性専用）', purpose: ['ダイエット', 'ボディメイク'] },
    basicInfo: { hours: '7:00〜22:00', closed: '公式サイトでご確認ください', facilities: ['完全個室', '駐車場あり', 'シャワー完備'] },
  },
  {
    name: 'パーソナルジムBAILES（ベール）八王子店',
    officialUrl: 'https://bailes0214.jp/',
    price: '月4回（50分）35,200円／月8回（30分）35,200円／月8回（50分）69,300円（税区分の記載なし）',
    trial: '体験レッスン 通常5,500円→無料（実施中・60分）',
    features: ['専属女性トレーナー', '完全個室', 'キッズスペース完備', '手ぶらOK'],
    description: '専属の女性トレーナーがマンツーマンで指導する完全個室ジムです。八王子駅南口徒歩1分でキッズスペース完備、ウェア無料レンタルで手ぶらOKです。',
    access: '八王子駅南口徒歩1分',
    address: '東京都八王子市子安町1丁目2-5 三田ビル3階',
    options: ['キッズスペース完備', 'ウェア・シューズ・タオル・プロテイン無料', '入会金33,000円→体験当日の入会とアンケート回答で無料', '駐車場1台（無料）', '体験はカウンセリング・体組成計・パーソナルトレーニング・プロテイン付き（60分）'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '男女問わず（公式）・専属の女性トレーナー', purpose: ['ダイエット', '姿勢改善', '健康維持'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'キッズスペース完備'] },
  },
  {
    name: 'かたぎり塾 八王子店',
    officialUrl: 'https://katagirijuku.jp/gyms/hachioji',
    price: '月4回 33,000円／月8回 59,400円（税込）',
    trial: '無料体験トレーニングあり（手ぶらOK）',
    features: ['月額制', '完全個室', 'AI食事指導', '医師・理学療法士監修'],
    description: '月額制の完全個室マンツーマンジムです。医師・理学療法士監修プログラムとAI食事指導アプリ無料です。女性専用ではありません（公式の他店ページに男性の利用率 約4割の記載）。',
    access: 'JR八王子駅徒歩4分',
    address: '東京都八王子市中町2-15 H・Kビル3階',
    options: ['AI食事指導アプリ無料', '月8プラン59,400円', 'チケット8,800円/回', '入会金55,000円（税込）→体験当日の入会で0円', 'お子様用のスペースあり（公式FAQ）'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '男女共用', purpose: ['ダイエット', 'ボディメイク'] },
    basicInfo: { hours: '平日10:00〜22:00／土日9:00〜20:00', closed: '月・木', facilities: ['完全個室'] },
  },
]

const faqs = [
  { question: '八王子で女性専用のパーソナルジムはどこですか？', answer: '公式サイトで女性専用と確認できたのは、M\'S FIELD（エムズフィールド）です（入会は16歳以上の女性・2026年11月確認）。' },
  { question: '八王子のパーソナルジムの料金の目安はいくらですか？', answer: '公式サイト掲載の料金では、M\'S FIELDは4回 35,000円・16回 128,000円（1回50分）、パーソナルジムBAILESは月4回（50分）35,200円・月8回（30分）35,200円（いずれも税区分の記載なし）、かたぎり塾 八王子店は月4回 33,000円（税込）です。キャンペーン等で変動するため最新は各公式サイトでご確認ください。' },
  { question: '八王子駅から近いジムはどこですか？', answer: '駅徒歩3分以内・直結では、パーソナルジムBAILES（ベール）八王子店（八王子駅南口徒歩1分）があります。' },
  { question: '体験やカウンセリングは無料で受けられますか？', answer: 'パーソナルジムBAILES（ベール）八王子店（通常5,500円→無料を実施中）とかたぎり塾 八王子店は無料の体験を実施しています。M\'S FIELDの初回体験は1回 5,000円・2回 9,000円です（公式サイト記載・2026年11月確認）。' },
  { question: '子連れで通えるジムはありますか？', answer: 'パーソナルジムBAILES（ベール）八王子店はキッズスペースを完備、かたぎり塾 八王子店は乳幼児連れでも利用でき、お子様用のスペースがあると公式に案内しています。条件は各公式サイトでご確認ください。' },
  { question: '初心者でも大丈夫ですか？', answer: 'はい。パーソナルジムはマンツーマン指導が基本のため、運動経験がなくても一人ひとりのレベルに合わせてメニューを組んでもらえます。不安な場合は体験時に運動歴を伝えてご相談ください。' },
]

export default function HachiojiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-accent text-xs mb-2">更新日 2026年11月07日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              八王子の女性向けパーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選・料金比較
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light">
              <Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}
              <span className="text-brand-muted">八王子</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">本ページはG-PersonalGym編集部が作成しています。</p>
            <p className="text-brand-muted leading-relaxed mb-6">「八王子で女性が通いやすいパーソナルジムを探している」「駅近で通いやすいジムが知りたい」という方のために、八王子エリアの女性向けパーソナルジム{gyms.length}選をまとめました。掲載情報はすべて各ジムの公式サイトで確認したものです（2026年11月時点）。</p>
            <div className="bg-ivory border-l-4 border-accent p-6 mb-8">
              <h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-brand-muted">
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>八王子で女性向けのパーソナルジムを探している</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>駅近で通いやすいジムが良い</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>料金を比較して選びたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>体験を受けてから決めたい</span></li>
              </ul>
            </div>
          </div>
        </section>

        <AreaContext slug="hachioji" />

        <WhyWomenOnly area="八王子" />

        <PriceComparisonTable gyms={gyms} areaName="八王子" />

        <section className="py-16 bg-ivory" id="gyms">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">八王子のおすすめ女性向けパーソナルジム{gyms.length}選</h2>
            <div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">目的別の選び方</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">女性専用にこだわる</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・M'S FIELD（エムズフィールド）</li></ul>
              </div>
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">月額制で始めやすい</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・パーソナルジムBAILES（ベール）八王子店</li><li className="text-brand-muted">・かたぎり塾 八王子店</li></ul>
              </div>
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">完全個室でマンツーマン</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・M'S FIELD（エムズフィールド）</li><li className="text-brand-muted">・パーソナルジムBAILES（ベール）八王子店</li><li className="text-brand-muted">・かたぎり塾 八王子店</li></ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-ivory">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-4 text-center">八王子の料金一覧【2026年11月・公式サイト調べ】</h2>
            <p className="text-brand-light text-xs text-center mb-8">キャンペーン等により変動します。最新の料金は必ず各公式サイトでご確認ください。</p>
            <ul className="bg-white rounded-xl p-6 md:p-8 border border-line space-y-3">
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">M'S FIELD（エムズフィールド）</span><span className="text-brand-muted text-sm">4回 35,000円／8回 68,000円／16回 128,000円（1回50分・税区分の記載なし）</span></li>
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">パーソナルジムBAILES（ベール）八王子店</span><span className="text-brand-muted text-sm">月4回（50分）35,200円／月8回（30分）35,200円／月8回（50分）69,300円（税区分の記載なし）</span></li>
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">かたぎり塾 八王子店</span><span className="text-brand-muted text-sm">月4回 33,000円／月8回 59,400円（税込）</span></li>
            </ul>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">八王子で選ぶ際の注意点</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="text-lg font-bold text-brand-text mb-3">出口・動線を事前に確認</h3>
                <p className="text-brand-muted leading-relaxed">同じ「駅徒歩◯分」でも、利用する路線や出口によって体感距離は変わります。通いたいジムがどの出口から近いかを事前にご確認ください。</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="text-lg font-bold text-brand-text mb-3">体験は2〜3ジムで比較</h3>
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
                    <li>・<strong>動きやすいウェア</strong>（レンタルのあるジムも多くあります）</li>
                    <li>・<strong>室内シューズ</strong>（レンタルのあるジムもあります）</li>
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
            <p className="text-brand-muted leading-relaxed mb-4">八王子エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。掲載内容はすべて各ジムの公式サイトで確認した情報です（2026年11月時点）。</p>
            <p className="text-brand-muted leading-relaxed">料金やキャンペーンは変動するため、気になるジムが見つかったら公式サイトで最新情報を確認し、まずは体験・カウンセリングを受けてみてください。</p>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-accent to-accent-dark text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-4">まずは無料カウンセリングから</h2>
            <p className="text-white/80 mb-8">複数のジムを比較し、ご自身に合ったジムをお選びください。</p>
            <Link href="/ranking/" className="inline-block bg-white text-accent px-10 py-4 text-sm font-bold rounded-full hover:bg-accent-tint transition-all">おすすめランキングを見る</Link>
          </div>
        </section>
        <IntentGuideLinks />
      </main>
      <RelatedAreas currentSlug="hachioji" />
      <SiteFooter />
    </>
  )
}
