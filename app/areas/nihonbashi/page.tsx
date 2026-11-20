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
// - リボーンマイセルフ 東京店 https://www.shapes-international.co.jp/store/tokyo/ （店舗一覧 https://www.shapes-international.co.jp/store/ にも掲載）
// - ビーコンセプト 人形町店 https://b-concept.tokyo/clublist/ningyocho/ （店舗一覧 https://b-concept.tokyo/clublist/ にも掲載）
// 他ブランドの日本橋周辺店（かたぎり塾 茅場町・東日本橋＝男女利用可）と、公式サイトで女性専用の明記を確認できない店舗は掲載していない
// クレビック（東京日本橋店）は公式サイト https://www.crebiq.com/ が 2026年11月20日も 521 応答のため掲載していない

export const metadata: Metadata = {
  ...pageUrlMeta('/areas/nihonbashi/'),
  title: '日本橋の女性専用パーソナルジム2選｜リボーンマイセルフ・ビーコンセプトの公式料金と1回あたりの費用',
  description: '日本橋エリアの女性専用パーソナルジム2選（リボーンマイセルフ 東京店・ビーコンセプト 人形町店）を、各公式サイトの店舗ページで確認した料金・営業時間・アクセスで比較しています。1回あたりの費用は約9,350〜13,750円です（2026年11月20日確認）。',
  keywords: '女性専用パーソナルジム,日本橋,人形町,東京駅,料金,比較,ダイエット',
}

const gyms = [
  {
    name: 'リボーンマイセルフ 東京店',
    officialUrl: 'https://www.shapes-international.co.jp/store/tokyo/',
    price: 'ショートコース 2ヶ月16回 220,000円／ベーシックコース 3ヶ月24回 303,600円（税込）',
    trial: 'カウンセリング0円・体験トレーニング0円（公式の店舗ページに記載）',
    features: ['女性専用', 'トレーナー全員女性', 'チケットプランあり', '日本橋駅徒歩1分'],
    description: '公式の店舗ページで「女性専門のパーソナルトレーニングジム」「トレーナーも全員女性」と案内されています。食事改善を含むダイエットプランのほか、8〜48回から選ぶチケットプランがあり、平日12〜16時のデイタイムは1回あたりの料金が下がります。入会金は22,000円です。',
    access: '「日本橋駅」A6・A7出口 徒歩1分／「東京駅」八重洲北口 徒歩5分／「大手町駅」B7出口・「三越前駅」B5出口 徒歩6分',
    address: '東京都中央区日本橋2-1-20 ディア日本橋タワー12階',
    options: ['チケットプラン 8回 105,600円〜（税込・フルタイム）', 'デイタイム（平日12〜16時）48回 448,800円（1回9,350円）', '宅食付きコースあり'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '女性100%（女性専用）', purpose: ['ダイエット', 'ボディメイク', '食事改善'] },
    basicInfo: { hours: '平日10:00〜22:00／土日祝9:00〜19:00', closed: '公式サイトでご確認ください', facilities: ['1人1部屋のパウダールーム（シャワー付き）', 'ウェア・タオル無料レンタル'] },
  },
  {
    name: 'ビーコンセプト 人形町店',
    officialUrl: 'https://b-concept.tokyo/clublist/ningyocho/',
    price: '太ももダイエットプログラム 89,842円×2ヶ月（18回・税込・入会金無料）',
    trial: '無料カウンセリング・体験トレーニングあり（公式の店舗ページに記載）',
    features: ['女性専用', '完全個室', '脚やせ・下半身特化', '託児所費用補助', '人形町駅徒歩2分'],
    description: '下半身・太もも痩せに特化した女性専用・完全個室のパーソナルジムです。住所は中央区日本橋堀留町で、最寄りは人形町駅（A5出口）です。近隣の託児施設を利用した場合は、1セッションにつき最大1,000円を負担すると公式で案内されています。',
    access: '日比谷線・都営浅草線「人形町駅」A5出口 徒歩2分',
    address: '東京都中央区日本橋堀留町1-8-4 人形町448ビル 5階 501',
    options: ['トライアルプラン 4回 44,000円（税込・入会金38,500円はカウンセリング当日入会で無料）', '分割払い 2回目以降月々4,991円（税込）〜'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '女性100%（女性専用）', purpose: ['太もも痩せ', '下半身痩せ', '産後ダイエット'] },
    basicInfo: { hours: '7:00〜23:00', closed: '公式サイトでご確認ください', facilities: ['完全個室', 'シャワールーム', 'シューズ・靴下・タオル貸出'] },
  },
]

