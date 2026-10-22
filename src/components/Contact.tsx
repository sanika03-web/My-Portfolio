import { profile } from "@/data/portfolio";

async function getCurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

export default async function Contact() {
  const year = await getCurrentYear();
  const [primary, ...secondary] = profile.socials;

  return (
    <>
      <section id="contact" className="bg-alt px-6 py-32 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[32px] border border-ink/10 bg-card px-8 py-16 text-ink shadow-[0_8px_30px_rgb(44,38,35,0.05)] md:px-16 md:py-24">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-ink/70">
              Contact
            </p>
            <h2 className="mt-8 max-w-3xl text-4xl font-medium leading-[1] tracking-[-0.04em] text-ink md:text-7xl">
              Let&apos;s build
              <br />
              something that matters.
            </h2>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-ink/70">
              Open to internships, collaborations, and hackathons — or a project
              you&apos;ve been meaning to start.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <a
                href={primary.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-sm font-medium text-ink shadow-[0_8px_30px_rgb(44,38,35,0.06)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                {primary.label}
              </a>
              {secondary.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-full border border-ink/15 px-8 py-4 text-sm font-medium text-ink transition-colors duration-300 hover:border-accent hover:text-accent-deep"
                >
                  {social.label}
                </a>
              ))}
            </div>

            <p className="mt-8 text-sm text-ink/70">
              or email me at{" "}
              <a
                href={`mailto:${profile.email}`}
                className="text-accent-deep underline decoration-accent-deep/30 underline-offset-4 transition-colors duration-300 hover:decoration-accent-deep"
              >
                {profile.email}
              </a>
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-ink/[0.08] bg-canvas px-6 py-12 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink/70">
            © {year} {profile.name}. All rights reserved.
          </p>

          <ul className="flex items-center gap-7">
            {profile.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-ink/70 transition-colors duration-300 hover:text-accent-deep"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#top"
            className="text-sm text-ink/70 transition-colors duration-300 hover:text-accent-deep"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </>
  );
}
