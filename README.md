# awwwards-ui-skill

[![npm](https://img.shields.io/npm/v/awwwards-ui-skill?color=222&label=npm)](https://www.npmjs.com/package/awwwards-ui-skill)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![Open Source](https://img.shields.io/badge/open%20source-%E2%9D%A4-red)](#contributing)
[![Claude Skills](https://img.shields.io/badge/Claude%20Skills-compatible-blueviolet)](https://claude.ai)
[![Antigravity](https://img.shields.io/badge/Antigravity-compatible-orange)](https://antigravity.dev)

An open-source skill for AI coding assistants that teaches them to generate award-winning web interfaces. Covers WebGL, GSAP scroll animations, Lenis smooth scrolling, custom cursors, curated color palettes, and a mandatory accessibility + performance self-audit.

Compatible with **Antigravity**, **Claude Code**, and **Codex**.

---

## What It Produces

A portfolio site with WebGL particles, neon accents, and a full-bleed asymmetric hero:

![Portfolio demo](./docs/screenshots/portfolio.png)

An agency site with horizontal scroll, glassmorphism overlays, and mix-blend-mode cursor effects:

![Agency demo](./docs/screenshots/agency.png)

A product landing page with a 3D object, scroll-triggered typography reveals, and pastel accents:

![Product landing demo](./docs/screenshots/product.png)

---

## Installation

```bash
npm i awwwards-ui-skill
```

### For Antigravity

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

The skill auto-triggers on keywords like `cool ui`, `amazing ui`, `premium design`, and `awwwards style`. From there the AI will implement 3D backgrounds, smooth scrolling, a custom cursor, and verified accessible markup — then run a self-audit before returning the code.

---

## What the Skill Teaches the AI

- **Layouts:** Full-bleed asymmetric heroes, bento-box feature grids, horizontal scroll sequences
- **Motion:** GSAP ScrollTrigger reveals, Lenis smooth scrolling, parallax layering, text scramble effects
- **Cursors:** `requestAnimationFrame`-driven magnetic custom cursors with `mix-blend-mode: difference`
- **3D:** Three.js WebGL particle fields and shader-based distortion responding to mouse input
- **Color Palettes:** Four curated palettes mined from top Awwwards developer sites
- **Typography:** Variable font axes, display-scale contrast, tight heading tracking
- **Accessibility:** WCAG AA contrast, semantic HTML, ARIA roles, `prefers-reduced-motion` handling
- **Self-Audit:** A mandatory checklist the AI runs on its own output before returning code

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
