import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const TermosDeServico = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-riskon-900 mb-8">
            Termos de Serviço
          </h1>
          <div className="text-gray-700 space-y-6 leading-relaxed">
            <p className="text-sm text-gray-500 mb-8">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>

            <section>
              <h2 className="text-2xl font-bold text-riskon-900 mb-4">1. Aceitação dos Termos</h2>
              <p>
                Ao acessar e usar os serviços da Crefy, você concorda em cumprir e estar vinculado aos seguintes termos e condições. Se você não concordar com qualquer parte destes termos, não deve usar nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-riskon-900 mb-4">2. Descrição do Serviço</h2>
              <p>
                A Crefy oferece uma plataforma de análise de crédito baseada em inteligência artificial que auxilia empresas na tomada de decisões de crédito. Nossos serviços incluem análise de dados, geração de relatórios e recomendações automatizadas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-riskon-900 mb-4">3. Uso do Serviço</h2>
              <p className="mb-4">Você concorda em usar nossos serviços apenas para fins legais e de acordo com estes termos. Você não deve:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Usar o serviço de forma fraudulenta ou enganosa</li>
                <li>Violar qualquer lei ou regulamento aplicável</li>
                <li>Interferir ou interromper o funcionamento do serviço</li>
                <li>Tentar acessar áreas restritas do sistema</li>
                <li>Reproduzir, duplicar ou copiar qualquer parte do serviço sem autorização</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-riskon-900 mb-4">4. Conta e Segurança</h2>
              <p className="mb-4">
                Para usar certos recursos do serviço, você precisará criar uma conta. Você é responsável por:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Manter a confidencialidade de suas credenciais de acesso</li>
                <li>Todas as atividades que ocorrem em sua conta</li>
                <li>Notificar-nos imediatamente sobre qualquer uso não autorizado</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-riskon-900 mb-4">5. Propriedade Intelectual</h2>
              <p>
                Todo o conteúdo, funcionalidades e tecnologia da plataforma Crefy são de propriedade exclusiva da Crefy e estão protegidos por leis de direitos autorais, marcas registradas e outras leis de propriedade intelectual.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-riskon-900 mb-4">6. Limitação de Responsabilidade</h2>
              <p>
                A Crefy fornece seus serviços "como estão" e "conforme disponível". Não garantimos que o serviço será ininterrupto, seguro ou livre de erros. Em nenhuma circunstância seremos responsáveis por danos indiretos, incidentais ou consequenciais.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-riskon-900 mb-4">7. Modificações dos Termos</h2>
              <p>
                Reservamo-nos o direito de modificar estes termos a qualquer momento. Alterações significativas serão comunicadas através de nosso site ou por e-mail. O uso continuado do serviço após as alterações constitui aceitação dos novos termos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-riskon-900 mb-4">8. Contato</h2>
              <p>
                Se você tiver dúvidas sobre estes Termos de Serviço, entre em contato conosco através de contato@crefy.com.br.
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

export default TermosDeServico;

