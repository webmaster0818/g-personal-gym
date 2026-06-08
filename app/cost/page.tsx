import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { FAQSchema } from '@/components/FAQSchema'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '女性専用パーソナルジムの料金相場【2026年最新】2ヶ月・月額・都度払いを徹底比較',
  description:
    '女性専用パーソナルジムの料金相場を、2ヶ月集中コース・月額制・都度払い別に徹底解説。入会金や食事指導などの追加費用、総額の目安、安く抑えるコツ、他の運動施設との料金比較まで、公開情報ベースでまとめました。',
}

const faqs = [
  { question: '女性専用パーソナルジムの料金相場はいくらですか？', answer: '主流の2ヶ月集中コース（16回）は約18万〜25万円（税込）が相場です。これに入会金2万〜5万円程度が加わります。月額制なら月1.2万〜6万円、都度払いは1回6千〜1.5万円が目安です。キャンペーンで入会金無料になるケースも多く、実際の総額は各ジムの無料カウンセリングで確認するのが確実です。' },
  { question: '2ヶ月コースと月額制はどちらがお得ですか？', answer: '短期間で集中的に結果を出したいなら2ヶ月コース、無理なく長く続けたい・初期費用を抑えたいなら月額制が向きます。週2回を3ヶ月以上続ける想定なら、月額制のほうが総額を抑えられる場合があります。一方、食事指導や宅配食などの手厚いサポートは2ヶ月コースに含まれることが多い点も比較材料です。' },
  { question: 'コース料金以外にかかる費用はありますか？', answer: '入会金（2万〜5万円程度）が代表的です。ウェア・タオル・シューズのレンタルは無料のジムがほとんどで、食事指導もコースに含まれる場合が多いです。プロテインや一部のオプション（部分痩せ集中など）が別料金のことがあるため、カウンセリング時に「総額でいくらか」を必ず確認しましょう。' },
  { question: '分割払いやローンは使えますか？', answer: '多くの女性専用パーソナルジムが分割払い（提携ローン・クレジットカード）に対応しています。たとえば月々5,000円台からの分割に対応するジムもあります。分割は手数料が上乗せされるため、総支払額と回数を確認したうえで利用するのがおすすめです。' },
  { question: '料金を安く抑える方法はありますか？', answer: '「入会金無料キャンペーン」「モニター割引（ビフォーアフター提供）」「友達紹介割引」「年度替わり・季節のキャンペーン」を狙うのが効果的です。高額コースが不安な場合は、まず月額制や都度払いのジムで相性を確かめてから本格的なコースに移行する方法もあります。' },
  { question: '一般的なジムより高いのはなぜですか？', answer: 'トレーナーがマンツーマンで指導し、一人ひとりに合わせたトレーニング・食事プログラムを設計するためです。フォーム指導や食事サポートまで含むため、自己流になりがちな一般ジム（月数千円〜）より単価は高くなりますが、短期間で結果が出やすく挫折しにくいのが特徴です。' },
  { question: '体験・カウンセリングは有料ですか？', answer: '多くの女性専用ジムが無料カウンセリングを実施しています。体験トレーニングは無料〜5,000円程度が目安です。料金やプランの詳細、自分に合うかは、契約前に無料カウンセリングで確認するのが確実です。複数社を比較するのもおすすめです。' },
]

