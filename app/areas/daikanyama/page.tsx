import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { GymCard } from '@/components/GymCard'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { FAQSchema } from '@/components/FAQSchema'
import { RelatedAreas } from '@/components/RelatedAreas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '【2026最新】代官山の女性専用パーソナルジムおすすめ5選！料金比較',
  description: '【2026年4月最新】代官山のおすすめ女性専用パーソナルジム5選を徹底比較。UNDEUX SUPERBODY・RIZAP WOMAN・OUTLINEなど人気ジムの料金・口コミ・特徴を網羅。',
  keywords: '女性専用パーソナルジム,代官山,おすすめ,料金,比較,ダイエット,ボディメイク,高級',
}

const gyms = [
  {
    name: 'UNDEUX SUPERBODY 代官山スタジオ',
    rating: 4.9,
    reviewCount: 22,
    reviews: [
      { author: 'A.Y', rating: 5, date: '1週間前', text: '代官山の洗練された空間でトレーニングできるのが嬉しい。宅配食も美味しくて食事管理が楽です。' },
      { author: 'M.N', rating: 5, date: '2週間前', text: 'パウダールーム・基礎化粧品完備で手ぶらOK。仕事帰りにそのまま通えます。' },
      { author: 'S.H', rating: 5, date: '1ヶ月前', text: '女性専用なので安心。トレーナーさんが丁寧で2ヶ月で理想の体型に近づけました。' },
    ],
    price: '2ヶ月16回 220,000円〜（税込）',
    trial: '体験レッスン0円',
    features: ['女性専用', '食事管理付き', '宅配食無料', 'パウダールーム完備', '代官山の高級空間'],
    description: '代官山のおしゃれなエリアに位置する女性専用パーソナルジム。糖質オフ宅配食を無料提供し、トレーニングと食事の両面からサポート。洗練された空間でモチベーション高くトレーニングできる。',
    access: '東急東横線「代官山駅」徒歩4分',
    address: '東京都渋谷区代官山町（代官山駅徒歩4分）',
    popularPlan: { name: '2ヶ月集中コース', description: 'マンツーマントレーニング16回＋食事指導＋宅配食の総合サポートプラン。', price: '2ヶ月16回 220,000円〜（税込）' },
    options: ['糖質オフ宅配食無料', 'ウェア・タオルレンタル無料', 'シャワー・パウダールーム完備', '基礎化粧品完備', '月額制LIFEプランあり'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', '脚痩せ', 'ボディメイク', '美容'] },
    basicInfo: { hours: '9:00〜22:00', closed: '不定休', facilities: ['完全個室', 'シャワー', 'パウダールーム', '基礎化粧品'] },
  },
  {
    name: 'RIZAP WOMAN 代官山店',
    rating: 4.7,
    reviewCount: 18,
    reviews: [
      { author: 'K.A', rating: 5, date: '2週間前', text: 'RIZAPの女性専用版。コラーゲンマシンやエステも受けられるのが嬉しい。確実に結果が出ます。' },
      { author: 'R.T', rating: 5, date: '1ヶ月前', text: '美容と健康を両立できる贅沢なプログラム。代官山のラグジュアリーな空間で至福のひととき。' },
      { author: 'N.Y', rating: 4, date: '3週間前', text: '料金は高めですが、エステ付きで美しく痩せられる。結果にコミットの安心感。' },
    ],
    price: '2ヶ月16回 327,800円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', 'エステ付き', 'コラーゲンマシン', '完全個室', 'ラグジュアリー空間'],
    description: 'RIZAP初の女性専用ジム。トレーニングに加え、コラーゲンマシンやエステも受けられる贅沢なプログラム。代官山の高級感ある空間で「美しく痩せる」を実現。30日間全額返金保証付き。',
    access: '東急東横線「代官山駅」徒歩3分',
    address: '東京都渋谷区代官山町（代官山駅徒歩3分）',
    popularPlan: { name: '美ボディメイクコース', description: 'トレーニング＋エステ＋コラーゲンマシンの美容総合プログラム。', price: '2ヶ月16回 327,800円〜（税込）' },
    options: ['コラーゲンマシン', 'エステ施術', '30日間全額返金保証', 'ウェアレンタル無料', '食事指導付き'],
    userProfile: { ageRange: '30代〜50代が中心', genderRatio: '女性100%', purpose: ['美ボディメイク', 'ダイエット', 'エイジングケア', '美容'] },
    basicInfo: { hours: '7:00〜23:00', closed: '不定休', facilities: ['完全個室', 'エステルーム', 'コラーゲンマシン', 'シャワー'] },
  },
  {
    name: 'OUTLINE 代官山店',
    rating: 4.7,
    reviewCount: 14,
    reviews: [
      { author: 'Y.M', rating: 5, date: '1週間前', text: '生涯アフターサポートが最大の魅力。代官山のおしゃれな空間で気分よくトレーニングできます。' },
      { author: 'H.S', rating: 5, date: '2週間前', text: '完全個室で人目を気にせず集中できる。女性専用マシンで効率的に鍛えられます。' },
      { author: 'T.N', rating: 4, date: '1ヶ月前', text: '料金がリーズナブルなのにサービスが充実。卒業後のサポートも安心。' },
    ],
    price: '16回 184,800円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '完全個室', '生涯サポート無料', 'ベビーサークル完備', '女性特化マシン'],
    description: '生涯無料アフターサポートが特徴の女性専用ジム。代官山のおしゃれなロケーションで、完全個室・女性専用マシン完備。コスパの良さと充実のサポートが魅力。',
    access: '東急東横線「代官山駅」徒歩5分',
    address: '東京都渋谷区代官山町（代官山駅徒歩5分）',
    popularPlan: { name: '16回コース', description: '完全個室でのマンツーマントレーニング。卒業後も生涯無料でアフターサポート。', price: '16回 184,800円〜（税込）' },
    options: ['生涯無料アフターサポート', 'ベビーサークル完備', 'ウェアレンタル無料', 'よもぎ蒸し', '高級アミノ酸提供'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '産後ダイエット', 'リバウンド防止'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'ベビーサークル', '女性専用マシン'] },
  },
  {
    name: 'ビーコンセプト 恵比寿・代官山店',
    rating: 4.6,
    reviewCount: 16,
    reviews: [
      { author: 'S.A', rating: 5, date: '2週間前', text: '太もも痩せメソッドが本当に効果的。代官山駅からも恵比寿駅からもアクセス良好。' },
      { author: 'M.K', rating: 4, date: '1ヶ月前', text: '医師監修プログラムで安心。下半身のラインが確実に変わりました。' },
      { author: 'E.T', rating: 5, date: '3週間前', text: '託児所費用補助があるので子育て中でも通いやすい。効果もしっかり実感。' },
    ],
    price: '2ヶ月18回 179,685円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '下半身特化', '医師×トレーナー共同開発', '託児所費用補助', '完全個室'],
    description: '医師×トレーナー共同開発の脚やせメソッドが評判。代官山・恵比寿の2駅利用可能な好立地。太もも痩せ・ヒップアップに特化し、産後ママにも人気。',
    access: '東急東横線「代官山駅」徒歩6分 / JR「恵比寿駅」徒歩7分',
    address: '東京都渋谷区恵比寿西（代官山駅徒歩6分）',
    popularPlan: { name: '太ももダイエットプログラム', description: '医師×トレーナー共同開発の脚やせメソッド。75分×18回の集中プログラム。', price: '2ヶ月18回 179,685円〜（税込）' },
    options: ['託児所費用補助（最大1,000円/回）', 'ウェア・タオル無料レンタル', '食事指導付き', '分割払い対応（月々5,545円〜）'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['太もも痩せ', 'ヒップアップ', '産後ダイエット', '美脚'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'ロッカー', 'シャワー'] },
  },
  {
    name: 'クレビック 恵比寿・代官山店',
    rating: 4.5,
    reviewCount: 10,
    reviews: [
      { author: 'C.Y', rating: 5, date: '2週間前', text: '管理栄養士の食事指導が具体的で実践しやすい。代官山エリアで通いやすい立地。' },
      { author: 'J.M', rating: 4, date: '1ヶ月前', text: '料金がリーズナブルなのにサービスが充実。完全個室で安心してトレーニングできます。' },
      { author: 'L.K', rating: 5, date: '3週間前', text: '内側と外側の両面からボディメイクしてくれるので効果的。確実に変化を実感。' },
    ],
    price: '2ヶ月16回 149,800円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専門', '管理栄養士の食事指導', '完全個室', '手ぶらOK', 'リーズナブル'],
    description: '管理栄養士による食事指導と科学的なトレーニングが特徴の女性専門ジム。代官山エリアでリーズナブルに本格的なボディメイクが可能。手ぶらで通える充実した設備。',
    access: '東急東横線「代官山駅」徒歩7分',
    address: '東京都渋谷区恵比寿西（代官山駅徒歩7分）',
    popularPlan: { name: 'ダイエット&ボディメイクコース', description: '管理栄養士の食事指導＋マンツーマントレーニングの総合プログラム。', price: '2ヶ月16回 149,800円〜（税込）' },
    options: ['管理栄養士による食事指導', 'ウェアレンタル無料', 'タオル完備', 'シャワー完備'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '食事改善', '美容'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'シャワー', 'ロッカー'] },
  },
]

