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
  ...pageUrlMeta('/areas/osaka/'),
  title: '大阪（梅田・心斎橋）の女性専用パーソナルジムおすすめ3選｜料金比較',
  description: '大阪（梅田・心斎橋）の女性専用パーソナルジムの料金を2026年11月16日に公式で確認。梅田はUNDEUX 月2回20,500円（大阪梅田駅徒歩2分）、リボーンマイセルフ 2ヶ月16回184,800円（トレーナー全員女性・税込）。住所・営業時間も掲載。',
  keywords: '女性専用パーソナルジム,大阪（梅田・心斎橋）,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'UNDEUX SUPERBODY 梅田スタジオ',
    officialUrl: 'https://www.diet-undeux.jp/studio/umeda/',
    price: 'スタンダードプラン月2回 20,500円〜（税込）',
    trial: '無料体験トレーニング',
    features: ['女性専用', '女性トレーナー在籍', '宅配食30食付き（コミット）', '大阪梅田駅徒歩2分'],
    description: '梅田エリアの女性専用パーソナルジムです。食事管理を組み合わせたダイエットサポートを行っています（コミットプランは栄養士サポートと宅配食30食付き・送料別途）。',
    access: '阪急「大阪梅田駅」徒歩2分',
    address: '大阪府大阪市北区茶屋町4-4 茶屋町ガーデンビル2階',
    popularPlan: { name: 'コミットプラン', description: 'トレーニング月6回と栄養士による毎日の食事管理を組み合わせた月額制プランです（全店共通価格）。', price: '月額79,200円' },
    options: ['ウェアレンタル無料', 'タオル完備', '食事指導あり'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '姿勢改善'] },
    basicInfo: { hours: '8:00〜22:00（平日を中心に9:00開店の場合あり）', closed: '不定休', facilities: ['シャワールーム', 'パウダールーム'] },
  },
  {
    name: 'リボーンマイセルフ 梅田店',
    officialUrl: 'https://www.shapes-international.co.jp/store/umeda/',
    price: 'ショートコース2ヶ月16回 184,800円（税込・入会金22,000円）',
    trial: '無料カウンセリング・無料体験トレーニング（0円）',
    features: ['女性専用', '女性トレーナーのみ'],
    description: '女性トレーナーのみ在籍しています。梅田エリアの女性専用ジムです。',
    access: '阪急「梅田駅」茶屋町口徒歩4分・JR「大阪駅」徒歩5分',
    address: '大阪府大阪市北区芝田1-10-8 山中ビル2階',
    popularPlan: { name: 'ショートコース（2ヶ月16回）', description: '女性トレーナーのみ在籍しています。梅田エリアの女性専用ジムです。', price: '184,800円（税込）。入会金22,000円（店舗ページのキャンペーンで入会金無料＋全コース10％OFF）' },
    options: ['ウェアレンタル無料', 'タオル完備', '食事指導あり'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '姿勢改善'] },
    basicInfo: { hours: '平日10:00〜22:00／土日祝10:00〜19:00', closed: '公式サイトでご確認ください', facilities: ['シャワールーム', '個室のパウダールーム', 'パーソナルピラティスルーム'] },
  },
  {
    name: 'BURNS 本町店',
    price: '月額制（要問合せ）',
    trial: '体験レッスンあり',
    features: ['女性専用', '女性トレーナー', '本町駅近'],
    description: '大人の女性のきれいを叶える女性専用パーソナルジムです。本町・心斎橋エリアです。',
    access: '地下鉄「本町駅」徒歩5分',
    address: '地下鉄「本町駅」徒歩5分',
    popularPlan: { name: '人気プラン', description: '大人の女性のきれいを叶える女性専用パーソナルジムです。本町・心斎橋エリアです。', price: '月額制（要問合せ）' },
    options: ['ウェアレンタル無料', 'タオル完備', '食事指導あり'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '姿勢改善'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['完全個室', 'シャワー', 'ロッカー'] },
  }
]

