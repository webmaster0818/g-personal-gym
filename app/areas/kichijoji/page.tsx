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
  ...pageUrlMeta('/areas/kichijoji/'),
  title: '吉祥寺の女性専用パーソナルジムおすすめ3選｜料金比較',
  description: '吉祥寺のおすすめ女性専用パーソナルジム3選を比較しています。ビーコンセプト・UNDEUX SUPERBODY・リボーンマイセルフの料金・口コミ・特徴を掲載しています。',
  keywords: '女性専用パーソナルジム,吉祥寺,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'ビーコンセプト 吉祥寺店',
    officialUrl: 'https://b-concept.tokyo/clublist/kichijoji/',
    price: '2ヶ月18回 179,685円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '駅徒歩1分', '下半身特化', '医師×トレーナー共同開発', '完全個室'],
    description: '吉祥寺駅徒歩1分の最高立地です。医師とトレーナーが共同開発した独自の脚やせメソッドが人気です。下半身太りに悩む女性に特化したプログラムです。月々4,991円〜の分割払い可です。',
    access: 'JR「吉祥寺駅」徒歩1分',
    address: '東京都武蔵野市吉祥寺（吉祥寺駅徒歩1分）',
    popularPlan: { name: '太ももダイエットプログラム', description: '医師×トレーナー共同開発の脚やせメソッドです。1回60分のトレーニングを2ヶ月で行う集中プログラムです。', price: '2ヶ月18回 179,685円〜（税込）' },
    options: ['託児所費用補助（最大1,000円/回）', 'ウェア・タオル無料レンタル', '食事指導付き', '分割払い対応（月々4,991円〜）'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['太もも痩せ', 'ヒップアップ', '産後ダイエット', '美脚'] },
    basicInfo: { hours: '7:00〜23:00', closed: '公式サイトでご確認ください', facilities: ['完全個室', 'ロッカー', 'シャワー'] },
  },
  {
    name: 'UNDEUX SUPERBODY 吉祥寺スタジオ',
    officialUrl: 'https://www.diet-undeux.jp/',
    price: 'スタンダードプラン月2回 21,300円〜（税込）',
    trial: '体験レッスン0円',
    features: ['女性専用', '初月宅配食30食無料（コミット）', 'パウダールーム完備', '目的別トレーニング', '手ぶらOK'],
    description: '女性専用パーソナルジムです。美尻・脚痩せ・産後ダイエットなど目的に合わせたトレーニングが可能です。コミットプランでは初月に宅配食30食が無料で付きます。',
    access: 'JR「吉祥寺駅」徒歩4分',
    address: '東京都武蔵野市吉祥寺（吉祥寺駅徒歩4分）',
    popularPlan: { name: 'コミットプラン', description: 'トレーニング月6回と栄養士による毎日の食事管理を組み合わせた月額制プランです（全店共通価格）。', price: '月額79,200円' },
    options: ['コミットプランは初月宅配食30食無料（スタンダードは会員優待価格のオプション）', 'ウェア・タオルレンタル無料', 'シャワー・パウダールーム完備', '基礎化粧品完備'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', '美尻', '脚痩せ', '産後ダイエット'] },
    basicInfo: { hours: '8:00〜22:00', closed: '不定休', facilities: ['完全個室', 'シャワー', 'パウダールーム'] },
  },
  {
    name: 'リボーンマイセルフ 吉祥寺店',
    officialUrl: 'https://www.shapes-international.co.jp/store/kichijoji/',
    price: '入会金22,000円＋コース料金',
    trial: '無料カウンセリング',
    features: ['女性専用', '女性トレーナーのみ', '10年以上の実績', '産後ダイエット対応', '吉祥寺駅近'],
    description: '日本初の女性専用ダイエットジムです。トレーナーも全員女性です。2万人以上の指導実績をもとにしたオリジナルメソッドです。吉祥寺の穏やかな環境でトレーニングです。',
    access: 'JR「吉祥寺駅」北口 徒歩5分',
    address: '東京都武蔵野市吉祥寺本町2-10-5 三慶ビル3F',
    popularPlan: { name: 'ダイエットコース', description: '女性トレーナーによるマンツーマン指導します。産後ダイエットコースも用意しています。', price: '入会金22,000円＋コース料金' },
    options: ['ウェアレンタル無料', '産後ダイエットコース', 'ブライダルダイエットコース', '部分痩せコース'],
    userProfile: { ageRange: '20代〜50代', genderRatio: '女性100%', purpose: ['ダイエット', '産後ダイエット', 'ブライダル', '部分痩せ'] },
    basicInfo: { hours: '平日10:00〜22:00／土日祝9:00〜19:00', closed: '公式サイトでご確認ください', facilities: ['ロッカー', 'ウェアレンタル'] },
  },
]

