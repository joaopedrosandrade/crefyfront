
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-teal-500 to-blue-600 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transforme suas decisões de crédito hoje mesmo
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Junte-se a centenas de empresas que já estão aprovando mais clientes bons e reduzindo inadimplência com a Crefy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-6 text-lg"
            >
              Começar Gratuitamente
              <ArrowRight size={20} className="ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
            >
              Falar com Especialista
            </Button>
          </div>
          <p className="mt-8 text-white/80 text-sm">
            Sem necessidade de cartão de crédito • Cancelamento a qualquer momento
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
