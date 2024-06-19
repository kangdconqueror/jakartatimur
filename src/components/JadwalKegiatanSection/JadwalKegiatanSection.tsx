import { Calendar } from "../Calendar/Calendar";
import { KegiatanPemerintah } from "../KegiatanPemerintah/KegiatanPemerintah";
import { Article } from "./Article";

const events = [
  {
    date: new Date(2024, 5, 15),
    items: [
      {
        type: "walikota",
      },
      {
        type: "wakil-walikota",
      },
      {
        type: "sekretaris-kota",
      },
    ],
  },
  {
    date: new Date(2024, 5, 16),
    items: [
      {
        type: "walikota",
      },
      {
        type: "wakil-walikota",
      },
      {
        type: "sekretaris-kota",
      },
    ],
  },
  {
    date: new Date(2024, 5, 17),
    items: [
      {
        type: "walikota",
      },
    ],
  },
  {
    date: new Date(2024, 5, 18),
    items: [
      {
        type: "sekretaris-kota",
      },
    ],
  },
];

export const JadwalKegiatanSection = () => {
  return (
    <div className="flex justify-center py-20">
      <div className="w-full max-w-screen-2xl">
        <div className="flex flex-col gap-2 md:gap-6 p-4 md:p-0">
          <div className="flex flex-col items-center">
            <h4 className="font-semibold text-xs md:text-4xl text-[#343A40] tracking-tighter">
              Tetap Terinformasi Dengan Kegiatan Pemerintah
            </h4>
            <div className="text-[#4D545C] text-xxs md:text-xl text-center md:text-left tracking-wider text-wrap">
              Dapatkan sumber informasi untuk Informasi dan Pengumuman
              Pemerintah Jakarta Timur Terkini
            </div>
          </div>
          <div className="p-2 md:p-10 flex flex-col md:flex-row gap-6 bg-white shadow rounded-lg overflow-hidden">
            <div>
              <Calendar events={events} />
              <div className="mt-6 flex gap-2 md:gap-6">
                <div className="flex justify-center items-center gap-1 md:gap-2">
                  <div className="w-5 md:w-10 h-3 bg-[#4FA772] rounded-full" />
                  <div className="text-xs md:text-lg font-medium">Walikota</div>
                </div>
                <div className="flex justify-center items-center gap-1 md:gap-2">
                  <div className="w-5 md:w-10 h-3 bg-[#FFAD46] rounded-full" />
                  <div className="text-xs md:text-lg font-medium whitespace-nowrap">
                    Wakil Walikota
                  </div>
                </div>
                <div className="flex justify-center items-center gap-1 md:gap-2">
                  <div className="w-5 md:w-10 h-3 bg-[#F25961] rounded-full" />
                  <div className="text-xs md:text-lg font-medium whitespace-nowrap">
                    Sekretaris Kota
                  </div>
                </div>
              </div>
            </div>

            <KegiatanPemerintah />

            <Article />
          </div>
        </div>
      </div>
    </div>
  );
};
