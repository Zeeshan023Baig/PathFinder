import { PropsWithChildren } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";
import { AuthProvider } from "@/context/AuthContext";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <AuthProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatbotWidget />
      </div>
    </AuthProvider>
  );
}
