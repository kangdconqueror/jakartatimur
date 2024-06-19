import { IcSchedule } from "../icons/IcSchedule";

export const KegiatanPemerintah = () => {
  return (
    <div>
      <h5 className="text-2xl">Kegiatan Pemerintah</h5>
      <div className="flex gap-4 mt-4">
        <div className="flex flex-col justify-center gap-4 relative">
          <div className="absolute bg-pink-600 w-1 h-[80%] left-[9px]" />
          {new Array(4).fill(0).map((row, i) => (
            <div
              key={i}
              className="flex gap-4 items-center relative z-10 group"
            >
              <div className="bg-pink-600 w-6 h-6 rounded-full flex justify-center items-center border-4 border-white">
                <div className="bg-white w-3 h-3 rounded-full" />
              </div>
              <div
                key={i}
                className="flex-1 bg-[#8B909A0D] hover:bg-[#FFF5FB] border border-[#8B909A0D] hover:border-[#EB30A2] py-2 px-4 flex flex-col gap-2 group-hover:gap-3 rounded-lg transition-all"
              >
                <div className="text-[#70747E]">Walikota</div>
                <div className="text-[#343A40] font-bold">
                  Mendampingi PJ Gubernur dalam rangka Penyerahan Piala PORWAJA
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center justify-center">
                    <div className="text-pink-600">
                      <IcSchedule />
                    </div>
                    <div className="text-[#70747E] text-sm">15 Juni 2024</div>
                  </div>
                  <div className="text-[#70747E] text-sm">
                    10:00 - 12:00 WIB
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
