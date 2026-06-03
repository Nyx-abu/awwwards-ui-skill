# Awwwards UI/UX Agent Skill

An open-source skill that empowers AI assistants (Antigravity, Codex, Claude Code CLI) to design stunning, award-winning web interfaces. This skill bridges the gap between functional AI code generation and high-end, premium web design.

## Features
- **Triggers Automatically:** Reacts to prompts containing "cool ui", "amazing ui", "premium design", etc.
- **Awwwards Philosophy:** Instructs the AI on using WebGL (Three.js), smooth scrolling (Lenis/GSAP), and advanced typography.
- **Vercel Accessibility First:** Ensures that all generated UIs strictly adhere to WCAG and Vercel's Web Interface Guidelines (semantic HTML, ARIA, high contrast, reduced motion support).

## Installation

### For Antigravity
Clone this repository into your plugins directory:
```bash
git clone https://github.com/yourusername/awwwards-ui-skill.git ~/.gemini/config/plugins/awwwards-ui-skill
```

### For Claude Code / Codex
Copy the `skills/awwwards_ui_design/SKILL.md` file and incorporate it into your custom system prompts or skill registry.

## Usage
Simply ask your AI assistant:
> "Build me a portfolio website with a cool ui"

The agent will automatically read this skill and implement advanced animations, 3D backgrounds, and fully accessible markup.
