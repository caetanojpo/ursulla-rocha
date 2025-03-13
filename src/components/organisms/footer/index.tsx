import Image from "next/image";
import { Icon } from "@iconify/react";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#f7f0e5] py-10">
      <div className="container mx-auto px-8 mb-4">
        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {/* Div com os textos (esquerda) */}
          <div className="flex flex-col">
            <Image alt="" src="/banner-footer.png" width={300} height={300} />
            <p className="text-[#8b7758] mt-2">
              RECEITA EN PRIMERAS MÁXI-NOVIDADES DOS NOSSOS LANCAMIENTOS.
            </p>
          </div>

          {/* Formulário (direita) */}
          {/* Input Nome */}
          <input
            type="text"
            placeholder="DIGITE SEU NOME"
            className="px-6 py-3 rounded-3xl border border-[#bf9d61] focus:outline-none focus:ring-2 focus:ring-[#bf9d61] w-full"
          />

          {/* Input E-mail */}
          <input
            type="email"
            placeholder="DIGITE SEU EMAIL"
            className="px-6 py-3 rounded-3xl border border-[#bf9d61] focus:outline-none focus:ring-2 focus:ring-[#bf9d61] w-full"
          />

          {/* Botão CADASTRAR */}
          <button
            type="submit"
            className="bg-[#bf9d61] text-white px-8 py-3 rounded-3xl hover:bg-[#8b7758] transition-colors text-lg col-span-1 sm:col-span-2 lg:col-span-1"
          >
            CADASTRAR
          </button>
        </div>
      </div>
      <div className="flex flex-row w-full justify-evenly py-20 px-20 bg-white relative gradient-border gradient-border-top">
        <div className="flex flex-col">
          <span className="text-4xl mb-7 bg-gradient-to-r from-[#E6CBAA] via-[#BF9E65] to-[#8F7C60] bg-clip-text text-transparent">
            Ursulla Rocha
          </span>
          <span className="text-3xl mb-7 text-[#8b7758]">
            Sobre Ursulla Rocha
          </span>
          <span className="text-3xl mb-7 text-[#8b7758]">Produtos</span>
          <span className="text-3xl mb-7 text-[#8b7758]">Contato</span>
        </div>
        <div className="flex flex-col">
          <span className="text-4xl mb-7 bg-gradient-to-r from-[#E6CBAA] via-[#BF9E65] to-[#8F7C60] bg-clip-text text-transparent">
            Contato
          </span>
          <span className="text-3xl flex-row flex mb-7 text-[#8b7758]">
            <h2 className="text-[#bf9d61]">CRN-RJ:</h2> 19100377
          </span>
          <span className="text-3xl text-[#8b7758] flex flex-row">
            <Icon
              icon="mdi:whatsapp"
              width="24"
              height="24"
              className="mr-2 text-[#bf9d61]"
            />
            +55 (21) 98633-6699
          </span>
          <span className="text-3xl mb-7 text-[#8b7758] flex flex-row">
            <Icon
              icon="mdi:whatsapp"
              width="24"
              height="24"
              className="mr-2 text-[#bf9d61]"
            />
            +55 (21) 98120-7266
          </span>
          <span className="text-3xl mb-7 text-[#8b7758] flex flex-row">
            <Icon
              icon="carbon:email"
              width="24"
              height="24"
              className="mr-2 text-[#bf9d61]"
            />
            rochaursulla10@gmail.com
          </span>
          <span className="text-3xl mb-7 text-[#8b7758] flex flex-row">
            <Icon
              icon="hugeicons:instagram"
              width="24"
              height="24"
              className="mr-2 text-[#bf9d61]"
            />
            @ursullaf
          </span>
        </div>
      </div>
    </footer>
  );
}
