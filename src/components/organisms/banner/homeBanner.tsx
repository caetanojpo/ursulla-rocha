import Image from "next/image";
import React from "react";

export default function HomeBanner() {
  return (
    <>
      <section
        className="h-full xl:h-[90dvh] max-h-[800px] w-full flex flex-col xl:flex-row justify-between items-center relative bg-resetBannerBg bg-no-repeat bg-cover bg-bottom gradient-border gradient-border-top "
        style={{ backgroundSize: "100%" }}
      >
        <Image
          src="/BannerHome.png"
          alt="Header Home"
          //   width={1920}
          //   height={700}
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="h-full w-full flex flex-col xl:flex-row items-end justify-end pb-4 pl-4 xl:p-0 gradient-border gradient-border-bottom ">
          <div className="flex xl:hidden h-[300px] lg:h-[600px] w-full relative items-end  bg-[url(/ursula-reset-banner.png)] bg-cover bg-no-repeat bg-[-10px_-50px] lg:bg-[-10px_-300px]" />
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
        </div>
      </section>
    </>
  );
}
