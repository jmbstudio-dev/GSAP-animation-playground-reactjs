import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const Stagger = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".stagger-box", {
      opacity: 0,
      y: 40,
      scale: 0.8,
      duration: 0.5,
      stagger: 0.1,
      ease: "back.out(1.7)",
      repeat: -1,
      repeatDelay: 1.5,
      yoyo: true,
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="flex items-center justify-center gap-3">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="stagger-box w-8 h-8 rounded-lg bg-primary/50 border border-primary/30"
        />
      ))}
    </div>
  );
};