import React, { useState, useEffect } from "react";
import { 
  Globe, 
  Search, 
  BarChart3, 
  FileText, 
  Zap,
  Code,
  Plug,
  BrainCircuit,
  Shield,
  CheckCircle2,
  ArrowRight,
  CreditCard,
  CheckCircle,
  AlertTriangle,
  XCircle,
  TrendingUp
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PlatformSection = () => {
  const [activeSearch, setActiveSearch] = useState(0);
  const [isSearching, setIsSearching] = useState(false);
  const [score, setScore] = useState(850);
  const [paymentChance, setPaymentChance] = useState(95);
  const [showResults, setShowResults] = useState(true);

  const searchExamples = [
    { 
      name: "João Silva", 
      cpf: "123.456.789-00", 
      score: 850, 
      risk: "Baixo", 
      decision: "Aprovado",
      history: "Excelente",
      paymentChance: 95,
      color: "text-emerald-600",
      decisionColor: "text-green-600",
      decisionBg: "bg-green-50",
      decisionBorder: "border-green-200"
    },
    { 
      name: "Maria Santos", 
      cpf: "987.654.321-00", 
      score: 720, 
      risk: "Médio", 
      decision: "Análise Manual",
      history: "Bom",
      paymentChance: 78,
      color: "text-yellow-600",
      decisionColor: "text-yellow-600",
      decisionBg: "bg-yellow-50",
      decisionBorder: "border-yellow-200"
    },
    { 
      name: "Pedro Oliveira", 
      cpf: "456.789.123-00", 
      score: 680, 
      risk: "Médio", 
      decision: "Análise Manual",
      history: "Regular",
      paymentChance: 65,
      color: "text-yellow-600",
      decisionColor: "text-yellow-600",
      decisionBg: "bg-yellow-50",
      decisionBorder: "border-yellow-200"
    },
    { 
      name: "Ana Rodrigues", 
      cpf: "789.123.456-00", 
      score: 920, 
      risk: "Baixo", 
      decision: "Aprovado",
      history: "Excelente",
      paymentChance: 98,
      color: "text-emerald-600",
      decisionColor: "text-green-600",
      decisionBg: "bg-green-50",
      decisionBorder: "border-green-200"
    },
  ];

  // Efeito para animar o score e chance de pagamento quando muda a pesquisa
  useEffect(() => {
    if (!isSearching && showResults) {
      const targetScore = searchExamples[activeSearch].score;
      const targetChance = searchExamples[activeSearch].paymentChance;
      setScore(0);
      setPaymentChance(0);
      
      const scoreAnimation = setInterval(() => {
        setScore(prev => {
          if (prev >= targetScore) {
            clearInterval(scoreAnimation);
            return targetScore;
          }
          return prev + 20;
        });
      }, 30);

      const chanceAnimation = setInterval(() => {
        setPaymentChance(prev => {
          if (prev >= targetChance) {
            clearInterval(chanceAnimation);
            return targetChance;
          }
          return prev + 2;
        });
      }, 30);
      
      return () => {
        clearInterval(scoreAnimation);
        clearInterval(chanceAnimation);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSearch, isSearching, showResults]);

  // Efeito para ciclar entre as pesquisas
  useEffect(() => {
    const interval = setInterval(() => {
      setIsSearching(true);
      setShowResults(false);
      setScore(0);
      setPaymentChance(0);
      
      setTimeout(() => {
        setActiveSearch((prev) => (prev + 1) % searchExamples.length);
      }, 500);
      
      setTimeout(() => {
        setIsSearching(false);
        setShowResults(true);
      }, 1500);
      
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const currentSearch = searchExamples[activeSearch];
  return (
    <section id="platform" className="py-7 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-teal-500/10 to-emerald-500/10 border border-teal-200/50 text-teal-600 text-sm font-semibold mb-6 backdrop-blur-sm">
            <Zap size={18} className="mr-2 animate-pulse" />
            Escolha a Solução Ideal
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-teal-700 to-emerald-700 bg-clip-text text-transparent mb-6 leading-tight">
            Duas Formas de Usar a Crefy
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Seja através da nossa plataforma web intuitiva ou integrando nossa IA no seu sistema, você tem o poder da análise de crédito mais avançada.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="web-platform" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12 h-auto bg-gray-100 p-2 rounded-xl">
              <TabsTrigger 
                value="web-platform" 
                className="text-base md:text-lg font-semibold py-4 px-6 data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:text-teal-600 rounded-lg transition-all"
              >
                <Globe className="mr-2 h-5 w-5" />
                Plataforma Web
              </TabsTrigger>
              <TabsTrigger 
                value="api-integration" 
                className="text-base md:text-lg font-semibold py-4 px-6 data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:text-teal-600 rounded-lg transition-all"
              >
                <Code className="mr-2 h-5 w-5" />
                Integração com IA
              </TabsTrigger>
            </TabsList>

            {/* Aba 1: Plataforma Web */}
            <TabsContent value="web-platform" className="mt-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center shadow-lg">
                      <Search className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Pesquisa Direta e Instantânea
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Acesse nossa plataforma web e faça pesquisas de análise de crédito diretamente pela interface. 
                        Digite os dados do cliente e obtenha resultados completos em segundos.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center shadow-lg">
                      <BarChart3 className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Resultados Completos 
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Visualize análises detalhadas com gráficos interativos, relatórios completos e métricas 
                        avançadas. Tudo em um único lugar, de forma clara e profissional.
                      </p>
                    </div>
                  </div>

                

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center shadow-lg">
                      <CreditCard className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Sistema de Créditos
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        As pesquisas podem ser feitas adicionando créditos na plataforma. Adquira créditos de forma 
                        simples e use conforme sua necessidade. Cada pesquisa consome um crédito, permitindo total 
                        controle sobre seus gastos.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-700">
                        <CheckCircle2 className="text-teal-500 mr-3 flex-shrink-0" size={20} />
                        <span>Interface intuitiva e fácil de usar</span>
                      </li>
                      <li className="flex items-center text-gray-700">
                        <CheckCircle2 className="text-teal-500 mr-3 flex-shrink-0" size={20} />
                        <span>Sem necessidade de integração técnica</span>
                      </li>
                      <li className="flex items-center text-gray-700">
                        <CheckCircle2 className="text-teal-500 mr-3 flex-shrink-0" size={20} />
                        <span>Acesso de qualquer dispositivo</span>
                      </li>
                      <li className="flex items-center text-gray-700">
                        <CheckCircle2 className="text-teal-500 mr-3 flex-shrink-0" size={20} />
                        <span>Dashboard com métricas em tempo real</span>
                      </li>
                      <li className="flex items-center text-gray-700">
                        <CheckCircle2 className="text-teal-500 mr-3 flex-shrink-0" size={20} />
                        <span>Sistema de créditos flexível - adicione créditos e faça pesquisas quando precisar</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="relative">
                  <Card className="border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-teal-50 to-emerald-50 animate-float">
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        {/* Mockup da plataforma web com animação */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 rounded-full bg-red-400"></div>
                              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                              <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>
                            <Search className="text-gray-400" size={20} />
                          </div>
                          <div className="space-y-4">
                            {/* Campo de pesquisa */}
                            <div className="h-10 bg-gray-100 rounded-lg flex items-center px-4 relative overflow-hidden">
                              {isSearching ? (
                                <div className="flex items-center space-x-2 w-full">
                                  <div className="w-4 h-4 border-2 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
                                  <span className="text-teal-600 text-sm font-medium">Pesquisando...</span>
                                </div>
                              ) : (
                                <div className="flex items-center space-x-2 w-full">
                                  <Search className="text-gray-400" size={16} />
                                  <span className="text-gray-700 text-sm font-medium">{currentSearch.name} - {currentSearch.cpf}</span>
                                </div>
                              )}
                            </div>
                            
                            {/* Área de gráficos */}
                            {showResults && !isSearching ? (
                              <div className="bg-gradient-to-r from-teal-100 to-emerald-100 rounded-lg p-4 animate-fade-in">
                                <div className="h-32 bg-white rounded-lg flex items-center justify-center relative overflow-hidden">
                                  <BarChart3 className="text-teal-500" size={48} />
                                  {/* Animação de barras do gráfico */}
                                  <div className="absolute inset-0 flex items-end justify-center space-x-2 px-4 pb-2">
                                    <div className="w-6 bg-teal-400 rounded-t" style={{ height: '60%' }}></div>
                                    <div className="w-6 bg-emerald-400 rounded-t" style={{ height: '80%' }}></div>
                                    <div className="w-6 bg-teal-500 rounded-t" style={{ height: '45%' }}></div>
                                    <div className="w-6 bg-emerald-500 rounded-t" style={{ height: '90%' }}></div>
                                    <div className="w-6 bg-teal-400 rounded-t" style={{ height: '70%' }}></div>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div className="bg-gradient-to-r from-teal-100 to-emerald-100 rounded-lg p-4">
                                <div className="h-32 bg-white rounded-lg flex items-center justify-center">
                                  {isSearching ? (
                                    <div className="flex flex-col items-center space-y-2">
                                      <div className="w-8 h-8 border-2 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
                                      <span className="text-teal-600 text-xs font-medium">Analisando dados...</span>
                                    </div>
                                  ) : (
                                    <BarChart3 className="text-teal-500 opacity-50" size={48} />
                                  )}
                                </div>
                              </div>
                            )}
                            
                            {/* Resultados */}
                            {showResults && !isSearching ? (
                              <div className="space-y-3 animate-fade-in">
                                {/* Decisão da IA */}
                                <div className={`bg-white rounded-lg p-4 shadow-sm border-2 ${currentSearch.decisionBorder} ${currentSearch.decisionBg}`}>
                                  <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center space-x-2">
                                      <BrainCircuit className={`${currentSearch.decisionColor}`} size={18} />
                                      <span className="text-xs font-semibold text-gray-600">Decisão da IA</span>
                                    </div>
                                    {currentSearch.decision === "Aprovado" ? (
                                      <CheckCircle className="text-green-600" size={20} />
                                    ) : (
                                      <AlertTriangle className="text-yellow-600" size={20} />
                                    )}
                                  </div>
                                  <div className={`text-lg font-bold ${currentSearch.decisionColor}`}>
                                    {currentSearch.decision}
                                  </div>
                                </div>

                                {/* Grid de métricas */}
                                <div className="grid grid-cols-2 gap-3">
                                  <div className="bg-white rounded-lg p-3 shadow-sm border border-teal-100">
                                    <div className="text-xs text-gray-500 mb-1">Score</div>
                                    <div className={`text-2xl font-bold transition-all duration-500 ${currentSearch.color}`}>
                                      {score}
                                    </div>
                                  </div>
                                  <div className="bg-white rounded-lg p-3 shadow-sm border border-teal-100">
                                    <div className="text-xs text-gray-500 mb-1">Risco</div>
                                    <div className={`text-lg font-bold transition-all duration-500 ${currentSearch.color}`}>
                                      {currentSearch.risk}
                                    </div>
                                  </div>
                                </div>

                                {/* Histórico de Crédito */}
                                <div className="bg-white rounded-lg p-3 shadow-sm border border-teal-100">
                                  <div className="flex items-center justify-between">
                                    <div className="text-xs text-gray-500">Histórico de Crédito</div>
                                    <div className={`text-sm font-bold ${currentSearch.color}`}>
                                      {currentSearch.history}
                                    </div>
                                  </div>
                                </div>

                                {/* Chance de Pagamento */}
                                <div className="bg-white rounded-lg p-3 shadow-sm border border-teal-100">
                                  <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center space-x-1">
                                      <TrendingUp className="text-teal-500" size={16} />
                                      <span className="text-xs text-gray-500">Chance de Pagamento</span>
                                    </div>
                                    <div className={`text-lg font-bold transition-all duration-500 ${currentSearch.color}`}>
                                      {paymentChance}%
                                    </div>
                                  </div>
                                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                                    <div 
                                      className={`h-full rounded-full transition-all duration-500 ${
                                        paymentChance >= 85 ? 'bg-green-500' : 
                                        paymentChance >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                                      }`}
                                      style={{ width: `${paymentChance}%` }}
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div className="space-y-3">
                                <div className="bg-gray-50 rounded-lg p-4">
                                  <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                  <div className="bg-gray-50 rounded-lg p-3">
                                    <div className="text-xs text-gray-400 mb-1">Score</div>
                                    <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
                                  </div>
                                  <div className="bg-gray-50 rounded-lg p-3">
                                    <div className="text-xs text-gray-400 mb-1">Risco</div>
                                    <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
                                  </div>
                                </div>
                                <div className="bg-gray-50 rounded-lg p-3">
                                  <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
                                </div>
                                <div className="bg-gray-50 rounded-lg p-3">
                                  <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Aba 2: Integração com IA */}
            <TabsContent value="api-integration" className="mt-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="relative order-2 lg:order-1">
                  <Card className="border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-teal-50 animate-float">
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        {/* Mockup da integração */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                          <div className="flex items-center space-x-2 mb-4">
                            <Code className="text-teal-500" size={20} />
                            <span className="text-sm font-semibold text-gray-700">Sistema da Empresa</span>
                          </div>
                          <div className="space-y-3">
                            <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-400">
                              <div className="text-gray-500">POST /api/v1/analyze</div>
                              <div className="mt-2">{"{"}</div>
                              <div className="ml-4">"cpf": "123.456.789-00",</div>
                              <div className="ml-4">"data": "..."</div>
                              <div>{"}"}</div>
                            </div>
                            <div className="flex items-center justify-center">
                              <ArrowRight className="text-teal-500" size={24} />
                            </div>
                            <div className="bg-gradient-to-r from-teal-500 to-emerald-600 rounded-lg p-4 text-white">
                              <div className="flex items-center space-x-2 mb-2">
                                <BrainCircuit size={20} />
                                <span className="font-semibold">IA Crefy</span>
                              </div>
                              <div className="text-sm opacity-90">Análise em tempo real</div>
                            </div>
                            <div className="flex items-center justify-center">
                              <ArrowRight className="text-teal-500" size={24} />
                            </div>
                            <div className="bg-white border-2 border-teal-200 rounded-lg p-4">
                              <div className="text-xs text-gray-500 mb-1">Resultado</div>
                              <div className="text-sm font-semibold text-gray-900">Score: 850 | Aprovado</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6 order-1 lg:order-2">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center shadow-lg">
                      <Plug className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Integre no Seu Sistema
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Use a IA da Crefy diretamente no sistema próprio da sua empresa através de nossa API robusta. 
                        Mantenha seus processos internos e adicione o poder da análise inteligente.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center shadow-lg">
                      <BrainCircuit className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        IA Personalizada para Seu Negócio
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Nossa IA se adapta aos critérios específicos da sua empresa, mantendo a identidade visual 
                        e o fluxo de trabalho que você já conhece.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center shadow-lg">
                      <Shield className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Segurança e Conformidade
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Dados criptografados, API segura e total conformidade com LGPD. Integre com confiança 
                        sabendo que seus dados estão protegidos.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-700">
                        <CheckCircle2 className="text-teal-500 mr-3 flex-shrink-0" size={20} />
                        <span>API RESTful completa e documentada</span>
                      </li>
                      <li className="flex items-center text-gray-700">
                        <CheckCircle2 className="text-teal-500 mr-3 flex-shrink-0" size={20} />
                        <span>Integração rápida em 2-4 semanas</span>
                      </li>
                      <li className="flex items-center text-gray-700">
                        <CheckCircle2 className="text-teal-500 mr-3 flex-shrink-0" size={20} />
                        <span>Suporte técnico dedicado</span>
                      </li>
                      <li className="flex items-center text-gray-700">
                        <CheckCircle2 className="text-teal-500 mr-3 flex-shrink-0" size={20} />
                        <span>Escalável para qualquer volume</span>
                      </li>
                    </ul>
                  </div>

                 
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;

