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

// 掲載ジムは 2026年11月27日 に各公式の店舗ページで確認（女性専用・女性専門店の明記・住所・営業時間・料金）
// - かたぎり塾 綱島女性専門店 https://katagirijuku.jp/gyms/tsunashima-women （店舗一覧 https://katagirijuku.jp/gyms にも掲載）
// - TOKIEL 綱島店 https://tokiel.jp/shop/tsunashima/ （店舗名「女性専用パーソナルトレーニングジム TOKIEL綱島店」・料金は https://tokiel.jp/price ）
// かたぎり塾 綱島店（女性専門店ではない店舗）と、公式サイトで女性専用の明記を確認できない店舗は掲載していない

export const metadata: Metadata = {
  ...pageUrlMeta('/areas/tsunashima/'),
  title: '綱島の女性専用パーソナルジム2選｜かたぎり塾・TOKIELの公式料金と1回あたりの費用',
  description: '綱島駅周辺の女性専用パーソナルジム2選（かたぎり塾 綱島女性専門店・TOKIEL 綱島店）を、各公式サイトの店舗ページと料金ページで確認した料金・営業時間・アクセスで比較しています。1回あたりの費用は約7,040〜13,750円です（2026年11月27日確認）。',
  keywords: '女性専用パーソナルジム,綱島,新綱島,横浜市港北区,料金,比較,ダイエット',
}

const gyms = [
  {
    name: 'かたぎり塾 綱島女性専門店',
    officialUrl: 'https://katagirijuku.jp/gyms/tsunashima-women',
    price: '月4回プラン 33,000円（1回8,250円）／月8回プラン 59,400円（1回7,425円）（税込・1回60分）',
    trial: '無料体験あり（相談のみも可と公式の店舗ページに記載）',
    features: ['女性専門店', '女性トレーナー', '完全個室', '月額制・無期限チケット', '綱島駅徒歩2分'],
    description: '公式の店舗ページで「女性専門店」「女性のための完全個室空間」と案内されている、かたぎり塾の綱島の女性専門店です。月4回・月8回の月額プランのほか、有効期限のない1回8,800円のチケットがあり、月単位でプランを変更できます。入会金は55,000円で、体験当日に入会すると22,000円割り引かれると店舗ページに記載されています。',
    access: '東急東横線「綱島駅」徒歩2分',
    address: '神奈川県横浜市港北区綱島東2丁目1-5 泉山ビル 401号室',
    options: ['無期限チケット 1回8,800円（税込・有効期限なし）', 'LINE食事サポート（2週間）11,000円（税込）', 'ペアトレーニングの受付あり（公式のQ&Aに記載）'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '女性100%（女性専門店）', purpose: ['ダイエット', 'ボディメイク', '姿勢改善'] },
    basicInfo: { hours: '火・木・金 10:00〜22:00／土 9:00〜20:00', closed: '月・水・日曜日', facilities: ['完全個室', 'ウェア・シューズ・タオルの無料レンタル'] },
  },
  {
    name: 'TOKIEL（トキエル）綱島店',
    officialUrl: 'https://tokiel.jp/shop/tsunashima/',
    price: '回数券 4回 29,920円〜20回 140,800円（税込・1回40分）／フリータイム通い放題 月59,400円（1日30分）',
    trial: '体験 6,600円（税込・60〜90分・即日入会で返金と公式の料金ページに記載）',
    features: ['女性専用', '整体・ストレッチを組み合わせた指導', '回数券・通い放題', '8:00〜23:00営業', '綱島駅徒歩5分'],
    description: '公式の店舗ページの店名が「女性専用パーソナルトレーニングジム TOKIEL綱島店」となっている店舗です。レッスン内容はトレーニング・ストレッチ・姿勢改善・機能改善・整体と案内されています。料金は公式の料金ページによるもので、入会金は22,000円です（短期集中プランを除く）。店舗ごとに体験キャンペーンが異なるため、予約時にご確認ください。',
    access: '東急東横線「綱島駅」徒歩5分／「新綱島駅」徒歩7分',
    address: '神奈川県横浜市港北区綱島西2丁目11-2 パシフィック・パレス綱島 203号室',
    options: ['デイタイム通い放題（平日9:00〜18:00）月47,000円（税込）', '短期集中フルサポートプラン 16回 220,000円（税込・1回50分・入会金込み・毎月1名まで）', '食事サポート 月11,000円（税込）'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '女性100%（女性専用）', purpose: ['ダイエット', '姿勢改善', 'ボディメイク'] },
    basicInfo: { hours: '8:00〜23:00', closed: '不定休', facilities: ['ウェア・シューズのレンタル無料', 'ロッカールーム'] },
  },
]

