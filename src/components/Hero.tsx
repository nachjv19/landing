import { Button } from "./ui/button";
import { Scale } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://d1fufvy4xao6k9.cloudfront.net/images/blog/posts/2023/05/sq_fw18_suit_1.jpg"
          alt="Profesional legal"
          className="w-full h-full object-cover"
          style={{ filter: 'blur(2px)' }}
        />
        {/* Gradient Overlay - Light Mode */}
        <div 
          className="absolute inset-0 dark:hidden"
          style={{ 
            background: 'linear-gradient(to right, rgba(245, 240, 230, 0.95) 0%, rgba(245, 240, 230, 0.85) 50%, rgba(245, 240, 230, 0.6) 100%)'
          }}
        />
        {/* Gradient Overlay - Dark Mode */}
        <div 
          className="absolute inset-0 hidden dark:block"
          style={{ 
            background: 'linear-gradient(to right, rgba(26, 22, 20, 0.95) 0%, rgba(26, 22, 20, 0.85) 50%, rgba(26, 22, 20, 0.6) 100%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 mt-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 bg-[#fffdf8] dark:bg-[#2a2320] border border-[#d4af37]">
            <Scale className="w-4 h-4" style={{ color: '#046b4c' }} />
            <span style={{ fontFamily: 'Inter, sans-serif' }} className="text-[#3b2f2f] dark:text-[#f5f0e6]">Lizeth Carrillo B.</span>
          </div>
          
          <h1 style={{ 
            fontFamily: 'Playfair Display, serif',
            lineHeight: '1.2'
          }} className="text-5xl lg:text-6xl mb-6 text-[#3b2f2f] dark:text-[#f5f0e6]">
            Defendemos tus derechos con excelencia y compromiso.
          </h1>
          
          <p style={{ 
            fontFamily: 'Inter, sans-serif'
          }} className="text-lg lg:text-xl mb-8 text-[#3b2f2f]/90 dark:text-[#f5f0e6]/90">
            Asesoría legal integral para cada etapa de tu vida.
          </p>
          
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="transition-all duration-300 hover:shadow-lg"
            style={{ 
              backgroundColor: '#d4af37',
              color: '#046b4c',
              fontFamily: 'Inter, sans-serif',
              border: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#046b4c';
              e.currentTarget.style.color = '#d4af37';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#d4af37';
              e.currentTarget.style.color = '#046b4c';
            }}
          >
            Solicitar consulta gratuita
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div 
        className="absolute bottom-20 left-10 w-24 h-24 rounded-full opacity-20 z-0"
        style={{ backgroundColor: '#046b4c' }}
      />
      <div 
        className="absolute top-40 right-20 w-32 h-32 rounded-full opacity-15 z-0"
        style={{ backgroundColor: '#d4af37' }}
      />
    </section>
  );
}
