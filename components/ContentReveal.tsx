'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * 配下ページ（main[data-reveal]）のセクション内ブロック＋カードを、
 * スクロールで画面に入った順にフェードイン。usePathnameでクリック遷移にも対応（白化け防止）。
 */
export default function ContentReveal() {
  const pathname = usePathname()
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll(
        'main[data-reveal] section > div > *, main[data-reveal] .space-y-8 > *',
      ),
    ) as HTMLElement[]
    if (els.length === 0) return

    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('visible'))
      return
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0, rootMargin: '0px 0px -8% 0px' },
    )
    els.forEach((el) => obs.observe(el))

    const raf = requestAnimationFrame(() => {
      const vh = window.innerHeight || document.documentElement.clientHeight
      els.forEach((el) => {
        if (el.classList.contains('visible')) return
        const r = el.getBoundingClientRect()
        if (r.top < vh * 0.95 && r.bottom > 0) el.classList.add('visible')
      })
    })

    return () => {
      obs.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [pathname])

  return null
}
