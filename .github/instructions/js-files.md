---
appliesTo:
  - "js/*.js"
---

# JavaScript Instructions

## Environment

- **No build tools**: Code must run directly in browsers
- **No transpilation**: Use standard ES6+ features that are widely supported
- **No frameworks**: Vanilla JavaScript only
- Target modern browsers (ES6+ support)

## Code Style

### General Principles

- Use ES6+ syntax (const/let, arrow functions, template literals)
- Prefer `const` over `let` when variables won't be reassigned
- Use meaningful variable and function names
- Keep functions small and focused
- Add comments for complex logic

### Event Listeners

```javascript
// Good: Use addEventListener
document.querySelector('.button').addEventListener('click', handleClick);

// Avoid: Inline event handlers
// <button onclick="handleClick()">
```

### DOM Manipulation

- Use modern query selectors: `querySelector`, `querySelectorAll`
- Cache DOM references when used multiple times
- Prefer `classList` API for class manipulation

### Example Patterns

```javascript
// Query selectors
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

// Event handling with arrow function
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Or with named function
function handleClick(e) {
    navMenu.classList.toggle('active');
}
navToggle.addEventListener('click', handleClick);

// Form handling
const form = document.querySelector('#contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Handle form submission
});
```

## Browser Compatibility

- Use features supported in modern browsers (last 2-3 years)
- Avoid experimental features
- Test core functionality works without JavaScript (progressive enhancement)

## Common Use Cases

This website likely needs JavaScript for:
- Mobile navigation toggle
- Form validation and submission
- Interactive elements
- Smooth scrolling
- Modal/popup windows

## Performance

- Minimize DOM queries
- Use event delegation for dynamic elements
- Avoid global namespace pollution (use IIFE or modules if needed)

## Debugging

- Use `console.log()` sparingly, remove before committing
- Use descriptive error messages
- Handle edge cases gracefully

## No External Dependencies

- Do not add npm packages or external JavaScript libraries
- Keep everything vanilla JavaScript
- If complex functionality is needed, implement it from scratch or discuss alternatives
