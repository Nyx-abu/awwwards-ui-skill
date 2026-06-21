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

### 0. Source-Backed Design Inputs

Use these sources as the conceptual baseline, then adapt them to the user's product and tech stack:
- `motion.zajno.com` identifies the animation vocabulary this skill should actively use: easing, offset/delay, fade paired with movement, transform/morph, masking, dimensionality, parallax, and zoom continuity.
- `Awwwards Directory` shows the production categories this skill should design for: agency/studio, UX/UI, web design, interactive, web development, and country/market context.
- `Awwwards GSAP` shows the interaction tags and technologies this skill should be able to combine: animation, scrolling, parallax, microinteractions, storytelling, typography, responsive design, GSAP, Canvas API, Three.js, WebGL, React, and Vite.

Do not copy the visual look of those sites. Extract durable principles: motion must guide attention, layout must create hierarchy, interaction must invite exploration, and implementation must remain accessible and measurable.

### Measurable Outcome Contract

Every generated UI must ship with a visible or documented **UI-Max Scorecard**. The minimum score: 88/100. If the output cannot honestly reach 88, state the shortfall and fix the design before returning.

Score the work with this rubric:

| ID | Category | Points | Pass evidence |
|---|---:|---:|---|
| MOTION-01 | Easing, offset, and delay | 12 | Spatial movement uses non-linear easing; related elements enter with intentional 40-120ms offsets; no important reveal is opacity-only. |
| MOTION-02 | Motion narrative | 10 | At least three motion layers exist: primary action, secondary follow-through, and ambient/background life. |
| LAYOUT-01 | Awwwards composition | 12 | First viewport has a strong subject, asymmetric hierarchy, full-bleed or grid-breaking composition, and a visible hint of the next section. |
| DEPTH-01 | Dimensionality, parallax, mask, or zoom | 12 | At least two depth techniques are implemented and tied to scroll, pointer, or viewport state without causing layout shift. |
| INTERACTION-01 | Microinteraction quality | 10 | Buttons, links, cards, menus, or cursors provide stateful feedback beyond color or opacity changes. |
| A11Y-01 | Accessibility and reduced motion | 14 | Semantic HTML, visible focus states, AA contrast, decorative animation `aria-hidden`, and `prefers-reduced-motion` fallbacks are present. |
| PERF-01 | Performance safety | 12 | Scroll/pointer handlers use `requestAnimationFrame`, heavy work is deferred, WebGL resources are disposable, and no forced synchronous layout loops are introduced. |
| RESP-01 | Responsive resilience | 10 | Layout has stable dimensions and checks at 375px, 768px, and 1440px; text does not overflow buttons, cards, or fixed-format UI. |
| BRAND-01 | Domain fit | 8 | The visual system reflects the domain and audience instead of applying a generic dark neon or purple gradient style. |

Before returning code, include:
- Final score as `UI-Max Scorecard: NN/100`.
- One sentence of evidence for each rubric ID.
- Any deliberate tradeoffs, such as disabling WebGL for a corporate dashboard or replacing GSAP with CSS/IntersectionObserver for a static HTML build.

### 1. Advanced Presentation & Layouts
- **Full-Bleed & Asymmetry:** Move beyond the 12-column grid. Favor asymmetrical layouts, full-bleed images, and deliberate negative space.
- **Progressive Disclosure:** Reveal content on scroll. Use bento-box grids for densely packed feature sections.
- **Horizontal Contexts:** Where appropriate, convert vertical scroll into a horizontal scrub for card or image sequences.
- **Awwwards Directory Framing:** Choose the page category first: agency/studio, product, portfolio, editorial, commerce, dashboard, or tool. Let that category set density, navigation, copy length, and how much spectacle is appropriate.

### 2. Motion & Smooth Scrolling
- **Libraries:** Use `Lenis` or `GSAP ScrollTrigger` for smooth scrolling and scroll-triggered reveal animations.
- **Easing First:** Important movement needs slow-in/slow-out or a clear cubic-bezier curve. Linear easing is acceptable only for continuous spinners, marquee loops, and progress indicators.
- **Offset & Delay:** Related elements should not arrive at once. Use tight stagger windows for UI (40-80ms) and slower staged reveals for hero/editorial moments (80-140ms).
- **Fade With Movement:** Fade-in/fade-out should usually be paired with translate, scale, mask, or clip-path so state changes feel spatial instead of flat.
- **Transform, Morph, Mask:** Use shape continuity when moving between states. A thumbnail can become a hero image, a pill can become a panel, and a mask can reveal media without losing the user's attention.
- **Zoom Continuity:** Use scale/camera-style movement to connect sections when it clarifies navigation or storytelling. Avoid zoom effects that obscure readability or induce motion sickness.
- **Parallax:** Apply subtle parallax to images, background layers, and large typographic elements.
- **Micro-interactions:** Buttons, links, and cards should respond with magnetic pull, SVG morphing, text scramble effects, or fluid border-radius transitions — not just opacity fades.

### 3. Custom Cursor Behaviors
- **Implementation:** Build div-based cursors with `position: fixed` and update their position inside a `requestAnimationFrame` loop for zero jank.
- **Magnetic Snap:** On hover, the cursor should visibly stretch or snap toward interactive elements.
- **Blend Mode Effects:** Use `mix-blend-mode: difference` when the cursor passes over high-contrast text or imagery to create a color-inversion reveal effect.

### 4. 3D & Spatial Design
- **WebGL / Three.js:** Add a WebGL canvas as a background layer — interactive particles, fluid noise, or shader-based distortion responding to mouse movement.
- **Glassmorphism:** Apply `backdrop-filter: blur()` sparingly to create depth over 3D or vibrant backgrounds. Overuse kills the effect.
- **Floating Dimensionality:** Use layered foreground/midground/background movement to make depth understandable. Tie motion distance to hierarchy: foreground moves most, background moves least.

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
- **Fonts:** Choose a display/body pairing that fits the page category and audience; use generous line-height for readable body text.
- **Font Range:** Prefer distinctive pairings that fit the domain. `Syne`, `Outfit`, `Archivo`, `Sora`, `Bricolage Grotesque`, `Fraunces`, and `Instrument Serif` can work; avoid defaulting to Inter unless the product context calls for restraint.
- **Tracking:** Keep letter spacing at `0` unless the existing design system requires otherwise. Use weight, size, contrast, and line-height rather than negative tracking for polish.
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

**Text Readability & Spatial Safety**
- [ ] No text element (p, span, h1-h6) uses `position: absolute` inside a fixed-height container — use flexbox with `margin-top: auto` to push text to the bottom instead
- [ ] Stacked/overlapping cards (zoom, carousel, slides) use `z-index` layering and only the active card is fully visible; inactive cards have `opacity: 0` to prevent text collisions
- [ ] All card and panel containers have at least `1rem` padding so text never touches edges or borders
- [ ] Text on colored backgrounds has contrast protection: `text-shadow`, semi-opaque `background` on the text container, or verified high-contrast `color` values
- [ ] Metric bars, progress indicators, and decorative elements inside cards are laid out with flex/grid and do not rely on `position: absolute` that can cause clipping at small container sizes
