# Elegant Marry

<p align="center">
  <strong>A polished, responsive wedding services experience built with semantic HTML, modern CSS, and lightweight JavaScript.</strong>
</p>

<p align="center">
  <a href="https://elegant-marry-frontend-md-abu-kayser.surge.sh/">Live Demo</a>
  &nbsp;&bull;&nbsp;
  <a href="https://github.com/md-abu-kayser/elegant-marry-frontend">Repository</a>
  &nbsp;&bull;&nbsp;
  <a href="#getting-started">Run Locally</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-ES2015%2B-F7DF1E?style=flat-square&logo=javascript&logoColor=111827" alt="JavaScript ES2015 plus" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-CDN-38B2AC?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS via CDN" />
  <img src="https://img.shields.io/badge/daisyUI-4.12.10-5A0EF8?style=flat-square&logo=daisyui&logoColor=white" alt="daisyUI 4.12.10" />
  <img src="https://img.shields.io/badge/License-MIT-2563EB?style=flat-square" alt="MIT License" />
</p>

---

## The Experience

Elegant Marry is a single-page wedding and event services website concept designed to make premium planning services feel approachable, visual, and easy to explore. It combines a strong invitation-style hero with service discovery, image-led storytelling, transparent package cards, FAQs, and a clear contact destination.

The project is intentionally framework-free. That keeps the page fast to understand, simple to customize, and easy to deploy as a static site while still delivering a rich interface through Tailwind CSS, daisyUI, custom CSS, and focused client-side behavior.

### What visitors can explore

- Premium wedding planning, photography, venue selection, and catering services
- Responsive hero section with service messaging and headline statistics
- 13-image gallery using local assets
- Four pricing packages, including a highlighted popular plan
- Frequently asked questions with expandable answers
- Sticky navigation with desktop and mobile layouts
- Five visual themes: Corporate, Wedding, Elegant, Modern, and Royal
- Light and dark theme switching
- Smooth anchor scrolling, scroll-aware header styling, notifications, and reveal animations

## Why This Project Stands Out

| Focus              | Implementation                                                                 |
| ------------------ | ------------------------------------------------------------------------------ |
| Visual hierarchy   | Hero-first composition, clear section rhythm, and a restrained card system     |
| Responsive UX      | Mobile navigation and responsive Tailwind layout utilities across the page     |
| Theming            | Runtime theme switching backed by DaisyUI themes and custom CSS variables      |
| Interaction design | Smooth scrolling, hover states, animated reveals, notifications, and dark mode |
| Maintainability    | Separate markup, styling, behavior, and image assets with no build step        |
| Deployment         | Static hosting ready with a custom domain configuration in `CNAME`             |

## Technology Stack

- **HTML5** for semantic page structure and metadata
- **Tailwind CSS** loaded from the official CDN for utility-based layout and responsive styling
- **daisyUI 4.12.10** for theme support and interface components
- **CSS3** for custom animations, glass effects, hover states, gradients, and scrollbar styling
- **Vanilla JavaScript (ES2015+)** for theme management, smooth scrolling, notifications, lazy-loading support, and scroll behavior
- **Font Awesome** for interface icons
- **Surge** as the current static hosting target

## Project Architecture

```text
elegant-marry-frontend/
├── index.html          # Complete single-page experience and CDN configuration
├── styles/
│   └── main.css        # Custom animations and visual enhancements
├── js/
│   └── script.js       # Theme, scroll, notification, and interaction logic
├── images/             # Local gallery assets
├── CNAME               # Static hosting domain configuration
├── LICENSE             # MIT license
└── README.md           # Project documentation
```

The codebase follows a deliberately direct ownership model: HTML owns content and composition, Tailwind and custom CSS own presentation, and `script.js` owns behavior. There is no framework runtime, bundler, or application server.

## Getting Started

### Prerequisites

- A modern browser
- Git, if you want to clone the repository
- Optional: VS Code with a static server extension such as Live Server

### Clone the project

```bash
git clone https://github.com/md-abu-kayser/elegant-marry-frontend.git
cd elegant-marry-frontend
```

### Preview locally

Because this is a static frontend, you can open `index.html` directly in a browser. A local HTTP server is recommended because it more closely matches a deployed environment and avoids browser restrictions around local assets.

Using Python:

```bash
python -m http.server 5500
```

Then visit [http://localhost:5500](http://localhost:5500).

Using VS Code, open the project with Live Server and launch `index.html`.

## Customization Guide

### Change content

Update the copy, contact details, navigation labels, package information, FAQs, and other page content directly in `index.html`.

### Replace gallery imagery

Add replacement files to `images/`, then update the corresponding `src` and `alt` attributes in the gallery markup. Keep descriptive alternative text for every meaningful image.

### Create a new theme

Add a theme object to `themes` in `js/script.js`, then add a matching theme option to the theme selector in `index.html`. The runtime theme system exposes `--primary`, `--secondary`, `--accent`, and `--neutral` variables for custom animation and visual work.

### Adjust visual details

Use Tailwind utility classes for local layout changes. Use `styles/main.css` for reusable custom animations, effects, and rules that sit outside the utility layer.

## Deployment

The project is deployment-ready for any static host because it contains no build step or server-side dependency. The current `CNAME` file targets:

```text
elegant-marry-frontend-md-abu-kayser.surge.sh
```

For another provider, upload the repository contents as static files and configure the host's custom domain settings as needed. Update the live-demo link in this README whenever the public URL changes.

## Quality Notes

The project includes semantic landmarks, responsive layouts, descriptive image text, visible interactive states, and a meta description. Before using it for a real client, run a production review with:

- Lighthouse for performance, accessibility, SEO, and best practices
- Keyboard-only navigation across menus, theme controls, and accordions
- A screen reader pass for headings, buttons, and image descriptions
- Responsive checks on real mobile and desktop viewport sizes
- Image compression and next-generation formats such as WebP or AVIF

## Production Roadmap

The current repository is a frontend showcase. A production wedding service would typically add:

- A working consultation and RSVP form connected to a backend or form service
- Real social profile URLs and contact integrations
- CMS-driven packages, testimonials, gallery items, and FAQs
- Analytics and consent-aware monitoring
- Open Graph metadata, canonical URLs, `robots.txt`, and `sitemap.xml`
- Automated browser, accessibility, and visual regression tests

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for the full text.

---

<p align="center">
  Designed as a premium wedding services frontend with clarity, flexibility, and a touch of ceremony.
</p>
