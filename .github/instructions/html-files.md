---
appliesTo:
  - "*.html"
---

# HTML File Instructions

## Language and Structure

- All HTML pages must have `lang="nl"` attribute (Dutch language)
- All content text must be in Dutch
- Use semantic HTML5 elements
- Maintain consistent structure across all pages

## Common Structure

Every HTML page should have:

1. **DOCTYPE and basic structure**:
   ```html
   <!DOCTYPE html>
   <html lang="nl">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <meta name="description" content="...">
       <title>Impact Business Challengers - [Page Name]</title>
       <!-- Font links -->
       <link rel="stylesheet" href="css/style.css">
   </head>
   ```

2. **Header with navigation**:
   - Same navigation structure on all pages
   - Links: Home, Diensten, Gratis Scans, Over ons, Cases, Contact
   - Company name "Impact Business Challengers" as h1

3. **Main content area**:
   - Use `<main>` tag
   - Use `<section>` tags for content blocks

4. **Footer** (if applicable):
   - Keep consistent across pages

## Fonts

Always include these Google Fonts:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet">
```

## Content Guidelines

- Headings should be descriptive and follow hierarchy (h1 → h2 → h3)
- Use appropriate semantic elements (nav, header, main, section, article, footer)
- Keep accessibility in mind (alt text for images, proper heading hierarchy)

## Navigation Structure

Current pages:
- `index.html` - Home
- `diensten.html` - Services
- `scans.html` - Free Scans
- `over-ons.html` - About Us
- `cases.html` - Cases
- `contact.html` - Contact

## Meta Information

- Always include a descriptive meta description in Dutch
- Title format: "Impact Business Challengers - [Page Name]"

## Content Source

When adding or modifying content, always refer to the corresponding requirements document in the `requirements/` folder for accurate content.