const faqs = [
  { question: '大阪（梅田・心斎橋）で女性専用のパーソナルジムはどこがおすすめですか？', answer: 'UNDEUX SUPERBODY 梅田スタジオ、リボーンマイセルフ 梅田店が大阪（梅田・心斎橋）で人気の女性向けパーソナルジムです。それぞれ特徴が異なるので、体験レッスンで比較するのがおすすめです。' },
  { question: '大阪（梅田・心斎橋）のパーソナルジムの料金相場はいくらですか？', answer: '当サイト掲載店の公式料金（2026年11月16日確認・税込）は、リボーンマイセルフ 梅田店のショートコース2ヶ月16回184,800円、UNDEUX SUPERBODY 梅田スタジオの月2回20,500円・月4回33,400円です。BURNS 本町店の料金は公式サイトを確認できていません。' },
  { question: '初心者でも大丈夫ですか？', answer: 'はい、全ジムで初心者歓迎です。パーソナルジムはマンツーマン指導なので、運動経験がなくても安心して始められます。' },
  { question: '体験レッスンは無料で受けられますか？', answer: 'ジムによって異なります。無料カウンセリングや無料体験を実施しているジムも多いので、まずはお気軽にお問い合わせください。' },
  { question: 'どのくらいで効果が出ますか？', answer: '個人差はありますが、2ヶ月（16回）で平均5〜8kgの減量効果が期待できます。見た目の変化は、1ヶ月目から感じ始める方が多い傾向にあります。' },
  { question: '食事指導はありますか？', answer: 'ほとんどのパーソナルジムで食事指導が含まれています。LINEでの日々のサポートが一般的です。' },
  { question: 'ウェアは必要ですか？', answer: 'ほとんどのジムでウェア・タオルの無料レンタルがあります。手ぶらで通えるジムが大半を占めます。' },
  { question: '大阪（梅田・心斎橋）駅から近いジムはどこですか？', answer: 'UNDEUX SUPERBODY 梅田スタジオは阪急 大阪梅田駅から徒歩2分、リボーンマイセルフ 梅田店は阪急 梅田駅 茶屋町口から徒歩4分・JR大阪駅から徒歩5分です（各公式・2026年11月16日確認）。' },
  { question: 'リバウンドを防ぐサポートはありますか？', answer: '多くのジムでは卒業後のフォロープログラムが含まれています。' },
  { question: '子連れで通えるジムはどこですか？', answer: '掲載店の子連れ可否は、事前に各ジムにお問い合わせください。' },
]

export default function OsakaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-accent text-xs mb-2">更新日 2026年11月16日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              大阪（梅田・心斎橋）の女性専用パーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選・料金比較
            </h1>
          </div>
        </section>
        <section className="bg-white py-3 border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light"><Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}<span className="text-brand-muted">大阪（梅田・心斎橋）</span></nav>
          </div>
        </section>
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">本ページはG-PersonalGym編集部が作成しています。</p>
            <p className="text-brand-muted leading-relaxed mb-6">「大阪（梅田・心斎橋）で女性専用のパーソナルジムを探している」という方のために、大阪（梅田・心斎橋）エリアでおすすめの女性向けパーソナルジム{gyms.length}選をまとめました。</p>
            <p className="text-brand-muted leading-relaxed mb-6">梅田で女性専用と公式に記載があるのは、UNDEUX SUPERBODY 梅田スタジオ（阪急 大阪梅田駅徒歩2分・女性トレーナー在籍・月2回20,500円〜）とリボーンマイセルフ 梅田店（JR大阪駅徒歩5分・トレーナーも全員女性・2ヶ月16回184,800円）です（各公式サイト・2026年11月16日確認・税込）。心斎橋駅周辺の女性向けジム（UNDEUX SUPERBODY 心斎橋スタジオ・BODY SALVATION）は<Link href="/areas/shinsaibashi/" className="text-accent underline">心斎橋のページ</Link>で比べられます。料金はすぐ下の早見表をご覧ください。</p>
            <div className="bg-ivory border-l-4 border-accent p-6 mb-8">
              <h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-brand-muted">
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>大阪（梅田・心斎橋）で女性専用パーソナルジムを探している</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>駅近で通いやすいジムが良い</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>料金を比較して選びたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>食事指導も受けたい</span></li>
              </ul>
            </div>
          </div>
        </section>
        <AreaContext slug="osaka" />

        <WhyWomenOnly area="大阪（梅田・心斎橋）" />

        <PriceComparisonTable gyms={gyms} areaName="大阪（梅田・心斎橋）" />
        <section className="py-16 bg-ivory" id="gyms">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">大阪（梅田・心斎橋）のおすすめ女性向けパーソナルジム{gyms.length}選</h2>
            <div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">大阪（梅田・心斎橋）の料金相場</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="font-bold text-brand-text mb-3">2ヶ月集中コース</h3>
                <p className="text-3xl font-bold text-accent mb-2">184,800円</p>
                <p className="text-sm text-brand-muted">リボーンマイセルフ 梅田店のショートコース（2ヶ月16回・税込）です。入会金は22,000円（店舗ページのキャンペーンで無料）です（公式・2026年11月16日確認）。</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="font-bold text-brand-text mb-3">月額制</h3>
                <p className="text-3xl font-bold text-accent mb-2">20,500円〜/月</p>
                <p className="text-sm text-brand-muted">UNDEUX SUPERBODY 梅田スタジオの月2回20,500円・月4回33,400円・月8回66,800円（税込・公式・2026年11月16日確認）です。</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-ivory">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">大阪（梅田・心斎橋）で選ぶ際の注意点</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="text-lg font-bold text-brand-text mb-3">体験レッスンは2〜3ジムで比較</h3>
                <p className="text-brand-muted leading-relaxed">最低2〜3ジムの体験に行って、トレーナーとの相性や雰囲気を比較してから決めることをおすすめします。</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="text-lg font-bold text-brand-text mb-3">総額で比較する</h3>
                <p className="text-brand-muted leading-relaxed">コース料金だけでなく、入会金・オプション費用も含めた総額で比較することをおすすめします。キャンペーンにより入会金が無料になる場合も少なくありません。</p>
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
            <p className="text-brand-muted leading-relaxed mb-4">大阪（梅田・心斎橋）エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。</p>
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
      <RelatedAreas currentSlug="osaka" />
      <SiteFooter />
    </>
  )
}
