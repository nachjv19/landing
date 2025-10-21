import { Card } from "./ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    text: "Excelente atención y profesionalismo. Me ayudaron en un momento muy difícil con empatía y resultados concretos.",
    case: "Proceso de custodia"
  },
  {
    name: "Roberto Martínez",
    text: "La mejor decisión fue contactar a Lizeth. Su experiencia y dedicación hicieron la diferencia en mi caso.",
    case: "Divorcio"
  },
  {
    name: "Ana Ruiz",
    text: "Confié plenamente en su asesoría. Todo el proceso fue claro y obtuve los resultados que buscaba para mi familia.",
    case: "Demanda por alimentos"
  }
];

export function Testimonials() {
  return (
    <section id="testimonios" className="py-20 bg-[#f5f0e6] dark:bg-[#2a2320]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 style={{ 
            fontFamily: 'Playfair Display, serif'
          }} className="text-4xl lg:text-5xl text-[#3b2f2f] dark:text-[#f5f0e6]">
            Lo que dicen nuestros clientes
          </h2>
          <div className="w-24 h-1 mx-auto bg-[#d4af37]" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 space-y-6 border-2 transition-all duration-300 hover:shadow-xl bg-[#fffdf8] dark:bg-[#1a1614] border-[#d4af37]"
            >
              <div className="flex justify-center">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center bg-[#046b4c]"
                >
                  <Quote className="w-6 h-6 text-[#d4af37]" />
                </div>
              </div>
              
              <p style={{ 
                fontFamily: 'Inter, sans-serif',
                fontStyle: 'italic'
              }} className="text-[#3b2f2f] dark:text-[#f5f0e6]">
                "{testimonial.text}"
              </p>
              
              <div className="pt-4 border-t border-[#d4af37]">
                <p style={{ 
                  fontFamily: 'Playfair Display, serif'
                }} className="text-[#3b2f2f] dark:text-[#f5f0e6]">
                  {testimonial.name}
                </p>
                <p style={{ 
                  fontFamily: 'Inter, sans-serif'
                }} className="text-sm text-[#046b4c] dark:text-[#d4af37]/80">
                  {testimonial.case}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
