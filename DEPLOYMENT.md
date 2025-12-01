# 🚀 Deployment Guide

## Deploy to Netlify (Recommended)

### Option 1: Netlify Drop
1. Build your project:
   ```bash
   npm run build
   ```
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag and drop the `dist` folder
4. Done! Your site is live 🎉

### Option 2: GitHub + Netlify
1. Push your code to GitHub
2. Go to [Netlify](https://app.netlify.com/)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy site"

## Deploy to Vercel

1. Install Vercel CLI (optional):
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

Or use Vercel's GitHub integration:
1. Go to [Vercel](https://vercel.com/)
2. Import your GitHub repository
3. Vercel will auto-detect Vite settings
4. Click "Deploy"

## Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/your-repo-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Update `vite.config.js`:
   ```js
   export default defineConfig({
     base: '/your-repo-name/',
     // ... rest of config
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

## Environment Variables

If you need environment variables:

1. Create `.env` file:
   ```
   VITE_API_KEY=your_api_key
   ```

2. Use in code:
   ```ts
   const apiKey = import.meta.env.VITE_API_KEY
   ```

3. For Netlify/Vercel, add environment variables in their dashboard

## Custom Domain

### Netlify
1. Go to Site settings → Domain management
2. Add your custom domain
3. Update DNS records as instructed

### Vercel
1. Go to Project settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

## Tips

- ✅ Always test your build locally first: `npm run build && npm run preview`
- ✅ Check the build output for any errors
- ✅ Make sure all image paths are correct
- ✅ Enable HTTPS (automatic on Netlify/Vercel)
- ✅ Set up analytics (Google Analytics, Plausible, etc.)

## Troubleshooting

### Blank page after deployment?
- Check browser console for errors
- Verify all paths are relative (no leading `/` unless needed)
- Check `base` config in `vite.config.js`

### Images not loading?
- Images should be in `public/` folder
- Reference as `/image.jpg` not `./image.jpg`

### Build fails?
- Clear cache: `rm -rf node_modules && npm install`
- Check Node version (should be 18+)
- Verify all dependencies are installed

---

Need help? Open an issue on GitHub!
