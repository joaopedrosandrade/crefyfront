import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Privacidade = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-riskon-900 mb-8">
            Política de Privacidade
          </h1>
          <div className="text-gray-700 space-y-6 leading-relaxed">
            <p className="text-sm text-gray-500 mb-8">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>

            <section>
              <h2 className="text-2xl font-bold text-riskon-900 mb-4">1. Introdução</h2>
              <p>
                A Crefy está comprometida em proteger a privacidade e os dados pessoais de nossos usuários. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-riskon-900 mb-4">2. Informações que Coletamos</h2>
              <p className="mb-4">Coletamos os seguintes tipos de informações:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Dados de identificação:</strong> nome, e-mail, telefone, CPF/CNPJ</li>
                <li><strong>Dados de uso:</strong> informações sobre como você utiliza nossa plataforma</li>
                <li><strong>Dados técnicos:</strong> endereço IP, tipo de navegador, dispositivo utilizado</li>
                <li><strong>Dados financeiros:</strong> informações necessárias para análise de crédito (com seu consentimento)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-riskon-900 mb-4">3. Como Usamos suas Informações</h2>
              <p className="mb-4">Utilizamos suas informações para:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fornecer e melhorar nossos serviços de análise de crédito</li>
                <li>Processar suas solicitações e transações</li>
                <li>Comunicar-nos com você sobre nossos serviços</li>
                <li>Cumprir obrigações legais e regulatórias</li>
                <li>Prevenir fraudes e garantir a segurança</li>
                <li>Realizar análises e pesquisas para melhorar nossos algoritmos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-riskon-900 mb-4">4. Compartilhamento de Dados</h2>
              <p className="mb-4">
                Não vendemos seus dados pessoais. Podemos compartilhar informações apenas nas seguintes situações:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Com seu consentimento explícito</li>
                <li>Para cumprir obrigações legais</li>
                <li>Com prestadores de serviços que nos auxiliam (sob acordos de confidencialidade)</li>
                <li>Em caso de fusão, aquisição ou venda de ativos (com notificação prévia)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-riskon-900 mb-4">5. Segurança dos Dados</h2>
              <p>
                Implementamos medidas técnicas e organizacionais robustas para proteger seus dados, incluindo criptografia, controles de acesso, monitoramento contínuo e auditorias regulares de segurança.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-riskon-900 mb-4">6. Seus Direitos</h2>
              <p className="mb-4">De acordo com a LGPD, você tem direito a:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Confirmar a existência de tratamento de dados</li>
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                <li>Solicitar anonimização, bloqueio ou eliminação de dados desnecessários</li>
                <li>Solicitar portabilidade dos dados</li>
                <li>Revogar seu consentimento</li>
                <li>Ser informado sobre compartilhamento de dados</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-riskon-900 mb-4">7. Retenção de Dados</h2>
              <p>
                Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades descritas nesta política, salvo quando a retenção for exigida ou permitida por lei.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-riskon-900 mb-4">8. Cookies e Tecnologias Similares</h2>
              <p>
                Utilizamos cookies e tecnologias similares para melhorar sua experiência. Para mais informações, consulte nossa <a href="/cookies" className="text-teal-500 hover:text-teal-600 underline">Política de Cookies</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-riskon-900 mb-4">9. Alterações nesta Política</h2>
              <p>
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre mudanças significativas através de nosso site ou por e-mail.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-riskon-900 mb-4">10. Contato</h2>
              <p>
                Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato conosco:
              </p>
              <p className="mt-4">
                <strong>E-mail:</strong> privacidade@crefy.com.br<br />
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

export default Privacidade;

