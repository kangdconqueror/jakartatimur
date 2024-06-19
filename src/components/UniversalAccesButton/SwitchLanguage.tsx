import classNames from "classnames";
import { ReactNode, useState } from "react";

export const SwitchLanguage = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="bg-[#FFF5FB] flex items-center py-2 px-4 rounded-full w-full md:w-fit">
      <Button isActive={active === 0} onClick={() => setActive(0)}>
        Indonesia
      </Button>
      <Button isActive={active === 1} onClick={() => setActive(1)}>
        Inggris
      </Button>
    </div>
  );
};

interface ButtonProps {
  isActive: boolean;
  children?: ReactNode;
  onClick?: () => void;
}

const Button = ({ isActive, onClick, children }: ButtonProps) => {
  return (
    <button
      data-active={isActive}
      className={classNames(
        "flex-1 md:flex-none min-w-28 rounded-full py-2 px-4 text-xs whitespace-nowrap font-extrabold transition-all",
        isActive ? "bg-[#EB30A2] text-white" : "text-[#EB30A2]"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
