# Koteesh Vijayasekar — Portfolio

Personal portfolio site built with React + Vite. Single-page site covering summary, experience, projects, skills, education, certifications, and contact info, with a light/dark theme toggle and a downloadable resume.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Editing content

All resume content (name, summary, experience, projects, skills, education, certifications) lives in one place: [src/data/content.js](src/data/content.js). Edit that file to update the site — no need to touch components for text changes.

To swap the profile photo, replace [src/assets/profile.jpg](src/assets/profile.jpg). To update the downloadable resume, replace [public/Koteesh_Vijayasekar_Resume.pdf](public/Koteesh_Vijayasekar_Resume.pdf) and update `resumeUrl` in `content.js` if you rename the file.

## Build

```bash
npm run build
```

Outputs a static site to `dist/`.

## Deploying to Vercel

**Option A — Vercel CLI (fastest, no GitHub needed):**

```bash
npm install -g vercel
vercel login
vercel        # deploy a preview
vercel --prod # deploy to production
```

Vercel auto-detects the Vite framework preset (build command `npm run build`, output directory `dist`). Follow the prompts; it'll give you a live `*.vercel.app` URL immediately.

**Option B — GitHub + Vercel (recommended for ongoing edits):**

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Vercel auto-detects Vite — click Deploy.
4. Every future push to `main` auto-deploys.

Either way, you can attach a custom domain later from the Vercel project settings.
