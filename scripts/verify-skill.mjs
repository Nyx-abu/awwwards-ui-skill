import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const files = {
  skill: path.join(root, 'skills', 'awwwards_ui_design', 'SKILL.md'),
  readme: path.join(root, 'README.md'),
  handover: path.join(root, 'HANDOVER.md'),
  sample: path.resolve(root, '..', 'awwwards-ui-skill-test', 'index.html')
};

const read = (label, filePath) => {
  if (!fs.existsSync(filePath)) {
    return { text: '', missing: `${label} missing at ${filePath}` };
  }
  return { text: fs.readFileSync(filePath, 'utf8'), missing: null };
};

const contains = (text, needle) => text.includes(needle);

// ---------------------------------------------------------------------------
// Content presence checks (original)
// ---------------------------------------------------------------------------
const contentChecks = [
  {
    file: 'skill',
    label: 'skill defines the measurable outcome contract',
    require: ['Measurable Outcome Contract', 'minimum score: 88/100', 'UI-Max Scorecard']
  },
  {
    file: 'skill',
    label: 'skill includes source-backed motion/composition principles',
    require: ['motion.zajno.com', 'Awwwards Directory', 'Awwwards GSAP']
  },
  {
    file: 'skill',
    label: 'skill includes all rubric categories',
    require: ['MOTION-01', 'MOTION-02', 'LAYOUT-01', 'DEPTH-01', 'INTERACTION-01', 'A11Y-01', 'PERF-01', 'RESP-01']
  },
  {
    file: 'skill',
    label: 'skill includes text readability and spatial safety audit',
    require: ['Text Readability', 'Spatial Safety', 'margin-top: auto']
  },
  {
    file: 'readme',
    label: 'README documents the measurable upgrade',
    require: ['Measurable outcome', 'npm test', 'UI-Max Scorecard']
  },
  {
    file: 'handover',
    label: 'handover documents what changed for other agents',
    require: ['Agent Handover', 'Verification', 'Install state']
  },
  {
    file: 'sample',
    label: 'sample exposes the scorecard and source-backed techniques',
    require: ['UI-Max Scorecard', 'data-scorecard', 'motion.zajno.com', 'Awwwards GSAP']
  },
  {
    file: 'sample',
    label: 'sample implements advanced motion/accessibility evidence',
    require: ['IntersectionObserver', 'prefers-reduced-motion', 'aria-hidden="true"', 'requestAnimationFrame']
  },
  {
    file: 'sample',
    label: 'sample demonstrates the full skill surface',
    require: ['custom-cursor', 'magnetic', 'mask-reveal', 'zoom-stage', 'parallax-layer', 'bento-grid']
  }
];

// ---------------------------------------------------------------------------
// Visual quality checks (new)
// ---------------------------------------------------------------------------

/**
 * Extract all CSS rule blocks from <style> tags in an HTML string.
 * Returns an array of { selector, body } objects.
 */
function extractCSSRules(html) {
  const styleBlocks = [];
  const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  let match;
  while ((match = styleRegex.exec(html)) !== null) {
    styleBlocks.push(match[1]);
  }

  const rules = [];
  const ruleRegex = /([^{}]+)\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}/g;
  for (const block of styleBlocks) {
    // Strip @media wrappers to get inner rules too
    const cleaned = block.replace(/@media[^{]*\{/g, '').replace(/^\s*\}\s*$/gm, '');
    let ruleMatch;
    while ((ruleMatch = ruleRegex.exec(cleaned)) !== null) {
      rules.push({
        selector: ruleMatch[1].trim(),
        body: ruleMatch[2].trim()
      });
    }
  }
  return rules;
}

/**
 * Check that text-containing elements don't use position:absolute inside
 * containers without overflow protection. We look for the anti-pattern:
 * a selector containing "p" or text elements with position: absolute.
 */
function checkNoAbsoluteTextInCards(html) {
  const rules = extractCSSRules(html);
  const failures = [];

  // Pattern: selectors like ".bento-item p", ".card p", etc. with position: absolute
  // This is the exact anti-pattern that caused the offset-reveal-timing bug.
  const textSelectors = rules.filter((rule) => {
    const sel = rule.selector.toLowerCase();
    const isTextChild = /\.\w[\w-]*\s+p\b/.test(sel) || /\.\w[\w-]*\s+span\b/.test(sel);
    const hasAbsolute = /position\s*:\s*absolute/i.test(rule.body);
    return isTextChild && hasAbsolute;
  });

  for (const rule of textSelectors) {
    // Allow if the element is explicitly decorative (aria-hidden containers)
    // or if it's inside a known non-text context like .mask-reveal
    const sel = rule.selector.toLowerCase();
    if (sel.includes('mask') || sel.includes('cursor') || sel.includes('canvas') || sel.includes('cue')) {
      continue;
    }
    failures.push(
      `VISUAL-TEXT-01: "${rule.selector}" uses position:absolute on a text element inside a card/container. ` +
      `Use flexbox with margin-top:auto instead to prevent overflow clipping.`
    );
  }
  return failures;
}

