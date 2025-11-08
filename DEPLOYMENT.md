# Deployment Guide

This guide explains how to deploy the Dr. Eugenia Vila website to GitHub Pages.

## Prerequisites

1. GitHub account
2. Git installed locally
3. Node.js and npm installed

## Initial Setup

### 1. Create GitHub Repository

1. Go to GitHub and create a new repository named `Astro-Eugenia-Vila-Website`
2. Do NOT initialize with README, .gitignore, or license (we already have these)

### 2. Configure Repository Settings

1. Go to repository Settings > Pages
2. Under "Build and deployment":
   - Source: GitHub Actions
3. Under "Custom domain" (optional):
   - Add your custom domain if you have one
   - GitHub will create a CNAME file automatically

### 3. Push Code to GitHub

```bash
cd "/Users/miguel/Documents/CMPSC Repos/Personal Repos/Astro-Eugenia-Vila-Website"

# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Complete dental clinic website"

# Add remote (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/Astro-Eugenia-Vila-Website.git

# Push to main branch
git push -u origin main
```

### 4. Enable GitHub Actions

The deployment workflow (`.github/workflows/deploy.yml`) will automatically:
1. Install dependencies
2. Build the site
3. Deploy to GitHub Pages

The site will be available at: `https://USERNAME.github.io/Astro-Eugenia-Vila-Website/`

## Custom Domain Setup

If you want to use a custom domain (e.g., `dreugeniavilagencia.com`):

### 1. Update Astro Config

In `astro.config.mjs`, change:

```javascript
export default defineConfig({
  site: 'https://your-custom-domain.com', // Change this
  base: '/', // Change to '/' for custom domain
  trailingSlash: 'always',
  // ... rest of config
});
```

### 2. Configure DNS

Add these DNS records at your domain registrar:

**For apex domain (example.com):**
```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: USERNAME.github.io
```

### 3. Add Custom Domain in GitHub

1. Go to repository Settings > Pages
2. Under "Custom domain", enter your domain
3. Check "Enforce HTTPS" after DNS propagates (may take 24-48 hours)

## Google Analytics Setup

To enable Google Analytics tracking:

1. Create a Google Analytics 4 property
2. Get your Measurement ID (format: `G-XXXXXXXXXX`)
3. Edit `src/components/GoogleAnalytics.astro`
4. Replace `G-XXXXXXXXXX` with your actual Measurement ID
5. Commit and push:

```bash
git add src/components/GoogleAnalytics.astro
git commit -m "Add Google Analytics tracking"
git push
```

## Updating the Site

To make changes and deploy:

```bash
# Make your changes to the code

# Test locally
npm run dev

# Build to verify
npm run build

# Commit and push
git add .
git commit -m "Description of changes"
git push

# GitHub Actions will automatically deploy
```

## Adding Before/After Photos

1. Add images to `assets/images/dental_cases/`
2. Update the `cases` array in:
   - `src/pages/es/casos.astro`
   - `src/pages/en/cases.astro`
3. Commit and push

## Troubleshooting

### Site not loading after deployment
- Check GitHub Actions tab for build errors
- Verify the `base` path in `astro.config.mjs` matches your repository name
- Ensure GitHub Pages is enabled in repository settings

### Custom domain not working
- Verify DNS records are correctly configured
- Wait 24-48 hours for DNS propagation
- Check that CNAME file exists in repository root
- Ensure "Enforce HTTPS" is enabled

### Images not showing
- Verify image paths start with `/assets/` or `/public/`
- Check that images are committed to the repository
- Clear browser cache

## Performance Monitoring

After deployment:
1. Test mobile performance with Google PageSpeed Insights
2. Verify all pages load correctly
3. Check that WhatsApp links work on mobile
4. Test language switching functionality
5. Verify Google Analytics is tracking (may take 24 hours to show data)

## Support

For issues or questions:
- Check GitHub Actions logs for deployment errors
- Review Astro documentation: https://docs.astro.build
- Check GitHub Pages documentation: https://docs.github.com/pages

