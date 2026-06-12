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
  title: '【2026年6月最新】鹿児島の女性向けパーソナルジムおすすめ3選！料金比較',
  description: '【2026年6月最新】鹿児島のおすすめ女性向けパーソナルジム3選を比較。女性専門パーソナルトレーニングジムGROW・RITA-STYLE・BELLOパーソナルトレーニングジムなど、料金・体験・特徴を各公式サイトで確認のうえ掲載しています。',
  keywords: '女性専用パーソナルジム,鹿児島,鹿児島,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: '女性専門パーソナルトレーニングジムGROW',
    officialUrl: 'https://www.grow-bodymake.com/',
    price: '60分×16回＋食事サポート 158,000円（税込・2026年6月キャンペーン時）',
    trial: '無料カウンセリング・体験トレーニングあり（LINE/アプリ予約）',
    features: ['女性専門', '食事サポートつき', '女性トレーナー在籍'],
    description: '鹿児島中央駅徒歩3分の女性専門パーソナルジム。食事サポートつきの16回コースが中心で、月額制サブスクコースもあります。',
    access: '鹿児島中央駅 徒歩3分',
    address: '鹿児島市西田2丁目21-19 5F',
    options: ['通常価格211,680円（キャンペーンにより変動）', 'サブスク月4回・8回コースあり'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '女性100%（女性専用）', purpose: ['ダイエット', 'ボディメイク'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['公式サイトでご確認ください'] },
  },
  {
    name: 'RITA-STYLE 鹿児島天文館店',
    officialUrl: 'https://rita-style.co.jp/gym/kagoshima/tenmonkan/',
    price: '月額 49,000円〜（入会金39,800円・キャンペーンで無料の場合あり）',
    trial: '無料カウンセリング0円・体験トレーニング3,980円（当日入会で無料）',
    features: ['女性会員約8割', '完全個室', '永久お食事サポート', '全額返金制度', '子連れ可'],
    description: '女性専用ではありませんが会員の約8割が女性のダイエット専門ジム。完全個室マンツーマン60分で、永久お食事サポートと全額返金制度（条件あり）つき。手ぶらOK・子連れ可です。',
    access: '市電 いづろ通電停 徒歩3分',
    address: '鹿児島市中町7-9 重野ビル2F',
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '男女共用（女性約8割）', purpose: ['ダイエット', 'ボディメイク'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['完全個室'] },
  },
  {
    name: 'BELLOパーソナルトレーニングジム 天文館店',
    officialUrl: 'https://www.bello-fitness.com/',
    price: '45分コース 月4回 20,000円／都度払い 5,500円（入会金0円・縛りなし）',
    trial: '見学・体験申込あり（詳細は問い合わせ）',
    features: ['完全個室', '完全予約制', '食事・生活習慣アドバイス', '9〜23時無休'],
    description: '「女性・中高年・ジム未経験者に通いやすい」を掲げる完全個室マンツーマンジム。入会金0円・縛りなしで、都度払いにも対応します。',
    access: '市電 高見馬場電停 徒歩3分',
    address: '鹿児島市西千石町17-28 NADESHIKOビル4F',
    options: ['月8回39,800円'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '男女共用（女性・初心者に通いやすい設計）', purpose: ['ダイエット', '運動習慣', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['完全個室'] },
  },
]

