import { useRef } from "react";
import gsap from "gsap";

export const RippleEffect = () => {
  const containerRef = useRef(null);

  const handleClick = (e) => {
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple = document.createElement("div");
    ripple.style.cssText = `
      position: absolute;
      left: ${x}px;
      top: ${y}px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--color-primary);
      transform: translate(-50%, -50%) scale(0);
      opacity: 0.6;
      pointer-events: none;
    `;
    container.appendChild(ripple);

    gsap.to(ripple, {
      scale: 15,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      onComplete: () => ripple.remove(),
    });
  };

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      className="relative w-full h-full min-h-32 flex items-center justify-center glass rounded-xl overflow-hidden cursor-pointer"
    >
      <p className="text-xs text-muted-foreground uppercase tracking-widest pointer-events-none">
        Click anywhere
      </p>
    </div>
  );
};