import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { FAQSchema } from '@/components/FAQSchema'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '女性専用パーソナルジムに関するよくある質問（FAQ）15問',
  description: '女性専用パーソナルジムに関する疑問を15問にまとめて回答。料金・効果・食事制限・子連れOK・リバウンドなど、よくある質問に詳しくお答えします。',
}

const faqs = [
  { question: '女性専用パーソナルジムと通常のパーソナルジムの違いは？', answer: '女性専用パーソナルジムは、会員が女性のみ（男性は入店不可）で、女性特有の悩み（下半身太り、産後ダイエット、ブライダルダイエットなど）に特化したプログラムを提供しています。トレーナーも全員女性のジム（リボーンマイセルフなど）もあります。設備面でもパウダールーム・基礎化粧品完備など女性に嬉しいサービスが充実しています。' },
  { question: 'パーソナルジムの料金相場はどのくらい？', answer: '女性専用パーソナルジムの2ヶ月コース（16回）の料金相場は約18万〜25万円（税込）です。入会金は2万〜5万円程度。月額制のジムでは月1.2万〜6万円程度から通えます。体験レッスンは無料〜5,000円程度で受けられます。ビーコンセプトは月々5,545円〜の分割払いにも対応。' },
  { question: '運動初心者でも大丈夫��すか？', answer: 'はい、大丈夫です。パーソナルジムはマンツーマン指導なので、一人ひとりの体力レベルに合わせてメニューを組みます。初心者の方こそパーソナルジムがおすすめ。正しいフォームを最初から学べるため、怪我のリスクも低く効率的にトレーニングできます。' },
  { question: 'どのくらいの期間で効果が出ますか？', answer: '個人差はありますが、2ヶ月（16回）のコースで平均5〜8kgの減量効果が期待できます。見た目の変化（ウエストダウン、ヒップアップなど）は1ヶ月目���ら感じる方が多いです。体質改善・姿勢改善は3ヶ月程度で実感する方が多いです。' },
  { question: '食事制限は厳しいですか？', answer: 'ジムによって異なります。ビーコンセプトは医師監修の食事指導、UNDEUX SUPERBODYは糖質オフ宅配食を無料提供。Bodykeは糖質制限なしで好きなものを食べながらダイエットを目指します。最近は極端な食事制限ではなく、栄養バランスの取れた食生活を指導するジムがほとんどです。' },
  { question: '子連れでも通えるジムはありますか？', answer: 'はい、あります。ビーコンセプトは託児所費用を最大1,000円/回まで補助。OUTLINEは全店にベビーサークルを完備。リボーンマイセルフも一部店舗で託児サービスを提供。子育て中のママでも安心して通えるジムが増えています。' },
  { question: 'リバウンドが心配です', answer: 'OUTLINEは業界初の「生涯無料アフターサポート」を提供しており、卒業後もずっとサポートが受けられます。多くのジムでは卒業後1〜3ヶ月のリバウンド防止プログラムが含まれています。食事管理のフォローアップや、定期的なカウンセリングが受けられるジムを選びましょう。' },
  { question: '体験レッスンでは何をしますか？', answer: 'カウンセリング（目標・悩みのヒアリング）→ 体組成測定（体脂肪率・筋肉量など）→ 実際のトレーニング体験 → 今後のプラン提案、という流れが一般的です。所要時間は60〜90分程度。動きやすい服装で行きましょう（レンタルありのジムも多い）。' },
  { question: 'ウェアやシューズは必要ですか？', answer: 'ほとんどの女性専用パーソナルジムでは、ウェア・タオル・シューズなどのレンタルが無料です。手ぶらで通えるジムがほとんどなので、仕事帰りにも気軽に立ち寄れます。シャワー完備のジムも多いです。' },
  { question: '産後ダイエットにも対応していますか？', answer: 'はい。ビーコンセプト、リボーンマイセルフ、UNDEUX SUPERBODYなど多くの女性専用ジムが産後ダイエットコースを用意しています。産後の体の回復に配慮したプログラムで、骨盤矯正や体型戻しをサポートします。産後1ヶ月健診後から通えるジムが多いです。' },
  { question: 'ブライダルダイエットに対応しているジムは？', answer: 'リボーンマイセルフやビーコンセプトなど、ブライダルダイエット専用コースを用意しているジムがあります。結婚式の2〜3ヶ月前から始めるのが理想的。二の腕・背中・デコルテラインなど、ドレス映えするボディラインを目指したプログラムが人気です。' },
  { question: '途中で解約はできますか？', answer: 'ジムによって異なりますが、多くのジムでは途中解約が可能です。クーリングオフ（契約後8日以内）は法律で保証されています。中途解約の場合、解約金が発生するケースもあるので、契約前に必ず確認しましょう。返金保証制度があるジムを選ぶと安心です。' },
  { question: '週に何回通えばいいですか？', answer: '一般的には週2回（月8回）が推奨されています。2ヶ月コースは週2回×8週=16回が標準。週1回でも効果はありますが、効果が出るまでの期間が長くなります。忙しい方は月4回プランから始めるのもおすすめ。' },
  { question: '筋肉がつきすぎてムキムキにならないか心配です', answer: '女性はホルモンの関係でムキムキになりにくい体質です。女性専用ジムのトレーニングは「引き締め」を目的としたメニューが中心。太い筋肉をつけるのではなく、しなやかで女性らしいボディラインを作るトレーニングを行います。' },
  { question: '生理中でもトレーニングできますか？', answer: 'はい、可能です。ただし体調が優れない場合は無理をしないでください。女性専用ジムのトレーナーは生理周期に配慮したトレーニングメニューを組んでくれます。予約のキャンセル・変更が柔軟にできるジムを選ぶと安心です。' },
]

export default function FAQPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h1 className="text-2xl md:text-4xl font-bold text-brand-text mb-4">女性専用パーソナルジム<br />よくある質問（FAQ）</h1>
            <p className="text-brand-muted text-sm">パーソナルジムに関する疑問にお答えします（全{faqs.length}問）</p>
          </div>
        </section>
        <section className="py-3 bg-white border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light"><Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}<span className="text-brand-muted">FAQ</span></nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white border border-line rounded-xl overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-accent-tint transition">
                      <h3 className="font-bold text-brand-text pr-4 text-sm md:text-base">
                        <span className="text-accent mr-2">Q{index + 1}.</span>
                        {faq.question}
                      </h3>
                      <svg className="w-5 h-5 text-accent group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                    </summary>
                    <div className="px-5 pb-5 text-brand-muted leading-relaxed text-sm border-t border-line pt-4">{faq.answer}</div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-accent to-accent-dark text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-4">ジム選びを始めよう</h2>
            <p className="text-white/80 mb-8">ランキングや選び方ガイドも参考にしてください。</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ranking/" className="inline-block bg-white text-accent px-8 py-3 text-sm font-bold rounded-full hover:bg-accent-tint transition-all">ランキング</Link>
              <Link href="/guide/" className="inline-block border-2 border-white text-white px-8 py-3 text-sm font-bold rounded-full hover:bg-white/10 transition-all">選び方ガイド</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
