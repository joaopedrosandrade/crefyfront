import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { X, Cookie } from "lucide-react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já fez uma escolha
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      // Mostra o banner após um pequeno delay para melhor UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setIsVisible(false);
  };

  const handleClose = () => {
    // Fecha o banner sem salvar preferência (usuário pode ver depois)
    setIsVisible(false);
    // Salva que o usuário fechou, mas não aceitou
    localStorage.setItem("cookieConsent", "closed");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up flex justify-center px-4 pb-4">
      <div className="bg-white border border-gray-200 rounded-lg shadow-2xl max-w-2xl w-full">
        <div className="px-4 md:px-6 py-4 md:py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-4 flex-1">
              <div className="bg-teal-100 p-2 rounded-lg shrink-0">
                <Cookie className="text-teal-600" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-riskon-900 mb-1">
                  Utilizamos cookies
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Utilizamos cookies para melhorar sua experiência, analisar o desempenho do site e personalizar conteúdo. 
                  Ao continuar navegando, você concorda com nossa{" "}
                  <Link 
                    to="/cookies" 
                    className="text-teal-500 hover:text-teal-600 underline font-medium"
                  >
                    Política de Cookies
                  </Link>
                  .
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 w-full md:w-auto">
              <Button
                variant="outline"
                onClick={handleReject}
                className="border-gray-300 text-gray-700 hover:bg-gray-50 flex-1 md:flex-none"
              >
                Rejeitar
              </Button>
              <Button
                onClick={handleAccept}
                className="bg-teal-500 hover:bg-teal-600 text-white flex-1 md:flex-none"
              >
                Aceitar
              </Button>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1 shrink-0"
                aria-label="Fechar"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;

