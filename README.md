# Varun Kumar H C Portfolio

A cinematic, futuristic portfolio built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, GSAP, and React Three Fiber.

## Tech Stack

- React + Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP
- Three.js via React Three Fiber
- Lucide React

## Features

- Full-screen premium hero with rotating AI roles
- Dark futuristic visual system with aurora lighting and glassmorphism
- Reusable section-based React architecture
- Animated skills, projects, timeline, dashboard, and contact form
- React Three Fiber hero visualization
- Smooth loading screen, floating dock, custom cursor, and scroll progress
- Deployment-ready for Vercel and Render
- Environment variable support for social links and resume URL

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

## Environment Variables

Copy `.env.example` to `.env` and customize:

```env
VITE_GITHUB_URL=https://github.com/varun5812
VITE_LINKEDIN_URL=https://www.linkedin.com/
VITE_EMAIL=varunkumar@example.com
VITE_LEETCODE_URL=https://leetcode.com/
VITE_RESUME_URL=/resume.pdf
VITE_PROJECTS_URL=#projects
```

## Deployment

### Vercel

- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`

### Render

- Static site
- Build command: `npm install && npm run build`
- Publish directory: `dist`

`render.yaml` and `vercel.json` are included for convenience.
