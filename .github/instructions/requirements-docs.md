---
appliesTo:
  - "requirements/*.md"
---

# Requirements Documentation Instructions

## Purpose

The `requirements/` folder contains the source of truth for all website content, structure, and design specifications. These documents guide implementation and must be kept accurate and up-to-date.

## File Structure

- `1-brand-guidelines.md` - Brand colors, typography, logo usage rules
- `2-website-requirements.md` - Overall scope, features, and sitemap
- `3-home-page-content.md` - Content for index.html
- `4-services-content.md` - Content for diensten.html
- `5-scans-content.md` - Content for scans.html (180° and 360° scans)
- `6-about-us-content.md` - Content for over-ons.html
- `7-cases-structure.md` - Structure for cases.html
- `8-contact-content.md` - Content for contact.html

## Documentation Standards

### Language
- Write in English for technical specifications
- Include Dutch content exactly as it should appear on the website
- Mark content sections clearly

### Formatting
- Use Markdown formatting
- Use headings to organize sections
- Use bullet points for lists
- Use code blocks for specific examples or code snippets

### Content Updates

When updating requirements:
1. Ensure consistency across related documents
2. Update the corresponding HTML/CSS if content has changed
3. Keep brand guidelines as the single source of truth for colors and fonts
4. Maintain the numbering scheme for easy reference

## Usage

Before making changes to:
- **HTML content**: Check the corresponding numbered requirements file (e.g., `3-home-page-content.md` for index.html)
- **Styling**: Check `1-brand-guidelines.md` for colors and typography
- **Structure**: Check `2-website-requirements.md` for sitemap and overall scope
- **Forms**: Check relevant content files for form requirements

## Relationship to Code

These requirements documents drive the implementation:
- Brand guidelines → CSS (colors, fonts, spacing)
- Content files → HTML (structure and text)
- Website requirements → Overall architecture

Always verify that code matches the requirements. If requirements are outdated, update them to reflect current reality.
