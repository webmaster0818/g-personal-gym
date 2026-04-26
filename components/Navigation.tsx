'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export function Navigation() {
  useEffect(() => {
    const navbar = document.getElementById('navbar')
    const handleScroll = () => {
      if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 50)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    const m = document.getElementById('mobileMenu')
    const o = document.getElementById('mobileOverlay')
    const b = document.getElementById('menuBtn')
    if (m && o) {
      m.classList.toggle('open')
      o.classList.toggle('open')
      const isOpen = m.classList.contains('open')
      if (b) {
        b.setAttribute('aria-expanded', String(isOpen))
        b.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く')
      }
      document.body.style.overflow = isOpen ? 'hidden' : ''
    }
  }

  return (
    <>
      <nav className="navbar fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md transition-all duration-400 border-b border-rose-100" id="navbar" aria-label="メインナビゲーション">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="group flex items-center gap-2">
              <span className="font-display text-xl font-bold text-rose-500 group-hover:text-purple-500 transition-colors">G-PersonalGym</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/ranking/" className="nav-link text-brand-muted hover:text-rose-500 text-sm font-medium">ランキング</Link>
              <Link href="/cost/" className="nav-link text-brand-muted hover:text-rose-500 text-sm font-medium">料金相場</Link>
              <Link href="/guide/" className="nav-link text-brand-muted hover:text-rose-500 text-sm font-medium">選び方</Link>
              <Link href="/faq/" className="nav-link text-brand-muted hover:text-rose-500 text-sm font-medium">FAQ</Link>
              <Link href="/ranking/" className="btn-primary text-sm !py-2 !px-5 !rounded-full">おすすめを見る</Link>
            </div>
            <button className="md:hidden p-2" onClick={toggleMenu} aria-label="メニューを開く" id="menuBtn" aria-expanded="false">
              <svg className="w-6 h-6 text-brand-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div className="mobile-overlay fixed inset-0 bg-black/40 z-[60] opacity-0 pointer-events-none transition-opacity duration-300" id="mobileOverlay" onClick={toggleMenu}></div>
      <div className="mobile-menu fixed top-0 right-0 w-80 h-full bg-white z-[70] transform translate-x-full transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]" id="mobileMenu">
        <div className="p-8">
          <div className="flex justify-between items-center mb-12">
            <span className="font-display text-lg font-bold text-rose-500">Menu</span>
            <button onClick={toggleMenu} aria-label="メニューを閉じる" className="p-2 hover:bg-rose-50 rounded-full transition">
              <svg className="w-5 h-5 text-brand-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <div className="flex flex-col gap-6">
            <Link href="/" className="text-brand-text text-base font-medium hover:text-rose-500 transition" onClick={toggleMenu}>ホーム</Link>
            <Link href="/ranking/" className="text-brand-text text-base font-medium hover:text-rose-500 transition" onClick={toggleMenu}>ランキング</Link>
            <Link href="/cost/" className="text-brand-text text-base font-medium hover:text-rose-500 transition" onClick={toggleMenu}>料金相場</Link>
            <Link href="/guide/" className="text-brand-text text-base font-medium hover:text-rose-500 transition" onClick={toggleMenu}>選び方ガイド</Link>
            <Link href="/faq/" className="text-brand-text text-base font-medium hover:text-rose-500 transition" onClick={toggleMenu}>FAQ</Link>
            <Link href="/about/" className="text-brand-text text-base font-medium hover:text-rose-500 transition" onClick={toggleMenu}>運営者情報</Link>
            <div className="border-t border-rose-100 pt-6 mt-2">
              <p className="text-brand-light text-xs mb-3">エリアから探す</p>
              <div className="grid grid-cols-2 gap-2">
                {['渋谷', '新宿', '池袋', '銀座', '六本木', '横浜', '大阪', '名古屋', '福岡', '札幌'].map((area, i) => {
                  const slugs = ['shibuya', 'shinjuku', 'ikebukuro', 'ginza', 'roppongi', 'yokohama', 'osaka', 'nagoya', 'fukuoka', 'sapporo']
                  return (
                    <Link key={i} href={`/areas/${slugs[i]}/`} className="text-brand-muted text-sm hover:text-rose-500 transition py-1" onClick={toggleMenu}>{area}</Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
