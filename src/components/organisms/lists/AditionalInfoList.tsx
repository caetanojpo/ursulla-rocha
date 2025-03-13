import Image from "next/image";
import React from "react";

export default function AditionalInfoList() {
  const bulletPointsData = [
    "Criar uma nova relação com a alimentação.",
    "Redescobrir o prazer e a constância como os verdadeiros segredos para resultados sustentáveis.",
    "Construir uma base sólida para uma rotina saudável e uma saúde plena.",
    "Comprometa-se com o início da sua última dieta",
  ];

  return (
    <section className="h-full px-4 py-32 xl:h-screen w-full relative gradient-border gradient-border-top">
      <div className="flex w-full h-full justify-center items-center">
        <div className="flex xl:w-[80%] h-full justify-center items-center flex-col">
          <div className="flex bg-[#DFCEB4] p-6 rounded-[20px] xl:rounded-b-[0px] mb-[10px] xl:mb-0 xl:rounded-t-[20px] max-w-[660px] items-center">
            <h3 className="text-[2rem] text-white text-center">
              O <span className="text-[#C1A068]">RESET 15</span> não é sobre
              números, mas sobre transformação. Mais do que perder peso ou
              medidas, você vai:
            </h3>
          </div>
          <div className="flex bg-[#f7f0e5] w-full max-w-[1100px] rounded-[30px] gradient-border gradient-border-top-rounded relative">
            <ul className="mt-[25px] flex flex-col w-full ">
              {bulletPointsData.map((data, index) => (
                <li
                  key={index}
                  className={`flex w-full p-10 py-12 justify-center items-center border-solid border-white ${
                    index !== bulletPointsData.length - 1 ? "border-b-4" : ""
                  }`}
                >
                  <div className="flex gap-2">
                    <div className="relative hidden xl:flex w-fit h-fit">
                      <Image
                        src={"/icons/check.png"}
                        alt="Sinal de atenção!"
                        width={20}
                        height={20}
                      />
                    </div>
                    <p className="text-[2rem] text-[#8f7c60]">{data}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
