"use client";

import { useEffect, useRef } from "react";

export default function Background() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!containerRef.current) return;

      // Get mouse coordinates
      const { clientX, clientY } = e;

      // Update CSS variables on the container
      containerRef.current.style.setProperty("--x", `${clientX}px`);
      containerRef.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <>
      <div ref={containerRef} className="fixed inset-0 z-[-1] pointer-events-none bg-background">
        {/* Slightly visible grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='55' viewBox='0 0 32 55' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='16' cy='18' r='1.5' fill='rgba(255, 255, 255, 0.15)'/%3E%3Ccircle cx='32' cy='46' r='1.5' fill='rgba(255, 255, 255, 0.15)'/%3E%3Ccircle cx='0' cy='46' r='1.5' fill='rgba(255, 255, 255, 0.15)'/%3E%3C/svg%3E")`,
            backgroundSize: "32px 55px",
          }}
        />

        {/* Highlighted grid, mostly hidden */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='55' viewBox='0 0 32 55' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='16' cy='18' r='1.5' fill='rgba(239, 68, 68, 0.3)'/%3E%3Ccircle cx='32' cy='46' r='1.5' fill='rgba(239, 68, 68, 0.3)'/%3E%3Ccircle cx='0' cy='46' r='1.5' fill='rgba(239, 68, 68, 0.3)'/%3E%3C/svg%3E")`,
            backgroundSize: "32px 55px",
            // Torch effect
            maskImage: `radial-gradient(200px circle at var(--x, 50%) var(--y, 50%), black, transparent)`,
            WebkitMaskImage: `radial-gradient(200px circle at var(--x, 50%) var(--y, 50%), black, transparent)`,
          }}
        />

        {/* Soft red glow */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(200px circle at var(--x, 50%) var(--y, 50%), rgba(239, 68, 68, 0.08), transparent)`,
          }}
        />
      </div>
    </>
  );
}
