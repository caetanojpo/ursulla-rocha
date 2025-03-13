import ResetProjectDetails, {
  ResetProjectDetailsProps,
} from "@/components/organisms/section/ResetProjectDetails";
import ResetBanner from "@/components/organisms/banner/ResetBanner";
import React from "react";
import Phases from "@/components/organisms/phases/Phases";
import AditionalInfoList from "@/components/organisms/lists/AditionalInfoList";
import Carousel from "@/components/molecules/carousel/Carousel";
import StartSection from "@/components/organisms/section/StartSection";
import FAQ from "@/components/organisms/section/FAQ";

export default function page() {
  const ResetProjectDetailsSections: ResetProjectDetailsProps[] = [
    {
      title: "Por que",
      titleHighlight: "RESET",
      descriptionList: [
        {
          icon: "/icons/power.png",
          text: "Porque às vezes a gente precisa começar do zero. O RESET 15 limpa o organismo, elimina excessos e ensina o que realmente faz diferença na alimentação.",
        },
        {
          icon: "/icons/check.png",
          text: "Essa não é mais uma dieta da moda. É um protocolo estratégico e temporário para colocar seu corpo no caminho certo, preparando-o para uma alimentação completa e equilibrada a longo prazo.",
        },
      ],
      image: "/heart.png",
      border: true,
    },
    {
      title: "Por que",
      titleHighlight: "15 Dias",
      descriptionList: [
        {
          text: "Porque esse é o tempo perfeito para:",
        },
        {
          icon: "/icons/body.png",
          text: "Reduzir inchaço e medidas de um jeito rápido e visível.",
        },
        {
          icon: "/icons/head-brain.png",
          text: "Criar novos hábitos, sem enrolação.",
        },
        {
          icon: "/icons/plate-gold.png",
          text: "Mudar sua relação com a comida, sem sofrimento.",
        },
        {
          icon: "/icons/recicle.png",
          text: "Preparar seu metabolismo para uma dieta mais completa e individualizada.",
        },
        {
          text: "15 dias de compromisso total para desinflamar seu corpo e dar o pontapé inicial para uma vida mais leve.",
        },
      ],
      image: "/calendar.png",
    },
  ];

  return (
    <main className="h-full w-full ">
      <ResetBanner />
      {ResetProjectDetailsSections.map((section, index) => (
        <ResetProjectDetails
          descriptionList={section.descriptionList}
          image={section.image}
          title={section.title}
          titleHighlight={section.titleHighlight}
          border={section.border}
          key={index}
        />
      ))}
      <Phases />
      <AditionalInfoList />
      <section className="h-full  w-full relative gradient-border gradient-border-top bg-[#F7F0E5] items-center flex justify-center py-10 mt-20 xl:mt-0">
        <div className="absolute w-[400px] p-10 bg-[#DFCEB4] top-[-80px] left-1/2 -translate-x-1/2 items-center rounded-t-[40px]">
          <h3 className="text-white text-[4rem] text-center ">
            Antes e Depois
          </h3>
        </div>
        <Carousel />
      </section>
      <StartSection />
      <FAQ />
    </main>
  );
}
