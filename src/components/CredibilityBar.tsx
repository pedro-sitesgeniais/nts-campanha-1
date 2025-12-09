import { Calendar, Award, FileCheck, Shield } from "lucide-react";

const credentials = [
  {
    icon: Calendar,
    label: "+20 Anos de Experiência",
  },
  {
    icon: Award,
    label: "Calibração Acreditada RBC",
  },
  {
    icon: FileCheck,
    label: "Certificado ISO/IEC 17025",
  },
  {
    icon: Shield,
    label: "Conformidade ANVISA",
  },
];

export function CredibilityBar() {
  return (
    <section className="bg-secondary py-6">
      <div className="container-custom px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {credentials.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-3 text-secondary-foreground"
            >
              <item.icon className="w-6 h-6 shrink-0" />
              <span className="text-sm md:text-base font-medium text-center md:text-left">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