// 公式料金から計算した1回あたりの費用（税込）
const perSession = [
  { gym: 'リボーンマイセルフ 東京店', plan: 'ショートコース 2ヶ月', total: 220000, times: 16 },
  { gym: 'リボーンマイセルフ 東京店', plan: 'ベーシックコース 3ヶ月', total: 303600, times: 24 },
  { gym: 'リボーンマイセルフ 東京店', plan: 'チケット 8回（フルタイム）', total: 105600, times: 8 },
  { gym: 'リボーンマイセルフ 東京店', plan: 'チケット 48回（デイタイム・平日12〜16時）', total: 448800, times: 48 },
  { gym: 'ビーコンセプト 人形町店', plan: '太ももダイエットプログラム 2ヶ月（公式の支払総額）', total: 179685, times: 18 },
  { gym: 'ビーコンセプト 人形町店', plan: 'トライアルプラン', total: 44000, times: 4 },
]
const yen = (n: number) => Math.round(n).toLocaleString()
const per = perSession.map((r) => r.total / r.times)
const minPer = Math.min(...per)
const maxPer = Math.max(...per)

const faqs = [
  { question: '日本橋で女性専用のパーソナルジムはどこですか？', answer: '公式サイトで女性専用と確認できたのは、リボーンマイセルフ 東京店（日本橋駅徒歩1分）とビーコンセプト 人形町店（人形町駅徒歩2分・住所は日本橋堀留町）の2店です（2026年11月20日確認）。' },
  { question: '日本橋のパーソナルジムの料金の目安はいくらですか？', answer: 'リボーンマイセルフ 東京店はショートコース（2ヶ月16回）が220,000円、ビーコンセプト 人形町店は太ももダイエットプログラムが89,842円×2ヶ月（18回・支払総額179,685円）です（いずれも税込・公式サイト記載）。' },
  { question: '1回あたりで比べるといくらですか？', answer: `公式料金を回数で割ると、2店のプランは1回約${yen(minPer)}〜${yen(maxPer)}円です。最も低いのはリボーンマイセルフ 東京店のチケット48回（平日12〜16時のデイタイム）で、最も高いのは同店のショートコースです。ショートコースには食事改善のサポートが含まれるため、総額と内容をあわせて比較してください。` },
  { question: 'コースではなく回数券のように通えますか？', answer: 'リボーンマイセルフ 東京店には、8回から48回まで選べるチケットプランがあります（お弁当は付きません）。ビーコンセプト 人形町店は2ヶ月のプログラムと4回のトライアルプランです。1回ごとに支払う料金体系は、どちらの公式サイトにも記載がありません。' },
  { question: '女性トレーナーに担当してもらえますか？', answer: 'リボーンマイセルフ 東京店は、公式の店舗ページで「トレーナーも全員女性」と案内しています。ビーコンセプト 人形町店で女性トレーナーを希望する場合は、カウンセリングの予約時にご確認ください。' },
  { question: '銀座や東京駅周辺のジムも比較したい場合は？', answer: '銀座エリアのジム（UNDEUX SUPERBODY 銀座スタジオ・エクササイズコーチ 銀座店など）は銀座のページで紹介しています。リボーンマイセルフ 東京店は銀座のページにも掲載しています。' },
]

