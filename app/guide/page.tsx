import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '【2026年版】女性のためのパーソナルジムの選び方ガイド',
  description: '女性がパーソナルジムを選ぶ際の5つのポイントを徹底解説。女性専用・料金・トレーナーの質・立地・アフターサポートの観点から、失敗しないジム選びをサポートします。',
}

export default function GuidePage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <section className="bg-gradient-to-br from-rose-100 via-rose-50 to-purple-50 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-rose-500 text-xs mb-2">更新日 2026年04月13日</p>
            <h1 className="text-2xl md:text-4xl font-bold text-brand-text mb-4">パーソナルジムの選び方ガイド<br />【女性のための5つのポイント】</h1>
          </div>
        </section>
        <section className="py-3 bg-white border-b border-rose-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light"><Link href="/" className="hover:text-rose-500 transition">ホーム</Link>{' > '}<span className="text-brand-muted">選び方ガイド</span></nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-brand-muted leading-relaxed mb-8">
              「パーソナルジムに通いたいけど、どこを選べばいいかわからない」という方のために、女性目線で重要な5つのポイントをまとめました。
            </p>

            <div className="space-y-10">
              {[
                {
                  num: 1,
                  title: '女性専用かどうかをチェック',
                  content: '女性専用ジムなら、男性の目を気にせずトレーニングに集中できます。女性トレーナーのみ在籍のジム（リボーンマイセルフなど）なら、女性特有の悩みも相談しやすいです。完全個室のジム（OUTLINEなど）も人目が気にならないのでおすすめです。',
                  tips: ['女性専用 = 会員も女性のみ', '女性トレーナー在籍 = デリケートな相談がしやすい', '完全個室 = 周囲の目が気にならない'],
                },
                {
                  num: 2,
                  title: '料金・支払い方法を比較する',
                  content: '2ヶ月コースの総額だけでなく、入会金・解約条件・分割払いの有無もチェック。月額制のジムなら少額から始められます。返金保証があるジムを選ぶと安心です。',
                  tips: ['総額 = コース料金 + 入会金 + オプション', '分割払い対応のジムなら月々の負担が軽い', '返金保証の有無と条件を必ず確認'],
                },
                {
                  num: 3,
                  title: 'トレーナーの質を見極める',
                  content: '資格保持者が多いか、指導実績はどのくらいか、体験レッスンでの対応は丁寧かをチェック。BEYONDはコンテスト入賞者が多数在籍、リボーンマイセルフは2万人以上の指導実績があります。',
                  tips: ['体験レッスンで相性を確認', '資格・実績をチェック', 'カウンセリングの丁寧さも重要'],
                },
                {
                  num: 4,
                  title: '通いやすさ（立地・営業時間）',
                  content: '自宅や職場から通いやすい場所にあるかが継続の鍵です。駅から徒歩5分以内のジムを選ぶのがおすすめ。営業時間も、早朝・夜遅くまで対応しているジムなら仕事帰りに通えます。',
                  tips: ['駅からの距離（徒歩5分以内が理想）', '営業時間（早朝〜22時対応のジムもあり）', '手ぶらで通えるか（レンタルサービス）'],
                },
                {
                  num: 5,
                  title: 'アフターサポートの充実度',
                  content: 'トレーニング期間終了後のリバウンド防止が重要です。OUTLINEの「生涯無料アフターサポート」は業界最強のフォロー体制。食事指導のフォローアップがあるジムを選びましょう。',
                  tips: ['卒業後のサポート期間と内容', '食事指導のフォローアップ', 'リバウンドした場合の対応'],
                },
              ].map((point) => (
                <div key={point.num} className="bg-white border border-rose-200 rounded-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-rose-500 to-purple-500 text-white px-6 py-4">
                    <h2 className="text-xl font-bold flex items-center gap-3">
                      <span className="bg-white text-rose-500 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">{point.num}</span>
                      {point.title}
                    </h2>
                  </div>
                  <div className="p-6">
                    <p className="text-brand-muted leading-relaxed mb-4">{point.content}</p>
                    <div className="bg-rose-50 rounded-lg p-4">
                      <p className="text-sm font-bold text-brand-text mb-2">チェックポイント</p>
                      <ul className="space-y-1">
                        {point.tips.map((tip, i) => (
                          <li key={i} className="text-brand-muted text-sm flex items-start">
                            <span className="text-rose-400 mr-2">✓</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-br from-rose-50 to-purple-50 border border-rose-200 rounded-xl p-8">
              <h2 className="text-xl font-bold text-brand-text mb-4">最も大切なこと：体験レッスンに行くこと</h2>
              <p className="text-brand-muted leading-relaxed mb-4">
                ネットの情報だけでは分からないことが多いです。雰囲気・トレーナーとの相性・設備の清潔感など、実際に体験して初めて分かることがあります。最低でも2〜3ジムの体験に行って比較することをおすすめします。
              </p>
              <p className="text-brand-muted leading-relaxed">
                体験レッスンは無料〜5,000円程度で受けられるジムがほとんど。無理な勧誘をしないジムを選びましょう。
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-rose-500 to-purple-500 text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-4">気になるジムをチェック</h2>
            <p className="text-white/80 mb-8">まずはランキングから気になるジムを見つけましょう。</p>
            <Link href="/ranking/" className="inline-block bg-white text-rose-500 px-10 py-4 text-sm font-bold rounded-full hover:bg-rose-50 transition-all">おすすめランキングを見る</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
