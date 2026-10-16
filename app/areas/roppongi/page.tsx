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
  ...pageUrlMeta('/areas/roppongi/'),
  title: '【2026年7月】六本木の女性専用パーソナルジムおすすめ2選！料金比較',
  description: '【2026年4月】六本木のおすすめ女性専用・女性向けパーソナルジム2選を比較しています。料金・口コミ・特徴を掲載しています。',
  keywords: '女性専用パーソナルジム,六本木,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'BEYOND 六本木店',
    price: '16回 281,600円〜（税込）',
    trial: '体験レッスンあり',
    features: ['コンテスト入賞トレーナー', '完全個室', '食事指導あり'],
    description: 'コンテスト入賞者多数在籍のハイクオリティジムです。女性利用者も多いです。',
    access: '東京メトロ「六本木駅」徒歩3分',
    address: '東京メトロ「六本木駅」徒歩3分',
    popularPlan: { name: '人気プラン', description: 'コンテスト入賞者多数在籍のハイクオリティジムです。女性利用者も多いです。', price: '16回 281,600円〜（税込）' },
    options: ['ウェアレンタル無料', 'タオル完備', '食事指導あり'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '姿勢改善'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['完全個室', 'シャワー', 'ロッカー'] },
  },
  {
    name: 'eviGym 六本木店',
    price: '月額制（要問合せ）',
    trial: '体験レッスンあり',
    features: ['女性利用者8割', '早朝対応', '柔軟な予約'],
    description: '利用者の8割が女性です。早朝7:30から夜22:00まで営業しています。幅広い目的に対応しています。',
    access: '東京メトロ「六本木駅」徒歩4分',
    address: '東京メトロ「六本木駅」徒歩4分',
    popularPlan: { name: '人気プラン', description: '利用者の8割が女性です。早朝7:30から夜22:00まで営業しています。幅広い目的に対応しています。', price: '月額制（要問合せ）' },
    options: ['ウェアレンタル無料', 'タオル完備', '食事指導あり'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '姿勢改善'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['完全個室', 'シャワー', 'ロッカー'] },
  }
]

const faqs = [
  { question: '六本木で女性専用のパーソナルジムはどこがおすすめですか？', answer: 'BEYOND 六本木店、eviGym 六本木店が六本木で人気の女性向けパーソナルジムです。それぞれ特徴が異なるので、体験レッスンで比較するのがおすすめです。' },
  { question: '六本木のパーソナルジムの料金相場はいくらですか？', answer: '六本木エリアの女性向けパーソナルジムの2ヶ月コース料金は約15万〜22万円です。月額制なら月12,000円〜30,000円程度から通えます。' },
  { question: '初心者でも大丈夫ですか？', answer: 'はい、全ジムで初心者歓迎です。パーソナルジムはマンツーマン指導なので、運動経験がなくても安心して始められます。' },
  { question: '体験レッスンは無料で受けられますか？', answer: 'ジムによって異なります。無料カウンセリングや無料体験を実施しているジムも多いので、まずはお気軽にお問い合わせください。' },
  { question: 'どのくらいで効果が出ますか？', answer: '個人差はありますが、2ヶ月（16回）で平均5〜8kgの減量効果が期待できます。見た目の変化は1ヶ月目から感じる方が多いです。' },
  { question: '食事指導はありますか？', answer: 'ほとんどのパーソナルジムで食事指導が含まれています。LINEでの日々のサポートが一般的です。' },
  { question: 'ウェアは必要ですか？', answer: 'ほとんどのジムでウェア・タオルの無料レンタルがあります。手ぶらで通えるジムが多いです。' },
  { question: '六本木駅から近いジムはどこですか？', answer: 'BEYOND 六本木店（六本木駅 徒歩3分）、eviGym 六本木店（六本木駅 徒歩4分）が駅から近いジムです。' },
  { question: 'リバウンドを防ぐサポートはありますか？', answer: 'OUTLINEは業界初の「生涯無料アフターサポート」があります。多くのジムでは卒業後のフォロープログラムが含まれています。' },
  { question: '子連れで通えるジムはどこですか？', answer: 'OUTLINEはベビーサークル全店完備です。事前に各ジムにお問い合わせください。' },
]

export default function RoppongiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-accent text-xs mb-2">更新日 2026年04月13日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              【2026年7月】六本木の女性専用パーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選！料金比較
            </h1>
          </div>
        </section>
        <section className="bg-white py-3 border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light"><Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}<span className="text-brand-muted">六本木</span></nav>
          </div>
        </section>
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">本ページはG-PersonalGym編集部が作成しています。</p>
            <p className="text-brand-muted leading-relaxed mb-6">「六本木で女性専用のパーソナルジムを探している」という方のために、六本木エリアでおすすめの女性向けパーソナルジム{gyms.length}選をまとめました。</p>
            <div className="bg-ivory border-l-4 border-accent p-6 mb-8">
              <h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-brand-muted">
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>六本木で女性専用パーソナルジムを探している</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>駅近で通いやすいジムが良い</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>料金を比較して選びたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>食事指導も受けたい</span></li>
              </ul>
            </div>
          </div>
        </section>
        <AreaContext slug="roppongi" />

        <WhyWomenOnly area="六本木" />

        <PriceComparisonTable gyms={gyms} areaName="六本木" />
        <section className="py-16 bg-ivory" id="gyms">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">六本木のおすすめ女性向けパーソナルジム{gyms.length}選</h2>
            <div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">六本木の料金相場【2026年4月】</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="font-bold text-brand-text mb-3">2ヶ月集中コース</h3>
                <p className="text-3xl font-bold text-accent mb-2">15万〜22万円</p>
                <p className="text-sm text-brand-muted">16回（週2回×2ヶ月）の一般的なコース料金です。入会金は別途2〜5万円程度です。</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="font-bold text-brand-text mb-3">月額制</h3>
                <p className="text-3xl font-bold text-accent mb-2">1.2万〜3万円/月</p>
                <p className="text-sm text-brand-muted">月4〜8回のプランです。継続しやすい料金設定です。</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-ivory">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">六本木で選ぶ際の注意点</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="text-lg font-bold text-brand-text mb-3">体験レッスンは2〜3ジムで比較</h3>
                <p className="text-brand-muted leading-relaxed">最低2〜3ジムの体験に行って、トレーナーとの相性や雰囲気を比較してから決めることをおすすめします。</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="text-lg font-bold text-brand-text mb-3">総額で比較する</h3>
                <p className="text-brand-muted leading-relaxed">コース料金だけでなく、入会金・オプション費用も含めた総額で比較することをおすすめします。キャンペーンで入会金無料になることも多いです。</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="text-lg font-bold text-brand-text mb-3">通いやすさを重視</h3>
                <p className="text-brand-muted leading-relaxed">継続が最も大切です。自宅や職場から通いやすい場所のジムを選ぶことをおすすめします。</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-white">
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
        <section className="py-16 bg-ivory">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">よくある質問</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-line rounded-xl overflow-hidden bg-white">
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
            <p className="text-brand-muted leading-relaxed mb-4">六本木エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。</p>
            <p className="text-brand-muted leading-relaxed mb-4">まずは気になるジムの体験レッスンをご利用ください。複数のジムを比較し、ご自身に合ったジムをお選びください。</p>
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
      <RelatedAreas currentSlug="roppongi" />
      <SiteFooter />
    </>
  )
}
