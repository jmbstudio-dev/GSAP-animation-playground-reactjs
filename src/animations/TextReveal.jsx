import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const TextReveal = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".char", {
      opacity: 0,
      y: 50,
      rotateX: -90,
      duration: 0.5,
      stagger: 0.05,
      ease: "back.out(1.7)",
      repeat: -1,
      repeatDelay: 2,
      yoyo: true,
    });
  }, { scope: containerRef });

  const text = "GSAP";

  return (
    <div ref={containerRef} className="flex items-center justify-center gap-1">
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="char text-4xl font-bold text-primary inline-block"
        >
          {char}
        </span>
      ))}
    </div>
  );
};