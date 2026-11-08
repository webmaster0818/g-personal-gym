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
  ...pageUrlMeta('/areas/tachikawa/'),
  title: '立川の女性専用パーソナルジムおすすめ4選｜料金比較',
  description: '立川の女性専用パーソナルジム3店（ビーコンセプト 2ヶ月18回179,685円・リボーンマイセルフ 2ヶ月16回220,000円・UNDEUX 月2回20,500円）と、エクササイズコーチ 月4回17,600円を公式料金で比較（2026年11月確認）。',
  keywords: '女性専用パーソナルジム,立川,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'ビーコンセプト 立川店',
    officialUrl: 'https://b-concept.tokyo/clublist/tachikawa/',
    price: '2ヶ月18回 179,685円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '下半身特化', '医師×トレーナー共同開発', '託児所費用補助', '完全個室'],
    description: '医師とトレーナーが共同開発した脚やせメソッドです。立川エリアで下半身太りに悩む女性に特化しています。完全個室で、託児所費用の補助があります。',
    access: 'JR「立川駅」徒歩4分',
    address: '東京都立川市曙町2-32-3 サンパレス立川701',
    popularPlan: { name: '太ももダイエットプログラム', description: '医師×トレーナー共同開発の脚やせメソッドです。1回60分のトレーニングを2ヶ月で行う集中プログラムです。', price: '2ヶ月18回 179,685円〜（税込）' },
    options: ['託児所費用補助（最大1,000円/回）', 'ウェア・タオル無料レンタル', '食事指導付き', '分割払い対応'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '女性100%', purpose: ['太もも痩せ', 'ヒップアップ', '産後ダイエット', '美脚'] },
    basicInfo: { hours: '7:00〜23:00', closed: '公式サイトでご確認ください', facilities: ['完全個室', '個別シャワー室'] },
  },
  {
    name: 'リボーンマイセルフ 立川店',
    officialUrl: 'https://www.shapes-international.co.jp/store/tachikawa/',
    price: 'チケット8回 101,200円（税込）／平日12〜16時のデイタイム 92,400円（税込）',
    trial: 'カウンセリング・体験トレーニングとも無料',
    features: ['女性専用', '女性トレーナーのみ', '10年以上の実績', '産後ダイエット', 'リーズナブル'],
    description: '女性専用のダイエットジムです。トレーナーも全員女性です。チケット8回は101,200円（税込）で、平日12〜16時のデイタイムは92,400円（税込）です。立川エリアの女性に長く愛されるジムです。',
    access: 'JR「立川駅」徒歩7分',
    address: '東京都立川市錦町2-1-26 Nビルディング501号室',
    popularPlan: { name: 'ショートコース（2ヶ月16回）', description: '女性トレーナーによるマンツーマン指導と食事改善のダイエットプランです。', price: '2ヶ月16回 220,000円（税込）' },
    options: ['ウェアレンタル無料', '産後ダイエットコース', 'ブライダルダイエットコース', '部分痩せコース'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '女性100%', purpose: ['ダイエット', '産後ダイエット', 'ブライダル', '部分痩せ'] },
    basicInfo: { hours: '平日10:00〜22:00／土祝9:00〜19:00', closed: '日曜日・木曜日', facilities: ['シャワールーム', '個室のパウダールーム'] },
  },
  {
    name: 'UNDEUX SUPERBODY 立川スタジオ',
    officialUrl: 'https://www.diet-undeux.jp/studio/tachikawa/',
    price: 'スタンダードプラン月2回 20,500円〜（税込）',
    trial: '体験トレーニング0円',
    features: ['女性専用', '月額制', '継続割あり', 'マンツーマン', '立川南駅徒歩3分'],
    description: '月額制の女性専用パーソナルジムです。月2回 20,500円（税込）から通え、継続割で2ヶ月目から月額が割引されます（最大10%）。プロのトレーナーがマンツーマンで指導します。',
    access: 'JR「立川駅」徒歩5分・多摩モノレール「立川南駅」徒歩3分',
    address: '東京都立川市柴崎町3-10-6 市川ビル4F',
    popularPlan: { name: '月8回プラン', description: '月額制のマンツーマンパーソナルトレーニングです。', price: '月8回 66,800円（終日）／平日9〜18時のDAYプランは58,200円（税込）' },
    options: ['継続割あり', '月2回〜8回から選択', 'レンタルシューズ・ウェア'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '体型維持', '健康管理'] },
    basicInfo: { hours: '8:00〜22:00（平日は9:00開店の場合あり）', closed: '不定休', facilities: ['レンタルシューズ・ウェア'] },
  },
  {
    name: 'エクササイズコーチ 立川店',
    officialUrl: 'https://exercisecoach.co.jp/store/tachikawa/',
    price: '月4回 17,600円（税込）〜',
    trial: '無料体験あり',
    features: ['1回約20分', '月額制', 'AIマシン活用', '男女利用可', '続けやすい'],
    description: 'AIマシンを使うパーソナルジムです。1回約20分・月額制で、立川南駅から徒歩1分です。女性専用ではなく、男女とも利用できます。',
    access: '多摩モノレール「立川南駅」徒歩1分・JR「立川駅」南口徒歩2分',
    address: '東京都立川市柴崎町3-8-2 ビルドはなさい3階',
    popularPlan: { name: 'スタンダード（全営業時間）', description: 'AIマシンを活用した1回約20分のマンツーマントレーニングです。月4回・月6回から選べます。', price: '月4回 17,600円／月6回 25,080円（税込）' },
    options: ['デイプラン（12〜17時）全日 月4回16,280円・平日 月4回14,960円（税込）', '入会金19,800円', 'レンタルウェア・シューズ', '無料体験（20分）'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '男女利用可（女性専用ではありません）', purpose: ['ダイエット', 'ボディメイク', '運動習慣', '健康管理'] },
    basicInfo: { hours: '平日10:00〜21:00／土日祝9:00〜20:00', closed: '年中無休（年末年始を除く）', facilities: ['AIマシン', 'レンタルウェア・シューズ'] },
  },
]

