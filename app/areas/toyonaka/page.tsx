import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { GymCard } from '@/components/GymCard'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { FAQSchema } from '@/components/FAQSchema'
import { RelatedAreas } from '@/components/RelatedAreas'
import { AreaContext } from '@/components/AreaContext'
import { WhyWomenOnly } from '@/components/WhyWomenOnly'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '【2026年6月最新】豊中の女性向けパーソナルジムおすすめ4選！料金比較',
  description: '【2026年6月最新】豊中のおすすめ女性向けパーソナルジム4選を比較。マシンピラティス&パーソナルジム・パーソナルジムCALORE・Astageなど、料金・体験・特徴を各公式サイトで確認のうえ掲載しています。',
  keywords: '女性専用パーソナルジム,豊中,大阪,おすすめ,料金,比較,ダイエット,ボディメイク',
}

const gyms = [
  {
    name: 'マシンピラティス&パーソナルジム fis. 豊中駅前店',
    officialUrl: 'https://freeb-fis.co.jp/itiran/toyonaka/',
    price: '回数券8回 65,800円〜／月額制 月2回 16,400円〜（税込）',
    trial: '初回体験あり・カウンセリング無料',
    features: ['完全個室', 'マシンピラティス×トレーニング', '管理栄養士の食事指導', '子連れOK'],
    description: '完全個室マンツーマンで、マシンピラティスとトレーニングを組み合わせられるジム。管理栄養士の食事指導つきで、ベビーベッド・バウンサー完備の子連れOK。同系列に女性専用ブランド「fis.lady\'s」があります。',
    access: '阪急豊中駅 3番出口より徒歩2分',
    options: ['回数券32回236,800円', '月10回66,000円', 'ウェア無料レンタル'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '男女共用（女性向け要素が強い）', purpose: ['ダイエット', 'ピラティス', '産後ダイエット'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['完全個室'] },
  },
  {
    name: 'パーソナルジムCALORE（カローレ）豊中店',
    officialUrl: 'https://calore-gym.com/',
    price: '料金は公式サイトでご確認ください',
    trial: '無料体験トレーニング＋無料カウンセリング（手ぶら来店可）',
    features: ['完全個室', '管理栄養士の食事指導', '血液検査による体解析'],
    description: '完全個室マンツーマンのジム。管理栄養士による食事指導と血液検査による体解析が特徴で、結婚式前ダイエットなど女性向けの訴求が中心です。',
    access: '豊中駅から徒歩1分圏内',
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '男女共用（女性向け訴求中心）', purpose: ['ダイエット', 'ブライダル', 'ボディメイク'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['完全個室'] },
  },
  {
    name: 'Astage（エーステージ）豊中',
    officialUrl: 'https://astage2019.com/',
    price: 'スペシャルダイエットプログラム キャンペーン190,000円（他プランは公式サイトでご確認ください）',
    trial: '無料体験コースあり（電話・LINE・フォーム予約）',
    features: ['女性専用', '24時間ジム併設', 'EMS', 'グループレッスンあり'],
    description: '「女性だけの空間」を掲げる女性専用ジム。パーソナルに加えて24時間ジム利用・EMS・ピラティス等のグループレッスンがあります。食生活アドバイザー等による食事指導つきです。',
    access: '豊中市東豊中町（駅徒歩圏外・アクセスは公式サイトでご確認ください）',
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '女性100%（女性専用）', purpose: ['ダイエット', 'ボディメイク'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['公式サイトでご確認ください'] },
  },
  {
    name: 'パーソナルジムReViNa（レビナ）千里中央店',
    officialUrl: 'https://revina-personalgym.com/senri-chuo/',
    price: 'マンスリー月2回 16,280円〜（税込）',
    trial: '無料カウンセリングあり／体験5,500円（キャンペーンで0円）',
    features: ['女性が約7割', '産後対応', 'キッズスペース完備', 'リバウンド保険'],
    description: '会員の男女比7:3と女性が多いパーソナルジム。産後対応でベビーサークル・キッズスペースがあり、月90食分の食事サポートとリバウンド保険が特徴です。',
    access: '千里中央駅 徒歩15分',
    options: ['ダイエットプラン月88,000円〜'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '男女共用（女性約7割）', purpose: ['ダイエット', '産後ダイエット', 'ボディメイク'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['キッズスペース完備'] },
  },
]

const faqs = [
  { question: '豊中で女性専用のパーソナルジムはどこ？', answer: '公式サイトで女性専用（または女性専門）と確認できたのは、Astage（エーステージ）豊中です（2026年6月調査時点）。' },
  { question: '豊中のパーソナルジムの料金の目安は？', answer: '公式サイト掲載の料金では、マシンピラティス&パーソナルジム fis. 豊中駅前店は回数券8回 65,800円〜／月額制 月2回 16,400円〜（税込）。パーソナルジムReViNa（レビナ）千里中央店はマンスリー月2回 16,280円〜（税込）。キャンペーン等で変動するため最新は各公式サイトでご確認ください。' },
  { question: '豊中駅から近いジムは？', answer: '駅徒歩3分以内・直結では、マシンピラティス&パーソナルジム fis. 豊中駅前店（阪急豊中駅 3番出口より徒歩2分）、パーソナルジムCALORE（カローレ）豊中店（豊中駅から徒歩1分圏内）があります。' },
  { question: '体験やカウンセリングは無料で受けられる？', answer: 'マシンピラティス&パーソナルジム fis. 豊中駅前店、パーソナルジムCALORE（カローレ）豊中店、Astage（エーステージ）豊中、パーソナルジムReViNa（レビナ）千里中央店は無料の体験またはカウンセリングを実施しています（公式サイト記載・2026年6月時点）。有料体験でも当日入会で無料になるジムがあります。' },
  { question: '子連れで通えるジムはある？', answer: 'マシンピラティス&パーソナルジム fis. 豊中駅前店、パーソナルジムReViNa（レビナ）千里中央店が子連れ対応（キッズスペース・ベビーサークル・託児補助など）を公式に案内しています。条件は各公式サイトでご確認ください。' },
  { question: '初心者でも大丈夫？', answer: 'はい。パーソナルジムはマンツーマン指導が基本のため、運動経験がなくても一人ひとりのレベルに合わせてメニューを組んでもらえます。不安な場合は体験時に運動歴を伝えて相談しましょう。' },
]

export default function ToyonakaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16 bg-white">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-accent text-xs mb-2">更新日 2026年06月12日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              【2026年6月最新】豊中の女性向けパーソナルジム<br className="hidden md:block" />おすすめ{gyms.length}選！料金比較
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light">
              <Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}
              <span className="text-brand-muted">豊中</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-6">こんにちは、G-PersonalGym編集部です。</p>
            <p className="text-brand-muted leading-relaxed mb-6">「豊中で女性が通いやすいパーソナルジムを探している」「駅近で通いやすいジムが知りたい」という方のために、豊中エリアの女性向けパーソナルジム{gyms.length}選をまとめました。掲載情報はすべて各ジムの公式サイトで確認したものです（2026年6月時点）。</p>
            <div className="bg-ivory border-l-4 border-accent p-6 mb-8">
              <h2 className="text-lg font-bold text-brand-text mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-brand-muted">
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>豊中で女性向けのパーソナルジムを探している</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>駅近で通いやすいジムが良い</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>料金を比較して選びたい</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>体験を受けてから決めたい</span></li>
              </ul>
            </div>
          </div>
        </section>

        <AreaContext slug="toyonaka" />

        <WhyWomenOnly area="豊中" />

        <PriceComparisonTable gyms={gyms} areaName="豊中" />

        <section className="py-16 bg-ivory" id="gyms">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">豊中のおすすめ女性向けパーソナルジム{gyms.length}選</h2>
            <div className="space-y-8">{gyms.map((gym, index) => (<GymCard key={index} gym={gym} index={index} />))}</div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">目的別の選び方</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">女性専用にこだわる</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・Astage（エーステージ）豊中</li></ul>
              </div>
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">月額制で始めやすい</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・マシンピラティス&パーソナルジム fis. 豊中駅前店</li><li className="text-brand-muted">・パーソナルジムReViNa（レビナ）千里中央店</li></ul>
              </div>
              <div className="border border-line rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brand-text mb-4">完全個室でマンツーマン</h3>
                <ul className="space-y-2 text-sm"><li className="text-brand-muted">・マシンピラティス&パーソナルジム fis. 豊中駅前店</li><li className="text-brand-muted">・パーソナルジムCALORE（カローレ）豊中店</li></ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-ivory">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-4 text-center">豊中の料金一覧【2026年6月・公式サイト調べ】</h2>
            <p className="text-brand-light text-xs text-center mb-8">キャンペーン等により変動します。最新の料金は必ず各公式サイトでご確認ください。</p>
            <ul className="bg-white rounded-xl p-6 md:p-8 border border-line space-y-3">
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">マシンピラティス&パーソナルジム fis. 豊中駅前店</span><span className="text-brand-muted text-sm">回数券8回 65,800円〜／月額制 月2回 16,400円〜（税込）</span></li>
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">パーソナルジムCALORE（カローレ）豊中店</span><span className="text-brand-muted text-sm">料金は公式サイトでご確認ください</span></li>
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">Astage（エーステージ）豊中</span><span className="text-brand-muted text-sm">スペシャルダイエットプログラム キャンペーン190,000円（他プランは公式サイトでご確認ください）</span></li>
              <li className="flex flex-col md:flex-row md:items-baseline md:gap-3 border-b border-line pb-3"><span className="font-bold text-brand-text text-sm">パーソナルジムReViNa（レビナ）千里中央店</span><span className="text-brand-muted text-sm">マンスリー月2回 16,280円〜（税込）</span></li>
            </ul>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">豊中で選ぶ際の注意点</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="text-lg font-bold text-brand-text mb-3">出口・動線を事前に確認</h3>
                <p className="text-brand-muted leading-relaxed">同じ「駅徒歩◯分」でも、利用する路線や出口によって体感距離は変わります。通いたいジムがどの出口から近いかを事前に確認しましょう。</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-line">
                <h3 className="text-lg font-bold text-brand-text mb-3">体験は2〜3ジム比較を</h3>
                <p className="text-brand-muted leading-relaxed">トレーナーとの相性は継続のカギです。最低2〜3ジムの体験・カウンセリングに行って、雰囲気と指導スタイルを比較してから決めるのがおすすめです。</p>
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
                    <li>・<strong>動きやすいウェア</strong>（レンタルありのジムも多い）</li>
                    <li>・<strong>室内シューズ</strong>（レンタルありのジムも）</li>
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
            <p className="text-brand-muted leading-relaxed mb-4">豊中エリアの女性向けパーソナルジム{gyms.length}選をご紹介しました。掲載内容はすべて各ジムの公式サイトで確認した情報です（2026年6月時点）。</p>
            <p className="text-brand-muted leading-relaxed">料金やキャンペーンは変動するため、気になるジムが見つかったら公式サイトで最新情報を確認し、まずは体験・カウンセリングを受けてみてください。</p>
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
      <RelatedAreas currentSlug="toyonaka" />
      <SiteFooter />
    </>
  )
}
