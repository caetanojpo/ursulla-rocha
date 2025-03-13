"use client";
import React, { createContext, useState, useEffect, useContext } from "react";

// Define o tipo do contexto
type MobileContextType = {
  isMobile: boolean;
};

// Cria o contexto com um valor inicial (ou undefined, se não houver valor padrão)
const MobileContext = createContext<MobileContextType | undefined>(undefined);

// Cria o Provider
export const MobileProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      const mobileBreakpoint = 768; // Tailwind's default 'md' breakpoint
      setIsMobile(window.innerWidth < mobileBreakpoint);
    };

    // Verifica no carregamento inicial
    checkIfMobile();

    // Adiciona um listener para verificar quando a janela é redimensionada
    window.addEventListener("resize", checkIfMobile);

    // Remove o listener quando o componente é desmontado
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <MobileContext.Provider value={{ isMobile }}>
      {children}
    </MobileContext.Provider>
  );
};
export const useMobile = (): MobileContextType => {
  const context = useContext(MobileContext);

  if (context === undefined) {
    throw new Error("useMobile must be used within a MobileProvider");
  }

  return context;
};
