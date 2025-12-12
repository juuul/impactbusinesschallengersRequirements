---
appliesTo:
  - "css/*.css"
---

# CSS Styling Instructions

## Brand Colors (ALWAYS USE THESE)

**Primary Color:**
- `#3A79A7` - Use for CTAs, headings, background accents, primary buttons, header background

**Secondary Colors:**
- `#FFFFFF` - White (backgrounds, text on dark backgrounds)
- `#1D1D1F` - Dark Gray (body text, headings)
- `#F4F5FA` - Light Gray (page background, subtle backgrounds)

## Typography

**Font Stack:**
```css
font-family: 'Inter', 'Montserrat', 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, sans-serif;
```

**Note**: Inter and Montserrat are loaded from Google Fonts. Roboto is included as a system font fallback.

**Font Weights:**
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

**Guidelines:**
- Headings should use bold weight (600-700)
- Body text should use regular weight (400) or medium (500)
- Body text color: `#1D1D1F` for optimal readability

## Existing Patterns

- Global reset with `box-sizing: border-box`
- Base line-height: 1.6
- Header uses primary brand color (#3A79A7)
- Page background: Light Gray (#F4F5FA)
- Navigation links in white on header background

## Styling Principles

1. **Consistency**: Maintain existing styling patterns
2. **Responsive**: Design should work on mobile, tablet, and desktop
3. **Accessibility**: Ensure sufficient color contrast
4. **Simplicity**: Keep CSS straightforward, no preprocessors or build tools

## Common Classes

When adding new styles, follow the existing pattern of using:
- `.hero` - For hero sections
- `.content-section` - For content blocks
- `.subtitle` - For subtitles

## Layout Guidelines

- Max width for content: 1200px
- Standard padding: Use rem units (typically 1rem or 2rem)
- Box shadows: Use subtle shadows (e.g., `0 2px 5px rgba(0, 0, 0, 0.1)`)

## Transitions and Animations

Keep animations subtle:
- Use transition duration around 0.3s
- Common properties: opacity, transform
- Example: `transition: opacity 0.3s;`

## Browser Compatibility

- Code must work in modern browsers without transpilation
- Use standard CSS (no SCSS, LESS, etc.)
- Avoid very recent CSS features that may not be widely supported
