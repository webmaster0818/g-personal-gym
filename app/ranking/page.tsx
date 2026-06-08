import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { FAQSchema } from '@/components/FAQSchema'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '女性専用パーソナルジムおすすめランキングTOP10【2026年最新】料金・特徴を徹底比較',
  description: '女性専用パーソナルジムのおすすめランキングTOP10。OUTLINE・ビーコンセプト・UNDEUX SUPERBODY・リボーンマイセルフなど人気ジムの料金・特徴・選び方を、目的別に徹底比較。あなたに合う一社が見つかります。',
}

const faqs = [
  { question: '女性専用パーソナルジムのおすすめはどこですか？', answer: '総合的なバランスではOUTLINE（完全個室・生涯サポート）、下半身痩せならビーコンセプト、食事も任せたいならUNDEUX SUPERBODY（宅配食無料）が人気です。重視する条件（料金・目的・通いやすさ）によって最適なジムは変わるため、気になる2〜3社の無料カウンセリングで比較するのがおすすめです。' },
  { question: 'ランキングは何を基準に決めていますか？', answer: '「女性向けの環境（女性専用・個室・女性トレーナー）」「料金の分かりやすさ・総額」「サポート（食事指導・アフターフォロー）」「通いやすさ（店舗数・立地）」「実績・口コミ」の5軸を総合して評価しています。料金や店舗情報は各社の公開情報をもとにした目安です。' },
  { question: '安い女性専用パーソナルジムはどこですか？', answer: '月額制ならエクササイズコーチ（月4回12,000円〜）やかたぎり塾（月4回30,800円〜）が始めやすい価格帯です。2ヶ月コースではクレビック（149,800円〜）やLastyle（158,400円〜）が比較的リーズナブル。入会金無料キャンペーンを併用するとさらに抑えられます。' },
  { question: '産後ダイエットに対応したジムはありますか？', answer: 'ビーコンセプト（託児所費用を最大1,000円/回補助）、OUTLINE（全店ベビーサークル完備）、リボーンマイセルフ（産後ダイエットコース）などが産後ママ向けの環境を整えています。産後は体の回復を最優先に、医師の許可を得てから始めましょう。' },
  { question: 'まず何社くらい比較すべきですか？', answer: '2〜3社の無料カウンセリング・体験を受けて比較するのがおすすめです。料金・トレーナーとの相性・雰囲気・通いやすさは実際に行って初めて分かります。複数社を見ると相場感も掴め、納得して選べます。' },
]

