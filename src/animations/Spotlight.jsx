import { useRef, useEffect } from "react";
import gsap from "gsap";

export const Spotlight = () => {
  const containerRef = useRef(null);
  const spotRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const spot = spotRef.current;

    const move = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      gsap.to(spot, {
        x,
        y,
        duration: 0.15,
        ease: "power2.out",
      });
    };

    const show = () => gsap.to(spot, { opacity: 1, duration: 0.3 });
    const hide = () => gsap.to(spot, { opacity: 0, duration: 0.3 });

    container.addEventListener("mousemove", move);
    container.addEventListener("mouseenter", show);
    container.addEventListener("mouseleave", hide);

    return () => {
      container.removeEventListener("mousemove", move);
      container.removeEventListener("mouseenter", show);
      container.removeEventListener("mouseleave", hide);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-32 rounded-xl overflow-hidden glass cursor-none flex items-center justify-center"
    >
      {/* SPOTLIGHT */}
      <div
        ref={spotRef}
        className="pointer-events-none absolute opacity-0 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "120px",
          height: "120px",
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--color-primary) 25%, transparent) 0%, transparent 70%)",
          borderRadius: "50%",
          top: 0,
          left: 0,
        }}
      />

      {/* TEXT */}
      <p className="text-xs text-muted-foreground uppercase tracking-widest pointer-events-none select-none">
        Move cursor here
      </p>
    </div>
  );
};