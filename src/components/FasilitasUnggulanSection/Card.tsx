import { ReactNode } from "react";

export interface CardData {
  icon: ReactNode;
  title: string;
  description: string;
}

interface CardProps {
  data: CardData;
}

export const Card = ({ data }: CardProps) => {
  return (
    <div className="bg-white min-h-[155px] h-fit hover:bg-[#FFF5FB] border border-white hover:border-[#EB30A2] cursor-pointer shadow-md shadow-[#F8E7ED80] p-2 md:p-5 rounded-lg flex flex-col gap-[6px] md:gap-2 group">
      <div className="w-6 h-6 md:w-8 md:h-8">{data.icon}</div>
      <div className="font-medium text-xs md:text-sm text-[#111111]">
        {data.title}
      </div>
      <div className="font-normal text-xxs text-[10px] text-[#8B909A]">
        {data.description}
      </div>
    </div>
  );
};