// 公式料金から計算した1回あたりの費用（税込）
const perSession = [
  { gym: 'かたぎり塾 綱島女性専門店', plan: '月4回プラン（1ヶ月）', total: 33000, times: 4, minutes: 60 },
  { gym: 'かたぎり塾 綱島女性専門店', plan: '月8回プラン（1ヶ月）', total: 59400, times: 8, minutes: 60 },
  { gym: 'かたぎり塾 綱島女性専門店', plan: '無期限チケット 1回', total: 8800, times: 1, minutes: 60 },
  { gym: 'TOKIEL 綱島店', plan: '回数券 4回（期限1ヵ月）', total: 29920, times: 4, minutes: 40 },
  { gym: 'TOKIEL 綱島店', plan: '回数券 20回（期限5ヵ月）', total: 140800, times: 20, minutes: 40 },
  { gym: 'TOKIEL 綱島店', plan: '短期集中フルサポートプラン', total: 220000, times: 16, minutes: 50 },
]
const yen = (n: number) => Math.round(n).toLocaleString()
const per = perSession.map((r) => r.total / r.times)
const minPer = Math.min(...per)
const maxPer = Math.max(...per)

// 初月の支払額（入会金＋最初の1ヶ月分・税込）
const katagiriFirst = 33000 + 33000 // 体験当日入会の入会金33,000円＋月4回
const katagiriFirstRegular = 55000 + 33000 // 通常の入会金55,000円＋月4回
const tokielFirst = 22000 + 29920 // 入会金22,000円＋4回券
// TOKIEL フリータイム通い放題が4回券・20回券の1回単価より割安になる月の回数
const freeTime = 59400
const breakEven4 = Math.ceil(freeTime / (29920 / 4))
const breakEven20 = Math.ceil(freeTime / (140800 / 20))

const faqs = [
  { question: '綱島で女性専用のパーソナルジムはどこですか？', answer: '公式サイトで女性専用（女性専門店）と確認できたのは、かたぎり塾 綱島女性専門店（綱島駅徒歩2分）とTOKIEL 綱島店（綱島駅徒歩5分）の2店です（2026年11月27日確認）。' },
  { question: '綱島のパーソナルジムの料金の目安はいくらですか？', answer: 'かたぎり塾 綱島女性専門店は月4回プランが33,000円、月8回プランが59,400円です。TOKIEL 綱島店は回数券4回が29,920円、フリータイム通い放題が月59,400円です（いずれも税込・公式サイト記載）。' },
  { question: '1回あたりで比べるといくらですか？', answer: `公式料金を回数で割ると、2店のプランは1回約${yen(minPer)}〜${yen(maxPer)}円です。ただし1回の時間は、かたぎり塾が60分、TOKIELの回数券が40分と異なります。1分あたりに直すと、かたぎり塾の月8回プランは約${yen(59400 / 8 / 60)}円、TOKIELの4回券は約${yen(29920 / 4 / 40)}円です。` },
  { question: '入会金はいくらかかりますか？', answer: `かたぎり塾 綱島女性専門店の入会金は55,000円で、体験当日に入会すると33,000円になると店舗ページに記載されています。TOKIELの入会金は22,000円です（短期集中プランは入会金込み）。入会金と最初の1ヶ月分を合わせると、かたぎり塾（月4回・当日入会）は${yen(katagiriFirst)}円、TOKIEL（4回券）は${yen(tokielFirst)}円です。` },
  { question: '日曜日や早朝に通えますか？', answer: 'かたぎり塾 綱島女性専門店は月・水・日曜日が定休日で、営業は火・木・金が10:00〜22:00、土曜日が9:00〜20:00です。TOKIEL 綱島店の営業時間は8:00〜23:00（不定休）です。日曜日や朝8時台に通いたい場合はTOKIELが候補になります。' },
  { question: '横浜駅周辺のジムも比較したい場合は？', answer: '横浜駅周辺の女性専用パーソナルジムは横浜のページで紹介しています。東急東横線で通える武蔵小杉のページもあわせてご覧ください。' },
]

