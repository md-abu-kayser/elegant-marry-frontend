# Elegant Marry

<p align="center">
  <strong>A polished, responsive wedding services landing page built with semantic HTML, modern CSS, Tailwind CSS, daisyUI, and vanilla JavaScript.</strong>
</p>

<p align="center">
  <a href="https://elegant-marry-frontend-md-abu-kayser.surge.sh/">Live Demo</a>
  &nbsp;&bull;&nbsp;
  <a href="https://github.com/md-abu-kayser/elegant-marry-frontend">Repository</a>
  &nbsp;&bull;&nbsp;
  <a href="#getting-started">Run Locally</a>
</p>

<p align="center">
  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css&logoColor=white" alt="CSS3" />
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
    <img src="https://img.shields.io/badge/JavaScript-ES2015%2B-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111827" alt="JavaScript ES2015+" />
  </a>
  <a href="https://tailwindcss.com/docs">
    <img src="https://img.shields.io/badge/Tailwind_CSS-CDN-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  </a>
  <a href="https://daisyui.com/docs/">
    <img src="https://img.shields.io/badge/daisyUI-4.x-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white" alt="daisyUI" />
  </a>
  <a href="https://fontawesome.com/docs">
    <img src="https://img.shields.io/badge/Font_Awesome-Icons-528DD7?style=for-the-badge&logo=fontawesome&logoColor=white" alt="Font Awesome" />
  </a>
  <a href="https://opensource.org/license/mit">
    <img src="https://img.shields.io/badge/License-MIT-2563EB?style=for-the-badge" alt="MIT License" />
  </a>
</p>

---

## Overview

**Elegant Marry** is a single-page wedding and event services frontend designed around a premium, invitation-inspired visual experience.

The interface combines strong visual hierarchy, responsive layouts, service discovery, image-led storytelling, pricing packages, frequently asked questions, theme customization, and lightweight client-side interactions.

The project intentionally avoids a JavaScript framework and application backend. Instead, it uses semantic HTML, custom CSS, Tailwind CSS utilities, daisyUI components/themes, and focused vanilla JavaScript.

This makes the project:

- Easy to understand
- Easy to customize
- Lightweight to deploy
- Suitable for static hosting
- Useful as a frontend portfolio project
- Straightforward to extend into a production application

---

## Live Experience

**Live Demo:**
https://elegant-marry-frontend-md-abu-kayser.surge.sh/

**Source Repository:**
https://github.com/md-abu-kayser/elegant-marry-frontend

---

## Core Features

### Responsive User Interface

Designed to adapt across mobile, tablet, laptop, and desktop viewport sizes.

### Wedding Service Discovery

The landing page presents core wedding services including:

- Wedding planning
- Photography
- Venue selection
- Catering
- Event coordination

### Hero Experience

A prominent hero section establishes the visual identity of the website and communicates the core service proposition immediately.

### Image Gallery

A 13-image local gallery provides visual storytelling and creates a more immersive wedding-services experience.

### Pricing Packages

Four structured packages communicate service options clearly, including a visually emphasized popular package.

### FAQ Accordion

Frequently asked questions are presented through expandable interactive sections to keep the page clean while preserving useful information.

### Responsive Navigation

The navigation system provides:

- Desktop navigation
- Mobile navigation
- Sticky positioning
- Scroll-aware styling
- Anchor navigation

### Theme System

The project includes multiple visual themes:

- Corporate
- Wedding
- Elegant
- Modern
- Royal

The interface also supports light/dark presentation modes.

### Micro-interactions

The frontend includes lightweight interaction patterns such as:

- Smooth scrolling
- Hover states
- Reveal animations
- Scroll-aware header behavior
- Theme transitions
- Notification feedback
- Lazy-loading support

---

## Design Goals

The project was built around five primary interface goals:

| Goal                    | Approach                                                                                      |
| ----------------------- | --------------------------------------------------------------------------------------------- |
| **Visual hierarchy**    | Hero-first composition, strong typography, structured sections, and consistent spacing        |
| **Responsive UX**       | Tailwind responsive utilities combined with custom CSS behavior                               |
| **Visual storytelling** | Large imagery, gallery composition, and wedding-oriented content                              |
| **Interaction quality** | Smooth scrolling, theme switching, animated reveals, notifications, and responsive navigation |
| **Maintainability**     | Clear separation between structure, presentation, behavior, and assets                        |

---

## Technology Stack

