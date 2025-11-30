
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const isHomePage = location.pathname === "/";
  
  const handleNavClick = (hash: string) => {
    if (isHomePage) {
      // Se estiver na página inicial, apenas rola para a seção
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Se estiver em outra página, navega para a inicial com o hash
      navigate(`/${hash}`);
      // Aguarda a navegação e então faz scroll
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm py-3" : "bg-transparent py-5"
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a 
              href="/" 
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
              className="flex items-center"
            >
              <img 
                src="/img/logo.png" 
                alt="Crefy" 
                className="h-8 md:h-10 w-auto"
              />
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick("#features")}
              className="text-gray-700 hover:text-teal-500 transition-colors"
            >
              Recursos
            </button>
            <button 
              onClick={() => handleNavClick("#how-it-works")}
              className="text-gray-700 hover:text-teal-500 transition-colors"
            >
              Como Funciona
            </button>
            <button 
              onClick={() => handleNavClick("#faq")}
              className="text-gray-700 hover:text-teal-500 transition-colors"
            >
              Dúvidas Frequentes
            </button>
           
            <Button variant="outline" className="border-teal-500 text-teal-500 hover:bg-teal-50">
              Login
            </Button>
            <Button 
              className="bg-teal-500 hover:bg-teal-600 text-white"
              onClick={() => navigate("/comece-gratuitamente")}
            >
              Comece Grátis
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-teal-500 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleNavClick("#features")}
                className="text-gray-700 hover:text-teal-500 transition-colors py-2 text-left"
              >
                Recursos
              </button>
              <button
                onClick={() => handleNavClick("#how-it-works")}
                className="text-gray-700 hover:text-teal-500 transition-colors py-2 text-left"
              >
                Como Funciona
              </button>
              <button
                onClick={() => handleNavClick("#faq")}
                className="text-gray-700 hover:text-teal-500 transition-colors py-2 text-left"
              >
                FAQ
              </button>
              <button
                onClick={() => handleNavClick("#contact")}
                className="text-gray-700 hover:text-teal-500 transition-colors py-2 text-left"
              >
                Contato
              </button>
              <div className="flex flex-col space-y-2 pt-2 border-t">
                <Button variant="outline" className="w-full border-teal-500 text-teal-500 hover:bg-teal-50">
                  Login
                </Button>
                <Button 
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white"
                  onClick={() => {
                    navigate("/comece-gratuitamente");
                    setIsOpen(false);
                  }}
                >
                  Comece Grátis
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
