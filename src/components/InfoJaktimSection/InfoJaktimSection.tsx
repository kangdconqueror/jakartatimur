import classNames from "classnames";
import Image from "next/image";
import { IcEye } from "../icons/IcEye";

export const InfoJaktimSection = () => {
  return (
    <div className="flex justify-center px-4 md:px-0 py-14">
      <div className="flex-1 max-w-screen-2xl">
        <div className="flex flex-col gap-2 items-center">
          <h3 className="text-lg md:text-4xl text-[#343A40] font-bold">
            Buletin Info Jaktim
          </h3>
          <div className="text-xs md:text-2xl text-[#8B909A] font-semibold text-center md:text-left">
            Buletin ini berisi berita dan pembaruan penting yang dirancang untuk
            Anda.
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "/images/02.jpeg",
            "/images/03.jpeg",
            "/images/04.jpeg",
            "/images/05.jpeg",
            "/images/06.jpeg",
          ].map((row, i) => (
            <div
              key={i}
              className={classNames(
                "relative rounded-lg overflow-hidden group",
                i === 0 && "col-span-2 row-span-2 min-h-[270px]",
                i > 0 && "h-[270px]"
              )}
            >
              <Image src={row} alt="" fill className="object-cover" />
              <div className="absolute inset-0 hidden group-hover:flex flex-col justify-center items-center bg-gradient-to-b from-transparent to-black/80 p-4">
                <div className="h-full flex items-end justify-start w-full">
                  <h4
                    className={classNames(
                      "text-white font-bold",
                      i !== 0 ? "text-lg" : "text-2xl"
                    )}
                  >
                    Buletin Info Jaktim Ke-122
                  </h4>
                </div>
                <a
                  href="#"
                  className="w-10 h-10 absolute hidden group-hover:flex justify-center items-center"
                >
                  <IcEye />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
