# Contributing to awwwards-ui-skill

Thank you for your interest in contributing. This project lives or dies by the quality of its design philosophy — so all contributions are reviewed with that bar in mind.

---

## What We Need Most Right Now

We are preparing the first stable release and need help in three specific areas:

### 🐛 Bug Hunters
Repeated-pattern bugs are the most destructive issues for a skill like this. We need testers to:
- Ask AI agents (Antigravity, Claude Code, Codex) to build multiple sites using this skill and look for patterns where the AI always reaches for the same Three.js geometry, the same color combination, or the same layout structure.
- Report when generated code breaks on a specific CSS framework (Tailwind, Bootstrap, vanilla) or JavaScript framework (Next.js, Astro, plain HTML).
- Test on mobile viewports and report any layout or performance regressions.

File all bugs via [GitHub Issues](https://github.com/Nyx-abu/awwwards-ui-skill/issues) using the `bug` label.

### ✍️ Design Philosophers
The `SKILL.md` file is the brain of this project. If you've analyzed award-winning sites and distilled a pattern that isn't documented here — submit it.

Good examples of additions:
- A new layout architecture (e.g., editorial magazine grids, kinetic typography patterns)
- A new animation technique with a concrete implementation reference
- An accessibility pattern that's missing from the audit layer

### 🔍 Audit Layer Reviewers
The audit layer instructs the AI to self-check its own output. We want to make this as rigorous as possible. If you can extend the audit checks — such as adding Playwright snippet references the AI can write, or Lighthouse score targets — open a PR.

---

## How to Contribute

1. **Fork** the repository.
2. **Create a branch** with a descriptive name:
   ```bash
   git checkout -b feat/magazine-grid-layout
   ```
3. **Make your changes.** Keep additions to `SKILL.md` concise — AI context windows reward density over verbosity.
4. **Test your changes** by using the modified skill with at least one AI agent and documenting the result.
5. **Open a Pull Request** against `master`. Include:
   - A short description of what you added and why.
   - A before/after comparison of AI output if applicable.

---

## Code of Conduct

- Critique code and ideas, not people.
- Keep discussions focused on craft — design quality, performance, and accessibility are the three pillars.
- Contributions that lower the overall quality bar will be declined with a clear explanation.

---

## Questions?

Open a [Discussion](https://github.com/Nyx-abu/awwwards-ui-skill/discussions) — we read everything.
