import { useRef, useState } from "react";
import gsap from "gsap";

const pages = [
  { label: "Page One", color: "bg-primary/10" },
  { label: "Page Two", color: "bg-surface" },
  { label: "Page Three", color: "bg-card" },
];

export const PageTransition = () => {
  const [current, setCurrent] = useState(0);
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  const goTo = (idx) => {
    if (idx === current) return;
    const tl = gsap.timeline();
    tl.to(overlayRef.current, { scaleX: 1, duration: 0.4, ease: "power2.inOut", transformOrigin: "left" })
      .call(() => setCurrent(idx))
      .to(overlayRef.current, { scaleX: 0, duration: 0.4, ease: "power2.inOut", transformOrigin: "right" });
  };

  return (
    <div className="relative w-full min-h-32 overflow-hidden rounded-xl">
      <div
        className={`w-full h-full min-h-32 flex items-center justify-center ${pages[current].color} transition-none`}
      >
        <span ref={contentRef} className="text-sm text-primary font-bold uppercase tracking-widest">
          {pages[current].label}
        </span>
      </div>

      <div
        ref={overlayRef}
        className="absolute inset-0 bg-primary/30 scale-x-0"
        style={{ transformOrigin: "left" }}
      />

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {pages.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              current === i ? "bg-primary" : "bg-muted-foreground/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};