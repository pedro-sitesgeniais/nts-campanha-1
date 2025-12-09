import { Check } from "lucide-react";

const differentials = [
  "Laboratório Acreditado RBC pelo CGCRE/INMETRO",
  "Equipe técnica especializada em validação",
  "Relatórios técnicos completos para auditoria",
  "Conformidade ANVISA, GMP e BPF",
  "Descontos exclusivos para associados ANFARMAG",
  "Atendimento ágil com suporte dedicado",
];

export function DifferentialsSection() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por que escolher a NTS para Qualificação Térmica?
            </h2>
            <p className="text-lg text-muted-foreground">
              Mais de duas décadas de experiência em metrologia térmica
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentials.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-background/50 hover:bg-background transition-colors"
              >
                <div className="shrink-0 w-10 h-10 bg-cta/10 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-cta" />
                </div>
                <p className="text-foreground font-medium text-sm leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
