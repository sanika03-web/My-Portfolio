import { capabilities, profile } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="bg-canvas px-6 py-32 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-ink/70">
              About
            </p>
            <h2 className="mt-6 text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-ink md:text-5xl">
              Student today.
              <br />
              Builder tomorrow.
            </h2>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <p className="text-lg leading-relaxed text-ink/75">{profile.bio}</p>

            <p className="mt-10 border-l border-accent pl-6 text-base leading-relaxed text-ink/70">
              {profile.aim}
            </p>

            <dl className="mt-12 grid gap-8 sm:grid-cols-3">
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-ink/70">
                  Education
                </dt>
                <dd className="mt-2 text-sm text-ink">{profile.education}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-ink/70">
                  Year
                </dt>
                <dd className="mt-2 text-sm text-ink">{profile.yearOfStudy}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-ink/70">
                  Availability
                </dt>
                <dd className="mt-2 text-sm text-ink">{profile.availability}</dd>
              </div>
            </dl>
          </div>
        </div>

        <ul className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <li
              key={capability}
              className="bg-canvas px-6 py-5 text-sm tracking-[-0.01em] text-ink/75"
            >
              {capability}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
