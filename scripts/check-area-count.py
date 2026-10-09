#!/usr/bin/env python3
"""エリア数の整合チェック（npm run build の prebuild で実行・2026-10-09）。
app/areas/<slug>/page.tsx の数 / AREA_CONTEXT のキー数 / public/sitemap.xml の /areas/ URL 数 が
一致しなければ exit 1 にしてビルドを止める（title/description の「全国◯エリア」は lib/site.ts の
AREA_COUNT = AREA_CONTEXT のキー数 から出るため、ここがずれると表示とページ実体が食い違う）。"""
import os, re, sys
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
pages = sorted(d for d in os.listdir(os.path.join(root, 'app', 'areas'))
               if os.path.isfile(os.path.join(root, 'app', 'areas', d, 'page.tsx')))
ctx = open(os.path.join(root, 'components', 'areaContextData.ts'), encoding='utf-8').read()
keys = sorted(set(re.findall(r'^  ([a-z0-9]+): \{', ctx, re.M)))
sm = open(os.path.join(root, 'public', 'sitemap.xml'), encoding='utf-8').read()
urls = sorted(set(re.findall(r'<loc>https://woman-gym\.com/areas/([a-z0-9-]+)/</loc>', sm)))
print(f'[check-area-count] pages={len(pages)} AREA_CONTEXT={len(keys)} sitemap={len(urls)}')
ok = pages == keys == urls
if not ok:
    for label, a, b in (('pages-ctx', pages, keys), ('pages-sitemap', pages, urls)):
        d = sorted(set(a) ^ set(b))
        if d: print(f'  mismatch {label}: {d}')
    sys.exit(1)