const faqs = [
  { question: '立川で女性専用のパーソナルジムはどこがおすすめですか？', answer: '公式サイトで女性専用と確認できたのは、ビーコンセプト 立川店、リボーンマイセルフ 立川店、UNDEUX SUPERBODY 立川スタジオの3店です（2026年11月8日確認）。脚やせならビーコンセプトがおすすめです。エクササイズコーチ 立川店は男女とも利用できます。' },
  { question: '立川のパーソナルジムの料金相場はいくらですか？', answer: '立川の2ヶ月コースは約18万〜22万円です。回数の少ないプランでは、リボーンマイセルフのチケット8回が101,200円（平日12〜16時のデイタイムは92,400円・税込）です。月額制ではエクササイズコーチの月4回17,600円（税込）が最も低い料金です（いずれも2026年11月8日に公式サイトで確認）。' },
  { question: '立川駅から最も近いジムはどこですか？', answer: 'エクササイズコーチ 立川店が立川駅南口から徒歩2分（立川南駅から徒歩1分）です。ビーコンセプトは立川駅から徒歩4分、UNDEUX SUPERBODYは立川駅から徒歩5分（立川南駅から徒歩3分）、リボーンマイセルフは徒歩7分です。' },
  { question: '子連れで通えるジムはどこですか？', answer: 'ビーコンセプトには託児所費用の補助制度があります。立川は子育て世帯も多く、対応ジムがあります。' },
  { question: '体験は無料ですか？', answer: 'ビーコンセプトは無料カウンセリング、リボーンマイセルフはカウンセリング・体験トレーニングとも0円、UNDEUX SUPERBODYは体験トレーニング0円、エクササイズコーチは20分の無料体験があります（2026年11月8日に公式サイトで確認）。' },
  { question: '月額制で通えるジムはどこですか？', answer: 'UNDEUX SUPERBODYは月額制で月2回〜8回から選べます。エクササイズコーチも月額制です（月4回17,600円〜・税込）。月2回 20,500円〜、月8回は66,800円（平日日中のDAYプランは58,200円・税込）です。継続割で長く通うほどお得になります。' },
  { question: '立川と八王子、どちらがジムの選択肢が多いですか？', answer: '立川のほうが女性専用ジムの選択肢が豊富です。JR中央線・南武線・多摩モノレールが交差するターミナル駅なのでアクセスも良好です。' },
  { question: '食事指導が充実しているジムはどこですか？', answer: 'リボーンマイセルフのダイエットプランは食事改善を含みます。ビーコンセプトの太ももダイエットプログラムには栄養指導が含まれます。UNDEUX SUPERBODYは食事相談が0円です。エクササイズコーチの立川店ページには食事指導の記載がありません。' },
  { question: '最も安いプランはどれですか？', answer: '月額では、エクササイズコーチの月4回17,600円（税込）、UNDEUX SUPERBODYの月2回20,500円（税込）が低い料金です。女性専用で回数を決めて試すなら、ビーコンセプトのトライアルプラン4回44,000円（税込）があります。' },
]

