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
  ...pageUrlMeta('/areas/shibuya/'),
  title: '【2026年7月】渋谷の女性専用パーソナルジムおすすめ3選！料金比較',
  description: '【2026年4月】渋谷のおすすめ女性専用パーソナルジム3選を比較しています。UNDEUX SUPERBODY・OUTLINEなど人気ジムの料金・口コミ・特徴を掲載しています。',
  keywords: '女性専用パーソナルジム,渋谷,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'UNDEUX SUPERBODY 渋谷スタジオ',
    officialUrl: 'https://www.diet-undeux.jp/',
    price: '2ヶ月16回 220,000円〜（税込）',
    trial: '体験レッスン0円',
    features: ['女性専用', '食事管理付き', '宅配食無料', 'パウダールーム完備', '渋谷駅近'],
    description: '全国40店舗以上展開の女性専用パーソナルジムです。トレーニングに加え糖質オフ宅配食を無料提供する総合的なダイエットサポートが特徴です。シャワー・パウダールーム・基礎化粧品を完備しており、手ぶらで通えます。渋谷駅から好アクセスです。',
    access: 'JR「渋谷駅」徒歩5分',
    address: '東京都渋谷区（渋谷駅徒歩5分）',
    popularPlan: { name: '2ヶ月集中コース', description: 'マンツーマントレーニング16回＋食事指導＋宅配食の総合サポートプランです。', price: '2ヶ月16回 220,000円〜（税込）' },
    options: ['糖質オフ宅配食無料', 'ウェア・タオルレンタル無料', 'シャワー・パウダールーム完備', '基礎化粧品完備', '月額制LIFEプランあり'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', '脚痩せ', '産後ダイエット', 'ボディメイク'] },
    basicInfo: { hours: '8:00〜22:00', closed: '不定休', facilities: ['完全個室', 'シャワー', 'パウダールーム', '基礎化粧品'] },
  },
  {
    name: 'OUTLINE 渋谷店',
    officialUrl: 'https://www.outline-gym.com/',
    price: '16回 184,800円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '完全個室', '生涯サポート無料', 'ベビーサークル完備', '女性特化マシン'],
    description: '2年連続「女性に選ばれているパーソナルジム第1位」です。業界初の生涯無料アフターサポートが最大の特徴です。完全個室・女性専用マシン・ベビーサークル完備で、子連れママも安心です。',
    access: 'JR「渋谷駅」徒歩7分',
    address: '東京都渋谷区（渋谷駅徒歩7分）',
    popularPlan: { name: '16回コース', description: '完全個室でのマンツーマントレーニングです。卒業後も生涯無料のアフターサポートを受けられます。', price: '16回 184,800円〜（税込）' },
    options: ['生涯無料アフターサポート', 'ベビーサークル完備', 'ウェアレンタル無料', 'よもぎ蒸し', '高級アミノ酸提供'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '産後ダイエット', 'リバウンド防止'] },
    basicInfo: { hours: '7:00〜23:00', closed: '不定休', facilities: ['完全個室', 'ベビーサークル', '女性専用マシン'] },
  },
  {
    name: 'エクササイズコーチ 渋谷店',
    officialUrl: 'https://exercisecoach.co.jp/',
    price: '月4回 12,000円〜（税込）',
    trial: '無料体験あり',
    features: ['AI主導', '1回20分', '低価格', '女性利用者8割', '渋谷駅近'],
    description: 'アメリカ発のAI主導パーソナルトレーニングジムです。1回わずか20分で効率的にトレーニングでき、月4回12,000円〜と低価格です。利用者の8割以上が女性です。忙しい女性に人気のジムです。',
    access: 'JR「渋谷駅」徒歩3分',
    address: '東京都渋谷区（渋谷駅徒歩3分）',
    popularPlan: { name: '月4回プラン', description: 'AIが最適な負荷を設定します。1回20分の効率トレーニングです。', price: '月4回 12,000円〜（税込）' },
    options: ['AI個別最適化', '1回20分', 'ウェアレンタル無料'],
    userProfile: { ageRange: '20代〜50代', genderRatio: '女性80% / 男性20%', purpose: ['ダイエット', '健康維持', '体力向上', '運動習慣'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['トレーニングマシン', 'ロッカー'] },
  },
]

