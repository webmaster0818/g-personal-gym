'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * .fade-up を付けた要素を、スクロールで画面に入った順にふわっと表示する。
 * 初期非表示は globals.css の `html.js .fade-up` で制御。
 * usePathname を依存に入れ、クリック遷移（App Router）でも毎回再実行＝白化け防止。
 */
export default function ScrollReveal() {
  const pathname = usePathname()
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.fade-up')) as HTMLElement[]
    if (els.length === 0) return

    const revealInView = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight
      els.forEach((el) => {
        if (el.classList.contains('visible')) return
        const r = el.getBoundingClientRect()
        if (r.top < vh * 0.92 && r.bottom > 0) el.classList.add('visible')
      })
    }

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

    // 遷移直後にビュー内要素を確実に表示
    const raf = requestAnimationFrame(revealInView)

    return () => {
      obs.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [pathname])

  return null
}
