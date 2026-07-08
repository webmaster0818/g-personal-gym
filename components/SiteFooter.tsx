import Link from 'next/link'

export function SiteFooter() {
  const areas = [
    { name: '渋谷', slug: 'shibuya' },
    { name: '新宿', slug: 'shinjuku' },
    { name: '池袋', slug: 'ikebukuro' },
    { name: '銀座', slug: 'ginza' },
    { name: '六本木', slug: 'roppongi' },
    { name: '恵比寿', slug: 'ebisu' },
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
    { name: '大阪', slug: 'osaka' },
    { name: '名古屋', slug: 'nagoya' },
    { name: '福岡', slug: 'fukuoka' },
    { name: '札幌', slug: 'sapporo' },
  ]

  return (
    <footer className="bg-ink text-white/70">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <span className="font-display text-xl font-bold text-white">G-PersonalGym</span>
            <p className="text-white/55 text-xs mt-4 leading-relaxed">
              女性専用パーソナルジムの比較・ランキングメディア。あなたにぴったりのジムが見つかります。
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest font-medium text-white/90 mb-5">コンテンツ</h4>
            <ul className="space-y-3 text-xs">
              <li><Link href="/ranking/" className="text-white/55 hover:text-white transition">ランキング</Link></li>
              <li><Link href="/cost/" className="text-white/55 hover:text-white transition">料金相場ガイド</Link></li>
              <li><Link href="/guide/" className="text-white/55 hover:text-white transition">選び方ガイド</Link></li>
              <li><Link href="/faq/" className="text-white/55 hover:text-white transition">よくある質問</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest font-medium text-white/90 mb-5">エリア</h4>
            <ul className="space-y-3 text-xs">
              {areas.map((area) => (
                <li key={area.slug}>
                  <Link href={`/areas/${area.slug}/`} className="text-white/55 hover:text-white transition">{area.name}</Link>
                </li>
              ))}
              <li className="pt-1">
                <Link href="/areas/" className="text-accent-soft hover:text-white transition font-medium">全エリアを見る →</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest font-medium text-white/90 mb-5">インフォメーション</h4>
            <ul className="space-y-3 text-xs">
              <li><Link href="/about/" className="text-white/55 hover:text-white transition">運営者情報</Link></li>
              <li><Link href="/privacy-policy/" className="text-white/55 hover:text-white transition">プライバシーポリシー</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/15 mt-12 pt-8 text-center">
          <p className="text-white/45 text-xs">&copy; 2026 G-PersonalGym. All rights reserved.</p>
          <p className="text-white/35 text-[10px] mt-2">
            ※掲載情報は2026年4月時点のものです。最新情報は各公式サイトでご確認ください。
          </p>
        </div>
      </div>
    </footer>
  )
}
