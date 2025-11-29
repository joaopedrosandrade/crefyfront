
import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      description: "Ideal para pequenas empresas iniciando com análise de crédito.",
      price: "R$ 1,98",
      volume: "Até 500 análises/mês",
      features: [
        "Acesso à IA básica",
        "Integração via API",
        "Suporte por email",
        "1 usuário administrador"
      ],
      color: "bg-white",
      highlight: false
    },
    {
      name: "Professional",
      description: "Para empresas em crescimento que precisam de recursos avançados.",
      price: "R$ 1,68",
      volume: "Até 5.000 análises/mês",
      features: [
        "Acesso à IA avançada",
        "Integrações personalizadas",
        "Suporte prioritário",
        "Painel personalizado",
        "5 usuários administradores",
        "Relatórios avançados"
      ],
      color: "bg-teal-500",
      highlight: true
    },
    {
      name: "Enterprise",
      description: "Solução completa para empresas que exigem o máximo em segurança e personalização.",
      price: "R$ 1,44",
      volume: "Análises ilimitadas",
      features: [
        "IA de última geração",
        "Integração completa",
        "Suporte 24/7 dedicado",
        "Customização total",
        "Usuários ilimitados",
        "Conformidade bancária",
        "SLA garantido"
      ],
      color: "bg-white",
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-riskon-900 mb-4">
            Planos Flexíveis Para Seu Negócio
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Escolha o plano que melhor se adapta às necessidades da sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`${plan.color} ${
                plan.highlight 
                  ? "ring-2 ring-teal-500 shadow-xl" 
                  : "border border-gray-200 shadow-sm"
              } rounded-xl overflow-hidden transition-all hover:shadow-xl`}
            >
              {plan.highlight && (
                <div className="bg-teal-500 text-white text-center py-2 text-sm font-medium">
                  Mais Popular
                </div>
              )}
              <div className="p-8">
                <h3 className={`text-xl font-bold ${plan.highlight ? "text-white" : "text-riskon-900"} mb-2`}>
                  {plan.name}
                </h3>
                <p className={`${plan.highlight ? "text-white/80" : "text-gray-600"} mb-6`}>
                  {plan.description}
                </p>
                <div className="mb-2">
                  <span className={`text-4xl font-bold ${plan.highlight ? "text-white" : "text-riskon-900"}`}>
                    {plan.price}
                  </span>
                  <span className={`${plan.highlight ? "text-white/80" : "text-gray-600"} ml-1`}>
                    por análise
                  </span>
                </div>
                <div className={`text-sm ${plan.highlight ? "text-white/90" : "text-gray-500"} mb-6`}>
                  {plan.volume}
                </div>
                <Button 
                  className={`w-full ${
                    plan.highlight 
                      ? "bg-white text-teal-500 hover:bg-gray-100" 
                      : "bg-teal-500 text-white hover:bg-teal-600"
                  } mb-8`}
                >
                  {plan.highlight ? "Comece Agora" : "Experimentar Grátis"}
                </Button>
                <div className="space-y-4">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start">
                      <Check 
                        size={18} 
                        className={`mr-2 mt-0.5 ${plan.highlight ? "text-white" : "text-teal-500"}`} 
                      />
                      <span className={`${plan.highlight ? "text-white/90" : "text-gray-600"}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-4">
            Precisa de um plano personalizado para sua empresa?
          </p>
          <Button variant="outline" className="border-teal-500 text-teal-500 hover:bg-teal-50">
            Entre em Contato com Vendas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
