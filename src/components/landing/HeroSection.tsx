import { MessageSquare, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useParallax } from "@/hooks/use-parallax";

const HeroSection = () => {
  const y = useParallax(0.4);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${y}px)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background" />
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, hsl(24 94% 53% / 0.15) 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, hsl(24 94% 53% / 0.1) 0%, transparent 40%),
                              repeating-linear-gradient(0deg, transparent, transparent 50px, hsl(0 0% 100% / 0.02) 50px, hsl(0 0% 100% / 0.02) 51px)`,
          }}
        />
      </div>

      {/* Diagonal accent line */}
      <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0 z-10" />

      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <div className="inline-block mb-6 px-4 py-1.5 border border-primary/30 rounded-full">
          <span className="text-sm font-medium text-primary tracking-wider uppercase">
            Engenharia de Precisão
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6">
          Soluções Técnicas em{" "}
          <span className="text-gradient">Borracha e Silicone</span>{" "}
          para a Indústria
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Projetos sob medida com alta resistência, precisão e durabilidade.
          Tecnologia industrial que garante performance em ambientes extremos.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-base px-8 py-6 font-semibold">
            <FileText className="mr-2" size={20} />
            Solicitar Orçamento
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8 py-6 font-semibold border-primary/30 hover:bg-primary/10">
            <MessageSquare className="mr-2" size={20} />
            Falar no WhatsApp
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
