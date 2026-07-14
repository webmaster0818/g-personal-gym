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
  alternates: { canonical: '/areas/tokorozawa/' },
  title: '【2026年7月最新】所沢の女性向けパーソナルジムおすすめ4選！料金比較',
  description: '【2026年7月最新】所沢のおすすめ女性向けパーソナルジム4選を比較。リボーンマイセルフ・Rprecious・Brillioなど、料金・体験・特徴を各公式サイトで確認のうえ掲載しています。',
  keywords: '女性専用パーソナルジム,所沢,埼玉,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'リボーンマイセルフ 所沢店',
    officialUrl: 'https://www.shapes-international.co.jp/store/tokorozawa/',
    price: 'ダイエットショートコース（2ヶ月16回）220,000円（入会金22,000円）',
    trial: 'カウンセリング・体験トレーニングとも0円',
    features: ['女性専用', 'トレーナー全員女性', '完全個室（1人1部屋）', '食事指導込み'],
    description: '女性専用・トレーナー全員女性のジム。完全個室（1人1部屋）で、食事指導込み。宅食オプションもあります。',
    access: '所沢駅東口 徒歩3分',
    address: '所沢市くすのき台3-1-13 烏山ビル4階',
    options: ['チケット8回101,200円〜', '宅食オプション'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '女性100%（女性専用）', purpose: ['ダイエット', 'ボディメイク'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['完全個室（1人1部屋）'] },
  },
  {
    name: 'Rprecious（リプレシャス）所沢店',
    officialUrl: 'https://rprecious.com/tokorozawa/',
    price: 'ダイエットコース16回 174,240円（50分制・入会金22,000円・分割月8,100円〜）',
    trial: '無料カウンセリング約1時間（体験トレーニング付き5,000円・当日入会で無料）',
    features: ['女性専用', '完全個室', '毎日LINE食事管理', '子連れOK'],
    description: '女性専用・完全個室のパーソナルジム。毎日のLINE食事管理と、卒業後3ヶ月のリバウンド保証つき。子連れOKです。',
    access: '所沢駅 徒歩7分',
    address: '所沢市御幸町3-13 COLORS所沢402',
    options: ['クイック8回87,120円', 'ボディメイク24回251,240円', '卒業後3ヶ月リバウンド保証'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '女性100%（女性専用）', purpose: ['ダイエット', 'ボディメイク', '産後ダイエット'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['完全個室'] },
  },
  {
    name: 'Brillio（ブリリオ）所沢店',
    officialUrl: 'https://brillio-personal.com/',
    price: '月2回 19,800円〜月8回 66,000円（1回あたり8,250〜9,900円）',
    trial: '無料体験（カウンセリング×トレーニング約50分）',
    features: ['女性専用', '完全個室', '食事サポート', '手ぶらOK'],
    description: '女性専用・完全個室のマンツーマンジム。「食べて痩せる」方針の食事サポートつきで、無料レンタルにより手ぶらで通えます。',
    access: '所沢駅西口 徒歩9分',
    address: '所沢市元町21-17 H-SQUARE元町201',
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '女性100%（女性専用）', purpose: ['ダイエット', 'ボディメイク'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['完全個室'] },
  },
  {
    name: 'UNDEUX SUPERBODY LIFE 所沢スタジオ',
    officialUrl: 'https://www.diet-undeux.jp/life/tokorozawa/',
    price: '月額制（金額は公式サイトでご確認ください）',
    trial: '初回体験0円（電話・WEB予約）',
    features: ['女性専用', '月額制', '管理栄養士の食事改善サポート'],
    description: 'UNDEUXの月額制ライン「LIFE」の新店舗（2026年3月オープン）。女性専用で、管理栄養士による食事改善サポートやヘルシー宅配食があります。',
    access: '所沢エリア（所在地・徒歩分数は公式サイトでご確認ください）',
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '女性100%（女性専用）', purpose: ['ダイエット', '食事改善'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['公式サイトでご確認ください'] },
  },
]

