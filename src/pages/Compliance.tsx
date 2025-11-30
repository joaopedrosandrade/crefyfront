import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { CheckCircle, Shield, FileCheck, Award } from "lucide-react";

const Compliance = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-riskon-900 mb-8">
            Compliance e Conformidade
          </h1>
          <div className="text-gray-700 space-y-6 leading-relaxed">
            <p className="text-sm text-gray-500 mb-8">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>

            <section className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded mb-8">
              <div className="flex items-start">
                <Award className="text-teal-500 mr-3 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg text-teal-900 mb-2">Compromisso com a Conformidade</h3>
                  <p className="text-teal-800">
                    A Crefy está comprometida em manter os mais altos padrões de conformidade regulatória e ética em todas as nossas operações.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-riskon-900 mb-4 flex items-center">
                <Shield className="mr-2 text-teal-500" size={28} />
                1. Conformidade Regulatória
              </h2>
              <p className="mb-4">Estamos em conformidade com as seguintes regulamentações:</p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Lei Geral de Proteção de Dados (LGPD)</h3>
                  <p className="text-sm">
                    Totalmente aderente à LGPD, implementamos controles rigorosos para proteção de dados pessoais, incluindo políticas de privacidade, gestão de consentimento e exercício de direitos dos titulares.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Normas do Banco Central</h3>
                  <p className="text-sm">
                    Seguimos todas as diretrizes e normas do Banco Central do Brasil relacionadas a análise de crédito, prevenção à lavagem de dinheiro e proteção ao consumidor.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Código de Defesa do Consumidor (CDC)</h3>
                  <p className="text-sm">
                    Respeitamos integralmente o CDC, garantindo transparência, clareza nas informações e proteção dos direitos dos consumidores.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Marco Civil da Internet</h3>
                  <p className="text-sm">
                    Em conformidade com o Marco Civil da Internet, garantimos neutralidade, privacidade e proteção de dados na internet.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-riskon-900 mb-4 flex items-center">
                <FileCheck className="mr-2 text-teal-500" size={28} />
                2. Certificações e Padrões
              </h2>
              <p className="mb-4">Mantemos as seguintes certificações e aderência a padrões internacionais:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>ISO 27001:</strong> Gestão de Segurança da Informação</li>
                <li><strong>ISO 27018:</strong> Proteção de dados pessoais na nuvem</li>
                <li><strong>PCI DSS:</strong> Padrão de segurança para dados de cartão de pagamento</li>
                <li><strong>SOC 2 Type II:</strong> Controles de segurança, disponibilidade e confidencialidade</li>
                <li><strong>NIST Cybersecurity Framework:</strong> Estrutura de segurança cibernética</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-riskon-900 mb-4 flex items-center">
                <CheckCircle className="mr-2 text-teal-500" size={28} />
                3. Programas de Conformidade
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Programa de Prevenção à Lavagem de Dinheiro</h3>
                  <p>
                    Implementamos controles rigorosos para detectar e prevenir atividades suspeitas, incluindo monitoramento de transações, análise de padrões e reporte às autoridades competentes quando necessário.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Gestão de Riscos</h3>
                  <p>
                    Mantemos um programa abrangente de gestão de riscos que identifica, avalia e mitiga riscos operacionais, regulatórios e de segurança.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Código de Ética e Conduta</h3>
                  <p>
                    Todos os funcionários são treinados e devem aderir ao nosso Código de Ética e Conduta, que estabelece padrões elevados de integridade e comportamento ético.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-riskon-900 mb-4">4. Auditorias e Monitoramento</h2>
              <p className="mb-4">Realizamos auditorias regulares para garantir conformidade contínua:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Auditorias internas trimestrais</li>
                <li>Auditorias externas anuais por empresas certificadas</li>
                <li>Revisões de conformidade mensais</li>
                <li>Monitoramento contínuo de controles</li>
                <li>Testes de conformidade e validação de processos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-riskon-900 mb-4">5. Treinamento e Conscientização</h2>
              <p>
                Todos os funcionários recebem treinamento regular sobre conformidade regulatória, proteção de dados, segurança da informação e ética. Mantemos programas de conscientização contínua para garantir que todos compreendam e sigam nossos padrões de conformidade.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-riskon-900 mb-4">6. Relatórios de Conformidade</h2>
              <p>
                Fornecemos relatórios de conformidade aos clientes e reguladores conforme exigido. Mantemos documentação completa de todos os controles, processos e evidências de conformidade.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-riskon-900 mb-4">7. Canal de Denúncias</h2>
              <p className="mb-4">
                Mantemos um canal seguro e confidencial para recebimento de denúncias relacionadas a questões de conformidade ou ética:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>E-mail:</strong> compliance@crefy.com.br</li>
                <li><strong>Telefone:</strong> (11) 3000-0000</li>
                <li><strong>Formulário online:</strong> Disponível em nosso site</li>
              </ul>
              <p className="mt-4">
                Todas as denúncias são tratadas com confidencialidade e investigadas adequadamente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-riskon-900 mb-4">8. Atualizações Regulatórias</h2>
              <p>
                Monitoramos continuamente mudanças em regulamentações e padrões relevantes, adaptando nossos processos e controles para garantir conformidade contínua. Nossa equipe de compliance trabalha em estreita colaboração com especialistas legais e regulatórios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-riskon-900 mb-4">9. Contato</h2>
              <p>
                Para questões relacionadas a compliance e conformidade:
              </p>
              <p className="mt-4">
                <strong>E-mail:</strong> compliance@crefy.com.br<br />
                <strong>Telefone:</strong> (11) 3000-0000<br />
                <strong>Horário:</strong> Segunda a Sexta, 9h às 18h
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Compliance;

