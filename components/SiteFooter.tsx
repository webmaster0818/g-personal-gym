import Link from 'next/link'

export function SiteFooter() {
  const areas = [
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

  return (
    <footer className="bg-purple-900 text-purple-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <span className="font-display text-xl font-bold text-white">G-PersonalGym</span>
            <p className="text-purple-400 text-xs mt-4 leading-relaxed">
              女性専用パーソナルジムの比較・ランキングメディア。あなたにぴったりのジムが見つかります。
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest font-medium text-purple-200 mb-5">コンテンツ</h4>
            <ul className="space-y-3 text-xs">
              <li><Link href="/ranking/" className="text-purple-400 hover:text-white transition">ランキング</Link></li>
              <li><Link href="/cost/" className="text-purple-400 hover:text-white transition">料金相場ガイド</Link></li>
              <li><Link href="/guide/" className="text-purple-400 hover:text-white transition">選び方ガイド</Link></li>
              <li><Link href="/faq/" className="text-purple-400 hover:text-white transition">よくある質問</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest font-medium text-purple-200 mb-5">エリア</h4>
            <ul className="space-y-3 text-xs">
              {areas.map((area) => (
                <li key={area.slug}>
                  <Link href={`/areas/${area.slug}/`} className="text-purple-400 hover:text-white transition">{area.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest font-medium text-purple-200 mb-5">インフォメーション</h4>
            <ul className="space-y-3 text-xs">
              <li><Link href="/about/" className="text-purple-400 hover:text-white transition">運営者情報</Link></li>
              <li><Link href="/privacy-policy/" className="text-purple-400 hover:text-white transition">プライバシーポリシー</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-purple-800 mt-12 pt-8 text-center">
          <p className="text-purple-500 text-xs">&copy; 2026 G-PersonalGym. All rights reserved.</p>
          <p className="text-purple-600 text-[10px] mt-2">
            ※掲載情報は2026年4月時点のものです。最新情報は各公式サイトでご確認ください。
          </p>
        </div>
      </div>
    </footer>
  )
}
