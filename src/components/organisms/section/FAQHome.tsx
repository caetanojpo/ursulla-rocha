import ResetFAQList from "@/components/molecules/lists/ResetFAQList";
import React from "react";

export default function FAQHome() {
  return (
    <section className="h-full w-full flex flex-col justify-center py-10 mt-20 xl:mt-0">
      <div>
        <h2 className="text-[3rem] xl:text-[4rem] p-10 ml-0 xl:ml-20">
          <span className="bg-gradient-to-r from-[#E6CBAA] via-[#BF9E65] to-[#8F7C60] bg-clip-text text-transparent">
            Dúvidas Frequentes
          </span>
        </h2>
      </div>

      <ResetFAQList home={true} />
    </section>
  );
}
