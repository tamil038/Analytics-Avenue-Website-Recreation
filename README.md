# 📊 Analytics Avenue — Landing Page

A single-page marketing/landing website for **Analytics Avenue**, a data analytics training and placement program. Built with plain **HTML, CSS, and vanilla JavaScript** — no frameworks, no build tools, no backend.

## ✨ Features

- **Hero Section** — headline, subtitle, YouTube video embed, and a CTA that opens the Razorpay registration/consultation page
- **Empowering Section** — program pitch with a 3-step highlight banner (clickable/interactive)
- **Target Roles / Sectors** — embedded live interactive flows (via `iframe`s hosted on Lovable)
- **Curriculum (Syllabus)** — 4 cards, each with an embedded YouTube video (SQL, Python, Power BI, and a "career info" card)
- **Perfect Fit** — audience segmentation cards (Beginners / Students / Professionals)
- **Sample Projects** — 9-card grid showcasing project domains (Marketing, Financial, Healthcare, Bio, Supply Chain, etc.)
- **Placement Support** — embedded live flow
- **Achievements / Honors** — image-driven proof sections
- **Features** — 8-card "What You Will Learn" grid, each with its own CTA
- **Testimonials** — auto-scrolling horizontal testimonial slider (11 reviews), advances automatically via JS `setInterval`
- **Mentor / Host Section** — founder bio with LinkedIn link
- **Onboarding Process / Step 2** — embedded live flows explaining what happens before and after payment
- **Sticky Floating Video** — hero video "floats" into a corner widget once the user scrolls past it (JS scroll listener)
- **Final CTA Bar** — seat-availability banner + registration button

## 🛠️ Tech Stack

- HTML5 (semantic sections, embedded third-party `iframe`s)
- CSS3 (custom animations via `.section-animated`, responsive grid/flex layouts)
- Vanilla JavaScript:
  - Scroll-based floating video widget
  - Auto-scrolling testimonial carousel
  - Active-state toggle on step cards
- External embeds: YouTube, Lovable-hosted interactive flow pages, Razorpay payment/discussion page

## 📁 Project Structure

```
Analytics Avenue WEB RECREATION/
├── index.html          # Full single-page site (all sections)
├── index.css            # All styling (~1600+ lines)
├── index.js              # Floating video, testimonial auto-scroll, step toggle
├── .vscode/
│   └── settings.json     # Live Server port config (5501)
└── imagesection/         # All images: logo, achievement banners,
                           # project icons, reviewer photos, etc.
```

## 🚀 Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/<your-username>/analytics-avenue-landing.git
   cd analytics-avenue-landing
   ```
2. Open `index.html` directly in a browser, **or** run it with a local server (recommended, since the project includes a VS Code Live Server config on port `5501`):
   - In VS Code: install the **Live Server** extension → right-click `index.html` → "Open with Live Server"
   - Or with Python: `python -m http.server 5501` then visit `http://localhost:5501`

## 🌐 External Dependencies

This site relies on several live third-party embeds (no local fallback):
- YouTube video embeds (hero + syllabus cards)
- Lovable-hosted interactive flow pages (Target Roles, Sectors, Placement, Career, Step 2 sections)
- Razorpay hosted page for registration/consultation CTAs

If any of these external services change their URL or go offline, the corresponding embedded section will show a blank/broken `iframe`.

## 📝 Notes

- This is a static marketing page — no backend, no database, no form submissions. All conversions happen via the external Razorpay link.
- Some images (e.g. `Subramani Sir.png`, `placement_blue (3).png`) have spaces in their filenames; on Linux/macOS this is fine, but keep the exact filenames intact when referencing them in HTML/CSS.

## 📄 License

This project is provided as-is for portfolio/learning purposes.
