"use client";
import { useState } from "react";
import { IcInternetJakWifi } from "../icons/IcInternetJakWifi";
import { IcKanalAduan } from "../icons/IcKanalAduan";
import { IcKarir } from "../icons/IcKarir";
import { IcKependudukan } from "../icons/IcKependudukan";
import { IcKesehatan } from "../icons/IcKesehatan";
import { IcPendidikan } from "../icons/IcPendidikan";
import { IcPerizinan } from "../icons/IcPerizinan";
import { IcTransportasi } from "../icons/IcTransportasi";
import { Button } from "./Button";
import { Card } from "./Card";
import { Transition, TransitionChild } from "@headlessui/react";
import { IcKeamanan } from "../icons/IcKeamanan";
import { IcKesejahteraan } from "../icons/IcKesejahteraan";
import { IcTaman } from "../icons/IcTaman";
import { IcLingkungan } from "../icons/IcLingkungan";

const data = [
  [
    {
      icon: <IcPerizinan />,
      title: "Perizinan",
      description:
        "Akses terkait pelayanan dan perizinan yang diproses Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu (DPMPTSP) Provinsi DKI Jakarta",
    },
    {
      icon: <IcKesehatan />,
      title: "Kesehatan",
      description:
        "Akses Informasi institusi pelayanan kesehatan profesional yang terdapat di Jakarta Timur",
    },
    {
      icon: <IcTransportasi />,
      title: "Trasnportasi",
      description:
        "Temukan Informasi Lengkap tentang Transportasi Publik dan Rute Terbaik",
    },
    {
      icon: <IcKependudukan />,
      title: "Kependudukan",
      description:
        "Informasi dan Prosedur Pengurusan Dokumen Kependudukan Resmi",
    },
    {
      icon: <IcPendidikan />,
      title: "Pendidikan",
      description:
        "Layanan dan Program Pendidikan untuk Masa Depan yang Lebih Cerah",
    },
    {
      icon: <IcInternetJakWifi />,
      title: "Internet Jak Wifi",
      description: "Informasi Lengkap tentang Layanan Internet di Area Anda",
    },
    {
      icon: <IcKarir />,
      title: "Karir",
      description:
        "Sumber Daya dan Informasi untuk Karir yang Sukses dan Berkelanjutan",
    },
    {
      icon: <IcKanalAduan />,
      title: "Kanal Aduan",
      description:
        "Sampaikan Aduan dan Keluhan Anda untuk Mendapatkan Respon Cepat dan Efektif",
    },
  ],
  [
    {
      icon: <IcKeamanan />,
      title: "Keamanan",
      description: "Informasi dan Layanan Keamanan untuk Melindungi Warga",
    },
    {
      icon: <IcKesejahteraan />,
      title: "Kesejahteraan",
      description:
        "Program Kesejahteraan untuk Meningkatkan Kualitas Hidup Warga",
    },
    {
      icon: <IcTaman />,
      title: "Taman / RPTRA",
      description: "Nikmati Fasilitas Taman dan RPTRA di Kota Anda",
    },
    {
      icon: <IcLingkungan />,
      title: "Lingkungan dan Energi",
      description:
        "Program Pemerintah untuk Lingkungan Bersih dan Energi Terbarukan",
    },
  ],
];

export const FasilitasUnggulanSection = () => {
  const [active, setActive] = useState(0);
  const rows = data[active];
  return (
    <div className="relative z-10 flex justify-center -mt-10 px-4 md:px-0 md:-mt-[110px]">
      <div className="w-full max-w-screen-xl">
        <div className="bg-white p-3 md:p-6 rounded-lg shadow-sm flex flex-col gap-3">
          <div className="flex flex-col md:flex-row gap-3 justify-between items-center">
            <div className="flex flex-col gap-2">
              <div className="font-bold text-xs md:text-2xl">
                Fasilitas Unggulan
              </div>
              <div className="font-medium text-xxs md:text-lg text-[#8B909A]">
                Dapatkan kemudahaan akses ke layanan dan informasi Pemerintah
                Jakarta Timur untuk kebutuhan Anda.
              </div>
            </div>

            <div className="bg-[#FFF5FB] flex items-center py-2 px-4 rounded-full w-full md:w-fit">
              <Button isActive={active === 0} onClick={() => setActive(0)}>
                Layanan Publik
              </Button>
              <Button isActive={active === 1} onClick={() => setActive(1)}>
                Informasi
              </Button>
            </div>
          </div>
          <div
            key={active}
            className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-8 h-[342px] overflow-y-scroll md:overflow-y-hidden animate__animated animate__fadeIn"
          >
            {rows.map((row, i) => (
              <Card key={i} data={row} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
