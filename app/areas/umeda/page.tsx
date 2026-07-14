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
  alternates: { canonical: '/areas/umeda/' },
  title: '【2026年7月最新】梅田の女性向けパーソナルジムおすすめ4選！料金比較',
  description: '【2026年7月最新】梅田のおすすめ女性向けパーソナルジム4選を比較。UNDEUX・リボーンマイセルフ・ビーコンセプトなど、料金・体験・特徴を各公式サイトで確認のうえ掲載しています。',
  keywords: '女性専用パーソナルジム,梅田,大阪,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'UNDEUX SUPERBODY 梅田スタジオ',
    officialUrl: 'https://www.diet-undeux.jp/studio/umeda/',
    price: 'スタンダードプラン月4回 29,100円〜（税込）',
    trial: '体験トレーニング無料（約60分）＋無料カウンセリング',
    features: ['女性専用', '管理栄養士の食事指導', 'マシンピラティス対応', '手ぶらOK'],
    description: '女性専用パーソナルジム。管理栄養士による食事指導とマシンピラティスに対応。ウェア・シューズ・タオル無料レンタルで手ぶらOKです。',
    access: '阪急「大阪梅田駅」徒歩2分',
    address: '大阪市北区茶屋町4-4 茶屋町ガーデンビル2F',
    options: ['コミットプラン月6回79,200円', '月2回20,500円〜月8回66,800円'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '女性100%（女性専用）', purpose: ['ダイエット', 'ボディメイク', 'ピラティス'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['公式サイトでご確認ください'] },
  },
  {
    name: 'リボーンマイセルフ 梅田店',
    officialUrl: 'https://www.shapes-international.co.jp/store/umeda/',
    price: 'ショートコース（2ヶ月16回）168,000円（入会金22,000円）',
    trial: 'カウンセリング・体験トレーニングとも無料',
    features: ['女性専用', 'トレーナー全員女性', '食事指導つき', 'パウダールーム完備'],
    description: '女性専用・トレーナーも全員女性のジム。食事指導つきで、ウェア・タオル無料貸出、個室パウダールーム・シャワー完備です。',
    access: '阪急梅田駅茶屋町口徒歩4分／JR大阪駅徒歩5分',
    address: '大阪市北区芝田1-10-8 山中ビル2F',
    options: ['ベーシックコース（3ヶ月24回）228,000円', 'チケット1回8,800円〜', '入会金無料キャンペーンの時期あり'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '女性100%（女性専用）', purpose: ['ダイエット', 'ボディメイク', 'ブライダル'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['パウダールーム完備'] },
  },
  {
    name: 'ビーコンセプト 北新地・堂島店',
    officialUrl: 'https://b-concept.tokyo/clublist/umeda/',
    price: '太ももダイエットプログラム 89,842円×2ヶ月（18回）',
    trial: '無料カウンセリング＆体験トレーニングあり',
    features: ['女性専用', '完全個室', '脚やせ・下半身特化', '医師×トレーナー共同開発'],
    description: '医師×トレーナー共同開発の脚やせ・下半身痩せメソッドの女性専用ジム。完全個室で、シューズなど無料レンタルがあります。',
    access: '北新地駅徒歩2分（梅田駅徒歩圏）',
    options: ['トライアルプラン4回44,000円', '当日入会で入会金無料'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '女性100%（女性専用）', purpose: ['太もも痩せ', '下半身痩せ', 'ダイエット'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['完全個室'] },
  },
  {
    name: 'Deat-workout 梅田店【初心者女性専門】',
    officialUrl: 'https://deatworkout.com/',
    price: '月々6,000円〜のプランあり',
    trial: '体験2,980円（通常6,000円）／カウンセリング無料（期間限定）',
    features: ['初心者女性専門', '完全個室', '手ぶらOK', 'シャワー完備'],
    description: '会員の9割が初心者という初心者女性専門のパーソナルジム。完全個室・手ぶらOK・シャワールーム完備です。',
    access: '各線梅田駅徒歩8分／中崎町駅徒歩5分',
    options: ['3回トライアル9,980円', '4回トライアル14,900円'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '女性専門（初心者女性向け）', purpose: ['ダイエット', '運動習慣'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['完全個室', 'シャワー完備'] },
  },
]

const faqs = [
  { question: '梅田で女性専用のパーソナルジムはどこ？', answer: '公式サイトで女性専用（または女性専門）と確認できたのは、UNDEUX SUPERBODY 梅田スタジオ、リボーンマイセルフ 梅田店、ビーコンセプト 北新地・堂島店です（2026年6月調査時点）。' },
  { question: '梅田のパーソナルジムの料金の目安は？', answer: '公式サイト掲載の料金では、UNDEUX SUPERBODY 梅田スタジオはスタンダードプラン月4回 29,100円〜（税込）。リボーンマイセルフ 梅田店はショートコース（2ヶ月16回）168,000円（入会金22,000円）。ビーコンセプト 北新地・堂島店は太ももダイエットプログラム 89,842円×2ヶ月（18回）。Deat-workout 梅田店【初心者女性専門】は月々6,000円〜のプランあり。キャンペーン等で変動するため最新は各公式サイトでご確認ください。' },
  { question: '梅田駅から近いジムは？', answer: '駅徒歩3分以内・直結では、UNDEUX SUPERBODY 梅田スタジオ（阪急「大阪梅田駅」徒歩2分）、ビーコンセプト 北新地・堂島店（北新地駅徒歩2分）があります。' },
  { question: '体験やカウンセリングは無料で受けられる？', answer: 'UNDEUX SUPERBODY 梅田スタジオ、リボーンマイセルフ 梅田店、ビーコンセプト 北新地・堂島店、Deat-workout 梅田店【初心者女性専門】は無料の体験またはカウンセリングを実施しています（公式サイト記載・2026年6月時点）。有料体験でも当日入会で無料になるジムがあります。' },
  { question: '初心者でも大丈夫？', answer: 'はい。パーソナルジムはマンツーマン指導が基本のため、運動経験がなくても一人ひとりのレベルに合わせてメニューを組んでもらえます。不安な場合は体験時に運動歴を伝えて相談しましょう。' },
]

export default function UmedaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-accent text-xs mb-2">更新日 2026年06月12日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              【2026年7月最新】梅田の女性向けパーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選！料金比較
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light">
              <Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}
              <span className="text-brand-muted">梅田</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">こんにちは、G-PersonalGym編集部です。</p>
            <p className="text-brand-muted leading-relaxed mb-6">「梅田で女性が通いやすいパーソナルジムを探している」「駅近で通いやすいジムが知りたい」という方のために、梅田エリアの女性向けパーソナルジム{gyms.length}選をまとめました。掲載情報はすべて各ジムの公式サイトで確認したものです（2026年6月時点）。</p>
            <div className="bg-ivory border-l-4 border-accent p-6 mb-8">
              <h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-brand-muted">
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>梅田で女性向けのパーソナルジムを探している</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>駅近で通いやすいジムが良い</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>料金を比較して選びたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>体験を受けてから決めたい</span></li>
              </ul>
            </div>
          </div>
        </section>

        <AreaContext slug="umeda" />

        <WhyWomenOnly area="梅田" />

        <PriceComparisonTable gyms={gyms} areaName="梅田" />

        <section className="py-16 bg-ivory" id="gyms">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">梅田のおすすめ女性向けパーソナルジム{gyms.length}選</h2>
            <div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">目的別の選び方</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">女性専用にこだわる</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・UNDEUX SUPERBODY 梅田スタジオ</li><li className="text-brand-muted">・リボーンマイセルフ 梅田店</li><li className="text-brand-muted">・ビーコンセプト 北新地・堂島店</li></ul>
              </div>
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">月額制で始めやすい</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・UNDEUX SUPERBODY 梅田スタジオ</li><li className="text-brand-muted">・リボーンマイセルフ 梅田店</li></ul>
              </div>
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">完全個室でマンツーマン</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・ビーコンセプト 北新地・堂島店</li><li className="text-brand-muted">・Deat-workout 梅田店【初心者女性専門】</li></ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-ivory">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-4 text-center">梅田の料金一覧【2026年6月・公式サイト調べ】</h2>
            <p className="text-brand-light text-xs text-center mb-8">キャンペーン等により変動します。最新の料金は必ず各公式サイトでご確認ください。</p>
            <ul className="bg-white rounded-xl p-6 md:p-8 border border-line space-y-3">
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">UNDEUX SUPERBODY 梅田スタジオ</span><span className="text-brand-muted text-sm">スタンダードプラン月4回 29,100円〜（税込）</span></li>
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">リボーンマイセルフ 梅田店</span><span className="text-brand-muted text-sm">ショートコース（2ヶ月16回）168,000円（入会金22,000円）</span></li>
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">ビーコンセプト 北新地・堂島店</span><span className="text-brand-muted text-sm">太ももダイエットプログラム 89,842円×2ヶ月（18回）</span></li>
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">Deat-workout 梅田店【初心者女性専門】</span><span className="text-brand-muted text-sm">月々6,000円〜のプランあり</span></li>
            </ul>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">梅田で選ぶ際の注意点</h2>
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
            <p className="text-brand-muted leading-relaxed mb-4">梅田エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。掲載内容はすべて各ジムの公式サイトで確認した情報です（2026年6月時点）。</p>
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
      <RelatedAreas currentSlug="umeda" />
      <SiteFooter />
    </>
  )
}
