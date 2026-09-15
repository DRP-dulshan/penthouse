"""
Prepares and compresses the source assets into /public/images.

The site is built with `output: 'export'` (images.unoptimized = true), so Next.js
does not optimise images at request time -- they are compressed here, once, at
their final display sizes.

Requires: pillow, and pymupdf for the location map.
Run:  python scripts/prepare-images.py
"""
import os
from PIL import Image

SRC_PHOTOS = r"C:\Users\LOQ\Downloads\Telegram Desktop\New folder"
SRC_LOGO = r"C:\Users\LOQ\Downloads\Telegram Desktop\LOGO"
SRC_PDF = r"C:\Users\LOQ\Downloads\Telegram Desktop\DIFC Duplex Penthouse Katarina.pdf"

OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "public", "images")

# source -> (output slug, max width, jpeg quality)
# A bare filename resolves against SRC_PHOTOS; an absolute path is used as-is,
# so individual shots can be swapped out without moving files around.
PHOTOS = {
    "Gemini_Generated_Image_nrzs1bnrzs1bnrzs.jpeg": ("hero-living", 1920, 74),
    "Gemini_Generated_Image_l5evjil5evjil5ev.jpeg": ("living-area", 1500, 78),
    "Gemini_Generated_Image_s1wz3ds1wz3ds1wz.jpeg": ("living-area", 1500, 78),
    "Gemini_Generated_Image_oqcprjoqcprjoqcp.jpeg": ("living-area", 1500, 78),
    "Gemini_Generated_Image_lhbmrplhbmrplhbm.jpeg": ("kitchen-island", 1500, 78),
    "Gemini_Generated_Image_1tc5zw1tc5zw1tc5.jpeg": ("kitchen", 1500, 78),
    r"C:\Users\LOQ\Downloads\2.jpg": ("master-bedroom", 1500, 78),
    "Gemini_Generated_Image_1phk8m1phk8m1phk.jpeg": ("master-ensuite", 1400, 78),
    r"C:\Users\LOQ\Downloads\1.jpg": ("ensuite-view", 1500, 78),
    "Gemini_Generated_Image_9clax79clax79cla.jpeg": ("second-bathroom", 1500, 78),
    "Gemini_Generated_Image_1rebsg1rebsg1reb.jpeg": ("guest-bathroom", 1500, 78),
    "Gemini_Generated_Image_1g4rav1g4rav1g4r.jpeg": ("glazing-portrait", 1100, 78),
    "Gemini_Generated_Image_o2ifwdo2ifwdo2if.jpeg": ("lounge-detail", 1100, 78),
}

HERO = "Gemini_Generated_Image_nrzs1bnrzs1bnrzs.jpeg"


def save_jpeg(im, path, quality):
    im.convert("RGB").save(path, "JPEG", quality=quality, optimize=True, progressive=True, subsampling=2)


def fit(im, max_w):
    if im.width <= max_w:
        return im.copy()
    h = round(im.height * max_w / im.width)
    return im.resize((max_w, h), Image.LANCZOS)


def report(name, im, path):
    print(f"{name:<26} {im.width}x{im.height}  {os.path.getsize(path) // 1024} KB")


def build_photos(gallery_dir):
    for src, (slug, max_w, q) in PHOTOS.items():
        path = src if os.path.isabs(src) else os.path.join(SRC_PHOTOS, src)
        im = fit(Image.open(path), max_w)
        dest = os.path.join(gallery_dir, slug + ".jpg")
        save_jpeg(im, dest, q)
        report(slug + ".jpg", im, dest)


def build_og_image():
    """1200x630 card cropped from the hero -- this is what leads see on WhatsApp."""
    hero = Image.open(os.path.join(SRC_PHOTOS, HERO)).convert("RGB")
    ratio = 1200 / 630
    w, h = hero.size
    if w / h > ratio:
        new_w = round(h * ratio)
        box = ((w - new_w) // 2, 0, (w - new_w) // 2 + new_w, h)
    else:
        new_h = round(w / ratio)
        top = round((h - new_h) * 0.35)
        box = (0, top, w, top + new_h)
    og = hero.crop(box).resize((1200, 630), Image.LANCZOS)
    dest = os.path.join(OUT, "og-image.jpg")
    save_jpeg(og, dest, 82)
    report("og-image.jpg", og, dest)


def build_logos(logo_dir):
    """Crop each lockup to its artwork so it sizes predictably in the layout."""
    for src, slug in (("Logo white.png", "drp-logo-white"), ("logo black.png", "drp-logo-dark")):
        im = Image.open(os.path.join(SRC_LOGO, src)).convert("RGBA")
        bbox = im.split()[3].getbbox()
        if bbox:
            im = im.crop(bbox)
        im = fit(im, 720)
        dest = os.path.join(logo_dir, slug + ".png")
        im.save(dest, "PNG", optimize=True)
        report(slug + ".png", im, dest)


def build_location_map():
    """Crop the branded DRP location map out of the source deck (page 14),
    dropping its heading and logo so the page can supply its own."""
    try:
        import pymupdf
    except ImportError:
        print("location-map.png           SKIPPED (pip install pymupdf to regenerate)")
        return
    page = pymupdf.open(SRC_PDF)[13]
    r = page.rect
    clip = pymupdf.Rect(r.x0, r.y0 + r.height * 0.235, r.x1, r.y1)
    pix = page.get_pixmap(dpi=220, clip=clip)
    im = fit(Image.frombytes("RGB", (pix.width, pix.height), pix.samples), 2200)
    # flat greyscale line-art plus one orange marker: a palette keeps it crisp
    # at a fraction of the full-colour weight
    im = im.quantize(colors=128, method=Image.MEDIANCUT, dither=Image.NONE)
    dest = os.path.join(OUT, "location-map.png")
    im.save(dest, "PNG", optimize=True)
    report("location-map.png", im, dest)


def main():
    gallery_dir = os.path.join(OUT, "gallery")
    logo_dir = os.path.join(OUT, "logo")
    os.makedirs(gallery_dir, exist_ok=True)
    os.makedirs(logo_dir, exist_ok=True)
    build_photos(gallery_dir)
    build_og_image()
    build_logos(logo_dir)
    build_location_map()


if __name__ == "__main__":
    main()
