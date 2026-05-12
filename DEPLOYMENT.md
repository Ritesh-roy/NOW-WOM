# Global Reach Logistics - Deployment Guide

## Build Status
✅ Project builds successfully with `npm run build`
✅ Dist output created at `dist/client` and `dist/server`
✅ All dependencies installed and configured

## Files Fixed for Vercel Deployment

1. **vercel.json** - Vercel deployment configuration
   - Build command: `npm run build`
   - Output directory: `dist/server`
   - Node version: 20.x
   - Region: iad1 (default)

2. **.npmrc** - npm configuration
   - Enables `legacy-peer-deps` for dependency compatibility

3. **.vercelignore** - Files to exclude from Vercel
   - Excludes source files, git, node_modules

## Deployment Steps

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - ready for Vercel"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to https://vercel.com/new
   - Import your GitHub repository
   - Select "TanStack Start" as framework if prompted
   - Vercel will auto-detect from vercel.json
   - Click "Deploy"

3. **Environment Variables** (if needed)
   - Add any environment variables in Vercel dashboard

## Build Output
- **dist/client/** - Client-side assets and compiled code
- **dist/server/** - Server entry point for SSR
- **dist/server/index.js** - Main server handler

## Configuration Files
- `vite.config.ts` - Vite build configuration
- `tsconfig.json` - TypeScript configuration
- `wrangler.jsonc` - Cloudflare Workers config (for reference)
- `package.json` - Dependencies and build scripts

## Production Build
To build locally:
```bash
npm run build
```

To preview:
```bash
npm run preview
```

## Troubleshooting

### Build Fails
- Ensure all dependencies are installed: `npm install`
- Clear cache: `rm -rf node_modules dist package-lock.json && npm install`
- Check Node version: Should be 20.x or higher

### Deployment Issues
- Check Vercel build logs in dashboard
- Verify environment variables are set correctly
- Ensure all files are committed to git (no local-only changes)

## Support
For issues, check:
- Vercel documentation: https://vercel.com/docs
- TanStack Start: https://tanstack.com/start/latest/docs/overview
- Vite: https://vitejs.dev
