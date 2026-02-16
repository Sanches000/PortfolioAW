import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">
              <span className="text-primary">Rubber</span>Tech
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Soluções técnicas em borracha e silicone para a indústria.
              Qualidade, precisão e compromisso com a excelência.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Sobre", "Produtos", "Diferenciais", "Segmentos", "Contato"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                (11) 1234-5678
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                contato@rubbertech.com.br
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                São Paulo, SP — Brasil
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/30 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} RubberTech. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
