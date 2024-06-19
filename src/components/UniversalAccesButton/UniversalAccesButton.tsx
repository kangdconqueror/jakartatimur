"use client";
import { useEffect, useRef } from "react";
import { IcUniversalAcces } from "../icons/IcUniversalAcces";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { SwitchLanguage } from "./SwitchLanguage";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { LiaSearchPlusSolid, LiaSearchMinusSolid } from "react-icons/lia";
import { IoIosBarcode, IoIosContrast } from "react-icons/io";
import { BsLamp, BsLampFill } from "react-icons/bs";
import { TbLetterCase } from "react-icons/tb";
import { FaUnderline, FaArrowsDownToLine } from "react-icons/fa6";
import { RxReset } from "react-icons/rx";

const features = [
  {
    label: "Moda Suara",
    icon: <HiOutlineSpeakerWave />,
  },
  {
    label: "Pembesar Teks",
    icon: <LiaSearchPlusSolid />,
  },
  {
    label: "Perkecil Teks",
    icon: <LiaSearchMinusSolid />,
  },
  {
    label: "Skala Abu-Abu",
    icon: <IoIosBarcode />,
  },
  {
    label: "Kontras Tinggi",
    icon: <IoIosContrast />,
  },
  {
    label: "Layar Gelap",
    icon: <BsLampFill />,
  },
  {
    label: "Layar Terang",
    icon: <BsLamp />,
  },
  {
    label: "Tulisan Dapat Dibaca",
    icon: <TbLetterCase />,
  },
  {
    label: "Garis Bawah Tautan",
    icon: <FaUnderline />,
  },
  {
    label: "Rata Tautan",
    icon: <FaArrowsDownToLine />,
  },
  {
    label: "Atur Ulang",
    icon: <RxReset />,
  },
];

export const UniversalAccesButton = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const screenHeight = window.innerHeight;
    ref.current?.style.setProperty("top", `${screenHeight - 120}px`);
    const onScroll: EventListener = (e) => {
      const scroll = window.scrollY;
      if (scroll <= 600) {
        ref.current?.style.setProperty(
          "top",
          `${screenHeight - 120 - scroll}px`
        );
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [ref]);

  return (
    <Popover ref={ref} className="fixed left-4 z-40">
      <PopoverButton as="button" className="w-10 h-10 focus:outline-none">
        <IcUniversalAcces />
      </PopoverButton>
      <Transition
        enter="transition-all"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-all"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <PopoverPanel
          as="div"
          className="flex flex-col gap-4 bg-white shadow-lg rounded-lg p-2 border-2 border-pink-500"
        >
          <SwitchLanguage />
          <ul>
            {features.map((row) => (
              <li key={row.label}>
                <button className="px-2 py-1 hover:text-pink-500 w-full text-left flex items-center gap-2">
                  {row.icon}
                  <span>{row.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </PopoverPanel>
      </Transition>
    </Popover>
  );
};
