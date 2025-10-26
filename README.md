<!--
	Elegant Marry - Frontend
	A clean, accessible, performant static frontend for an elegant wedding/event website.
	Repo: go-kawser/elegant-marry-frontend
-->

# Elegant Marry | Frontend

**A high-quality, accessible, and performance-minded static frontend for wedding and event websites.**

This repository contains the client-side code (HTML, CSS, JavaScript, and assets) powering a minimal, elegant, and responsive landing site suitable for wedding invitations, event details, RSVP, and photo galleries. It's intentionally lightweight and framework-agnostic to make it easy to host on any static hosting (GitHub Pages, Netlify, Vercel, S3, etc.).

---

## Highlights

- Clean, semantic HTML structure designed for accessibility and SEO.
- Responsive layout with a mobile-first approach.
- Performance-focused: minimal assets, optimized images, and simple JavaScript.
- Easy to customize and extend - no build toolchain required for basic usage.
- Ready to host as a static site (GitHub Pages / Netlify / Vercel).

---

## Table of contents

- [Demo](#demo)
- [Project structure](#project-structure)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Local preview (static)](#local-preview-static)
  - [Local preview (with Node.js)](#local-preview-with-nodejs)
- [Customizing the site](#customizing-the-site)
- [Accessibility & SEO](#accessibility--seo)
- [Performance guidance](#performance-guidance)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

### Demo Link

- GitHub Pages: https://kawser420.github.io/elegant-marry-frontend/
- git clone https://github.com/go-kawser/elegant-marry-frontend.git

---

### Project structure

**Top-level layout---> important files and folders:**

```
index.html           # Main static HTML entry
README.md            # This document
images/              # Image assets (optimize before production)
js/
	script.js        # Small interactive bits (menu, RSVP handling)
styles/
	main.css         # Project styles - mobile-first, responsive
```

**Design notes:**

- All critical styles are in `styles/main.css`. Keep CSS simple and componentized.
- `js/script.js` contains unobtrusive JavaScript - site works with JS disabled for core content.

---

### Tech stack

- HTML5 (semantic)
- CSS3 (Flexbox + CSS variables)
- Vanilla JavaScript (ES2015+)
- No build step by default - optional Node.js tooling for advanced workflows

---

## Getting started

### Prerequisites

- A modern browser for development and testing.
- Optional: Node.js and npm if you want to run a local static server or add tooling.

### Customizing the site

- Update content in `index.html` (headings, event details, photos).
- Replace images in `/images` - keep filenames or update references in HTML.
- Edit styles in `styles/main.css` to tune typography, spacing, and color scheme.
- Add or update JavaScript in `js/script.js` for interactive features like RSVP or gallery lightbox.

### Best practices:

- Keep images optimized (use WebP when possible) and sized to the display context.
- Use semantic tags (`header`, `main`, `section`, `footer`, `nav`) for structure.
- Keep CSS modular and prefer utility classes for small adjustments.

---

### Accessibility | SEO

#### This project follows core accessibility and SEO principles:

- Semantic HTML and logical heading order (H1 → H2 → ...).
- Meaningful alt text for images (edit images in `images/` and set `alt` attributes).
- Color contrast considered in styles - verify with tools like Lighthouse and axe.
- Mobile-first responsive design and touch-target sizes.

#### Suggested checks before publishing:

- Run Lighthouse in Chrome DevTools to evaluate accessibility and SEO score.
- Run axe-core or aXe browser extension to catch common accessibility issues.

---

#### Performance guidance

1. **Keep the site fast and lean:**

- Optimize and compress images (lossy for photos, lossless for graphics).
- Defer non-critical JavaScript and inline critical CSS if needed.
- Use modern image formats (WebP or AVIF) and provide fallbacks for older browsers.
- Minimize third-party scripts and fonts.

2. **Tools to use:**

- Lighthouse (Chrome DevTools)
- ImageOptim / Squoosh for image optimization
- Critical CSS generator for inlining above-the-fold styles

---

#### Deployment

**This is a static site - deploy to any static hosting:**

- **GitHub Pages:** push the `main` branch and enable Pages in repo settings (or put files in `gh-pages` branch).
- **Netlify:** drag & drop build folder or connect repo for continuous deploys.
- **Vercel:** connect repo and configure as a static site.

No build step is required unless you add tooling; if you add a build | bundler | include the build output folder when deploying.

---

#### Contributing

**Small, focused contributions are welcome. Suggested workflow:**

1. Fork the repository.
2. Create a branch: `feature/your-feature` or `fix/issue`.
3. Make changes and keep commits atomic and descriptive.
4. Open a pull request with a clear description of what you changed and why.

**Please include any visual screenshots or a short demo for UI changes.**

---

#### File a bug | Feature request

1. **Use the repository's Issues tab on GitHub. Provide:**

- Steps to reproduce
- Expected vs actual behavior
- Screenshots, console logs, and environment | browser/version

---

##### Contact

**Maintainer:** go-kawser
**Email:** abu.kawser.official@gmail.com

For questions or customizations, open an issue or contact the maintainer from the GitHub profile.

---

**Thank you for checking out Elegant Marry | Frontend. If you'd like, I can also:**

- Add a polished project screenshot to this README.
- Add a small CONTRIBUTING.md and CODE_OF_CONDUCT.
- Add a lightweight NPM-based dev script for serving the site and running a simple linter.
