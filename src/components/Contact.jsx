export function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-24 border-t border-white/5">
      <h2 className="font-heading text-3xl font-semibold mb-4">Get in touch</h2>
      <p className="text-muted mb-8 max-w-md">
        Open to new roles and interesting projects. Reach out directly.
      </p>
      <a href="mailto:pauljoshuagbassig@gmail.com" className="text-accent text-xl font-mono hover:underline">
        pauljoshuagbassig@gmail.com
      </a>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="max-w-5xl mx-auto px-6 py-10 flex flex-col items-center gap-4 border-t border-border">
      <div className="flex gap-4">
        <a href="https://github.com/pjbassig" target="_blank" rel="noopener" className="hover:text-text">GitHub</a>
        <a href="https://www.linkedin.com/in/paul-joshua-bassig-47a5ab1b9/" target="_blank" rel="noopener" className="hover:text-text">LinkedIn</a>
      </div>
      <span className="text-muted text-sm">Built by Paul Joshua G. Bassig</span>
    </footer>
  );
}