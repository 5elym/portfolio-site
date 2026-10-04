import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Waypoints } from "lucide-react";
import ScrollHint from "../scroll-hint";
import { SiGmail, SiGithub } from "@icons-pack/react-simple-icons";
import WireframeCanvas from "../3d/wireframe-canvas";

export default function Hero() {
  return (
    <main id="hero" className="relative min-h-screen text-foreground flex flex-col justify-center p-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }} // slide in from the left
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-8 text-center lg:text-left z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Hi, I&apos;m <span className="text-primary text-glow">Myles</span>.
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
            I&apos;m a Full-Stack Software Engineer with experience building E2E systems both independently and in
            diverse teams.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-3 pt-4">
            <Button size="lg">View Projects</Button>
            <Button size="lg" variant="outline">
              Contact Me
            </Button>

            <div className="ml-10 flex items-center gap-4 text-muted-foreground">
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
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative z-10 flex justify-center lg:justify-end w-full"
        >
          <WireframeCanvas />
        </motion.div>
      </div>

      <ScrollHint />
    </main>
  );
}
