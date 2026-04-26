import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { FAQSchema } from '@/components/FAQSchema'

const topGyms = [
  { name: 'ビーコンセプト（B CONCEPT）', feature: '下半身・太もも痩せ特化', price: '月々5,545円〜（税込・分割）', badge: '女性専用' },
  { name: 'リボーンマイセルフ', feature: '女性トレーナーのみ在籍', price: '入会金38,000円＋コース料金', badge: '女性専用' },
  { name: 'UNDEUX SUPERBODY', feature: '食事管理・宅配食付き', price: '2ヶ月16回 220,000円〜', badge: '女性専用' },
  { name: 'OUTLINE（アウトライン）', feature: '完全個室・生涯サポート', price: '16回 184,800円〜（税込）', badge: '女性専用' },
  { name: 'Bodyke（ボディーク）', feature: '糖質制限なしボディメイク', price: '2ヶ月 215,600円〜（税込）', badge: 'ボディメイク特化' },
]

const areas = [
  { name: '渋谷', slug: 'shibuya', desc: '駅チカ多数' },
  { name: '新宿', slug: 'shinjuku', desc: '選択肢豊富' },
  { name: '池袋', slug: 'ikebukuro', desc: 'コスパ充実' },
  { name: '銀座', slug: 'ginza', desc: '高級感あり' },
  { name: '六本木', slug: 'roppongi', desc: '駅近好立地' },
  { name: '横浜', slug: 'yokohama', desc: '神奈川No.1' },
  { name: '大阪', slug: 'osaka', desc: '梅田・心斎橋' },
  { name: '名古屋', slug: 'nagoya', desc: '名駅・栄' },
  { name: '福岡', slug: 'fukuoka', desc: '天神・博多' },
  { name: '札幌', slug: 'sapporo', desc: '大通・すすきの' },
]

const faqs = [
  { question: '女性専用パーソナルジムとは？', answer: '女性専用パーソナルジムは、女性のみが利用できるパーソナルトレーニングジムです。女性トレーナーのみが在籍している場合も多く、女性特有の悩み（下半身太り、産後ダイエット、ブライダルダイエットなど）に特化したプログラムを提供しています。完全個室で人目を気にせずトレーニングに集中��きます。' },
  { question: 'パーソナルジムの料金相場はどのくらい？', answer: '女性専用パ���ソナルジムの2ヶ月コース（16回）の料金相場は約18万〜25万円（税込）です。入会金は2万〜5万円程度。月額制のジムでは月1万〜6万円程度から通えるプランもあります。体験レッスンは無料〜5,000円程度で受けられます。' },
  { question: '初心者でも大丈夫ですか？', answer: 'はい、大丈夫です。パーソナルジムは一人ひとりのレベルに合わせてトレーニングメニューを組むため、運動が苦手な方や初心者の方こそおすすめです。トレーナーがマンツーマンで丁寧に指導してくれるので安心です。' },
  { question: 'どのくらいの期間で効果が出ますか？', answer: '個人差はありますが、2ヶ月（16回）のコースで平均5〜8kgの減量効果が期待できます。見た目の変化（ウエストダウン、ヒップアップなど）は1ヶ月目から感じる方が多いです。' },
  { question: '食事制限は厳しいですか？', answer: 'ジムによって異なります。ビーコンセプトは医師監修の食事指導、UNDEUX SUPERBODYは糖質オフ宅配食を提供。Bodykeは糖質制限なしで好きなものを食べながらダイエットを目指します。無理な食事制限ではなく、栄養バランスの取れた食生活を指導するジムがほとんどです。' },
  { question: '子連れでも通えるジムはありますか？', answer: 'はい、あります。ビーコンセプトは託児所費用を最大1,000円/回まで補助。OUTLINEは全店にベビーサークルを完備し、子連れOKです。リボーンマイセルフも一部店舗で託児サービスを提供していま��。' },
  { question: 'リバウンドしないか心配です', answer: 'OUTLINEは業界初の「生涯無料アフターサポート」を提供しており、卒業後もずっと無料でサポートが受けられます。多くのジムでは卒業後のリバウンド防止プログラムや、食事管理のフォローアップが含まれています。' },
  { question: '体験レッスンでは何をしますか？', answer: 'カウンセリング（目標・悩みのヒアリング）→ 体組成測定 → 実際のトレーニング体験 → 今後のプラン提案、という流れが一般的です。所要時間は60〜90分程度。無料カウンセリングのみのジムもあります。' },
  { question: 'ウェアやシューズは必要ですか？', answer: 'ほとんどの女性専用パーソナルジムでは、ウェア・タオル・シューズなどのレンタルが無料です。手ぶらで通えるジムがほとんどなので、仕事帰りにも気軽に立���寄れます。' },
  { question: '産後ダイエットにも対応していますか？', answer: 'はい。ビーコンセプト、リ���ーンマイセルフ、UNDEUX SUPERBODYなど多くの女性専用ジムが産後ダイエットコースを用意しています。産後の体の回復に配慮したプログラムで、骨盤矯正や体型戻しをサポートします。' },
]

