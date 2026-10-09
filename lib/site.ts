import { AREA_CONTEXT } from '@/components/areaContextData'
import { BRANDS } from '@/data/brands'

/**
 * サイト全体で使う件数（2026-10-09）。
 * 「全国◯エリア」「主要◯ブランド」を固定文字列で書かず、必ずここから参照する。
 * AREA_CONTEXT のキー数 = app/areas/<slug>/page.tsx の数 = sitemap の /areas/ URL 数
 * （scripts/check-area-count.py が build 前に突合して、ずれていればビルドを止める）。
 * ⚠️ 'use client' のコンポーネントからは import しない（AREA_CONTEXT 全文がブラウザに配られる）。
 */
export const AREA_COUNT = Object.keys(AREA_CONTEXT).length
export const BRAND_COUNT = BRANDS.length
