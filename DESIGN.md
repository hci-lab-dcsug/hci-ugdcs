---
name: Human-Computer Interaction Lab, University of Ghana
description: The stamped cloth. A stamped cotton cloth where the lab's real figures (hours of speech recorded, publications, hackathon turnout) are pressed in ink inside comb-ruled squares.
colors:
  cotton: "#f3ede1"
  cotton-deep: "#ebe3d3"
  cotton-shade: "#e2d8c4"
  cotton-bar: "rgba(243, 237, 225, 0.96)"
  cotton-rule: "rgba(243, 237, 225, 0.75)"
  cotton-on-red: "#f7efe2"
  ink: "#141414"
  muted: "#4b4338"
  ug-navy: "#173a6c"
  navy-board: "#12305c"
  navy-deep: "#0f2747"
  crest-gold: "#b8964f"
  gold-soft: "#d9c08a"
  kobene: "#a3341f"
  kobene-deep: "#7f2717"
  on-dark: "#f3f6fa"
  on-dark-muted: "#c2cddd"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Montserrat, Andika, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1rem + 3.1vw, 3.875rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Montserrat, Andika, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 1.25rem + 2.2vw, 3.125rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Montserrat, Andika, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.1rem + 0.6vw, 1.625rem)"
    fontWeight: 700
    lineHeight: 1.2
  stamp:
    fontFamily: "Andika, system-ui, sans-serif"
    fontSize: "clamp(8rem, 13vw, 15rem)"
    fontWeight: 700
    lineHeight: 0.8
  body:
    fontFamily: "Andika, Montserrat, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Andika, Montserrat, system-ui, sans-serif"
    fontSize: "clamp(0.875rem, 0.85rem + 0.1vw, 0.9375rem)"
    fontWeight: 400
    lineHeight: 1.4
rounded:
  bar: "1px"
  stamp: "2px"
  plate: "6px"
  md: "8px"
spacing:
  gap: "clamp(12px, 1.4vw, 20px)"
  margin: "clamp(16px, 3.2vw, 48px)"
  section: "clamp(88px, 10vw, 168px)"
  comb: "13px"
  strip: "18px"
components:
  button-primary:
    backgroundColor: "{colors.ug-navy}"
    textColor: "{colors.white}"
    rounded: "{rounded.stamp}"
    padding: "0 1.4em"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.navy-deep}"
  page-head:
    backgroundColor: "{colors.ug-navy}"
    textColor: "{colors.on-dark}"
  partners-band:
    backgroundColor: "{colors.kobene}"
    textColor: "{colors.cotton-on-red}"
  photo:
    rounded: "{rounded.stamp}"
---

# Design

## Overview

**North Star: the stamped cloth.** The site is a piece of stamped cotton cloth. It borrows the *method* of Adinkra cloth (carved stamps pressed in ink inside comb-ruled squares, coloured strips stitched between panels) and applies it to the lab's real figures: 5,000 hours of speech, 50 hours of impaired speech, 70 publications. It stamps numbers, never Adinkra symbols, so no sacred or proverbial symbol is used as decoration.

Earlier versions stamped single letters (Ɛ Ɔ Ŋ Ɖ); they were dropped because visitors could not tell what they meant. Every stamp must say something a visitor can read.

The UG crest stays as the lab's mark (menu bar, footer logo). Its navy and gold are the cloth's dyes and thread.

This replaces the earlier navy-and-waveform direction, which echoed the Tɛkyerɛma Pa hackathon site; the lab site is deliberately its own world.

## Colors

- **Cotton** `#f3ede1` is the ground, with a faint weave (two 1px repeating lines). Darker cotton (`#ebe3d3`, `#e2d8c4`) separates sections by tone.
- **Ink** `#141414` for stamps, comb rules and text.
- **Dyed fields own whole sections**: UG navy `#173a6c` (page heads, language picker, project cards without photos), kobene red `#a3341f` (partners band), deep navy `#0f2747` (Join band). Never a dyed accent on a cotton page; a dye takes the whole field.
- **Crest gold** `#b8964f` is thread: the stitched strip, stamps on navy (soft gold `#d9c08a`), link underlines.
- **Stamp tones**: ink, navy, red, soft gold. A stamp takes exactly one.

## Typography

- **Montserrat** (700/800): headings, names, counts. It is the lettering of the lab's logo.
- **Andika** (400/700, SIL): text and controls. SIL designed it for literacy in African languages; it carries Ɛ ɛ Ɔ ɔ Ŋ ŋ Ɖ ɖ natively (checked in the browser), with the African "n-form" capital Ŋ.
- Andika has no medium weight: 400 or 700 only.
- Stamped figures use the SVG `#ink-edge` filter (fractal-noise displacement, scale 4) so their edge reads as pressed ink. The filter is defined once in `App.js`.
- Retired: Fraunces, Outfit (AI-default faces).

## Layout

- **The comb module**: content sits in squares separated by comb-ruled lines, four parallel 1.5px ink strokes 13px wide (`--comb`, `--comb-y`), on each square's right and bottom edges, never on the outer edge of a grid.
- Home first screen: a stitched strip, then a 4 × 2 grid of squares (headline across two; 5,000 hours of speech, 50 hours of impaired speech; 7 languages, 70 publications, a lab photo, 550 hackathon participants). On tablets and phones, two columns, headline across both.
- "Inside the lab": text beside a 3 × 2 directory of squares (Projects, Languages, People, Publications, Events, Join), each with a stamped count.
- Section heads sit on a comb-ruled line (`.comb-head` or the same background on the heading).
- One page margin; sections separated by `spacing.section`.

## Elevation & Depth

Flat cloth. Depth comes from dye (field colour) and ink, never from shadows.

## Shapes

- Square: 2px radius on buttons and photos. Photos inside squares carry a 2px ink border.
- The **stitched strip**: equal blocks of navy, gold, ink and kobene, 18px tall, under the menu bar and above the footer. The small `.gold-bar` mark is the same strip in miniature.
- Stamped figures are the only large graphic forms.

## Components

- **Figure square** (home): a Montserrat numeral treated as a stamp, a short label ("hours of speech") and one plain sentence of detail. The whole square links to the source (the dataset, the section, the event).
- **Page head**: navy cloth, white Montserrat title, small stitched mark, and the page's count as a large gold stamp from `data-stamp` (Team 11, Projects 6, Publications 70, Events 4). Join has none.
- **Project card without a photo**: navy cloth with its languages large in gold.
- **Primary button**: navy, white text, square corners; darker navy on hover; `scale(0.97)` on press.
- **Language picker**: language names as tabs (arrow keys move between them), panel of that language's projects.

Motion: on load the first-screen squares are pressed in like stamps (scale 1.06 to 1 with opacity, 520ms, 70ms stagger); a figure re-presses under the pointer (scale 0.96) and on tap (0.94). Reduced motion keeps a plain fade. All other motion as before: entrances rise and fade, hover only on fine pointers, durations from `--dur`.

## Do's and Don'ts

- **Do** stamp only real, sourced figures, with a label that says what they count.
- **Do** write plainly: say what the lab did, with numbers and names. No slogans.
- **Do** let a dye own a whole section.
- **Do** keep every square a working link where it can be one.
- **Don't** use Adinkra symbols as decoration.
- **Don't** add shadows, soft gradients or glass; the only gradients are hard-stop stripes (comb rules, weave, stitched strip).
- **Don't** put the logo on a dyed field; it is navy itself.
- **Don't** invent numbers; counts come from `src/data`.
