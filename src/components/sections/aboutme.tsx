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

          <div className="text-lg md:text-xl text-muted-foreground space-y-6 leading-relaxed text-center max-w-2xl mx-auto">
            <motion.p variants={globalItemVariants}>
              I recently graduated with a First-Class degree from Sheffield University, where I built a really strong
              foundation in computer science and software engineering.
            </motion.p>
            <motion.p variants={globalItemVariants}>
              During my time there, I discovered a real passion for end-to-end development and worked on a wide variety
              of projects ranging from full-stack web applications and mobile apps to custom CLI tools.
            </motion.p>
            <motion.p variants={globalItemVariants}>
              One thing I really value is that I&apos;ve had the chance to build these both independently and as part of
              diverse, multicultural teams, where I could develop my teamworking and interpersonal skills.
            </motion.p>
            <motion.p variants={globalItemVariants}>
              Now that I&apos;ve graduated, I am looking to bring my technical skills to a professional environment
              where I can help build secure, scalable systems, learn from experienced engineers, and continue to grow as
              a software engineer.
            </motion.p>
          </div>
        </motion.div>
      </section>
    </>
  );
}
