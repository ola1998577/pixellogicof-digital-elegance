import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import ContactPage from "./pages/ContactPage";
import StartProjectPage from "./pages/StartProjectPage";
import AllServicesPage from "./pages/AllServicesPage";
import ServiceDetailsPage from "./pages/ServiceDetailsPage";
import AllPortfolioPage from "./pages/AllPortfolioPage";
import PortfolioDetailsPage from "./pages/PortfolioDetailsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/start-project" element={<StartProjectPage />} />
            <Route path="/services" element={<AllServicesPage />} />
            <Route path="/service/:serviceId" element={<ServiceDetailsPage />} />
            <Route path="/portfolio" element={<AllPortfolioPage />} />
            <Route path="/portfolio/:projectId" element={<PortfolioDetailsPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
