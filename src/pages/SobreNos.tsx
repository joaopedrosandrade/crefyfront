import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SEO from "@/components/SEO";

const SobreNos = () => {
  return (
    <>
      <SEO
        title="Sobre Nós - Crefy"
        description="Conheça a Crefy, empresa líder em análise de crédito com inteligência artificial. Nossa missão, visão e valores."
        keywords="sobre crefy, empresa análise de crédito, IA crédito, fintech, missão crefy"
      />
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-riskon-900 mb-8">
              Sobre Nós
            </h1>
            <div className="text-gray-700 space-y-6 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-riskon-900 mb-4">Nossa História</h2>
                <p>
                  A Crefy nasceu da necessidade de transformar o mercado de crédito no Brasil. Fundada por especialistas em tecnologia e análise de risco, nossa empresa combina inteligência artificial avançada com décadas de experiência em crédito para oferecer soluções inovadoras que ajudam empresas a tomar decisões mais inteligentes e precisas.
                </p>
                <p>
                  Desde o início, acreditamos que a tecnologia pode democratizar o acesso ao crédito, permitindo que mais pessoas e empresas tenham oportunidades justas, enquanto protegemos os credores contra inadimplência.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-riskon-900 mb-4">Nossa Missão</h2>
                <p>
                  Transformar decisões de crédito através de inteligência artificial, ajudando empresas a aprovar mais clientes bons e reduzir inadimplência, enquanto promovemos acesso justo e responsável ao crédito.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-riskon-900 mb-4">Nossa Visão</h2>
                <p>
                  Ser a plataforma de referência em análise de crédito com IA na América Latina, reconhecida pela inovação, precisão e impacto positivo no mercado financeiro.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-riskon-900 mb-4">Nossos Valores</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Inovação:</strong> Estamos sempre à frente, desenvolvendo tecnologias de ponta que revolucionam o mercado</li>
                  <li><strong>Transparência:</strong> Acreditamos em processos claros e decisões explicáveis</li>
                  <li><strong>Ética:</strong> Comprometidos com práticas responsáveis e uso ético de dados</li>
                  <li><strong>Excelência:</strong> Buscamos a perfeição em cada análise e recomendação</li>
                  <li><strong>Impacto Social:</strong> Trabalhamos para criar um sistema financeiro mais inclusivo e justo</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-riskon-900 mb-4">Nossa Tecnologia</h2>
                <p>
                  Utilizamos algoritmos de machine learning de última geração, processando milhões de pontos de dados para criar análises precisas e em tempo real. Nossa plataforma combina:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Análise preditiva avançada</li>
                  <li>Processamento de big data</li>
                  <li>Modelos de deep learning</li>
                  <li>Análise comportamental</li>
                  <li>Integração com múltiplas fontes de dados</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-riskon-900 mb-4">Nossa Equipe</h2>
                <p>
                  Contamos com uma equipe multidisciplinar de especialistas em tecnologia, ciência de dados, análise de crédito e negócios. Nossos profissionais são apaixonados por resolver problemas complexos e criar soluções que fazem a diferença.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-riskon-900 mb-4">Compromisso com a Segurança</h2>
                <p>
                  A segurança dos dados é nossa prioridade. Implementamos os mais altos padrões de segurança da informação, criptografia de ponta a ponta e conformidade total com a LGPD (Lei Geral de Proteção de Dados).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-riskon-900 mb-4">Entre em Contato</h2>
                <p>
                  Quer saber mais sobre a Crefy ou tem alguma dúvida? Estamos sempre abertos para conversar.
                </p>
                <p className="mt-4">
                  <strong>E-mail:</strong> contato@crefy.com.br<br />
                  <strong>Telefone:</strong> (11) 3000-0000
                </p>
              </section>
            </div>
          </div>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default SobreNos;

