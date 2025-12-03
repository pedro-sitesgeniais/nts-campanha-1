import { Thermometer, Map, Gauge, MapPin } from "lucide-react";

const services = [
  {
    icon: Thermometer,
    title: "Qualificação Térmica",
    description: "Avaliação de distribuição e estabilidade de temperatura em equipamentos críticos",
    highlight: "Relatório técnico completo para auditorias",
  },
  {
    icon: Map,
    title: "Mapeamento Térmico",
    description: "Coleta de dados em múltiplos pontos com análise de variações e pontos críticos",
    highlight: "Identificação de zonas quentes e frias",
  },
  {
    icon: Gauge,
    title: "Calibração de Temperatura",
    description: "Calibração de termômetros, termo-higrômetros, termopares e sensores",
    highlight: "Certificado RBC rastreável",
  },
  {
    icon: MapPin,
    title: "Atendimento no Local",
    description: "Qualificação realizada diretamente nas suas instalações",
    highlight: "Cobertura SP e Vale do Paraíba (100km)",
  },
];

export function ServicesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Soluções em Qualificação Térmica
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Serviços especializados para garantir a conformidade dos seus equipamentos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-surface p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 hover:border-secondary"
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary group-hover:text-secondary transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {service.description}
                  </p>
                  <span className="text-xs text-muted-foreground/80 block">
                    {service.highlight}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
