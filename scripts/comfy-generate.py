#!/usr/bin/env python3
"""
ComfyUI image generator for AI News Curator.
Usage: python3 comfy-generate.py "Article Title" "category" --output /path/to/save.png
"""

import argparse
import json
import sys
import time
import urllib.request
import urllib.parse
import os

COMFY_URL = "http://localhost:8188"
MODEL = "sd_xl_base_1.0.safetensors"
WIDTH, HEIGHT = 1024, 1024
STEPS, CFG = 25, 7.5
SEED = None  # random if None

# Prompt templates by category
PROMPT_TEMPLATES = {
    "aerospace": "editorial photography of {topic}, drones or satellites in dramatic sky, professional magazine style, high quality, photorealistic, 8k",
    "defense": "editorial photography of {topic}, military technology concept, clean professional lighting, high quality, photorealistic, 8k",
    "education": "editorial photography of {topic}, modern classroom or university setting, natural light, professional magazine style, high quality, photorealistic, 8k",
    "finance": "editorial photography of {topic}, stock market or financial district, professional lighting, Bloomberg style, high quality, photorealistic, 8k",
    "policy": "editorial photography of {topic}, government building or policy concept, professional magazine style, clean composition, high quality, photorealistic, 8k",
    "healthcare": "editorial photography of {topic}, medical research lab or healthcare setting, clean sterile lighting, high quality, photorealistic, 8k",
    "robotics": "editorial photography of {topic}, advanced robots or automation, industrial lighting, high quality, photorealistic, 8k",
    "security": "editorial photography of {topic}, cybersecurity or digital protection concept, dark moody lighting, high quality, photorealistic, 8k",
    "opensource": "editorial photography of {topic}, software development or open source collaboration, modern tech office, high quality, photorealistic, 8k",
    "cloud": "editorial photography of {topic}, data center or cloud infrastructure, blue ambient lighting, high quality, photorealistic, 8k",
    "startup": "editorial photography of {topic}, startup office or entrepreneurship, modern vibrant lighting, high quality, photorealistic, 8k",
    "general": "editorial illustration for news: {topic}, professional magazine style, clean composition, high quality, photorealistic, 8k",
}

NEGATIVE = "text, watermark, logo, low quality, blurry, distorted, ugly, deformed, bad anatomy"


def queue_prompt(prompt_workflow):
    data = json.dumps({"prompt": prompt_workflow}).encode("utf-8")
    req = urllib.request.Request(f"{COMFY_URL}/prompt", data=data, headers={"Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=10) as resp:
        return json.loads(resp.read())["prompt_id"]


def get_history(prompt_id):
    with urllib.request.urlopen(f"{COMFY_URL}/history/{prompt_id}", timeout=10) as resp:
        return json.loads(resp.read())


def wait_for_image(prompt_id, max_wait=180):
    """Poll until generation completes, return output filename."""
    start = time.time()
    while time.time() - start < max_wait:
        history = get_history(prompt_id)
        if prompt_id in history:
            outputs = history[prompt_id].get("outputs", {})
            for node_id, node_out in outputs.items():
                images = node_out.get("images", [])
                if images:
                    return images[0]["filename"]
        time.sleep(3)
    return None


def build_workflow(prompt_text, seed=None):
    """Build a standard SDXL txt2img workflow."""
    import random
    if seed is None:
        seed = random.randint(0, 2**32 - 1)

    return {
        "3": {
            "class_type": "KSampler",
            "inputs": {
                "seed": seed,
                "steps": STEPS,
                "cfg": CFG,
                "sampler_name": "euler",
                "scheduler": "normal",
                "denoise": 1.0,
                "model": ["4", 0],
                "positive": ["6", 0],
                "negative": ["7", 0],
                "latent_image": ["5", 0],
            },
        },
        "4": {
            "class_type": "CheckpointLoaderSimple",
            "inputs": {"ckpt_name": MODEL},
        },
        "5": {
            "class_type": "EmptyLatentImage",
            "inputs": {"width": WIDTH, "height": HEIGHT, "batch_size": 1},
        },
        "6": {
            "class_type": "CLIPTextEncode",
            "inputs": {"text": prompt_text, "clip": ["4", 1]},
        },
        "7": {
            "class_type": "CLIPTextEncode",
            "inputs": {"text": NEGATIVE, "clip": ["4", 1]},
        },
        "8": {
            "class_type": "VAEDecode",
            "inputs": {"samples": ["3", 0], "vae": ["4", 2]},
        },
        "9": {
            "class_type": "SaveImage",
            "inputs": {"filename_prefix": "ainews_img", "images": ["8", 0]},
        },
    }


def main():
    parser = argparse.ArgumentParser(description="Generate editorial image via ComfyUI SDXL")
    parser.add_argument("title", help="Article title (used in prompt)")
    parser.add_argument("category", help="Topic category for prompt template")
    parser.add_argument("--output", required=True, help="Destination path for the generated image")
    parser.add_argument("--seed", type=int, default=None, help="Random seed (random if unset)")
    parser.add_argument("--comfy-output-dir", default="/home/olares/comfy/ComfyUI/output",
                        help="ComfyUI output directory")
    args = parser.parse_args()

    # Build prompt
    template = PROMPT_TEMPLATES.get(args.category.lower(), PROMPT_TEMPLATES["general"])
    prompt_text = template.format(topic=args.title)

    print(f"🎨 Category: {args.category}")
    print(f"📝 Prompt: {prompt_text[:120]}...")
    print(f"🎲 Seed: {args.seed or 'random'}")

    # Submit to ComfyUI
    workflow = build_workflow(prompt_text, args.seed)
    try:
        prompt_id = queue_prompt(workflow)
        print(f"📤 Prompt ID: {prompt_id}")
    except Exception as e:
        print(f"❌ Failed to queue: {e}", file=sys.stderr)
        sys.exit(1)

    # Wait for generation
    filename = wait_for_image(prompt_id)
    if not filename:
        print("❌ Timeout waiting for generation", file=sys.stderr)
        sys.exit(1)

    src = os.path.join(args.comfy_output_dir, filename)
    print(f"✅ Generated: {filename}")

    # Copy to destination
    os.makedirs(os.path.dirname(args.output) or ".", exist_ok=True)
    with open(src, "rb") as f_src, open(args.output, "wb") as f_dst:
        f_dst.write(f_src.read())

    size_kb = os.path.getsize(args.output) / 1024
    print(f"📁 Saved: {args.output} ({size_kb:.0f} KB)")
    print(f"🖼️  URL path: /images/{os.path.basename(args.output)}")


if __name__ == "__main__":
    main()
