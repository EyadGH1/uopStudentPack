import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LogIn from "./pages/LogIn";
import StudyMaterials from "./pages/StudyMaterials";
import GPA from "./pages/GPA";
import FGpaPage from "./pages/FGpaPage";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<LogIn/>} />
          <Route path="/materials" element={<StudyMaterials />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/gpa" element={<GPA />} />
          <Route path="/fgpa" element= {<FGpaPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;