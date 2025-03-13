import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projeto Reset 15 - Transformação Alimentar com Ursulla Rocha",
  description:
    "O Projeto Reset 15 é um protocolo estratégico de 15 dias desenvolvido por Ursulla Rocha para iniciar uma jornada de mudança de hábitos alimentares e estilo de vida.",
  keywords: [
    "Projeto Reset 15",
    "Ursulla Rocha",
    "transformação alimentar",
    "mudança de hábitos",
    "protocolo nutricional",
    "saúde",
    "bem-estar",
  ],
  openGraph: {
    title: "Projeto Reset 15 - Transformação Alimentar com Ursulla Rocha",
    description:
      "Descubra como o Projeto Reset 15 pode limpar seu organismo, eliminar excessos e ensinar o que realmente faz diferença na alimentação em apenas 15 dias.",
    url: "https://www.ursullarocha.com.br/reset",
    siteName: "Projeto Reset 15",
    images: [
      {
        url: "https://www.ursullarocha.com.br/_next/image?url=%2Fheader-logo-home.png&w=1920&q=75",
        width: 1200,
        height: 630,
        alt: "Projeto Reset 15",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projeto Reset 15 - Transformação Alimentar com Ursulla Rocha",
    description:
      "Descubra como o Projeto Reset 15 pode limpar seu organismo, eliminar excessos e ensinar o que realmente faz diferença na alimentação em apenas 15 dias.",
    images: [
      "https://www.ursullarocha.com.br/_next/image?url=%2Fheader-logo-home.png&w=1920&q=75",
    ],
  },
  icons: "/favicon.png",
};

export default function ResetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="relative">{children}</main>;
}
