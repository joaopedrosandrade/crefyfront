import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  noindex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = "Crefy - Decisões de Crédito com Inteligência Artificial",
  description = "Transforme suas decisões de crédito com IA avançada. Aprove mais clientes bons e reduza inadimplência. Plataforma de análise de crédito inteligente para empresas.",
  keywords = "análise de crédito, inteligência artificial, IA crédito, decisões de crédito, score de crédito, análise de risco, fintech, crédito empresarial, aprovação de crédito, redução de inadimplência",
  image = "https://crefy.com.br/og-image.jpg",
  url,
  type = "website",
  noindex = false,
}) => {
  const location = useLocation();
  const baseUrl = "https://crefy.com.br";
  const currentUrl = url || `${baseUrl}${location.pathname}`;
  const fullTitle = title.includes("Crefy") ? title : `${title} | Crefy`;

  useEffect(() => {
    // Atualizar título
    document.title = fullTitle;

    // Atualizar ou criar meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Meta tags básicas
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("robots", noindex ? "noindex, nofollow" : "index, follow");

    // Open Graph
    updateMetaTag("og:title", fullTitle, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:type", type, true);
    updateMetaTag("og:url", currentUrl, true);
    updateMetaTag("og:image", image, true);
    updateMetaTag("og:locale", "pt_BR", true);

    // Twitter Card
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", fullTitle);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", image);

    // Canonical URL
    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = currentUrl;
  }, [title, description, keywords, image, url, type, noindex, currentUrl, fullTitle]);

  return null;
};

export default SEO;

