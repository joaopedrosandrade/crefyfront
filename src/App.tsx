import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TermosDeServico from "./pages/TermosDeServico";
import Privacidade from "./pages/Privacidade";
import Seguranca from "./pages/Seguranca";
import Cookies from "./pages/Cookies";
import Compliance from "./pages/Compliance";
import ComeceGratuitamente from "./pages/ComeceGratuitamente";
import SobreNos from "./pages/SobreNos";
import Carreiras from "./pages/Carreiras";
import Contato from "./pages/Contato";
import CookieBanner from "./components/CookieBanner";
import ScrollToTopOnRouteChange from "./components/ScrollToTopOnRouteChange";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTopOnRouteChange />
        <CookieBanner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/comece-gratuitamente" element={<ComeceGratuitamente />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/carreiras" element={<Carreiras />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/termos-de-servico" element={<TermosDeServico />} />
          <Route path="/privacidade" element={<Privacidade />} />
          <Route path="/seguranca" element={<Seguranca />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/compliance" element={<Compliance />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
