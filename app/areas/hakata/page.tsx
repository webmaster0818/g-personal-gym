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

// 掲載ジムは 2026年11月20日 に各公式の店舗ページで確認（女性専用の明記・住所・営業時間・料金）
// - UNDEUX SUPERBODY 博多スタジオ https://www.diet-undeux.jp/studio/hakata
// - ビーコンセプト 博多店 https://b-concept.tokyo/clublist/hakata/ （店舗一覧 https://b-concept.tokyo/clublist/ にも掲載）
// 博多駅周辺の他の候補（比較サイト掲載のみで公式に女性専用の明記を確認できないもの）は掲載していない

export const metadata: Metadata = {
  ...pageUrlMeta('/areas/hakata/'),
  title: '博多の女性専用パーソナルジム2選｜博多駅徒歩5〜6分・公式料金と1回あたりの費用',
  description: '博多駅周辺の女性専用パーソナルジム2選（UNDEUX SUPERBODY 博多スタジオ・ビーコンセプト 博多店）を、各公式サイトの店舗ページで確認した料金・営業時間・アクセスで比較しています。公式料金から計算した1回あたりの費用も掲載しています（2026年11月20日確認）。',
  keywords: '女性専用パーソナルジム,博多,博多駅,福岡,料金,比較,ダイエット',
}

const gyms = [
  {
    name: 'UNDEUX SUPERBODY 博多スタジオ',
    officialUrl: 'https://www.diet-undeux.jp/studio/hakata',
    price: 'スタンダードプラン ALL会員 月2回18,900円／月4回32,000円／月8回64,000円（税込）',
    trial: '無料体験0円（公式の店舗ページに記載）',
    features: ['女性専用', '月額制', '女性トレーナー在籍', 'マシンピラティス', '手ぶらOK'],
    description: '女性専用の月額制パーソナルジムです。平日9〜18時に通えるDAY会員は月4回27,500円・月8回55,000円（税込）です。宅配食30食と栄養士サポートが付くコミットプラン（月6回・1回50分）は79,200円（税込・宅配食送料別途）です。',
    access: '「博多駅」徒歩6分（駐車サービスあり：Seiwa Park 博多駅前）',
    address: '福岡県福岡市博多区博多駅前3-30-1 タイセイ第1ビル B1',
    options: ['DAY会員 月4回27,500円・月8回55,000円', 'コミットプラン 月6回79,200円'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '女性100%（女性専用）', purpose: ['ダイエット', 'ボディメイク', 'ピラティス'] },
    basicInfo: { hours: '8:00〜22:00', closed: '不定休', facilities: ['シャワールーム', 'マシンピラティス', 'ウェア・シューズ・タオル貸出'] },
  },
  {
    name: 'ビーコンセプト 博多店',
    officialUrl: 'https://b-concept.tokyo/clublist/hakata/',
    price: '太ももダイエットプログラム 89,842円×2ヶ月（18回・税込・入会金無料）',
    trial: '無料カウンセリング・体験トレーニングあり（公式の店舗ページに記載）',
    features: ['女性専用', '完全個室', '脚やせ・下半身特化', '託児所費用補助', '手ぶらOK'],
    description: '下半身・太もも痩せに特化した女性専用・完全個室のパーソナルジムです。個別シャワー室があり、近隣の託児施設を利用した場合は1セッションにつき最大1,000円を負担すると公式で案内されています。',
    access: '福岡市地下鉄七隈線「博多駅」徒歩5分／JR鹿児島本線「博多駅」徒歩7分',
    address: '福岡市博多区博多駅前3-10-2 ウーブル博多701',
    options: ['分割払い 2回目以降月々4,991円（税込）〜'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '女性100%（女性専用）', purpose: ['太もも痩せ', '下半身痩せ', '産後ダイエット'] },
    basicInfo: { hours: '7:00〜23:00', closed: '公式サイトでご確認ください', facilities: ['完全個室', '個別シャワー室'] },
  },
]

