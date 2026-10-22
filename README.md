# Portfolio — UI Shell

A quiet, Apple-esque portfolio shell built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**, with two interactive layers: a pointer-tracking **SpotlightCard** and a procedural **3D hero canvas** (React Three Fiber + drei).

## Design system

| Token            | Value     | Role                             |
| ---------------- | --------- | -------------------------------- |
| `canvas`         | `#F7F4F0` | Beige — page background          |
| `alt`            | `#F1EDE7` | Warm off-white — alternate sections |
| `card`           | `#FFFFFF` | White — cards & panels            |
| `ink` / `body`   | `#2C2623` | Dark brown — headings & text      |
| `accent`         | `#2DD4BF` | Muted teal — button fills         |
| `accent-deep`    | `#0F766E` | Teal 700 — text links on light bg |
| font             | Inter     | Self-hosted via `next/font`       |

Rules the codebase sticks to:

- **No gradients** — every surface is a solid, high-contrast color.
- **Ultra-soft shadows only** — `shadow-[0_8px_30px_rgb(44,38,35,0.05)]`, never tinted glows.
- **Massive spacing** — `py-32` between every section.
- **Hairline borders** — `border-ink/10` on cards, `border-white/10` for structural rules.
- **Text meets WCAG AA** — all meaningful text is `text-ink/70` or darker (≥ 5.1:1 on every background). The only lower-opacity text is decorative (`aria-hidden`) numerals.

> Teal fills carry dark-brown text (~8:1 contrast). Teal *text* links use the
> darker `accent-deep` shade, because `#2DD4BF` on beige is only ~1.9:1 and would
> be unreadable.

## Structure

```
src/
├── app/
│   ├── layout.tsx        # Inter font, metadata, root shell
│   ├── page.tsx          # Hero (mounts <HeroCanvas />) → Projects → About → Contact
│   └── globals.css       # Tailwind v4 @theme tokens, base styles, motion, .spotlight-card
├── components/
│   ├── Navbar.tsx        # Glassmorphism top nav (client, scroll + mobile menu)
│   ├── HeroCanvas.tsx    # 3D hero scene (client, R3F + drei)
│   ├── SpotlightCard.tsx # Pointer-tracking spotlight wrapper (client)
│   ├── Projects.tsx      # Minimalist project grid
│   ├── About.tsx         # Bio + capabilities
│   └── Contact.tsx       # CTA panel + footer
└── data/
    └── portfolio.ts      # Single source of truth for all content
```

## SpotlightCard

`src/components/SpotlightCard.tsx` is a React Bits–style wrapper that lights up a
card as the pointer crosses it.

- The **wrapper owns the card surface** (background, border, radius, shadow, hover lift)
  so the spotlight travels with the card instead of sitting behind it.
- `pointermove` writes the pointer position to the `--mouse-x` / `--mouse-y` custom
  properties on the element — no React state, so tracking never re-renders.
- The glow is two pseudo-elements:
  - `::before` — a 340px teal radial wash (`#2DD4BF` at 16%) behind the content.
  - `::after` — a 1px ring masked out of a radial gradient, so the border brightens
    near the pointer.
- Hover is gated behind `@media (hover: hover) and (pointer: fine)` so touch
  devices never get a stuck spotlight.

Usage in `Projects.tsx`:

```tsx
<SpotlightCard className="group flex h-full flex-col rounded-[28px] border border-ink/10 bg-card …">
  <article className="flex min-h-[28rem] flex-1 flex-col justify-between p-8 md:p-9">
    …
  </article>
</SpotlightCard>
```

## HeroCanvas

`src/components/HeroCanvas.tsx` renders a single procedural torus knot with a
transmissive glass material, mounted behind the hero copy in `page.tsx`:

```tsx
<mesh>
  <torusKnotGeometry args={[1, 0.32, 220, 32, 2, 3]} />
  <MeshTransmissionMaterial
    thickness={1}
    roughness={0.2}
    transmission={1}
    ior={1.5}
    …
  />
</mesh>
```

- `useFrame` applies a slow auto-rotation; a drei `<Float>` wrapper adds a gentle bob.
- `<Environment preset="city" />` supplies the reflections.
- The knot scales from the viewport (`Math.min(width, height) / 5.2`) so it stays
  ~428×564 px on desktop and ~143×257 px on mobile.
- The `<Canvas>` is `pointer-events: none` and sits at `opacity-60` behind the text
  (`-z-10` inside an `isolate` section), so it never intercepts clicks or hurts
  readability.
- Two `SceneBoundary` error boundaries guard the scene: one around the whole
  `<Canvas>` (a WebGL failure must not blank the page) and one around
  `<Environment>`, which otherwise suspends the entire React tree while the HDR
  loads.

## Bundle cost

three.js is the single largest dependency — a **~985 KB** chunk that is part of the
initial payload, since `ssr: false` is not allowed in a Server Component and
`page.tsx` is one. The page itself is still statically prerendered (`/`, 15m
revalidate). Total `.next/static/chunks` is ~1.5 MB.

## Scripts

```bash
npm run dev     # dev server
npm run build   # production build
npm run lint    # eslint
```

> Note: this Next.js version enables **Cache Components**, so time-dependent values
> (e.g. the copyright year) must be wrapped in `"use cache"` to prerender safely.

# My-Portfolio
