# Agent Handover

## Summary

This repository was upgraded to make the `awwwards-ui-design` skill measurable, source-backed, and demonstrable without breaking the existing package shape.

## What changed

- Added a **Measurable Outcome Contract** to `skills/awwwards_ui_design/SKILL.md`.
- Added the **UI-Max Scorecard** with a minimum score of 88/100.
- Integrated principles from:
  - `motion.zajno.com` for easing, offset/delay, fade plus movement, transform/morph, masking, dimensionality, parallax, and zoom.
  - `Awwwards Directory` for category framing and production context.
  - `Awwwards GSAP` for interaction, scrolling, parallax, microinteraction, responsive, Canvas, Three.js, WebGL, React, and Vite vocabulary.
- Replaced `../awwwards-ui-skill-test/index.html` with a sample site that demonstrates the scorecard in a live UI.
- Added `scripts/verify-skill.mjs` and wired `npm test` to it.
- Updated `README.md` with the measurable outcome and verifier workflow.

## Verification

Run from `D:\UI-Max\awwwards-ui-skill`:

```bash
npm test
```

Expected result:

```text
Skill verification passed (8 checks).
```

The verifier checks that the skill, README, handover, and sample HTML all contain the scorecard contract and implementation evidence.

## Install state

The intended install command is:

```bash
node bin/cli.js
```

This copies the upgraded `SKILL.md` into local agent skill directories, including Codex. After installation, use prompts like "build a premium Awwwards-style UI and include the UI-Max Scorecard" to trigger the upgraded behavior.

## Sample website

Open:

```text
D:\UI-Max\awwwards-ui-skill-test\index.html
```

The sample includes:

- `data-scorecard="94"`
- visible `UI-Max Scorecard: 94/100`
- `custom-cursor` and `magnetic` interactions
- `mask-reveal`, `zoom-stage`, `parallax-layer`, and `bento-grid`
- `IntersectionObserver`
- `requestAnimationFrame`
- `prefers-reduced-motion`
- `aria-hidden="true"` on decorative animation elements

## Visual quality fixes (v2)

Two visual bugs were found and fixed in the sample website:

1. **Offset reveal timing — bars cut off:** The `.bento-item p` elements used `position: absolute; bottom: 1rem` which worked for simple text but caused metric bars inside `.metric-stack` to overflow and clip at the bottom of fixed-height cards. Converted all bento card content to flexbox with `margin-top: auto` so text and visual elements flow naturally.

2. **Zoom continuity — unreadable text overlap:** All three `.zoom-card` elements were stacked with `position: absolute; inset: 12%` and had visible opacity (1, 0.58, 0.34), causing all card text to collide. Fixed by: making only the active card visible (`opacity: 1`), suppressing inactive cards (`opacity: 0`), adding `z-index` layering via `--z` custom property, using opaque card backgrounds, and adding `text-shadow` and semi-opaque `background` on card paragraphs for readability.

3. **Mask reveal layout:** Converted from `position: absolute; inset` to flex child with `flex: 1; min-height: 10rem` so it participates in the card's flex layout.

### Verifier upgrade

The verifier (`scripts/verify-skill.mjs`) was upgraded from 8 string-matching checks to **13 checks** (9 content + 4 visual quality):

- **VISUAL-TEXT-01:** Detects `position: absolute` on text elements (p, span) inside card/container selectors.
- **VISUAL-STACK-01/02:** Detects stacked absolute-positioned cards without z-index management and multiple elements with visible alpha.
- **VISUAL-PAD-01:** Detects visual containers (with border-radius) missing padding declarations.
- **VISUAL-READ-01:** Detects card text rules without contrast protection (text-shadow, background, or high-contrast color).

### Skill self-audit update

Added a **Text Readability & Spatial Safety** section to the Mandatory Self-Audit in `SKILL.md` with five checklist items covering absolute-positioned text, stacking z-index, padding, text contrast, and metric/bar layout.

## Notes for future agents

- Keep the skill name and folder stable: `awwwards-ui-design` / `skills/awwwards_ui_design`.
- Do not remove the verifier unless replacing it with a stronger measurable check.
- If adding visual principles, add them to both the scorecard and the sample evidence so `npm test` remains meaningful.
- When adding new bento cards, use flexbox with `margin-top: auto` for bottom-aligned text — never `position: absolute`.
- When adding stacked/overlapping cards, always manage z-index and hide inactive cards (`opacity: 0`).
