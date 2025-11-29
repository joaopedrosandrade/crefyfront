
import React from "react";
import { 
  BarChart3, 
  BrainCircuit, 
  Clock, 
  LineChart, 
  Shield, 
  Users,
  Sparkles,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: <BrainCircuit className="text-teal-500" />,
    title: "IA Avançada",
    description: "Algoritmos proprietários que analisam milhares de variáveis para decisões precisas.",
  },
  {
    icon: <Clock className="text-teal-500" />,
    title: "Decisões em Tempo Real",
    description: "Respostas em segundos, não em dias, melhorando a experiência do cliente.",
  },
  {
    icon: <LineChart className="text-teal-500" />,
    title: "Análise Preditiva",
    description: "Previsão de comportamento e capacidade de pagamento com alta precisão.",
  },
  {
    icon: <Shield className="text-teal-500" />,
    title: "Segurança Avançada",
    description: "Proteção de dados de nível bancário e conformidade com todas as regulamentações.",
  },
  {
    icon: <Users className="text-teal-500" />,
    title: "Inclusão Financeira",
    description: "Avalie clientes sem histórico de crédito tradicional de forma justa.",
  },
  {
    icon: <Sparkles className="text-teal-500" />,
    title: "Personalização Total",
    description: "Adaptável aos seus critérios de negócio e requisitos específicos.",
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gray-100 text-teal-600 text-sm font-medium mb-6">
            <Zap size={16} className="mr-2" />
            Recursos Avançados
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-riskon-900 mb-4">
            Tecnologia Avançada para Decisões Inteligentes
          </h2>
          <p className="text-lg text-gray-600">
            Nossa plataforma combina tecnologia de ponta com experiência em crédito para transformar seu processo de avaliação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-none shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
            >
              <CardContent className="p-6">
                <div className="mb-6 flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 group-hover:bg-gray-100 transition-colors">
                  {React.cloneElement(feature.icon, { size: 24 })}
                </div>
                <h3 className="text-xl font-bold text-riskon-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-50 rounded-xl shadow-sm p-8 md:p-12">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gray-100 text-teal-600 text-sm font-medium mb-6">
                <BarChart3 size={16} className="mr-2" />
                Resultados comprovados
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-riskon-900 mb-4">
                Aumente aprovações e reduza inadimplência simultaneamente
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Nossa tecnologia proprietária permite que você identifique bons pagadores que seriam rejeitados por métodos tradicionais, ao mesmo tempo que detecta riscos invisíveis.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="text-teal-500 mr-3 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Aumento médio de 35% em aprovações com bons pagadores</span>
                </li>
                <li className="flex items-start">
                  <div className="text-teal-500 mr-3 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Redução média de 40% em inadimplência</span>
                </li>
                <li className="flex items-start">
                  <div className="text-teal-500 mr-3 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Economia de tempo operacional de até 95%</span>
                </li>
              </ul>
              <Button className="bg-teal-500 hover:bg-teal-600 text-white">
                Ver Estudos de Caso
              </Button>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="bg-white rounded-xl shadow-sm p-6 relative mb-8">
                  <div className="absolute -top-4 -left-4 bg-gray-200 text-riskon-900 text-sm font-bold px-4 py-2 rounded-lg">
                    Antes da Crefy
                  </div>
                  <div className="h-8 w-full bg-gray-100 rounded-md mb-4"></div>
                  <div className="flex gap-4 mb-6">
                    <div className="h-24 w-1/2 bg-red-50 rounded-md flex items-center justify-center">
                      <span className="text-red-500 font-bold">32%</span>
                    </div>
                    <div className="h-24 w-1/2 bg-green-50 rounded-md flex items-center justify-center">
                      <span className="text-green-500 font-bold">68%</span>
                    </div>
                  </div>
                  <div className="h-6 w-3/4 bg-gray-100 rounded-md"></div>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6 relative">
                  <div className="absolute -top-4 -left-4 bg-teal-500 text-white text-sm font-bold px-4 py-2 rounded-lg">
                    Com a Crefy
                  </div>
                  <div className="h-8 w-full bg-gray-100 rounded-md mb-4"></div>
                  <div className="flex gap-4 mb-6">
                    <div className="h-24 w-1/4 bg-red-50 rounded-md flex items-center justify-center">
                      <span className="text-red-500 font-bold">12%</span>
                    </div>
                    <div className="h-24 w-3/4 bg-green-50 rounded-md flex items-center justify-center">
                      <span className="text-green-500 font-bold">88%</span>
                    </div>
                  </div>
                  <div className="h-6 w-3/4 bg-gray-100 rounded-md"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
