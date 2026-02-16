import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
          Precisa de uma solução técnica{" "}
          <span className="text-gradient">sob medida</span>?
        </h2>
        <p className="text-lg text-muted-foreground mb-10">
          Entre em contato com nossa equipe técnica e receba um orçamento personalizado
          para o seu projeto industrial.
        </p>
        <a href="https://api.whatsapp.com/send/?phone=5541999443014&text=Olá%21+Gostaria+de+realizar+um+orçamento+para+o+meu+projeto.&type=phone_number&app_absent=0">
          <Button size="lg" className="text-base px-10 py-7 font-bold text-lg">
            <FileText className="mr-2" size={22} />
              Solicitar Orçamento Agora
          </Button>  
        </a>
      </div>
    </section>
  );
};

export default CTASection;
