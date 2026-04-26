import Link from 'next/link'

const allAreas = [
  { name: '渋谷', slug: 'shibuya' },
  { name: '新宿', slug: 'shinjuku' },
  { name: '池袋', slug: 'ikebukuro' },
  { name: '銀座', slug: 'ginza' },
  { name: '六本木', slug: 'roppongi' },
  { name: '横浜', slug: 'yokohama' },
  { name: '大阪', slug: 'osaka' },
  { name: '名古屋', slug: 'nagoya' },
  { name: '福岡', slug: 'fukuoka' },
  { name: '札幌', slug: 'sapporo' },
]

interface RelatedAreasProps {
  currentSlug: string
}

export function RelatedAreas({ currentSlug }: RelatedAreasProps) {
  const relatedAreas = allAreas.filter((area) => area.slug !== currentSlug)

  return (
    <section className="py-16 bg-rose-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-4 text-center">
          他のエリアも見る
        </h2>
        <p className="text-center text-brand-muted text-sm mb-8">
          全国の女性専用パ���ソナルジム情報をチェック
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {relatedAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/areas/${area.slug}/`}
              className="block bg-white border border-rose-200 rounded-lg p-4 text-center hover:shadow-lg hover:border-rose-400 transition"
            >
              <span className="text-sm font-medium text-brand-text">{area.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
