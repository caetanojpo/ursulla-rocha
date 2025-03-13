import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/organisms/header";
import Footer from "@/components/organisms/footer";

export const metadata: Metadata = {
  title:
    "Ursulla Rocha - Nutricionista Especializada em Nutrição Estética e Esportiva",
  description:
    "Com 7 anos de experiência, Ursulla Rocha oferece consultoria nutricional personalizada, focada em nutrição estética, reeducação alimentar e performance esportiva.",
  icons: "/favicon.png",
  keywords: [
    "Ursulla Rocha",
    "nutricionista",
    "nutrição estética",
    "nutrição esportiva",
    "reeducação alimentar",
    "emagrecimento",
    "hipertrofia",
    "saúde",
    "bem-estar",
  ],
  openGraph: {
    title:
      "Ursulla Rocha - Nutricionista Especializada em Nutrição Estética e Esportiva",
    description:
      "Consultoria nutricional personalizada para promover saúde e transformação através de uma abordagem estratégica e eficaz.",
    url: "https://www.ursullarocha.com.br/",
    siteName: "Ursulla Rocha",
    images: [
      {
        url: "https://www.ursullarocha.com.br/_next/image?url=%2Fheader-logo-home.png&w=1920&q=75",
        width: 1200,
        height: 630,
        alt: "Ursulla Rocha - Nutricionista",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ursulla Rocha - Nutricionista Especializada em Nutrição Estética e Esportiva",
    description:
      "Consultoria nutricional personalizada para promover saúde e transformação através de uma abordagem estratégica e eficaz.",
    images: [
      "https://www.ursullarocha.com.br/_next/image?url=%2Fheader-logo-home.png&w=1920&q=75",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Header />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
