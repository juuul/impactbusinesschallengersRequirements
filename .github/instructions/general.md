# General Instructions for Impact Business Challengers Website

## Repository Overview

This is a simple HTML/CSS/JavaScript website for Impact Business Challengers, a Dutch consultancy firm. The website has no build tools or dependencies - it's pure frontend code.

## Project Structure

```
.
├── index.html          # Home page
├── diensten.html       # Services page
├── scans.html          # Free scans page
├── over-ons.html       # About us page
├── cases.html          # Cases page
├── contact.html        # Contact page
├── css/
│   └── style.css      # Main stylesheet
├── js/
│   └── main.js        # JavaScript functionality
└── requirements/      # Website requirements and content documentation
```

## Development Guidelines

### Language
- **Content Language**: All website content is in Dutch (nl)
- **Code Comments**: Use English for code comments and technical documentation
- HTML files must have `lang="nl"` attribute

### Testing Locally

To test the website locally, use a simple HTTP server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx http-server
```

Then navigate to `http://localhost:8000` in your browser.

### Brand Guidelines

- **Primary Color**: #3A79A7 (used for CTAs, headings, background accents)
- **Secondary Colors**:
  - White: #FFFFFF
  - Dark Gray: #1D1D1F
  - Light Gray: #F4F5FA

### Typography

- **Font Families**: Inter, Montserrat, Roboto (in order of preference)
- **Headings**: Bold weight
- **Body Text**: Use dark gray (#1D1D1F) for optimal readability

## Code Quality

- Keep code simple and maintainable
- Follow existing patterns in the codebase
- No build tools or transpilation - code must run directly in browsers
- Maintain consistent structure across HTML pages (shared header/footer/navigation)

## Requirements Documentation

Detailed requirements and content specifications are in the `requirements/` folder. Always consult these documents when making content or structural changes:

- `1-brand-guidelines.md` - Brand colors, typography, logo usage
- `2-website-requirements.md` - Overall website scope and sitemap
- `3-home-page-content.md` - Home page content
- `4-services-content.md` - Services page content
- `5-scans-content.md` - Scans page content
- `6-about-us-content.md` - About us page content
- `7-cases-structure.md` - Cases page structure
- `8-contact-content.md` - Contact page content
