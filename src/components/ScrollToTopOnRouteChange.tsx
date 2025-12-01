import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopOnRouteChange = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Se houver hash na URL, não faz scroll para o topo
    // Deixa a página Index tratar o scroll para a seção
    if (!hash) {
      // Faz scroll para o topo quando a rota muda (sem hash)
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTopOnRouteChange;

