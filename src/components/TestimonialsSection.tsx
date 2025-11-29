
import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    content: "A Riskon transformou completamente nosso processo de aprovação de crédito. Reduzimos o tempo de decisão de dias para segundos, com maior precisão.",
    author: "Maria Silva",
    position: "Diretora de Crédito, Banco Nacional",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    content: "Desde que implementamos a Riskon, vimos uma redução de 40% na inadimplência e um aumento de 25% na aprovação de bons pagadores.",
    author: "Roberto Santos",
    position: "CEO, Fintech Crédito Fácil",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    content: "A capacidade da Riskon de analisar dados alternativos nos permitiu alcançar um novo segmento de clientes que antes era ignorado por falta de histórico tradicional.",
    author: "Ana Oliveira",
    position: "Head de Inovação, Credicard",
    image: "https://randomuser.me/api/portraits/women/3.jpg"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-riskon-900 mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-gray-600">
            Empresas de todos os tamanhos estão transformando suas decisões de crédito com Riskon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 relative"
            >
              <Quote size={40} className="absolute text-gray-200 -top-3 -left-3" />
              <p className="text-gray-700 mb-6 relative z-10">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-riskon-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16">
          <img src="https://placehold.co/200x80/e2e8f0/64748b?text=LOGO+CLIENTE" alt="Cliente" className="h-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
          <img src="https://placehold.co/200x80/e2e8f0/64748b?text=LOGO+CLIENTE" alt="Cliente" className="h-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
          <img src="https://placehold.co/200x80/e2e8f0/64748b?text=LOGO+CLIENTE" alt="Cliente" className="h-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
          <img src="https://placehold.co/200x80/e2e8f0/64748b?text=LOGO+CLIENTE" alt="Cliente" className="h-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
          <img src="https://placehold.co/200x80/e2e8f0/64748b?text=LOGO+CLIENTE" alt="Cliente" className="h-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
