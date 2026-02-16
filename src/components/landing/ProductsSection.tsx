import { Cog, Shield, Puzzle, Layers, Flame } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const products = [
  {
    icon: Cog,
    title: "Peças Técnicas Moldadas",
    desc: "Componentes moldados por compressão, transferência e injeção com precisão dimensional e repetibilidade.",
  },
  {
    icon: Shield,
    title: "Vedações Industriais",
    desc: "O-rings, retentores, juntas e vedações customizadas para ambientes de alta pressão e temperatura.",
  },
  {
    icon: Puzzle,
    title: "Componentes Personalizados",
    desc: "Desenvolvimento sob medida para aplicações específicas, do protótipo à produção em série.",
  },
  {
    icon: Layers,
    title: "Revestimentos Especiais",
    desc: "Revestimentos em borracha e silicone para rolos, cilindros e superfícies industriais.",
  },
  {
    icon: Flame,
    title: "Silicone de Alta Resistência",
    desc: "Peças em silicone para ambientes com temperaturas extremas e exigências sanitárias rigorosas.",
  },
];

const ProductsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="produtos" className="py-24 md:py-32 bg-secondary/30">
      <div ref={ref} className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Portfólio
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3">
            Nossos <span className="text-gradient">Produtos</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`group relative p-6 rounded-xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : "0ms" }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <Icon className="text-primary" size={28} />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-3">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary/0 via-primary to-primary/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
