import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se manejaría el envío del formulario
    alert('Gracias por tu solicitud. Nos pondremos en contacto contigo pronto.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-[#fffdf8] dark:bg-[#1a1614]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 style={{ 
            fontFamily: 'Playfair Display, serif'
          }} className="text-4xl lg:text-5xl text-[#3b2f2f] dark:text-[#f5f0e6]">
            Agenda tu consulta legal
          </h2>
          <p style={{ 
            fontFamily: 'Inter, sans-serif'
          }} className="text-lg text-[#3b2f2f]/80 dark:text-[#f5f0e6]/80">
            Conecta con una especialista
          </p>
          <div className="w-24 h-1 mx-auto bg-[#d4af37]" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 style={{ 
                fontFamily: 'Playfair Display, serif'
              }} className="text-2xl mb-6 text-[#3b2f2f] dark:text-[#f5f0e6]">
                Información de contacto
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#046b4c' }}
                  >
                    <Phone className="w-5 h-5" style={{ color: '#d4af37' }} />
                  </div>
                  <div>
                    <p style={{ 
                      fontFamily: 'Playfair Display, serif'
                    }} className="text-[#3b2f2f] dark:text-[#f5f0e6]">
                      Teléfono
                    </p>
                    <p style={{ 
                      fontFamily: 'Inter, sans-serif'
                    }} className="text-[#3b2f2f]/80 dark:text-[#f5f0e6]/80">
                      +57 (300) 000-0000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#046b4c' }}
                  >
                    <Mail className="w-5 h-5" style={{ color: '#d4af37' }} />
                  </div>
                  <div>
                    <p style={{ 
                      fontFamily: 'Playfair Display, serif'
                    }} className="text-[#3b2f2f] dark:text-[#f5f0e6]">
                      Correo electrónico
                    </p>
                    <p style={{ 
                      fontFamily: 'Inter, sans-serif'
                    }} className="text-[#3b2f2f]/80 dark:text-[#f5f0e6]/80">
                      contacto@lizethcarrillob.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#046b4c' }}
                  >
                    <MapPin className="w-5 h-5" style={{ color: '#d4af37' }} />
                  </div>
                  <div>
                    <p style={{ 
                      fontFamily: 'Playfair Display, serif'
                    }} className="text-[#3b2f2f] dark:text-[#f5f0e6]">
                      Dirección
                    </p>
                    <p style={{ 
                      fontFamily: 'Inter, sans-serif'
                    }} className="text-[#3b2f2f]/80 dark:text-[#f5f0e6]/80">
                      Barrio Centro, Cra 17<br />
                      Barranquilla, BQ 080001
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div 
              className="p-6 rounded-lg bg-[#f5f0e6] dark:bg-[#2a2320] border-2 border-[#d4af37]"
            >
              <p style={{ 
                fontFamily: 'Inter, sans-serif',
                fontStyle: 'italic'
              }} className="text-[#3b2f2f] dark:text-[#f5f0e6]">
                "Tu tranquilidad es nuestra prioridad. Cada caso es único y merece atención personalizada."
              </p>
              <p style={{ 
                fontFamily: 'Playfair Display, serif'
              }} className="mt-4 text-[#046b4c] dark:text-[#d4af37]">
                — Lizeth Carrillo B.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className="p-8 rounded-lg bg-[#f5f0e6] dark:bg-[#2a2320] border-2 border-[#d4af37]"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label 
                  htmlFor="name"
                  style={{ 
                    fontFamily: 'Inter, sans-serif'
                  }}
                  className="text-[#3b2f2f] dark:text-[#f5f0e6]"
                >
                  Nombre completo
                </Label>
                <Input 
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="border-2 bg-[#fffdf8] dark:bg-[#1a1614] border-[#d4af37] text-[#3b2f2f] dark:text-[#f5f0e6]"
                  style={{ 
                    fontFamily: 'Inter, sans-serif'
                  }}
                />
              </div>

              <div className="space-y-2">
                <Label 
                  htmlFor="email"
                  style={{ 
                    fontFamily: 'Inter, sans-serif'
                  }}
                  className="text-[#3b2f2f] dark:text-[#f5f0e6]"
                >
                  Correo electrónico
                </Label>
                <Input 
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="border-2 bg-[#fffdf8] dark:bg-[#1a1614] border-[#d4af37] text-[#3b2f2f] dark:text-[#f5f0e6]"
                  style={{ 
                    fontFamily: 'Inter, sans-serif'
                  }}
                />
              </div>

              <div className="space-y-2">
                <Label 
                  htmlFor="phone"
                  style={{ 
                    fontFamily: 'Inter, sans-serif'
                  }}
                  className="text-[#3b2f2f] dark:text-[#f5f0e6]"
                >
                  Teléfono
                </Label>
                <Input 
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="border-2 bg-[#fffdf8] dark:bg-[#1a1614] border-[#d4af37] text-[#3b2f2f] dark:text-[#f5f0e6]"
                  style={{ 
                    fontFamily: 'Inter, sans-serif'
                  }}
                />
              </div>

              <div className="space-y-2">
                <Label 
                  htmlFor="message"
                  style={{ 
                    fontFamily: 'Inter, sans-serif'
                  }}
                  className="text-[#3b2f2f] dark:text-[#f5f0e6]"
                >
                  Mensaje
                </Label>
                <Textarea 
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="border-2 resize-none bg-[#fffdf8] dark:bg-[#1a1614] border-[#d4af37] text-[#3b2f2f] dark:text-[#f5f0e6]"
                  style={{ 
                    fontFamily: 'Inter, sans-serif'
                  }}
                  placeholder="Cuéntanos brevemente tu situación..."
                />
              </div>

              <Button 
                type="submit"
                className="w-full transition-all duration-300"
                size="lg"
                style={{ 
                  backgroundColor: '#046b4c',
                  color: '#fffdf8',
                  fontFamily: 'Inter, sans-serif'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#d4af37';
                  e.currentTarget.style.color = '#3b2f2f';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#046b4c';
                  e.currentTarget.style.color = '#fffdf8';
                }}
              >
                Enviar solicitud
              </Button>
            </form>
          </div>
        </div>
      </div>
            <a
        href="https://wa.me/573000000000?text=Hola%20Lizeth,%20quisiera%20agendar%20una%20consulta%20legal."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: '#25D366' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="white"
            viewBox="0 0 24 24"
          >
            <path d="M20.52 3.48A11.78 11.78 0 0 0 12 0a11.92 11.92 0 0 0-10.2 18l-1.8 6.6 6.72-1.76a11.93 11.93 0 0 0 5.28 1.28 11.88 11.88 0 0 0 11.88-11.88 11.77 11.77 0 0 0-3.36-8.76ZM12 21.6a9.66 9.66 0 0 1-4.92-1.36l-.36-.2-3.96 1.04 1.08-3.84-.24-.4a9.68 9.68 0 0 1-1.48-5.12 9.72 9.72 0 0 1 9.72-9.72 9.56 9.56 0 0 1 6.84 2.88 9.59 9.59 0 0 1 2.88 6.84 9.72 9.72 0 0 1-9.72 9.68Zm5.36-7.24c-.28-.14-1.64-.8-1.88-.88s-.44-.14-.64.14-.72.88-.88 1.08-.32.2-.6.06a7.96 7.96 0 0 1-2.36-1.44 8.64 8.64 0 0 1-1.6-1.96c-.16-.28 0-.44.12-.58s.28-.32.4-.48.16-.28.24-.44.04-.34-.02-.48-.64-1.52-.88-2.08c-.24-.58-.48-.5-.64-.5h-.56a1.07 1.07 0 0 0-.76.36 3.16 3.16 0 0 0-1 2.36 5.54 5.54 0 0 0 1.16 3.04c.16.24 2.28 3.48 5.52 4.88a18.57 18.57 0 0 0 1.88.68 4.43 4.43 0 0 0 2.04.12c.62-.1 1.64-.68 1.88-1.36s.24-1.24.16-1.36-.24-.18-.52-.32Z" />
          </svg>
        </div>
      </a>
    </section>
  );
}
