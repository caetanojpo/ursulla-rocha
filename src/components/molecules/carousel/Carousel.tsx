"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/carousel/first.png",
  "/carousel/second.png",
  "/carousel/third.png",
  "/carousel/fourth.png",
  "/carousel/fifth.png",
  "/carousel/sixth.png",
];

export default function Carousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          carouselRef.current.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(handleScroll, 100);
    return () => clearInterval(interval);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 500;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative flex w-full h-full items-center p-6 rounded-xl">
      <button
        className="absolute left-2 xl:flex hidden bg-[#8f7c60] p-2 rounded-full text-white hover-shine hover:scale-[102%]"
        onClick={() => scroll("left")}
      >
        <ChevronLeft size={32} color="white" />
      </button>
      <div
        ref={carouselRef}
        className="flex w-full h-full overflow-x-auto scroll-smooth scrollbar-hide gap-12 "
      >
        {images.map((img, idx) => (
          <div key={idx} className="flex-shrink-0">
            <Image
              src={img}
              alt={`Imagem ${idx + 1}`}
              width={500}
              height={700}
              quality={100}
              className="rounded-lg w-auto h-auto max-w-full"
            />
          </div>
        ))}
      </div>
      <button
        className="absolute right-2 xl:flex hidden bg-[#8f7c60] p-2 rounded-full text-white hover-shine hover:scale-[102%]"
        onClick={() => scroll("right")}
      >
        <ChevronRight size={32} color="white" />
      </button>
    </div>
  );
}
