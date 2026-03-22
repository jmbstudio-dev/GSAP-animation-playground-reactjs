# 🎬 GSAP Animation Playground

A collection of 15 GSAP animation demos built with React + Vite + Tailwind CSS. Each animation is isolated in its own component card, making it easy to study, copy, and reuse.

## ✨ Animations Included

| # | Animation | Description |
|---|-----------|-------------|
| 1 | Stagger | Elements animate in with cascading delay |
| 2 | Text Reveal | Text splits and animates letter by letter |
| 3 | Scroll Trigger | Elements animate as they enter the viewport |
| 4 | Magnetic Button | Button attracts toward the cursor on hover |
| 5 | Ripple Effect | Click creates an expanding ripple |
| 6 | Timeline | Sequenced multi-step animation |
| 7 | Parallax | Layers move at different speeds on mouse move |
| 8 | SVG Morph | Shape morphs from one form to another |
| 9 | Counter | Numbers animate up with easing |
| 10 | Split Text | Words split and fall into place |
| 11 | Hover Cursor | Custom cursor that reacts to elements |
| 12 | Page Transition | Smooth wipe transition between states |
| 13 | Card Flip | 3D flip reveal on click |
| 14 | Spotlight | Cursor creates a light beam effect |
| 15 | Wave | Elements wave in a fluid rhythm |

---

## 🛠️ Tech Stack

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [GSAP](https://gsap.com/) + [@gsap/react](https://gsap.com/docs/v3/Installation/?tab=npm)
- [Lucide React](https://lucide.dev/) — icons

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/jmbstudio-dev/GSAP-animation-playground-reactjs.git
cd gsap-animation-playground
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the dev server
```bash
npm run dev
```

---

## 📦 Installing GSAP in your own project

### Install
```bash
npm install gsap @gsap/react
```

### Register plugins (only needed for ScrollTrigger and others)
```js
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
```

### Basic usage with React
```jsx
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const MyComponent = () => {
  const boxRef = useRef(null);

  useGSAP(() => {
    gsap.to(boxRef.current, {
      x: 200,
      duration: 1,
      ease: "power2.out",
    });
  });

  return <div ref={boxRef} className="w-10 h-10 bg-blue-500 rounded" />;
};
```

### Using `useGSAP` with scope (recommended)
```jsx
useGSAP(() => {
  // targets inside containerRef only
  gsap.from(".box", { opacity: 0, y: 40, stagger: 0.1 });
}, { scope: containerRef });
```

---

## 🔌 GSAP Plugins Used

All plugins below are **free** and included in the base GSAP package:

| Plugin | Import | Use |
|--------|--------|-----|
| ScrollTrigger | `gsap/ScrollTrigger` | Scroll-based animations |
| TextPlugin | `gsap/TextPlugin` | Animate text content |
| MotionPathPlugin | `gsap/MotionPathPlugin` | Animate along SVG paths |

### Registering plugins
```js
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin, MotionPathPlugin);
```

---

## 📁 Project Structure
```
src/
├── animations/               # Individual animation components
│   ├── CardFlip.jsx
│   ├── Counter.jsx
│   ├── HoverCursor.jsx
│   ├── MagneticButton.jsx
│   ├── PageTransition.jsx
│   ├── Parallax.jsx
│   ├── RippleEffect.jsx
│   ├── ScrollTriggerDemo.jsx
│   ├── SplitText.jsx
│   ├── Spotlight.jsx
│   ├── Stagger.jsx
│   ├── SVGMorph.jsx
│   ├── TextReveal.jsx
│   ├── Timeline.jsx
│   └── Wave.jsx
├── components/
│   └── AnimationCard.jsx     # Shared card wrapper
├── data/
│   └── animations.js         # Animation metadata
├── pages/
│   └── Home.jsx              # Main grid layout
├── App.jsx
├── main.jsx
└── index.css
```

---

## ➕ Adding Your Own Animation

1. Create a new file in `src/animations/YourAnimation.jsx`
2. Build your component using `useGSAP`
3. Add it to `src/data/animations.js`
4. Import and add it to the `components` map in `src/pages/Home.jsx`
```jsx
// 1. src/animations/YourAnimation.jsx
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const YourAnimation = () => {
  const ref = useRef(null);

  useGSAP(() => {
    gsap.from(ref.current, { opacity: 0, duration: 1 });
  });

  return <div ref={ref}>Your animation here</div>;
};

// 2. src/data/animations.js — add to array
{ id: "your-animation", title: "Your Animation", description: "What it does." }

// 3. src/pages/Home.jsx — add to components map
import { YourAnimation } from "../animations/YourAnimation";
"your-animation": <YourAnimation />,
```

---

## 📄
MIT — feel free to use, modify, and share.
