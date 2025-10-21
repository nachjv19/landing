import { Heart, Users, FileText, Briefcase } from "lucide-react";
import { Card } from "./ui/card";

const services = [
  {
    icon: Heart,
    title: "Demanda por alimentos",
    description: "Protegemos el bienestar de los tuyos mediante procesos justos y ágiles."
  },
  {
    icon: Users,
    title: "Proceso de custodia",
    description: "Acompañamos tu proceso con empatía y firmeza legal."
  },
  {
    icon: FileText,
    title: "Divorcios",
    description: "Te ayudamos a cerrar ciclos con acuerdos claros y soluciones efectivas."
  },
  {
    icon: Briefcase,
    title: "Asesorías jurídicas",
    description: "Orientación experta en derecho civil, familiar y penal."
  }
];

export function Services() {
  return (
    <section id="servicios" className="py-20 bg-[#fffdf8] dark:bg-[#1a1614]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 style={{ 
            fontFamily: 'Playfair Display, serif'
          }} className="text-4xl lg:text-5xl text-[#3b2f2f] dark:text-[#f5f0e6]">
            Nuestros Servicios
          </h2>
          <div className="w-24 h-1 mx-auto bg-[#d4af37]" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="p-8 text-center space-y-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-2 bg-[#f5f0e6] dark:bg-[#2a2320] border-[#d4af37]"
              >
                <div 
                  className="w-16 h-16 mx-auto rounded-full flex items-center justify-center bg-[#046b4c]"
                >
                  <Icon className="w-8 h-8 text-[#d4af37]" />
                </div>
                
                <h3 style={{ 
                  fontFamily: 'Playfair Display, serif'
                }} className="text-xl text-[#3b2f2f] dark:text-[#f5f0e6]">
                  {service.title}
                </h3>
                
                <p style={{ 
                  fontFamily: 'Inter, sans-serif'
                }} className="text-[#3b2f2f]/80 dark:text-[#f5f0e6]/80">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
