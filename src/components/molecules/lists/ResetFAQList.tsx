import DropDown from "@/components/atoms/dropdown/DropDown";
import React from "react";
type MyComponentProps = {
  home: boolean;
};
const ResetFAQList: React.FC<MyComponentProps> = ({ home }) => {
  const faqData = [
    {
      title: "Porque não posso realizar o projeto por longos períodos?",
      description:
        "O RESET 15 não deve ser realizado em longos periodos, o projeto tem como objetivo te motivar a iniciar uma vida saudável!",
    },
    {
      title: "O projeto é apenas para atletas?",
      description: "",
    },
    {
      title: "Quanto tempo para obter os resultados?",
      description: "",
    },
    {
      title: "Como realizar o pagamento?",
      description: "",
    },
  ];
  const faqDataHome = [
    {
      title: "Qual o diferencial da consultoria?",
      description:
        "O acompanhamento de perto nos trás uma proximidade muito maior, além disso meu olhar humanizado, clínico, tendo a experiência teórica e prática, vai te trazer o melhor caminho para o resultado que deseja, de forma leve e sem radicalismo.",
    },
    {
      title: "Você atende apenas atletas?",
      description: "",
    },
    {
      title: "Quanto tempo para obter os resultados?",
      description: "",
    },
    {
      title: "Como realizar o pagamento?",
      description: "",
    },
  ];
  const arrayData = home ? faqDataHome : faqData;
  // build request commit
  return (
    <div>
      <ul className="flex flex-col">
        {arrayData.map((data, index) => (
          <li key={index} className="flex flex-col">
            <DropDown title={data.title} description={data.description} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResetFAQList;
