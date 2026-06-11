from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "bloomrang" / "how-to-use-bloomrang.gif"
LOGO = ROOT / "public" / "bloomrang" / "bloomrang-horizontal-light.png"

W, H = 960, 540
FPS = 8
SECONDS_PER_SCENE = 2.6
FRAMES_PER_SCENE = int(FPS * SECONDS_PER_SCENE)

INK = "#201b2d"
MUTED = "#5e5870"
CORAL = "#f85a62"
TEAL = "#20b49b"
AMBER = "#ffc83d"
BLUE = "#2f8ef3"
PURPLE = "#8d5bd8"
CREAM = "#fff8f1"
WHITE = "#ffffff"


def font(size, bold=False):
    names = [
        "/System/Library/Fonts/Supplemental/Avenir Next.ttc",
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf" if bold else "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/Library/Fonts/Arial.ttf",
    ]
    for name in names:
        try:
            return ImageFont.truetype(name, size=size, index=1 if bold and name.endswith(".ttc") else 0)
        except Exception:
            continue
    return ImageFont.load_default()


FONT_TITLE = font(48, True)
FONT_H1 = font(40, True)
FONT_H2 = font(27, True)
FONT_BODY = font(24)
FONT_SMALL = font(18, True)
FONT_TINY = font(15)


def rounded(draw, box, radius, fill, outline=None, width=1):
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def center_text(draw, y, text, fnt, fill=INK):
    box = draw.textbbox((0, 0), text, font=fnt)
    draw.text(((W - (box[2] - box[0])) / 2, y), text, font=fnt, fill=fill)


def wrap_text(draw, text, fnt, max_width):
    words = text.split()
    lines = []
    line = ""
    for word in words:
        test = f"{line} {word}".strip()
        if draw.textbbox((0, 0), test, font=fnt)[2] <= max_width:
            line = test
        else:
            if line:
                lines.append(line)
            line = word
    if line:
        lines.append(line)
    return lines


def paragraph(draw, xy, text, fnt=FONT_BODY, fill=MUTED, max_width=520, gap=8):
    x, y = xy
    for line in wrap_text(draw, text, fnt, max_width):
        draw.text((x, y), line, font=fnt, fill=fill)
        y += fnt.size + gap
    return y


def add_background(img):
    draw = ImageDraw.Draw(img)
    draw.rectangle((0, 0, W, H), fill=CREAM)
    draw.ellipse((-120, -160, 340, 260), fill="#ffe1b3")
    draw.ellipse((720, -120, 1120, 250), fill="#dff8f2")
    draw.ellipse((690, 330, 1120, 680), fill="#eee4ff")
    draw.rounded_rectangle((34, 30, W - 34, H - 30), radius=34, fill="#ffffffd9")
    return draw


def add_logo(img, size=(360, 88), y=50):
    if not LOGO.exists():
        return
    logo = Image.open(LOGO).convert("RGBA")
    logo.thumbnail(size, Image.LANCZOS)
    x = (W - logo.width) // 2
    img.alpha_composite(logo, (x, y))


