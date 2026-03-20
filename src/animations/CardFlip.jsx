import { useState, useRef } from "react";
import gsap from "gsap";

export const CardFlip = () => {
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef(null);

  const handleFlip = () => {
    gsap.to(cardRef.current, {
      rotateY: flipped ? 0 : 180,
      duration: 0.6,
      ease: "power2.inOut",
    });
    setFlipped(!flipped);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <div
        ref={cardRef}
        onClick={handleFlip}
        className="relative w-24 h-32 cursor-pointer"
        style={{ transformStyle: "preserve-3d", perspective: "600px" }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 glass rounded-xl flex items-center justify-center border border-primary/30"
          style={{ backfaceVisibility: "hidden" }}
        >
          <span className="text-2xl">🎴</span>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/50"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <span className="text-xs text-primary uppercase tracking-widest text-center px-2">
            GSAP
          </span>
        </div>
      </div>
      <p className="text-xs text-muted-foreground uppercase tracking-widest">
        Click to flip
      </p>
    </div>
  );
};