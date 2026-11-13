# FlowSync — SaaS Landing Page

A responsive landing page for a fictional project management tool called FlowSync, built with React and Tailwind CSS.

## Tech Stack

- React (with Vite)
- Tailwind CSS v4
- Framer Motion (scroll animations)
- Lucide React (icons)
- Sonner (toast notifications)

I also created reusable UI components (Button, Card, Input, etc.) following ShadCN UI patterns — this helped keep the styling consistent across the page.

## How to Run

```bash
cd flowsync-landing
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

To build for production:

```bash
npm run build
```

## Sections

- **Navbar** — Sticky navigation with smooth scroll links. On mobile it collapses into a hamburger menu.
- **Hero** — Main headline with two CTA buttons and a visual mockup of the product dashboard.
- **Features** — Four feature cards with icons and hover effects.
- **How It Works** — Three-step breakdown of the product flow.
- **Pricing** — Two plans (Free and Pro) displayed as cards.
- **Contact** — A "Request a Demo" form with client-side validation. Shows error messages for empty/invalid fields and a success toast + dialog on submit.
- **Footer** — Simple footer with navigation links.

## Design Decisions

- Chose a blue/indigo color scheme since it feels professional and is commonly used in SaaS products.
- Used the Inter font for readability.
- Built a reusable `FadeIn` component with Framer Motion to add scroll-triggered animations — each section fades in as you scroll to it, which makes the page feel more polished.
- Kept the form client-side only since the assignment says no backend is needed. On valid submit, it shows a success message using Sonner (toast library) and a confirmation dialog.
- Made sure the layout works on mobile by using Tailwind's responsive breakpoints and a collapsible navigation menu.
