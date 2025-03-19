"use client";
import { useMobile } from "@/components/context/mobileContext";
import SobreMim from "@/components/organisms/aboutMy";
import HeaderHome from "@/components/organisms/headerBannerHome";
import FAQHome from "@/components/organisms/section/FAQHome";
import { Download } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/curriculo_ursulla_rocha_fernandes.pdf"; // Adjust the file name accordingly
    link.download = "curriculo_ursulla_rocha_fernandes.pdf"; // File name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const { isMobile } = useMobile();
  return (
    <div className="">
      <main className="flex flex-col ">
        {!isMobile && <HeaderHome />}
        <div className="pl-5 pr-5 md:pl-20 py-20 md:pr-96 w-full border-b-2 border-b-[#f7f0e5]">
          <SobreMim />
          <section className="mt-20 flex md:flex-row flex-col sm">
            <Image alt="" src="/content-IMG.png" width={700} height={800} />
            <button
              onClick={handleDownload}
              className="flex items-center mt-10 md:mt-0 text-3xl justify-center bg-[#f7f0e5] rounded-[10px] text-[#bf9d61] w-[200px] h-[40px] hover-shine shadow-md"
            >
              <Download className="mr-2" size={20} />
              Download Lattes
            </button>
          </section>
          <section className="mt-20">
            {" "}
            <span className="bg-gradient-to-r from-[#E6CBAA] via-[#BF9E65] to-[#8F7C60] bg-clip-text text-transparent text-5xl  font-[Tenor Sans]">
              Experiência Profissional
            </span>
            <div>
              <div className="flex flex-row content-center mb-2 mt-10">
                <Image alt="" src="/icon-nutri.png" width={30} height={30} />
                <p className=" bg-gradient-to-r text-center ml-5 mt-2 from-[#E6CBAA] via-[#BF9E65] to-[#8F7C60] bg-clip-text text-transparent text-3xl font-[Tenor Sans]">
                  Nutrição Estética para Resultados Reais
                </p>
              </div>
              <p className="mb-10 text-3xl text-[#8b7758] font-[Tenor Sans]">
                Especialista em nutrição estética aplicada ao emagrecimento,
                hipertrofia e recomposição corporal. Acompanhamento
                individualizado para otimizar a queima de gordura, promover
                ganho de massa magra e remodelar a composição corporal de forma
                estratégica, segura e eficiente. Planos alimentares adaptados à
                fisiologia e rotina de cada paciente, garantindo resultados
                sustentáveis e duradouros.
              </p>
            </div>
            <div>
              <div className="flex flex-row items-center md:items-none content-center mb-2 mt-10">
                <Image
                  alt=""
                  src="/icon-alimentacao.png"
                  width={30}
                  height={30}
                />
                <p className=" bg-gradient-to-r text-center ml-5 mt-2 from-[#E6CBAA] via-[#BF9E65] to-[#8F7C60] bg-clip-text text-transparent text-3xl font-[Tenor Sans]">
                  Reeducação Alimentar e Tratamento de Desordens Nutricionais
                </p>
              </div>
              <p className="mb-10 text-3xl text-[#8b7758] font-[Tenor Sans]">
                Foco na transformação dos hábitos alimentares, promovendo adesão
                ao planejamento nutricional e auxiliando no tratamento de
                desordens alimentares. Estratégias baseadas em ciência e
                comportamento alimentar para corrigir padrões prejudiciais,
                restaurar o equilíbrio metabólico e promover bem-estar físico e
                mental. Ideal para quem busca não apenas estética, mas saúde
                plena e autonomia alimentar.
              </p>
            </div>
            <div>
              <div className="flex flex-row content-center mb-2 mt-10">
                <Image alt="" src="/icon-edu.png" width={30} height={30} />
                <p className=" bg-gradient-to-r text-center ml-5 mt-2 from-[#E6CBAA] via-[#BF9E65] to-[#8F7C60] bg-clip-text text-transparent text-3xl font-[Tenor Sans]">
                  Educação Nutricional: Ciência sem Mitos{" "}
                </p>
              </div>
              <p className="mb-10 text-3xl text-[#8b7758] font-[Tenor Sans]">
                Compromisso com a disseminação de conhecimento baseado em
                evidências, desmistificando crenças ultrapassadas sobre nutrição
                e suplementação. Aulas, palestras e conteúdos didáticos voltados
                para profissionais e pacientes que desejam compreender o que
                realmente funciona na alimentação e no uso de suplementos.
                Informação clara, acessível e fundamentada para empoderar
                escolhas nutricionais inteligentes.
              </p>
            </div>
            <div>
              <div className="flex flex-row items-center md:items-none  content-center mb-2 mt-10">
                <Image alt="" src="/icon-esport.png" width={30} height={30} />
                <p className=" bg-gradient-to-r text-center ml-5 mt-2 from-[#E6CBAA] via-[#BF9E65] to-[#8F7C60] bg-clip-text text-transparent text-3xl font-[Tenor Sans]">
                  Nutrição Esportiva Avançada para Alta Performance{" "}
                </p>
              </div>
              <p className="mb-10 text-3xl text-[#8b7758] font-[Tenor Sans]">
                Atuação voltada para atletas e praticantes avançados que buscam
                otimizar desempenho, recuperação e longevidade esportiva.
                Protocolos nutricionais personalizados para maximizar força,
                resistência, explosão muscular e recuperação pós-treino.
                Abordagem integrada com periodização alimentar, suplementação
                estratégica e ajustes metabólicos para potencializar cada fase
                do treinamento.
              </p>
            </div>
          </section>
        </div>
        <section
          className="md:w-full relative pt-20"
          style={{ borderTop: "4px solid #f7f0e5" }}
        >
          {!isMobile ? (
            <img src="/SECTION-3.png" className="w-full" />
          ) : (
            <Image
              alt=""
              src="/SECTION-3-mobile.png"
              width={700}
              height={300}
              priority
            />
          )}
          {!isMobile && (
            <Image
              alt=""
              src="/ursulla-profile.png"
              width={680}
              height={600}
              className="absolute top-[-74px] right-[0px]"
            />
          )}
        </section>
        <section className="md:pl-20 pl-4 pr-4 py-20 md:pr-96 w-full">
          <span className="bg-gradient-to-r from-[#E6CBAA] via-[#BF9E65] to-[#8F7C60] bg-clip-text text-transparent text-5xl font-[Tenor Sans]">
            Experiência Profissional
          </span>
          <div className="mt-20 flex flex-row items-center">
            <Image alt="" src="/IFBB.png" width={100} height={100} />
            <div className="flex flex-col ml-7 max-w-[850px]">
              <p className="mb-10 text-3xl mt-10 text-[#8b7758] font-[Tenor Sans]">
                Tenho experiência com atletas por já ter participado de
                campeonatos de fisiculturismo, onde ja me consagrei campeã
                Brasileira, campeã Estadual e campeã Carioca pela IFBB Brasil.
              </p>
              <p className="mb-10 text-3xl text-[#8b7758] font-[Tenor Sans]">
                Atualmente acompanho atletas em suas fases de preparação para
                estes campeonatos, entre IFBB e outras federações nacionais e
                internacionais.
              </p>
            </div>
          </div>
          <div className="mt-20 flex flex-row items-center">
            <Image alt="" src="/planet-icon.png" width={100} height={100} />
            <div className="flex flex-col ml-7 max-w-[850px]">
              <p className="mb-10 text-3xl mt-10 text-[#8b7758] font-[Tenor Sans]">
                No momento atendo em São Paulo, mas já intercalo meus
                atendimentos no Rio de Janeiro, Florianópolis e outras cidades
                no interior de São Paulo.
              </p>
            </div>
          </div>
        </section>
        <div
          className="flex items-center pt-20 mt-20 pl-20 py-40 "
          style={{ borderTop: "4px solid #f7f0e5", width: "100%" }}
        >
          <Image alt="" src="/trophe.png" width={80} height={80} />
          <span className="bg-gradient-to-r from-[#E6CBAA] via-[#BF9E65] to-[#8F7C60] bg-clip-text text-transparent text-6xl font-[Tenor Sans]">
            Prêmios e títulos
          </span>
        </div>
        <section
          className="relative gradient-border gradient-border-top w-full md:h-[900px] h-[1780px]"
          style={{ borderBottom: "4px solid #f7f0e5", width: "100%" }}
        >
          <div className="flex flex-col items-center w-[300px] absolute md:left-[400px] md:top-[-50px] left-[50px] top-[50px] z-[999999]">
            <Image alt="" src="/champion.png" width={120} height={80} />
            <span className=" text-center bg-gradient-to-r from-[#E6CBAA] via-[#BF9E65] to-[#8F7C60] bg-clip-text text-transparent text-6xl font-[Tenor Sans]">
              2014
            </span>
            <p className="text-2xl mt-5 text-[#8b7758] text-center font-[Tenor Sans]">
              Campeã da Copa Nutrihouse de Fisiculturismo, Federação
              Internacionalde Fisiculturismo & Fitness - IFBB.
            </p>
          </div>
          <div className="flex flex-col items-center w-[300px] absolute md:right-[400px] md:left-auto md:top-[-50px] left-[50px] top-[370px] z-[999999]">
            <Image alt="" src="/champion.png" width={120} height={80} />
            <span className=" text-center bg-gradient-to-r from-[#E6CBAA] via-[#BF9E65] to-[#8F7C60] bg-clip-text text-transparent text-6xl font-[Tenor Sans]">
              2015
            </span>
            <p className="text-2xl mt-5 text-[#8b7758] text-center font-[Tenor Sans]">
              Campeã da Copa Carioca de Fisiculturismo, Federação Internacional
              de Fisiculturismo & Fitness - IFBB.
            </p>
          </div>
          <Image
            alt=""
            src="/image-champion.png"
            width={500}
            height={100}
            className="flex absolute md:top-[200px] md:left-[280px] top-[1300px]"
          />
          <div className="flex flex-col items-center w-[300px] absolute md:right-[400px] md:left-auto md:top-[180px] left-[50px] top-[590px] z-[999999]">
            <Image alt="" src="/champion-divider.png" width={120} height={80} />
            <span className=" text-center bg-gradient-to-r from-[#E6CBAA] via-[#BF9E65] to-[#8F7C60] bg-clip-text text-transparent text-6xl font-[Tenor Sans]">
              2015
            </span>
            <p className="text-2xl mt-5 text-[#8b7758] text-center font-[Tenor Sans]">
              Campeã de Fisiculturismo do Mr. Rio, Federação Internacional de
              Fisiculturismo & Fitness - IFBB.
            </p>
          </div>
          <div className="flex flex-col items-center w-[300px] absolute md:right-[400px] md:top-[480px] md:left-auto left-[50px] top-[890px] z-[999999]">
            <Image alt="" src="/champion-divider.png" width={120} height={80} />
            <span className=" text-center bg-gradient-to-r from-[#E6CBAA] via-[#BF9E65] to-[#8F7C60] bg-clip-text text-transparent text-6xl font-[Tenor Sans]">
              2015
            </span>
            <p className="text-2xl mt-5 text-[#8b7758] text-center font-[Tenor Sans]">
              Campeã do Campeonato Brasileiro de Fisiculturismo, Confederação
              Brasileira de Musculação, Fisiculturismo e Fitness.
            </p>
          </div>
        </section>
        {/* SEÇÃO DE PARTICIPAÇÃO EM EVENTOS */}
        <div className="flex">
          <div className="flex items-center pt-20 mt-10 pl-20 py-40 ">
            <Image alt="" src="/events-icon.png" width={80} height={80} />
            <span className="bg-gradient-to-r from-[#E6CBAA] via-[#BF9E65] to-[#8F7C60] bg-clip-text text-transparent text-6xl ml-5 font-[Tenor Sans]">
              Participação em eventos, congressos, exposições e feiras.
            </span>
          </div>
        </div>
        <section
          className="relative gradient-border gradient-border-top w-full relative md:h-[900px] h-[3100px]"
          style={{ borderBottom: "4px solid #f7f0e5", width: "100%" }}
        >
          <div className="flex flex-col items-center w-[300px] absolute md:left-[340px] md:top-[-50px]  left-[50px] top-[50px] z-[999999]">
            <Image
              alt=""
              src="/events-icon-congrat.png"
              width={120}
              height={80}
            />
            <span className=" text-center bg-gradient-to-r from-[#E6CBAA] via-[#BF9E65] to-[#8F7C60] bg-clip-text text-transparent text-6xl font-[Tenor Sans]">
              2016
            </span>
            <p className="text-2xl mt-5 text-[#8b7758] text-center font-[Tenor Sans]">
              Arnold Classic Brasil. Atleta Labrada.
            </p>
          </div>
          <div className="flex flex-col items-center w-[300px] absolute md:left-[10px] md:top-[-50px]  left-[50px] top-[300px] z-[999999]">
            <Image
              alt=""
              src="/events-icon-congrat.png"
              width={120}
              height={80}
            />
            <span className=" text-center bg-gradient-to-r from-[#E6CBAA] via-[#BF9E65] to-[#8F7C60] bg-clip-text text-transparent text-6xl font-[Tenor Sans]">
              2015
            </span>
            <p className="text-2xl mt-5 text-[#8b7758] text-center font-[Tenor Sans]">
              Arnold Classic Brasil. Atleta Labrada.
            </p>
          </div>
          <div className="flex flex-col items-center w-[300px] absolute md:left-[660px] md:top-[-50px] left-[50px] top-[550px] z-[999999]">
            <Image
              alt=""
              src="/events-icon-congrat.png"
              width={120}
              height={80}
            />
            <span className=" text-center bg-gradient-to-r from-[#E6CBAA] via-[#BF9E65] to-[#8F7C60] bg-clip-text text-transparent text-6xl font-[Tenor Sans]">
              2019
            </span>
            <p className="text-2xl mt-5 text-[#8b7758] text-center font-[Tenor Sans]">
              Arnold Classic Brasil. Modelo Maria Gueixa
            </p>
          </div>
          <div className="flex flex-col items-center w-[300px] absolute md:left-[960px] md:top-[-50px] left-[50px] top-[800px] z-[999999]">
            <Image
              alt=""
              src="/events-icon-congrat.png"
              width={120}
              height={80}
            />
            <span className=" text-center bg-gradient-to-r from-[#E6CBAA] via-[#BF9E65] to-[#8F7C60] bg-clip-text text-transparent text-6xl font-[Tenor Sans]">
              2021
            </span>
            <p className="text-2xl mt-5 text-[#8b7758] text-center font-[Tenor Sans]">
              Expo Super Show Presença Atleta e Nutricionista
            </p>
          </div>
          <div className="flex flex-col items-center w-[300px] absolute md:left-[960px] md:top-[180px] left-[50px] top-[1000px]  z-[999999]">
            <Image alt="" src="/congrat-divider.png" width={120} height={80} />
            <span className=" text-center bg-gradient-to-r from-[#E6CBAA] via-[#BF9E65] to-[#8F7C60] bg-clip-text text-transparent text-6xl font-[Tenor Sans]">
              2021
            </span>
            <p className="text-2xl mt-5 text-[#8b7758] text-center font-[Tenor Sans]">
              Congresso Rio Helth Nutririon
            </p>
          </div>
          <div className="flex flex-col items-center w-[300px] absolute md:left-[1260px] md:top-[-50px] left-[50px] top-[1350px]  z-[999999]">
            <Image
              alt=""
              src="/events-icon-congrat.png"
              width={120}
              height={80}
            />
            <span className=" text-center bg-gradient-to-r from-[#E6CBAA] via-[#BF9E65] to-[#8F7C60] bg-clip-text text-transparent text-6xl font-[Tenor Sans]">
              2022
            </span>
            <p className="text-2xl mt-5 text-[#8b7758] text-center font-[Tenor Sans]">
              Congresso Muscle Contest. Presença Atleta e Nutricionista
            </p>
          </div>

          <div className="flex flex-col items-center w-[300px] absolute md:left-[1260px] md:top-[180px] left-[50px] top-[1550px]  z-[999999]">
            <Image alt="" src="/congrat-divider.png" width={120} height={80} />
            <span className=" text-center bg-gradient-to-r from-[#E6CBAA] via-[#BF9E65] to-[#8F7C60] bg-clip-text text-transparent text-6xl font-[Tenor Sans]">
              2022
            </span>
            <p className="text-2xl mt-5 text-[#8b7758] text-center font-[Tenor Sans]">
              Congresso Rio Helth Nutririon
            </p>
          </div>
          <div className="flex flex-col items-center w-[300px] absolute md:left-[1590px] md:top-[-50px] left-[50px] top-[1900px]  z-[999999]">
            <Image
              alt=""
              src="/events-icon-congrat.png"
              width={120}
              height={80}
            />
            <span className=" text-center bg-gradient-to-r from-[#E6CBAA] via-[#BF9E65] to-[#8F7C60] bg-clip-text text-transparent text-6xl font-[Tenor Sans]">
              2023
            </span>
            <p className="text-2xl mt-5 text-[#8b7758] text-center font-[Tenor Sans]">
              Curso de Farmacologia Hormonal Aplicada.
            </p>
          </div>
          <Image
            alt=""
            src="/picture-congrat.png"
            width={500}
            height={100}
            className="flex absolute md:top-[200px] md:left-[280px] top-[2700px] "
          />
          <div className="flex flex-col items-center w-[300px] absolute md:left-[1590px] md:top-[180px] left-[50px] top-[2090px] z-[999999]">
            <Image alt="" src="/congrat-divider.png" width={120} height={80} />
            <span className=" text-center bg-gradient-to-r from-[#E6CBAA] via-[#BF9E65] to-[#8F7C60] bg-clip-text text-transparent text-6xl font-[Tenor Sans]">
              2023
            </span>
            <p className="text-2xl mt-5 text-[#8b7758] text-center font-[Tenor Sans]">
              Congresso MAP Diogo Viana
            </p>
          </div>
          <div className="flex flex-col items-center w-[300px] absolute md:left-[1590px] md:top-[480px] left-[50px] top-[2330px]  z-[999999]">
            <Image alt="" src="/congrat-divider.png" width={120} height={80} />
            <span className=" text-center bg-gradient-to-r from-[#E6CBAA] via-[#BF9E65] to-[#8F7C60] bg-clip-text text-transparent text-6xl font-[Tenor Sans]">
              2023
            </span>
            <p className="text-2xl mt-5 text-[#8b7758] text-center font-[Tenor Sans]">
              Congresso Rio Helth Nutririon
            </p>
          </div>
        </section>
        <div className="flex">
          {/* <div className="flex flex-col items-start pt-20 mt-10 pl-20 py-40 ">
            <span className="bg-gradient-to-r from-[#E6CBAA] via-[#BF9E65] to-[#8F7C60] bg-clip-text text-transparent text-6xl font-[Tenor Sans]">
              Antes <span className="text-[#8b7758] text-8xl">X</span> Depois
            </span>
            <span className="text-[#8b7758] text-5xl py-10">
              Confira o antes e depois dos que tiveram sua vida transformada
              após seguir com a orientação nutricional e treinos da consultoria
              e planejamento alimentar.
            </span>
          </div> */}
          {/* CARROSEL */}
        </div>
        <section
          className="flex-col flex items-start pt-20 mt-10 md:pl-20 py-40 w-full"
          style={{ borderBottom: "4px solid #f7f0e5", width: "100%" }}
        >
          <div className="flex-col flex items-start mb-20">
            <span className="bg-gradient-to-r from-[#E6CBAA]  via-[#BF9E65] to-[#8F7C60] bg-clip-text text-transparent text-6xl font-[Tenor Sans]">
              O que está incluso no
            </span>
            <span className="bg-gradient-to-r from-[#E6CBAA]  via-[#BF9E65] to-[#8F7C60] bg-clip-text text-transparent text-6xl font-[Tenor Sans]">
              Acompanhamento Nutricional ?
            </span>
          </div>
          <div className="w-full justify-center items-center md:ml-40">
            <div className="md:grid md:grid-cols-2 md:gap-80">
              <Image
                alt=""
                src="/consult-presencial.png"
                width={600}
                height={600}
                className="mb-10 md:mb-0"
              />
              <Image
                alt=""
                src="/consult-online.png"
                width={600}
                height={600}
              />
            </div>
          </div>
        </section>
        <section className="flex-col flex items-start pt-20 mt-10 md:pl-20 py-40 w-full">
          <FAQHome />
        </section>
      </main>
    </div>
  );
}
