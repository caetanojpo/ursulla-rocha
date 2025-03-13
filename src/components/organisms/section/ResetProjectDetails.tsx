import Image from "next/image";
import React from "react";

export type ResetProjectDetailsProps = {
  title: string;
  titleHighlight: string;
  descriptionList: Description[];
  image: string;
  border?: boolean;
};

type Description = {
  icon?: string;
  text: string;
};

export default function ResetProjectDetails({
  title,
  titleHighlight,
  descriptionList,
  image,
  border = false,
}: ResetProjectDetailsProps) {
  return (
    <>
      <section
        className={`flex flex-col xl:mb-28 2xl:mb-20 xl:flex-row h-full xl:h-[50dvh] w-screen py-20 px-4 xl:p-20 bg-white justify-center ${
          border ? "border-b-4 border-solid border-[#F7F0E5]" : ""
        }`}
      >
        <div className="flex flex-col xl:flex-row w-full xl:w-[80%] h-full justify-center">
          <div className="flex flex-col h-full w-full xl:w-[60%] gap-10 ">
            <div className="xl:ml-6">
              <h2 className="text-[3rem] text-[#8f7c60] font-medium">
                {title}
                <span className="bg-gradient-to-r from-[#E6CBAA] via-[#BF9E65] to-[#8F7C60] bg-clip-text text-transparent ml-4">
                  &quot;{titleHighlight}&quot;?
                </span>
              </h2>
            </div>
            <div>
              <ul className="flex flex-col bg-[#F7F0E5] relative rounded-t-[30px] p-8 gap-8">
                <div className="absolute bottom-[-10px] left-0 w-full h-[15px] rounded-b-[30px] bg-gradient-to-r from-[#E6CBAA] via-[#BF9E65] via-40% via-[#DBC2A4] via-60% via-[#BF9E65] via-80% to-[#DFCFB6]"></div>

                {descriptionList.map((description, index) => (
                  <li key={index} className="flex w-full gap-8 items-center">
                    {description.icon ? (
                      <div className="h-20 w-20 xl:h-10 xl:w-10 relative">
                        <Image
                          src={description.icon}
                          alt="icon"
                          fill
                          objectFit="contain"
                        />
                      </div>
                    ) : null}
                    <p className="text-[1.6rem] text-[#8f7c60]">
                      {description.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className={`flex h-[200] xl:h-full w-full xl:w-1/2 items-center justify-center ${
              image === "/calendar.png" ? "xl:ml-24" : ""
            }`}
          >
            <div
              className={`h-full w-1/2 relative ${
                image === "/calendar.png" ? "xl:w-[60%]" : "w-full"
              }`}
            >
              <Image src={image} alt="" fill objectFit="contain" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
