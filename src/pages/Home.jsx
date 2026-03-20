import AnimationCard from "../components/AnimationCard";
import { Stagger } from "../animations/Stagger";
import { TextReveal } from "../animations/TextReveal";
import { ScrollTriggerDemo } from "../animations/ScrollTriggerDemo";
import { MagneticButton } from "../animations/MagneticButton";
import { RippleEffect } from "../animations/RippleEffect";
import { Timeline } from "../animations/Timeline";
import { Parallax } from "../animations/Parallax";
import { SVGMorph } from "../animations/SVGMorph";
import { Counter } from "../animations/Counter";
import { SplitText } from "../animations/SplitText";
import { HoverCursor } from "../animations/HoverCursor";
import { PageTransition } from "../animations/PageTransition";
import { CardFlip } from "../animations/CardFlip";
import { Spotlight } from "../animations/Spotlight";
import { Wave } from "../animations/Wave";
import { animationList } from "../data/animations";
import { Github } from "lucide-react";

const components = {
  "stagger": <Stagger />,
  "text-reveal": <TextReveal />,
  "scroll-trigger": <ScrollTriggerDemo />,
  "magnetic": <MagneticButton />,
  "ripple": <RippleEffect />,
  "timeline": <Timeline />,
  "parallax": <Parallax />,
  "svg-morph": <SVGMorph />,
  "counter": <Counter />,
  "split-text": <SplitText />,
  "hover-cursor": <HoverCursor />,
  "page-transition": <PageTransition />,
  "card-flip": <CardFlip />,
  "spotlight": <Spotlight />,
  "wave": <Wave />,
};

export default function Home() {
  return (
    <main className="min-h-screen py-20 px-8">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            GSAP <span className="text-primary">Animations</span>
          </h1>
          <p className="text-muted-foreground text-sm">
            A showcase of GSAP animation techniques built with React.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {animationList.map((anim) => (
            <AnimationCard
              key={anim.id}
              title={anim.title}
              description={anim.description}
            >
              {components[anim.id]}
            </AnimationCard>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://github.com/jmbstudio-dev/GSAP-animation-playground-reactjs"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-4 h-4" />
            View source on GitHub
          </a>
        </div>

      </div>
    </main>
  );
}