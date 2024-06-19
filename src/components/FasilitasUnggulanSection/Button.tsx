import classNames from "classnames";
import { ReactNode } from "react";

interface ButtonProps {
  isActive: boolean;
  children?: ReactNode;
  onClick?: () => void;
}

export const Button = ({ isActive, onClick, children }: ButtonProps) => {
  return (
    <button
      data-active={isActive}
      className={classNames(
        "flex-1 md:flex-none min-w-28 rounded-full py-2 px-4 text-xs whitespace-nowrap font-extrabold",
        isActive ? "bg-[#EB30A2] text-white" : "text-[#EB30A2]"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