const rankings = [
  {
    rank: 1,
    name: 'OUTLINE（アウトライン）',
    tagline: '女性専用・完全個室・生涯サポート',
    price: '16回 184,800円〜（税込）',
    features: ['女性専用', '完全個室', '生涯アフターサポート無料', 'ベビーサークル全店完備', '女性特化マシン'],
    description: '2年連続「女性に選ばれているパーソナルジム第1位」を獲得。関東を中心に30店舗以上展開する女性専用パーソナルジム。業界初の「生涯無料アフターサポート」で卒業後も安心。完全個室・女性専用マシン・ベビーサークル完備と、女性のための環境が整っています。',
    points: ['コストパフォーマンスが高い', 'リバウンドが心配な方に最適', '子連れOK'],
  },
  {
    rank: 2,
    name: 'ビーコンセプト（B CONCEPT）',
    tagline: '下半身・太もも痩せ特化の女性専用ジム',
    price: '2ヶ月18回 179,685円〜（税込）',
    features: ['女性専用', '下半身特化', '医師×トレーナー共同開発', '託児所費用補助', '完全個室'],
    description: '医師とトレーナーが共同開発した独自の脚やせメソッドが人気。太もも痩せ・ヒップアップに特化し、2ヶ月でヒップアップ・美脚・くびれ・美姿勢を目指します。託児所費用を最大1,000円/回補助する産後ママ応援制度も。月々5,545円〜の分割払いに対応。',
    points: ['下半身痩せに悩む方に最適', '産後ダイエットにも対応', '分割払いで始めやすい'],
  },
  {
    rank: 3,
    name: 'UNDEUX SUPERBODY',
    tagline: '食事管理・宅配食付きの女性専用ジム',
    price: '2ヶ月16回 220,000円〜（税込）',
    features: ['女性専用', '食事管理付き', '糖質オフ宅配食無料', 'パウダールーム完備', '全国40店舗以上'],
    description: '全国40店舗以上展開の女性専用パーソナルジム。トレーニングに加え、高品質な糖質オフの宅配食を無料提供する総合的なダイエットサポートが特徴。シャワー・パウダールーム・基礎化粧品完備で手ぶら通勤もOK。月額制のLIFEプランは月17,600円〜。',
    points: ['食事管理もお任せしたい方に', '手ぶらで通いたい方に', '月額制プランもあり'],
  },
  {
    rank: 4,
    name: 'リボーンマイセルフ（Reborn Myself）',
    tagline: '女性トレーナーのみ在籍の老舗ジム',
    price: '入会金38,000円＋コース料金',
    features: ['女性専用', '女性トレーナーのみ', '10年以上の実績', '2万人以上の指導実績', '産後ダイエットコース'],
    description: '2010年創業、日本初の女性専用ダイエットジム。トレーナーも全員女性で、男性の目を気にせずトレーニングに集中できます。10年以上の指導実績と2万人以上のクライアントデータをもとにしたオリジナルメソッドで、女性本来の柔らかさを残したボディメイクを実現。',
    points: ['男性トレーナーに抵抗がある方に', '実績と信頼のある大手を選びたい方に', '全国30店舗以上'],
  },
  {
    rank: 5,
    name: 'Bodyke（ボディーク）',
    tagline: '糖質制限なしのボディメイク特化ジム',
    price: '2ヶ月16回 215,600円〜（税込）',
    features: ['ボディメイク特化', '糖質制限なし', '完全個室', '食事指導あり', '東京7店舗'],
    description: '「好きなものを食べながら痩せる」をコンセプトにした個性的なパーソナルジム。糖質制限なしで食事指導を行い、筋トレをメインにしたトレーニングでボディメイクを目指します。苦しい有酸素運動がないのも特徴。東京を中心に7店舗展開。',
    points: ['食事制限が苦手な方に', '筋トレメインでボディメイクしたい方に', '東京中心に展開'],
  },
  {
    rank: 6,
    name: 'かたぎり塾',
    tagline: '女性専門店あり・月額制で通いやすい',
    price: '月4回 30,800円〜（税込）',
    features: ['女性専門店あり', '月額制', 'AI食事指導', '女性トレーナー在籍', 'リーズナブル'],
    description: '全国に店舗を展開するパーソナルジムチェーン。西新宿など女性専門店も展開しており、女性トレーナーのみが在籍。AI食事指導など最新技術も活用。月額制で続けやすい料金設定が人気。',
    points: ['月額制で始めやすい', '女性専門店なら安心', 'AI食事指導が便利'],
  },
  {
    rank: 7,
    name: 'クレビック（CREBIQ）',
    tagline: '身体の内外からボディメイク',
    price: '2ヶ月16回 149,800円〜（税込）',
    features: ['女性専門', '管理栄養士の食事指導', '完全個室', '手ぶらOK', 'ウェアレンタル無料'],
    description: '女性専門のダイエット・パーソナルジム。「身体の内側（食事）と外側（トレーニング）」の両面からボディメイクを行います。管理栄養士による食事指導付きで、科学的根拠に基づいたプログラムを提供。',
    points: ['管理栄養士の指導が受けられる', '科学的なアプローチ', '比較的リーズナブル'],
  },
  {
    rank: 8,
    name: 'Lastyle（ラスタイル）',
    tagline: '筋トレ×ボクシング×有酸素×ピラティス',
    price: '2ヶ月16回 158,400円〜（税込）',
    features: ['完全個室', 'ボクシング', '4つのメソッド', '女性人気高い', '池袋東口本店'],
    description: '筋トレ・ボクシング・有酸素運動・ピラティスを組み合わせた独自の「超効率」トレーニングプログラムを提供。GetFit Award「女性に選ばれているパーソナルジム1位」受賞経験あり。飽きない多彩なメニューが人気。',
    points: ['バリエーション豊富なトレーニング', '飽きっぽい方に最適', '女性から高い支持'],
  },
  {
    rank: 9,
    name: 'BEYOND（ビヨンド）',
    tagline: 'コンテスト入賞者多数の高品質ジム',
    price: '16回 281,600円〜（税込）',
    features: ['ハイクオリティ', 'コンテスト入賞トレーナー', '完全個室', '食事指導あり', '全国展開'],
    description: '倍率50倍以上の厳しい選考を突破したトレーナーのみが在籍。全トレーナーがフィジーク大会やボディコンテストの受賞経験を持つハイクオリティなパーソナルジム。女性利用者も多く、本格的なボディメイクを目指す方に人気。',
    points: ['トレーナーの質にこだわりたい方に', '本格的なボディメイクに', '全国に店舗あり'],
  },
  {
    rank: 10,
    name: 'エクササイズコーチ',
    tagline: 'AI主導の短時間トレーニング',
    price: '月4回 12,000円〜（税込）',
    features: ['AI主導', '1回20分', '低価格', '全国展開', '女性利用者多数'],
    description: 'アメリカ発のAI主導パーソナルトレーニングジム。1回わずか20分で効率的にトレーニングでき、月4回12,000円〜と低価格。忙しい女性に人気で、利用者の8割以上が女性。気軽に始められるパーソナルジムとしておすすめ。',
    points: ['忙しい方に最適', '低価格で始められる', 'AI活用で効率的'],
  },
]

