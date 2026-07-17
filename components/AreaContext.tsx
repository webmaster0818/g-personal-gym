import { AREA_CONTEXT } from './areaContextData'
import { BreadcrumbSchema } from './BreadcrumbSchema'

export function AreaContext({ slug }: { slug: string }) {
  const a = AREA_CONTEXT[slug]
  if (!a) return null
  return (
    <section className="py-12 bg-white">
      <BreadcrumbSchema
        items={[
          { name: 'ホーム', path: '/' },
          { name: 'エリアから探す', path: '/areas/' },
          { name: `${a.name}のパーソナルジム`, path: `/areas/${slug}/` },
        ]}
      />
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-brand-text mb-6">{a.name}エリアの特徴とジム選びのポイント</h2>
        {a.characteristics.map((p, i) => (
          <p key={i} className="text-brand-muted leading-relaxed mb-4">{p}</p>
        ))}
        <div className="bg-ivory border-l-4 border-accent p-6 mt-6">
          <h3 className="font-bold text-brand-text mb-3">{a.name}でジムを選ぶときのチェックポイント</h3>
          <ul className="space-y-2 text-brand-muted">
            {a.tips.map((t, i) => (
              <li key={i} className="flex items-start"><span className="text-accent mr-2">✓</span><span>{t}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
