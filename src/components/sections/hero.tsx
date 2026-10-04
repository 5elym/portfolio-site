import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GitBranch, Waypoints, Mail } from "lucide-react";
import ScrollHint from "../scroll-hint";
import { SiGmail, SiGithub } from "@icons-pack/react-simple-icons";

export default function Hero() {
  return (
    <>
      <main id="hero" className="relative min-h-screen text-foreground flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-8 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Hi, I&apos;m <span className="text-primary">Myles</span>.
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            I&apos;m a Full-Stack Software Engineer with experience building E2E systems both independently and in
            diverse teams.
          </p>

          <div className="flex items-center justify-center gap-4 pt-4">
            <Button size="lg">View Projects</Button>
            <Button size="lg" variant="outline">
              Contact Me
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-12 text-muted-foreground">
            <a
              href="https://github.com/5elym"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <SiGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/myles-swamy/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Waypoints size={24} />
            </a>
            <a
              href="mailto:myles.swamy@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <SiGmail size={24} />
            </a>
          </div>

          <ScrollHint />
        </motion.div>
      </main>
    </>
  );
}
