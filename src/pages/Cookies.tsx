import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-riskon-900 mb-8">
            Política de Cookies
          </h1>
          <div className="text-gray-700 space-y-6 leading-relaxed">
            <p className="text-sm text-gray-500 mb-8">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>

            <section>
              <h2 className="text-2xl font-bold text-riskon-900 mb-4">1. O que são Cookies?</h2>
              <p>
                Cookies são pequenos arquivos de texto armazenados em seu dispositivo quando você visita nosso site. Eles nos ajudam a fornecer, proteger e melhorar nossos serviços, além de personalizar sua experiência.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-riskon-900 mb-4">2. Como Usamos Cookies</h2>
              <p className="mb-4">Utilizamos cookies para:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Manter você conectado à sua conta</li>
                <li>Lembrar suas preferências e configurações</li>
                <li>Analisar como você usa nosso site para melhorar nossos serviços</li>
                <li>Personalizar conteúdo e anúncios</li>
                <li>Garantir a segurança da plataforma</li>
                <li>Medir a eficácia de nossas campanhas</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-riskon-900 mb-4">3. Tipos de Cookies que Utilizamos</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-riskon-900 mb-3">Cookies Essenciais</h3>
                <p className="mb-2">
                  Essenciais para o funcionamento do site. Sem eles, alguns recursos não estarão disponíveis.
                </p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Autenticação de usuário</li>
                  <li>Segurança e prevenção de fraudes</li>
                  <li>Balanceamento de carga</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-riskon-900 mb-3">Cookies de Desempenho</h3>
                <p className="mb-2">
                  Coletam informações sobre como você usa nosso site para nos ajudar a melhorar o desempenho.
                </p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Análise de tráfego e comportamento</li>
                  <li>Identificação de erros e problemas técnicos</li>
                  <li>Otimização de velocidade de carregamento</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-riskon-900 mb-3">Cookies de Funcionalidade</h3>
                <p className="mb-2">
                  Permitem que o site lembre suas escolhas e forneça recursos aprimorados e personalizados.
                </p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Preferências de idioma e região</li>
                  <li>Configurações de acessibilidade</li>
                  <li>Informações de formulários preenchidos</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-riskon-900 mb-3">Cookies de Marketing</h3>
                <p className="mb-2">
                  Usados para rastrear visitantes em diferentes sites para exibir anúncios relevantes.
                </p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Rastreamento de campanhas publicitárias</li>
                  <li>Personalização de anúncios</li>
                  <li>Medição de eficácia de marketing</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-riskon-900 mb-4">4. Cookies de Terceiros</h2>
              <p className="mb-4">
                Alguns cookies são definidos por serviços de terceiros que aparecem em nossas páginas. Não temos controle sobre esses cookies. Exemplos incluem:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Google Analytics - para análise de uso do site</li>
                <li>Ferramentas de marketing digital</li>
                <li>Redes sociais integradas</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-riskon-900 mb-4">5. Duração dos Cookies</h2>
              <p className="mb-4">Utilizamos dois tipos de cookies quanto à duração:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Cookies de sessão:</strong> Temporários, excluídos quando você fecha o navegador</li>
                <li><strong>Cookies persistentes:</strong> Permanecem em seu dispositivo por um período determinado ou até serem excluídos manualmente</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-riskon-900 mb-4">6. Como Gerenciar Cookies</h2>
              <p className="mb-4">
                Você pode controlar e gerenciar cookies de várias formas. Lembre-se de que desabilitar cookies pode afetar a funcionalidade do site.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Configurações do Navegador:</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li><strong>Chrome:</strong> Configurações → Privacidade e segurança → Cookies</li>
                  <li><strong>Firefox:</strong> Opções → Privacidade e Segurança → Cookies</li>
                  <li><strong>Safari:</strong> Preferências → Privacidade → Cookies</li>
                  <li><strong>Edge:</strong> Configurações → Cookies e permissões de site</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-riskon-900 mb-4">7. Consentimento</h2>
              <p>
                Ao continuar usando nosso site após ver a notificação de cookies, você consente com o uso de cookies conforme descrito nesta política. Você pode retirar seu consentimento a qualquer momento através das configurações do navegador ou nosso painel de preferências.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-riskon-900 mb-4">8. Atualizações desta Política</h2>
              <p>
                Podemos atualizar esta Política de Cookies periodicamente para refletir mudanças em nossas práticas ou por outros motivos operacionais, legais ou regulatórios. Recomendamos que você revise esta página regularmente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-riskon-900 mb-4">9. Contato</h2>
              <p>
                Se você tiver dúvidas sobre nossa Política de Cookies, entre em contato:
              </p>
              <p className="mt-4">
                <strong>E-mail:</strong> cookies@crefy.com.br<br />
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

export default Cookies;