def bloom_ladder(draw, x, y, compact=False):
    levels = [
        ("6", "Create", PURPLE),
        ("5", "Evaluate", CORAL),
        ("4", "Analyze", BLUE),
        ("3", "Apply", TEAL),
        ("2", "Understand", AMBER),
        ("1", "Remember", "#ff8a3d"),
    ]
    card_w = 134 if compact else 150
    card_h = 58 if compact else 68
    gap = 10
    for idx, (num, label, color) in enumerate(levels):
        bx = x + (idx % 3) * (card_w + gap)
        by = y + (idx // 3) * (card_h + gap)
        rounded(draw, (bx, by, bx + card_w, by + card_h), 18, fill="#ffffff", outline="#e7e1d8", width=2)
        draw.ellipse((bx + 12, by + 14, bx + 42, by + 44), fill=color)
        draw.text((bx + 22, by + 19), num, font=FONT_SMALL, fill=WHITE)
        label_font = FONT_TINY if compact else FONT_SMALL
        draw.text((bx + 52, by + 21), label, font=label_font, fill=INK)


def draw_card(draw, box, heading, text, accent=BLUE):
    x1, y1, x2, y2 = box
    rounded(draw, box, 26, fill=WHITE, outline="#e7e1d8", width=2)
    draw.rectangle((x1, y1, x1 + 12, y2), fill=accent)
    draw.text((x1 + 30, y1 + 24), heading, font=FONT_SMALL, fill=accent)
    paragraph(draw, (x1 + 30, y1 + 62), text, FONT_BODY, INK, max_width=(x2 - x1 - 60), gap=6)


def scene_intro(progress):
    img = Image.new("RGBA", (W, H), WHITE)
    draw = add_background(img)
    add_logo(img, (520, 130), 86)
    center_text(draw, 250, "Bloom's Taxonomy made easy", FONT_TITLE, INK)
    center_text(draw, 316, "A quick guide for educators", FONT_BODY, MUTED)
    draw_button(draw, 380, "Learn by playing", TEAL)
    return img


def draw_button(draw, y, text, color):
    box = draw.textbbox((0, 0), text, font=FONT_H2)
    width = box[2] - box[0] + 58
    x = (W - width) / 2
    rounded(draw, (x, y, x + width, y + 58), 28, fill=color)
    draw.text((x + 29, y + 14), text, font=FONT_H2, fill=WHITE)


def scene_choose(progress):
    img = Image.new("RGBA", (W, H), WHITE)
    draw = add_background(img)
    draw.text((90, 72), "1. Choose how you want to start", font=FONT_H1, fill=INK)
    paragraph(draw, (90, 130), "BloomRang has three simple doors. Pick the one that matches your need today.", max_width=650)
    cards = [
        (90, 240, 310, 375, "Learn", "Teach me first", TEAL),
        (370, 240, 590, 375, "Play/Test", "Check my thinking", CORAL),
        (650, 240, 870, 375, "Toolkit", "Improve objectives", PURPLE),
    ]
    for x1, y1, x2, y2, title, copy, color in cards:
        rounded(draw, (x1, y1, x2, y2), 26, fill=WHITE, outline="#e7e1d8", width=2)
        draw.ellipse((x1 + 24, y1 + 24, x1 + 70, y1 + 70), fill=color)
        draw.text((x1 + 92, y1 + 25), title, font=FONT_H2, fill=INK)
        paragraph(draw, (x1 + 24, y1 + 86), copy, FONT_BODY, MUTED, max_width=160)
    return img


def scene_learn(progress):
    img = Image.new("RGBA", (W, H), WHITE)
    draw = add_background(img)
    draw.text((90, 70), "2. Learn the six levels first", font=FONT_H1, fill=INK)
    paragraph(draw, (90, 130), "Tap a level. BloomRang explains what the learner actually has to do.", max_width=680)
    bloom_ladder(draw, 90, 245)
    draw_card(draw, (590, 235, 850, 405), "Example", "Apply means using knowledge in a real case, calculation, or procedure.", TEAL)
    return img


def scene_match(progress):
    img = Image.new("RGBA", (W, H), WHITE)
    draw = add_background(img)
    draw.text((90, 66), "3. Match the card to the right level", font=FONT_H1, fill=INK)
    paragraph(draw, (90, 126), "Tap one objective or question card. Then tap the Bloom's Taxonomy level it belongs to.", max_width=710)
    draw_card(draw, (95, 230, 465, 410), "Objective card", "Explain how to calculate a pediatric dose from a child's weight.", BLUE)
    draw.line((486, 320, 505, 320), fill=CORAL, width=6)
    draw.polygon([(505, 320), (488, 306), (488, 334)], fill=CORAL)
    bloom_ladder(draw, 520, 220, compact=True)
    rounded(draw, (520, 296, 654, 354), 18, fill="#e8fff9", outline=TEAL, width=4)
    draw.text((560, 315), "Apply", font=FONT_SMALL, fill=INK)
    return img


def scene_feedback(progress):
    img = Image.new("RGBA", (W, H), WHITE)
    draw = add_background(img)
    draw.text((90, 70), "4. Read the reason", font=FONT_H1, fill=INK)
    paragraph(draw, (90, 130), "The feedback is the teaching part. It shows why the task fits that level.", max_width=660)
    draw_card(draw, (120, 230, 840, 405), "Correct: Apply", "The verb says 'explain', but the learner must use the method to calculate a dose. That makes it Apply.", TEAL)
    rounded(draw, (690, 248, 805, 292), 22, fill=TEAL)
    draw.text((720, 258), "Why?", font=FONT_H2, fill=WHITE)
    return img


def scene_toolkit(progress):
    img = Image.new("RGBA", (W, H), WHITE)
    draw = add_background(img)
    draw.text((90, 70), "5. Use the Faculty Toolkit", font=FONT_H1, fill=INK)
    paragraph(draw, (90, 130), "Paste a rough learning objective. BloomRang helps make it clearer and suggests questions by level.", max_width=720)
    rounded(draw, (100, 245, 860, 390), 26, fill=WHITE, outline="#e7e1d8", width=2)
    draw.text((130, 270), "Paste objective here", font=FONT_SMALL, fill=MUTED)
    draw.text((130, 315), "Students will know pain assessment.", font=FONT_BODY, fill=INK)
    draw_button(draw, 415, "Improve objective", CORAL)
    return img


def scene_anywhere(progress):
    img = Image.new("RGBA", (W, H), WHITE)
    draw = add_background(img)
    draw.text((90, 70), "6. Use it on phone or desktop", font=FONT_H1, fill=INK)
    paragraph(draw, (90, 130), "On phone it feels like an app. On desktop it opens as a wider web experience.", max_width=720)
    rounded(draw, (180, 230, 360, 430), 32, fill=INK)
    rounded(draw, (198, 252, 342, 405), 22, fill="#fff8fb")
    draw.text((218, 284), "Tap", font=FONT_H2, fill=CORAL)
    draw.text((218, 330), "Match", font=FONT_H2, fill=TEAL)
    rounded(draw, (470, 245, 790, 410), 22, fill=INK)
    rounded(draw, (492, 270, 768, 382), 14, fill="#fff8fb")
    draw.text((525, 310), "Desktop mode", font=FONT_H2, fill=INK)
    return img


def scene_close(progress):
    img = Image.new("RGBA", (W, H), WHITE)
    draw = add_background(img)
    add_logo(img, (500, 125), 86)
    center_text(draw, 246, "Open BloomRang", FONT_TITLE, INK)
    center_text(draw, 312, "Learn. Match. Improve your questions.", FONT_BODY, MUTED)
    center_text(draw, 382, "bostonsrc.org/bloomrang", FONT_H2, CORAL)
    return img


SCENES = [
    scene_intro,
    scene_choose,
    scene_learn,
    scene_match,
    scene_feedback,
    scene_toolkit,
    scene_anywhere,
    scene_close,
]


def add_progress(draw, scene_index, frame_index):
    total = len(SCENES)
    x1, y1, x2, y2 = 90, 482, 870, 493
    rounded(draw, (x1, y1, x2, y2), 8, fill="#eee8df")
    progress = (scene_index + frame_index / FRAMES_PER_SCENE) / total
    rounded(draw, (x1, y1, x1 + int((x2 - x1) * progress), y2), 8, fill=CORAL)


def soften_frame(img, frame_index):
    # Small fade-in makes a static GIF feel more like a video.
    fade_frames = 4
    if frame_index >= fade_frames:
        return img
    overlay = Image.new("RGBA", (W, H), WHITE)
    alpha = int(180 * (1 - frame_index / fade_frames))
    overlay.putalpha(alpha)
    return Image.alpha_composite(img, overlay)


def main():
    frames = []
    for scene_index, scene in enumerate(SCENES):
        for frame_index in range(FRAMES_PER_SCENE):
            frame = scene(frame_index / FRAMES_PER_SCENE)
            draw = ImageDraw.Draw(frame)
            add_progress(draw, scene_index, frame_index)
            frames.append(soften_frame(frame, frame_index).convert("P", palette=Image.ADAPTIVE, colors=128))

    OUT.parent.mkdir(parents=True, exist_ok=True)
    frames[0].save(
        OUT,
        save_all=True,
        append_images=frames[1:],
        duration=int(1000 / FPS),
        loop=0,
        optimize=True,
        disposal=2,
    )
    print(OUT)


if __name__ == "__main__":
    main()
