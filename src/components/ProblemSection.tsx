import { Button } from "@/components/ui/button";
import { AlertTriangle, XCircle, DollarSign, Ban } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

const problems = [
  {
    icon: Ban,
    text: "Reprovação em auditorias da ANVISA",
  },
  {
    icon: AlertTriangle,
    text: "Perda de produtos por variação térmica",
  },
  {
    icon: DollarSign,
    text: "Prejuízos com medicamentos descartados",
  },
  {
    icon: XCircle,
    text: "Perda de certificações GMP e BPF",
  },
];

export function ProblemSection() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Seu equipamento térmico está qualificado?
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Equipamentos sem qualificação térmica podem causar:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-5 bg-destructive/5 border border-destructive/20 rounded-xl text-left"
              >
                <div className="shrink-0 w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-destructive" />
                </div>
                <span className="text-foreground font-medium">{problem.text}</span>
              </div>
            ))}
          </div>

          <Button variant="cta" size="lg" asChild>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Evite problemas → Solicite qualificação
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
