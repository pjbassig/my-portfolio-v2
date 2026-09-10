import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-24 border-t border-border">
      <Reveal>
        <h2 className="font-heading text-3xl font-semibold mb-12">About</h2>
      </Reveal>

      <div className="grid md:grid-cols-[280px_1fr] gap-10 items-start">
        <Reveal>
          <div className="rounded-lg overflow-hidden border border-border aspect-square">
            <img
              src="/images/profile.png"
              alt="Paul Bassig"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="text-muted text-lg leading-relaxed">
            Strong background in low-code development, hands-on technical support experience,
            and a problem-solving mindset focused on delivering efficient, user-centric
            solutions — that's what I possess as an OutSystems Developer who builds robust,
            high-performing applications.
          </p>
          <p className="text-muted text-lg leading-relaxed mt-4">
            Based in Singapore, originally from the Philippines. Currently working toward
            certifications to keep pushing my skills further.
          </p>
        </Reveal>
      </div>
    </section>
  );
}