const faqs = [
  { question: '鹿児島に女性専用のパーソナルジムはある？', answer: '2026年6月の調査時点では、鹿児島駅徒歩圏で「完全女性専用」を公式に掲げるジムは確認できませんでした。本ページでは女性比率が高い・女性トレーナー在籍など、女性が通いやすいジムを掲載しています。' },
  { question: '鹿児島のパーソナルジムの料金の目安は？', answer: '公式サイト掲載の料金では、女性専門パーソナルトレーニングジムGROWは60分×16回＋食事サポート 158,000円（税込・2026年6月キャンペーン時）。RITA-STYLE 鹿児島天文館店は月額 49,000円〜（入会金39,800円・キャンペーンで無料の場合あり）。BELLOパーソナルトレーニングジム 天文館店は45分コース 月4回 20,000円／都度払い 5,500円（入会金0円・縛りなし）。キャンペーン等で変動するため最新は各公式サイトでご確認ください。' },
  { question: '鹿児島駅から近いジムは？', answer: '駅徒歩3分以内・直結では、女性専門パーソナルトレーニングジムGROW（鹿児島中央駅 徒歩3分）、RITA-STYLE 鹿児島天文館店（市電 いづろ通電停 徒歩3分）、BELLOパーソナルトレーニングジム 天文館店（市電 高見馬場電停 徒歩3分）があります。' },
  { question: '体験やカウンセリングは無料で受けられる？', answer: '女性専門パーソナルトレーニングジムGROW、RITA-STYLE 鹿児島天文館店は無料の体験またはカウンセリングを実施しています（公式サイト記載・2026年6月時点）。有料体験でも当日入会で無料になるジムがあります。' },
  { question: '子連れで通えるジムはある？', answer: 'RITA-STYLE 鹿児島天文館店が子連れ対応（キッズスペース・ベビーサークル・託児補助など）を公式に案内しています。条件は各公式サイトでご確認ください。' },
  { question: '初心者でも大丈夫？', answer: 'はい。パーソナルジムはマンツーマン指導が基本のため、運動経験がなくても一人ひとりのレベルに合わせてメニューを組んでもらえます。不安な場合は体験時に運動歴を伝えて相談しましょう。' },
]

export default function KagoshimaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-accent text-xs mb-2">更新日 2026年06月12日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              【2026年6月最新】鹿児島の女性向けパーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選！料金比較
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light">
              <Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}
              <span className="text-brand-muted">鹿児島</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">こんにちは、G-PersonalGym編集部です。</p>
            <p className="text-brand-muted leading-relaxed mb-6">「鹿児島で女性が通いやすいパーソナルジムを探している」「駅近で通いやすいジムが知りたい」という方のために、鹿児島エリアの女性向けパーソナルジム{gyms.length}選をまとめました。掲載情報はすべて各ジムの公式サイトで確認したものです（2026年6月時点）。</p>
            <div className="bg-ivory border-l-4 border-accent p-6 mb-8">
              <h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-brand-muted">
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>鹿児島で女性向けのパーソナルジムを探している</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>駅近で通いやすいジムが良い</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>料金を比較して選びたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>体験を受けてから決めたい</span></li>
              </ul>
            </div>
          </div>
        </section>

        <AreaContext slug="kagoshima" />

        <WhyWomenOnly area="鹿児島" />

        <PriceComparisonTable gyms={gyms} areaName="鹿児島" />

        <section className="py-16 bg-ivory" id="gyms">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">鹿児島のおすすめ女性向けパーソナルジム{gyms.length}選</h2>
            <div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">目的別の選び方</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">月額制で始めやすい</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・RITA-STYLE 鹿児島天文館店</li><li className="text-brand-muted">・BELLOパーソナルトレーニングジム 天文館店</li></ul>
              </div>
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">完全個室でマンツーマン</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・RITA-STYLE 鹿児島天文館店</li><li className="text-brand-muted">・BELLOパーソナルトレーニングジム 天文館店</li></ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-ivory">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-4 text-center">鹿児島の料金一覧【2026年6月・公式サイト調べ】</h2>
            <p className="text-brand-light text-xs text-center mb-8">キャンペーン等により変動します。最新の料金は必ず各公式サイトでご確認ください。</p>
            <ul className="bg-white rounded-xl p-6 md:p-8 border border-line space-y-3">
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">女性専門パーソナルトレーニングジムGROW</span><span className="text-brand-muted text-sm">60分×16回＋食事サポート 158,000円（税込・2026年6月キャンペーン時）</span></li>
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">RITA-STYLE 鹿児島天文館店</span><span className="text-brand-muted text-sm">月額 49,000円〜（入会金39,800円・キャンペーンで無料の場合あり）</span></li>
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">BELLOパーソナルトレーニングジム 天文館店</span><span className="text-brand-muted text-sm">45分コース 月4回 20,000円／都度払い 5,500円（入会金0円・縛りなし）</span></li>
            </ul>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">鹿児島で選ぶ際の注意点</h2>
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
            <p className="text-brand-muted leading-relaxed mb-4">鹿児島エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。掲載内容はすべて各ジムの公式サイトで確認した情報です（2026年6月時点）。</p>
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
      <RelatedAreas currentSlug="kagoshima" />
      <SiteFooter />
    </>
  )
}
