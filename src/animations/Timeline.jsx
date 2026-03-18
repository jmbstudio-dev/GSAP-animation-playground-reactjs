import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const Timeline = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    tl.from(".tl-circle", { scale: 0, opacity: 0, duration: 0.4, ease: "back.out(2)" })
      .to(".tl-circle", { x: 60, duration: 0.5, ease: "power2.inOut" })
      .to(".tl-circle", { backgroundColor: "var(--color-primary)", scale: 1.3, duration: 0.3 })
      .to(".tl-circle", { y: -40, duration: 0.4, ease: "power2.out" })
      .to(".tl-circle", { y: 0, duration: 0.4, ease: "bounce.out" })
      .to(".tl-circle", { x: 0, scale: 1, backgroundColor: "transparent", duration: 0.5, ease: "power2.inOut" });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="flex items-center justify-center w-full h-full">
      <div
        className="tl-circle w-10 h-10 rounded-full border-2 border-primary"
      />
    </div>
  );
};