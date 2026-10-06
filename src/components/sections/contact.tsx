"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FileDown, Waypoints } from "lucide-react";
import { SiGithub, SiGmail } from "@icons-pack/react-simple-icons";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { globalContainerVariants, globalItemVariants } from "@/lib/framer-variants";

const socialLinks = [
  {
    label: "Email",
    address: "myles.swamy@gmail.com",
    href: "mailto:myles.swamy@gmail.com",
    icon: SiGmail,
  },
  {
    label: "LinkedIn",
    address: "linkedin.com/in/myles-swamy/",
    href: "https://www.linkedin.com/in/myles-swamy/",
    icon: Waypoints,
  },
  {
    label: "GitHub",
    address: "github.com/5elym",
    href: "https://github.com/5elym",
    icon: SiGithub,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[85vh] py-32 px-6 flex items-center text-foreground"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_1px_minmax(0,1.1fr)] gap-12 lg:gap-16 items-center">
        <motion.div
          variants={globalContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="space-y-8"
        >
          <motion.p
            variants={globalItemVariants}
            className="text-sm font-mono font-semibold tracking-widest uppercase text-primary"
          >
            [ Get in touch ]
          </motion.p>
          <motion.h2
            id="contact-heading"
            variants={globalItemVariants}
            className="text-5xl md:text-7xl font-bold tracking-tight"
          >
            Let&apos;s <span className="text-primary text-glow">Connect.</span>
          </motion.h2>
          <motion.p
            variants={globalItemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
          >
            Anything you would like to discuss? I&apos;m always open to new opportunities, or just a friendly chat.
          </motion.p>
          <motion.div variants={globalItemVariants}>
            <Button
              nativeButton={false}
              render={<a href="/CV_MYLES_SWAMY.pdf" target="_blank" rel="noopener noreferrer" />}
              variant="outline"
              size="lg"
            >
              <FileDown aria-hidden="true" />
              View my CV
              <ArrowUpRight aria-hidden="true" />
            </Button>
          </motion.div>
        </motion.div>

        <Separator orientation="vertical" aria-hidden="true" className="hidden lg:block h-full min-h-96 bg-border/70" />
        <Separator orientation="horizontal" aria-hidden="true" className="lg:hidden bg-border/70" />

        <motion.div
          variants={globalContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="space-y-8"
        >
          <motion.div variants={globalItemVariants}>
            <h3 className="text-2xl font-semibold">Find me here</h3>
            <p className="mt-2 text-muted-foreground">The easiest way to reach me is by email.</p>
          </motion.div>

          <div className="divide-y divide-border/70 border-y border-border/70">
            {socialLinks.map(({ label, address, href, icon: Icon }) => (
              <motion.a
                key={label}
                variants={globalItemVariants}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="group flex items-center gap-4 py-5 transition-colors hover:text-primary"
              >
                <Icon
                  aria-hidden="true"
                  size={22}
                  className="shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                />
                <span className="min-w-0 flex-1">
                  <span className="block text-sm text-muted-foreground">{label}</span>
                  <span className="block break-all font-medium">{address}</span>
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  size={18}
                  className="shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