const faqs = [
  { question: '渋谷で女性専用のパーソナルジムはどこがおすすめですか？', answer: 'UNDEUX SUPERBODY、OUTLINE、エクササイズコーチが渋谷で人気の女性専用パーソナルジムです。それぞれ特徴が異なるので、食事管理重視ならUNDEUX、コスパ重視ならOUTLINEがおすすめです。' },
  { question: '渋谷のパーソナルジムの料金相場はいくらですか？', answer: '渋谷エリアの女性向けパーソナルジムの2ヶ月コース料金は約15万〜22万円です。月額制なら月12,000円〜30,800円程度です。エクササイズコーチは月4回12,000円〜と最安クラスです。' },
  { question: '渋谷駅から近いパーソナルジムはどこですか？', answer: 'エクササイズコーチ渋谷店（徒歩3分）、UNDEUX SUPERBODY（徒歩5分）が渋谷駅から特に近いジムです。' },
  { question: '子連れで通えるジムはありますか？', answer: 'OUTLINE渋谷店はベビーサークルを完備しており、お子様連れでも利用できます。' },
  { question: '体験レッスンは無料で受けられますか？', answer: 'UNDEUX SUPERBODYは体験0円、エクササイズコーチも無料体験があります。OUTLINEは無料カウンセリングを実施しています。' },
  { question: '初心者でも大丈夫ですか？', answer: 'はい、全ジムで初心者歓迎です。パーソナルジムはマンツーマン指導なので、運動経験がなくても一人ひとりのレベルに合わせたメニューを組んでもらえます。' },
  { question: '渋谷で最も安いパーソナルジムはどこですか？', answer: 'エクササイズコーチ（月4回12,000円〜）が最安です。2ヶ月コースではOUTLINEが生涯サポート付きで184,800円〜です。' },
  { question: '短時間で通えるジムはどこですか？', answer: 'エクササイズコーチは1回20分で完了します。忙しい方に最適です。他のジムも50〜75分のセッションが一般的です。' },
  { question: '食事指導が充実しているジムはどこですか？', answer: 'UNDEUX SUPERBODYは糖質オフ宅配食を無料で提供しています。' },
  { question: 'リバウンドが心配な場合はどうすればよいですか？', answer: 'OUTLINE（アウトライン）は業界初の「生涯無料アフターサポート」があり、卒業後もずっとサポートが受けられます。リバウンドが心配な方に最もおすすめです。' },
]

export default function ShibuyaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-accent text-xs mb-2">更新日 2026年04月13日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              【2026年7月】渋谷の女性専用パーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選！料金比較
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light">
              <Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}
              <span className="text-brand-muted">渋谷</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">本ページはG-PersonalGym編集部が作成しています。</p>
            <p className="text-brand-muted leading-relaxed mb-6">「渋谷で女性専用のパーソナルジムを探している」「駅近で通いやすいジムが知りたい」という方のために、渋谷エリアでおすすめの女性向けパーソナルジム{gyms.length}選をまとめました。</p>
            <div className="bg-ivory border-l-4 border-accent p-6 mb-8">
              <h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-brand-muted">
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>渋谷で女性専用パーソナルジムを探している</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>駅近で通いやすいジムが良い</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>料金を比較して選びたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>食事指導も受けたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>子連れで通いたい</span></li>
              </ul>
            </div>
          </div>
        </section>

        <AreaContext slug="shibuya" />

        <WhyWomenOnly area="渋谷" />

        <PriceComparisonTable gyms={gyms} areaName="渋谷" />

        <section className="py-16 bg-ivory" id="gyms">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">渋谷のおすすめ女性向けパーソナルジム{gyms.length}選</h2>
            <div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">目的別おすすめ</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">コスパ重視</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・エクササイズコーチ（月4回 12,000円〜）</li><li className="text-brand-muted">・OUTLINE（16回 184,800円〜）</li></ul>
              </div>
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">食事サポート重視</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・UNDEUX SUPERBODY（宅配食無料）</li></ul>
              </div>
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">子連れ対応</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・OUTLINE（ベビーサークル完備）</li></ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-ivory">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">渋谷の料金相場【2026年4月】</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="font-bold text-brand-text mb-3">2ヶ月集中コース</h3>
                <p className="text-3xl font-bold text-accent mb-2">15万〜22万円</p>
                <p className="text-sm text-brand-muted">当サイト掲載ではOUTLINE 184,800円〜、UNDEUX 220,000円〜です（いずれも16回・税込）。</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="font-bold text-brand-text mb-3">月額制</h3>
                <p className="text-3xl font-bold text-accent mb-2">1.2万〜3.1万円/月</p>
                <p className="text-sm text-brand-muted">エクササイズコーチ12,000円〜が最安です。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">渋谷で選ぶ際の注意点</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="text-lg font-bold text-brand-text mb-3">渋谷駅は出口が多い</h3>
                <p className="text-brand-muted leading-relaxed">渋谷駅は複数の路線が乗り入れ、出口も多いです。通いたいジムがどの出口から近いかを事前にご確認ください。</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="text-lg font-bold text-brand-text mb-3">体験レッスンは2〜3ジムで比較</h3>
                <p className="text-brand-muted leading-relaxed">渋谷は選択肢が多いエリアです。最低2〜3ジムの体験に行って、トレーナーとの相性や雰囲気を比較してから決めることをおすすめします。</p>
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
            <p className="text-brand-muted leading-relaxed mb-4">渋谷エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。</p>
            <p className="text-brand-muted leading-relaxed mb-4">食事管理重視ならUNDEUX SUPERBODY、コスパと生涯サポートならOUTLINEがおすすめです。</p>
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
      <RelatedAreas currentSlug="shibuya" />
      <SiteFooter />
    </>
  )
}
