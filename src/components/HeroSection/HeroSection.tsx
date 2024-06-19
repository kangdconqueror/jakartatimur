import { EmblaCarousel } from "../EmblaCarousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { Title } from "./Title";

const OPTIONS: EmblaOptionsType = { axis: "y" };
const SLIDES = [
  {
    image: "/images/01.jpeg",
    title: <Title />,
    subtitle:
      "Temukan Apa yang Kamu Butuhkan dengan Cepat dan Mudah dengan Portal Kami yang Ramah Pengguna",
  },
  {
    image: "/images/02.jpeg",
    title: <Title />,
    subtitle:
      "Temukan Apa yang Kamu Butuhkan dengan Cepat dan Mudah dengan Portal Kami yang Ramah Pengguna",
  },
  {
    image: "/images/03.jpeg",
    title: <Title />,
    subtitle:
      "Temukan Apa yang Kamu Butuhkan dengan Cepat dan Mudah dengan Portal Kami yang Ramah Pengguna",
  },
  {
    image: "/images/04.jpeg",
    title: <Title />,
    subtitle:
      "Temukan Apa yang Kamu Butuhkan dengan Cepat dan Mudah dengan Portal Kami yang Ramah Pengguna",
  },
];

export const HeroSection = () => {
  return (
    <div>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
};