export default function TsunashimaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-accent text-xs mb-2">更新日 2026年11月27日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              綱島の女性専用パーソナルジム<br className="hidden md:block" />{gyms.length}選・料金比較
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light">
              <Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}
              <span className="text-brand-muted">綱島</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">本ページはG-PersonalGym編集部が作成しています。</p>
            <p className="text-brand-muted leading-relaxed mb-6">綱島駅の周辺で、公式サイトに「女性専用」または「女性専門店」と明記されているパーソナルジムは、当サイトの確認でかたぎり塾 綱島女性専門店とTOKIEL 綱島店の{gyms.length}店です。1回60分の月額制で通うならかたぎり塾、整体やストレッチを組み合わせた40分の回数券や通い放題で通うならTOKIELという違いがあります。掲載情報は2026年11月27日に各公式サイトの店舗ページ・料金ページで確認したものです。</p>
            <p className="text-brand-muted leading-relaxed mb-6">綱島には男女とも利用できるパーソナルジムの店舗もありますが、本ページでは公式に女性専用・女性専門店と明記されている店舗のみ掲載しています。</p>
          </div>
        </section>

        <AreaContext slug="tsunashima" />

        <WhyWomenOnly area="綱島" />

        <PriceComparisonTable gyms={gyms} areaName="綱島" />

        <section className="py-16 bg-ivory" id="gyms">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">綱島の女性専用パーソナルジム{gyms.length}選</h2>
            <div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-4 text-center">公式料金から計算した1回あたりの費用</h2>
            <p className="text-brand-light text-xs text-center mb-8">2026年11月27日・各公式サイトの料金（税込）を回数で割った当サイトの計算です。入会金・キャンペーンは含みません。</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-accent text-white">
                    <th className="px-4 py-3 text-left">ジム</th>
                    <th className="px-4 py-3 text-left">プラン</th>
                    <th className="px-4 py-3 text-left">料金</th>
                    <th className="px-4 py-3 text-left">回数・時間</th>
                    <th className="px-4 py-3 text-left">1回あたり</th>
                    <th className="px-4 py-3 text-left">1分あたり</th>
                  </tr>
                </thead>
                <tbody>
                  {perSession.map((r, i) => (
                    <tr key={i} className={i % 2 ? 'bg-ivory/50' : 'bg-white'}>
                      <td className="px-4 py-3 border-b border-line">{r.gym}</td>
                      <td className="px-4 py-3 border-b border-line">{r.plan}</td>
                      <td className="px-4 py-3 border-b border-line">{yen(r.total)}円</td>
                      <td className="px-4 py-3 border-b border-line">{r.times}回・{r.minutes}分</td>
                      <td className="px-4 py-3 border-b border-line">約{yen(r.total / r.times)}円</td>
                      <td className="px-4 py-3 border-b border-line">約{yen(r.total / r.times / r.minutes)}円</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-brand-muted text-sm leading-relaxed mt-4">TOKIELの料金は公式の料金ページ（全店共通の表示）によるもので、回数券は2026年10月1日以降の購入分から、入会は2026年9月1日以降から新料金が適用されると案内されています。TOKIELのフリータイム通い放題（月59,400円・1日30分）は、4回券の1回単価で比べると月{breakEven4}回以上、20回券の1回単価で比べると月{breakEven20}回以上通う場合に割安になります（当サイト計算。1回の時間は通い放題が30分、回数券が40分で異なります）。</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">綱島で選ぶ際の注意点</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="text-lg font-bold text-brand-text mb-3">1回の時間が60分と40分で異なる</h3>
                <p className="text-brand-muted leading-relaxed">かたぎり塾は1回60分、TOKIELの回数券は1回40分（通い放題は1日30分）です。1回あたりではTOKIELの回数券（約{yen(140800 / 20)}〜{yen(29920 / 4)}円）とかたぎり塾の月額プラン（約{yen(59400 / 8)}〜{yen(33000 / 4)}円）は近い水準ですが、1分あたりではかたぎり塾の月8回プランが約{yen(59400 / 8 / 60)}円、TOKIELの4回券が約{yen(29920 / 4 / 40)}円となります。</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="text-lg font-bold text-brand-text mb-3">初月の支払額は入会金で差がつく</h3>
                <p className="text-brand-muted leading-relaxed">入会金と最初の1ヶ月分の合計は、かたぎり塾（月4回）が体験当日入会で{yen(katagiriFirst)}円・通常の入会金で{yen(katagiriFirstRegular)}円、TOKIEL（4回券）が{yen(tokielFirst)}円です（当サイト計算・税込）。かたぎり塾の入会金の割引額は店舗ごとに異なると案内されているため、体験時にご確認ください。</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="text-lg font-bold text-brand-text mb-3">通える曜日・時間帯を先に確認する</h3>
                <p className="text-brand-muted leading-relaxed">かたぎり塾 綱島女性専門店は月・水・日曜日が定休日で、営業日は火・木・金曜日と土曜日です。TOKIEL 綱島店は8:00〜23:00（不定休）のため、日曜日や出勤前の時間帯に通う場合はTOKIELが候補になります。2店とも東急東横線の綱島駅から徒歩圏で、TOKIELは新綱島駅からも徒歩7分です。</p>
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
            <p className="text-brand-muted text-sm leading-relaxed mt-6">横浜駅周辺のジムは<Link href="/areas/yokohama/" className="text-accent underline">横浜の女性専用パーソナルジム</Link>、東急東横線沿いでは<Link href="/areas/musashikosugi/" className="text-accent underline">武蔵小杉の女性専用パーソナルジム</Link>、チケット制の料金は<Link href="/articles/tsudobarai/" className="text-accent underline">都度払い・チケット制のパーソナルジム</Link>で比較しています。</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-brand-text mb-6 text-center">まとめ</h2>
            <p className="text-brand-muted leading-relaxed mb-4">綱島駅の周辺で公式に女性専用・女性専門店と確認できたパーソナルジムは{gyms.length}店です。1回60分の月額制と無期限チケットのかたぎり塾 綱島女性専門店と、40分の回数券・通い放題を選べるTOKIEL 綱島店で、料金の仕組みと営業日が異なります。</p>
            <p className="text-brand-muted leading-relaxed">料金やキャンペーンは変わることがあるため、各公式サイトで最新情報を確認し、体験で比較してから決めることをおすすめします。</p>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-accent to-accent-dark text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-4">まずは体験から</h2>
            <p className="text-white/80 mb-8">複数のジムを比較し、ご自身に合ったジムをお選びください。</p>
            <Link href="/ranking/" className="inline-block bg-white text-accent px-10 py-4 text-sm font-bold rounded-full hover:bg-accent-tint transition-all">おすすめランキングを見る</Link>
          </div>
        </section>
        <IntentGuideLinks />
      </main>
      <RelatedAreas currentSlug="tsunashima" />
      <SiteFooter />
    </>
  )
}
