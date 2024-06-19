import Image from "next/image";
import { IcMail } from "../icons/IcMail";
import { IcMapsHomeWork } from "../icons/IcMapsHomeWork";
import { IcFacebook } from "../icons/IcFacebook";
import { IcTwitter } from "../icons/IcTwitter";
import { IcYoutube } from "../icons/IcYoutube";
import { IcLinkedIn } from "../icons/IcLinkedIn";

const nomorPenting = [
  "No Darurat : 112",
  "Polda : 110",
  "Basarnas : 115",
  "PLN : 123",
  "Sudin Damkar Timur : 08119197113",
  "Layanan Aduan Kekerasa Perempuann dan Anak : 129",
];

const instansiTerkait = ["Dewan Pers", "Statistik Jakarta Timur"];

const partnerTerkait = [
  "Jakarta Pusat",
  "Jakarta Selatan",
  "Jakarta Barat",
  "Jakarta Utara",
  "Pulau Seribu",
];

export const Footer = () => {
  return (
    <div className="pt-14">
      <div className="border-t flex justify-center py-14">
        <div className="w-full max-w-screen-2xl">
          <div className="flex flex-col md:flex-row justify-between gap-16 md:gap-0 p-4 md:px-0">
            <div className="flex flex-col gap-6 min-w-full md:min-w-[387px]">
              <div className="flex flex-col items-center md:items-start gap-5 md:gap-3">
                <Image
                  alt="Jakarta Timur"
                  src="/images/logo.png"
                  width={175}
                  height={62}
                  priority
                  className="w-[175px] h-[62px]"
                />
                <div className="flex flex-col gap-2 text-[#677487] sm:text-sm">
                  <div>Jalan Dr. Sumarno Pulogebang</div>
                  <div>Kantor Walikota Jakarta Timur</div>
                  <div>Jakarta Timur</div>
                </div>

                <a href="#" className="flex items-center gap-2">
                  <div className="text-[#EB30A2] w-5 h-5">
                    <IcMapsHomeWork />
                  </div>
                  <div className="text-[#EB30A2]">Denah Kantor Walikota JT</div>
                </a>
              </div>

              <div className="flex justify-center md:justify-start gap-4">
                <a href="#">
                  <IcFacebook />
                </a>
                <a href="#">
                  <IcTwitter />
                </a>
                <a href="#">
                  <IcYoutube />
                </a>
                <a href="#">
                  <IcLinkedIn />
                </a>
              </div>
            </div>

            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-4 gap-x-4 md:gap-0">
              <div className="flex flex-col gap-6">
                <div className="font-bold text-[#677487]">Partner Wilayah</div>
                <ul className="flex flex-col gap-4">
                  {partnerTerkait.map((row) => (
                    <li key={row} className="text-[#677487]">
                      <a href="#">{row}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-6">
                <div className="font-bold text-[#677487]">Instansi Terkait</div>
                <ul className="flex flex-col gap-4">
                  {instansiTerkait.map((row) => (
                    <li key={row} className="text-[#677487]">
                      <a href="#">{row}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-6 max-w-[216px]">
                <div className="font-bold text-[#677487]">Nomor Penting</div>
                <ul className="flex flex-col gap-4">
                  {nomorPenting.map((row) => (
                    <li key={row} className="text-[#677487]">
                      <a href="#">{row}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-6">
                <div className="font-bold text-[#677487]">Hubungi Kami</div>
                <div className="flex items-center gap-2">
                  <div className="text-[#677487] w-4 h-4">
                    <IcMail />
                  </div>
                  <a href="#" className="max-w-36 md:max-w-full text-[#677487] break-words">
                    suratwalikotajkt@jakarta.go.id
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#EB30A2] text-white text-center p-6">
        Copyright <span className="font-bold">Jakarta Timur</span> Sudin
        Kominfotik JT
      </div>
    </div>
  );
};
