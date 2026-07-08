import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { FAQSchema } from '@/components/FAQSchema'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/guide/' },
  title: '女性専用パーソナルジムの選び方【2026年版】失敗しない7つのポイント',
  description:
    '女性専用パーソナルジムの選び方を徹底解説。女性専用か・料金・トレーナーの質・通いやすさ・アフターサポートの5つの軸に加え、目的別の選び方、よくある失敗、体験前のチェックリストまで。失敗しないジム選びをサポートします。',
}

const faqs = [
  { question: '女性専用と男女共用、どちらを選ぶべき？', answer: '人目が気になる方・女性特有の悩み（産後、下半身太りなど）を相談したい方には女性専用がおすすめです。女性専用は会員もスタッフも女性中心で、更衣室やパウダールームも女性仕様。一方、共用ジムは店舗数が多く料金が割安な傾向があります。まずは無料カウンセリングで雰囲気を確かめましょう。' },
  { question: '初心者でも大丈夫ですか？', answer: 'はい。パーソナルジムは一人ひとりのレベルに合わせてメニューを組むため、むしろ運動が苦手な方や初心者にこそ向いています。トレーナーがマンツーマンでフォームから指導するので安心です。体験時に「初心者向けの説明が丁寧か」を確認しましょう。' },
  { question: 'ジムは何社くらい比較すべき？', answer: '2〜3社の無料カウンセリング・体験を受けて比較するのがおすすめです。料金・トレーナーとの相性・通いやすさ・雰囲気は実際に行かないと分かりません。複数社を見ると相場感も掴め、納得して選べます。' },
  { question: 'マンツーマンとセミパーソナルの違いは？', answer: 'マンツーマンはトレーナーが1名を専属指導するため、フォーム修正やメニューの最適化が手厚く料金は高め。セミパーソナル（2〜3名）はその分割安で、適度な仲間意識も得られます。手厚さ重視ならマンツーマン、コスパ重視ならセミパーソナルが向きます。' },
  { question: '勧誘が不安です。断っても大丈夫？', answer: '無料カウンセリングは情報収集の場なので、その場で契約する必要はありません。「持ち帰って検討します」と伝えれば問題ありません。強引な勧誘をするジムはその時点で候補から外す判断材料にもなります。' },
  { question: '続けられるか不安です', answer: '継続のカギは「通いやすさ」です。自宅・職場から近い、営業時間が生活リズムに合う、手ぶらで通える、といった条件を満たすジムを選ぶと続けやすくなります。アフターサポートが手厚いジムを選べば、卒業後のリバウンド防止にもつながります。' },
]

const points = [
  { num: 1, title: '女性専用かどうかをチェック', content: '女性専用ジムなら、男性の目を気にせずトレーニングに集中できます。女性トレーナーのみ在籍のジム（リボーンマイセルフなど）なら、女性特有の悩みも相談しやすいです。完全個室のジム（OUTLINEなど）も人目が気にならないのでおすすめです。', tips: ['女性専用 = 会員も女性のみ', '女性トレーナー在籍 = デリケートな相談がしやすい', '完全個室 = 周囲の目が気にならない'] },
  { num: 2, title: '料金・支払い方法を比較する', content: '2ヶ月コースの総額だけでなく、入会金・解約条件・分割払いの有無もチェック。月額制のジムなら少額から始められます。返金保証があるジムを選ぶと安心です。', tips: ['総額 = コース料金 + 入会金 + オプション', '分割払い対応のジムなら月々の負担が軽い', '返金保証の有無と条件を必ず確認'] },
  { num: 3, title: 'トレーナーの質を見極める', content: '資格保持者が多いか、指導実績はどのくらいか、体験レッスンでの対応は丁寧かをチェック。コンテスト入賞者が在籍するジムや、2万人以上の指導実績を持つジムもあります。', tips: ['体験レッスンで相性を確認', '資格・実績をチェック', 'カウンセリングの丁寧さも重要'] },
  { num: 4, title: '通いやすさ（立地・営業時間）', content: '自宅や職場から通いやすい場所にあるかが継続の鍵です。駅から徒歩5分以内のジムを選ぶのがおすすめ。営業時間も、早朝・夜遅くまで対応しているジムなら仕事帰りに通えます。', tips: ['駅からの距離（徒歩5分以内が理想）', '営業時間（早朝〜22時対応のジムもあり）', '手ぶらで通えるか（レンタルサービス）'] },
  { num: 5, title: 'アフターサポートの充実度', content: 'トレーニング期間終了後のリバウンド防止が重要です。OUTLINEの「生涯無料アフターサポート」のような手厚いフォロー体制もあります。食事指導のフォローアップがあるジムを選びましょう。', tips: ['卒業後のサポート期間と内容', '食事指導のフォローアップ', 'リバウンドした場合の対応'] },
]

