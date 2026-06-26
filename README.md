# Santosh's Portfolio — Setup Guide

## Files
- `Portfolio.jsx` — the full portfolio component (Hero, About, Skills, Projects, Experience, Contact)
- `Portfolio.css` — all styling (dark/techy theme, JetBrains Mono + Inter fonts)

## 1. Install into your project
If you don't already have a React project:
```bash
npm create vite@latest my-portfolio -- --template react
cd my-portfolio
npm install
```

Copy `Portfolio.jsx` and `Portfolio.css` into `src/`.

## 2. Add the Tabler icon font (used for github/linkedin/mail icons)
In `index.html`, inside `<head>`:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css">
```

## 3. Use it in App.jsx
```jsx
import Portfolio from "./Portfolio";

function App() {
  return <Portfolio />;
}

export default App;
```

## 4. Personalize it
Open `Portfolio.jsx` and edit:
- `projects` array — swap in your real repo links and live demo URLs (Phishing Detector, ShopEase, StayEase are pre-filled as placeholders based on what you've been building)
- `timeline` array — adjust years/descriptions as needed
- Contact section — update your LinkedIn URL and email at the bottom of the file
- The `handleSubmit` function in `Contact` currently just logs to console — wire it up to Formspree, EmailJS, or your own backend API to actually receive messages

## 5. Run it
```bash
npm run dev
```

## 6. Deploy to Vercel
```bash
npm install -g vercel
vercel
```
Or connect your GitHub repo directly at vercel.com — Vercel auto-detects Vite/React and deploys on every push.

## Notes
- Fully responsive (stacks to single column under 768px)
- No external JS dependencies beyond the Tabler icon font — pure React + CSS
- Smooth scroll nav built with native `scrollIntoView`
"# my-portfolio" 
