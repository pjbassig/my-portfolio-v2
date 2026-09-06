import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="font-heading text-3xl font-semibold mb-12">Projects</h2>
      <div className="flex flex-col gap-20">
        {projects.map((p, i) => (
          <div
            key={p.title}
            className={`grid md:grid-cols-2 gap-8 items-center ${
              i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <img
              src={p.image}
              alt={p.title}
              className="rounded-lg border border-white/5 w-full aspect-video object-cover"
            />
            <div>
              <h3 className="font-heading text-xl font-semibold mb-3">{p.title}</h3>
              <p className="text-muted mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tech.map((t) => (
                  <span key={t} className="font-mono text-xs px-2 py-1 rounded bg-surface border border-white/5 text-muted">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-sm">
                <a href={p.liveUrl} target="_blank" rel="noopener" className="text-accent hover:underline">More details</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}