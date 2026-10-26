#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""全エリアページの掲載ジムをブランド(公式ドメイン)単位で集計 → data/brandStores.json
掲載実データのみを使用し、推定・補完はしない(捏底回避)。"""
import glob, json, re, pathlib
from collections import defaultdict

ROOT = pathlib.Path(__file__).resolve().parent.parent
# ブランドslug → 公式ドメイン(複数可: 統合前の旧ドメインを含む)
BRANDS = {
    "undeux": ["diet-undeux.jp"],
    "b-concept": ["b-concept.tokyo"],
    "outline": ["outline-gym.com"],
    "katagirijuku": ["katagirijuku.jp"],
    "exercise-coach": ["exercisecoach.co.jp"],
    "reborn-myself": ["reborn-myself.com", "shapes-international.co.jp"],
}
DOM2SLUG = {d: s for s, ds in BRANDS.items() for d in ds}

def domain(url: str) -> str:
    return re.sub(r"https?://(?:www\.)?([^/]+).*", r"\1", url)

def gym_objects(src: str) -> list:
    """`const gyms = [ ... ]` の直下のオブジェクトを波括弧の深さで切り出す。
    旧実装の正規表現（`\\n  \\},` 終端）は配列末尾のジム（`}\\n]`）を読み飛ばしていた（2026-10-26 修正）。"""
    i = src.find("const gyms = [")
    if i < 0:
        return []
    k = src.index("[", i) + 1
    objs, depth, start, quote = [], 0, None, None
    while k < len(src):
        c = src[k]
        if quote:
            if c == "\\":
                k += 2
                continue
            if c == quote:
                quote = None
        elif c in "'\"`":
            quote = c
        elif c == "{":
            if depth == 0:
                start = k
            depth += 1
        elif c == "}":
            depth -= 1
            if depth == 0:
                objs.append(src[start:k + 1])
        elif c == "]" and depth == 0:
            break
        k += 1
    return objs

out = defaultdict(list)
for f in sorted(glob.glob(str(ROOT / "app/areas/*/page.tsx"))):
    area_slug = pathlib.Path(f).parent.name
    src = pathlib.Path(f).read_text()
    m = re.search(r"title:\s*'(?:【[^】]*】)?([^のは｜]+?)の", src)
    area_name = m.group(1) if m else area_slug
    for b in gym_objects(src):
        nm = re.match(r"\{\s*name:\s*'([^']+)'", b)
        if not nm:
            continue
        name = nm.group(1)
        um = re.search(r"officialUrl:\s*'([^']+)'", b)
        if not um:
            continue
        slug = DOM2SLUG.get(domain(um.group(1)))
        if not slug:
            continue
        def field(k):
            mm = re.search(rf"{k}:\s*'([^']*)'", b)
            return mm.group(1) if mm else ""
        feats = re.search(r"features:\s*\[([^\]]*)\]", b)
        out[slug].append({
            "name": name,
            "areaSlug": area_slug,
            "areaName": area_name,
            "officialUrl": um.group(1),
            "price": field("price"),
            "trial": field("trial"),
            "access": field("access"),
            "address": field("address"),
            "features": [x.strip().strip("'") for x in (feats.group(1).split(",") if feats else []) if x.strip()],
        })

result = {k: sorted(v, key=lambda x: x["areaSlug"]) for k, v in out.items()}
(ROOT / "data" / "brandStores.json").write_text(json.dumps(result, ensure_ascii=False, indent=1))
for k, v in sorted(result.items(), key=lambda kv: -len(kv[1])):
    price_n = sum(1 for s in v if s["price"])
    print(f"{k:16s} {len(v):3d}店 (料金記載{price_n})")
