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
  ...pageUrlMeta('/areas/omotesando/'),
  title: '表参道の女性専用パーソナルジム2選｜アグライア・UNDEUXの料金比較',
  description: '表参道の女性専用パーソナルジム2選の料金を2026年11月17日に公式で確認。AGLAIA（アグライア・南青山5丁目）は月4回50,000円・入会金33,000円、UNDEUXは月2回21,300円・表参道駅徒歩1分（税込）。',
  keywords: '女性専用パーソナルジム,表参道,青山,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'UNDEUX SUPERBODY 青山・表参道スタジオ',
    officialUrl: 'https://www.diet-undeux.jp/studio/aoyama/',
    price: 'スタンダードプラン月2回 21,300円〜（税込）',
    trial: '体験トレーニング0円',
    features: ['女性専用', '女性トレーナー在籍', '駅徒歩1分', '宅配食30食付き（コミット・送料別途）', 'チーム担当制', 'パウダールーム完備'],
    description: '表参道駅徒歩1分の女性専用パーソナルジムです。トレーナーは専任制ではなく、複数名のトレーナーで編成されたチームでサポートします（公式FAQ）。スタンダードプラン（食事指導と簡易相談）とコミットプラン（栄養士サポート・宅配食30食付き・送料別途。公式の料金ページでは初月のみ無料提供）から選べます。女性トレーナーが在籍しています（専任制ではなくチーム制）。',
    access: '東京メトロ「表参道駅」徒歩1分',
    address: '東京都港区南青山3丁目18-17 青山十八番館6F',
    popularPlan: { name: 'コミットプラン', description: 'トレーニング月6回と栄養士による毎日の食事管理を組み合わせた月額制プランです（全店共通価格）。', price: '月額79,200円' },
    options: ['月4回34,800円・月8回69,600円（DAY会員 月4回30,300円・月8回60,600円）', 'コミットプランは宅配食30食付き（送料別途・料金ページでは初月のみ無料提供）', 'シャワールーム・パウダールーム', '基礎化粧品・ヘアアイロン'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '女性100%', purpose: ['ダイエット', '脚痩せ', 'ボディメイク', '美容'] },
    basicInfo: { hours: '8:00〜22:00（平日を中心に9:00開店の場合あり）', closed: '不定休', facilities: ['シャワールーム', 'パウダールーム', '基礎化粧品'] },
  },
  {
    name: 'AGLAIA（アグライア）表参道',
    officialUrl: 'https://aglaia-gym.com/',
    price: '月4回 50,000円〜（税込）',
    trial: '体験トレーニング 5,500円（税込）',
    features: ['女性専用', '美尻特化', '姿勢改善', '駅徒歩4分', '手ぶらで通える'],
    description: '表参道・南青山の美尻特化の女性専用パーソナルジムです。美尻専用マシン「ブーティビルダー」「アブダクター」を導入し、反り腰など姿勢を整えてからお尻を鍛えるオリジナルメソッドが特徴です。運動未経験の方から上級者まで対応しています。ウェア・シューズ・タオル・プロテインは無料で、手ぶらで通えます。',
    access: '各線「表参道駅」徒歩4分（A5・B3出口）',
    address: '東京都港区南青山5-4-44 ラポール南青山54 304',
    popularPlan: { name: '月額プラン（週1回・月4回）', description: '1回あたり12,500円の月額制です。月8回98,000円・月12回144,000円、都度払い1回15,000円もあります（入会金33,000円・余ったセッションは翌月まで繰り越し可・契約期間の縛りなし）。', price: '月4回 50,000円（税込）' },
    options: ['美尻専用マシン（ブーティビルダー・アブダクター）', '姿勢改善コンディショニング', '食事アドバイス', 'ウェア・シューズ・タオル・プロテイン無料'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '女性100%', purpose: ['美尻', 'ヒップアップ', '姿勢改善', 'ボディメイク'] },
    basicInfo: { hours: '9:00〜22:00', closed: 'なし', facilities: ['美尻専用マシン', 'ウォーターサーバー', 'ヘアセット用品', 'ウェアレンタル'] },
  },
]

const faqs = [
  { question: '表参道で女性専用のパーソナルジムはどこがおすすめですか？', answer: '掲載しているUNDEUX SUPERBODY 青山・表参道スタジオとAGLAIA（アグライア）は、どちらも公式に女性専用と記載しています。食事管理重視ならUNDEUX、美尻特化ならAGLAIAです。女性トレーナー在籍と公式に記載があるのはUNDEUXです（各公式・2026年11月17日確認）。' },
  { question: '表参道のパーソナルジムの料金相場はいくらですか？', answer: '掲載2店の公式料金（2026年11月17日確認・税込）は、UNDEUX SUPERBODYが月2回21,300円・月4回34,800円・月8回69,600円、AGLAIAが月4回50,000円・月8回98,000円・都度払い1回15,000円です。入会金はAGLAIAが33,000円、UNDEUXは店舗ページに記載がありません。' },
  { question: '表参道駅から最も近いジムはどこですか？', answer: 'UNDEUX SUPERBODYが表参道駅から徒歩1分で最も近く、AGLAIAは徒歩4分（A5・B3出口）です。' },
  { question: '美尻・ヒップアップに特化したジムはどこですか？', answer: 'AGLAIA（アグライア）は美尻専用マシン「ブーティビルダー」「アブダクター」を導入し、姿勢を整えてからお尻を鍛えるオリジナルメソッドを提供しています。' },
  { question: '体験は無料ですか？', answer: 'UNDEUX SUPERBODYは体験トレーニング（約60分）0円です。AGLAIAは体験トレーニング5,500円（税込）です（各公式・2026年11月17日確認）。' },
  { question: '初心者でも大丈夫ですか？', answer: 'はい、全ジムで初心者歓迎です。AGLAIAは公式FAQで、運動経験がまったくない方でも問題ないと案内しています。' },
  { question: '表参道と青山のジムは同じエリアですか？', answer: '表参道駅は港区南青山に位置しており、「表参道」「青山」は基本的に同じエリアです。ジムの所在地は「南青山」となっている場合が多いものの、いずれも表参道駅から徒歩圏内です。' },
  { question: '食事指導が充実しているジムはどこですか？', answer: 'UNDEUX SUPERBODYは、スタンダードプランで食事指導と簡易相談、コミットプラン（月6回79,200円・税込）で栄養士サポートと宅配食30食（送料別途）が付きます。' },
]

