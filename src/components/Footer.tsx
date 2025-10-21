import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-[#3b2f2f] dark:bg-[#0d0c0b]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 style={{ 
              fontFamily: 'Playfair Display, serif',
              color: '#d4af37'
            }} className="text-2xl">
              Lizeth Carrillo B.
            </h3>
            <p style={{ 
              fontFamily: 'Inter, sans-serif',
              color: '#fffdf8',
              opacity: 0.8
            }}>
              Servicio jurídico comprometido con la excelencia y el acompañamiento humano en cada proceso legal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ 
              fontFamily: 'Playfair Display, serif',
              color: '#d4af37'
            }} className="mb-4">
              Enlaces rápidos
            </h4>
            <ul className="space-y-2">
              {['Inicio', 'Servicios', 'Testimonios', 'Contacto'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      color: '#fffdf8',
                      opacity: 0.8
                    }}
                    className="hover:opacity-100 transition-opacity"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ 
              fontFamily: 'Playfair Display, serif',
              color: '#d4af37'
            }} className="mb-4">
              Contacto
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" style={{ color: '#d4af37' }} />
                <span style={{ 
                  fontFamily: 'Inter, sans-serif',
                  color: '#fffdf8',
                  opacity: 0.8
                }}>
                  +57 (300) 000-0000
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" style={{ color: '#d4af37' }} />
                <span style={{ 
                  fontFamily: 'Inter, sans-serif',
                  color: '#fffdf8',
                  opacity: 0.8
                }}>
                  contacto@lizethcarrillob.com
                </span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: '#d4af37' }} />
                <span style={{ 
                  fontFamily: 'Inter, sans-serif',
                  color: '#fffdf8',
                  opacity: 0.8
                }}>
                   Barrio Centro, Cra 17<br />
                      Barranquilla, BQ 080001
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="pt-8 border-t" style={{ borderColor: '#d4af37', opacity: 0.3 }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p style={{ 
              fontFamily: 'Inter, sans-serif',
              color: '#fffdf8',
              opacity: 0.6
            }}>
              © 2025 Lizeth Carrillo B. Todos los derechos reservados.
            </p>
            
            <div className="flex gap-4">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Linkedin, label: 'LinkedIn' }
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ backgroundColor: '#d4af37' }}
                >
                  <Icon className="w-5 h-5" style={{ color: '#3b2f2f' }} />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-6 text-center">
            <p style={{ 
              fontFamily: 'Inter, sans-serif',
              color: '#fffdf8',
              opacity: 0.5
            }} className="text-sm">
              <a href="#" className="hover:opacity-100 transition-opacity">Aviso de Privacidad</a>
              {' · '}
              <a href="#" className="hover:opacity-100 transition-opacity">Términos y Condiciones</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
