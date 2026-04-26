import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '【2026年最新】女性専用パーソナルジムおすすめランキングTOP10',
  description: '女性専用パーソナルジムのおすすめランキングTOP10を発表。ビーコンセプト・リボーンマイセルフ・UNDEUX SUPERBODYなど人気ジムの料金・口コミ・特徴を徹底比較。',
}

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
    features: ['女性専用', '下半身特化', '医師×トレーナー共同開発', '託児所費用補助', '完全���室'],
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
    points: ['男性トレーナーに��抗がある方に', '実績と信頼のある大手を選びたい方に', '全国30店舗以上'],
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
    price: '16回 281,600円〜（税込��',
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
      <Navigation />
      <main className="pt-16">
        <section className="bg-gradient-to-br from-rose-100 via-rose-50 to-purple-50 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-rose-500 text-xs mb-2">更新日 2026年04月13日</p>
            <h1 className="text-2xl md:text-4xl font-bold text-brand-text mb-4">
              【2026年最新】女性専用パーソナルジム<br className="hidden md:block" />
              おすすめランキングTOP10
            </h1>
            <p className="text-brand-muted text-sm leading-relaxed">
              女性専用パーソナルジムを料金・サービス・口コミから総合的に評価し、おすすめ順にランキング。あなたにぴったりのジムが見つかります。
            </p>
          </div>
        </section>

        <section className="py-3 bg-white border-b border-rose-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light">
              <Link href="/" className="hover:text-rose-500 transition">ホーム</Link>
              {' > '}
              <span className="text-brand-muted">ランキング</span>
            </nav>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="space-y-8">
              {rankings.map((gym) => (
                <div key={gym.rank} className="bg-white border border-rose-200 rounded-xl overflow-hidden hover:shadow-lg transition">
                  <div className={`px-6 py-3 ${gym.rank <= 3 ? 'bg-gradient-to-r from-rose-500 to-purple-500 text-white' : 'bg-rose-50 text-brand-text'}`}>
                    <span className="font-bold text-lg">第{gym.rank}位</span>
                    <span className="ml-3 font-bold text-lg">{gym.name}</span>
                  </div>
                  <div className="p-6">
                    <p className="text-rose-500 font-medium text-sm mb-3">{gym.tagline}</p>
                    <p className="text-brand-muted text-sm leading-relaxed mb-4">{gym.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {gym.features.map((f, i) => (
                        <span key={i} className="bg-rose-50 text-rose-600 px-3 py-1 rounded-full text-xs font-medium border border-rose-200">{f}</span>
                      ))}
                    </div>
                    <div className="bg-rose-50 rounded-lg p-4 mb-4">
                      <p className="text-sm font-bold text-brand-text mb-1">料金目安</p>
                      <p className="text-rose-600 font-bold text-lg">{gym.price}</p>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-brand-text mb-2">こんな人におすすめ</p>
                      <ul className="space-y-1">
                        {gym.points.map((p, i) => (
                          <li key={i} className="text-brand-muted text-sm flex items-start">
                            <span className="text-rose-400 mr-2">✓</span>
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

        <section className="py-16 bg-gradient-to-r from-rose-500 to-purple-500 text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">気になるジムの体験に行こう</h2>
            <p className="text-white/80 mb-8">まずは無料カウンセリング・体験レッスンから。<br />複数のジムを比較して、あなたに合うジムを見つけてください。</p>
            <Link href="/guide/" className="inline-block bg-white text-rose-500 px-10 py-4 text-sm font-bold rounded-full hover:bg-rose-50 transition-all">
              選び方ガイドを読む
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
