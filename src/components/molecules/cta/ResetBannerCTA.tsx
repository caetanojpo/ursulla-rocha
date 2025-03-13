"use client";
import Image from "next/image";
import React from "react";

export default function ResetBannerCTA() {
  return (
    <div className="flex justify-center">
      <button
        className="hover-shine hover:scale-[102%] transition-all duration-500 flex w-full lg:w-[85%] items-center justify-center bg-[#EBDFCD] p-6 rounded-[20px] gap-6"
        onClick={() => {
          document.querySelector("#howitworks")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        <span className="text-[3rem] lg:text-[4rem] xl:text-[3rem] text-[#c1a068] font-medium">
          Conheça o projeto
        </span>
        <Image
          src={"/icons/arrow-down.png"}
          alt="Seta para baixo"
          width={30}
          height={30}
        />
      </button>
    </div>
  );
}
