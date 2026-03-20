import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const Wave = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.to(".wave-bar", {
      scaleY: 2.5,
      duration: 0.4,
      ease: "sine.inOut",
      stagger: {
        each: 0.08,
        repeat: -1,
        yoyo: true,
      },
    });
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center gap-1.5 h-full"
    >
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="wave-bar w-2 rounded-full bg-primary/70"
          style={{
            height: "24px",
            transformOrigin: "center",
          }}
        />
      ))}
    </div>
  );
};