export default function TachikawaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-accent text-xs mb-2">更新日 2026年11月08日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              立川の女性専用パーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選・料金比較
            </h1>
          </div>
        </section>
        <section className="bg-white py-3 border-b border-line"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-brand-light"><Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}<span className="text-brand-muted">立川</span></nav></div></section>
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">本ページはG-PersonalGym編集部が作成しています。</p>
            <p className="text-brand-muted leading-relaxed mb-6">「立川で女性専用のパーソナルジムを探している」「多摩エリアで通いやすいジムが知りたい」という方のために、立川エリアでおすすめの女性向けパーソナルジム{gyms.length}選をまとめました。</p>
            <div className="bg-ivory border-l-4 border-accent p-6 mb-8">
              <h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-brand-muted">
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>立川で女性専用パーソナルジムを探している</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>多摩エリアから通いたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>料金を比較して選びたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>月額制で通いたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>下半身痩せしたい</span></li>
              </ul>
            </div>
          </div>
        </section>
        <AreaContext slug="tachikawa" />

        <WhyWomenOnly area="立川" />

        <PriceComparisonTable gyms={gyms} areaName="立川" />
        <section className="py-16 bg-ivory" id="gyms">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">立川のおすすめ女性向けパーソナルジム{gyms.length}選</h2>
            <div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">目的別おすすめ</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-brand-text mb-4">コスパ重視</h3><ul className="space-y-2 text-sm"><li className="text-brand-muted">・リボーンマイセルフ（8回 101,200円・デイタイム 92,400円）</li><li className="text-brand-muted">・ビーコンセプト（18回 179,685円〜）</li></ul></div>
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-brand-text mb-4">月額制で継続</h3><ul className="space-y-2 text-sm"><li className="text-brand-muted">・UNDEUX SUPERBODY（月2回 20,500円〜）</li><li className="text-brand-muted">・エクササイズコーチ（月4回 17,600円〜・男女利用可）</li><li className="text-brand-muted">・継続割でお得に</li></ul></div>
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-brand-text mb-4">子連れ対応</h3><ul className="space-y-2 text-sm"><li className="text-brand-muted">・ビーコンセプト（託児所費用補助）</li></ul></div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-ivory">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">立川の料金相場</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-line"><h3 className="font-bold text-brand-text mb-3">2ヶ月集中コース</h3><p className="text-3xl font-bold text-accent mb-2">18万〜22万円</p><p className="text-sm text-brand-muted">都心部より若干リーズナブルです。</p></div>
              <div className="bg-white rounded-xl p-6 border border-line"><h3 className="font-bold text-brand-text mb-3">短期コース</h3><p className="text-3xl font-bold text-accent mb-2">4.4万円〜</p><p className="text-sm text-brand-muted">ビーコンセプトのトライアルプラン4回44,000円、リボーンマイセルフのチケット8回101,200円（平日12〜16時のデイタイムは92,400円）です（税込・2026年11月8日に公式サイトで確認）。</p></div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">立川で選ぶ際の注意点</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-line"><h3 className="text-lg font-bold text-brand-text mb-3">多摩エリアのターミナル駅で交通至便</h3><p className="text-brand-muted leading-relaxed">立川はJR中央線・南武線・多摩モノレールが交差するターミナル駅です。多摩エリア各地からアクセスしやすいため、近隣の国立・国分寺・日野・昭島からも通いやすい立地です。</p></div>
              <div className="bg-white rounded-xl p-6 border border-line"><h3 className="text-lg font-bold text-brand-text mb-3">北口と南口でジムの場所が異なる</h3><p className="text-brand-muted leading-relaxed">立川駅は北口がルミネ・グランデュオなどの商業施設、南口はIKEA・ららぽーと方面です。ジムがどちら側にあるか事前にご確認ください。</p></div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-ivory">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">よくある質問</h2>
            <div className="space-y-4">{faqs.map((faq, index) => (<div key={index} className="border border-line rounded-xl overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-accent-tint transition"><h3 className="font-bold text-brand-text pr-4 text-sm">Q{index + 1}. {faq.question}</h3><svg className="w-5 h-5 text-accent group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-5 pb-5 text-brand-muted leading-relaxed text-sm">{faq.answer}</div></details></div>))}</div>
          </div>
        </section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl font-bold text-brand-text mb-6 text-center">まとめ</h2><p className="text-brand-muted leading-relaxed mb-4">立川エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。</p><p className="text-brand-muted leading-relaxed mb-4">脚やせならビーコンセプト、女性トレーナー希望ならリボーンマイセルフ、月額制ならUNDEUX SUPERBODYがおすすめです。</p><p className="text-brand-muted leading-relaxed">まずは気になるジムの体験レッスンをご利用ください。</p></div></section>
        <section className="py-16 bg-gradient-to-r from-accent to-accent-dark text-white"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl font-bold mb-4">まずは無料カウンセリングから</h2><p className="text-white/80 mb-8">複数のジムを比較し、ご自身に合ったジムをお選びください。</p><Link href="/ranking/" className="inline-block bg-white text-accent px-10 py-4 text-sm font-bold rounded-full hover:bg-accent-tint transition-all">おすすめランキングを見る</Link></div></section>
        <IntentGuideLinks />
      </main>
      <RelatedAreas currentSlug="tachikawa" />
      <SiteFooter />
    </>
  )
}
