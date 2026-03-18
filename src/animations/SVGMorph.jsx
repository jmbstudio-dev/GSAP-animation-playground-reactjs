import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const SVGMorph = () => {
  const pathRef = useRef(null);

  useGSAP(() => {
    gsap.to(pathRef.current, {
      attr: {
        d: "M 50 10 L 90 90 L 10 90 Z",
      },
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });
  });

  return (
    <div className="flex items-center justify-center w-full h-full">
      <svg viewBox="0 0 100 100" className="w-24 h-24">
        <path
          ref={pathRef}
          d="M 50 10 C 90 10, 90 90, 50 90 C 10 90, 10 10, 50 10 Z"
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};