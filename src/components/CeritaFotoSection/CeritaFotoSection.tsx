import Image from "next/image";

export const CeritaFotoSection = () => {
  return (
    <div className="flex justify-center px-4 md:px-0 py-14">
      <div className="w-full max-w-screen-2xl">
        <div className="flex flex-col items-center">
          <h3 className="text-lg md:text-4xl text-[#343A40] font-bold">
            Cerita Melalui Foto
          </h3>
          <div className="text-sm md:text-2xl text-[#8B909A] font-semibold text-center md:text-left">
            Foto-foto ini memberikan gambaran yang jelas dan informatif.
          </div>
        </div>

        <div className="mt-8 flex md:grid grid-cols-4 gap-4 overflow-x-scroll md:overflow-x-hidden">
          {[
            "/images/03.jpeg",
            "/images/04.jpeg",
            "/images/05.jpeg",
            "/images/06.jpeg",
          ].map((row) => (
            <div
              key={row}
              className="relative min-w-[116px] h-[178px] md:h-[564px] rounded-lg overflow-hidden"
            >
              <Image src={row} alt="" fill className="object-cover" />
              <div className="absolute inset-0 flex items-end bg-gradient-to-b from-transparent from-70% to-black/80">
                <h4 className="text-xxs md:text-lg text-white font-semibold p-1 md:p-6">
                  Sambut HUT Jakarta Ke-497, Pemkot Jakarta Timur Siapkan
                  Berbagai Kegiatan
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
