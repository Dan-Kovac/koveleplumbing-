#!/usr/bin/env python3
"""Cut-out generator for Kovele photography.

Removes the background from a portrait photo using MODNet portrait matting,
producing a transparent-webp cut-out for the "Local Legend" design system
(see plan/design-direction-2026-07.md).

Setup (one-time):
    pip install onnxruntime pillow numpy
    # Model ships chunked inside an npm package (works even where GitHub
    # release downloads are blocked):
    curl -sO https://registry.npmjs.org/@rmbg/model-modnet/-/model-modnet-0.0.1.tgz
    tar xzf model-modnet-0.0.1.tgz
    cat package/modnet-1.onnx package/modnet-2.onnx package/modnet-3.onnx > modnet.onnx

Usage:
    python3 scripts/remove-background.py modnet.onnx input.jpg output.webp
    # Optional crop (px) when the subject is small in a wide frame:
    python3 scripts/remove-background.py modnet.onnx input.jpg output.webp --crop 120,350,340,780

Tips for clean mattes:
- Shoot waist-up against a plain background (the white van door works well).
- MODNet is a PORTRAIT matting model: it degrades on wide scenes where the
  person is small. Crop close to the subject first (--crop), and upscale
  small crops before matting (the script does this automatically).
"""

import argparse
import sys

import numpy as np
import onnxruntime as ort
from PIL import Image, ImageFilter


def cutout(model_path: str, src: str, dst: str, crop: tuple | None) -> None:
    sess = ort.InferenceSession(model_path, providers=["CPUExecutionProvider"])
    iname = sess.get_inputs()[0].name

    im = Image.open(src).convert("RGB")
    if crop:
        im = im.crop(crop)
    # Upscale small crops so the matte has enough face detail to lock onto.
    if max(im.size) < 700:
        im = im.resize((im.width * 3, im.height * 3), Image.LANCZOS)

    w, h = im.size
    ref = 512
    s = ref / max(w, h)
    nw, nh = max(32, int(w * s) // 32 * 32), max(32, int(h * s) // 32 * 32)
    arr = (np.asarray(im.resize((nw, nh), Image.LANCZOS)).astype(np.float32) / 255.0 - 0.5) / 0.5
    matte = sess.run(None, {iname: arr.transpose(2, 0, 1)[None]})[0][0][0]

    mask = (
        Image.fromarray((np.clip(matte, 0, 1) * 255).astype(np.uint8))
        .resize((w, h), Image.LANCZOS)
        .filter(ImageFilter.GaussianBlur(0.8))
    )
    rgba = im.convert("RGBA")
    rgba.putalpha(mask)
    bbox = rgba.getbbox()
    if bbox:
        rgba = rgba.crop(bbox)
    rgba.save(dst, "WEBP", quality=88)
    print(f"{dst} {rgba.size}")


if __name__ == "__main__":
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("model")
    ap.add_argument("input")
    ap.add_argument("output")
    ap.add_argument("--crop", help="left,top,right,bottom in px", default=None)
    args = ap.parse_args()
    box = tuple(int(v) for v in args.crop.split(",")) if args.crop else None
    if box and len(box) != 4:
        sys.exit("--crop needs 4 comma-separated integers")
    cutout(args.model, args.input, args.output, box)
