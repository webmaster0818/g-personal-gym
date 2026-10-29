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
  description: '立川のおすすめ女性専用パーソナルジム4選を比較しています。ビーコンセプト・リボーンマイセルフ・UNDEUX SUPERBODY LIFEなど人気ジムの料金・口コミ・特徴を掲載しています。',
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
    address: '東京都立川市（立川駅徒歩4分）',
    popularPlan: { name: '太ももダイエットプログラム', description: '医師×トレーナー共同開発の脚やせメソッドです。1回60分のトレーニングを2ヶ月で行う集中プログラムです。', price: '2ヶ月18回 179,685円〜（税込）' },
    options: ['託児所費用補助（最大1,000円/回）', 'ウェア・タオル無料レンタル', '食事指導付き', '分割払い対応'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['太もも痩せ', 'ヒップアップ', '産後ダイエット', '美脚'] },
    basicInfo: { hours: '7:00〜23:00', closed: '公式サイトでご確認ください', facilities: ['完全個室', 'ロッカー', 'シャワー'] },
  },
  {
    name: 'リボーンマイセルフ 立川店',
    officialUrl: 'https://www.shapes-international.co.jp/store/tachikawa/',
    price: '8回 92,400円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '女性トレーナーのみ', '10年以上の実績', '産後ダイエット', 'リーズナブル'],
    description: '日本初の女性専用ダイエットジムです。トレーナーも全員女性です。60分×8回92,400円〜とリーズナブルな価格設定です。立川エリアの女性に長く愛されるジムです。',
    access: 'JR「立川駅」徒歩7分',
    address: '東京都立川市錦町2-1-26 Nビルディング501号室',
    popularPlan: { name: 'ダイエットコース 8回', description: '女性トレーナーによるマンツーマン指導します。60分×8回の短期集中です。', price: '8回 92,400円〜（税込）' },
    options: ['ウェアレンタル無料', '産後ダイエットコース', 'ブライダルダイエットコース', '部分痩せコース'],
    userProfile: { ageRange: '20代〜50代', genderRatio: '女性100%', purpose: ['ダイエット', '産後ダイエット', 'ブライダル', '部分痩せ'] },
    basicInfo: { hours: '平日10:00〜22:00／土日祝9:00〜19:00', closed: '公式サイトでご確認ください', facilities: ['ロッカー', 'ウェアレンタル'] },
  },
  {
    name: 'UNDEUX SUPERBODY LIFE 立川スタジオ',
    officialUrl: 'https://www.diet-undeux.jp/',
    price: 'スタンダードプラン月2回 20,500円〜（税込）',
    trial: '体験レッスンあり',
    features: ['女性専用', '月額制', '継続割あり', 'マンツーマン', '立川駅近'],
    description: '月額制の女性専用パーソナルジムです。月2回 20,500円（税込）から通え、継続割で2ヶ月目から月額が割引されます（最大10%）。プロのトレーナーがマンツーマンで指導します。',
    access: 'JR「立川駅」徒歩4分',
    address: '東京都立川市（立川駅徒歩4分）',
    popularPlan: { name: '月8回プラン', description: '月額制のマンツーマンパーソナルトレーニングです。', price: '月8回 66,800円（終日）／平日9〜18時のDAYプランは58,200円（税込）' },
    options: ['継続割あり', '月2回〜8回から選択', 'ウェアレンタル', 'シャワー完備'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '体型維持', '健康管理'] },
    basicInfo: { hours: '8:00〜22:00', closed: '不定休', facilities: ['トレーニングルーム', 'シャワー', 'ロッカー'] },
  },
  {
    name: 'エクササイズコーチ 立川',
    officialUrl: 'https://exercisecoach.co.jp/',
    price: '月額制（プラン・店舗により異なる）',
    trial: '無料体験あり',
    features: ['1回約20分', '月額制', 'AIマシン活用', '女性利用者が多い', '続けやすい'],
    description: '米国発のAIパーソナルジムです。1回約20分・月額制で、AIマシンが一人ひとりに最適な負荷を算出します。短時間で続けやすく、女性の利用者も多いのが特徴です。',
    access: '「立川」駅周辺',
    address: '立川エリア（最寄り店舗は公式サイトでご確認ください）',
    popularPlan: { name: '月額トレーニングプラン', description: 'AIマシンを活用した1回約20分のマンツーマントレーニングです。月額制のため、無理なく続けやすい料金体系です。', price: '月額制（プラン・店舗により異なる）' },
    options: ['ウェアレンタル', '手ぶらで通える', '女性スタッフ在籍店舗あり', '無料体験'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性が多数', purpose: ['ダイエット', 'ボディメイク', '運動習慣', '健康管理'] },
    basicInfo: { hours: '店舗により異なる', closed: '店舗により異なる', facilities: ['AIマシン', '個別ブース', 'ロッカー'] },
  },
]

