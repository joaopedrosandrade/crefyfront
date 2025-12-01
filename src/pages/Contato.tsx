import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SEO from "@/components/SEO";
import ContactSection from "@/components/ContactSection";

const Contato = () => {
  return (
    <>
      <SEO
        title="Contato - Crefy"
        description="Entre em contato com a Crefy. Estamos prontos para ajudar sua empresa a transformar decisões de crédito com IA."
        keywords="contato crefy, fale conosco, suporte, atendimento, orçamento"
      />
      <div className="min-h-screen bg-white">
        <Navbar />
        <ContactSection />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default Contato;

