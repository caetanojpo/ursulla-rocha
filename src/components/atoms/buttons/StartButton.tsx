"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function StartButton() {
  const [isPressed, setIsPressed] = useState(false);

  return (
      <Link
          className="z-20"
          target="_blank"
          href="https://go.hotmart.com/P98489409V"
      >
        <div
            className={`
          w-[200px] h-[200px] rounded-full flex items-center justify-center
          cursor-pointer z-20 transition-all duration-150
          bg-gradient-to-r from-[#f4ecdd] to-[#dfcfb8]
        `}
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
            onMouseLeave={() => setIsPressed(false)}
            onTouchStart={() => setIsPressed(true)}
            onTouchEnd={() => setIsPressed(false)}
        >
          <div
              className={`
            w-[170px] h-[170px] rounded-full flex items-center justify-center
            transition-all duration-150 bg-gradient-to-r from-[#F7F0E5] to-[#DFCEB4]
          `}
          >
            <div
                className={`
              w-[160px] h-[160px] rounded-full flex items-center justify-center
              transition-all duration-150 bg-[#8f7c60]
            `}
            >
              <div
                  className={`
                w-[150px] h-[150px] rounded-full flex items-center justify-center
                transition-all duration-150 bg-gradient-to-r from-[#DFCEB4] to-[#C1A068]
                ${isPressed ? "" : ""}
              `}
              >
                <div
                    className={`
                  hover-shine rounded-full flex items-center justify-center
                  transition-all duration-150 bg-gradient-to-l from-[#DFCEB4] to-[#C1A068]
                  ${isPressed ? "w-[124px] h-[124px]" : "w-[130px] h-[130px]"}
                `}
                >
                  <h3
                      className={`
                    text-white font-medium transition-all duration-150
                    ${isPressed ? "text-[2.3rem]" : "text-[2.5rem]"}
                  `}
                  >
                    START
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
  );
}
