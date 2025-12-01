
import React from "react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Database, 
  FileText, 
  PieChart, 
  Zap,
  PlayCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    icon: Database,
    title: "Conexão de Dados",
    description: "Integre facilmente com suas fontes de dados existentes ou use nossa API.",
    step: "01",
    gradient: "from-teal-500 to-teal-600",
    bgGradient: "from-teal-50 to-teal-100",
  },
  {
    icon: PieChart,
    title: "Análise de IA",
    description: "Nossos algoritmos analisam centenas de variáveis em segundos.",
    step: "02",
    gradient: "from-teal-600 to-emerald-500",
    bgGradient: "from-teal-50 to-emerald-50",
  },
  {
    icon: FileText,
    title: "Geração de Score",
    description: "Um score preciso é criado com base em modelos preditivos avançados.",
    step: "03",
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50",
  },
  {
    icon: Zap,
    title: "Decisão Automática",
    description: "Receba uma decisão instantânea baseada em seus critérios personalizados.",
    step: "04",
    gradient: "from-teal-500 to-emerald-600",
    bgGradient: "from-teal-50 to-emerald-50",
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-10 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-teal-200/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-200/15 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-teal-500/10 to-emerald-500/10 border border-teal-200/50 text-teal-600 text-sm font-semibold mb-6 backdrop-blur-sm">
            <PlayCircle size={18} className="mr-2" />
            Processo Simplificado
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-teal-700 to-emerald-700 bg-clip-text text-transparent mb-6 leading-tight">
            Como a Crefy Funciona
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Nossa solução simplifica o processo de decisão de crédito do início ao fim.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-200 via-teal-300 to-emerald-200 transform -translate-y-1/2 z-0"></div>
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative z-10">
                <Card 
                  className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group relative bg-white/80 backdrop-blur-sm hover:scale-105 hover:-translate-y-2"
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <CardContent className="p-8 relative z-10">
                    <div className="mb-6 flex justify-between items-start">
                      <div className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                        <Icon className="text-white" size={28} />
                      </div>
                      <span className={`text-4xl font-bold bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500`}>
                        {step.step}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-900 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                      {step.description}
                    </p>
                    
                    {/* Decorative line */}
                    <div className={`mt-6 h-1 w-0 bg-gradient-to-r ${step.gradient} group-hover:w-full transition-all duration-500 rounded-full`}></div>
                  </CardContent>
                </Card>
                
                {/* Arrow connector for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}>
                      <ArrowRight className="text-white" size={16} />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      
      </div>
    </section>
  );
};

export default HowItWorksSection;
