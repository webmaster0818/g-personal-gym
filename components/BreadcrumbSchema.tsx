// BreadcrumbList 構造化データ（JSON-LD）。可視パンくずの有無に関わらず階層をGoogleに伝える。
const BASE = 'https://woman-gym.com'

type Crumb = { name: string; path: string }

export function BreadcrumbSchema({ items }: { items: Crumb[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      // 末尾（現在ページ）等でpathが空ならitem(URL)を省略（schema.org許容）
      ...(c.path ? { item: `${BASE}${c.path}` } : {}),
    })),
  }
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  )
}
