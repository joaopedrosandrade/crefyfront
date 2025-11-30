import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ShieldCheck, Lock, Eye, Server, Key, AlertTriangle } from "lucide-react";

const Seguranca = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-riskon-900 mb-8">
            Segurança
          </h1>
          <div className="text-gray-700 space-y-6 leading-relaxed">
            <p className="text-sm text-gray-500 mb-8">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>

            <section className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mb-8">
              <div className="flex items-start">
                <ShieldCheck className="text-blue-500 mr-3 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg text-blue-900 mb-2">Compromisso com a Segurança</h3>
                  <p className="text-blue-800">
                    A segurança dos dados é nossa prioridade máxima. Implementamos múltiplas camadas de proteção para garantir que suas informações estejam sempre seguras.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-riskon-900 mb-4 flex items-center">
                <Lock className="mr-2 text-teal-500" size={28} />
                1. Criptografia
              </h2>
              <p className="mb-4">
                Todos os dados transmitidos e armazenados são protegidos com criptografia de ponta a ponta:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Criptografia em trânsito:</strong> TLS 1.3 para todas as comunicações</li>
                <li><strong>Criptografia em repouso:</strong> AES-256 para dados armazenados</li>
                <li><strong>Chaves de criptografia:</strong> Gerenciadas em hardware seguro (HSM)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-riskon-900 mb-4 flex items-center">
                <Server className="mr-2 text-teal-500" size={28} />
                2. Infraestrutura Segura
              </h2>
              <p className="mb-4">Nossa infraestrutura é construída com segurança em mente:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Servidores hospedados em data centers certificados (ISO 27001)</li>
                <li>Redundância e backup automático de dados</li>
                <li>Monitoramento 24/7 de segurança</li>
                <li>Firewalls e sistemas de detecção de intrusão</li>
                <li>Isolamento de ambientes de produção e desenvolvimento</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-riskon-900 mb-4 flex items-center">
                <Key className="mr-2 text-teal-500" size={28} />
                3. Controle de Acesso
              </h2>
              <p className="mb-4">Implementamos controles rigorosos de acesso:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Autenticação multifator (MFA) obrigatória</li>
                <li>Princípio do menor privilégio para funcionários</li>
                <li>Revisões regulares de permissões de acesso</li>
                <li>Logs detalhados de todas as ações realizadas</li>
                <li>Senhas fortes e políticas de expiração</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-riskon-900 mb-4 flex items-center">
                <Eye className="mr-2 text-teal-500" size={28} />
                4. Monitoramento e Detecção
              </h2>
              <p className="mb-4">Monitoramos continuamente nossa plataforma:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Detecção de atividades suspeitas em tempo real</li>
                <li>Análise comportamental para identificar anomalias</li>
                <li>Alertas automáticos para potenciais ameaças</li>
                <li>Análise de logs e auditoria contínua</li>
                <li>Testes de penetração regulares</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-riskon-900 mb-4 flex items-center">
                <AlertTriangle className="mr-2 text-teal-500" size={28} />
                5. Gestão de Incidentes
              </h2>
              <p className="mb-4">Temos um plano robusto de resposta a incidentes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Equipe dedicada de resposta a incidentes</li>
                <li>Procedimentos documentados para diferentes cenários</li>
                <li>Notificação imediata em caso de violação de dados</li>
                <li>Análise pós-incidente e melhorias contínuas</li>
                <li>Comunicação transparente com clientes afetados</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-riskon-900 mb-4">6. Conformidade e Certificações</h2>
              <p className="mb-4">Estamos em conformidade com:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Lei Geral de Proteção de Dados (LGPD)</li>
                <li>ISO 27001 (Gestão de Segurança da Informação)</li>
                <li>PCI DSS (para processamento de dados financeiros)</li>
                <li>Normas do Banco Central do Brasil</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-riskon-900 mb-4">7. Treinamento e Conscientização</h2>
              <p>
                Todos os funcionários recebem treinamento regular em segurança da informação, privacidade de dados e melhores práticas. Realizamos simulações de phishing e outros exercícios de segurança periodicamente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-riskon-900 mb-4">8. Relatórios de Segurança</h2>
              <p>
                Realizamos auditorias de segurança regulares e fornecemos relatórios de conformidade aos clientes conforme necessário. Mantemos transparência sobre nossas práticas de segurança.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-riskon-900 mb-4">9. Responsabilidade de Divulgação</h2>
              <p>
                Se você descobrir uma vulnerabilidade de segurança, pedimos que entre em contato conosco de forma responsável através de seguranca@crefy.com.br. Valorizamos a comunidade de segurança e trabalhamos com pesquisadores de segurança de boa-fé.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-riskon-900 mb-4">10. Contato</h2>
              <p>
                Para questões relacionadas à segurança, entre em contato:
              </p>
              <p className="mt-4">
                <strong>E-mail:</strong> seguranca@crefy.com.br<br />
                <strong>Telefone:</strong> (11) 3000-0000
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

export default Seguranca;