// 公式料金から計算した1回あたりの費用（税込）
const perSession = [
  { gym: 'UNDEUX SUPERBODY 博多スタジオ', plan: 'ALL会員 月2回', total: 18900, times: 2 },
  { gym: 'UNDEUX SUPERBODY 博多スタジオ', plan: 'ALL会員 月4回', total: 32000, times: 4 },
  { gym: 'UNDEUX SUPERBODY 博多スタジオ', plan: 'DAY会員 月4回（平日9〜18時）', total: 27500, times: 4 },
  { gym: 'UNDEUX SUPERBODY 博多スタジオ', plan: 'ALL会員 月8回', total: 64000, times: 8 },
  { gym: 'ビーコンセプト 博多店', plan: '太ももダイエットプログラム 2ヶ月（公式の支払総額）', total: 179685, times: 18 },
]
const yen = (n: number) => Math.round(n).toLocaleString()

const faqs = [
  { question: '博多で女性専用のパーソナルジムはどこですか？', answer: '公式サイトで女性専用と確認できたのは、UNDEUX SUPERBODY 博多スタジオ（博多駅徒歩6分）とビーコンセプト 博多店（地下鉄七隈線 博多駅徒歩5分）の2店です（2026年11月20日確認）。' },
  { question: '博多のパーソナルジムの料金の目安はいくらですか？', answer: 'UNDEUX SUPERBODY 博多スタジオは月額制で、ALL会員の月4回が32,000円、平日日中のDAY会員の月4回が27,500円です。ビーコンセプト 博多店は太ももダイエットプログラムが89,842円×2ヶ月（18回）です（いずれも税込・公式サイト記載）。' },
  { question: '1回あたりで比べるといくらですか？', answer: `公式料金を回数で割ると、UNDEUX SUPERBODY 博多スタジオは1回約${yen(27500 / 4)}〜${yen(18900 / 2)}円、ビーコンセプト 博多店は18回で計算して1回約${yen(179685 / 18)}円です。プランの内容（食事管理・時間帯・期間）が異なるため、総額と内容をあわせて比較してください。` },
  { question: '朝早く・夜遅くに通えるジムはありますか？', answer: '公式の営業時間は、ビーコンセプト 博多店が7:00〜23:00、UNDEUX SUPERBODY 博多スタジオが8:00〜22:00（不定休）です。UNDEUX SUPERBODYのDAY会員は平日9〜18時のみの利用です。' },
  { question: '子連れで通えるジムはありますか？', answer: 'ビーコンセプト 博多店は、託児所はないものの、近隣の託児施設を利用した場合に1セッションにつき最大1,000円を負担し、完全個室のため子ども連れも可能と案内しています。条件は公式サイトでご確認ください。' },
  { question: '天神のジムも比較したい場合は？', answer: '天神・大名エリアのジム（UNDEUX SUPERBODY 福岡・天神スタジオ、ビーコンセプト 福岡天神大名店）は福岡のページで紹介しています。' },
]

