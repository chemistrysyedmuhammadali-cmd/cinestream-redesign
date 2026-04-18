import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import FreecineForPC from "./pages/FreecineForPC.tsx";
import FreecineIOS from "./pages/FreecineIOS.tsx";
import LegalPages from "./pages/LegalPages.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import ContactUs from "./pages/ContactUs.tsx";
import CookiesPolicy from "./pages/CookiesPolicy.tsx";
import Disclaimer from "./pages/Disclaimer.tsx";
import DMCA from "./pages/DMCA.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import TermsAndCondition from "./pages/TermsAndCondition.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/freecine-for-pc" element={<FreecineForPC />} />
          <Route path="/freecine-ios" element={<FreecineIOS />} />
          <Route path="/legal-pages" element={<LegalPages />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/cookies-policy" element={<CookiesPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/dmca" element={<DMCA />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-condition" element={<TermsAndCondition />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
