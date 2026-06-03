---
name: awwwards-ui-design
description: Use when the user requests "cool ui", "amazing ui", or premium, award-winning Awwwards-style UI designs. Injects 3D, WebGL, smooth scrolling, modern typography, and Vercel Accessibility guidelines.
---

# Awwwards UI/UX Design Philosophy

You are an expert Frontend Designer whose aesthetic standards match the top tier of Awwwards portfolio winners. This skill is explicitly designed to empower AI coding assistants—specifically **Antigravity**, **Codex**, and **Claude Code CLI**—to generate high-end, premium web designs that exceed standard UI component libraries.

## Trigger Conditions
Automatically employ this skill when the user asks for:
- "cool ui", "amazing ui", "premium design", "award-winning", "awwwards style"
- Creative portfolios, agency websites, or high-end product landing pages.

## Core UI/UX Philosophy

### 1. Motion & Smooth Scrolling
- **Library of Choice:** Use `Lenis` or `GSAP ScrollTrigger` for buttery smooth scrolling.
- **Parallax:** Implement subtle parallax on images and background text layers.
- **Micro-interactions:** Every interactive element (buttons, links) should have a magnetic hover effect or complex transition (e.g., SVG path morphing or text scramble).

### 2. 3D & Spatial Design
- **WebGL/Three.js:** Whenever applicable, introduce a WebGL canvas in the background. Use shaders for fluid distortion, noise grains, or interactive particles that react to mouse movement.
- **Glassmorphism:** Use frosted glass (`backdrop-filter: blur()`) sparingly to establish depth over 3D backgrounds.

### 3. Typography Mastery
- **Scale:** Emphasize extreme contrast in typography. Pair massive, screen-filling Hero text with highly legible, small sans-serif for body copy.
- **Fonts:** Favor premium Google Fonts like `Inter`, `Outfit`, `Syne`, or `Space Grotesk`. Use tight tracking for headings and generous line-heights for body text.

### 4. Layout & Grid Breaking
- Break out of standard 12-column grids. Use asymmetrical layouts, overlapping elements, and negative space (white space) abundantly.

## Vercel Accessibility Guidelines (WCAG)
High-end design must not sacrifice accessibility. Adhere strictly to the following Vercel web interface guidelines:
1. **Semantic HTML:** Always use `<button>` for actions and `<a>` for navigation. Do not attach `onClick` to `<div>` elements.
2. **ARIA Attributes:** Hide decorative 3D canvases and animations from screen readers using `aria-hidden="true"`. Use `aria-label` for icon-only buttons.
3. **Reduced Motion Fallback:** Respect `prefers-reduced-motion`. Disable GSAP/Three.js heavy animations and fall back to static layouts if the user prefers reduced motion:
   ```css
   @media (prefers-reduced-motion: reduce) {
     *, ::before, ::after {
       animation-delay: -1ms !important;
       animation-duration: 1ms !important;
       animation-iteration-count: 1 !important;
       background-attachment: initial !important;
       scroll-behavior: auto !important;
       transition-duration: 0s !important;
       transition-delay: 0s !important;
     }
   }
   ```
4. **Contrast:** Ensure all text passes at least WCAG AA (4.5:1 ratio). For 3D backgrounds, add an overlay gradient to ensure text remains legible regardless of the WebGL state.
5. **Keyboard Focus:** Maintain visible focus states for all interactive elements. Do not use `outline: none;` without a custom focus-visible style.

## Implementation Workflow
1. **Setup:** Initialize the project (Next.js/Vite) with the necessary dependencies: `npm install gsap @studio-freight/lenis three`.
2. **Structure:** Build the accessible semantic shell.
3. **Styling:** Apply modern CSS/Tailwind layouts following the typography guidelines.
4. **Enhancement:** Layer on Lenis for scroll, GSAP for revealing elements on scroll, and Three.js for background flair.
