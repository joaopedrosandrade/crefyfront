
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como a Crefy utiliza IA nas decisões de crédito?",
    answer: "A Crefy aplica modelos avançados de inteligência artificial para analisar milhares de variáveis de dados em tempo real, identificando padrões e comportamentos que os métodos tradicionais não conseguem detectar. Nossa IA aprende continuamente para melhorar a precisão das decisões."
  },
  {
    question: "Quanto tempo leva para implementar a plataforma Crefy?",
    answer: "O tempo de implementação varia dependendo da complexidade dos seus sistemas atuais, mas geralmente conseguimos ter tudo funcionando em 2 a 4 semanas. Nossa equipe trabalha lado a lado com seu time técnico para garantir uma integração suave."
  },
  {
    question: "A Crefy atende às regulamentações de privacidade de dados?",
    answer: "Sim, a Crefy foi desenvolvida com conformidade desde o início. Nossa plataforma está em total conformidade com a LGPD e outras regulamentações internacionais de privacidade. Implementamos criptografia de dados, controles de acesso rigorosos e auditorias regulares."
  },
  {
    question: "Como a Crefy se compara aos métodos tradicionais de avaliação de crédito?",
    answer: "Enquanto os métodos tradicionais dependem principalmente de históricos de crédito e regras estáticas, a Crefy considera um espectro muito mais amplo de dados e se adapta continuamente. Nossos clientes relatam uma redução média de 35% em inadimplência e um aumento de 40% na aprovação de bons pagadores."
  },
  {
    question: "É possível integrar a Crefy com nossos sistemas existentes?",
    answer: "Absolutamente. A Crefy foi projetada para integrar-se facilmente com sistemas bancários, ERPs, CRMs e outras plataformas através de nossa API robusta. Temos conectores prontos para os principais sistemas do mercado e podemos desenvolver integrações personalizadas se necessário."
  },
  {
    question: "Quais os benefícios da Crefy para clientes sem histórico de crédito tradicional?",
    answer: "A Crefy excele em avaliar clientes sem histórico de crédito tradicional ao analisar dados alternativos como histórico de pagamentos de serviços, comportamento de transações bancárias e outros indicadores de estabilidade financeira. Isso permite que você expanda sua base de clientes com segurança."
  }
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-riskon-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-gray-600">
            Tire suas dúvidas sobre a plataforma Crefy e como ela pode ajudar seu negócio.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-riskon-900 font-medium hover:no-underline hover:text-teal-500">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-2">
            Ainda tem dúvidas? Estamos aqui para ajudar.
          </p>
          <a href="#contact" className="text-teal-500 font-medium hover:text-teal-600">
            Entre em contato com nossa equipe
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
