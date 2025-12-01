
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PlatformSection from "@/components/PlatformSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SEO from "@/components/SEO";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Se houver um hash na URL, faz scroll para a seção
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  useEffect(() => {
    // Adicionar structured data JSON-LD - WebSite
    const websiteScript = document.createElement("script");
    websiteScript.type = "application/ld+json";
    websiteScript.id = "schema-website";
    websiteScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Crefy",
      "url": "https://crefy.com.br",
      "description": "Plataforma de análise de crédito com inteligência artificial para decisões precisas e rápidas",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://crefy.com.br/?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    });
    document.head.appendChild(websiteScript);

    // Adicionar structured data JSON-LD - Service
    const serviceScript = document.createElement("script");
    serviceScript.type = "application/ld+json";
    serviceScript.id = "schema-service";
    serviceScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Análise de Crédito com IA",
      "provider": {
        "@type": "Organization",
        "name": "Crefy",
        "url": "https://crefy.com.br"
      },
      "areaServed": "BR",
      "description": "Plataforma de análise de crédito utilizando inteligência artificial para fornecer decisões precisas e rápidas, reduzindo riscos e aumentando a eficiência no processo de aprovação de crédito.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "BRL",
        "description": "Plano gratuito disponível"
      }
    });
    document.head.appendChild(serviceScript);

    return () => {
      // Limpar scripts ao desmontar
      const website = document.getElementById("schema-website");
      const service = document.getElementById("schema-service");
      if (website) website.remove();
      if (service) service.remove();
    };
  }, []);

  return (
    <>
      <SEO
        title="Crefy - Decisões de Crédito com Inteligência Artificial"
        description="Transforme suas decisões de crédito com IA avançada. Aprove mais clientes bons e reduza inadimplência. Plataforma de análise de crédito inteligente para empresas."
        keywords="análise de crédito, inteligência artificial, IA crédito, decisões de crédito, score de crédito, análise de risco, fintech, crédito empresarial, aprovação de crédito, redução de inadimplência"
      />
      <div className="min-h-screen bg-white">
        <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PlatformSection />
      <FaqSection />
    
    
      <Footer />
      <ScrollToTop />
      </div>
    </>
  );
};

export default Index;
