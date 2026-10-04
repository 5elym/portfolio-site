import { motion } from "framer-motion";
import { globalContainerVariants, globalItemVariants } from "@/lib/framer-variants";

export default function AboutMe() {
  return (
    <>
      <section id="about" className="min-h-screen py-32 px-6 flex flex-col items-center justify-center text-foreground">
        <motion.div
          variants={globalContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <motion.h2 className="text-5xl md:text-7xl font-bold tracking-tight">
            About <span className="text-primary">Me</span>
          </motion.h2>

          <div className="text-lg md:text-xl text-muted-foreground space-y-6 leading-relaxed text-left max-w-2xl mx-auto">
            <motion.p variants={globalItemVariants}>
              I am a passionate Frontend Developer who loves bridging the gap between design and engineering. I
              specialize in building responsive, accessible, and fast web applications using modern technologies.
            </motion.p>
            <motion.p variants={globalItemVariants}>
              When I&apos;m not coding, you can find me exploring new UI trends, contributing to open-source, or
              figuring out how to make animations feel just a little bit smoother.
            </motion.p>
          </div>
        </motion.div>
      </section>
    </>
  );
}
