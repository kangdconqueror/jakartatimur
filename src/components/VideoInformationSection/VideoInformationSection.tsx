import { VideoCarousel } from "../VideoCarousel/VideoCarousel";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = {
  align: "center",
  loop: true,
  duration: 5000,
};
const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export const VideoInformationSection = () => {
  return (
    <div className="flex justify-center px-4 md:px-0 py-20 bg-[#FFF8FBCC]">
      <div className="flex-1 max-w-screen-2xl">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2 items-center">
            <h3 className="text-sm md:text-4xl text-[#343A40] font-bold">
              Video Informasi dan Edukasi
            </h3>
            <div className="text-xs md:text-2xl text-center md:text-left text-[#8B909A] tracking-tighter">
              Temukan informasi penting melalui video-video kami. Dari panduan
              layanan hingga berita terbaru, tonton video kami untuk tetap
              terinformasi dan teredukasi.
            </div>
          </div>
          <VideoCarousel slides={SLIDES} options={OPTIONS} />
        </div>
      </div>
    </div>
  );
};
