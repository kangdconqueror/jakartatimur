import { ReactNode } from "react";

interface MenuItemProps {
  children?: ReactNode;
}

export const MenuItem = ({ children }: MenuItemProps) => {
  return (
    <li>
      <a
        href="#"
        className="inline-block px-4 py-2 hover:text-[#EB30A2] rounded whitespace-nowrap"
      >
        {children}
      </a>
    </li>
  );
};
