import { projects, type Project } from "@/data/portfolio";
import SpotlightCard from "@/components/SpotlightCard";

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4.5 11.5L11.5 4.5M6 4.5h5.5V10"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <SpotlightCard className="group flex h-full flex-col rounded-[28px] border border-ink/10 bg-card text-ink shadow-[0_8px_30px_rgb(44,38,35,0.05)] transition-[transform,border-color] duration-500 ease-out hover:-translate-y-1.5 hover:border-ink/20">
      <article className="flex min-h-[28rem] flex-1 flex-col justify-between p-8 md:p-9">
        <div className="flex items-start justify-between">
          <span aria-hidden="true" className="text-xs tracking-[0.22em] text-ink/50">
            {project.index}
          </span>
          <span className="rounded-full border border-ink/10 px-3 py-1 text-[11px] tracking-wide text-ink/70">
            {project.category}
          </span>
        </div>

        <div className="mt-20">
          <h3 className="text-[2rem] font-medium leading-[1.05] tracking-[-0.03em] md:text-[2.25rem]">
            {project.title}
          </h3>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink/70">
            {project.description}
          </p>
        </div>

        <div className="mt-12 flex items-end justify-between gap-6">
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((tool) => (
              <li
                key={tool}
                className="rounded-full border border-ink/10 px-3 py-1 text-[11px] tracking-wide text-ink/70"
              >
                {tool}
              </li>
            ))}
          </ul>

          <span
            aria-hidden="true"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/10 text-ink/55 transition-[transform,background-color,color] duration-500 ease-out group-hover:-translate-y-0.5 group-hover:bg-accent group-hover:text-ink"
          >
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </article>
    </SpotlightCard>
  );
}

export default function Projects() {
  return (
    <section id="work" className="bg-alt px-6 py-32 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-ink/70">
              Selected work
            </p>
            <h2 className="mt-6 max-w-2xl text-4xl font-medium leading-[1.02] tracking-[-0.035em] text-ink md:text-6xl">
              Projects built
              <br />
              to solve problems.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink/70">
            Three builds, each started with a real problem — waste on city
            streets, personal safety, and the livelihoods of artisans.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
