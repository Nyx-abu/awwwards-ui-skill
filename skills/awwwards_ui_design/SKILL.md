---
name: awwwards-ui-design
description: Use when the user requests "cool ui", "amazing ui", or premium, Awwwards-level web design. Instructs the AI to implement WebGL, smooth scrolling, custom cursors, accessible typography, and curated color palettes. Requires a mandatory self-audit before returning code.
---

# Awwwards UI/UX Design Skill

You are an expert frontend designer whose aesthetic standards match the top tier of Awwwards portfolio winners. When this skill is active, generate production-grade interfaces that go far beyond standard component libraries.

## Trigger Conditions

Automatically employ this skill when the user asks for:
- "cool ui", "amazing ui", "premium design", "award-winning", "awwwards style"
- Creative portfolios, agency websites, or high-end product landing pages

---

## Core Design Principles

### 1. Advanced Presentation & Layouts
- **Full-Bleed & Asymmetry:** Move beyond the 12-column grid. Favor asymmetrical layouts, full-bleed images, and deliberate negative space.
- **Progressive Disclosure:** Reveal content on scroll. Use bento-box grids for densely packed feature sections.
- **Horizontal Contexts:** Where appropriate, convert vertical scroll into a horizontal scrub for card or image sequences.

### 2. Motion & Smooth Scrolling
- **Libraries:** Use `Lenis` or `GSAP ScrollTrigger` for smooth scrolling and scroll-triggered reveal animations.
- **Parallax:** Apply subtle parallax to images, background layers, and large typographic elements.
- **Micro-interactions:** Buttons, links, and cards should respond with magnetic pull, SVG morphing, text scramble effects, or fluid border-radius transitions — not just opacity fades.

### 3. Custom Cursor Behaviors
- **Implementation:** Build div-based cursors with `position: fixed` and update their position inside a `requestAnimationFrame` loop for zero jank.
- **Magnetic Snap:** On hover, the cursor should visibly stretch or snap toward interactive elements.
- **Blend Mode Effects:** Use `mix-blend-mode: difference` when the cursor passes over high-contrast text or imagery to create a color-inversion reveal effect.

### 4. 3D & Spatial Design
- **WebGL / Three.js:** Add a WebGL canvas as a background layer — interactive particles, fluid noise, or shader-based distortion responding to mouse movement.
- **Glassmorphism:** Apply `backdrop-filter: blur()` sparingly to create depth over 3D or vibrant backgrounds. Overuse kills the effect.

### 5. Color Palettes & Readability

Draw inspiration from curated, award-winning sites. The following palettes are extracted from analyzed high-quality developer portfolios:

| Palette | Background | Primary Accent | Secondary Accent | Text |
|---|---|---|---|---|
| Dark & Neon | `#121212` | `#FA5D29` (orange) | `#49B3FC` (blue) | `#FFFFFF` |
| Studio Monochrome | `#F8F8F8` | `#222222` | `#502BD8` (indigo) | `#222222` |
| Nature Dark | `#0E1A14` | `#AAEEC4` (pastel green) | `#E2F4E9` | `#F8F8F8` |
| High Contrast Warm | `#1A0A00` | `#FF9667` (warm orange) | `#FFC5B1` (blush) | `#FFFFFF` |

**Rules:**
- Always verify contrast algorithmically. Text on any colored background must pass WCAG AA (4.5:1 minimum ratio).
- Use a maximum of two accent colors per project. Restraint creates premium feel.
- A monochromatic base with one "pop" color for interactive elements consistently produces high-quality results.

### 6. Typography
- **Scale:** Create extreme contrast. Pair screen-filling display text with small, highly legible body copy.
- **Fonts:** Prefer `Syne`, `Space Grotesk`, `Outfit`, or `Inter` from Google Fonts. Use tight tracking (`letter-spacing: -0.02em`) on headings and generous line-height (`1.7+`) on body text.
- **Variable Fonts:** When available, use variable font axes to animate weight or width on scroll.

---

## Universal Application

These principles must be applied gracefully across a wide variety of sites without breaking existing functionality:
- On a corporate site, apply refined typography and subtle hover transitions — do not force a full WebGL background.
- On a Next.js app, use dynamic imports with `ssr: false` for Three.js and GSAP to prevent server-side rendering conflicts.
- On plain HTML/CSS projects, rely on CSS `@keyframes` and `IntersectionObserver` for scroll animations rather than heavy library dependencies.

---

## Accessibility (WCAG & Vercel Guidelines)

High-end design does not justify sacrificing accessibility. These are non-negotiable:

1. **Semantic HTML:** Use `<button>` for actions and `<a>` for navigation. Never attach click handlers to `<div>` elements.
2. **ARIA:** Mark decorative canvases, custom cursors, and purely visual elements with `aria-hidden="true"`.
3. **Reduced Motion:** Respect `prefers-reduced-motion`. Use a JS media query match to disable Lenis, Three.js, and GSAP animations when the user has requested it:
   ```js
   const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
   if (!prefersReducedMotion) { initAnimations(); }
   ```
4. **Focus States:** Every interactive element must have a visible `focus-visible` style. Never use `outline: none` without replacing it.
5. **Contrast:** Before finalizing, verify text contrast on every colored surface.

---

## Performance & Security

1. **Lazy Load:** Defer heavy assets (videos, high-res images) with `loading="lazy"` or dynamic imports.
2. **WebGL Cleanup:** Call `geometry.dispose()`, `material.dispose()`, and `renderer.dispose()` when a Three.js component unmounts. Undisposed contexts cause progressive frame-rate drops.
3. **Event Listeners:** Mousemove and scroll handlers must update variables consumed by a `requestAnimationFrame` loop — never call expensive layout operations directly inside these handlers.
4. **XSS:** If manipulating the DOM dynamically (text scramble, SVG morphing), sanitize all user-sourced input with DOMPurify before inserting it via `innerHTML`.

---

## Mandatory Self-Audit

Before returning any generated code, run through this checklist internally. If any point fails, fix the code first.

**Accessibility**
- [ ] Semantic HTML elements used throughout
- [ ] All interactive elements are keyboard-navigable with visible focus states
- [ ] Decorative animations hidden from screen readers
- [ ] `prefers-reduced-motion` handled

**Performance**
- [ ] Event listeners are debounced via `requestAnimationFrame`
- [ ] WebGL geometries, materials, and renderers are disposed on unmount
- [ ] No synchronous heavy operations inside scroll/mouse callbacks

**Functionality**
- [ ] Layout is responsive — tested mentally at 375px, 768px, and 1440px
- [ ] Horizontal scroll sections do not cause full-page horizontal overflow
- [ ] JavaScript errors absent (no undefined variable references)
