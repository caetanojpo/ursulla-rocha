"use client";
import React, { useState } from "react";

export type DropdDownProps = {
  title: string;
  description: string;
};

export default function DropDown({ title, description }: DropdDownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col p-4 xl:py-6 xl:px-20">
      <div
        className={`flex text-[2rem] xl:text-[2.5rem] py-10 bg-[#f7f0e5] relative gradient-border gradient-border-top-low-rounded transition-all duration-150 ${
          !isOpen ? "rounded-[6px]" : "rounded-t-[6px]"
        } px-10 items-center cursor-pointer`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className="text-[#8F7C60] transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0)" }}
        >
          +
        </span>
        <h3 className="bg-gradient-to-r from-[#E6CBAA] via-[#BF9E65] to-[#8F7C60] bg-clip-text text-transparent ml-2">
          {title}
        </h3>
      </div>
      <div
        className={`text-[1.8rem] text-[#8F7C60] px-20 border-2 border-solid border-[#f7f0e5] rounded-b-[20px] overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "p-12 max-h-[500px] opacity-100" : "max-h-0 p-0 opacity-0"
        }`}
      >
        <p
          className={`${
            isOpen ? "text-[1.8rem]" : "text-[0px]"
          } transition-all duration-300 ease-in-out`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
