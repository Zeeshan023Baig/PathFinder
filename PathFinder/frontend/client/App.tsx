import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Layout from "@/components/layout/Layout";
import Index from "./pages/Index";
import CareerTest from "./pages/CareerTest";
import Explore from "./pages/Explore";
import Colleges from "./pages/Colleges";
import Resources from "./pages/Resources";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Visualizer from "./pages/Visualizer";
import Compare from "./pages/Compare";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import Stories from "./pages/Stories";
import CourseDetail from "./pages/CourseDetail";
import CollegeDetail from "./pages/CollegeDetail";
import StreamDetail from "./pages/StreamDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/test" element={<CareerTest />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/colleges" element={<Colleges />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/stories" element={<Stories />} />
              <Route path="/course/:id" element={<CourseDetail />} />
              <Route path="/college/:id" element={<CollegeDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/visualizer" element={<Visualizer />} />
              <Route path="/stream/:name" element={<StreamDetail />} />
              <Route path="/compare" element={<Compare />} />
              <Route path="/admin" element={<Admin />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
