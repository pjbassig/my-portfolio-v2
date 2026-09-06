import { motion } from "framer-motion";
import Carousel from "./Carousel";

const eventPhotos = [
  "/images/event/event1.jpg",
  "/images/event/event2.jpg",
  "/images/event/event3.jpg",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background carousel */}
      <div className="absolute inset-0 z-0">
        <Carousel images={eventPhotos} />
        <div className="absolute inset-0 bg-bg/85" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-20 pb-24 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-accent font-mono text-sm mb-4">Available for new roles</p>
          <h1 className="font-heading text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Paul, an OutSystems developer building reliable software.
          </h1>
          <p className="text-muted text-lg mb-8 max-w-md">
          OutSystems Developer with a strong background in low-code development and a 
          proven ability to deliver robust, high-performing applications. With hands-on 
          technical support experience, I bring a problem-solving mindset and a strong focus on 
          delivering efficient, user-centric solutions.
          </p>
          <div className="flex gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="px-5 py-3 rounded-md bg-accent text-bg font-medium shadow-[0_0_20px_rgba(94,234,212,0.3)]"
            >
              View my work
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.4)" }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="px-5 py-3 rounded-md border border-white/10"
            >
              Get in touch
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="bg-surface/90 backdrop-blur border border-border rounded-lg p-6 font-mono text-sm"
        >
          <div className="flex gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-border" />
            <span className="w-3 h-3 rounded-full bg-border" />
            <span className="w-3 h-3 rounded-full bg-border" />
          </div>
          <p><span className="text-accent">$</span> whoami</p>
          <p className="text-muted mt-1">Paul — OutSystems Developer</p>
          <p className="mt-3"><span className="text-accent">$</span> stack</p>
          <p className="text-muted mt-1">OutSystems · React · JavaScript · SQL</p>
          <p className="mt-3"><span className="text-accent">$</span> location</p>
          <p className="text-muted mt-1">Singapore</p>
        </motion.div>
      </div>
    </section>
  );
}