# Harrison Kweku Agyako — Portfolio (React + Three.js)

A production-ready, fully modular React portfolio with WebGL particle fields,
GSAP ScrollTrigger animations, 3D tilt cards, and a magnetic cursor.

## Tech Stack

| Layer      | Library                                        |
|------------|------------------------------------------------|
| Framework  | React 18 + Vite                                |
| 3D / WebGL | Three.js + @react-three/fiber + @react-three/drei |
| Animations | GSAP 3 + ScrollTrigger plugin                  |
| Styling    | Tailwind CSS v3                                |

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start dev server at http://localhost:3000
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build locally
npm run preview
```

---

## Deploy to Vercel (Free)

### Option A — GitHub + Vercel (Recommended)

```bash
git init
git add .
git commit -m "initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

Then:
1. Go to [vercel.com](https://vercel.com) → sign in with GitHub
2. **Add New Project** → import the repo
3. **Framework preset**: Vite  (auto-detected)
4. Leave all other defaults → **Deploy**

Live at `your-name.vercel.app` in ~60 seconds. Every `git push` auto-deploys.

### Option B — Vercel CLI

```bash
npm install -g vercel
npm run build
vercel --prod
```

---

## Project Structure

```
kweku-portfolio/
├── index.html                  ← Vite HTML entry
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json                 ← SPA routing config
└── src/
    ├── main.jsx                ← React entry point
    ├── App.jsx                 ← Root — wires all sections + cursor
    ├── index.css               ← Tailwind base + global utilities
    ├── data.js                 ← ✅ EDIT THIS to update content
    ├── hooks/
    │   ├── useCursor.js        ← Magnetic cursor (dot + lagging ring)
    │   ├── useScrollReveal.js  ← IntersectionObserver fade-up helper
    │   └── useTilt.js          ← 3D perspective tilt on mouse move
    └── components/
        ├── Navbar.jsx          ← Sticky nav with blur backdrop
        ├── Hero.jsx            ← R3F Canvas (orbiting particle torus) + typewriter
        ├── Skills.jsx          ← GSAP ScrollTrigger animated skill bars
        ├── Projects.jsx        ← 3D tilt project cards with spotlight
        ├── Experience.jsx      ← Timeline with tilt cards + staggered reveals
        ├── Education.jsx       ← Education cards + certification badges
        ├── Contact.jsx         ← Animated gradient CTA + social links
        └── Footer.jsx
```

---

## Updating Content

**All content lives in `src/data.js`.** No other files need to change.

### Add a new project

```js
// In src/data.js, add to the `projects` array:
{
  title:       'My New App',
  description: 'What it does.',
  tags:        ['Flutter', 'Firebase'],
  icon:        '🚀',
  color:       '#6C63FF',
  featured:    false,
  github:      'https://github.com/...',  // or null
  demo:        null,
}
```

### Add a new experience

```js
// In src/data.js, add to the `experience` array:
{
  role:        'Software Engineer Intern',
  company:     'Company Name · Location',
  date:        'Jun 2026 – Aug 2026',
  description: 'What you did.',
  icon:        '💻',
}
```

Then `git push` — Vercel deploys in ~20 seconds.

---

## Customizing the Design

Edit CSS variables in `tailwind.config.js` → `theme.extend.colors`:

```js
navy:    '#0A0E1A',   // base background
indigo:  '#6C63FF',   // primary accent
cyan:    '#00F5FF',   // secondary highlights
offwhite:'#F0EEF8',   // main text
```

---

## Animation Features

| Feature               | Where                      | Library     |
|-----------------------|----------------------------|-------------|
| Orbiting particle torus | `Hero.jsx` → R3F Canvas  | Three.js    |
| Typewriter roles      | `Hero.jsx`                 | React state |
| Magnetic cursor       | `useCursor.js`             | RAF lerp    |
| Skill bar fill + count | `Skills.jsx`              | GSAP        |
| ScrollTrigger reveals | All sections               | GSAP        |
| 3D card tilt          | `useTilt.js`               | CSS transforms |
| Mouse spotlight       | Project & exp cards        | radial-gradient |
| Glitch text           | Section headers            | CSS animation |
| Gradient text animate | Contact section            | CSS keyframes |
