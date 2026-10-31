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
  ...pageUrlMeta('/areas/ebisu/'),
  title: '恵比寿の女性専用パーソナルジムおすすめ3選｜料金比較',
  description: '恵比寿のおすすめ女性専用パーソナルジム3選を比較しています。UNDEUX SUPERBODY・OUTLINE・ビーコンセプトの料金・口コミ・特徴を掲載しています。',
  keywords: '女性専用パーソナルジム,恵比寿,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'UNDEUX SUPERBODY 恵比寿スタジオ',
    officialUrl: 'https://www.diet-undeux.jp/',
    price: 'スタンダードプラン月2回 21,300円〜（税込）',
    trial: '体験レッスン0円',
    features: ['女性専用', '食事管理付き', '初月宅配食30食無料（コミット）', 'パウダールーム完備', '恵比寿駅近'],
    description: '全国40店舗以上展開の女性専用パーソナルジムです。トレーニングに加え、栄養士による食事管理を組み合わせたダイエットサポートが特徴です（コミットプランは初月に宅配食30食を無料提供）。シャワー・パウダールーム・基礎化粧品を完備しており、手ぶらで通えます。恵比寿駅から好アクセスです。',
    access: 'JR「恵比寿駅」徒歩4分',
    address: '東京都渋谷区恵比寿（恵比寿駅徒歩4分）',
    popularPlan: { name: 'コミットプラン', description: 'トレーニング月6回と栄養士による毎日の食事管理を組み合わせた月額制プランです（全店共通価格）。', price: '月額79,200円' },
    options: ['コミットプランは初月宅配食30食無料（スタンダードは会員優待価格のオプション）', 'ウェア・タオルレンタル無料', 'シャワー・パウダールーム完備', '基礎化粧品完備', '月額制LIFEプランあり'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', '脚痩せ', '産後ダイエット', 'ボディメイク'] },
    basicInfo: { hours: '8:00〜22:00', closed: '不定休', facilities: ['完全個室', 'シャワー', 'パウダールーム', '基礎化粧品'] },
  },
  {
    name: 'OUTLINE 恵比寿・広尾店',
    officialUrl: 'https://www.outline-gym.com/',
    price: '16回 184,800円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '完全個室', '生涯サポート無料', 'ベビーサークル完備', 'よもぎ蒸し'],
    description: '業界初の生涯無料アフターサポートが最大の特徴です。完全個室・女性専用マシン・ベビーサークル完備で子連れママも安心です。恵比寿・広尾エリアで女性のダイエットに特化しています。',
    access: 'JR「恵比寿駅」徒歩6分',
    address: '東京都渋谷区恵比寿（恵比寿駅徒歩6分）',
    popularPlan: { name: '16回コース', description: '完全個室でのマンツーマントレーニングです。卒業後も生涯無料のアフターサポートを受けられます。', price: '16回 184,800円〜（税込）' },
    options: ['生涯無料アフターサポート', 'ベビーサークル完備', 'ウェアレンタル無料', 'よもぎ蒸し', '高級アミノ酸提供'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '産後ダイエット', 'リバウンド防止'] },
    basicInfo: { hours: '7:00〜23:00', closed: '不定休', facilities: ['完全個室', 'ベビーサークル', '女性専用マシン'] },
  },
  {
    name: 'ビーコンセプト 恵比寿店',
    officialUrl: 'https://b-concept.tokyo/clublist/ebisu/',
    price: '2ヶ月18回 179,685円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '下半身特化', '医師×トレーナー共同開発', '託児所費用補助', '駅徒歩2分'],
    description: '医師とトレーナーが共同開発した独自の脚やせメソッドが人気です。恵比寿駅徒歩2分の好立地です。太もも痩せ・ヒップアップに特化し、2ヶ月で美脚を目指します。託児所費用の補助があります。',
    access: 'JR「恵比寿駅」徒歩2分',
    address: '東京都渋谷区恵比寿（恵比寿駅徒歩2分）',
    popularPlan: { name: '太ももダイエットプログラム', description: '医師×トレーナー共同開発の脚やせメソッドです。1回60分のトレーニングを2ヶ月で行う集中プログラムです。', price: '2ヶ月18回 179,685円〜（税込）' },
    options: ['託児所費用補助（最大1,000円/回）', 'ウェア・タオル無料レンタル', '食事指導付き', '分割払い対応（月々4,991円〜）'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['太もも痩せ', 'ヒップアップ', '産後ダイエット', '美脚'] },
    basicInfo: { hours: '7:00〜23:00', closed: '公式サイトでご確認ください', facilities: ['完全個室', 'ロッカー', 'シャワー'] },
  },
]

