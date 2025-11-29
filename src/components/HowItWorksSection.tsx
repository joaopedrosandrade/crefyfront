
import React from "react";
import { 
  ArrowRight, 
  CheckCircle, 
  Database, 
  FileText, 
  PieChart, 
  Zap 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    icon: <Database size={28} className="text-teal-500" />,
    title: "Conexão de Dados",
    description: "Integre facilmente com suas fontes de dados existentes ou use nossa API.",
    step: "01"
  },
  {
    icon: <PieChart size={28} className="text-teal-500" />,
    title: "Análise de IA",
    description: "Nossos algoritmos analisam centenas de variáveis em segundos.",
    step: "02"
  },
  {
    icon: <FileText size={28} className="text-teal-500" />,
    title: "Geração de Score",
    description: "Um score preciso é criado com base em modelos preditivos avançados.",
    step: "03"
  },
  {
    icon: <Zap size={28} className="text-teal-500" />,
    title: "Decisão Automática",
    description: "Receba uma decisão instantânea baseada em seus critérios personalizados.",
    step: "04"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-riskon-900 mb-4">
            Como a Crefy Funciona
          </h2>
          <p className="text-lg text-gray-600">
            Nossa solução simplifica o processo de decisão de crédito do início ao fim.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="border-none shadow-sm hover:shadow-md transition-all duration-300 bg-white group"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex justify-between items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 border border-gray-100 group-hover:border-teal-100 transition-colors">
                    {step.icon}
                  </div>
                  <span className="text-gray-200 text-3xl font-bold group-hover:text-teal-100 transition-colors">
                    {step.step}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-riskon-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2">
                    <ArrowRight className="text-gray-300 mx-4" />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-2/3 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-riskon-900">
                Comece a tomar decisões de crédito melhores hoje mesmo
              </h3>
              <p className="text-lg text-gray-600">
                Junte-se a centenas de empresas que já transformaram seus processos de crédito com Crefy.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle size={24} className="text-teal-500 mr-3 mt-1 shrink-0" />
                  <p className="text-gray-700">Redução média de 35% em inadimplência para nossos clientes</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={24} className="text-teal-500 mr-3 mt-1 shrink-0" />
                  <p className="text-gray-700">Economia de até 70% em custos operacionais de análise de crédito</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={24} className="text-teal-500 mr-3 mt-1 shrink-0" />
                  <p className="text-gray-700">Implementação rápida com resultados em semanas, não meses</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 flex justify-center">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg w-full md:w-auto">
                Agende uma Demonstração
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
