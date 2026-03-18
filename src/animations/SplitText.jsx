import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const SplitText = () => {
  const containerRef = useRef(null);
  const words = ["Motion", "Brings", "Life"];

  useGSAP(() => {
    gsap.from(".split-word", {
      opacity: 0,
      y: 60,
      skewY: 5,
      duration: 0.6,
      stagger: 0.15,
      ease: "power4.out",
      repeat: -1,
      repeatDelay: 2,
      yoyo: true,
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="flex flex-col items-center justify-center gap-1 overflow-hidden">
      {words.map((word, i) => (
        <div key={i} className="overflow-hidden">
          <span className="split-word text-xl font-bold text-primary inline-block">
            {word}
          </span>
        </div>
      ))}
    </div>
  );
};