const faqs = [
  { question: '恵比寿で女性専用のパーソナルジムはどこがおすすめですか？', answer: 'UNDEUX SUPERBODY、OUTLINE、ビーコンセプトが恵比寿で人気の女性専用パーソナルジムです。食事管理重視ならUNDEUX、コスパと生涯サポートならOUTLINE、下半身痩せならビーコンセプトがおすすめです。' },
  { question: '恵比寿のパーソナルジムの料金相場はいくらですか？', answer: '恵比寿エリアの女性向けパーソナルジムの2ヶ月コース料金は約18万〜22万円です。ビーコンセプトが179,685円〜と比較的リーズナブルです。OUTLINEは生涯サポート付きで184,800円〜です。' },
  { question: '恵比寿駅から最も近いパーソナルジムはどこですか？', answer: 'ビーコンセプト恵比寿店が徒歩2分で最も駅近です。UNDEUX SUPERBODYは徒歩4分です。' },
  { question: '子連れで通えるジムはありますか？', answer: 'OUTLINE恵比寿・広尾店はベビーサークルを完備しており、お子様連れでも利用できます。ビーコンセプトは託児所費用を最大1,000円/回補助してくれます。' },
  { question: '体験レッスンは無料で受けられますか？', answer: 'UNDEUX SUPERBODYは体験レッスン0円です。OUTLINE、ビーコンセプトは無料カウンセリングを実施しています。' },
  { question: '初心者でも大丈夫ですか？', answer: 'はい、全ジムで初心者歓迎です。マンツーマン指導なので、運動経験がなくても一人ひとりのレベルに合わせたメニューを組んでもらえます。' },
  { question: '恵比寿で最も安いパーソナルジムはどこですか？', answer: 'ビーコンセプト（2ヶ月18回 179,685円〜）が最安クラスです。OUTLINE（16回 184,800円〜）もコスパ良好です。分割払いなら月々4,991円〜で始められます。' },
  { question: '食事指導が充実しているジムはどこですか？', answer: 'UNDEUX SUPERBODYは栄養士による食事管理があり、コミットプランでは初月に宅配食30食が無料です。' },
  { question: '恵比寿と渋谷のジム、どちらがおすすめですか？', answer: '恵比寿は落ち着いた雰囲気で大人の女性に人気です。渋谷は選択肢が多く低価格帯のジムもあります。どちらも駅近のジムが多いので、通いやすさで選ぶのがおすすめです。' },
  { question: 'リバウンドが心配な場合はどうすればよいですか？', answer: 'OUTLINEは「生涯無料アフターサポート」で卒業後もずっとサポートしています。' },
]

export default function EbisuPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-accent text-xs mb-2">更新日 2026年04月13日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              恵比寿の女性専用パーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選・料金比較
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light">
              <Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}
              <span className="text-brand-muted">恵比寿</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">本ページはG-PersonalGym編集部が作成しています。</p>
            <p className="text-brand-muted leading-relaxed mb-6">「恵比寿で女性専用のパーソナルジムを探している」「おしゃれな街で通いやすいジムが知りたい」という方のために、恵比寿エリアでおすすめの女性向けパーソナルジム{gyms.length}選をまとめました。</p>
            <div className="bg-ivory border-l-4 border-accent p-6 mb-8">
              <h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-brand-muted">
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>恵比寿で女性専用パーソナルジムを探している</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>おしゃれなエリアで通いたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>料金を比較して選びたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>食事指導も受けたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>卒業後のサポートが欲しい</span></li>
              </ul>
            </div>
          </div>
        </section>

        <AreaContext slug="ebisu" />

        <WhyWomenOnly area="恵比寿" />

        <PriceComparisonTable gyms={gyms} areaName="恵比寿" />

        <section className="py-16 bg-ivory" id="gyms">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">恵比寿のおすすめ女性向けパーソナルジム{gyms.length}選</h2>
            <div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">目的別おすすめ</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">コスパ重視</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・ビーコンセプト（18回 179,685円〜）</li><li className="text-brand-muted">・OUTLINE（16回 184,800円〜）</li></ul>
              </div>
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">食事サポート重視</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・UNDEUX SUPERBODY（コミットプランは初月宅配食30食無料）</li><li className="text-brand-muted">・ビーコンセプト（医師監修指導）</li></ul>
              </div>
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">アフターサポート重視</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・OUTLINE（生涯無料サポート）</li></ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-ivory">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">恵比寿の料金相場</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">恵比寿で選ぶ際の注意点</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="text-lg font-bold text-brand-text mb-3">恵比寿は渋谷区でも家賃相場が高いエリア</h3>
                <p className="text-brand-muted leading-relaxed">恵比寿は渋谷区の中でも高級エリアのため、ジムの料金も若干高めの傾向があります。その分、施設の質やサービスは充実しています。費用を重視される場合は、渋谷のジムもあわせて比較することをおすすめします。</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="text-lg font-bold text-brand-text mb-3">恵比寿駅の東口・西口で距離が変わる</h3>
                <p className="text-brand-muted leading-relaxed">恵比寿駅は東口と西口で出る場所が大きく異なります。通いたいジムがどちら側にあるか、事前にご確認ください。</p>
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
            <p className="text-brand-muted leading-relaxed mb-4">恵比寿エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。</p>
            <p className="text-brand-muted leading-relaxed mb-4">食事管理重視ならUNDEUX SUPERBODY、コスパと生涯サポートならOUTLINE、下半身痩せならビーコンセプトがおすすめです。</p>
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
      <RelatedAreas currentSlug="ebisu" />
      <SiteFooter />
    </>
  )
}
