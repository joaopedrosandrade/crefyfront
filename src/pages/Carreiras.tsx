import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, TrendingUp, Heart, Zap } from "lucide-react";

const Carreiras = () => {
  return (
    <>
      <SEO
        title="Carreiras - Crefy"
        description="Junte-se à equipe da Crefy. Oportunidades de carreira em tecnologia, análise de dados e inovação financeira."
        keywords="carreiras crefy, vagas, trabalhe conosco, oportunidades emprego, fintech carreiras"
      />
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-riskon-900 mb-8">
              Carreiras
            </h1>
            <div className="text-gray-700 space-y-8 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-riskon-900 mb-4">Trabalhe Conosco</h2>
                <p className="text-lg mb-6">
                  Na Crefy, você fará parte de uma equipe que está transformando o futuro do crédito no Brasil. Estamos sempre em busca de talentos apaixonados por tecnologia, inovação e impacto social.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-riskon-900 mb-4">Por que trabalhar na Crefy?</h2>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <Zap className="text-teal-500 mb-3" size={32} />
                    <h3 className="font-bold text-lg mb-2">Inovação Constante</h3>
                    <p>Trabalhe com as tecnologias mais avançadas em IA e machine learning, sempre aprendendo e se desenvolvendo.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <Users className="text-teal-500 mb-3" size={32} />
                    <h3 className="font-bold text-lg mb-2">Equipe Multidisciplinar</h3>
                    <p>Colabore com profissionais talentosos de diversas áreas, criando soluções inovadoras juntos.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <TrendingUp className="text-teal-500 mb-3" size={32} />
                    <h3 className="font-bold text-lg mb-2">Crescimento Profissional</h3>
                    <p>Tenha oportunidades claras de desenvolvimento de carreira e crescimento dentro da empresa.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <Heart className="text-teal-500 mb-3" size={32} />
                    <h3 className="font-bold text-lg mb-2">Impacto Real</h3>
                    <p>Seu trabalho terá impacto direto na vida de milhares de pessoas e empresas, democratizando o acesso ao crédito.</p>
                  </div>
                </div>
              </section>

           

              <section>
                <h2 className="text-2xl font-bold text-riskon-900 mb-4">Áreas de Atuação</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h3 className="font-bold text-lg mb-2">Tecnologia</h3>
                    <p>Desenvolvedores, engenheiros de software, arquitetos de sistemas, DevOps e especialistas em IA/ML.</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h3 className="font-bold text-lg mb-2">Ciência de Dados</h3>
                    <p>Cientistas de dados, analistas, especialistas em machine learning e estatísticos.</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h3 className="font-bold text-lg mb-2">Produto e Design</h3>
                    <p>Product managers, designers UX/UI e pesquisadores de experiência do usuário.</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h3 className="font-bold text-lg mb-2">Negócios</h3>
                    <p>Vendas, marketing, atendimento ao cliente e gestão de relacionamento.</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h3 className="font-bold text-lg mb-2">Operações</h3>
                    <p>Gestão de operações, compliance, segurança da informação e suporte técnico.</p>
                  </div>
                </div>
              </section>

            

              <section className="bg-teal-50 p-8 rounded-lg">
                <div className="flex items-center mb-4">
                  <Briefcase className="text-teal-500 mr-3" size={32} />
                  <h2 className="text-2xl font-bold text-riskon-900">Vagas Abertas</h2>
                </div>
                <p className="mb-6">
                  No momento, não temos vagas abertas, mas estamos sempre abertos a receber currículos de profissionais talentosos. Envie seu currículo e fique em nosso banco de talentos!
                </p>
                <Button asChild className="bg-teal-500 hover:bg-teal-600">
                  <a href="mailto:carreiras@crefy.com.br?subject=Candidatura Espontânea">
                    Enviar Currículo
                  </a>
                </Button>
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

export default Carreiras;

