import ResetBannerCTA from "@/components/molecules/cta/ResetBannerCTA";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ResetBanner() {
  return (
    <>
      <section
        className="h-full xl:h-[80dvh] w-full flex flex-col xl:flex-row justify-between items-center relative bg-resetBannerBg bg-no-repeat bg-cover bg-bottom gradient-border gradient-border-top"
        style={{ backgroundSize: "100%" }}
      >
        <Image
          src={"/ursula-reset-banner.png"}
          alt="Foto de Ursulla Rocha"
          width={900}
          height={900}
          className="absolute xl:right-20 2xl:right-80 z-[-1] hidden xl:flex"
          style={{ bottom: "-450px" }}
        />
        <div className="h-full w-full xl:w-[50%] flex flex-col gap-16 justify-center p-4 xl:p-0 mt-20 xl:mt-0">
          <div className="w-full bg-[#EBDFCD] flex flex-row rounded-tr-[30px] relative justify-center gap-4 py-4">
            <div className="absolute bottom-[-10px] left-0 w-full h-[15px] rounded-b-[30px] bg-gradient-to-r from-[#E6CBAA] via-[#BF9E65] via-40% via-[#DBC2A4] via-60% via-[#BF9E65] via-80% to-[#DFCFB6]"></div>

            <div className="flex flex-col justify-center gap-2 xl:gap-0">
              <h4 className="text-[2rem] lg:text-[2.4rem] text-[#8F7C60] xl:ml-4">
                PROJETO
              </h4>
              <h3 className="relative bg-gradient-to-r from-[#E6CBAA] via-[#BF9E65] via-40% via-[#DBC2A4] via-60% via-[#BF9E65] via-80% to-[#8F7C60] bg-clip-text text-transparent text-[5rem] lg:text-[10rem]">
                Reset
                {/* <Image src="/reset.png" alt="RESET" width={280} height={280} /> */}
              </h3>
            </div>

            <div className="flex h-full items-center">
              <h3 className="text-white text-[10rem] lg:text-[13rem]">15</h3>
            </div>
          </div>

          {/* TAG */}
          {/* CONHEÇA */}
          <div className="flex flex-col w-full ">
            <div className="flex  gap-6 items-center lg:ml-14">
              <div className="relative">
                <Image
                  src="/icons/plate.png"
                  alt="Icone de prato com garfo e faca"
                  width={180}
                  height={180}
                />
              </div>
              <div className="">
                <p className="text-[1.8em] lg:text-[2.2rem] text-[#8F7C60] font-medium">
                  A estratégia motivacional, para dar o{" "}
                  <span className="text-[#C1A068]">“start”</span> necessário na
                  sua jornada de mudança de hábitos alimentares e estilo de
                  vida.
                </p>
              </div>
            </div>
          </div>
          {/* CONHEÇA */}
          {/* CTA */}
          <ResetBannerCTA />
          {/* CONHEÇA */}
        </div>
        <div className="h-full w-full flex flex-col xl:flex-row items-end justify-end pb-4 pl-4 xl:p-0 gradient-border gradient-border-bottom ">
          <div className="flex xl:hidden h-[300px] lg:h-[600px] w-full relative items-end  bg-[url(/ursula-reset-banner.png)] bg-cover bg-no-repeat bg-[-10px_-50px] lg:bg-[-10px_-300px]" />
          <Link
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5521986336699"
          >
            <div className="hover-shine hover:scale-[102%] flex bg-[#F7F0E5] w-full xl:w-[250px] h-[80px] border-r-[16px] border-solid border-[#C1A068] shadow-xl rounded-l-[20px] justify-center items-center px-6 cursor-pointer xl:mb-32 gap-4">
              <p className="bg-gradient-to-r from-[#E6CBAA] via-[#BF9E65] to-[#8F7C60] bg-clip-text text-transparent text-[2rem] lg:text-[3rem] xl:text-[2rem] text-center ">
                Agende sua consulta aqui
              </p>
              <div className="flex w-[12%] lg:w-[20%] xl:w-[30%] h-full relative">
                <Image
                  src={"/icons/whatsapp.png"}
                  alt="Icone Whatsapp"
                  fill
                  objectFit="contain"
                />
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
