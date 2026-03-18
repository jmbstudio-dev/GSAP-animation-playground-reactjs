import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const ScrollTriggerDemo = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".scroll-box", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      x: -50,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="flex flex-col gap-2 w-full px-4">
      {["Scroll", "Trigger", "Demo"].map((word, i) => (
        <div
          key={i}
          className="scroll-box glass px-4 py-2 rounded-lg text-sm text-primary text-center"
        >
          {word}
        </div>
      ))}
    </div>
  );
};