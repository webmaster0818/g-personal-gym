import Link from 'next/link'

const allAreas = [
  { name: '渋谷', slug: 'shibuya' },
  { name: '新宿', slug: 'shinjuku' },
  { name: '池袋', slug: 'ikebukuro' },
  { name: '銀座', slug: 'ginza' },
  { name: '六本木', slug: 'roppongi' },
  { name: '恵比寿', slug: 'ebisu' },
  { name: '品川', slug: 'shinagawa' },
  { name: '中目黒', slug: 'nakameguro' },
  { name: '代官山', slug: 'daikanyama' },
  { name: '目黒', slug: 'meguro' },
  { name: '五反田', slug: 'gotanda' },
  { name: '上野', slug: 'ueno' },
  { name: '秋葉原', slug: 'akihabara' },
  { name: '北千住', slug: 'kitasenju' },
  { name: '錦糸町', slug: 'kinshicho' },
  { name: '自由が丘', slug: 'jiyugaoka' },
  { name: '表参道', slug: 'omotesando' },
  { name: '吉祥寺', slug: 'kichijoji' },
  { name: '二子玉川', slug: 'futakotamagawa' },
  { name: '立川', slug: 'tachikawa' },
  { name: '町田', slug: 'machida' },
  { name: '横浜', slug: 'yokohama' },
  { name: '川崎', slug: 'kawasaki' },
  { name: '藤沢', slug: 'fujisawa' },
  { name: '大宮', slug: 'omiya' },
  { name: '千葉', slug: 'chiba' },
  { name: '大阪', slug: 'osaka' },
  { name: '名古屋', slug: 'nagoya' },
  { name: '福岡', slug: 'fukuoka' },
  { name: '札幌', slug: 'sapporo' },
  { name: '中野', slug: 'nakano' },
  { name: '荻窪', slug: 'ogikubo' },
  { name: '赤羽', slug: 'akabane' },
  { name: '練馬', slug: 'nerima' },
  { name: '蒲田', slug: 'kamata' },
  { name: '豊洲', slug: 'toyosu' },
  { name: '八王子', slug: 'hachioji' },
  { name: '武蔵小杉', slug: 'musashikosugi' },
  { name: '仙台', slug: 'sendai' },
  { name: '梅田', slug: 'umeda' },
  { name: '心斎橋', slug: 'shinsaibashi' },
  { name: '難波', slug: 'namba' },
  { name: '天王寺', slug: 'tennoji' },
  { name: '栄', slug: 'sakae' },
  { name: '名古屋駅', slug: 'meieki' },
  { name: '京都', slug: 'kyoto' },
  { name: '神戸三宮', slug: 'sannomiya' },
  { name: '広島', slug: 'hiroshima' },
  { name: '三軒茶屋', slug: 'sangenjaya' },
  { name: '下北沢', slug: 'shimokitazawa' },
  { name: '高田馬場', slug: 'takadanobaba' },
  { name: '飯田橋', slug: 'iidabashi' },
  { name: '大井町', slug: 'oimachi' },
  { name: '調布', slug: 'chofu' },
  { name: '溝の口', slug: 'mizonokuchi' },
  { name: '浦和', slug: 'urawa' },
  { name: '川口', slug: 'kawaguchi' },
  { name: '所沢', slug: 'tokorozawa' },
  { name: '船橋', slug: 'funabashi' },
  { name: '柏', slug: 'kashiwa' },
  { name: '京橋（大阪）', slug: 'kyobashi' },
  { name: '岡山', slug: 'okayama' },
  { name: '静岡', slug: 'shizuoka' },
  { name: '浜松', slug: 'hamamatsu' },
  { name: '新潟', slug: 'niigata' },
  { name: '熊本', slug: 'kumamoto' },
]

interface RelatedAreasProps {
  currentSlug: string
}

export function RelatedAreas({ currentSlug }: RelatedAreasProps) {
  const relatedAreas = allAreas.filter((area) => area.slug !== currentSlug)

  return (
    <section className="py-16 bg-ivory">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-4 text-center">
          他のエリアも見る
        </h2>
        <p className="text-center text-brand-muted text-sm mb-8">
          全国の女性専用パーソナルジム情報をチェック
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {relatedAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/areas/${area.slug}/`}
              className="block bg-white border border-line rounded-lg p-4 text-center hover:shadow-lg hover:border-accent transition"
            >
              <span className="text-sm font-medium text-brand-text">{area.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