const faqs = [
  { question: '所沢で女性専用のパーソナルジムはどこ？', answer: '公式サイトで女性専用（または女性専門）と確認できたのは、リボーンマイセルフ 所沢店、Rprecious（リプレシャス）所沢店、Brillio（ブリリオ）所沢店、UNDEUX SUPERBODY LIFE 所沢スタジオです（2026年6月調査時点）。' },
  { question: '所沢のパーソナルジムの料金の目安は？', answer: '公式サイト掲載の料金では、リボーンマイセルフ 所沢店はダイエットショートコース（2ヶ月16回）220,000円（入会金22,000円）。Rprecious（リプレシャス）所沢店はダイエットコース16回 174,240円（50分制・入会金22,000円・分割月8,100円〜）。Brillio（ブリリオ）所沢店は月2回 19,800円〜月8回 66,000円（1回あたり8,250〜9,900円）。キャンペーン等で変動するため最新は各公式サイトでご確認ください。' },
  { question: '所沢駅から近いジムは？', answer: '駅徒歩3分以内・直結では、リボーンマイセルフ 所沢店（所沢駅東口 徒歩3分）があります。' },
  { question: '体験やカウンセリングは無料で受けられる？', answer: 'リボーンマイセルフ 所沢店、Rprecious（リプレシャス）所沢店、Brillio（ブリリオ）所沢店、UNDEUX SUPERBODY LIFE 所沢スタジオは無料の体験またはカウンセリングを実施しています（公式サイト記載・2026年6月時点）。有料体験でも当日入会で無料になるジムがあります。' },
  { question: '子連れで通えるジムはある？', answer: 'Rprecious（リプレシャス）所沢店が子連れ対応（キッズスペース・ベビーサークル・託児補助など）を公式に案内しています。条件は各公式サイトでご確認ください。' },
  { question: '初心者でも大丈夫？', answer: 'はい。パーソナルジムはマンツーマン指導が基本のため、運動経験がなくても一人ひとりのレベルに合わせてメニューを組んでもらえます。不安な場合は体験時に運動歴を伝えて相談しましょう。' },
]

export default function TokorozawaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-accent text-xs mb-2">更新日 2026年06月12日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              【2026年7月最新】所沢の女性向けパーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選！料金比較
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light">
              <Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}
              <span className="text-brand-muted">所沢</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">こんにちは、G-PersonalGym編集部です。</p>
            <p className="text-brand-muted leading-relaxed mb-6">「所沢で女性が通いやすいパーソナルジムを探している」「駅近で通いやすいジムが知りたい」という方のために、所沢エリアの女性向けパーソナルジム{gyms.length}選をまとめました。掲載情報はすべて各ジムの公式サイトで確認したものです（2026年6月時点）。</p>
            <div className="bg-ivory border-l-4 border-accent p-6 mb-8">
              <h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-brand-muted">
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>所沢で女性向けのパーソナルジムを探している</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>駅近で通いやすいジムが良い</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>料金を比較して選びたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>体験を受けてから決めたい</span></li>
              </ul>
            </div>
          </div>
        </section>

        <AreaContext slug="tokorozawa" />

        <WhyWomenOnly area="所沢" />

        <PriceComparisonTable gyms={gyms} areaName="所沢" />

        <section className="py-16 bg-ivory" id="gyms">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">所沢のおすすめ女性向けパーソナルジム{gyms.length}選</h2>
            <div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">目的別の選び方</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">女性専用にこだわる</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・リボーンマイセルフ 所沢店</li><li className="text-brand-muted">・Rprecious（リプレシャス）所沢店</li><li className="text-brand-muted">・Brillio（ブリリオ）所沢店</li></ul>
              </div>
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">月額制で始めやすい</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・リボーンマイセルフ 所沢店</li><li className="text-brand-muted">・Brillio（ブリリオ）所沢店</li><li className="text-brand-muted">・UNDEUX SUPERBODY LIFE 所沢スタジオ</li></ul>
              </div>
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">完全個室でマンツーマン</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・リボーンマイセルフ 所沢店</li><li className="text-brand-muted">・Rprecious（リプレシャス）所沢店</li><li className="text-brand-muted">・Brillio（ブリリオ）所沢店</li></ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-ivory">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-4 text-center">所沢の料金一覧【2026年6月・公式サイト調べ】</h2>
            <p className="text-brand-light text-xs text-center mb-8">キャンペーン等により変動します。最新の料金は必ず各公式サイトでご確認ください。</p>
            <ul className="bg-white rounded-xl p-6 md:p-8 border border-line space-y-3">
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">リボーンマイセルフ 所沢店</span><span className="text-brand-muted text-sm">ダイエットショートコース（2ヶ月16回）220,000円（入会金22,000円）</span></li>
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">Rprecious（リプレシャス）所沢店</span><span className="text-brand-muted text-sm">ダイエットコース16回 174,240円（50分制・入会金22,000円・分割月8,100円〜）</span></li>
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">Brillio（ブリリオ）所沢店</span><span className="text-brand-muted text-sm">月2回 19,800円〜月8回 66,000円（1回あたり8,250〜9,900円）</span></li>
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">UNDEUX SUPERBODY LIFE 所沢スタジオ</span><span className="text-brand-muted text-sm">月額制（金額は公式サイトでご確認ください）</span></li>
            </ul>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">所沢で選ぶ際の注意点</h2>
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
            <p className="text-brand-muted leading-relaxed mb-4">所沢エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。掲載内容はすべて各ジムの公式サイトで確認した情報です（2026年6月時点）。</p>
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
      <RelatedAreas currentSlug="tokorozawa" />
      <SiteFooter />
    </>
  )
}
