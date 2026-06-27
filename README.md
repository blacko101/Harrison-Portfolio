# Kweku Agyako — Portfolio

A personal portfolio site with extraordinary animations, particle effects, magnetic cursor, 3D card tilts, glitch text, and a typewriter hero.

## 🚀 Deploy to Vercel (Free)

### Option A — GitHub + Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com) → Sign up / Log in with GitHub
   - Click **"Add New Project"**
   - Import your `portfolio` repo
   - Leave all settings as default → click **Deploy**
   - Your site goes live at `your-username.vercel.app` in ~30 seconds

3. **Custom domain (optional)**
   - In Vercel dashboard → your project → Settings → Domains
   - Add any domain you own (e.g. `kwekuagyako.dev`)

### Option B — Vercel CLI

```bash
npm install -g vercel
cd portfolio/
vercel
```
Follow the prompts — done.

---

## ➕ Adding a New Project

Open `data.js` and add a new entry to the `projects` array:

```js
{
  id: 7,                          // next number
  title: "My New App",
  description: "What it does and why it matters.",
  tags: ["Flutter", "Firebase"],
  status: "In Development",       // "Completed" | "In Development" | "Concept / Pitched"
  category: "Mobile App",         // shows up as a filter tab
  icon: "🚀",                     // emoji
  color: "#6C63FF",               // accent color (not currently displayed but stored)
  github: "https://github.com/...", // null if private
  demo: "https://...",            // null if no live demo
  featured: false,                // true = "Featured" badge
  year: 2026
}
```

Save, push to GitHub → Vercel auto-deploys in ~20 seconds. No admin panel needed.

---

## 📁 File Structure

```
portfolio/
├── index.html      ← Main site (all HTML + CSS + JS)
├── data.js         ← All your content lives here
├── vercel.json     ← Vercel routing config
└── README.md       ← This file
```

## ✨ Animation Features

| Feature | Description |
|---|---|
| Particle field | Floating code characters (hex, tags, symbols) that drift across the background |
| Magnetic cursor | Custom cursor with a lagging ring that expands on hover |
| Typewriter hero | Cycles through your roles with realistic typing/deleting |
| 3D card tilt | Project cards tilt in perspective based on mouse position |
| Glitch headers | Section titles glitch with cyan/indigo chromatic aberration |
| Skill bars | Animated fill bars triggered on scroll with glow effect |
| Blob morphs | Blurred gradient blobs that slowly float in the hero |
| Orbit badges | Tech badges orbiting your avatar on a spinning ring |
| Scroll reveal | Cards fade up + slide in with staggered delays as you scroll |
| Mouse gradient | Radial light follows cursor inside each project card |

## 🎨 Customizing Colors

Edit these CSS variables in `index.html` inside `:root {}`:

```css
--indigo: #6C63FF;    /* primary accent */
--cyan: #00F5FF;      /* secondary accent / highlights */
--navy: #0A0E1A;      /* background */
--offwhite: #F0EEF8;  /* main text */
```
