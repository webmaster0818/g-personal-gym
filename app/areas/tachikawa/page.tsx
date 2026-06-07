import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { GymCard } from '@/components/GymCard'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { FAQSchema } from '@/components/FAQSchema'
import { RelatedAreas } from '@/components/RelatedAreas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '【2026最新】立川の女性専用パーソナルジムおすすめ5選！料金比較',
  description: '【2026年4月最新】立川のおすすめ女性専用パーソナルジム5選を徹底比較。OUTLINE・ビーコンセプト・リボーンマイセルフなど人気ジムの料金・口コミ・特徴を網羅。',
  keywords: '女性専用パーソナルジム,立川,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'OUTLINE 立川店',
    rating: 4.7,
    reviewCount: 16,
    reviews: [
      { author: 'K.T', rating: 5, date: '1週間前', text: '生涯アフターサポートが決め手。立川で女性専用の完全個室ジムは貴重です。' },
      { author: 'R.M', rating: 5, date: '2週間前', text: 'よもぎ蒸しや遺伝子検査など無料サービスが充実。女性専用マシンも効率的。' },
      { author: 'N.S', rating: 4, date: '1ヶ月前', text: 'ベビーサークル完備で子連れOK。立川は子育て世帯も多いので助かります。' },
    ],
    price: '16回 184,800円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '完全個室', '生涯サポート無料', '遺伝子検査', 'よもぎ蒸し'],
    description: '業界初の生涯無料アフターサポート。よもぎ蒸しや遺伝子検査など無料サービスが充実。完全個室・女性専用マシン完備。ベビーサークルもあり子連れOK。',
    access: 'JR「立川駅」徒歩5分',
    address: '東京都立川市（立川駅徒歩5分）',
    popularPlan: { name: '16回コース', description: '完全個室マンツーマントレーニング。卒業後も生涯無料でアフターサポート。', price: '16回 184,800円〜（税込）' },
    options: ['生涯無料アフターサポート', 'よもぎ蒸し', '遺伝子検査', '高級アミノ酸提供', 'ベビーサークル完備'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '産後ダイエット', 'リバウンド防止'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'ベビーサークル', '女性専用マシン'] },
  },
  {
    name: 'ビーコンセプト 立川店',
    rating: 4.7,
    reviewCount: 14,
    reviews: [
      { author: 'S.H', rating: 5, date: '2週間前', text: '太もも-4cm達成！立川で脚やせ特化のジムは嬉しい。医師監修メソッドで信頼感あり。' },
      { author: 'H.N', rating: 5, date: '1ヶ月前', text: '完全個室で集中できる。分割払いで月々5,545円〜始められるのも魅力。' },
      { author: 'A.T', rating: 4, date: '3週間前', text: '産後の下半身太りに悩んでいたが、見事に解消。託児所費用補助も助かりました。' },
    ],
    price: '2ヶ月16回 199,650円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '下半身特化', '医師×トレーナー共同開発', '託児所費用補助', '完全個室'],
    description: '医師とトレーナーが共同開発した脚やせメソッド。立川エリアで下半身太りに悩む女性に特化。完全個室・託児所費用補助あり。',
    access: 'JR「立川駅」徒歩4分',
    address: '東京都立川市（立川駅徒歩4分）',
    popularPlan: { name: '太ももダイエットプログラム', description: '医師×トレーナー共同開発の脚やせメソッド。60分×16回の集中プログラム。', price: '2ヶ月16回 199,650円〜（税込）' },
    options: ['託児所費用補助（最大1,000円/回）', 'ウェア・タオル無料レンタル', '食事指導付き', '分割払い対応'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['太もも痩せ', 'ヒップアップ', '産後ダイエット', '美脚'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'ロッカー', 'シャワー'] },
  },
  {
    name: 'リボーンマイセルフ 立川店',
    rating: 4.6,
    reviewCount: 13,
    reviews: [
      { author: 'T.K', rating: 5, date: '1週間前', text: 'トレーナーが全員女性で安心。立川駅からのアクセスも良く通いやすいです。' },
      { author: 'M.O', rating: 4, date: '2週間前', text: '10年以上の実績で信頼できる。食事指導も無理のない範囲で提案してくれます。' },
      { author: 'E.H', rating: 5, date: '1ヶ月前', text: '産後ダイエットコースで-5kg。女性トレーナーだからこそ分かる悩みに寄り添ってくれました。' },
    ],
    price: '8回 92,400円〜（税込）',
    trial: '無料カウンセリング',
    features: ['女性専用', '女性トレーナーのみ', '10年以上の実績', '産後ダイエット', 'リーズナブル'],
    description: '日本初の女性専用ダイエットジム。トレーナーも全員女性。60分×8回92,400円〜とリーズナブルな価格設定。立川エリアの女性に長く愛されるジム。',
    access: 'JR「立川駅」徒歩5分',
    address: '東京都立川市（立川駅徒歩5分）',
    popularPlan: { name: 'ダイエットコース 8回', description: '女性トレーナーによるマンツーマン指導。60分×8回の短期集中。', price: '8回 92,400円〜（税込）' },
    options: ['ウェアレンタル無料', '産後ダイエットコース', 'ブライダルダイエットコース', '部分痩せコース'],
    userProfile: { ageRange: '20代〜50代', genderRatio: '女性100%', purpose: ['ダイエット', '産後ダイエット', 'ブライダル', '部分痩せ'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['ロッカー', 'ウェアレンタル'] },
  },
  {
    name: 'UNDEUX SUPERBODY LIFE 立川スタジオ',
    rating: 4.6,
    reviewCount: 10,
    reviews: [
      { author: 'A.N', rating: 5, date: '2週間前', text: '月額制で通いやすい。プロのトレーナーがマンツーマンで指導してくれて効果的。' },
      { author: 'M.S', rating: 4, date: '1ヶ月前', text: '継続割で長く通うほどお得。立川で女性専用の月額制ジムは貴重です。' },
      { author: 'Y.K', rating: 4, date: '3週間前', text: 'ライフスタイルに合わせて回数を選べるのが便利。月8回プランで通っています。' },
    ],
    price: '月8回 59,400円〜（税込）',
    trial: '体験レッスンあり',
    features: ['女性専用', '月額制', '継続割あり', 'マンツーマン', '立川駅近'],
    description: '月額制の女性専用パーソナルジム。月8回59,400円〜で通え、継続割で長く通うほどお得。プロのトレーナーがマンツーマンで指導。',
    access: 'JR「立川駅」徒歩4分',
    address: '東京都立川市（立川駅徒歩4分）',
    popularPlan: { name: '月8回プラン', description: '月額制のマンツーマンパーソナルトレーニング。1回50分。', price: '月8回 59,400円〜（税込）' },
    options: ['継続割あり', '月2回〜8回から選択', 'ウェアレンタル', 'シャワー完備'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%', purpose: ['ダイエット', 'ボディメイク', '体型維持', '健康管理'] },
    basicInfo: { hours: '9:00〜22:00', closed: '不定休', facilities: ['トレーニングルーム', 'シャワー', 'ロッカー'] },
  },
  {
    name: 'Bodyke 立川店',
    rating: 4.5,
    reviewCount: 12,
    reviews: [
      { author: 'L.T', rating: 5, date: '1週間前', text: '食べて痩せるメソッドで-5kg。立川の美味しいランチも楽しみながらダイエット成功。' },
      { author: 'P.H', rating: 4, date: '2週間前', text: '糖質制限なしが続けやすい。立川のエキュートで買い物するのも楽しみに。' },
      { author: 'D.M', rating: 4, date: '1ヶ月前', text: 'トレーナーの知識が豊富。食事指導が実践的で日常生活に活かせます。' },
    ],
    price: '2ヶ月16回 215,600円〜（税込）',
    trial: '無料カウンセリング',
    features: ['食べて痩せる', '糖質制限なし', '完全個室', '立川駅近', '食事指導充実'],
    description: '「食べて痩せる」がコンセプト。糖質制限に頼らない独自メソッドで食事を楽しみながらダイエット。立川駅からアクセス良好。',
    access: 'JR「立川駅」徒歩5分',
    address: '東京都立川市（立川駅徒歩5分）',
    popularPlan: { name: 'スタンダードコース', description: '食べて痩せるメソッドによるマンツーマントレーニング＋食事指導。', price: '2ヶ月16回 215,600円〜（税込）' },
    options: ['糖質制限なしの食事指導', 'ウェアレンタル無料', '完全個室', '食事報告サポート'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性70% / 男性30%', purpose: ['ダイエット', 'ボディメイク', '食事改善', '健康管理'] },
    basicInfo: { hours: '10:00〜22:00', closed: '不定休', facilities: ['完全個室', 'シャワー', 'ロッカー'] },
  },
]

const faqs = [
  { question: '立川で女性専用のパーソナルジムはどこがおすすめ？', answer: 'OUTLINE、ビーコンセプト、リボーンマイセルフ、UNDEUX SUPERBODY LIFEが立川で人気の女性専用ジムです。生涯サポートならOUTLINE、脚やせならビーコンセプトがおすすめ。' },
  { question: '立川のパーソナルジムの料金相場は？', answer: '立川の2ヶ月コースは約18万〜22万円。リボーンマイセルフの8回92,400円〜が最安。都心部より若干リーズナブルな傾向があります。' },
  { question: '立川駅から最も近いジムは？', answer: 'ビーコンセプトとUNDEUX SUPERBODY LIFEが徒歩4分。OUTLINE・リボーンマイセルフは徒歩5分です。' },
  { question: '子連れで通えるジムは？', answer: 'OUTLINEはベビーサークル完備。ビーコンセプトは託児所費用補助あり。立川は子育て世帯も多く、対応ジムがあります。' },
  { question: '体験は無料？', answer: 'ビーコンセプト・OUTLINE・リボーンマイセルフ・Bodykeは無料カウンセリング。UNDEUX SUPERBODY LIFEは体験レッスンあり。' },
  { question: '月額制で通えるジムは？', answer: 'UNDEUX SUPERBODY LIFEは月額制で月2回〜8回から選べます。月8回59,400円〜。継続割で長く通うほどお得になります。' },
  { question: '立川と八王子、どちらがジムの選択肢が多い？', answer: '立川のほうが女性専用ジムの選択肢が豊富です。JR中央線・南武線・多摩モノレールが交差するターミナル駅なのでアクセスも良好。' },
  { question: '食事指導が充実しているジムは？', answer: 'Bodykeは糖質制限なしの「食べて痩せる」メソッド。ビーコンセプトは医師監修の食事指導。UNDEUX SUPERBODY LIFEもプロの食事アドバイスが受けられます。' },
  { question: '最も安いプランは？', answer: 'リボーンマイセルフの8回コース（92,400円〜）が最安。短期間で試したい方におすすめ。月額制ならUNDEUX SUPERBODY LIFEの月2回プラン。' },
  { question: 'リバウンド防止のサポートは？', answer: 'OUTLINEの「生涯無料アフターサポート」が最も手厚い。24時間LINEで相談可能で卒業後もサポートが続きます。' },
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
              【2026最新】立川の女性専用パーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選！料金比較
            </h1>
          </div>
        </section>
        <section className="bg-white py-3 border-b border-line"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-brand-light"><Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}<span className="text-brand-muted">立川</span></nav></div></section>
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">こんにちは、G-PersonalGym編集部です。</p>
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
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-brand-text mb-4">コスパ重視</h3><ul className="space-y-2 text-sm"><li className="text-brand-muted">・リボーンマイセルフ（8回 92,400円〜）</li><li className="text-brand-muted">・OUTLINE（16回 184,800円〜）</li><li className="text-brand-muted">・ビーコンセプト（16回 199,650円〜）</li></ul></div>
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-brand-text mb-4">月額制で継続</h3><ul className="space-y-2 text-sm"><li className="text-brand-muted">・UNDEUX LIFE（月8回 59,400円〜）</li><li className="text-brand-muted">・継続割でお得に</li></ul></div>
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-brand-text mb-4">子連れ対応</h3><ul className="space-y-2 text-sm"><li className="text-brand-muted">・OUTLINE（ベビーサークル完備）</li><li className="text-brand-muted">・ビーコンセプト（託児所費用補助）</li></ul></div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-ivory">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">立川の料金相場【2026年4月】</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-line"><h3 className="font-bold text-brand-text mb-3">2ヶ月集中コース</h3><p className="text-3xl font-bold text-accent mb-2">18万〜22万円</p><p className="text-sm text-brand-muted">OUTLINE 184,800円〜が最安クラス。都心部より若干リーズナブル。</p></div>
              <div className="bg-white rounded-xl p-6 border border-line"><h3 className="font-bold text-brand-text mb-3">短期コース</h3><p className="text-3xl font-bold text-accent mb-2">9.2万円〜</p><p className="text-sm text-brand-muted">リボーンマイセルフ 8回92,400円〜。まず試したい方に最適。</p></div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">立川で選ぶ際の注意点</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-line"><h3 className="text-lg font-bold text-brand-text mb-3">多摩エリアのターミナル駅で交通至便</h3><p className="text-brand-muted leading-relaxed">立川はJR中央線・南武線・多摩モノレールが交差するターミナル駅。多摩エリア各地からアクセスしやすいため、近隣の国立・国分寺・日野・昭島からも通いやすいです。</p></div>
              <div className="bg-white rounded-xl p-6 border border-line"><h3 className="text-lg font-bold text-brand-text mb-3">北口と南口でジムの場所が異なる</h3><p className="text-brand-muted leading-relaxed">立川駅は北口がルミネ・グランデュオなどの商業施設、南口はIKEA・ららぽーと方面。ジムがどちら側にあるか事前に確認しておきましょう。</p></div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-ivory">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">よくある質問</h2>
            <div className="space-y-4">{faqs.map((faq, index) => (<div key={index} className="border border-line rounded-xl overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-accent-tint transition"><h3 className="font-bold text-brand-text pr-4 text-sm">Q{index + 1}. {faq.question}</h3><svg className="w-5 h-5 text-accent group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-5 pb-5 text-brand-muted leading-relaxed text-sm">{faq.answer}</div></details></div>))}</div>
          </div>
        </section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl font-bold text-brand-text mb-6 text-center">まとめ</h2><p className="text-brand-muted leading-relaxed mb-4">立川エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。</p><p className="text-brand-muted leading-relaxed mb-4">生涯サポートならOUTLINE、脚やせならビーコンセプト、女性トレーナー希望ならリボーンマイセルフ、月額制ならUNDEUX SUPERBODY LIFEがおすすめです。</p><p className="text-brand-muted leading-relaxed">まずは気になるジムの体験レッスンに行ってみてください。</p></div></section>
        <section className="py-16 bg-gradient-to-r from-accent to-accent-dark text-white"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl font-bold mb-4">まずは無料カウンセリングから</h2><p className="text-white/80 mb-8">複数のジムを比較して、あなたに合うジムを見つけましょう。</p><Link href="/ranking/" className="inline-block bg-white text-accent px-10 py-4 text-sm font-bold rounded-full hover:bg-accent-tint transition-all">おすすめランキングを見る</Link></div></section>
      </main>
      <RelatedAreas currentSlug="tachikawa" />
      <SiteFooter />
    </>
  )
}
