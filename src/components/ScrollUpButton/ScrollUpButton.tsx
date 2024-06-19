"use client";

import { useEffect, useRef } from "react";
import { IcChevronUp } from "../icons/IcChevronUp";

export const ScrollUpButton = () => {
  const ref = useRef<HTMLButtonElement>(null);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    const onScroll: EventListener = () => {
      if (window.scrollY >= 600) {
        ref.current?.classList.remove("hidden");
      } else {
        ref.current?.classList.add("hidden");
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <button
      ref={ref}
      onClick={scrollUp}
      className="fixed bottom-8 right-8 w-8 h-8 bg-pink-500 text-white rounded-full"
    >
      <IcChevronUp />
    </button>
  );
};
