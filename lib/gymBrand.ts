// ジム名 → ブランドslug の対応。
// data/brandStores.json のキー（= /brands/{slug}/ のslug）に揃える。
// ⚠️ 判定順に意味がある。部分一致で誤爆しやすいものを先に置く。
const RULES: Array<{ slug: string; test: (n: string) => boolean }> = [
  // 「UNDEUX SUPERBODY LIFE」は同社の別業態だが、ブランドページは1つなので同じslugに寄せる
  { slug: 'undeux', test: (n) => /UNDEUX/i.test(n) },
  { slug: 'outline', test: (n) => /OUTLINE|アウトライン/i.test(n) },
  { slug: 'b-concept', test: (n) => /ビーコンセプト|B-?CONCEPT/i.test(n) },
  { slug: 'reborn-myself', test: (n) => /リボーンマイセルフ|Reborn ?myself/i.test(n) },
  { slug: 'katagirijuku', test: (n) => /かたぎり塾/.test(n) },
  { slug: 'exercise-coach', test: (n) => /エクササイズコーチ|EXERCISE ?COACH/i.test(n) },
]

export function gymBrandSlugOf(gymName: string): string | null {
  for (const r of RULES) {
    if (r.test(gymName)) return r.slug
  }
  return null
}