export default function Home() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-gradient-to-br from-rose-100 via-rose-50 to-purple-50 py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-rose-500 text-sm font-medium mb-4 tracking-wider">2026年最新 女性専用パーソナルジム比較</p>
            <h1 className="text-3xl md:text-5xl font-bold text-brand-text mb-6 leading-tight">
              あなたにぴったりの<br className="md:hidden" />
              <span className="text-rose-500">女性専用パ���ソナルジム</span>が<br />
              きっと見つかる
            </h1>
            <p className="text-brand-muted text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              女性のための比較サイト「G-PersonalGym」。<br />
              料金・口コミ・特徴を徹底比較して、理想のジムを見つけましょう。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ranking/" className="btn-primary text-base !px-8 !py-4 !rounded-full inline-block">
                おすすめランキングを見��
              </Link>
              <Link href="/guide/" className="btn-secondary text-base !px-8 !py-4 !rounded-full inline-block">
                選び方ガイドを読む
              </Link>
            </div>
          </div>
        </section>

        {/* Gym Comparison */}
        <section className="py-16 bg-white" id="comparison">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-2 text-center">人気ジム比較表</h2>
            <p className="text-brand-muted text-sm text-center mb-8">女性専用の主要パーソナルジム5社を比較</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-rose-500 text-white">
                    <th className="px-4 py-3 text-left font-bold whitespace-nowrap">ジム名</th>
                    <th className="px-4 py-3 text-left font-bold whitespace-nowrap">特徴</th>
                    <th className="px-4 py-3 text-left font-bold whitespace-nowrap">料金目安</th>
                    <th className="px-4 py-3 text-center font-bold whitespace-nowrap">タイプ</th>
                  </tr>
                </thead>
                <tbody>
                  {topGyms.map((gym, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-rose-50/50'}>
                      <td className="px-4 py-3 font-bold text-brand-text whitespace-nowrap">{gym.name}</td>
                      <td className="px-4 py-3 text-brand-muted">{gym.feature}</td>
                      <td className="px-4 py-3 text-brand-muted whitespace-nowrap">{gym.price}</td>
                      <td className="px-4 py-3 text-center">
                        <span className="inline-block bg-rose-100 text-rose-600 text-xs px-2 py-1 rounded-full">{gym.badge}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-brand-light text-xs mt-3 text-right">※料金は税込。最新情報は各公式���イトでご確認ください。</p>
          </div>
        </section>

        {/* Area Links */}
        <section className="py-16 bg-rose-50" id="areas">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-2 text-center">エリアから探す</h2>
            <p className="text-brand-muted text-sm text-center mb-8">全国10エリアの女性向けパーソナルジム情報</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {areas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}/`}
                  className="block bg-white border border-rose-200 rounded-xl p-5 text-center hover:shadow-lg hover:border-rose-400 transition card-hover"
                >
                  <span className="text-lg font-bold text-brand-text block mb-1">{area.name}</span>
                  <span className="text-brand-light text-xs">{area.desc}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Guide Sections */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-2 text-center">コンテンツ</h2>
            <p className="text-brand-muted text-sm text-center mb-8">パーソナルジム選びに役立つ情報</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/ranking/" className="block bg-gradient-to-br from-rose-50 to-purple-50 border border-rose-200 rounded-xl p-8 hover:shadow-lg transition card-hover">
                <div className="text-rose-500 text-3xl mb-4">1</div>
                <h3 className="text-lg font-bold text-brand-text mb-2">ランキングTOP10</h3>
                <p className="text-brand-muted text-sm">女性専用パーソナルジムの人気ランキング。料金・口コミ・特徴を比較。</p>
              </Link>
              <Link href="/cost/" className="block bg-gradient-to-br from-rose-50 to-purple-50 border border-rose-200 rounded-xl p-8 hover:shadow-lg transition card-hover">
                <div className="text-purple-500 text-3xl mb-4">2</div>
                <h3 className="text-lg font-bold text-brand-text mb-2">料金相場ガイド</h3>
                <p className="text-brand-muted text-sm">2ヶ月コース・月額制・都度払いの料金を徹底解説。</p>
              </Link>
              <Link href="/guide/" className="block bg-gradient-to-br from-rose-50 to-purple-50 border border-rose-200 rounded-xl p-8 hover:shadow-lg transition card-hover">
                <div className="text-rose-500 text-3xl mb-4">3</div>
                <h3 className="text-lg font-bold text-brand-text mb-2">選び方ガイド</h3>
                <p className="text-brand-muted text-sm">失敗しないパーソナルジムの選び方を5つのポイントで解説。</p>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-rose-50" id="faq">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-2 text-center">よくある質問</h2>
            <p className="text-brand-muted text-sm text-center mb-8">パーソナルジムに関するよくある疑問にお答えします</p>
            <div className="space-y-4">
              {faqs.slice(0, 5).map((faq, index) => (
                <div key={index} className="bg-white border border-rose-200 rounded-xl overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-rose-50 transition">
                      <h3 className="font-bold text-brand-text pr-4 text-sm md:text-base">{faq.question}</h3>
                      <svg className="w-5 h-5 text-rose-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                    </summary>
                    <div className="px-5 pb-5 text-brand-muted leading-relaxed text-sm">{faq.answer}</div>
                  </details>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/faq/" className="text-rose-500 hover:text-rose-600 font-medium text-sm underline">すべてのFAQを見る →</Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-rose-500 to-purple-500 text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">まずは無料カウンセリングから</h2>
            <p className="text-white/80 mb-8 leading-relaxed">気になるジムの体験レッスンに行ってみましょう。<br />複数のジムを比較して、あなたに合うジムを見つけてください。</p>
            <Link href="/ranking/" className="inline-block bg-white text-rose-500 px-10 py-4 text-sm font-bold rounded-full hover:bg-rose-50 transition-all">
              おすすめランキングを見る
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
