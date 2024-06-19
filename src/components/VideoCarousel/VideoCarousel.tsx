"use client";
import React, { useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";
import { IcChevronLeft } from "../icons/IcChevronLeft";
import { IcChevronRight } from "../icons/IcChevronRight";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

export const VideoCarousel: React.FC<PropType> = ({ slides }) => {
  const [active, setActive] = useState(0);

  const isNext = (index: number) =>
    (active !== slides.length && index === active + 1) ||
    (active === slides.length - 1 && index === 0);

  const isPrev = (index: number) =>
    index === active - 1 || (active === 0 && index === slides.length - 1);

  const onClick = (index: number) => {
    if (index !== active && active < index) {
      setActive((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    } else if (index !== active && active > index) {
      setActive((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
  };

  const onPrev = () => {
    setActive((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const onNext = () => {
    setActive((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="full-w max-w-screen-2xl h-[360px] transform-[preserve-3d] flex flex-col justify-center items-center relative">
      <div className="w-full h-full relative">
        {slides.map((index, i) => (
          <div
            key={index}
            data-prev={isPrev(index)}
            data-next={isNext(i)}
            data-active={i === active}
            onClick={() => onClick(i)}
            className="absolute w-[60%] h-[360px] left-0 right-0 m-auto transition-transform duration-500 cursor-pointer z-0 data-[active=true]:z-20 data-[prev=true]:z-10 data-[prev=true]:translate-x-[-40%] data-[next=true]:z-[9]
             data-[next=true]:translate-x-[40%] scale-75 data-[active=true]:scale-100 rounded-lg overflow-hidden"
          >
            <iframe
              src="https://www.youtube.com/embed/B-VeVFoW5L4?si=eCWHstDJlyJDcBkw&amp;controls=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
            {/* <div className="absolute bg-gradient-to-b from-transparent from-60% to-black/80 inset-x-0 bottom-0 flex items-end">
              <h4 className="text-white text-2xl font-semibold p-4">
                Sambut HUT Ke-497 Kota Jakarta, Walikota Lepas Ribuan Peserta
                Gowes untuk Meriahkan Expo Pendidikan
              </h4>
            </div> */}
          </div>
        ))}
      </div>
      <button
        onClick={onPrev}
        className="absolute bg-pink-500 text-white rounded-full left-0 w-10 h-10 flex justify-center items-center z-10"
      >
        <IcChevronLeft />
      </button>
      <button
        onClick={onNext}
        className="absolute bg-pink-500 text-white rounded-full right-0 w-10 h-10 flex justify-center items-center z-10"
      >
        <IcChevronRight />
      </button>
    </section>
  );
};
