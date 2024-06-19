"use client";
import Image from "next/image";
import { IcSearch } from "../icons/IcSearch";
import { IcChevronDown } from "../icons/IcChevronDown";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { IcMenu } from "../icons/IcMenu";
import { MenuItem } from "./MenuItem";
import { useEffect, useRef } from "react";

export const NavigationBar = () => {
  const desktopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll: EventListener = (event) => {
      desktopRef.current?.style.setProperty(
        "margin-top",
        `${window.scrollY > 0 ? 0 : 48}px`
      );
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [desktopRef]);

  return (
    <>
      <div
        ref={desktopRef}
        style={{ marginTop: 48 }}
        className="hidden fixed z-40 left-12 right-12 bg-white shadow rounded-full md:flex items-center justify-between gap-16 py-3 px-10 transition-all"
      >
        <div className="flex gap-6 items-center">
          <Image
            src="/images/logo.png"
            width={175}
            height={62}
            alt="Jakarta Timur"
            priority
            className="w-[175px] h-[62px]"
          />
          <ul className="flex gap-8">
            <li>
              <a
                href="#"
                className="text-[#EB30A2] border-[#EB30A2] border-b-2 py-2"
              >
                Home
              </a>
            </li>
            <li className="relative">
              <Popover>
                <PopoverButton className="flex gap-1 items-center text-[#62737F] focus:outline-none whitespace-nowrap">
                  Pemerintah Kota
                  <span className="w-6 h-6">
                    <IcChevronDown />
                  </span>
                </PopoverButton>
                <Transition
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <PopoverPanel className="absolute bg-white shadow rounded">
                    <ul className="p-2">
                      <MenuItem>Profil</MenuItem>
                      <MenuItem>Satuan Kerja</MenuItem>
                      <MenuItem>Kepegawaian</MenuItem>
                    </ul>
                  </PopoverPanel>
                </Transition>
              </Popover>
            </li>
            <li>
              <Popover>
                <PopoverButton className="flex gap-1 items-center text-[#62737F] focus:outline-none">
                  Layanan
                  <span className="w-6 h-6">
                    <IcChevronDown />
                  </span>
                </PopoverButton>
                <Transition
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <PopoverPanel className="absolute bg-white shadow rounded">
                    <ul className="p-2">
                      <MenuItem>Pendidikan</MenuItem>
                      <MenuItem>Fasilitas SRUD</MenuItem>
                      <MenuItem>Transportasi</MenuItem>
                      <MenuItem>Internet Jakwifi</MenuItem>
                      <MenuItem>PTSP</MenuItem>
                      <MenuItem>Pajak</MenuItem>
                      <MenuItem>Kanal Aduan</MenuItem>
                    </ul>
                  </PopoverPanel>
                </Transition>
              </Popover>
            </li>
            <li>
              <a href="#" className="text-[#62737F]">
                PPID
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex items-center p-4 gap-3 w-96 bg-[#F7F7F8] rounded-lg">
            <div className="text-[#6B7280]">
              <IcSearch />
            </div>
            <input
              placeholder="Search"
              className="bg-transparent focus:outline-none"
            />
          </div>
        </div>
        <ul className="flex gap-8">
          <li>
            <Popover>
              <PopoverButton className="flex gap-1 items-center text-[#62737F] focus:outline-none">
                Informasi
                <span className="w-6 h-6">
                  <IcChevronDown />
                </span>
              </PopoverButton>
              <Transition
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <PopoverPanel className="absolute bg-white shadow rounded">
                  <ul className="p-2">
                    <MenuItem>Pariwisata</MenuItem>
                    <MenuItem>Kebudayaan</MenuItem>
                    <MenuItem>RPTRA</MenuItem>
                    <MenuItem>Urban Farming</MenuItem>
                    <MenuItem>Inovasi</MenuItem>
                    <MenuItem>Statistik</MenuItem>
                  </ul>
                </PopoverPanel>
              </Transition>
            </Popover>
          </li>
          <li>
            <Popover>
              <PopoverButton className="flex gap-1 items-center text-[#62737F] focus:outline-none">
                Publikasi
                <span className="w-6 h-6">
                  <IcChevronDown />
                </span>
              </PopoverButton>
              <Transition
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <PopoverPanel className="absolute bg-white shadow rounded">
                  <ul className="p-2">
                    <MenuItem>Berita</MenuItem>
                    <MenuItem>Galeri</MenuItem>
                    <MenuItem>Video</MenuItem>
                    <MenuItem>Buletin</MenuItem>
                  </ul>
                </PopoverPanel>
              </Transition>
            </Popover>
          </li>
        </ul>
      </div>

      <div className="fixed w-full top-0 z-40 flex justify-between items-center md:hidden bg-white/50 px-4 backdrop-blur-sm shadow">
        <Image
          src="/images/logo.png"
          width={175}
          height={62}
          alt="Jakarta Timur"
          priority
          className="w-[175px] h-[62px]"
        />

        <Popover>
          <PopoverButton>
            <IcMenu />
          </PopoverButton>
          <Transition
            enter="duration-200 ease-out"
            enterFrom="-translate-y-20 opacity-0"
            enterTo="max-h-auto -translate-y-0 opacity-100"
            leave="duration-200 ease-out"
            leaveFrom="-translate-y-0 opacity-100"
            leaveTo="-translate-y-20 opacity-0"
          >
            <PopoverPanel className="absolute z-40 left-0 right-0 top-[62px] bg-white backdrop-blur-sm shadow">
              <ul className="p-2">
                <li className="p-1">
                  <a href="#">Home</a>
                </li>

                <Disclosure as="li" className="p-1">
                  <DisclosureButton
                    as="a"
                    href="#"
                    className="flex gap-1 justify-between"
                  >
                    <span>Pemerintah Kota</span>
                    <span className="w-6 h-6">
                      <IcChevronDown />
                    </span>
                  </DisclosureButton>
                  <Transition
                    enter="duration-200 ease-out"
                    enterFrom="h-0 opacity-0"
                    enterTo="h-[112px] opacity-100"
                    leave="duration-200 ease-out"
                    leaveFrom="h-[112px] opacity-100"
                    leaveTo="h-0 opacity-0"
                  >
                    <DisclosurePanel as="ul" className="p-2 px-4">
                      <li className="p-1 hover:bg-[#EB30A2] hover:text-white rounded">
                        <a href="#">Profil</a>
                      </li>
                      <li className="p-1 hover:bg-[#EB30A2] hover:text-white rounded">
                        <a href="#">Satuan Kerja</a>
                      </li>
                      <li className="p-1 hover:bg-[#EB30A2] hover:text-white rounded">
                        <a href="#">Kepegawaian</a>
                      </li>
                    </DisclosurePanel>
                  </Transition>
                </Disclosure>

                <Disclosure as="li" className="p-1">
                  <DisclosureButton
                    as="a"
                    href="#"
                    className="flex gap-1 justify-between"
                  >
                    <span>Layanan</span>
                    <span className="w-6 h-6">
                      <IcChevronDown />
                    </span>
                  </DisclosureButton>
                  <Transition
                    enter="duration-200 ease-out"
                    enterFrom="h-0 opacity-0"
                    enterTo="h-[112px] opacity-100"
                    leave="duration-200 ease-out"
                    leaveFrom="h-[112px] opacity-100"
                    leaveTo="h-0 opacity-0"
                  >
                    <DisclosurePanel as="ul" className="p-2">
                      <li className="p-1 hover:bg-[#EB30A2] hover:text-white rounded">
                        <a href="#">Menu 1</a>
                      </li>
                      <li className="p-1 hover:bg-[#EB30A2] hover:text-white rounded">
                        <a href="#">Menu 2</a>
                      </li>
                      <li className="p-1 hover:bg-[#EB30A2] hover:text-white rounded">
                        <a href="#">Menu 3</a>
                      </li>
                    </DisclosurePanel>
                  </Transition>
                </Disclosure>

                <li className="p-1">
                  <a href="#">PPID</a>
                </li>

                <Disclosure as="li" className="p-1">
                  <DisclosureButton
                    as="a"
                    href="#"
                    className="flex gap-1 justify-between"
                  >
                    <span>Informasi</span>
                    <span className="w-6 h-6">
                      <IcChevronDown />
                    </span>
                  </DisclosureButton>

                  <Transition
                    enter="duration-200 ease-out"
                    enterFrom="h-0 opacity-0"
                    enterTo="h-[112px] opacity-100"
                    leave="duration-200 ease-out"
                    leaveFrom="h-[112px] opacity-100"
                    leaveTo="h-0 opacity-0"
                  >
                    <DisclosurePanel as="ul" className="p-2">
                      <li className="p-1 hover:bg-[#EB30A2] hover:text-white rounded">
                        <a href="#">Menu 1</a>
                      </li>
                      <li className="p-1 hover:bg-[#EB30A2] hover:text-white rounded">
                        <a href="#">Menu 2</a>
                      </li>
                      <li className="p-1 hover:bg-[#EB30A2] hover:text-white rounded">
                        <a href="#">Menu 3</a>
                      </li>
                    </DisclosurePanel>
                  </Transition>
                </Disclosure>

                <Disclosure as="li" className="p-1">
                  <DisclosureButton
                    as="a"
                    href="#"
                    className="flex gap-1 justify-between"
                  >
                    <span>Publikasi</span>
                    <span className="w-6 h-6">
                      <IcChevronDown />
                    </span>
                  </DisclosureButton>
                  <Transition
                    enter="duration-200 ease-out"
                    enterFrom="h-0 opacity-0"
                    enterTo="h-[112px] opacity-100"
                    leave="duration-200 ease-out"
                    leaveFrom="h-[112px] opacity-100"
                    leaveTo="h-0 opacity-0"
                  >
                    <DisclosurePanel as="ul" className="p-2">
                      <li className="p-1 hover:bg-[#EB30A2] hover:text-white rounded">
                        <a href="#">Menu 1</a>
                      </li>
                      <li className="p-1 hover:bg-[#EB30A2] hover:text-white rounded">
                        <a href="#">Menu 2</a>
                      </li>
                      <li className="p-1 hover:bg-[#EB30A2] hover:text-white rounded">
                        <a href="#">Menu 3</a>
                      </li>
                    </DisclosurePanel>
                  </Transition>
                </Disclosure>
              </ul>
            </PopoverPanel>
          </Transition>
        </Popover>
      </div>
    </>
  );
};