export default function RankingPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main data-reveal className="pt-16">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="eyebrow mb-3">Ranking</p>
            <h1 className="text-2xl md:text-4xl font-bold text-ink mb-4 leading-snug">
              女性専用パーソナルジムおすすめランキングTOP10【2026年最新】
            </h1>
            <p className="text-ink-soft text-sm md:text-base leading-relaxed">
              女性専用パーソナルジムを「環境・料金・サポート・通いやすさ・実績」の5軸で総合評価し、おすすめ順にランキング。目的別に、あなたに合う一社が見つかります。
            </p>
            <p className="text-ink-faint text-xs mt-3">更新日 2026年4月13日</p>
          </div>
        </section>

        <section className="py-3 bg-white border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-ink-faint">
              <Link href="/" className="hover:text-accent transition">ホーム</Link>
              {' > '}
              <span className="text-ink-soft">ランキング</span>
            </nav>
          </div>
        </section>

        {/* 選定基準 + 早見表 */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-accent-tint border border-accent-soft rounded-xl p-6 mb-8">
              <p className="font-bold text-ink mb-2">ランキングの評価基準</p>
              <p className="text-sm text-ink-soft leading-relaxed">女性向けの<strong>環境</strong>（女性専用・個室・女性トレーナー）／<strong>料金</strong>の分かりやすさ・総額／<strong>サポート</strong>（食事指導・アフターフォロー）／<strong>通いやすさ</strong>（店舗数・立地）／<strong>実績・口コミ</strong>の5軸で総合評価しています。料金・店舗情報は各社の公開情報をもとにした目安です。</p>
            </div>
            <p className="font-bold text-ink mb-3">上位3社の早見比較</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-accent text-white">
                    <th className="px-4 py-3 text-left">順位・ジム</th>
                    <th className="px-4 py-3 text-left">特徴</th>
                    <th className="px-4 py-3 text-left">料金目安</th>
                    <th className="px-4 py-3 text-left">こんな人に</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white"><td className="px-4 py-3 border-b border-line font-medium">1位 OUTLINE</td><td className="px-4 py-3 border-b border-line">完全個室・生涯サポート</td><td className="px-4 py-3 border-b border-line">16回 184,800円〜</td><td className="px-4 py-3 border-b border-line">リバウンド防止・子連れ</td></tr>
                  <tr className="bg-ivory/50"><td className="px-4 py-3 border-b border-line font-medium">2位 ビーコンセプト</td><td className="px-4 py-3 border-b border-line">下半身・脚やせ特化</td><td className="px-4 py-3 border-b border-line">2ヶ月 179,685円〜</td><td className="px-4 py-3 border-b border-line">下半身痩せ・産後</td></tr>
                  <tr className="bg-white"><td className="px-4 py-3 font-medium">3位 UNDEUX SUPERBODY</td><td className="px-4 py-3">食事管理・宅配食無料</td><td className="px-4 py-3">2ヶ月 220,000円〜</td><td className="px-4 py-3">食事も任せたい</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-ink-faint text-xs mt-3">※詳細は各社の無料カウンセリングでご確認ください。以下で全10社を詳しく解説します。</p>
          </div>
        </section>

        <section className="py-4 pb-12">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="space-y-8">
              {rankings.map((gym) => (
                <div key={gym.rank} className="bg-white border border-line rounded-xl overflow-hidden hover:shadow-lg transition">
                  <div className={`px-6 py-3 ${gym.rank <= 3 ? 'bg-gradient-to-r from-accent to-accent-dark text-white' : 'bg-ivory text-ink'}`}>
                    <h2 className="font-bold text-lg">
                      <span>第{gym.rank}位</span>
                      <span className="ml-3">{gym.name}</span>
                    </h2>
                  </div>
                  <div className="p-6">
                    <p className="text-accent font-medium text-sm mb-3">{gym.tagline}</p>
                    <p className="text-brand-muted text-sm leading-relaxed mb-4">{gym.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {gym.features.map((f, i) => (
                        <span key={i} className="bg-ivory text-accent-dark px-3 py-1 rounded-full text-xs font-medium border border-line">{f}</span>
                      ))}
                    </div>
                    <div className="bg-ivory rounded-lg p-4 mb-4">
                      <p className="text-sm font-bold text-brand-text mb-1">料金目安</p>
                      <p className="text-accent-dark font-bold text-lg">{gym.price}</p>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-brand-text mb-2">こんな人におすすめ</p>
                      <ul className="space-y-1">
                        {gym.points.map((p, i) => (
                          <li key={i} className="text-brand-muted text-sm flex items-start">
                            <span className="text-accent mr-2">✓</span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 選び方の補足 + FAQ + 関連リンク */}
        <section className="py-12 bg-white border-t border-line">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-xl md:text-2xl font-bold text-ink mb-4">自分に合うジムの選び方</h2>
            <p className="text-ink-soft text-sm leading-relaxed mb-8">ランキングは目安です。最後は「目的（ダイエット／下半身／産後／ボディメイク）」「料金の総額」「通いやすさ」「トレーナーとの相性」で選ぶと失敗しません。詳しくは<Link href="/guide/" className="text-accent hover:underline">選び方ガイド</Link>、料金は<Link href="/cost/" className="text-accent hover:underline">料金相場ガイド</Link>をご覧ください。気になる2〜3社の無料カウンセリングを比較するのがおすすめです。</p>

            <h2 className="text-xl md:text-2xl font-bold text-ink mb-6">よくある質問</h2>
            <div className="space-y-3 mb-10">
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
                <li><Link href="/guide/" className="text-accent hover:text-accent-dark hover:underline">失敗しないパーソナルジムの選び方</Link></li>
                <li><Link href="/cost/" className="text-accent hover:text-accent-dark hover:underline">女性専用パーソナルジムの料金相場</Link></li>
                <li><Link href="/faq/" className="text-accent hover:text-accent-dark hover:underline">よくある質問をもっと見る</Link></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-accent to-accent-dark text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">気になるジムの体験に行こう</h2>
            <p className="text-white/80 mb-8">まずは無料カウンセリング・体験レッスンから。<br />複数のジムを比較して、あなたに合うジムを見つけてください。</p>
            <Link href="/guide/" className="inline-block bg-white text-accent px-10 py-4 text-sm font-bold rounded-full hover:bg-accent-tint transition-all">
              選び方ガイドを読む
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
