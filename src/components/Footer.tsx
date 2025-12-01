
import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentYear = new Date().getFullYear();
  const isHomePage = location.pathname === "/";

  const handleSectionClick = (hash: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Remove o # do início se existir para normalizar
    const hashWithoutHash = hash.startsWith('#') ? hash.substring(1) : hash;
    const hashWithHash = `#${hashWithoutHash}`;
    
    if (isHomePage) {
      // Se estiver na página inicial, apenas rola para a seção
      const element = document.querySelector(hashWithHash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Se estiver em outra página, navega para a inicial com o hash
      // Usa apenas o pathname e o hash separadamente
      navigate({ pathname: '/', hash: hashWithoutHash });
    }
  };
  
  return (
    <footer className="bg-gray-50 pt-20 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src="/img/logo.png" 
                alt="Crefy" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Transformando decisões de crédito com inteligência artificial avançada. Ajudamos empresas a aprovar mais clientes bons e reduzir inadimplência.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white hover:bg-teal-50 p-2 rounded-full transition-colors border border-gray-200">
                <Facebook size={20} className="text-gray-600" />
              </a>
              <a href="#" className="bg-white hover:bg-teal-50 p-2 rounded-full transition-colors border border-gray-200">
                <Twitter size={20} className="text-gray-600" />
              </a>
              <a href="#" className="bg-white hover:bg-teal-50 p-2 rounded-full transition-colors border border-gray-200">
                <Instagram size={20} className="text-gray-600" />
              </a>
              <a href="#" className="bg-white hover:bg-teal-50 p-2 rounded-full transition-colors border border-gray-200">
                <Linkedin size={20} className="text-gray-600" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-riskon-900">Empresa</h4>
            <ul className="space-y-3">
              <li><Link to="/sobre-nos" className="text-gray-600 hover:text-teal-500 transition-colors">Sobre Nós</Link></li>
              <li><Link to="/carreiras" className="text-gray-600 hover:text-teal-500 transition-colors">Carreiras</Link></li>
              {isHomePage ? (
                <li><a href="#contact" onClick={(e) => handleSectionClick("#contact", e)} className="text-gray-600 hover:text-teal-500 transition-colors">Contato</a></li>
              ) : (
                <li><Link to="/contato" className="text-gray-600 hover:text-teal-500 transition-colors">Contato</Link></li>
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-riskon-900">Produto</h4>
            <ul className="space-y-3">
              <li><a href="#features" onClick={(e) => handleSectionClick("#features", e)} className="text-gray-600 hover:text-teal-500 transition-colors">Recursos</a></li>
              <li><a href="#pricing" onClick={(e) => handleSectionClick("#pricing", e)} className="text-gray-600 hover:text-teal-500 transition-colors">Preços</a></li>
              <li><a href="#faq" onClick={(e) => handleSectionClick("#faq", e)} className="text-gray-600 hover:text-teal-500 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-riskon-900">Legal</h4>
            <ul className="space-y-3">
              <li><Link to="/termos-de-servico" className="text-gray-600 hover:text-teal-500 transition-colors">Termos de Serviço</Link></li>
              <li><Link to="/privacidade" className="text-gray-600 hover:text-teal-500 transition-colors">Privacidade</Link></li>
              <li><Link to="/seguranca" className="text-gray-600 hover:text-teal-500 transition-colors">Segurança</Link></li>
              <li><Link to="/cookies" className="text-gray-600 hover:text-teal-500 transition-colors">Cookies</Link></li>
              <li><Link to="/compliance" className="text-gray-600 hover:text-teal-500 transition-colors">Compliance</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Crefy. Todos os direitos reservados.
            </p>
            <div>
              <ul className="flex space-x-6">
                <li><Link to="/termos-de-servico" className="text-gray-500 hover:text-teal-500 text-sm">Termos</Link></li>
                <li><Link to="/privacidade" className="text-gray-500 hover:text-teal-500 text-sm">Privacidade</Link></li>
                <li><Link to="/cookies" className="text-gray-500 hover:text-teal-500 text-sm">Cookies</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
