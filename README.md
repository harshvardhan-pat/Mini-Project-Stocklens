# StockLens Terminal — VS Code Project

This folder splits the existing StockLens single-file site into separate files without adding live market APIs. Demo stock and commodity prices are retained from the supplied updated HTML.

## Files
- `index.html` — page structure and external library includes
- `styles.css` — custom CSS
- `app.js` — stock/commodity demo data and website behavior

## Run locally
1. Open this folder in VS Code.
2. Install the **Live Server** extension if you do not already have it.
3. Right-click `index.html` and choose **Open with Live Server**.
4. Internet access is needed for the CDN libraries and Google Fonts used by the page.

## Push to GitHub
1. Create/open your GitHub repository.
2. Put all three website files (`index.html`, `styles.css`, `app.js`) in the repository root. Keep the filenames unchanged.
3. Commit and push the changes.
4. In Vercel, ensure the project is connected to that repository; it should redeploy after the push.

## Important
Prices are demo values, not a live market feed. No API keys or server-side files are required for this static demo version.