const faqs = [
  { question: '立川で女性専用のパーソナルジムはどこがおすすめですか？', answer: 'ビーコンセプト、リボーンマイセルフ、UNDEUX SUPERBODY LIFEが立川で人気の女性専用ジムです。脚やせならビーコンセプトがおすすめです。' },
  { question: '立川のパーソナルジムの料金相場はいくらですか？', answer: '立川の2ヶ月コースは約18万〜22万円です。リボーンマイセルフの8回92,400円〜が最安です。都心部より若干リーズナブルな傾向があります。' },
  { question: '立川駅から最も近いジムはどこですか？', answer: 'ビーコンセプトとUNDEUX SUPERBODY LIFEが徒歩4分です。リボーンマイセルフは徒歩7分です。' },
  { question: '子連れで通えるジムはどこですか？', answer: 'ビーコンセプトには託児所費用の補助制度があります。立川は子育て世帯も多く、対応ジムがあります。' },
  { question: '体験は無料ですか？', answer: 'ビーコンセプト・リボーンマイセルフ・エクササイズコーチは無料カウンセリングです。UNDEUX SUPERBODY LIFEは体験レッスンがあります。' },
  { question: '月額制で通えるジムはどこですか？', answer: 'UNDEUX SUPERBODY LIFEは月額制で月2回〜8回から選べます。月2回 20,500円〜、月8回は66,800円（平日日中のDAYプランは58,200円・税込）です。継続割で長く通うほどお得になります。' },
  { question: '立川と八王子、どちらがジムの選択肢が多いですか？', answer: '立川のほうが女性専用ジムの選択肢が豊富です。JR中央線・南武線・多摩モノレールが交差するターミナル駅なのでアクセスも良好です。' },
  { question: '食事指導が充実しているジムはどこですか？', answer: 'エクササイズコーチは糖質制限なしの「食べて痩せる」メソッドです。ビーコンセプトは医師監修の食事指導を行っています。UNDEUX SUPERBODY LIFEもプロの食事アドバイスが受けられます。' },
  { question: '最も安いプランはどれですか？', answer: 'リボーンマイセルフの8回コース（92,400円〜）が最安です。短期間で試したい方におすすめです。月額制ならUNDEUX SUPERBODY LIFEの月2回プランです。' },
]

export default function TachikawaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-accent text-xs mb-2">更新日 2026年04月13日</p>
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
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-brand-text mb-4">コスパ重視</h3><ul className="space-y-2 text-sm"><li className="text-brand-muted">・リボーンマイセルフ（8回 92,400円〜）</li><li className="text-brand-muted">・ビーコンセプト（18回 179,685円〜）</li></ul></div>
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-brand-text mb-4">月額制で継続</h3><ul className="space-y-2 text-sm"><li className="text-brand-muted">・UNDEUX LIFE（月2回 20,500円〜）</li><li className="text-brand-muted">・継続割でお得に</li></ul></div>
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-brand-text mb-4">子連れ対応</h3><ul className="space-y-2 text-sm"><li className="text-brand-muted">・ビーコンセプト（託児所費用補助）</li></ul></div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-ivory">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">立川の料金相場</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-line"><h3 className="font-bold text-brand-text mb-3">2ヶ月集中コース</h3><p className="text-3xl font-bold text-accent mb-2">18万〜22万円</p><p className="text-sm text-brand-muted">都心部より若干リーズナブルです。</p></div>
              <div className="bg-white rounded-xl p-6 border border-line"><h3 className="font-bold text-brand-text mb-3">短期コース</h3><p className="text-3xl font-bold text-accent mb-2">9.2万円〜</p><p className="text-sm text-brand-muted">リボーンマイセルフ 8回92,400円〜です。まず試したい方に最適です。</p></div>
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
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl font-bold text-brand-text mb-6 text-center">まとめ</h2><p className="text-brand-muted leading-relaxed mb-4">立川エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。</p><p className="text-brand-muted leading-relaxed mb-4">脚やせならビーコンセプト、女性トレーナー希望ならリボーンマイセルフ、月額制ならUNDEUX SUPERBODY LIFEがおすすめです。</p><p className="text-brand-muted leading-relaxed">まずは気になるジムの体験レッスンをご利用ください。</p></div></section>
        <section className="py-16 bg-gradient-to-r from-accent to-accent-dark text-white"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl font-bold mb-4">まずは無料カウンセリングから</h2><p className="text-white/80 mb-8">複数のジムを比較し、ご自身に合ったジムをお選びください。</p><Link href="/ranking/" className="inline-block bg-white text-accent px-10 py-4 text-sm font-bold rounded-full hover:bg-accent-tint transition-all">おすすめランキングを見る</Link></div></section>
        <IntentGuideLinks />
      </main>
      <RelatedAreas currentSlug="tachikawa" />
      <SiteFooter />
    </>
  )
}
