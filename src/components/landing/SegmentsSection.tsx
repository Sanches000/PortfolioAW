import { Car, Wheat, Building2, Factory, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const segments = [
  { icon: Car, title: "Automotiva" },
  { icon: Wheat, title: "Agronegócio" },
  { icon: Building2, title: "Construção Civil" },
  { icon: Factory, title: "Equipamentos Industriais" },
  { icon: Zap, title: "Energia" },
];

const SegmentsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="segmentos" className="py-24 md:py-32 bg-secondary/30">
      <div ref={ref} className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Atuação
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3">
            Segmentos <span className="text-gradient">Atendidos</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {segments.map(({ icon: Icon, title }, i) => (
            <div
              key={title}
              className={`group flex flex-col items-center p-8 rounded-xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 80}ms` : "0ms" }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon className="text-primary" size={30} />
              </div>
              <h3 className="font-heading font-semibold text-sm text-center">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SegmentsSection;
