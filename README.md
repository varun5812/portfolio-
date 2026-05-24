# Varun Kumar H C Portfolio

A premium data science portfolio built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, GSAP, and React Three Fiber.
link : https://portfolio-eax8.onrender.com/

## Tech Stack

- React + Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP
- Three.js via React Three Fiber
- Lucide React

## Features

- Full-screen premium hero with fresher AI/data positioning
- Glassmorphism-led dark visual system with aurora lighting
- Reusable section-based React architecture
- Resume-backed projects, skills, timeline, dashboard, and contact form
- React Three Fiber hero visualization
- Smooth loading screen, floating dock, custom cursor, and scroll progress
- Deployment-ready for Vercel and Render
- Environment variable support for social links and resume URL
- Production `npm start` server for Render web service deployments

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run the production server locally:

```bash
npm start
```

## Environment Variables

Copy `.env.example` to `.env` and customize:

```env
VITE_GITHUB_URL=https://github.com/varun5812
VITE_LINKEDIN_URL=https://www.linkedin.com/
VITE_EMAIL=varunkumar5812@gmail.com
VITE_LEETCODE_URL=https://leetcode.com/
VITE_RESUME_URL=/Varun____.pdf
VITE_PROJECTS_URL=#projects
```

## Deployment

### Vercel

- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`

### Render

- Static Site:
  - Build command: `npm install && npm run build`
  - Publish directory: `dist`
- Web Service fallback:
  - Build command: `npm install && npm run build`
  - Start command: `npm start`

`render.yaml` and `vercel.json` are included for convenience.