const faqs = [
  { question: '代官山で女性専用のパーソナルジムはありますか？', answer: 'はい、代官山エリアにはUNDEUX SUPERBODY、RIZAP WOMAN、OUTLINE、ビーコンセプト、クレビックなど複数の女性専用パーソナルジムがあります。高級感のある空間が多いのが代官山の特徴です。' },
  { question: '代官山で高級なパーソナルジムはどこ？', answer: 'RIZAP WOMAN代官山店はエステ・コラーゲンマシン付きの贅沢なプログラムを提供しています。UNDEUX SUPERBODY代官山スタジオも洗練された空間で質の高いサービスが受けられます。' },
  { question: '代官山のパーソナルジムの料金相場は？', answer: '代官山エリアでは2ヶ月コース149,800円〜（クレビック）から327,800円〜（RIZAP WOMAN）まで幅広い選択肢があります。OUTLINE（184,800円〜）がコスパと質のバランスに優れています。' },
  { question: '代官山でエステも受けられるジムは？', answer: 'RIZAP WOMAN代官山店では、トレーニングに加えてコラーゲンマシンやエステ施術も受けられます。美しく痩せたい方に最適です。' },
  { question: '代官山で子連れで通えるジムは？', answer: 'OUTLINE代官山店はベビーサークル完備で子連れOK。ビーコンセプトは託児所費用を最大1,000円/回補助してくれます。' },
]

