import Image from "next/image";
import { IcCalendar } from "../icons/IcCalendar";
import { IcClock } from "../icons/IcClock";
import { IcQuillWrite } from "../icons/IcQuillWrite";
import { IcVerticalLine } from "../icons/IcVerticalLine";

const data = [
  {
    image: "/images/03.jpeg",
    category: "INSPIRASI",
    title:
      "Pemkot Jakarta Timur Ajak Seluruh Lapisan Masyarakat Pahami Pencegahan Terorisme dan Radikalisme",
    createdAt: "7 JULI 2024",
    author: "IDA FARIDA",
  },
  {
    image: "/images/04.jpeg",
    category: "INSPIRASI",
    title:
      "Tekan Stunting, PKK Jakarta Timur Bersama Indofood Gelar Talkshow Nutrisi pada Balita",
    createdAt: "7 JULI 2024",
    author: "IDA FARIDA",
  },
  {
    image: "/images/05.jpeg",
    category: "INSPIRASI",
    title: "HUT Kota Jakarta Ke-497, Pemkot Gelar Lomba Masak Nasi Goreng",
    createdAt: "7 JULI 2024",
    author: "IDA FARIDA",
  },
  {
    image: "/images/06.jpeg",
    category: "INSPIRASI",
    title:
      "65 Pelaku UMKM di Jakarta Timur Ikuti Kurasi Dekranasda Provinsi DKI Jakarta",
    createdAt: "7 JULI 2024",
    author: "IDA FARIDA",
  },
];

export const BeritaTerkiniSection = () => {
  return (
    <div className="flex justify-center py-6 md:py-14 px-4 md:px-0">
      <div className="flex-1 max-w-screen-2xl">
        <div className="flex flex-col items-center gap-1 md:gap-2">
          <h4 className="text-[#343A40] font-semibold text-sm md:text-4xl">
            Berita Pemerintah Terkini
          </h4>
          <div className="text-xs md:text-2xl text-[#8B909A]">
            Baca Berita Terkini Kegiatan dan Program Pemerintah
          </div>
        </div>
        <div className="mt-3 md:mt-6">
          <div className="relative">
            <div className="h-[484px] rounded-lg relative overflow-hidden">
              <Image
                src="/images/02.jpeg"
                fill
                alt=""
                className="object-cover"
              />
              <div className="bg-gradient-to-b from-transparent to-black/80 absolute inset-0" />
            </div>
            <div className="absolute flex flex-col bottom-0 gap-2 p-6">
              <div className="text-xs text-[#EB30A2] bg-[#FFF5FB] w-fit py-1 px-2 rounded-full">
                KESEJAHTERAAN
              </div>
              <div className="text-white text-xl md:text-2xl font-bold">
                Walikota Buka FORST 2024, Diikuti 714 Tim Senam Tradisional di
                Jakarta Timur
              </div>
              <div className="flex gap-2">
                <div className="flex items-center gap-2">
                  <div className="text-[#EB30A2] w-4 h-4">
                    <IcCalendar />
                  </div>
                  <div className="text-white font-normal text-xs">
                    7 JULI 2024
                  </div>
                </div>
                <div className="text-[#E7EBEE]">
                  <IcVerticalLine />
                </div>
                <div className="flex gap-2 items-center">
                  <div className="text-[#EB30A2] w-4 h-4">
                    <IcQuillWrite />
                  </div>
                  <div className="text-white font-normal text-xs">
                    Diskominfo Jaktim
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.map((row, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="h-[230px] rounded-lg relative overflow-hidden">
                  <Image src={row.image} fill alt="" className="object-cover" />
                </div>
                <div className="flex-1 flex flex-col gap-4 justify-between">
                  <div className="flex flex-col gap-2 md:gap-4">
                    <div className="text-[#EB30A2] text-xs font-normal">
                      {row.category}
                    </div>
                    <h5 className="sm:text-xs text-[#101828] font-semibold">
                      {row.title}
                    </h5>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex gap-2 items-center">
                      <div className="text-[#EB30A2] w-4 h-4">
                        <IcCalendar />
                      </div>
                      <div className="text-[#8B909A] font-normal text-xs">
                        {row.createdAt}
                      </div>
                    </div>
                    <div className="hidden md:block text-[#E7EBEE]">
                      <IcVerticalLine />
                    </div>
                    <div className="flex gap-2 items-center">
                      <div className="text-[#EB30A2] w-4 h-4">
                        <IcQuillWrite />
                      </div>
                      <div className="text-[#8B909A] font-normal text-xs">
                        {row.author}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
