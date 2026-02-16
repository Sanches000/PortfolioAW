import { Ruler, FlaskConical, Thermometer, ShieldCheck, Truck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const differentials = [
  { icon: Ruler, title: "Produção Sob Medida", desc: "Peças projetadas conforme especificações técnicas do cliente." },
  { icon: FlaskConical, title: "Resistência Química", desc: "Materiais compatíveis com ácidos, solventes e fluidos agressivos." },
  { icon: Thermometer, title: "Resistência Térmica", desc: "Operação segura em faixas de -60°C a +300°C." },
  { icon: ShieldCheck, title: "Controle de Qualidade", desc: "Inspeção dimensional e ensaios em cada lote produzido." },
  { icon: Truck, title: "Entrega Nacional", desc: "Logística ágil com entrega para todo o território brasileiro." },
];

const DifferentialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="diferenciais" className="py-24 md:py-32">
      <div ref={ref} className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Por que nos escolher
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3">
            Diferenciais <span className="text-gradient">Técnicos</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {differentials.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`text-center transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 80}ms` : "0ms" }}
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors">
                <Icon className="text-primary" size={30} />
              </div>
              <h3 className="font-heading font-semibold text-sm mb-2">{title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