| Technology             | Purpose                                                     | Official Documentation                                                    |
| ---------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------- |
| **HTML5**              | Semantic document structure, content, and metadata          | [MDN HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)             |
| **CSS3**               | Custom styling, animation, effects, responsive enhancements | [MDN CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)               |
| **JavaScript ES2015+** | Client-side behavior and UI interactions                    | [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |
| **Tailwind CSS**       | Utility-first layout and responsive styling                 | [Tailwind CSS Docs](https://tailwindcss.com/docs)                         |
| **daisyUI**            | UI components and theme support                             | [daisyUI Docs](https://daisyui.com/docs/)                                 |
| **Font Awesome**       | Interface and decorative icons                              | [Font Awesome Docs](https://fontawesome.com/docs)                         |
| **Surge**              | Static website hosting                                      | [Surge Documentation](https://surge.sh/docs/)                             |
| **Git**                | Version control                                             | [Git Documentation](https://git-scm.com/doc)                              |

---

## Architecture

The repository intentionally follows a simple static-frontend architecture.

```text
elegant-marry-frontend/
│
├── index.html
│   └── Semantic page structure, content, CDN configuration
│
├── styles/
│   └── main.css
│       └── Custom CSS, animations, effects, visual enhancements
│
├── js/
│   └── script.js
│       └── Theme management, scrolling, notifications, interactions
│
├── images/
│   └── Local gallery and interface assets
│
├── CNAME
│   └── Surge deployment domain
│
├── LICENSE
│   └── MIT License
│
└── README.md
    └── Project documentation
```

### Responsibility boundaries

The project follows a straightforward separation of concerns:

```text
HTML
│
├── Content
├── Structure
├── Semantic landmarks
└── Metadata

CSS / Tailwind
│
├── Layout
├── Responsive styling
├── Animation
├── Visual effects
└── Component presentation

JavaScript
│
├── Theme switching
├── Navigation behavior
├── Smooth scrolling
├── Notifications
├── Reveal interactions
└── UI state
```

There is no frontend framework runtime, bundler, database, API server, or application backend in the current implementation.

---

## User Experience Flow

```text
Landing Page
     │
     ├── Hero
     │
     ├── Services
     │
     ├── About / Experience
     │
     ├── Gallery
     │
     ├── Pricing
     │
     ├── FAQ
     │
     ├── Contact / CTA
     │
     └── Footer
```

The page is structured so that visitors can move naturally from discovery to service evaluation and finally toward a contact-oriented call to action.

---

## Getting Started

### Prerequisites

You only need:

- A modern web browser
- Git, when cloning the repository
- An optional local static server

No Node.js installation or package manager is required for the current version of the project.

### Clone the Repository

```bash
git clone https://github.com/md-abu-kayser/elegant-marry-frontend.git
```

Navigate into the project:

```bash
cd elegant-marry-frontend
```

### Run Directly

Because this is a static frontend, `index.html` can be opened directly in a browser.

However, using a local HTTP server is recommended because it more closely matches the deployed environment.

### Run with Python

```bash
python -m http.server 5500
```

Open:

```text
http://localhost:5500
```

### Run with VS Code Live Server

Open the project in VS Code and launch `index.html` using a static-server extension such as **Live Server**.

---

## Tailwind CSS and daisyUI

The current project uses CDN-based frontend dependencies rather than a local build pipeline.

This keeps the repository simple and eliminates the need for:

- `package.json`
- npm installation
- Tailwind build configuration
- PostCSS configuration
- bundler configuration

Tailwind's official documentation provides a browser-based Play CDN specifically for trying Tailwind without a build step, while noting that the Play CDN is intended for development rather than production use.

For a production application, the recommended evolution would be to move Tailwind into a proper build pipeline.

daisyUI also provides official CDN usage documentation and theme configuration documentation.

---

## Customization

### Update Content

Edit `index.html` to change:

- Brand messaging
- Navigation labels
- Service descriptions
- Pricing packages
- FAQs
- Contact information
- Calls to action

### Replace Images

Place new assets inside:

```text
images/
```

Then update the relevant image elements:

```html
<img src="./images/example.webp" alt="Elegant wedding reception" />
```

Meaningful images should always have descriptive alternative text.

### Customize Themes

The project's theme system is controlled by the JavaScript theme configuration.

A new theme can be added by extending the theme configuration in:

```text
js/script.js
```

Then expose the theme through the corresponding selector in:

```text
index.html
```

### Modify Visual Styling

Use Tailwind utility classes for localized layout and responsive changes.

Use:

```text
styles/main.css
```

for:

- Custom animations
- Reusable visual effects
- Complex selectors
- Component-specific styling
- Rules that are cleaner outside utility classes

---

## Deployment

The current project is compatible with static hosting platforms because it does not require server-side execution.

The current deployment target is **Surge**.

### Current Domain

```text
elegant-marry-frontend-md-abu-kayser.surge.sh
```

Surge officially supports static publishing through `surge` and supports remembering a deployment domain through a `CNAME` file.

### Typical Surge Deployment

Install Surge:

```bash
npm install --global surge
```

Authenticate:

```bash
surge login
```

Publish the project:

```bash
surge .
```

For a custom domain:

```bash
surge . your-domain.example
```

Surge's official documentation also covers custom-domain DNS configuration and HTTPS.

---

## Quality and Accessibility Considerations

The project has been structured with several frontend quality principles in mind:

- Semantic HTML landmarks
- Responsive layouts
- Descriptive image `alt` attributes
- Visible interactive states
- Keyboard-oriented interaction considerations
- Metadata and description support
- Mobile navigation
- Consistent content hierarchy
- Reduced dependence on JavaScript for core content

Before considering the project client-ready, a production audit should include:

### Performance

Run Lighthouse and inspect:

- Largest Contentful Paint
- Cumulative Layout Shift
- Total Blocking Time
- Image optimization
- Third-party resource cost

### Accessibility

Test:

- Keyboard navigation
- Focus visibility
- Form controls
- Accordion interactions
- Theme controls
- Heading hierarchy
- Screen-reader labels
- Color contrast

### Responsive Testing

Verify the interface across:

```text
Mobile
Tablet
Laptop
Desktop
Large Desktop
```

### Image Optimization

For production deployment, consider:

```text
WebP
AVIF
Responsive image sizing
Lazy loading
Compression
Proper intrinsic dimensions
```

---

## SEO and Production Improvements

The current repository is primarily a frontend showcase. A production wedding-service platform would benefit from additional infrastructure.

### Recommended Production Additions

```text
Production Frontend
│
├── Backend / API
├── Contact or consultation form
├── RSVP workflow
├── CMS integration
├── Database-backed packages
├── Testimonials management
├── Gallery management
├── Analytics
├── Consent management
├── Open Graph metadata
├── Canonical URLs
├── robots.txt
├── sitemap.xml
├── Automated accessibility testing
├── Browser testing
└── Visual regression testing
```

### Potential Stack Evolution

A future production implementation could evolve toward:

```text
Frontend
    │
    ├── React / Next.js
    ├── TypeScript
    └── Tailwind CSS

Backend
    │
    ├── Node.js
    ├── Express.js
    └── REST / API layer

Database
    │
    └── PostgreSQL

Infrastructure
    │
    ├── Docker
    ├── Nginx
    └── Cloud deployment
```

This would preserve the current visual direction while adding application-level capabilities.

---

## Development Principles

The project follows several practical frontend principles:

### Semantic First

Use meaningful HTML elements before reaching for generic containers.

### Responsive by Default

Layouts should adapt naturally rather than relying on desktop-only positioning.

### Progressive Enhancement

Core information remains accessible even when JavaScript interactions are unavailable.

### Separation of Concerns

Content, presentation, and behavior remain independently understandable.

### Minimal Dependencies

Only lightweight client-side dependencies required for the visual experience are used.

### Visual Consistency

Typography, spacing, cards, buttons, colors, and interaction states should follow a consistent design language.

---

## Browser Compatibility

The project targets modern browsers with support for contemporary HTML, CSS, and JavaScript capabilities.

Recommended testing targets include:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

---

## Project Status

**Status:** Frontend Showcase / Static Prototype

The current implementation focuses on the frontend experience and does not include production backend functionality.

---

## Roadmap

### Completed

- [x] Responsive landing page
- [x] Wedding services presentation
- [x] Responsive navigation
- [x] Image gallery
- [x] Pricing section
- [x] FAQ accordion
- [x] Multiple visual themes
- [x] Light/dark presentation
- [x] Smooth navigation
- [x] Scroll-based interactions
- [x] Notification feedback
- [x] Static deployment

### Future Improvements

- [ ] Production contact form
- [ ] RSVP workflow
- [ ] Backend API
- [ ] CMS integration
- [ ] Dynamic packages
- [ ] Testimonials system
- [ ] Gallery management
- [ ] Analytics integration
- [ ] SEO metadata expansion
- [ ] Automated accessibility tests
- [ ] End-to-end testing
- [ ] Production Tailwind build pipeline

---

## License

This project is licensed under the **MIT License**.

See the [LICENSE](./LICENSE) file for the complete license text.

The MIT License permits reuse, modification, distribution, and sublicensing subject to its stated conditions.

---

## Maintainer

**Md Abu Kayser**

**GitHub:** [@md-abu-kayser](https://github.com/md-abu-kayser)

**Email:** [abu.kayser.official@gmail.com](mailto:abu.kayser.official@gmail.com)

**Repository:** [elegant-marry-frontend](https://github.com/md-abu-kayser/elegant-marry-frontend)

---

## Acknowledgements

This project makes use of the following technologies and resources:

- [MDN Web Docs](https://developer.mozilla.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [daisyUI](https://daisyui.com/)
- [Font Awesome](https://fontawesome.com/)
- [Shields.io](https://shields.io/)
- [Surge](https://surge.sh/)

---

<p align="center">
  Built as a premium wedding-services frontend concept with a focus on visual clarity, responsive design, maintainable structure, and polished user experience.
</p>
