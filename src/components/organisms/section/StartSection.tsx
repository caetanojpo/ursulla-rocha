import StartButton from "@/components/atoms/buttons/StartButton";
import Image from "next/image";

import React from "react";

export default function StartSection() {
  return (
    <section className="flex h-full xl:h-screen w-full relative gradient-border gradient-border-top py-20 px-4 xl:p-40 xl:py-60  bg-resetLowerBg bg-contain bg-no-repeat bg-[0px_0px] ">
      <div className="absolute h-full w-full bg-gradientDown bg-cover left-0 top-0" />
      <div className="flex h-full w-full ">
        <div className="flex flex-col  w-full xl:w-1/2  gap-16">
          <h2 className="text-[4rem] xl:text-[5rem] bg-gradient-to-r from-[#E6CBAA] via-[#BF9E65] to-[#8F7C60] bg-clip-text text-transparent ">
            Vamos dar start nessa nova fase?
          </h2>
          <div className="flex w-full  flex-col text-[2rem] xl:text-[2.5rem] text-[#8f7c60] ">
            <p>
              Este é o primeiro passo para sair da roda-viva das dietas
              temporárias e adotar um estilo de vida alinhado com as suas metas.{" "}
              <br />
              Uma jornada que começa com 15 dias e pode mudar o resto da sua
              vida.
            </p>
            <p className="mt-6">
              Aperte o botão abaixo e para dar início a transformação que você
              merece.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <StartButton />
            <div className="relative flex my-10">
              <div className="flex py-4 px-24 bg-[#DFCEB4] gap-4 text-[1.2rem] text-white items-center rounded-[10px] md:rounded-0 md:rounded-r-[30px] md:absolute left-[-50px] bottom-[-50px]">
                <div className="flex items-center relative">
                  <div className="absolute bottom-[-10px] left-0 w-full h-[15px] rounded-b-[30px] bg-gradient-to-r from-[#E6CBAA] via-[#BF9E65] via-40% via-[#DBC2A4] via-60% via-[#BF9E65] via-80% to-[#DFCFB6]"></div>
                  <div className="flex">
                    <div>
                      <p className="ml-2">PROJETO</p>
                      <p className="text-[5rem] text-[#C1A068]">Reset</p>
                    </div>
                  </div>
                  <p className="text-[8rem]">15</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={"/ursula-reset-lower-banner.png"}
          alt="Foto de Ursulla Rocha"
          width={700}
          height={700}
          className="absolute cover bottom-0 right-0 2xl:right-10 hidden xl:flex"
        />
      </div>
    </section>
  );
}
