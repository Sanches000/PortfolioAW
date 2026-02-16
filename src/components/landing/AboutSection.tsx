import { Settings, Award, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="sobre" className="py-24 md:py-32">
      <div
        ref={ref}
        className={`container mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              Sobre a Empresa
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-6">
              Engenharia aplicada à <span className="text-gradient">transformação industrial</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Somos especialistas na fabricação de artefatos técnicos em borracha e silicone,
              com foco em soluções personalizadas para os mais diversos segmentos industriais.
              Nossa engenharia garante peças com alta precisão dimensional, resistência química
              e térmica, atendendo às normas técnicas mais exigentes do mercado.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Combinamos tecnologia de ponta, equipe técnica qualificada e processos rigorosos
              de controle de qualidade para entregar excelência em cada projeto.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {[
              { icon: Settings, title: "Engenharia de Precisão", desc: "Projetos desenvolvidos com tecnologia CAD/CAM e processos de moldagem avançados." },
              { icon: Award, title: "Qualidade Certificada", desc: "Controle rigoroso em todas as etapas, da matéria-prima ao produto final." },
              { icon: Users, title: "Atendimento Técnico", desc: "Equipe especializada para suporte técnico e desenvolvimento de soluções sob medida." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4 p-5 rounded-lg bg-card border border-border/50 hover:border-primary/30 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
