export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-20 pb-24 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <p className="text-accent font-mono text-sm mb-4">Available for new roles</p>
        <h1 className="font-heading text-4xl md:text-5xl font-semibold leading-tight mb-6">
          Paul, an OutSystems developer building reliable software.
        </h1>
        <p className="text-muted text-lg mb-8 max-w-md">
          OutSystems Developer with a strong background in low-code development and a proven ability to deliver robust, high-performing applications. With hands-on technical support experience, I bring a problem-solving mindset and a strong focus on delivering efficient, user-centric solutions.
        </p>
        <div className="flex gap-4">
          <a href="#projects" className="px-5 py-3 rounded-md bg-accent text-bg font-medium hover:opacity-90 transition-opacity">
            View my work
          </a>
          <a href="#contact" className="px-5 py-3 rounded-md border border-white/10 hover:border-white/30 transition-colors">
            Get in touch
          </a>
        </div>
      </div>

      <div className="bg-surface border border-white/5 rounded-lg p-6 font-mono text-sm">
        <div className="flex gap-2 mb-4">
          <span className="w-3 h-3 rounded-full bg-white/10" />
          <span className="w-3 h-3 rounded-full bg-white/10" />
          <span className="w-3 h-3 rounded-full bg-white/10" />
        </div>
        <p><span className="text-accent">$</span> whoami</p>
        <p className="text-muted mt-1">Paul — OutSystems Developer</p>
        <p className="mt-3"><span className="text-accent">$</span> cat stack.txt</p>
        <p className="text-muted mt-1">OutSystems · React · JavaScript · SQL</p>
        <p className="mt-3"><span className="text-accent">$</span> location</p>
        <p className="text-muted mt-1">Singapore</p>
        <p className="mt-3"><span className="text-accent">$</span> <span className="animate-pulse">_</span></p>
      </div>
    </section>
  );
}