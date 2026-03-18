import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const Counter = () => {
  const numRef = useRef(null);
  const obj = useRef({ val: 0 });

  useGSAP(() => {
    gsap.to(obj.current, {
      val: 100,
      duration: 2,
      repeat: -1,
      repeatDelay: 1,
      ease: "power2.out",
      onUpdate: () => {
        if (numRef.current) {
          numRef.current.textContent = Math.round(obj.current.val);
        }
      },
    });
  });

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <span ref={numRef} className="text-6xl font-bold text-primary">
        0
      </span>
      <span className="text-xs text-muted-foreground uppercase tracking-widest">
        counting up
      </span>
    </div>
  );
};