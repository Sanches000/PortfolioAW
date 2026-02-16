import { useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useParallax } from "@/hooks/use-parallax";

const stats = [
  { value: 25, suffix: "+", label: "Anos de Experiência" },
  { value: 3000, suffix: "+", label: "Projetos Entregues" },
  { value: 500, suffix: "+", label: "Clientes Ativos" },
  { value: 27, suffix: "", label: "Estados Atendidos" },
];

function AnimatedCounter({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target]);

  return (
    <span className="text-4xl md:text-5xl font-heading font-bold text-gradient">
      {count.toLocaleString("pt-BR")}{suffix}
    </span>
  );
}

const StatsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const y = useParallax(0.15);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${y}px)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 100px, hsl(24 94% 53% / 0.1) 100px, hsl(24 94% 53% / 0.1) 101px)`,
          }}
        />
      </div>

      <div ref={ref} className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map(({ value, suffix, label }) => (
            <div key={label} className="text-center">
              <AnimatedCounter target={value} suffix={suffix} active={isVisible} />
              <p className="mt-2 text-sm text-muted-foreground font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