export default function DaikanyamaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-accent text-xs mb-2">更新日 2026年04月29日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              【2026最新】代官山の女性専用パーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選！料金比較
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light">
              <Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}
              <span className="text-brand-muted">代官山</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">こんにちは、G-PersonalGym編集部です。</p>
            <p className="text-brand-muted leading-relaxed mb-6">「代官山で女性専用のパーソナルジムを探している」「高級感のある空間でトレーニングしたい」という方のために、代官山エリアでおすすめの女性向けパーソナルジム{gyms.length}選をまとめました。</p>
            <div className="bg-ivory border-l-4 border-accent p-6 mb-8">
              <h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-brand-muted">
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>代官山で女性専用パーソナルジムを探している</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>高級感のある空間でトレーニングしたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>エステも一緒に受けたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>料金を比較して選びたい</span></li>
              </ul>
            </div>
          </div>
        </section>

        <PriceComparisonTable gyms={gyms} areaName="代官山" />

        <section className="py-16 bg-ivory" id="gyms">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">代官山のおすすめ女性向けパーソナルジム{gyms.length}選</h2>
            <div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-brand-text mb-6 text-center">まとめ</h2>
            <p className="text-brand-muted leading-relaxed mb-4">代官山エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。</p>
            <p className="text-brand-muted leading-relaxed mb-4">ラグジュアリーな美容体験ならRIZAP WOMAN、食事管理重視ならUNDEUX SUPERBODY、コスパ重視ならOUTLINEやクレビックがおすすめです。</p>
            <p className="text-brand-muted leading-relaxed">まずは気になるジムの体験レッスンに行ってみてください。</p>
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

        <section className="py-16 bg-gradient-to-r from-accent to-accent-dark text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-4">まずは無料カウンセリングから</h2>
            <p className="text-white/80 mb-8">複数のジムを比較して、あなたに合うジムを見つけましょう。</p>
            <Link href="/ranking/" className="inline-block bg-white text-accent px-10 py-4 text-sm font-bold rounded-full hover:bg-accent-tint transition-all">おすすめランキングを見る</Link>
          </div>
        </section>
      </main>
      <RelatedAreas currentSlug="daikanyama" />
      <SiteFooter />
    </>
  )
}
