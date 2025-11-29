
import React from "react";
import { 
  BarChart3, 
  BrainCircuit, 
  Clock, 
  LineChart, 
  Shield, 
  Users,
  Sparkles,
  Zap,
  TrendingUp,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: BrainCircuit,
    title: "IA Avançada",
    description: "Algoritmos proprietários que analisam milhares de variáveis para decisões precisas.",
    gradient: "from-teal-500 to-teal-600",
    bgGradient: "from-teal-50 to-teal-100",
  },
  {
    icon: Clock,
    title: "Decisões em Tempo Real",
    description: "Respostas em segundos, não em dias, melhorando a experiência do cliente.",
    gradient: "from-teal-600 to-teal-500",
    bgGradient: "from-teal-50 to-teal-100",
  },
  {
    icon: LineChart,
    title: "Análise Preditiva",
    description: "Previsão de comportamento e capacidade de pagamento com alta precisão.",
    gradient: "from-teal-500 to-emerald-500",
    bgGradient: "from-teal-50 to-emerald-50",
  },
  {
    icon: Shield,
    title: "Segurança Avançada",
    description: "Proteção de dados de nível bancário e conformidade com todas as regulamentações.",
    gradient: "from-emerald-600 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50",
  },
  {
    icon: Users,
    title: "Inclusão Financeira",
    description: "Avalie clientes sem histórico de crédito tradicional de forma justa.",
    gradient: "from-teal-500 to-emerald-600",
    bgGradient: "from-teal-50 to-emerald-50",
  },
  {
    icon: Sparkles,
    title: "Personalização Total",
    description: "Adaptável aos seus critérios de negócio e requisitos específicos.",
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50",
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-teal-500/10 to-emerald-500/10 border border-teal-200/50 text-teal-600 text-sm font-semibold mb-6 backdrop-blur-sm">
            <Zap size={18} className="mr-2 animate-pulse" />
            Recursos Avançados
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-teal-700 to-emerald-700 bg-clip-text text-transparent mb-6 leading-tight">
            Tecnologia Avançada para Decisões Inteligentes
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Nossa plataforma combina tecnologia de ponta com experiência em crédito para transformar seu processo de avaliação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group relative bg-white/80 backdrop-blur-sm hover:scale-105 hover:-translate-y-2"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <CardContent className="p-8 relative z-10">
                  <div className={`mb-6 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-900 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>
                  
                  {/* Decorative line */}
                  <div className={`mt-6 h-1 w-0 bg-gradient-to-r ${feature.gradient} group-hover:w-full transition-all duration-500 rounded-full`}></div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-20 relative">
          <div className="bg-gradient-to-br from-gray-50 via-white to-teal-50/30 rounded-3xl shadow-2xl p-8 md:p-16 border border-gray-100/50 backdrop-blur-sm relative overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgb(0 0 0) 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }}></div>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center relative z-10">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-teal-500/10 to-emerald-500/10 border border-teal-200/50 text-teal-600 text-sm font-semibold mb-6 backdrop-blur-sm">
                  <BarChart3 size={18} className="mr-2" />
                  Resultados comprovados
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6 leading-tight">
                  Aumente aprovações e reduza inadimplência simultaneamente
                </h3>
                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                  Nossa tecnologia proprietária permite que você identifique bons pagadores que seriam rejeitados por métodos tradicionais, ao mesmo tempo que detecta riscos invisíveis.
                </p>
                <ul className="space-y-5 mb-10">
                  <li className="flex items-start group">
                    <div className="text-teal-500 mr-4 mt-1 flex-shrink-0 bg-teal-50 rounded-full p-2 group-hover:scale-110 transition-transform">
                      <CheckCircle2 size={20} className="fill-teal-500 text-white" />
                    </div>
                    <span className="text-gray-700 text-lg font-medium group-hover:text-gray-900 transition-colors">
                      Aumento médio de <span className="text-teal-600 font-bold">35%</span> em aprovações com bons pagadores
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <div className="text-teal-500 mr-4 mt-1 flex-shrink-0 bg-teal-50 rounded-full p-2 group-hover:scale-110 transition-transform">
                      <CheckCircle2 size={20} className="fill-teal-500 text-white" />
                    </div>
                    <span className="text-gray-700 text-lg font-medium group-hover:text-gray-900 transition-colors">
                      Redução média de <span className="text-teal-600 font-bold">40%</span> em inadimplência
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <div className="text-teal-500 mr-4 mt-1 flex-shrink-0 bg-teal-50 rounded-full p-2 group-hover:scale-110 transition-transform">
                      <CheckCircle2 size={20} className="fill-teal-500 text-white" />
                    </div>
                    <span className="text-gray-700 text-lg font-medium group-hover:text-gray-900 transition-colors">
                      Economia de tempo operacional de até <span className="text-teal-600 font-bold">95%</span>
                    </span>
                  </li>
                </ul>
                <Button className="bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <TrendingUp size={20} className="mr-2" />
                  Ver Estudos de Caso
                </Button>
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="relative space-y-6">
                  {/* Before Card */}
                  <div className="bg-white rounded-2xl shadow-xl p-8 relative border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                    <div className="absolute -top-3 -left-3 bg-gradient-to-r from-gray-400 to-gray-500 text-white text-sm font-bold px-5 py-2 rounded-xl shadow-lg">
                      Antes da Crefy
                    </div>
                    <div className="h-10 w-full bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg mb-6 animate-pulse"></div>
                    <div className="flex gap-4 mb-6">
                      <div className="h-32 w-1/2 bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center border-2 border-red-300 shadow-md hover:scale-105 transition-transform">
                        <span className="text-red-600 font-bold text-2xl">32%</span>
                      </div>
                      <div className="h-32 w-1/2 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center border-2 border-green-300 shadow-md hover:scale-105 transition-transform">
                        <span className="text-green-600 font-bold text-2xl">68%</span>
                      </div>
                    </div>
                    <div className="h-8 w-3/4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg"></div>
                  </div>
                  
                  {/* After Card */}
                  <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl shadow-xl p-8 relative border-2 border-teal-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                    <div className="absolute -top-3 -left-3 bg-gradient-to-r from-teal-500 to-emerald-600 text-white text-sm font-bold px-5 py-2 rounded-xl shadow-lg">
                      Com a Crefy
                    </div>
                    <div className="h-10 w-full bg-gradient-to-r from-teal-100 to-emerald-100 rounded-lg mb-6"></div>
                    <div className="flex gap-4 mb-6">
                      <div className="h-32 w-1/4 bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center border-2 border-red-300 shadow-md hover:scale-105 transition-transform">
                        <span className="text-red-600 font-bold text-2xl">12%</span>
                      </div>
                      <div className="h-32 w-3/4 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center border-2 border-green-300 shadow-md hover:scale-105 transition-transform relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                        <span className="text-green-600 font-bold text-2xl relative z-10">88%</span>
                      </div>
                    </div>
                    <div className="h-8 w-3/4 bg-gradient-to-r from-teal-100 to-emerald-100 rounded-lg"></div>
                  </div>
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
