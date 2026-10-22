import About from "@/components/About";
import Contact from "@/components/Contact";
import HeroCanvas from "@/components/HeroCanvas";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import { profile } from "@/data/portfolio";

export default function Home() {
  return (
    <main id="top">
      <Navbar />

      {/* ------------------------------------------------------------------
          Hero
      ------------------------------------------------------------------ */}
      <section className="relative isolate flex min-h-screen flex-col items-center justify-center bg-canvas px-6 pb-28 pt-36 text-center">
        {/* Procedural 3D backdrop — sits behind the hero copy. */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 h-screen w-full"
          aria-hidden="true"
        >
          <HeroCanvas />
        </div>

        <div className="mx-auto flex max-w-6xl flex-col items-center">
          <p
            className="animate-rise text-xs font-medium uppercase tracking-[0.25em] text-ink/70"
            style={{ animationDelay: "60ms" }}
          >
            {profile.name} — {profile.role}
          </p>

          <h1
            className="animate-rise mt-8 text-[clamp(3.25rem,13vw,11rem)] font-medium leading-[0.86] tracking-[-0.05em] text-ink"
            style={{ animationDelay: "140ms" }}
          >
            Solving real{" "}
            <br />
            problems.
          </h1>

          <p
            className="animate-rise mt-12 max-w-xl text-pretty text-lg leading-relaxed text-ink/70"
            style={{ animationDelay: "220ms" }}
          >
            {profile.hero}
          </p>

          <div
            className="animate-rise mt-14 flex flex-col items-center gap-4 sm:flex-row"
            style={{ animationDelay: "300ms" }}
          >
            <a
              href="#work"
              className="rounded-full bg-accent px-9 py-4 text-sm font-medium text-ink shadow-[0_8px_30px_rgb(44,38,35,0.06)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Selected work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-ink/15 px-9 py-4 text-sm font-medium text-ink transition-colors duration-300 hover:border-ink/30 hover:bg-ink/[0.03]"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-10 flex flex-col items-center gap-4">
          <span className="text-[11px] uppercase tracking-[0.22em] text-ink/70">
            Scroll
          </span>
          <span aria-hidden="true" className="h-12 w-px bg-ink/15" />
        </div>
      </section>

      {/* ------------------------------------------------------------------
          Sections
      ------------------------------------------------------------------ */}
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
