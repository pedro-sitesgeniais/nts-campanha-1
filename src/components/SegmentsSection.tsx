import { Building2, Factory, Sparkles, FlaskConical, Microscope, Award } from "lucide-react";

const segments = [
  {
    icon: Building2,
    label: "Farmácias de Manipulação",
  },
  {
    icon: Factory,
    label: "Indústrias Farmacêuticas",
  },
  {
    icon: Sparkles,
    label: "Indústrias Cosméticas",
  },
  {
    icon: FlaskConical,
    label: "Indústrias Químicas",
  },
  {
    icon: Microscope,
    label: "Laboratórios",
  },
];

export function SegmentsSection() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Atendemos Seu Segmento
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {segments.map((segment, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 min-h-[140px] rounded-xl bg-background border border-border/30 hover:border-secondary/50 hover:shadow-md transition-all duration-300"
            >
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-3">
                <segment.icon className="w-7 h-7 text-secondary" />
              </div>
              <span className="text-sm font-semibold text-primary text-center">{segment.label}</span>
            </div>
          ))}
        </div>

        {/* ANFARMAG Badge - Destacado */}
        <div className="mt-10 mx-auto max-w-xl">
          <div className="bg-linear-to-r from-cta to-green-600 text-white px-6 py-5 rounded-2xl flex items-center justify-center gap-4 shadow-xl shadow-cta/20">
            <Award className="w-10 h-10 shrink-0" />
            <div className="text-center sm:text-left">
              <span className="font-bold text-lg block">Parceiro Oficial ANFARMAG</span>
              <span className="text-white/90 text-sm">Descontos especiais para associados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
