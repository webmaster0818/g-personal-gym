#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""OG画像（public/og-image.png・1200x630）と favicon（public/favicon.ico, public/icon.png）を作る。

⚠️ 画像にエリア数・ジム数・年月を入れない（ページを足しても画像だけ古い数字が残るため）。
   数字はページ本文で出す。

  python3 scripts/make-og.py
"""
import os
import unicodedata
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
W, H = 1200, 630
IVORY, SAND, LINE = (251, 249, 246), (242, 236, 229), (234, 228, 220)
INK, SOFT, FAINT = (38, 34, 30), (110, 102, 94), (168, 160, 153)
ACCENT, ACCENT_SOFT = (178, 106, 130), (231, 210, 218)   # サイトの accent（くすみローズ）

FONT_DIR = "/System/Library/Fonts"


def sysfont(name: str) -> str:
    """macOS のフォント名は NFD で入っていることがあるので正規化して探す。"""
    for f in os.listdir(FONT_DIR):
        if unicodedata.normalize("NFC", f) == name:
            return os.path.join(FONT_DIR, f)
    raise FileNotFoundError(name)


MINCHO = sysfont("ヒラギノ明朝 ProN.ttc")
GOTHIC = sysfont("ヒラギノ角ゴシック W3.ttc")
DIDOT = "/System/Library/Fonts/Supplemental/Didot.ttc"


def make_og() -> None:
    S = 2   # 2倍で描いて縮める
    im = Image.new("RGB", (W * S, H * S), IVORY)
    d = ImageDraw.Draw(im)

    # 右側の装飾（重なる円弧）。写真・他社ロゴは使わない
    d.ellipse([820 * S, -140 * S, 1340 * S, 380 * S], fill=SAND)
    d.ellipse([940 * S, 250 * S, 1300 * S, 610 * S], fill=ACCENT_SOFT)
    d.ellipse([1010 * S, 90 * S, 1150 * S, 230 * S], outline=ACCENT, width=2 * S)
    # 左のアクセントライン
    d.rectangle([86 * S, 96 * S, 90 * S, 534 * S], fill=ACCENT)
    d.line([(120 * S, 452 * S), (760 * S, 452 * S)], fill=LINE, width=2 * S)

    def put(xy, s, font, size, fill, index=0):
        d.text((xy[0] * S, xy[1] * S), s, font=ImageFont.truetype(font, size * S, index=index), fill=fill)

    put((120, 96), "G-PersonalGym", DIDOT, 44, ACCENT)
    put((120, 190), "女性専用パーソナルジムを", MINCHO, 62, INK, index=2)
    put((120, 280), "エリアと料金から探す", MINCHO, 62, INK, index=2)
    put((120, 386), "料金・入会金・体験の有無を比較", GOTHIC, 32, SOFT)
    put((120, 482), "woman-gym.com", DIDOT, 30, FAINT)

    out = ROOT / "public" / "og-image.png"
    im.resize((W, H), Image.LANCZOS).save(out, optimize=True)
    print(f"書き出し → {out}")


def make_icon() -> None:
    N = 512
    S = 2
    im = Image.new("RGBA", (N * S, N * S), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    d.ellipse([0, 0, N * S - 1, N * S - 1], fill=ACCENT)
    font = ImageFont.truetype(DIDOT, 360 * S, index=2)   # Didot Bold
    box = d.textbbox((0, 0), "G", font=font)
    x = (N * S - (box[2] - box[0])) / 2 - box[0]
    y = (N * S - (box[3] - box[1])) / 2 - box[1]
    d.text((x, y), "G", font=font, fill=(255, 255, 255))
    im = im.resize((N, N), Image.LANCZOS)
    im.save(ROOT / "public" / "icon.png", optimize=True)
    im.save(ROOT / "public" / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
    print("書き出し → public/icon.png, public/favicon.ico")


if __name__ == "__main__":
    make_og()
    make_icon()
