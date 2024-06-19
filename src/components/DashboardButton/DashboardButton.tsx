"use client";
import Image from "next/image";
import { IcClose } from "../icons/IcClose";
import { useRef } from "react";

export const DashboardButton = () => {
  const ref = useRef<HTMLDivElement>(null);

  const onClose = () => {
    ref.current?.remove();
  };

  return (
    <div ref={ref} className="hidden md:block fixed z-40 top-52 right-14">
      <a href="https://timur.jakarta.go.id/dashboard" target="blank">
        <Image
          src="/images/dashboard-jt.png"
          width={200}
          height={200}
          className="w-32 h-32  animate-pulse duration-1000"
          alt="Dashboard"
        />
      </a>
      <button onClick={onClose} className="absolute top-0 right-0 w-5 h-5">
        <IcClose />
      </button>
    </div>
  );
};