export default function GuidePage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="eyebrow mb-3">How to Choose</p>
            <h1 className="text-2xl md:text-4xl font-bold text-ink mb-4 leading-snug">女性専用パーソナルジムの選び方【2026年版】</h1>
            <p className="text-ink-soft text-sm md:text-base leading-relaxed">「どこを選べばいいか分からない」を解消。失敗しない5つの軸＋目的別の選び方を、女性目線で解説します。</p>
            <p className="text-ink-faint text-xs mt-3">更新日 2026年4月13日</p>
          </div>
        </section>
        <section className="py-3 bg-white border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-ink-faint"><Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}<span className="text-ink-soft">選び方ガイド</span></nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-ink-soft leading-relaxed mb-8">「パーソナルジムに通いたいけど、どこを選べばいいかわからない」という方へ。女性目線で重要な5つのポイントに加え、目的別の選び方・よくある失敗・体験前のチェックリストまでまとめました。</p>

            <div className="bg-accent-tint border border-accent-soft rounded-xl p-6 mb-10">
              <p className="font-bold text-ink mb-2">結論：この順番で選べば失敗しにくい</p>
              <p className="text-sm text-ink-soft leading-relaxed">① 女性専用・個室など「通いやすい環境」で絞る → ② 自宅/職場から近い立地で候補を3社に → ③ 無料カウンセリングで料金総額とトレーナーの相性を比較 → ④ アフターサポートで最終判断。<strong>最後は必ず体験して決める</strong>のが鉄則です。</p>
            </div>

            <nav className="bg-ivory border border-line rounded-xl p-5 mb-12">
              <p className="font-bold text-ink text-sm mb-3">目次</p>
              <ol className="text-sm text-accent space-y-1.5 list-decimal list-inside">
                <li><a href="#points" className="hover:underline">失敗しない5つのポイント</a></li>
                <li><a href="#goal" className="hover:underline">目的別の選び方</a></li>
                <li><a href="#mistakes" className="hover:underline">よくある失敗と回避策</a></li>
                <li><a href="#checklist" className="hover:underline">体験前のチェックリスト</a></li>
                <li><a href="#faq" className="hover:underline">よくある質問</a></li>
              </ol>
            </nav>

            <h2 id="points" className="text-xl md:text-2xl font-bold text-ink mb-6">失敗しない5つのポイント</h2>
            <div className="space-y-8 mb-14">
              {points.map((point) => (
                <div key={point.num} className="bg-white border border-line rounded-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-accent to-accent-dark text-white px-6 py-4">
                    <h3 className="text-lg font-bold flex items-center gap-3">
                      <span className="bg-white text-accent w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">{point.num}</span>
                      {point.title}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-ink-soft leading-relaxed mb-4">{point.content}</p>
                    <div className="bg-ivory rounded-lg p-4">
                      <p className="text-sm font-bold text-ink mb-2">チェックポイント</p>
                      <ul className="space-y-1">
                        {point.tips.map((tip, i) => (
                          <li key={i} className="text-ink-soft text-sm flex items-start"><span className="text-accent mr-2">✓</span><span>{tip}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 id="goal" className="text-xl md:text-2xl font-bold text-ink mb-6">目的別の選び方</h2>
            <p className="text-ink-soft text-sm leading-relaxed mb-4">なりたい姿によって、重視すべきポイントは変わります。目的に合うタイプから選ぶと失敗しにくくなります。</p>
            <div className="overflow-x-auto mb-14">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-accent text-white">
                    <th className="px-4 py-3 text-left">目的</th>
                    <th className="px-4 py-3 text-left">重視ポイント</th>
                    <th className="px-4 py-3 text-left">向いているタイプ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white"><td className="px-4 py-3 border-b border-line font-medium">ダイエット・減量</td><td className="px-4 py-3 border-b border-line">食事指導の手厚さ・期間</td><td className="px-4 py-3 border-b border-line">2ヶ月集中＋食事サポート型</td></tr>
                  <tr className="bg-ivory/50"><td className="px-4 py-3 border-b border-line font-medium">下半身・部分痩せ</td><td className="px-4 py-3 border-b border-line">部位特化プログラム</td><td className="px-4 py-3 border-b border-line">部分痩せ特化（ビーコンセプト等）</td></tr>
                  <tr className="bg-white"><td className="px-4 py-3 border-b border-line font-medium">産後ダイエット</td><td className="px-4 py-3 border-b border-line">託児・産後プログラム</td><td className="px-4 py-3 border-b border-line">託児対応・産後コースあり</td></tr>
                  <tr className="bg-ivory/50"><td className="px-4 py-3 border-b border-line font-medium">ボディメイク</td><td className="px-4 py-3 border-b border-line">トレーナーの実績</td><td className="px-4 py-3 border-b border-line">コンテスト実績のあるジム</td></tr>
                  <tr className="bg-white"><td className="px-4 py-3 font-medium">無理なく継続</td><td className="px-4 py-3">料金・通いやすさ</td><td className="px-4 py-3">月額制・駅近・セミパーソナル</td></tr>
                </tbody>
              </table>
            </div>

            <h2 id="mistakes" className="text-xl md:text-2xl font-bold text-ink mb-6">よくある失敗と回避策</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
              {[
                { t: '料金の総額を見ずに契約', d: 'コース料金だけで判断し、入会金・オプションで想定より高くなるケース。必ず「総額」で比較を。' },
                { t: '遠いジムを選んで通えなくなる', d: '安さや人気で選んでも、通いにくいと挫折しがち。立地・営業時間を最優先に。' },
                { t: '体験せずに即決', d: '雰囲気やトレーナーとの相性は行かないと分からない。最低2〜3社の体験を。' },
                { t: 'アフターを確認せずリバウンド', d: '卒業後のフォローがないと戻りやすい。サポート内容を契約前に確認。' },
              ].map((x, i) => (
                <div key={i} className="bg-white border border-line rounded-xl p-5">
                  <h3 className="font-bold text-ink mb-1.5">{x.t}</h3>
                  <p className="text-ink-soft text-sm leading-relaxed">{x.d}</p>
                </div>
              ))}
            </div>

            <h2 id="checklist" className="text-xl md:text-2xl font-bold text-ink mb-6">体験前のチェックリスト</h2>
            <div className="bg-gradient-to-br from-ivory to-sand border border-line rounded-xl p-6 mb-14">
              <p className="text-ink-soft leading-relaxed mb-4">ネットの情報だけでは分からないことが多いです。雰囲気・トレーナーとの相性・設備の清潔感は、実際に体験して初めて分かります。最低でも2〜3ジムの体験で比較しましょう（無料〜5,000円程度）。当日は次を確認すると失敗しません。</p>
              <ul className="space-y-1.5 text-sm text-ink-soft">
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>料金の「総額」と解約・返金の条件</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>トレーナーの説明が丁寧か・相性はよいか</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>更衣室・パウダールーム・設備の清潔感</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>予約の取りやすさ・営業時間</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span><span>強引な勧誘がないか</span></li>
              </ul>
            </div>

            <h2 id="faq" className="text-xl md:text-2xl font-bold text-ink mb-6">よくある質問</h2>
            <div className="space-y-3 mb-12">
              {faqs.map((faq, index) => (
                <details key={index} className="group bg-white border border-line rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer">
                    <h3 className="font-medium text-ink text-sm md:text-base">{faq.question}</h3>
                    <svg className="w-4 h-4 text-accent group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </summary>
                  <div className="px-5 pb-5 text-ink-soft leading-relaxed text-sm">{faq.answer}</div>
                </details>
              ))}
            </div>

            <div className="bg-ivory border border-line rounded-xl p-6">
              <p className="font-bold text-ink text-sm mb-3">あわせて読みたい</p>
              <ul className="space-y-2 text-sm">
                <li><Link href="/ranking/" className="text-accent hover:text-accent-dark hover:underline">女性専用パーソナルジムおすすめランキング</Link></li>
                <li><Link href="/cost/" className="text-accent hover:text-accent-dark hover:underline">料金相場ガイド（総額・安く通うコツ）</Link></li>
                <li><Link href="/faq/" className="text-accent hover:text-accent-dark hover:underline">よくある質問をもっと見る</Link></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-accent to-accent-dark text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-4">気になるジムをチェック</h2>
            <p className="text-white/80 mb-8">まずはランキングから気になるジムを見つけ、無料カウンセリングで比較しましょう。</p>
            <Link href="/ranking/" className="inline-block bg-white text-accent px-10 py-4 text-sm font-bold rounded-full hover:bg-accent-tint transition-all">おすすめランキングを見る</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
