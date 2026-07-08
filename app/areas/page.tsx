import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { AREA_CONTEXT } from '@/components/areaContextData'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'エリアから探す｜女性専用パーソナルジムを地域別に比較【全国102エリア】',
  description: '全国102エリアの女性専用・女性向けパーソナルジムを地域別に比較。お住まい・お勤めの街から、料金・口コミ・特徴をまとめたエリア別ページを探せます。',
  keywords: '女性専用パーソナルジム,エリア,地域,比較,全国,おすすめ',
  alternates: { canonical: '/areas/' },
}

// 地域グルーピング（掲載エリアを見つけやすくする内部リンクハブ）。
// 未分類のslugは末尾「その他のエリア」に自動集約されるため、取りこぼしは発生しない。
const REGIONS: { label: string; slugs: string[] }[] = [
  { label: '東京', slugs: ['shinjuku', 'shibuya', 'ikebukuro', 'ginza', 'roppongi', 'ebisu', 'omotesando', 'daikanyama', 'nakameguro', 'meguro', 'jiyugaoka', 'shinagawa', 'oimachi', 'gotanda', 'kamata', 'ueno', 'akihabara', 'kinshicho', 'kitasenju', 'akabane', 'iidabashi', 'takadanobaba', 'nakano', 'ogikubo', 'kichijoji', 'nerima', 'toyosu', 'sangenjaya', 'shimokitazawa', 'futakotamagawa', 'machida', 'tachikawa', 'hachioji', 'chofu'] },
  { label: '神奈川', slugs: ['yokohama', 'kawasaki', 'musashikosugi', 'mizonokuchi', 'fujisawa'] },
  { label: '埼玉・千葉・北関東', slugs: ['omiya', 'urawa', 'kawagoe', 'kawaguchi', 'tokorozawa', 'chiba', 'funabashi', 'ichikawa', 'kashiwa', 'matsudo', 'mito', 'utsunomiya', 'takasaki'] },
  { label: '関西', slugs: ['osaka', 'umeda', 'namba', 'shinsaibashi', 'tennoji', 'kyobashi', 'esaka', 'sakai', 'toyonaka', 'takatsuki', 'hirakata', 'kyoto', 'sannomiya', 'himeji', 'nishinomiya', 'amagasaki', 'nara', 'wakayama'] },
  { label: '中部・北陸', slugs: ['nagoya', 'meieki', 'sakae', 'kanayama', 'gifu', 'hamamatsu', 'shizuoka', 'yokkaichi', 'toyama', 'kanazawa', 'fukui', 'niigata', 'nagano', 'matsumoto'] },
  { label: '中国・四国', slugs: ['hiroshima', 'okayama', 'takamatsu', 'matsuyama'] },
  { label: '九州・沖縄', slugs: ['fukuoka', 'kokura', 'kurume', 'kumamoto', 'nagasaki', 'saga', 'oita', 'miyazaki', 'kagoshima', 'naha'] },
  { label: '北海道・東北', slugs: ['sapporo', 'asahikawa', 'sendai', 'koriyama'] },
]

export default function AreasIndexPage() {
  const allSlugs = Object.keys(AREA_CONTEXT)
  const grouped = new Set(REGIONS.flatMap((r) => r.slugs))
  const others = allSlugs.filter((s) => !grouped.has(s))
  const regions = others.length ? [...REGIONS, { label: 'その他のエリア', slugs: others }] : REGIONS
  const total = allSlugs.length

  const areaLink = (slug: string) => {
    const name = AREA_CONTEXT[slug]?.name ?? slug
    return (
      <li key={slug}>
        <Link
          href={`/areas/${slug}/`}
          className="block rounded-lg border border-line bg-white px-4 py-2.5 text-sm text-ink-soft transition hover:border-accent-soft hover:bg-accent-tint hover:text-accent"
        >
          {name}
        </Link>
      </li>
    )
  }

  return (
    <>
      <Navigation />
      <main data-reveal className="pt-16">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <p className="eyebrow mb-3">Areas</p>
            <h1 className="text-2xl md:text-4xl font-bold text-ink mb-4 leading-snug">
              エリアから女性専用パーソナルジムを探す
            </h1>
            <p className="text-ink-soft text-sm md:text-base leading-relaxed">
              全国{total}エリアの女性専用・女性向けパーソナルジムを、地域別にまとめました。お住まいやお勤め先の街を選ぶと、そのエリアのジムの料金・特徴・選び方を比較できます。
            </p>
          </div>
        </section>

        <section className="py-3 bg-white border-b border-line">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-ink-faint">
              <Link href="/" className="hover:text-accent transition">ホーム</Link>
              {' > '}
              <span className="text-ink-soft">エリアから探す</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-12">
            {regions.map((r) => (
              <div key={r.label}>
                <h2 className="text-lg md:text-xl font-bold text-ink mb-4 pb-2 border-b-2 border-accent-soft">
                  {r.label}
                  <span className="ml-2 text-xs font-normal text-ink-faint">{r.slugs.length}エリア</span>
                </h2>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                  {r.slugs.map(areaLink)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 bg-ivory">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-ink-soft text-sm leading-relaxed mb-6">
              お探しのエリアが見つからない場合も、まずは全国の人気ジムのランキングや料金相場から比較できます。
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/ranking/" className="btn-primary">おすすめランキングを見る</Link>
              <Link href="/cost/" className="btn-outline">料金相場を見る</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