const faqs = [
  { question: '吉祥寺で女性専用のパーソナルジムはどこがおすすめですか？', answer: 'ビーコンセプト、UNDEUX SUPERBODY、リボーンマイセルフが吉祥寺で人気の女性専用パーソナルジムです。駅近ならビーコンセプト（徒歩1分）、食事管理ならUNDEUXがおすすめです。' },
  { question: '吉祥寺のパーソナルジムの料金相場はいくらですか？', answer: '吉祥寺の女性向けパーソナルジムの2ヶ月コースは約18万〜22万円です。ビーコンセプトが179,685円〜と最安です。都心部より若干リーズナブルな傾向があります。' },
  { question: '吉祥寺駅から最も近いジムはどこですか？', answer: 'ビーコンセプト吉祥寺店が徒歩1分で最も駅近です。UNDEUX SUPERBODYは徒歩4分、リボーンマイセルフは徒歩5分です。' },
  { question: '子連れで通えるジムはどこですか？', answer: 'ビーコンセプトは託児所費用を最大1,000円/回補助してくれます。' },
  { question: '体験は無料ですか？', answer: 'UNDEUX SUPERBODYは体験レッスン0円です。ビーコンセプト、リボーンマイセルフは無料カウンセリングを実施しています。' },
  { question: '初心者でも大丈夫ですか？', answer: 'はい、全ジムで初心者歓迎です。マンツーマン指導なので運動経験がなくても安心です。吉祥寺には、アットホームな雰囲気のジムが多くあります。' },
  { question: '吉祥寺は都心のジムと比べてどうですか？', answer: '吉祥寺は都心に比べてやや落ち着いた雰囲気です。料金は都心とほぼ同等ですが、混雑が少なく予約が取りやすい傾向があります。JR中央線で新宿から約15分と好アクセスです。' },
  { question: '食事指導が充実しているジムはどこですか？', answer: 'UNDEUX SUPERBODYは栄養士による食事管理があり、コミットプランでは初月に宅配食30食が無料です。吉祥寺はグルメの街なので食事指導重視がおすすめです。' },
  { question: '仕事帰りでも通えますか？', answer: 'ほとんどのジムが22:00まで営業しています。ウェアレンタルやシャワー完備のジムが多いので、仕事帰りでも手ぶらで通えます。' },
]

export default function KichijojiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-accent text-xs mb-2">更新日 2026年04月13日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              吉祥寺の女性専用パーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選・料金比較
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light">
              <Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}
              <span className="text-brand-muted">吉祥寺</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">本ページはG-PersonalGym編集部が作成しています。</p>
            <p className="text-brand-muted leading-relaxed mb-6">「吉祥寺で女性専用のパーソナルジムを探している」「住みたい街ランキング常連の吉祥寺で通いやすいジムが知りたい」という方のために、吉祥寺エリアでおすすめの女性向けパーソナルジム{gyms.length}選をまとめました。</p>
            <div className="bg-ivory border-l-4 border-accent p-6 mb-8">
              <h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-brand-muted">
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>吉祥寺で女性専用パーソナルジムを探している</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>駅近で通いやすいジムが良い</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>料金を比較して選びたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>下半身痩せしたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>食事指導も受けたい</span></li>
              </ul>
            </div>
          </div>
        </section>

        <AreaContext slug="kichijoji" />

        <WhyWomenOnly area="吉祥寺" />

        <PriceComparisonTable gyms={gyms} areaName="吉祥寺" />

        <section className="py-16 bg-ivory" id="gyms">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">吉祥寺のおすすめ女性向けパーソナルジム{gyms.length}選</h2>
            <div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">目的別おすすめ</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">コスパ重視</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・ビーコンセプト（18回 179,685円〜）</li></ul>
              </div>
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">食事サポート重視</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・UNDEUX SUPERBODY（コミットプランは初月宅配食30食無料）</li><li className="text-brand-muted">・ビーコンセプト（医師監修指導）</li></ul>
              </div>
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">子連れ対応</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・ビーコンセプト（託児所費用補助）</li></ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-ivory">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">吉祥寺の料金相場</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="font-bold text-brand-text mb-3">2ヶ月集中コース</h3>
                <p className="text-3xl font-bold text-accent mb-2">18万〜22万円</p>
                <p className="text-sm text-brand-muted">ビーコンセプト179,685円〜が最安です。UNDEUXは月額制で、スタンダードプラン月2回 21,300円〜（税込）です。</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="font-bold text-brand-text mb-3">入会金</h3>
                <p className="text-3xl font-bold text-accent mb-2">0〜5万円</p>
                <p className="text-sm text-brand-muted">キャンペーンで入会金無料のジムもあります。体験時にご確認ください。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">吉祥寺で選ぶ際の注意点</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="text-lg font-bold text-brand-text mb-3">北口と南口でエリアの雰囲気が違う</h3>
                <p className="text-brand-muted leading-relaxed">吉祥寺駅は北口がサンロード商店街やハモニカ横丁などの繁華街、南口は井の頭公園方面で落ち着いた雰囲気です。ジムの場所によって駅からのルートが異なるため、事前にご確認ください。</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="text-lg font-bold text-brand-text mb-3">食の誘惑が多いエリアだからこそ食事指導が重要</h3>
                <p className="text-brand-muted leading-relaxed">吉祥寺はカフェやレストランが充実したグルメの街です。トレーニング後の食事で効果を台なしにしないよう、食事指導が充実したジムを選ぶのがおすすめです。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-ivory">
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
            <p className="text-brand-muted leading-relaxed mb-4">吉祥寺エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。</p>
            <p className="text-brand-muted leading-relaxed mb-4">駅近で下半身痩せならビーコンセプト、食事管理重視ならUNDEUX SUPERBODY、女性トレーナー希望ならリボーンマイセルフがおすすめです。</p>
            <p className="text-brand-muted leading-relaxed">まずは気になるジムの体験レッスンをご利用ください。</p>
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
      <RelatedAreas currentSlug="kichijoji" />
      <SiteFooter />
    </>
  )
}
