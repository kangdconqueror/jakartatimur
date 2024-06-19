"use client";
import React, { ReactNode } from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import useEmblaCarousel from "embla-carousel-react";
import classes from "./EmblaCarousel.module.css";
import Image from "next/image";
import classNames from "classnames";
import AutoPlay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";

type PropType = {
  slides: {
    image: string;
    title: ReactNode;
    subtitle: string;
  }[];
  options?: EmblaOptionsType;
};

export const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade(), AutoPlay()]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section className={classes.embla}>
      <div className={classes.embla__viewport} ref={emblaRef}>
        <div className={classes.embla__container}>
          {slides.map((row) => (
            <div className={classNames(classes.embla__slide)} key={row.image}>
              <div
                className={classNames(
                  classes.embla__slide__number,
                  "relative rounded-xl overflow-hidden"
                )}
              >
                <Image
                  src={row.image}
                  fill
                  alt={row.image}
                  className="object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center mt-14 md:mt-0 p-4 md:p-14 bg-gradient-to-b from-transparent to-black/80">
                  {row.title}
                  <div className="font-bold text-xs md:text-2xl max-w-[700px] text-white">
                    {row.subtitle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={classes.embla__controls}>
        <div className={classes.embla__dots}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={classNames(
                classes.embla__dot,
                index === selectedIndex && classes["embla__dot--selected"]
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
