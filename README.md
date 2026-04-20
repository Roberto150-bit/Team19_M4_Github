# Quinnelle University — static site (Team19_M4)

## GitHub Pages

After pushing, open the repository on GitHub and set the Pages source to **GitHub Actions**:

1. **Settings** → **Pages** → **Build and deployment**
2. Under **Source**, choose **GitHub Actions** (not “Deploy from a branch”).

The workflow `.github/workflows/pages.yml` publishes the repository root on each push to `main`.

**Live URL (project site):**  
[https://Roberto150-bit.github.io/Team19_M4_Github/](https://Roberto150-bit.github.io/Team19_M4_Github/)

If the URL 404s, open **Actions**, confirm the latest **Deploy GitHub Pages** workflow succeeded, then wait a minute and hard-refresh.

## Local preview

Open `index.html` in a browser, or serve the folder (e.g. `npx serve .`) so CDN scripts load reliably.

## Stack

- HTML pages at repo root  
- `styles.css`, `tailwind.config.js`, `app.js`  
- Tailwind [Play CDN](https://tailwindcss.com/docs/installation/play-cdn) (requires network)  
- `assets/favicon.svg`  

File `.nojekyll` disables Jekyll so static files are served as-is.