export default function NihonbashiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-accent text-xs mb-2">更新日 2026年11月20日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              日本橋の女性専用パーソナルジム<br className="hidden md:block" />{gyms.length}選・料金比較
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light">
              <Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}
              <span className="text-brand-muted">日本橋</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">本ページはG-PersonalGym編集部が作成しています。</p>
            <p className="text-brand-muted leading-relaxed mb-6">住所が中央区日本橋の地区にあり、公式サイトに「女性専用」と明記されているパーソナルジムは、当サイトの確認でリボーンマイセルフ 東京店とビーコンセプト 人形町店の{gyms.length}店です。リボーンマイセルフは日本橋駅・東京駅から歩ける位置にあり、ビーコンセプトは人形町駅が最寄りです。食事改善を含むコースやチケット制で通うならリボーンマイセルフ、太もも・下半身に絞った2ヶ月のプログラムならビーコンセプトという違いがあります。掲載情報は2026年11月20日に各公式サイトの店舗ページで確認したものです。</p>
            <p className="text-brand-muted leading-relaxed mb-6">茅場町・東日本橋には男女とも利用できるパーソナルジムの店舗もありますが、本ページでは公式に女性専用と明記されている店舗のみ掲載しています。</p>
          </div>
        </section>

        <AreaContext slug="nihonbashi" />

        <WhyWomenOnly area="日本橋" />

        <PriceComparisonTable gyms={gyms} areaName="日本橋" />

        <section className="py-16 bg-ivory" id="gyms">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">日本橋の女性専用パーソナルジム{gyms.length}選</h2>
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
            <p className="text-brand-muted text-sm leading-relaxed mt-4">リボーンマイセルフの入会金は22,000円で、上の表には含めていません。同店のコース料金は税込で、チケットプランにお弁当は付きません。ビーコンセプトの店舗ページは、見出しが「2ヶ月／18回」、内容欄が「1回60分×16回のトレーニング」と表記が分かれています。16回で計算すると1回約{yen(179685 / 16)}円です。契約前に回数と1回の時間をご確認ください。</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">日本橋で選ぶ際の注意点</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="text-lg font-bold text-brand-text mb-3">「日本橋」でも最寄り駅が異なる</h3>
                <p className="text-brand-muted leading-relaxed">2店とも住所は中央区日本橋ですが、リボーンマイセルフ 東京店は日本橋駅（A6・A7出口）から徒歩1分、ビーコンセプト 人形町店は人形町駅（A5出口）から徒歩2分です。通勤経路の駅から確認すると、通う負担を見積もりやすくなります。</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="text-lg font-bold text-brand-text mb-3">平日の昼に通えるかで料金が変わる</h3>
                <p className="text-brand-muted leading-relaxed">リボーンマイセルフのチケットプランは、平日12〜16時のデイタイムのほうがフルタイムより1回あたり1,100円程度低く設定されています（8回で1回13,200円→12,100円）。昼休みや在宅勤務の日に通える場合は、デイタイムも比較してください。</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="text-lg font-bold text-brand-text mb-3">朝7時から通えるのはビーコンセプト</h3>
                <p className="text-brand-muted leading-relaxed">公式の営業時間は、ビーコンセプト 人形町店が7:00〜23:00、リボーンマイセルフ 東京店が平日10:00〜22:00・土日祝9:00〜19:00です。リボーンマイセルフは「予約がない時間は営業していない場合がある」と案内しているため、来店前の連絡をおすすめします。</p>
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
            <p className="text-brand-muted text-sm leading-relaxed mt-6">銀座エリアのジムは<Link href="/areas/ginza/" className="text-accent underline">銀座の女性専用パーソナルジム</Link>、回数券・チケット制の料金は<Link href="/articles/tsudobarai/" className="text-accent underline">都度払い・チケット制のパーソナルジム</Link>で比較しています。</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-brand-text mb-6 text-center">まとめ</h2>
            <p className="text-brand-muted leading-relaxed mb-4">日本橋エリアで公式に女性専用と確認できたパーソナルジムは{gyms.length}店です。トレーナーが全員女性でチケットプランも選べるリボーンマイセルフ 東京店と、下半身に特化した2ヶ月プログラムのビーコンセプト 人形町店で、料金の仕組みが異なります。</p>
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
      <RelatedAreas currentSlug="nihonbashi" />
      <SiteFooter />
    </>
  )
}
