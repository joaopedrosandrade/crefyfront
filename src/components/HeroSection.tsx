
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, ShieldCheck, AlertTriangle, CheckCircle2, XCircle } from "lucide-react";

const HeroSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [creditScore, setCreditScore] = useState(0);
  const [decision, setDecision] = useState("");
  const [loading, setLoading] = useState(false);

  const creditProfiles = [
    { name: "João Silva", score: 750, income: "R$ 5.200", history: "Bom", decision: "Aprovado", color: "text-green-500" },
    { name: "Maria Santos", score: 620, income: "R$ 3.800", history: "Regular", decision: "Análise Manual", color: "text-yellow-500" },
    { name: "Pedro Oliveira", score: 490, income: "R$ 2.900", history: "Ruim", decision: "Negado", color: "text-red-500" },
    { name: "Ana Rodrigues", score: 800, income: "R$ 7.500", history: "Excelente", decision: "Aprovado", color: "text-green-500" },
    { name: "Carlos Ferreira", score: 540, income: "R$ 4.100", history: "Regular", decision: "Análise Manual", color: "text-yellow-500" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(true);
      setCreditScore(0);
      
      setTimeout(() => {
        setActiveStep((prev) => (prev + 1) % creditProfiles.length);
      }, 500);
      
      setTimeout(() => {
        setLoading(false);
        const scoreAnimation = setInterval(() => {
          setCreditScore(prev => {
            if (prev >= creditProfiles[(activeStep + 1) % creditProfiles.length].score) {
              clearInterval(scoreAnimation);
              return creditProfiles[(activeStep + 1) % creditProfiles.length].score;
            }
            return prev + 15;
          });
        }, 30);
        
        return () => clearInterval(scoreAnimation);
      }, 1500);
      
      setTimeout(() => {
        setDecision(creditProfiles[(activeStep + 1) % creditProfiles.length].decision);
      }, 2500);
      
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeStep]);

  const getDecisionIcon = (decision) => {
    switch (decision) {
      case "Aprovado":
        return <CheckCircle2 size={24} className="text-green-500" />;
      case "Análise Manual":
        return <AlertTriangle size={24} className="text-yellow-500" />;
      case "Negado":
        return <XCircle size={24} className="text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
              <span className="flex items-center">
                <ShieldCheck size={16} className="mr-2" />
                Decisões de crédito inteligentes com IA
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-riskon-900 leading-tight">
              Transforme suas <span className="text-teal-500">decisões de crédito</span> com inteligência artificial
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl">
              A Crefy utiliza algoritmos avançados de IA para analisar dados e fornecer decisões de crédito precisas e rápidas, reduzindo riscos e aumentando a eficiência.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-6">
                Comece Gratuitamente
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-teal-500 text-teal-500 hover:bg-teal-50 px-6 py-6">
                Agende uma Demo
              </Button>
            </div>
            
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-start">
                <CheckCircle size={20} className="text-teal-500 mr-2 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-riskon-900">Decisões rápidas</h4>
                  <p className="text-sm text-gray-600">Resultados em segundos</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle size={20} className="text-teal-500 mr-2 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-riskon-900">Redução de risco</h4>
                  <p className="text-sm text-gray-600">Até 90% mais preciso</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle size={20} className="text-teal-500 mr-2 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-riskon-900">Totalmente seguro</h4>
                  <p className="text-sm text-gray-600">Proteção de dados</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center relative">
            <div className="w-full max-w-lg">
              {/* Animated Credit Decision Dashboard */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden animate-float">
                {/* Dashboard Header */}
                <div className="bg-riskon-900 p-4 text-white">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold">Crefy • Análise de Crédito</h3>
                      <p className="text-white/70 text-sm">Decisão em tempo real com IA</p>
                    </div>
                    <div className="flex gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="px-2 py-1 rounded bg-teal-500/20 border border-teal-500/30 text-teal-300">
                      Modo: Automático com IA
                    </div>
                    <div className="px-2 py-1 rounded bg-white/10 text-white/60">
                      Revisão Manual Disponível
                    </div>
                  </div>
                </div>
                
                {/* Dashboard Content */}
                <div className="p-6 space-y-6">
                  {/* Customer Information */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-700 mb-2">Informações do Cliente</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Nome</p>
                        <p className="font-medium text-riskon-900">{creditProfiles[activeStep].name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Renda Mensal</p>
                        <p className="font-medium text-riskon-900">{creditProfiles[activeStep].income}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Histórico</p>
                        <p className="font-medium text-riskon-900">{creditProfiles[activeStep].history}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* AI Analysis Process */}
                  <div className="relative">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-medium text-gray-700">Análise de IA em Andamento</h4>
                      {loading ? (
                        <div className="flex items-center text-blue-600">
                          <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mr-2"></div>
                          <span className="text-sm">Processando</span>
                        </div>
                      ) : (
                        <div className="text-sm text-green-600 font-medium">Completo</div>
                      )}
                    </div>
                    
                    {/* Progress Bars */}
                    <div className="space-y-6">
                      {/* Credit Score - Changed from "Score de Crédito" to "Análise de Crédito" */}
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-700">Análise de Crédito</span>
                          <span className="font-medium">{creditScore}</span>
                        </div>
                        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className={`h-full transition-all duration-1000 ease-out ${
                              creditScore >= 700 ? 'bg-green-500' : 
                              creditScore >= 600 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${(creditScore / 850) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      {/* Risk Assessment */}
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium text-gray-700">Recomendação da IA</h4>
                          {decision && (
                            <div className="flex items-center gap-2">
                              {getDecisionIcon(decision)}
                              <span className={`text-sm font-medium ${
                                decision === "Aprovado" ? "text-green-500" : 
                                decision === "Análise Manual" ? "text-yellow-500" : "text-red-500"
                              }`}>
                                {decision}
                              </span>
                            </div>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 mb-4 italic">
                          {decision === "Análise Manual" 
                            ? "Sistema configurado para revisão humana neste caso"
                            : "Sistema configurável para aprovação automática ou revisão manual"}
                        </p>
                        
                        {decision && (
                          <div className={`p-4 rounded-lg border ${
                            decision === "Aprovado" ? "border-green-200 bg-green-50" : 
                            decision === "Análise Manual" ? "border-yellow-200 bg-yellow-50" : 
                            "border-red-200 bg-red-50"
                          }`}>
                            <p className="text-sm">
                              {decision === "Aprovado" 
                                ? "Cliente aprovado com base no excelente histórico e score de crédito. Risco baixo." 
                                : decision === "Análise Manual"
                                ? "Necessário revisão manual por analista. Alguns pontos requerem atenção."
                                : "Cliente não aprovado automaticamente. Alto risco identificado pela IA."}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Security badge */}
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg flex items-center gap-2">
                <ShieldCheck size={24} className="text-teal-500" />
                <div>
                  <p className="text-xs font-medium text-gray-800">100% Seguro</p>
                  <p className="text-xs text-gray-600">Dados Protegidos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
