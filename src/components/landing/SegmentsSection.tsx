import { Car, Wrench, Shapes, Factory, Truck, Armchair } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useState } from "react";

import automotiva1 from "@/assets/segments/garrapneu.png";
import automotiva2 from "@/assets/segments/vedacaojunta.png";
import moveleira1 from "@/assets/segments/roldanarolete.png";
import moveleira2 from "@/assets/segments/sapata.png";
import coxins1 from "@/assets/segments/coximgerador.png";
import coxins2 from "@/assets/segments/coximgeral.png";
import industrial1 from "@/assets/segments/protetoreixo.png";
import industrial2 from "@/assets/segments/revestimentoeixo.png";
import logistica1 from "@/assets/segments/batentedoca.png";
import logistica2 from "@/assets/segments/clip.png";
import diversos1 from "@/assets/segments/diversos-1.png";

const segments = [
  {
    icon: Car,
    title: "Automotiva",
    photos: [automotiva1, automotiva2],
    captions: ["Garras de pneu", "O-rings e vedações"],
  },
  {
    icon: Armchair,
    title: "Moveleira",
    photos: [moveleira1, moveleira2 ],
    captions: ["Roldanas e roletes", "Sapatas emborrachadas"],
  },
  {
    icon: Wrench,
    title: "Coxins",
    photos: [coxins1, coxins2],
    captions: ["Coxim para gerador de energia", "Coxins para diversos usos"],
  },
  {
    icon: Factory,
    title: "Industrial",
    photos: [industrial1, industrial2],
    captions: ["Protetores de eixo", "Rolos e revestimento de eixos"],
  },
  {
    icon: Truck,
    title: "Logística",
    photos: [logistica1, logistica2],
    captions: ["Batentes", "Encostos"],
  },
  {
    icon: Shapes,
    title: "Diversos",
    photos: [diversos1],
    captions: ["Peças customizadas em silicone, borracha e poliuretano"],
  },
];

const SegmentsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeSegment, setActiveSegment] = useState(0);

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

        {/* Segment tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {segments.map(({ icon: Icon, title }, i) => (
            <button
              key={title}
              onClick={() => setActiveSegment(i)}
              className={`group flex flex-col items-center p-6 rounded-xl border transition-all duration-500 hover:-translate-y-1 cursor-pointer ${
                activeSegment === i
                  ? "bg-primary/10 border-primary/50 shadow-lg shadow-primary/10"
                  : "bg-card border-border/50 hover:border-primary/40"
              } ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 80}ms` : "0ms" }}
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-3 transition-colors ${
                  activeSegment === i ? "bg-primary/20" : "bg-primary/10 group-hover:bg-primary/20"
                }`}
              >
                <Icon className="text-primary" size={26} />
              </div>
              <h3 className="font-heading font-semibold text-sm text-center">{title}</h3>
            </button>
          ))}
        </div>

        {/* Photo gallery for active segment */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: isVisible ? "500ms" : "0ms" }}
        >
          <div className="flex items-center gap-3 mb-6">
            {(() => {
              const ActiveIcon = segments[activeSegment].icon;
              return <ActiveIcon className="text-primary" size={22} />;
            })()}
            <h3 className="font-heading font-semibold text-lg">
              {segments[activeSegment].title}
            </h3>
          </div>

          <div
            key={activeSegment}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in"
          >
            {segments[activeSegment].photos.map((photo, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={photo}
                    alt={segments[activeSegment].captions[i]}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                  <span className="text-sm font-medium text-foreground">
                    {segments[activeSegment].captions[i]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SegmentsSection;
