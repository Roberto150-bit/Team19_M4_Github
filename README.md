# Quinnelle University — static site (Team19_M4)

## Publish to GitHub Pages (recommended: deploy from branch)

The site is static HTML at the **repository root** (`index.html`, styles, scripts, `assets/`).

1. On GitHub, open **Settings** → **Pages** (left sidebar).
2. Under **Build and deployment** → **Source**, choose **Deploy from a branch**.
3. Set **Branch** to `main` and folder **`/ (root)`**, then click **Save**.

After a minute or two, the site will be available at:

**[https://Roberto150-bit.github.io/Team19_M4_Github/](https://Roberto150-bit.github.io/Team19_M4_Github/)**

Use a hard refresh (`Ctrl+Shift+R`) if you still see an old version or a 404 right after the first enable.

### Notes

- **`.nojekyll`** is included so GitHub does not run Jekyll on your files (static HTML/CSS/JS are served as-is).
- **Tailwind** loads from the official Play CDN in each page; an internet connection is required for styling to apply.
- **Local preview:** open `index.html` directly, or run a static server in this folder (e.g. `npx --yes serve .`).

## Repo layout

| Path | Role |
|------|------|
| `index.html`, `*.html` | Pages |
| `styles.css` | Custom CSS |
| `tailwind.config.js` | Tailwind theme extension (CDN) |
| `app.js` | Shared JavaScript |
| `assets/favicon.svg` | Site / tab icon |