/**
 * Check that stacked absolute-positioned siblings (like zoom cards)
 * have z-index management and don't all start with visible opacity.
 */
function checkNoUnreadableStacking(html) {
  const failures = [];

  // Find all elements with position:absolute and inline --alpha values
  const inlineAlphaRegex = /--alpha\s*:\s*([\d.]+)/g;
  const visibleAlphas = [];
  let alphaMatch;
  while ((alphaMatch = inlineAlphaRegex.exec(html)) !== null) {
    const val = parseFloat(alphaMatch[1]);
    if (val > 0.3) visibleAlphas.push(val);
  }

  // If more than 2 stacked elements start visible, text will overlap
  if (visibleAlphas.length > 2) {
    // Check if z-index management exists
    if (!html.includes('--z')) {
      failures.push(
        `VISUAL-STACK-01: ${visibleAlphas.length} stacked elements have --alpha > 0.3 without z-index (--z) management. ` +
        `Only the active element should be fully visible; others must be suppressed to prevent text overlap.`
      );
    }
  }

  // Check that zoom-card or similar stacked cards use z-index
  const rules = extractCSSRules(html);
  const stackedRules = rules.filter((r) =>
    /position\s*:\s*absolute/i.test(r.body) &&
    /inset/i.test(r.body) &&
    (r.selector.includes('card') || r.selector.includes('slide') || r.selector.includes('panel'))
  );

  for (const rule of stackedRules) {
    if (!/z-index/i.test(rule.body)) {
      failures.push(
        `VISUAL-STACK-02: "${rule.selector}" is position:absolute with inset but has no z-index. ` +
        `Stacked cards must use z-index layering so only the active card's text is readable.`
      );
    }
  }

  return failures;
}

/**
 * Check that text containers have adequate padding.
 * Cards, panels, and articles should have at least some padding.
 */
function checkTextPadding(html) {
  const rules = extractCSSRules(html);
  const failures = [];

  const containerSelectors = rules.filter((r) => {
    const sel = r.selector.toLowerCase();
    return (
      (sel.includes('card') || sel.includes('bento') || sel.includes('article') || sel.includes('panel')) &&
      !sel.includes(':') && // skip pseudo-elements
      !sel.includes('tab') && // skip tab buttons
      /border-radius/i.test(r.body) // has border-radius = it's a visual container
    );
  });

  for (const rule of containerSelectors) {
    // Check for padding
    const hasPadding = /padding\s*:/i.test(rule.body);
    if (!hasPadding) {
      failures.push(
        `VISUAL-PAD-01: "${rule.selector}" is a visual container (has border-radius) but has no padding. ` +
        `Text will touch edges and be hard to read. Add at least 1rem padding.`
      );
    }
  }

  return failures;
}

/**
 * Check that text inside zoom/carousel cards has readability protection.
 * Text on colored backgrounds should have contrast helpers (text-shadow, background, etc.)
 */
function checkTextReadabilityOnColor(html) {
  const rules = extractCSSRules(html);
  const failures = [];

  // Find card paragraph rules
  const cardTextRules = rules.filter((r) => {
    const sel = r.selector.toLowerCase();
    return (sel.includes('card') && (sel.endsWith(' p') || sel.endsWith(' h3') || sel.endsWith(' h2')));
  });

  for (const rule of cardTextRules) {
    const hasContrast =
      /text-shadow/i.test(rule.body) ||
      /background/i.test(rule.body) ||
      /backdrop-filter/i.test(rule.body) ||
      /color\s*:\s*(#fff|#ffffff|rgba\(\s*255|white|var\(--paper\))/i.test(rule.body);

    if (!hasContrast) {
      failures.push(
        `VISUAL-READ-01: "${rule.selector}" renders text on a colored card background without contrast protection. ` +
        `Add text-shadow, a semi-opaque background, or ensure high-contrast color.`
      );
    }
  }

  return failures;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
const failures = [];
const loaded = Object.entries(files).map(([label, filePath]) => [label, read(label, filePath)]);
const contents = {};

for (const [label, result] of loaded) {
  contents[label] = result.text;
  if (result.missing) {
    failures.push(result.missing);
  }
}

// Run content presence checks
for (const check of contentChecks) {
  const missing = check.require.filter((needle) => !contains(contents[check.file], needle));
  if (missing.length) {
    failures.push(`${check.label}: missing ${missing.map((value) => `"${value}"`).join(', ')}`);
  }
}

// Run visual quality checks on sample HTML
if (contents.sample) {
  failures.push(...checkNoAbsoluteTextInCards(contents.sample));
  failures.push(...checkNoUnreadableStacking(contents.sample));
  failures.push(...checkTextPadding(contents.sample));
  failures.push(...checkTextReadabilityOnColor(contents.sample));
}

const totalChecks = contentChecks.length + 4; // 4 visual quality check functions

if (failures.length) {
  console.error('Skill verification failed:');
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(`Skill verification passed (${totalChecks} checks: ${contentChecks.length} content + 4 visual quality).`);
