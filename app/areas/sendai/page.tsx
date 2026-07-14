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
  alternates: { canonical: '/areas/sendai/' },
  title: '【2026年7月最新】仙台の女性向けパーソナルジムおすすめ4選！料金比較',
  description: '【2026年7月最新】仙台のおすすめ女性向けパーソナルジム4選を比較。UNDEUX・リボーンマイセルフ・パーソナルトレーニングジムなど、料金・体験・特徴を各公式サイトで確認のうえ掲載しています。',
  keywords: '女性専用パーソナルジム,仙台,宮城,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'UNDEUX SUPERBODY 仙台スタジオ',
    officialUrl: 'https://www.diet-undeux.jp/life/sendai/',
    price: 'スタンダードプラン月額18,200円〜（税込）',
    trial: '無料カウンセリング・無料体験トレーニングあり',
    features: ['女性専用', '管理栄養士の食事サポート', '手ぶらOK'],
    description: '女性専用のダイエット・ボディメイク特化ジム。管理栄養士の食事サポートがあり、手ぶらで通えます。',
    access: 'JR仙台駅徒歩3分',
    address: '仙台市青葉区中央1-7-2 アールアイ名掛丁2号館3F',
    options: ['コミットプラン月額79,200円（トレーニング6回＋LINE食事指導＋宅配食30食）'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '女性100%（女性専用）', purpose: ['ダイエット', 'ボディメイク', '食事改善'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['公式サイトでご確認ください'] },
  },
  {
    name: 'リボーンマイセルフ 仙台店',
    officialUrl: 'https://www.shapes-international.co.jp/store/sendai/',
    price: 'ショートコース（2ヶ月16回）220,000円（税込・入会金22,000円）',
    trial: '無料カウンセリング・無料体験あり',
    features: ['女性専用', 'トレーナー全員女性', '専属女性トレーナー制', 'シャワー・パウダールーム完備'],
    description: '会員もトレーナーも全員女性の女性専門ジム。専属女性トレーナー担当制で、ウェア・タオル無料レンタル、シャワー・個室パウダールーム完備です。',
    access: '地下鉄東西線 青葉通一番町駅 南1出口徒歩2分',
    address: '仙台市青葉区一番町2-8-46 青葉通りOSビル6階',
    options: ['ベーシックコース（3ヶ月24回）303,600円', 'チケット1回7,700円〜'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '女性100%（女性専用）', purpose: ['ダイエット', 'ボディメイク', 'ブライダル'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['シャワー・パウダールーム完備'] },
  },
  {
    name: 'パーソナルトレーニングジム ワンネス 仙台駅前店',
    officialUrl: 'https://female-oneness.com/',
    price: '月謝コース月2回 13,000円〜（加圧・60分）',
    trial: '無料カウンセリングあり／体験トレーニング8,800円（当日入会で3,300円）',
    features: ['女性専用', '東北最大級', '完全マンツーマン', '子連れOK'],
    description: '東北最大級の女性専用トレーニング施設。完全マンツーマンで、トレーナーは全員コンテスト優勝・ファイナリスト経験者。子連れOKです。',
    access: '地下鉄仙台駅 北6出口直結',
    address: '仙台市青葉区中央2-1-30 須田ビルディング4階',
    options: ['回数券コースは入会金無料', '加圧トレーニング対応'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '女性100%（女性専用）', purpose: ['ダイエット', 'ボディメイク', '体力向上'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['公式サイトでご確認ください'] },
  },
  {
    name: 'BARE FITNESS studio（ベアフィットネススタジオ）',
    officialUrl: 'https://barefitnessstudio.com/',
    price: '月2回 10,780円〜月8回48,000円（入会金不要）',
    trial: '事前無料カウンセリングあり／体験トレーニング（50分）3,000円',
    features: ['女性専用', '女性トレーナー', '骨盤底筋トレーニング対応', '子連れOK'],
    description: '女性トレーナーによる地域独立系の女性専用パーソナルジム。骨盤底筋トレーニングなど女性特有の悩みに対応し、完全予約制マンツーマン・子連れOKです。',
    access: '地下鉄北四番丁駅徒歩3分',
    address: '仙台市青葉区二日町11-5 第二梅原ビル4-A',
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '女性100%（女性専用）', purpose: ['ダイエット', '骨盤ケア', '産後ダイエット'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['公式サイトでご確認ください'] },
  },
]

const faqs = [
  { question: '仙台で女性専用のパーソナルジムはどこ？', answer: '公式サイトで女性専用（または女性専門）と確認できたのは、UNDEUX SUPERBODY 仙台スタジオ、リボーンマイセルフ 仙台店、パーソナルトレーニングジム ワンネス 仙台駅前店、BARE FITNESS studio（ベアフィットネススタジオ）です（2026年6月調査時点）。' },
  { question: '仙台のパーソナルジムの料金の目安は？', answer: '公式サイト掲載の料金では、UNDEUX SUPERBODY 仙台スタジオはスタンダードプラン月額18,200円〜（税込）。リボーンマイセルフ 仙台店はショートコース（2ヶ月16回）220,000円（税込・入会金22,000円）。パーソナルトレーニングジム ワンネス 仙台駅前店は月謝コース月2回 13,000円〜（加圧・60分）。BARE FITNESS studio（ベアフィットネススタジオ）は月2回 10,780円〜月8回48,000円（入会金不要）。キャンペーン等で変動するため最新は各公式サイトでご確認ください。' },
  { question: '仙台駅から近いジムは？', answer: '駅徒歩3分以内・直結では、UNDEUX SUPERBODY 仙台スタジオ（JR仙台駅徒歩3分）、リボーンマイセルフ 仙台店（地下鉄東西線 青葉通一番町駅 南1出口徒歩2分）、パーソナルトレーニングジム ワンネス 仙台駅前店（地下鉄仙台駅 北6出口直結）、BARE FITNESS studio（ベアフィットネススタジオ）（地下鉄北四番丁駅徒歩3分）があります。' },
  { question: '体験やカウンセリングは無料で受けられる？', answer: 'UNDEUX SUPERBODY 仙台スタジオ、リボーンマイセルフ 仙台店、パーソナルトレーニングジム ワンネス 仙台駅前店、BARE FITNESS studio（ベアフィットネススタジオ）は無料の体験またはカウンセリングを実施しています（公式サイト記載・2026年6月時点）。有料体験でも当日入会で無料になるジムがあります。' },
  { question: '子連れで通えるジムはある？', answer: 'パーソナルトレーニングジム ワンネス 仙台駅前店、BARE FITNESS studio（ベアフィットネススタジオ）が子連れ対応（キッズスペース・ベビーサークル・託児補助など）を公式に案内しています。条件は各公式サイトでご確認ください。' },
  { question: '初心者でも大丈夫？', answer: 'はい。パーソナルジムはマンツーマン指導が基本のため、運動経験がなくても一人ひとりのレベルに合わせてメニューを組んでもらえます。不安な場合は体験時に運動歴を伝えて相談しましょう。' },
]

export default function SendaiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-accent text-xs mb-2">更新日 2026年06月12日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              【2026年7月最新】仙台の女性向けパーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選！料金比較
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light">
              <Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}
              <span className="text-brand-muted">仙台</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">こんにちは、G-PersonalGym編集部です。</p>
            <p className="text-brand-muted leading-relaxed mb-6">「仙台で女性が通いやすいパーソナルジムを探している」「駅近で通いやすいジムが知りたい」という方のために、仙台エリアの女性向けパーソナルジム{gyms.length}選をまとめました。掲載情報はすべて各ジムの公式サイトで確認したものです（2026年6月時点）。</p>
            <div className="bg-ivory border-l-4 border-accent p-6 mb-8">
              <h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-brand-muted">
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>仙台で女性向けのパーソナルジムを探している</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>駅近で通いやすいジムが良い</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>料金を比較して選びたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>体験を受けてから決めたい</span></li>
              </ul>
            </div>
          </div>
        </section>

        <AreaContext slug="sendai" />

        <WhyWomenOnly area="仙台" />

        <PriceComparisonTable gyms={gyms} areaName="仙台" />

        <section className="py-16 bg-ivory" id="gyms">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">仙台のおすすめ女性向けパーソナルジム{gyms.length}選</h2>
            <div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">目的別の選び方</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">女性専用にこだわる</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・UNDEUX SUPERBODY 仙台スタジオ</li><li className="text-brand-muted">・リボーンマイセルフ 仙台店</li><li className="text-brand-muted">・パーソナルトレーニングジム ワンネス 仙台駅前店</li></ul>
              </div>
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">月額制で始めやすい</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・UNDEUX SUPERBODY 仙台スタジオ</li><li className="text-brand-muted">・リボーンマイセルフ 仙台店</li><li className="text-brand-muted">・パーソナルトレーニングジム ワンネス 仙台駅前店</li></ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-ivory">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-4 text-center">仙台の料金一覧【2026年6月・公式サイト調べ】</h2>
            <p className="text-brand-light text-xs text-center mb-8">キャンペーン等により変動します。最新の料金は必ず各公式サイトでご確認ください。</p>
            <ul className="bg-white rounded-xl p-6 md:p-8 border border-line space-y-3">
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">UNDEUX SUPERBODY 仙台スタジオ</span><span className="text-brand-muted text-sm">スタンダードプラン月額18,200円〜（税込）</span></li>
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">リボーンマイセルフ 仙台店</span><span className="text-brand-muted text-sm">ショートコース（2ヶ月16回）220,000円（税込・入会金22,000円）</span></li>
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">パーソナルトレーニングジム ワンネス 仙台駅前店</span><span className="text-brand-muted text-sm">月謝コース月2回 13,000円〜（加圧・60分）</span></li>
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">BARE FITNESS studio（ベアフィットネススタジオ）</span><span className="text-brand-muted text-sm">月2回 10,780円〜月8回48,000円（入会金不要）</span></li>
            </ul>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">仙台で選ぶ際の注意点</h2>
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
            <p className="text-brand-muted leading-relaxed mb-4">仙台エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。掲載内容はすべて各ジムの公式サイトで確認した情報です（2026年6月時点）。</p>
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
      <RelatedAreas currentSlug="sendai" />
      <SiteFooter />
    </>
  )
}
