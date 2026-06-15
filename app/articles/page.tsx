import type { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: '女性専用パーソナルジムの記事一覧｜選び方・産後・ブライダル・年代別ガイド',
  description:
    '女性専用パーソナルジム選びに役立つ記事一覧。産後ダイエット・ブライダル・40代50代の選び方、女性専用と男女共用の違い、全国102エリア546ジムの独自調査データまで。目的別に最適な1社を見つけましょう。',
  alternates: { canonical: '/articles/' },
}

const articles = [
  { href: '/articles/josei-gym-data/', tag: '独自調査', title: '女性向けパーソナルジム実態調査2026', desc: '全国102エリア・546ジムを独自集計。女性専用46%・体験無料60%など、選ぶ前に知りたい実態を数字で公開。' },
  { href: '/articles/joseisenyo-vs-kyoyo/', tag: '比較', title: '女性専用と男女共用、どっちを選ぶ？', desc: 'プライバシー・料金・店舗数・相談しやすさの4軸で比較。あなたに合うのはどちらかを判断できます。' },
  { href: '/articles/sango-diet/', tag: '産後', title: '産後ダイエットの選び方（いつから・子連れ・骨盤ケア）', desc: '開始時期の目安、子連れOKジムの探し方、骨盤底筋ケアの重要性。産後ママのジム選びを解説。' },
  { href: '/articles/bridal-diet/', tag: 'ブライダル', title: 'ブライダルダイエットの期間別プラン', desc: '結婚式まで3ヶ月・2ヶ月・1ヶ月の逆算プラン。二の腕・背中・デコルテを狙うドレス映え対策。' },
  { href: '/articles/40dai-50dai/', tag: '年代別', title: '40代・50代女性のパーソナルジムの選び方', desc: '代謝低下・更年期・関節への配慮。無理なく続く頻度と、年代特化ジムという選択肢を解説。' },
  { href: '/articles/kyakuyase/', tag: '部位別', title: '脚やせ・下半身太りに強いジムの選び方', desc: 'なぜ脚は痩せにくいのか、脚やせ特化メソッドの見分け方、自己流との違い。下半身の悩みに強いジムを解説。' },
  { href: '/articles/kouka-itsukara/', tag: '効果', title: '効果はいつから？何ヶ月で痩せる目安', desc: '「20回で見た目が変わる」の目安、週1・2・3回別の到達時期、効果が出ない原因と続け方を解説。' },
  { href: '/articles/taiken-nagare/', tag: '体験', title: '無料体験・カウンセリングの流れと持ち物', desc: '当日の流れ・持ち物・所要時間と、その場で契約しない断り方・勧誘対策。体験無料60%のデータも。' },
  { href: '/articles/iryo-renkei/', tag: '専門家監修', title: '理学療法士・医師監修ジムの選び方', desc: '腰痛・膝痛・産後など体に不安がある人向け。専門家監修14%の見分け方と注意点を事実ベースで。' },
  { href: '/articles/diet/', tag: '目的別', title: 'ダイエット目的のパーソナルジムの選び方', desc: '食事指導の有無・リバウンド対策・続けやすさ。減量目的で選ぶときのポイントを実態データとあわせて解説。' },
  { href: '/articles/bodymake/', tag: '目的別', title: 'ボディメイク・くびれ作りに強いジムの選び方', desc: '減量との違い、くびれ・メリハリの筋トレ設計、期間の目安。造形目的のジム選びを解説。' },
  { href: '/articles/shisei/', tag: 'お悩み', title: '姿勢改善・反り腰・猫背に強いジムの選び方', desc: '姿勢が崩れる理由、フォーム指導・専門家監修の見分け方、自宅ケア併用のコツを事実ベースで。' },
  { href: '/articles/ryokin-osaeru/', tag: '料金', title: '女性専用パーソナルジムの料金を抑えるコツ', desc: '料金の内訳、無料体験・キャンペーン活用、頻度の最適化。安さと続けやすさのバランスを解説。' },
  { href: '/articles/shippai/', tag: '選び方', title: '失敗しないための注意点（よくある失敗例）', desc: '料金・勧誘・相性・解約条件など、後悔しがちな7つの失敗例と回避策をまとめました。' },
  { href: '/articles/20dai/', tag: '年代別', title: '20代女性のパーソナルジムの選び方', desc: '20代の目的傾向・予算、料金を抑える工夫、続けやすさ。はじめての一歩を後押しする選び方。' },
]

export default function Page() {
  return (
    <>
      <Navigation />
      <main data-reveal className="pt-16">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="eyebrow mb-3">Articles</p>
            <h1 className="text-2xl md:text-4xl font-bold text-ink mb-4 leading-snug">女性専用パーソナルジムの記事一覧</h1>
            <p className="text-ink-soft text-sm md:text-base leading-relaxed">目的・ライフステージ別に、失敗しないジム選びをサポート。独自調査データにもとづく事実ベースの記事をお届けします。</p>
          </div>
        </section>

        <section className="py-3 bg-white border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-ink-faint"><Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}<span className="text-ink-soft">記事一覧</span></nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 gap-5">
              {articles.map((a) => (
                <Link key={a.href} href={a.href} className="block border border-line rounded-xl p-6 hover:border-accent hover:shadow-lg transition bg-white">
                  <span className="inline-block bg-accent-tint text-accent-dark text-xs font-medium px-2.5 py-0.5 rounded-full border border-accent-soft mb-3">{a.tag}</span>
                  <h2 className="text-lg font-bold text-ink mb-2 leading-snug">{a.title}</h2>
                  <p className="text-ink-soft text-sm leading-relaxed">{a.desc}</p>
                  <span className="text-accent text-sm font-medium mt-3 inline-block">記事を読む →</span>
                </Link>
              ))}
            </div>

            <div className="mt-12 bg-ivory border border-line rounded-xl p-6 text-center">
              <p className="text-ink font-bold mb-2">お住まいのエリアからジムを探す</p>
              <p className="text-ink-soft text-sm mb-5">全国102エリアの女性向けパーソナルジムを、料金・体験・特徴で比較できます。</p>
              <Link href="/" className="inline-block btn-primary text-sm !py-2.5 !px-7 !rounded-full">エリアから探す</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
