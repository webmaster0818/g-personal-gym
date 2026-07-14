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
  alternates: { canonical: '/areas/gifu/' },
  title: '【2026年7月最新】岐阜の女性向けパーソナルジムおすすめ3選！料金比較',
  description: '【2026年7月最新】岐阜のおすすめ女性向けパーソナルジム3選を比較。パーソナルトレーニングジム・Amazones・Smilentなど、料金・体験・特徴を各公式サイトで確認のうえ掲載しています。',
  keywords: '女性専用パーソナルジム,岐阜,岐阜,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'パーソナルトレーニングジム TOKIEL（トキエル）岐阜店',
    officialUrl: 'https://tokiel.jp/location/gifu/',
    price: '回数券4回 28,160円／通い放題 月52,800円（税込・入会金22,000円）',
    trial: '初回体験無料',
    features: ['女性専用', '完全マンツーマン', '整体・姿勢改善', '手ぶら可'],
    description: '女性専用の完全マンツーマンジム。トレーニングに整体・姿勢改善・ストレッチを組み合わせ、食事アドバイスつき。ウェア・シューズ無料レンタルで手ぶら可です。',
    access: '岐阜市敷島町（岐阜駅から約2km・アクセスは公式サイトでご確認ください）',
    options: ['短期集中フルサポート220,000円'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '女性100%（女性専用）', purpose: ['ダイエット', '姿勢改善', 'ボディメイク'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['公式サイトでご確認ください'] },
  },
  {
    name: 'Amazones（アマゾネス）岐阜都通店',
    officialUrl: 'https://amazones.fit/storelist/gifumiyakodori/',
    price: 'スタンダード会員 月9,900円／パーソナル1回 4,400円（税込・入会時4回無料）',
    trial: '無料体験・見学あり（要予約）',
    features: ['女性専用', '24時間営業', 'トレーナー全員女性'],
    description: '女性専用の24時間ジム。トレーナーは全員女性で、下半身マシンは地域最大級。セルフ＋パーソナルを組み合わせられます。',
    access: '岐阜バス「鍵屋」徒歩3分（岐阜駅から車6分・提携駐車場あり）',
    options: ['学生・シニア月7,700円'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '女性100%（女性専用）', purpose: ['運動習慣', 'ダイエット', '下半身痩せ'] },
    basicInfo: { hours: '24時間', closed: '公式サイトでご確認ください', facilities: ['公式サイトでご確認ください'] },
  },
  {
    name: 'Smilent（スミレント）パーソナルジム 岐阜加納店',
    officialUrl: 'https://smilent.jp/gym/gihu',
    price: '料金は公式サイトでご確認ください（初期費用無料キャンペーンあり）',
    trial: '体験 4,980円（キャンペーンで無料）',
    features: ['完全個室', '24時間営業（完全予約制）', '子連れOK', 'マシンピラティス併設'],
    description: '完全個室プライベートのパーソナルジム。24時間営業（完全予約制）で子連れOK、マシンピラティス併設。コインパーキング代の負担制度もあります。',
    access: 'JR岐阜駅・名鉄岐阜駅 最寄り（徒歩分数は公式サイトでご確認ください）',
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '男女共用（女性向け要素が強い）', purpose: ['ダイエット', 'ピラティス', 'ボディメイク'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['完全個室'] },
  },
]

const faqs = [
  { question: '岐阜で女性専用のパーソナルジムはどこ？', answer: '公式サイトで女性専用（または女性専門）と確認できたのは、パーソナルトレーニングジム TOKIEL（トキエル）岐阜店、Amazones（アマゾネス）岐阜都通店です（2026年6月調査時点）。' },
  { question: '岐阜のパーソナルジムの料金の目安は？', answer: '公式サイト掲載の料金では、パーソナルトレーニングジム TOKIEL（トキエル）岐阜店は回数券4回 28,160円／通い放題 月52,800円（税込・入会金22,000円）。Amazones（アマゾネス）岐阜都通店はスタンダード会員 月9,900円／パーソナル1回 4,400円（税込・入会時4回無料）。キャンペーン等で変動するため最新は各公式サイトでご確認ください。' },
  { question: '岐阜駅から近いジムは？', answer: '駅徒歩3分以内・直結では、Amazones（アマゾネス）岐阜都通店（岐阜バス「鍵屋」徒歩3分）があります。' },
  { question: '体験やカウンセリングは無料で受けられる？', answer: 'パーソナルトレーニングジム TOKIEL（トキエル）岐阜店、Amazones（アマゾネス）岐阜都通店、Smilent（スミレント）パーソナルジム 岐阜加納店は無料の体験またはカウンセリングを実施しています（公式サイト記載・2026年6月時点）。有料体験でも当日入会で無料になるジムがあります。' },
  { question: '子連れで通えるジムはある？', answer: 'Smilent（スミレント）パーソナルジム 岐阜加納店が子連れ対応（キッズスペース・ベビーサークル・託児補助など）を公式に案内しています。条件は各公式サイトでご確認ください。' },
  { question: '初心者でも大丈夫？', answer: 'はい。パーソナルジムはマンツーマン指導が基本のため、運動経験がなくても一人ひとりのレベルに合わせてメニューを組んでもらえます。不安な場合は体験時に運動歴を伝えて相談しましょう。' },
]

