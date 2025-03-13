import ResetFAQList from "@/components/molecules/lists/ResetFAQList";
import React from "react";

export default function FAQ() {
  return (
    <section className="h-full w-full relative gradient-border gradient-border-top flex flex-col justify-center py-10 mt-20 xl:mt-0">
      <div>
        <h2 className="text-[3rem] xl:text-[4rem] text-[#8F7C60] p-10 ml-0 xl:ml-20">
          Dúvidas Frequentes sobre o{" "}
          <span className="bg-gradient-to-r from-[#E6CBAA] via-[#BF9E65] to-[#8F7C60] bg-clip-text text-transparent">
            RESET 15
          </span>
        </h2>
      </div>

      <ResetFAQList home={false} />
    </section>
  );
}
