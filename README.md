# awwwards-ui-skill

[![npm](https://img.shields.io/npm/v/awwwards-ui-skill?color=222&label=npm)](https://www.npmjs.com/package/awwwards-ui-skill)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![Open Source](https://img.shields.io/badge/open%20source-%E2%9D%A4-red)](#contributing)
[![Claude Skills](https://img.shields.io/badge/Claude%20Skills-compatible-blueviolet)](https://claude.ai)
[![Antigravity](https://img.shields.io/badge/Antigravity-compatible-orange)](https://antigravity.dev)

An open-source skill that raises the design quality of AI-generated web interfaces. When AI agents build UIs without guidance, they default to generic layouts, flat aesthetics, and missed accessibility standards. This skill fixes that — injecting design intent around motion, typography, color, and interaction directly into the agent's context.

Compatible with **Antigravity**, **Claude Code**, and **Codex**.

---

## Examples

A developer portfolio — full-bleed hero, WebGL particle field, bento-box grid:

![Portfolio demo](./docs/screenshots/portfolio.png)

An agency site — asymmetric typography, glassmorphism overlays, mix-blend-mode cursor:

![Agency demo](./docs/screenshots/agency.png)

A product landing page — dark mode, 3D CSS object, scroll-triggered reveals:

![Product landing demo](./docs/screenshots/product.png)

---

## Installation

You can automatically install this skill to your Antigravity, Claude Code, and Codex config directories by running:

```bash
npx awwwards-ui-skill
```

If it prompts you to install the package, type `y`:

```text
PS C:\Users\xyz> npx awwwards-ui-skill
Need to install the following packages:
awwwards-ui-skill@1.1.0
Ok to proceed? (y) y

> npx
> awwwards-ui-skill

🚀 Installing Awwwards UI/UX Agent Skill...
✅ Successfully installed skill to C:\Users\xyz\.gemini\config\plugins\awwwards_ui_design\SKILL.md
✅ Successfully installed skill to C:\Users\xyz\.claude\skills\SKILL.md
✅ Successfully installed skill to C:\Users\xyz\.codex\skills\SKILL.md
🎉 You're all set! Tell your AI agent to build a 'cool ui' and watch the magic happen.
```

### Manual Installation (Antigravity)

Clone into your plugins directory:

```bash
git clone https://github.com/Nyx-abu/awwwards-ui-skill.git ~/.gemini/config/plugins/awwwards-ui-skill
```

### For Claude Code / Codex

Copy `skills/awwwards_ui_design/SKILL.md` directly into your custom system prompts or skill registry.

---

## Usage

Just ask your AI assistant:

> "Build me a portfolio with a cool UI"

The skill auto-triggers on keywords like `cool ui`, `premium design`, and `awwwards style`. The agent will apply structured design decisions — layout, motion, typography, color — and run an internal audit on accessibility and performance before returning any code.

---

## Measurable outcome

The skill now requires a **UI-Max Scorecard** before an agent returns UI code. The target is **88/100 minimum**, scored across:

- `MOTION-01` easing, offset/delay, and fade paired with spatial movement
- `MOTION-02` primary, secondary, and ambient motion layers
- `LAYOUT-01` first-viewport composition and Awwwards-style hierarchy
- `DEPTH-01` dimensionality through parallax, masking, morphing, or zoom continuity
- `INTERACTION-01` microinteractions beyond color/opacity changes
- `A11Y-01` semantic HTML, contrast, focus states, `aria-hidden`, and reduced motion
- `PERF-01` requestAnimationFrame-safe pointer/scroll work and WebGL cleanup expectations
- `RESP-01` responsive resilience at 375px, 768px, and 1440px
- `BRAND-01` domain fit instead of generic visual spectacle

Run the deterministic verifier:

```bash
npm test
```

The test checks that the skill, README, handover, and sample website all include the scorecard contract and implementation evidence.

The sample site is at `../awwwards-ui-skill-test/index.html`. It demonstrates the upgraded skill surface with a visible scorecard, custom cursor, magnetic controls, masked media reveal, parallax layer, zoom stage, bento grid, `IntersectionObserver`, `prefers-reduced-motion`, and `requestAnimationFrame`.

---

## What It Covers

- **Layouts:** Full-bleed heroes, bento-box grids, asymmetric sections, horizontal scroll sequences
- **Motion:** GSAP ScrollTrigger reveals, Lenis smooth scrolling, parallax, text scramble transitions
- **Cursors:** RAF-driven custom cursors, magnetic snapping, `mix-blend-mode: difference` on hover
- **3D:** Three.js particle fields and shader-based distortion tied to mouse input
- **Color:** Four curated palettes derived from top developer portfolio sites, with contrast rules baked in
- **Typography:** Display-scale contrast, tight heading tracking, variable font axis animation
- **Accessibility:** WCAG AA contrast enforcement, semantic HTML, ARIA roles, `prefers-reduced-motion` support
- **Self-Audit:** The agent checks its own output for layout, performance, and accessibility issues before returning code
- **Measurement:** The UI-Max Scorecard turns design quality into auditable pass/fail evidence instead of subjective taste language

---

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for full guidelines. The short version:

1. Fork the repo
2. Create a branch: `git checkout -b feat/your-idea`
3. Make focused changes to `SKILL.md` or add new patterns
4. Open a PR with a description and an example of the generated output

We are currently looking for **testers** to spot repeated AI pattern bugs before the v1 stable release. Details in [CONTRIBUTING.md](./CONTRIBUTING.md).

---

## License

[MIT](./LICENSE) — free to use, fork, and build on.