export default function GifuPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-accent text-xs mb-2">更新日 2026年06月12日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              【2026年7月最新】岐阜の女性向けパーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選！料金比較
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light">
              <Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}
              <span className="text-brand-muted">岐阜</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">こんにちは、G-PersonalGym編集部です。</p>
            <p className="text-brand-muted leading-relaxed mb-6">「岐阜で女性が通いやすいパーソナルジムを探している」「駅近で通いやすいジムが知りたい」という方のために、岐阜エリアの女性向けパーソナルジム{gyms.length}選をまとめました。掲載情報はすべて各ジムの公式サイトで確認したものです（2026年6月時点）。</p>
            <div className="bg-accent-tint border border-line rounded-xl p-5 mb-8">
              <p className="text-brand-muted text-sm leading-relaxed">※調査時点で、岐阜駅徒歩圏に「女性専用」を公式に確認できるパーソナルジムは見つかりませんでした。本ページでは市内の女性専用ジム（車・バスアクセス）と女性向けに強いジムを掲載しています。</p>
            </div>
            <div className="bg-ivory border-l-4 border-accent p-6 mb-8">
              <h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-brand-muted">
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>岐阜で女性向けのパーソナルジムを探している</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>駅近で通いやすいジムが良い</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>料金を比較して選びたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>体験を受けてから決めたい</span></li>
              </ul>
            </div>
          </div>
        </section>

        <AreaContext slug="gifu" />

        <WhyWomenOnly area="岐阜" />

        <PriceComparisonTable gyms={gyms} areaName="岐阜" />

        <section className="py-16 bg-ivory" id="gyms">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">岐阜のおすすめ女性向けパーソナルジム{gyms.length}選</h2>
            <div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">目的別の選び方</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">女性専用にこだわる</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・パーソナルトレーニングジム TOKIEL（トキエル）岐阜店</li><li className="text-brand-muted">・Amazones（アマゾネス）岐阜都通店</li></ul>
              </div>
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">完全個室でマンツーマン</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・Smilent（スミレント）パーソナルジム 岐阜加納店</li></ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-ivory">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-4 text-center">岐阜の料金一覧【2026年6月・公式サイト調べ】</h2>
            <p className="text-brand-light text-xs text-center mb-8">キャンペーン等により変動します。最新の料金は必ず各公式サイトでご確認ください。</p>
            <ul className="bg-white rounded-xl p-6 md:p-8 border border-line space-y-3">
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">パーソナルトレーニングジム TOKIEL（トキエル）岐阜店</span><span className="text-brand-muted text-sm">回数券4回 28,160円／通い放題 月52,800円（税込・入会金22,000円）</span></li>
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">Amazones（アマゾネス）岐阜都通店</span><span className="text-brand-muted text-sm">スタンダード会員 月9,900円／パーソナル1回 4,400円（税込・入会時4回無料）</span></li>
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">Smilent（スミレント）パーソナルジム 岐阜加納店</span><span className="text-brand-muted text-sm">料金は公式サイトでご確認ください（初期費用無料キャンペーンあり）</span></li>
            </ul>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">岐阜で選ぶ際の注意点</h2>
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
            <p className="text-brand-muted leading-relaxed mb-4">岐阜エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。掲載内容はすべて各ジムの公式サイトで確認した情報です（2026年6月時点）。</p>
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
      <RelatedAreas currentSlug="gifu" />
      <SiteFooter />
    </>
  )
}
