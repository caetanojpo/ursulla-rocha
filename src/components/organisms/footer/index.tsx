"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [whatsMessage, setWhatsMessage] = useState("");
  const [isNotValid, setIsNotValid] = useState(true);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (formData.name !== "" && formData.email !== "") {
      setIsNotValid(false);
    } else {
      setIsNotValid(true);
    }

    setWhatsMessage(
      `Olá, como vai? Me chamo ${formData.name}, com o e-mail: ${formData.email}. Gostaria de um atendimento!`
    );
  }, [formData]);

  const handleForm = () => {
    if (isNotValid) return;
    const url = `https://api.whatsapp.com/send?phone=5518997970919&text=${encodeURIComponent(
      whatsMessage
    )}`;
    window.open(url, "_blank");
  };
  return (
    <footer className="bg-[#f7f0e5] py-10">
      <div className="container mx-auto px-8 mb-4">
        {/* Grid Container */}
        <form
          onSubmit={handleForm}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center"
        >
          {/* Div com os textos (esquerda) */}
          <div className="flex flex-col col-span-1">
            <Image alt="" src="/banner-footer.png" width={300} height={300} />
            <p className="!text-[#8F7C60] mt-2 font-bold text-center ">
              RECEBA EM PRIMEIRA MÃO NOVIDADES DOS NOSSOS LANÇAMENTOS
            </p>
          </div>

          {/* Formulário (direita) */}
          {/* Input Nome */}
          <input
            type="text"
            placeholder="DIGITE SEU NOME"
            className="px-6 py-3 rounded-3xl border border-[#bf9d61] focus:outline-none focus:ring-2 focus:ring-[#bf9d61] w-full"
            name="name"
            value={formData.name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange(event)
            }
          />

          {/* Input E-mail */}
          <input
            type="email"
            placeholder="DIGITE SEU EMAIL"
            className="px-6 py-3 rounded-3xl border border-[#bf9d61] focus:outline-none focus:ring-2 focus:ring-[#bf9d61] w-full"
            name="email"
            value={formData.email}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange(event)
            }
          />

          {/* Botão CADASTRAR */}
          <button
            type="submit"
            className={`w-[40%] ${isNotValid ? "cursor-not-allowed bg-gray-300" : "bg-[#dfceb4] cursor-pointer hover-shine"}  text-white px-8 py-3 rounded-3xl shadow-sm transition-colors text-lg col-span-1 transiton-all duration-300`}
            disabled={isNotValid}
          >
            CADASTRAR
          </button>
        </form>
      </div>
      <div className="flex md:flex-row flex-col w-full justify-evenly py-20 px-20 bg-white relative gradient-border gradient-border-top">
        <div className="flex flex-col">
          <span className="text-4xl mb-7 bg-gradient-to-r from-[#E6CBAA] via-[#BF9E65] to-[#8F7C60] bg-clip-text text-transparent">
            Ursulla Rocha
          </span>
          <Link
            href="/"
            className="my-4 hover:underline hover:decoration-[#8F7C60] transition-all durantion-600"
          >
            <span className="text-3xl mb-7 text-[#8b7758]">
              Sobre Ursulla Rocha
            </span>
          </Link>
          <Link
            href="/reset"
            className="my-4 hover:underline hover:decoration-[#8F7C60] transition-all durantion-600"
          >
            <span className="text-3xl mb-7 text-[#8b7758]">Produtos</span>
          </Link>
          <Link
            href="https://api.whatsapp.com/send?phone=5521986336699"
            target="_blank"
            className="my-4 hover:underline hover:decoration-[#8F7C60] transition-all durantion-600"
          >
            <span className="text-3xl mb-7 text-[#8b7758]">Contato</span>
          </Link>
        </div>
        <div className="flex flex-col">
          <span className="text-4xl mb-7 bg-gradient-to-r from-[#E6CBAA] via-[#BF9E65] to-[#8F7C60] bg-clip-text text-transparent">
            Contato
          </span>
          <span className="text-3xl flex-row flex mb-7 text-[#8b7758]">
            <h2 className="text-[#bf9d61]">CRN-RJ:</h2> 19100377
          </span>

          <Link
            href="https://api.whatsapp.com/send?phone=5521986336699"
            target="_blank"
            className="my-4 hover:underline hover:decoration-[#8F7C60] transition-all durantion-600"
          >
            <span className="text-3xl text-[#8b7758] flex flex-row">
              <Icon
                icon="mdi:whatsapp"
                width="24"
                height="24"
                className="mr-2 text-[#bf9d61]"
              />
              +55 (21) 98633-6699
            </span>
          </Link>
          <Link
            href="https://api.whatsapp.com/send?phone=5521981207266"
            target="_blank"
            className="my-4 hover:underline hover:decoration-[#8F7C60] transition-all durantion-600"
          >
            <span className="text-3xl mb-7 text-[#8b7758] flex flex-row">
              <Icon
                icon="mdi:whatsapp"
                width="24"
                height="24"
                className="mr-2 text-[#bf9d61]"
              />
              +55 (21) 98120-7266
            </span>
          </Link>
          <Link
            href="mailto:rochaursulla10@gmail.com"
            target="_blank"
            className="my-4 hover:underline hover:decoration-[#8F7C60] transition-all durantion-600"
          >
            <span className="text-3xl mb-7 text-[#8b7758] flex flex-row">
              <Icon
                icon="carbon:email"
                width="24"
                height="24"
                className="mr-2 text-[#bf9d61]"
              />
              rochaursulla10@gmail.com
            </span>
          </Link>
          <Link
            href="https://www.instagram.com/ursullaf"
            target="_blank"
            className="my-4 hover:underline hover:decoration-[#8F7C60] transition-all durantion-600"
          >
            <span className="text-3xl mb-7 text-[#8b7758] flex flex-row">
              <Icon
                icon="hugeicons:instagram"
                width="24"
                height="24"
                className="mr-2 text-[#bf9d61]"
              />
              @ursullaf
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