export default function OmotesandoPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-accent text-xs mb-2">更新日 2026年11月17日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              表参道の女性専用パーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選・料金比較
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light">
              <Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}
              <span className="text-brand-muted">表参道</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">本ページはG-PersonalGym編集部が作成しています。</p>
            <p className="text-brand-muted leading-relaxed mb-6">「表参道・青山エリアで女性専用のパーソナルジムを探している」「おしゃれな街で美ボディを手に入れたい」という方のために、表参道エリアでおすすめの女性向けパーソナルジム{gyms.length}選をまとめました。</p>
            <p className="text-brand-muted leading-relaxed mb-6">掲載2店はどちらも女性専用です。美尻特化のAGLAIA（アグライア）は港区南青山5-4-44（表参道駅 A5・B3出口から徒歩4分）で月4回50,000円、女性トレーナー在籍のUNDEUX SUPERBODY 青山・表参道スタジオは表参道駅徒歩1分で月2回21,300円からです（税込・各公式サイト・2026年11月17日確認）。料金はすぐ下の早見表で比べられます。</p>
            <div className="bg-ivory border-l-4 border-accent p-6 mb-8">
              <h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-brand-muted">
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>表参道で女性専用パーソナルジムを探している</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>美尻・美脚を目指したい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>料金を比較して選びたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>駅近のジムが良い</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>食事指導も受けたい</span></li>
              </ul>
            </div>
          </div>
        </section>

        <AreaContext slug="omotesando" />

        <WhyWomenOnly area="表参道" />

        <PriceComparisonTable gyms={gyms} areaName="表参道" />

        <section className="py-16 bg-ivory" id="gyms">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">表参道のおすすめ女性向けパーソナルジム{gyms.length}選</h2>
            <div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">目的別おすすめ</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">コスパ重視</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・UNDEUX SUPERBODY（スタンダードプラン月2回 21,300円〜）</li></ul>
              </div>
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">美尻・美脚特化</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・AGLAIA（美尻専用マシン）</li></ul>
              </div>
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">食事サポート重視</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・UNDEUX SUPERBODY（コミットプランは栄養士サポート・宅配食30食付き）</li></ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-ivory">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">表参道の料金相場</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="font-bold text-brand-text mb-3">2ヶ月集中コース</h3>
                <p className="text-3xl font-bold text-accent mb-2">掲載店なし</p>
                <p className="text-sm text-brand-muted">掲載2店はどちらも月額制で、2ヶ月の短期コースはありません。月額の比較はUNDEUX 月4回34,800円・AGLAIA 月4回50,000円です（税込・各公式・2026年11月17日確認）。</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="font-bold text-brand-text mb-3">月額制</h3>
                <p className="text-3xl font-bold text-accent mb-2">2.13万〜5万円/月</p>
                <p className="text-sm text-brand-muted">AGLAIA 月4回50,000円（税込）です。UNDEUX SUPERBODYは月2回21,300円・月4回34,800円（税込）からです。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">表参道で選ぶ際の注意点</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="text-lg font-bold text-brand-text mb-3">同じブランドでも店舗で料金が違う</h3>
                <p className="text-brand-muted leading-relaxed">UNDEUX SUPERBODYのスタンダードプランは店舗で料金が異なり、青山・表参道スタジオは月2回21,300円（税込）です。申し込み前に店舗ページの料金表をご確認ください。</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="text-lg font-bold text-brand-text mb-3">美容・ボディメイク特化のジムが多い</h3>
                <p className="text-brand-muted leading-relaxed">表参道エリアは美尻・美脚など美容特化のジムが多いのが特徴です。ダイエットだけでなくボディラインの美しさを追求したい方に最適です。</p>
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
            <p className="text-brand-muted leading-relaxed mb-4">表参道エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。掲載内容は各ジムの公式サイトで確認した情報です（2026年11月17日時点）。</p>
            <p className="text-brand-muted leading-relaxed mb-4">食事管理重視ならUNDEUX SUPERBODY、美尻ならAGLAIAがおすすめです。</p>
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
      <RelatedAreas currentSlug="omotesando" />
      <SiteFooter />
    </>
  )
}
