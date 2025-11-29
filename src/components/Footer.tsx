
import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 pt-20 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6">
              <span className="text-teal-500">Cre</span>fy
            </h3>
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
              <li><a href="#" className="text-gray-600 hover:text-teal-500 transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-500 transition-colors">Carreiras</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-500 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-500 transition-colors">Imprensa</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-teal-500 transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-riskon-900">Produto</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-600 hover:text-teal-500 transition-colors">Recursos</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-500 transition-colors">Integrações</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-teal-500 transition-colors">Preços</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-500 transition-colors">Atualizações</a></li>
              <li><a href="#faq" className="text-gray-600 hover:text-teal-500 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-riskon-900">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-teal-500 transition-colors">Termos de Serviço</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-500 transition-colors">Privacidade</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-500 transition-colors">Segurança</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-500 transition-colors">Cookies</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-500 transition-colors">Compliance</a></li>
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
                <li><a href="#" className="text-gray-500 hover:text-teal-500 text-sm">Termos</a></li>
                <li><a href="#" className="text-gray-500 hover:text-teal-500 text-sm">Privacidade</a></li>
                <li><a href="#" className="text-gray-500 hover:text-teal-500 text-sm">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
