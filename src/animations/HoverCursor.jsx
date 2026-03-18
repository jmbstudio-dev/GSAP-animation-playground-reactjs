import { useEffect, useRef } from "react";
import gsap from "gsap";

export const HoverCursor = () => {
  const cursorRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const cursor = cursorRef.current;

    const move = (e) => {
      const rect = container.getBoundingClientRect();
      gsap.to(cursor, {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    const grow = () => gsap.to(cursor, { scale: 2.5, duration: 0.3 });
    const shrink = () => gsap.to(cursor, { scale: 1, duration: 0.3 });

    container.addEventListener("mousemove", move);
    container.querySelectorAll(".hoverable").forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      container.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-32 flex items-center justify-center gap-6 cursor-none overflow-hidden"
    >
      <div
        ref={cursorRef}
        className="pointer-events-none absolute w-4 h-4 rounded-full bg-primary/70 -translate-x-1/2 -translate-y-1/2 z-10"
        style={{ top: 0, left: 0 }}
      />
      {["Hover", "Over", "Me"].map((word, i) => (
        <span
          key={i}
          className="hoverable text-sm text-muted-foreground hover:text-primary transition-colors cursor-none"
        >
          {word}
        </span>
      ))}
    </div>
  );
};