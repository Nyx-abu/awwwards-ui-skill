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
PS C:\Users\shoto> npx awwwards-ui-skill
Need to install the following packages:
awwwards-ui-skill@1.1.0
Ok to proceed? (y) y

> npx
> awwwards-ui-skill

🚀 Installing Awwwards UI/UX Agent Skill...
✅ Successfully installed skill to C:\Users\shoto\.gemini\config\plugins\awwwards_ui_design\SKILL.md
✅ Successfully installed skill to C:\Users\shoto\.claude\skills\SKILL.md
✅ Successfully installed skill to C:\Users\shoto\.codex\skills\SKILL.md
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

## What It Covers

- **Layouts:** Full-bleed heroes, bento-box grids, asymmetric sections, horizontal scroll sequences
- **Motion:** GSAP ScrollTrigger reveals, Lenis smooth scrolling, parallax, text scramble transitions
- **Cursors:** RAF-driven custom cursors, magnetic snapping, `mix-blend-mode: difference` on hover
- **3D:** Three.js particle fields and shader-based distortion tied to mouse input
- **Color:** Four curated palettes derived from top developer portfolio sites, with contrast rules baked in
- **Typography:** Display-scale contrast, tight heading tracking, variable font axis animation
- **Accessibility:** WCAG AA contrast enforcement, semantic HTML, ARIA roles, `prefers-reduced-motion` support
- **Self-Audit:** The agent checks its own output for layout, performance, and accessibility issues before returning code

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
