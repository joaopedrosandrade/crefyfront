import React, { useState } from "react";
import { MessageCircle, FileText, Headphones, X, Send } from "lucide-react";

interface WhatsAppWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({ isOpen, onClose }) => {
  const handleOptionClick = (type: "comercial" | "suporte") => {
    // URLs do WhatsApp - você pode personalizar com os números reais
    const whatsappNumbers = {
      comercial: "5511999999999", // Substitua pelo número real
      suporte: "5511999999999" // Substitua pelo número real
    };

    const messages = {
      comercial: "Olá! Gostaria de informações comerciais sobre a Crefy.",
      suporte: "Olá! Preciso de suporte técnico."
    };

    const number = whatsappNumbers[type];
    const message = encodeURIComponent(messages[type]);
    const url = `https://wa.me/${number}?text=${message}`;
    
    window.open(url, "_blank");
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60] transition-opacity"
        onClick={onClose}
      />
      
      {/* Widget */}
      <div className="fixed bottom-32 right-8 w-80 bg-white rounded-2xl shadow-2xl z-[70] overflow-hidden animate-slide-up">
        {/* Header */}
        <div className="bg-teal-600 px-6 py-4 flex items-center space-x-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <MessageCircle className="text-white" size={20} />
          </div>
          <div className="flex-1">
            <h3 className="text-white font-bold text-lg">Crefy</h3>
            <p className="text-white/90 text-sm">Atendimento Online</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 pb-16">
          <div className="mb-6">
            <p className="text-gray-800 text-base mb-2">
              👋 Olá! Como podemos te ajudar hoje?
            </p>
            <p className="text-gray-600 text-sm">
              Escolha uma das opções abaixo:
            </p>
          </div>

          {/* Opções */}
          <div className="space-y-3 mb-4">
            {/* Opção Comercial */}
            <button
              onClick={() => handleOptionClick("comercial")}
              className="w-full flex items-center space-x-3 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <FileText className="text-blue-600" size={20} />
              </div>
              <div className="flex-1 text-left">
                <p className="font-semibold text-gray-800">Comercial</p>
                <p className="text-sm text-gray-500">Vendas e informações</p>
              </div>
              <Send className="text-blue-500 group-hover:translate-x-1 transition-transform" size={18} />
            </button>

            {/* Opção Suporte Técnico */}
            <button
              onClick={() => handleOptionClick("suporte")}
              className="w-full flex items-center space-x-3 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Headphones className="text-blue-600" size={20} />
              </div>
              <div className="flex-1 text-left">
                <p className="font-semibold text-gray-800">Suporte Técnico</p>
                <p className="text-sm text-gray-500">Ajuda e suporte</p>
              </div>
              <Send className="text-blue-500 group-hover:translate-x-1 transition-transform" size={18} />
            </button>
          </div>

          {/* Divisor */}
          <div className="border-t border-gray-200 my-4"></div>

          {/* Aviso */}
          <p className="text-gray-400 text-xs text-center">
            Você será redirecionado para o WhatsApp
          </p>
        </div>

        {/* Botão Fechar */}
        <button
          onClick={onClose}
          className="absolute bottom-4 right-4 w-10 h-10 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transition-colors z-10"
          aria-label="Fechar"
        >
          <X size={20} />
        </button>
      </div>
    </>
  );
};

export default WhatsAppWidget;

