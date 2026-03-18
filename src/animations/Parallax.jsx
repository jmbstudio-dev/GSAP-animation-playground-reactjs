import { useRef } from "react";
import gsap from "gsap";

export const Parallax = () => {
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(".parallax-back", { x: x * 20, y: y * 20, duration: 0.5 });
    gsap.to(".parallax-mid", { x: x * 40, y: y * 40, duration: 0.5 });
    gsap.to(".parallax-front", { x: x * 60, y: y * 60, duration: 0.5 });
  };

  const handleMouseLeave = () => {
    gsap.to([".parallax-back", ".parallax-mid", ".parallax-front"], {
      x: 0, y: 0, duration: 0.8, ease: "power2.out",
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full min-h-32 flex items-center justify-center cursor-none overflow-hidden"
    >
      <div className="parallax-back absolute w-16 h-16 rounded-full bg-primary/10 border border-primary/20" />
      <div className="parallax-mid absolute w-10 h-10 rounded-full bg-primary/20 border border-primary/40" />
      <div className="parallax-front absolute w-5 h-5 rounded-full bg-primary" />
    </div>
  );
};