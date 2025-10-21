import { useState, useEffect } from "react";
import { Menu, Scale, Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Servicios", href: "#servicios" },
  { name: "Testimonios", href: "#testimonios" },
  { name: "Contacto", href: "#contact" }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : ""
      } bg-[#fffdf8] dark:bg-[#2a2320]`}
      style={{
        backdropFilter: "blur(10px)"
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#inicio");
            }}
            className="flex items-center gap-2 group"
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
              style={{ backgroundColor: "#046b4c" }}
            >
              <Scale className="w-5 h-5" style={{ color: "#d4af37" }} />
            </div>
            <span
              style={{
                fontFamily: "Playfair Display, serif"
              }}
              className="text-xl hidden sm:block text-[#3b2f2f] dark:text-[#f5f0e6]"
            >
              Lizeth Carrillo B.
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                style={{
                  fontFamily: "Inter, sans-serif"
                }}
                className="relative group transition-opacity hover:opacity-100 opacity-80 text-[#3b2f2f] dark:text-[#f5f0e6]"
              >
                {link.name}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4af37] transition-all duration-300 group-hover:w-full"
                />
              </a>
            ))}
            
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="transition-all duration-300"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-[#3b2f2f]" />
              ) : (
                <Sun className="w-5 h-5 text-[#f5f0e6]" />
              )}
            </Button>
            <Button
              onClick={() => scrollToSection("#contact")}
              size="sm"
              className="transition-all duration-300"
              style={{
                backgroundColor: "#046b4c",
                color: "#fffdf8",
                fontFamily: "Inter, sans-serif"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#d4af37";
                e.currentTarget.style.color = "#3b2f2f";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#046b4c";
                e.currentTarget.style.color = "#fffdf8";
              }}
            >
              Consulta gratuita
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-[#3b2f2f] dark:text-[#f5f0e6]"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] bg-[#fffdf8] dark:bg-[#2a2320]"
            >
              <div className="flex flex-col gap-6 mt-8">
                <div className="flex items-center gap-2 pb-6 border-b" style={{ borderColor: "#d4af37" }}>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#046b4c" }}
                  >
                    <Scale className="w-5 h-5" style={{ color: "#d4af37" }} />
                  </div>
                  <span
                    style={{
                      fontFamily: "Playfair Display, serif"
                    }}
                    className="text-lg text-[#3b2f2f] dark:text-[#f5f0e6]"
                  >
                    Lizeth Carrillo B.
                  </span>
                </div>

                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    style={{
                      fontFamily: "Inter, sans-serif"
                    }}
                    className="text-lg py-2 transition-colors hover:opacity-70 text-[#3b2f2f] dark:text-[#f5f0e6]"
                  >
                    {link.name}
                  </a>
                ))}
                
                {/* Theme Toggle Mobile */}
                <Button
                  variant="outline"
                  onClick={toggleTheme}
                  className="mt-2 w-full border-[#d4af37] dark:border-[#d4af37]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {theme === "light" ? (
                    <>
                      <Moon className="w-4 h-4 mr-2 text-[#3b2f2f]" />
                      <span className="text-[#3b2f2f]">Modo oscuro</span>
                    </>
                  ) : (
                    <>
                      <Sun className="w-4 h-4 mr-2 text-[#f5f0e6]" />
                      <span className="text-[#f5f0e6]">Modo claro</span>
                    </>
                  )}
                </Button>

                <Button
                  onClick={() => scrollToSection("#contact")}
                  className="mt-4 w-full"
                  style={{
                    backgroundColor: "#046b4c",
                    color: "#fffdf8",
                    fontFamily: "Inter, sans-serif"
                  }}
                >
                  Consulta gratuita
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