export default function CostPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="eyebrow mb-3">Price Guide</p>
            <h1 className="text-2xl md:text-4xl font-bold text-ink mb-4 leading-snug">女性専用パーソナルジムの料金相場【2026年最新】</h1>
            <p className="text-ink-soft text-sm md:text-base leading-relaxed">2ヶ月集中コース・月額制・都度払い、入会金や追加費用まで。総額の目安と、賢く安く通うコツを徹底解説します。</p>
            <p className="text-ink-faint text-xs mt-3">更新日 2026年4月13日</p>
          </div>
        </section>
        <section className="py-3 bg-white border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-ink-faint"><Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}<span className="text-ink-soft">料金相場ガイド</span></nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-ink-soft leading-relaxed mb-8">パーソナルジムの料金体系は主に「2ヶ月集中コース」「月額制」「都度払い」の3タイプ。女性専用ジムの相場を、追加費用や他の選択肢との比較まで含めて詳しく解説します。料金は2026年時点の公開情報をもとにした目安で、最新の金額は各ジムの無料カウンセリングでご確認ください。</p>

            <div className="bg-accent-tint border border-accent-soft rounded-xl p-6 mb-10">
              <p className="font-bold text-ink mb-2">結論：相場はこのくらい</p>
              <ul className="text-sm text-ink-soft leading-relaxed space-y-1">
                <li>・<strong>2ヶ月集中コース（16回）</strong>：約18万〜25万円（税込）＋入会金2万〜5万円</li>
                <li>・<strong>月額制</strong>：月1.2万〜6万円（月4〜8回）／初期費用を抑えやすい</li>
                <li>・<strong>都度払い</strong>：1回6千〜1.5万円／自分のペースで通える</li>
              </ul>
            </div>

            <nav className="bg-ivory border border-line rounded-xl p-5 mb-12">
              <p className="font-bold text-ink text-sm mb-3">目次</p>
              <ol className="text-sm text-accent space-y-1.5 list-decimal list-inside">
                <li><a href="#types" className="hover:underline">料金タイプ別の相場</a></li>
                <li><a href="#bytimes" className="hover:underline">回数・期間別の料金目安</a></li>
                <li><a href="#factors" className="hover:underline">料金を左右する4つの要素</a></li>
                <li><a href="#nyukai" className="hover:underline">入会金の相場</a></li>
                <li><a href="#vs" className="hover:underline">他の選択肢との料金比較</a></li>
                <li><a href="#included" className="hover:underline">料金に含まれるサービス</a></li>
                <li><a href="#payment" className="hover:underline">支払い方法（分割・ローン）</a></li>
                <li><a href="#tips" className="hover:underline">お得に通うコツ</a></li>
                <li><a href="#faq" className="hover:underline">よくある質問</a></li>
              </ol>
            </nav>

            <h2 id="types" className="text-xl md:text-2xl font-bold text-ink mb-6">料金タイプ別の相場</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-ivory border border-line rounded-xl p-6">
                <h3 className="text-lg font-bold text-ink mb-2">2ヶ月集中コース</h3>
                <p className="text-3xl font-bold text-accent mb-2">18万〜25万円</p>
                <p className="text-ink-faint text-xs mb-4">16回（週2回×2ヶ月）</p>
                <ul className="space-y-2 text-sm text-ink-soft">
                  <li>・ビーコンセプト: 179,685円〜</li>
                  <li>・OUTLINE: 184,800円〜</li>
                  <li>・Bodyke: 215,600円〜</li>
                  <li>・UNDEUX: 220,000円〜</li>
                </ul>
              </div>
              <div className="bg-ivory border border-line rounded-xl p-6">
                <h3 className="text-lg font-bold text-ink mb-2">月額制</h3>
                <p className="text-3xl font-bold text-accent-dark mb-2">1.2万〜6万円/月</p>
                <p className="text-ink-faint text-xs mb-4">月4〜8回</p>
                <ul className="space-y-2 text-sm text-ink-soft">
                  <li>・エクササイズコーチ: 12,000円〜/月4回</li>
                  <li>・UNDEUX LIFE: 17,600円〜/月</li>
                  <li>・かたぎり塾: 30,800円〜/月4回</li>
                  <li>・UNDEUX: 59,400円〜/月8回</li>
                </ul>
              </div>
              <div className="bg-ivory border border-line rounded-xl p-6">
                <h3 className="text-lg font-bold text-ink mb-2">都度払い</h3>
                <p className="text-3xl font-bold text-accent mb-2">6千〜1.5万円/回</p>
                <p className="text-ink-faint text-xs mb-4">1回ごとの支払い</p>
                <ul className="space-y-2 text-sm text-ink-soft">
                  <li>・自分のペースで通える</li>
                  <li>・まとまった費用不要</li>
                  <li>・回数券タイプもあり</li>
                  <li>・継続が難しい面も</li>
                </ul>
              </div>
            </div>

            <h2 id="bytimes" className="text-xl md:text-2xl font-bold text-ink mb-6">回数・期間別の料金目安</h2>
            <p className="text-ink-soft text-sm leading-relaxed mb-4">「総額でいくらか」をつかむための、回数・期間別のおおよその目安です（コース料金のみ・入会金別）。1回あたりの単価は、まとめて契約するほど下がる傾向があります。</p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-accent text-white">
                    <th className="px-4 py-3 text-left">プラン</th>
                    <th className="px-4 py-3 text-left">回数</th>
                    <th className="px-4 py-3 text-left">総額の目安</th>
                    <th className="px-4 py-3 text-left">1回あたり</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white"><td className="px-4 py-3 border-b border-line">体験・お試し</td><td className="px-4 py-3 border-b border-line">1回</td><td className="px-4 py-3 border-b border-line">無料〜5,000円</td><td className="px-4 py-3 border-b border-line">—</td></tr>
                  <tr className="bg-ivory/50"><td className="px-4 py-3 border-b border-line">1ヶ月（短期）</td><td className="px-4 py-3 border-b border-line">8回</td><td className="px-4 py-3 border-b border-line">10万〜14万円</td><td className="px-4 py-3 border-b border-line">約1.3万〜1.8万円</td></tr>
                  <tr className="bg-white"><td className="px-4 py-3 border-b border-line">2ヶ月（主流）</td><td className="px-4 py-3 border-b border-line">16回</td><td className="px-4 py-3 border-b border-line">18万〜25万円</td><td className="px-4 py-3 border-b border-line">約1.1万〜1.6万円</td></tr>
                  <tr className="bg-ivory/50"><td className="px-4 py-3 border-b border-line">3ヶ月（じっくり）</td><td className="px-4 py-3 border-b border-line">24回</td><td className="px-4 py-3 border-b border-line">26万〜36万円</td><td className="px-4 py-3 border-b border-line">約1.0万〜1.5万円</td></tr>
                  <tr className="bg-white"><td className="px-4 py-3">月額（継続）</td><td className="px-4 py-3">月4〜8回</td><td className="px-4 py-3">月1.2万〜6万円</td><td className="px-4 py-3">約3千〜1.5万円</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-ink-faint text-xs mb-12">※公開情報をもとにした一般的な目安です。実際の金額・回数はジムやプランにより異なります。</p>

            <h2 id="factors" className="text-xl md:text-2xl font-bold text-ink mb-6">料金を左右する4つの要素</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
              {[
                { t: 'トレーニング形態', d: '完全マンツーマンは高め、セミパーソナル（2〜3名）やグループ型は割安。料金と指導の手厚さはトレードオフです。' },
                { t: 'コースの長さ・回数', d: '回数をまとめるほど1回あたりは下がる傾向。短期集中は総額が高く、月額・都度は初期費用が軽い。' },
                { t: 'サポート範囲', d: '食事指導・宅配食・アフターフォローなどが手厚いほど料金は上がります。「どこまで込みか」で総額が変わります。' },
                { t: '立地・店舗', d: '都心の駅近や高級志向の店舗は高め。同じブランドでもエリアで差が出ることがあります。' },
              ].map((x, i) => (
                <div key={i} className="bg-white border border-line rounded-xl p-5">
                  <h3 className="font-bold text-ink mb-1.5">{x.t}</h3>
                  <p className="text-ink-soft text-sm leading-relaxed">{x.d}</p>
                </div>
              ))}
            </div>

            <h2 id="nyukai" className="text-xl md:text-2xl font-bold text-ink mb-6">入会金の相場</h2>
            <div className="bg-white border border-line rounded-xl p-6 mb-12">
              <p className="text-ink-soft leading-relaxed mb-4">入会金は2万〜5万円が一般的です。キャンペーンで入会金無料になるジムも多いので、各ジムの最新キャンペーン情報をチェックしましょう。</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-accent text-white">
                      <th className="px-4 py-2 text-left">ジム名</th>
                      <th className="px-4 py-2 text-left">入会金（税込）</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white"><td className="px-4 py-2 border-b border-line">OUTLINE</td><td className="px-4 py-2 border-b border-line">15,000円〜33,000円</td></tr>
                    <tr className="bg-ivory/50"><td className="px-4 py-2 border-b border-line">ビーコンセプト</td><td className="px-4 py-2 border-b border-line">38,500円</td></tr>
                    <tr className="bg-white"><td className="px-4 py-2 border-b border-line">リボーンマイセルフ</td><td className="px-4 py-2 border-b border-line">38,000円</td></tr>
                    <tr className="bg-ivory/50"><td className="px-4 py-2 border-b border-line">Bodyke</td><td className="px-4 py-2 border-b border-line">41,800円</td></tr>
                    <tr className="bg-white"><td className="px-4 py-2 border-b border-line">UNDEUX SUPERBODY</td><td className="px-4 py-2 border-b border-line">22,000円</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h2 id="vs" className="text-xl md:text-2xl font-bold text-ink mb-6">他の選択肢との料金比較</h2>
            <p className="text-ink-soft text-sm leading-relaxed mb-4">「パーソナルは高い」と感じる前に、他の選択肢と特徴・料金を比べてみましょう。価格だけでなく、得られるサポートや結果の出やすさも含めて検討するのがポイントです。</p>
            <div className="overflow-x-auto mb-12">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-accent text-white">
                    <th className="px-4 py-3 text-left">選択肢</th>
                    <th className="px-4 py-3 text-left">料金の目安</th>
                    <th className="px-4 py-3 text-left">特徴</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white"><td className="px-4 py-3 border-b border-line font-medium">女性専用パーソナル</td><td className="px-4 py-3 border-b border-line">2ヶ月18万〜25万円</td><td className="px-4 py-3 border-b border-line">マンツーマン指導＋食事サポートで結果が出やすい</td></tr>
                  <tr className="bg-ivory/50"><td className="px-4 py-3 border-b border-line font-medium">一般的なフィットネスジム</td><td className="px-4 py-3 border-b border-line">月数千〜1万円</td><td className="px-4 py-3 border-b border-line">安いが自己流になりやすく挫折しやすい</td></tr>
                  <tr className="bg-white"><td className="px-4 py-3 border-b border-line font-medium">暗闇・グループ系</td><td className="px-4 py-3 border-b border-line">月1万〜2万円</td><td className="px-4 py-3 border-b border-line">楽しく続けやすいが個別最適化は弱い</td></tr>
                  <tr className="bg-ivory/50"><td className="px-4 py-3">オンラインパーソナル</td><td className="px-4 py-3">月1万〜3万円</td><td className="px-4 py-3">割安で自宅完結。器具や対面指導は限定的</td></tr>
                </tbody>
              </table>
            </div>

            <h2 id="included" className="text-xl md:text-2xl font-bold text-ink mb-6">料金に含まれるサービス</h2>
            <div className="space-y-4 mb-12">
              {[
                { name: 'ウェア・タオルレンタル', desc: 'ほとんどのジムで無料。手ぶらで通えます。' },
                { name: '食事指導', desc: 'コース料金に含まれるジムが多い。LINEでの日々のサポートが一般的。' },
                { name: 'プロテイン', desc: 'トレーニング後のプロテイン提供があるジムも。UNDEUX SUPERBODYは宅配食も無料。' },
                { name: 'アフターフォロー', desc: 'OUTLINEは生涯無料。他ジムも1〜3ヶ月のフォローが一般的。' },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-line rounded-xl p-5">
                  <h3 className="font-bold text-ink mb-1">{item.name}</h3>
                  <p className="text-ink-soft text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 id="payment" className="text-xl md:text-2xl font-bold text-ink mb-6">支払い方法（分割・ローン）</h2>
            <div className="bg-white border border-line rounded-xl p-6 mb-12">
              <p className="text-ink-soft text-sm leading-relaxed mb-3">まとまった費用が不安な場合は、分割払いで月々の負担を抑えられます。主な支払い方法は次の通りです。</p>
              <ul className="space-y-2 text-sm text-ink-soft">
                <li>・<strong>分割払い・提携ローン</strong>：月々5,000円台〜に対応するジムも。手数料と総支払額を要確認。</li>
                <li>・<strong>クレジットカード</strong>：一括・分割に対応。ポイント還元も。</li>
                <li>・<strong>月額制</strong>：初期費用を抑え、毎月定額で通える。</li>
              </ul>
              <p className="text-ink-faint text-xs mt-3">※分割は手数料が上乗せされます。総額・回数・金利をカウンセリングで必ず確認しましょう。</p>
            </div>

            <h2 id="tips" className="text-xl md:text-2xl font-bold text-ink mb-6">お得に通うコツ</h2>
            <div className="bg-gradient-to-br from-ivory to-sand border border-line rounded-xl p-6 mb-12">
              <ul className="space-y-3 text-ink-soft">
                <li className="flex items-start"><span className="text-accent mr-2 font-bold">1.</span><span><strong>入会金無料キャンペーンを狙う</strong> - 多くのジムが定期的に入会金無料キャンペーンを実施しています。</span></li>
                <li className="flex items-start"><span className="text-accent mr-2 font-bold">2.</span><span><strong>モニター割引を活用</strong> - ビフォーアフター写真の提供で割引になるケースがあります。</span></li>
                <li className="flex items-start"><span className="text-accent mr-2 font-bold">3.</span><span><strong>友達紹介割引</strong> - 紹介で双方にキャッシュバックがあるジムも。</span></li>
                <li className="flex items-start"><span className="text-accent mr-2 font-bold">4.</span><span><strong>分割払いの活用</strong> - ビーコンセプトは月々5,545円〜の分割払いに対応。</span></li>
                <li className="flex items-start"><span className="text-accent mr-2 font-bold">5.</span><span><strong>月額制ジムから始める</strong> - いきなり高額コースが不安な方は月額制のジムから試すのもおすすめ。</span></li>
              </ul>
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-ink mb-6">料金で後悔しないための注意点</h2>
            <div className="bg-white border border-line rounded-xl p-6 mb-12">
              <ul className="space-y-2 text-sm text-ink-soft">
                <li>・<strong>「総額」で比較する</strong>：コース料金だけでなく入会金・オプションを合算して比べる。</li>
                <li>・<strong>続けられる頻度・立地か</strong>：通いにくいと結局割高に。自宅・職場から近いかを重視。</li>
                <li>・<strong>解約・返金の条件</strong>：中途解約時の返金規定（クーリングオフを含む）を契約前に確認。</li>
                <li>・<strong>キャンペーンの条件</strong>：適用条件・期限・併用可否をチェック。</li>
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
                <li><Link href="/guide/" className="text-accent hover:text-accent-dark hover:underline">失敗しないパーソナルジムの選び方</Link></li>
                <li><Link href="/faq/" className="text-accent hover:text-accent-dark hover:underline">よくある質問をもっと見る</Link></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-accent to-accent-dark text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-4">まずは無料カウンセリングで相談</h2>
            <p className="text-white/80 mb-8">料金やプランの詳細・キャンペーンは、各ジムの無料カウンセリングで確認できます。</p>
            <Link href="/ranking/" className="inline-block bg-white text-accent px-10 py-4 text-sm font-bold rounded-full hover:bg-accent-tint transition-all">おすすめランキングを見る</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
