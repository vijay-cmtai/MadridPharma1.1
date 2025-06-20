import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Index from "./pages/Index";
import About from "./pages/About";
import VisionMission from "./pages/VisionMission";
import Quality from "./pages/Quality";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Therapies from "./pages/Therapies";
import TherapyDetail from "./pages/TherapyDetail";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Madrid Pharmaceutical pvt. Ltd</title>
        <meta
          name="description"
          content="Madrid Pharmaceutical Pvt. Ltd - Quality pharmaceutical products and healthcare solutions."
        />
        <meta
          name="keywords"
          content="pharma, healthcare, medicines, Madrid, pharmaceutical"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Helmet>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/vision-mission" element={<VisionMission />} />
              <Route path="/quality" element={<Quality />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:slug" element={<ProductDetail />} />
              <Route path="/therapies" element={<Therapies />} />
              <Route
                path="/therapies/:therapyName"
                element={<TherapyDetail />}
              />
              <Route path="/events" element={<Events />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
