import Image from "next/image";
import React from "react";

export default function Phases() {
  const howItWorksData = [
    {
      text: "Restrição alimentar estratégica: corte total de industrializados e foco em alimentos que aceleram o metabolismo e eliminam líquidos retidos.",
      icons: "/icons/restriction.png",
      alt: "Menos doces, mais comidas saudáveis!",
      size: 350,
    },
    {
      text: "Hidratação intensiva: beber água da maneira certa faz toda a diferença para eliminar toxinas e desinchar.",
      icons: "/icons/water.png",
      alt: "Beba mais água!",
      size: 80,
    },
    {
      text: "Educação alimentar sem enrolação: sem mitos e achismos, aqui você aprende o que realmente funciona para o seu corpo.",
      icons: "/icons/fork-knife.png",
      alt: "Educação alimentar!",
      size: 45,
    },
  ];

  const phasesData = [
    {
      phase: "01",
      date: "03",
      bulletPoints: [
        "Dieta líquida",
        "Redução de carboidratos",
        "Reducação alimentar",
      ],
    },
    {
      phase: "02",
      date: "05",
      bulletPoints: [
        "Inserção de carbos",
        "Inserção de frutas",
        "Jejuns controlados",
      ],
    },
    {
      phase: "03",
      date: "07",
      bulletPoints: ["Low Carb", "Inserção de proteínas", ""],
    },
  ];
  return (
    <section
      id="howitworks"
      className="h-full 2xl:h-screen w-full relative gradient-border gradient-border-top"
    >
      <div className=" h-[10%] xl:h-[30%] 2xl:h-[60%] w-full absolute bg-healthyWoman bg-cover xl:bg-contain bg-no-repeat bg-center xl:bg-right z-[-1]" />
      <div className="flex flex-col h-full w-full py-20 px-4 xl:p-20 ">
        <div className=" flex w-full h-full flex-col gap-16 mt-[220px] xl:mt-0">
          <h2 className="text-[#8f7c60] text-[4rem] xl:text-[6rem]">
            Como funciona o{" "}
            <span className="bg-gradient-to-r from-[#E6CBAA] via-[#BF9E65] to-[#8F7C60] bg-clip-text text-transparent">
              RESET 15?
            </span>
          </h2>
          <div>
            <ul className="flex w-[100%] xl:w-[60%] flex-col gap-8">
              {howItWorksData.map((data, index) => (
                <li key={index} className="flex flex-col gap-6">
                  <div className="flex gap-2">
                    <div className="hidden xl:flex h-[6px] w-[6px] mt-2 rounded-full bg-[#8f7c60]" />
                    <p className="text-[2rem] text-[#8f7c60]">{data.text}</p>
                  </div>
                  <div className="relative flex w-full h-fit">
                    <Image
                      src={data.icons}
                      alt={data.alt}
                      width={data.size}
                      height={data.size}
                      className=" left-0 "
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col w-full xl:w-2/3 gap-16">
            <div className="flex flex-col xl:flex-row w-fit items-center gap-4">
              <div className="relative flex w-fit h-fit">
                <Image
                  src={"/icons/warning.png"}
                  alt="Sinal de atenção!"
                  width={60}
                  height={60}
                  className=""
                />
              </div>
              <p className="text-[#C1A068] text-[1.8rem]">
                IMPORTANTE: O RESET 15 é um protocolo restritivo e temporário,
                indicado apenas para quem busca um início rápido e motivador.
                Ele deve ser seguido com acompanhamento da nutricionista Ursulla
                Rocha, garantindo que seja feito da forma correta e segura para
                o seu corpo.
              </p>
            </div>
            {/* <div className="flex w-fit p-6 bg-[#F7F0E5] items-center gap-4 rounded-[30px]">
              <div className="relative flex w-fit h-fit">
                <Image
                  src={"/icons/check.png"}
                  alt="Sinal de atenção!"
                  width={20}
                  height={20}
                  className=""
                />
              </div>
              <p className="text-[#C1A068]  text-[2rem]">
                Resultados que vão além da balança
              </p>
            </div> */}
          </div>
        </div>
      </div>
      <div className="w-full h-fit flex 2xl:absolute items-center 2xl:bottom-[-180px] z-10">
        <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center mb-20 2xl:mb-0">
          {phasesData.map((data, index) => (
            <div
              key={index}
              className="w-fit h-fit flex flex-col justify-center items-center gap-4 "
            >
              <div className="flex flex-col items-center ">
                <h3 className="text-[4rem] text-[#8f7c60]">
                  Fase
                  <span className="bg-gradient-to-r from-[#E6CBAA] via-[#BF9E65] to-[#8F7C60] bg-clip-text text-transparent ml-1 text-[5rem]">
                    {data.phase}
                  </span>
                </h3>
                <h4 className="text-[2rem] text-[#8f7c60]">
                  (até {data.date} dias)
                </h4>
              </div>
              <div className="bg-[#dfceb4] py-4 px-20 w-full rounded-[10px]">
                <h3 className="text-[2rem] text-white text-center">
                  Adaptação
                </h3>
              </div>
              <div>
                <ul className="flex flex-col bg-[#f7f0e5] p-10 gap-12 rounded-[10px]">
                  {data.bulletPoints.map((points, index) => (
                    <li key={index} className="flex w-[230px] h-[40px]">
                      {" "}
                      <div className="flex gap-2">
                        <div
                          className={` ${
                            points === "" ? "" : "bg-[#C1A068]"
                          } h-[6px] w-[6px] mt-2 rounded-full `}
                        />
                        <p className="text-[2rem] text-[#8f7c60]">{points}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
