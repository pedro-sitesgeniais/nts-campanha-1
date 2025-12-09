import { Flame, Snowflake, Gauge, Warehouse, Building, Truck, ThermometerSun, Wind } from "lucide-react";

const equipmentTypes = [
  { name: "Estufas", icon: Flame },
  { name: "Geladeiras", icon: ThermometerSun },
  { name: "Freezers", icon: Snowflake },
  { name: "Câmaras Frias", icon: Warehouse },
  { name: "Autoclaves", icon: Gauge },
  { name: "Câmaras Climáticas", icon: Wind },
  { name: "Ambientes Controlados", icon: Building },
  { name: "Transporte Refrigerado", icon: Truck },
];

export function EquipmentTypesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Qualificamos Todos os Tipos de Equipamentos
          </h2>
          <p className="text-lg text-muted-foreground">
            Expertise técnica em equipamentos térmicos críticos
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {equipmentTypes.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 rounded-xl bg-surface hover:bg-secondary/5 border border-border/30 hover:border-secondary/50 transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                <item.icon className="w-8 h-8 text-secondary" />
              </div>
              <span className="text-sm font-medium text-foreground text-center">
                {item.name}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center bg-surface-elevated p-6 rounded-xl border border-border/50">
          <p className="text-muted-foreground">
            Qualificação com data loggers calibrados com rastreabilidade metrológica
          </p>
        </div>
      </div>
    </section>
  );
}
