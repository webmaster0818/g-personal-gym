import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '【2026年最新】女性専用パーソナルジムの料金相場ガイド',
  description: '女性専用パーソナルジムの料金相場を2ヶ月コース・月額制・都度払い別に徹底解説。入会金・追加費用も含めた総額比較でお得なジムが見つかります。',
}

export default function CostPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <section className="bg-gradient-to-br from-rose-100 via-rose-50 to-purple-50 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-rose-500 text-xs mb-2">更新日 2026年04月13日</p>
            <h1 className="text-2xl md:text-4xl font-bold text-brand-text mb-4">女性専用パーソナルジム<br />料金相場ガイド【2026年最新】</h1>
          </div>
        </section>
        <section className="py-3 bg-white border-b border-rose-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light"><Link href="/" className="hover:text-rose-500 transition">ホーム</Link>{' > '}<span className="text-brand-muted">料金相場ガイド</span></nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-8">パーソナルジムの料金体系は主に「2ヶ月集中コース」「月額制」「都度払い」の3タイプがあります。女性専用ジムの料金相場を詳しく解説します。</p>

            <h2 className="text-xl md:text-2xl font-bold text-brand-text mb-6">料金タイプ別の相場</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-text mb-2">2ヶ月集中コース</h3>
                <p className="text-3xl font-bold text-rose-500 mb-2">18万〜25万円</p>
                <p className="text-brand-light text-xs mb-4">16回（週2回×2ヶ月）</p>
                <ul className="space-y-2 text-sm text-brand-muted">
                  <li>・ビーコンセプト: 179,685円〜</li>
                  <li>・OUTLINE: 184,800円〜</li>
                  <li>・Bodyke: 215,600円〜</li>
                  <li>・UNDEUX: 220,000円〜</li>
                </ul>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-text mb-2">月額制</h3>
                <p className="text-3xl font-bold text-purple-500 mb-2">1.2万〜6万円/月</p>
                <p className="text-brand-light text-xs mb-4">月4〜8回</p>
                <ul className="space-y-2 text-sm text-brand-muted">
                  <li>・エクササイズコーチ: 12,000円〜/月4回</li>
                  <li>・UNDEUX LIFE: 17,600円〜/月</li>
                  <li>・かたぎり塾: 30,800円〜/月4回</li>
                  <li>・UNDEUX: 59,400円〜/月8回</li>
                </ul>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-text mb-2">都度払い</h3>
                <p className="text-3xl font-bold text-rose-500 mb-2">6千〜1.5万円/回</p>
                <p className="text-brand-light text-xs mb-4">1回ごとの支払い</p>
                <ul className="space-y-2 text-sm text-brand-muted">
                  <li>・自分のペースで通える</li>
                  <li>・まとまった費用不要</li>
                  <li>・回数券タイプもあり</li>
                  <li>・継続が難しい面も</li>
                </ul>
              </div>
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-brand-text mb-6">入会金の相場</h2>
            <div className="bg-white border border-rose-200 rounded-xl p-6 mb-12">
              <p className="text-brand-muted leading-relaxed mb-4">入会金は2万〜5万円が一般的です。キャンペーンで入会金無料になるジムも多いので、各ジムの最新キャンペーン情報をチェックしましょう。</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-rose-500 text-white">
                      <th className="px-4 py-2 text-left">ジム名</th>
                      <th className="px-4 py-2 text-left">入会金（税込）</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white"><td className="px-4 py-2 border-b border-rose-100">OUTLINE</td><td className="px-4 py-2 border-b border-rose-100">15,000円〜33,000円</td></tr>
                    <tr className="bg-rose-50/50"><td className="px-4 py-2 border-b border-rose-100">ビーコンセプト</td><td className="px-4 py-2 border-b border-rose-100">38,500円</td></tr>
                    <tr className="bg-white"><td className="px-4 py-2 border-b border-rose-100">リボーンマイセルフ</td><td className="px-4 py-2 border-b border-rose-100">38,000円</td></tr>
                    <tr className="bg-rose-50/50"><td className="px-4 py-2 border-b border-rose-100">Bodyke</td><td className="px-4 py-2 border-b border-rose-100">41,800円</td></tr>
                    <tr className="bg-white"><td className="px-4 py-2 border-b border-rose-100">UNDEUX SUPERBODY</td><td className="px-4 py-2 border-b border-rose-100">22,000円</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-brand-text mb-6">料金に含まれるサービス</h2>
            <div className="space-y-4 mb-12">
              {[
                { name: 'ウェア・タオルレンタル', desc: 'ほとんどのジムで無料。手ぶらで通えます。' },
                { name: '食事指導', desc: 'コース料金に含まれるジムが多い。LINEでの日々のサポートが一般的。' },
                { name: 'プロテイン', desc: 'トレーニング後のプロテイン提供があるジムも。UNDEUX SUPERBODYは宅配食も無料。' },
                { name: 'アフターフォロー', desc: 'OUTLINEは生涯無料。他ジムも1〜3ヶ月のフォローが一般的。' },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-rose-200 rounded-xl p-5">
                  <h3 className="font-bold text-brand-text mb-1">{item.name}</h3>
                  <p className="text-brand-muted text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-brand-text mb-6">お得に通うコツ</h2>
            <div className="bg-gradient-to-br from-rose-50 to-purple-50 border border-rose-200 rounded-xl p-6">
              <ul className="space-y-3 text-brand-muted">
                <li className="flex items-start"><span className="text-rose-500 mr-2 font-bold">1.</span><span><strong>入会金無料キャンペーンを狙う</strong> - 多くのジムが定期的に入会金無料キャンペーンを実施しています。</span></li>
                <li className="flex items-start"><span className="text-rose-500 mr-2 font-bold">2.</span><span><strong>モニター割引を活用</strong> - ビフォーアフター写真の提供で割引になるケースがあります。</span></li>
                <li className="flex items-start"><span className="text-rose-500 mr-2 font-bold">3.</span><span><strong>友達紹介割引</strong> - 紹介で双方にキャッシュバックがあるジムも。</span></li>
                <li className="flex items-start"><span className="text-rose-500 mr-2 font-bold">4.</span><span><strong>分割払いの活用</strong> - ビーコンセプトは月々5,545円〜の分割払いに対応。</span></li>
                <li className="flex items-start"><span className="text-rose-500 mr-2 font-bold">5.</span><span><strong>月額制ジムから始める</strong> - いきなり高額コースが不安な方は月額制のジムから試すのもおすすめ。</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-rose-500 to-purple-500 text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-4">まずは無料カウンセリングで相談</h2>
            <p className="text-white/80 mb-8">料金やプランの詳細は各ジムの無料カウンセリングで確認できます。</p>
            <Link href="/ranking/" className="inline-block bg-white text-rose-500 px-10 py-4 text-sm font-bold rounded-full hover:bg-rose-50 transition-all">おすすめランキングを見る</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