export default function HakataPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-accent text-xs mb-2">更新日 2026年11月20日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              博多の女性専用パーソナルジム<br className="hidden md:block" />{gyms.length}選・料金比較
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light">
              <Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}
              <span className="text-brand-muted">博多</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">本ページはG-PersonalGym編集部が作成しています。</p>
            <p className="text-brand-muted leading-relaxed mb-6">博多駅周辺で、公式サイトに「女性専用」と明記されているパーソナルジムは、当サイトの確認でUNDEUX SUPERBODY 博多スタジオとビーコンセプト 博多店の{gyms.length}店です。どちらも住所は博多区博多駅前3丁目で、公式の案内では駅から徒歩5〜7分です。月額制で回数を選ぶならUNDEUX SUPERBODY、太もも・下半身に絞った2ヶ月のコースならビーコンセプトという違いがあります。掲載情報は2026年11月20日に各公式サイトの店舗ページで確認したものです。</p>
            <p className="text-brand-muted leading-relaxed mb-6">比較サイトで博多の女性向けとして紹介されているジムでも、公式サイトで女性専用の明記を確認できなかったものは掲載していません。</p>
          </div>
        </section>

        <AreaContext slug="hakata" />

        <WhyWomenOnly area="博多" />

        <PriceComparisonTable gyms={gyms} areaName="博多" />

        <section className="py-16 bg-ivory" id="gyms">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">博多の女性専用パーソナルジム{gyms.length}選</h2>
            <div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-4 text-center">公式料金から計算した1回あたりの費用</h2>
            <p className="text-brand-light text-xs text-center mb-8">2026年11月20日・各公式サイトの店舗ページの料金（税込）を回数で割った当サイトの計算です。入会金・キャンペーンは含みません。</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-accent text-white">
                    <th className="px-4 py-3 text-left">ジム</th>
                    <th className="px-4 py-3 text-left">プラン</th>
                    <th className="px-4 py-3 text-left">料金</th>
                    <th className="px-4 py-3 text-left">回数</th>
                    <th className="px-4 py-3 text-left">1回あたり</th>
                  </tr>
                </thead>
                <tbody>
                  {perSession.map((r, i) => (
                    <tr key={i} className={i % 2 ? 'bg-ivory/50' : 'bg-white'}>
                      <td className="px-4 py-3 border-b border-line">{r.gym}</td>
                      <td className="px-4 py-3 border-b border-line">{r.plan}</td>
                      <td className="px-4 py-3 border-b border-line">{yen(r.total)}円</td>
                      <td className="px-4 py-3 border-b border-line">{r.times}回</td>
                      <td className="px-4 py-3 border-b border-line">約{yen(r.total / r.times)}円</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-brand-muted text-sm leading-relaxed mt-4">ビーコンセプトの店舗ページは、見出しが「2ヶ月／18回」、内容欄が「1回60分×16回のトレーニング」と表記が分かれています。16回で計算すると1回約{yen(179685 / 16)}円です。契約前に回数と1回の時間をご確認ください。UNDEUX SUPERBODYのコミットプラン（月6回79,200円）は宅配食30食と栄養士サポートを含むため、上の表には入れていません。</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">博多で選ぶ際の注意点</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="text-lg font-bold text-brand-text mb-3">JRと地下鉄で徒歩分数が変わる</h3>
                <p className="text-brand-muted leading-relaxed">ビーコンセプト 博多店は、公式で地下鉄七隈線の博多駅から徒歩5分、JR鹿児島本線の博多駅から徒歩7分と分けて案内しています。普段使う路線の改札から確認すると、通う負担を見積もりやすくなります。</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="text-lg font-bold text-brand-text mb-3">通える時間帯で料金が変わる</h3>
                <p className="text-brand-muted leading-relaxed">UNDEUX SUPERBODYは、平日9〜18時に限るDAY会員のほうが、ALL会員より月4回で4,500円安く設定されています。平日の日中に通える場合は、DAY会員も比較してください。</p>
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
            <p className="text-brand-muted text-sm leading-relaxed mt-6">天神・大名エリアのジムは<Link href="/areas/fukuoka/" className="text-accent underline">福岡の女性専用パーソナルジム</Link>、北九州は<Link href="/areas/kokura/" className="text-accent underline">小倉のページ</Link>で紹介しています。</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-brand-text mb-6 text-center">まとめ</h2>
            <p className="text-brand-muted leading-relaxed mb-4">博多駅周辺で公式に女性専用と確認できたパーソナルジムは{gyms.length}店です。回数と時間帯を選べる月額制のUNDEUX SUPERBODY 博多スタジオと、下半身に特化した2ヶ月コースのビーコンセプト 博多店で、料金の仕組みが異なります。</p>
            <p className="text-brand-muted leading-relaxed">料金やキャンペーンは変わることがあるため、各公式サイトで最新情報を確認し、無料の体験・カウンセリングで比較してから決めることをおすすめします。</p>
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
      <RelatedAreas currentSlug="hakata" />
      <SiteFooter />
    </>
  )
}
