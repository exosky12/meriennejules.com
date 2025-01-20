import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  name: string;
  variant?: "primary" | "secondary";
  link: string;
  icon?: ReactNode;
};

export const Button = ({
  name,
  variant = "primary",
  link,
  icon,
}: ButtonProps) => {
  return variant === "primary" ? (
    <Link
      href={link}
      className={
        "flex flex-row items-start p-2.5 gap-2.5 bg-gradient-to-b font-medium from-[#59EDEF] via-[#59EDEF] to-[#1D6061] rounded-md text-black"
      }
    >
      {icon}
      {name}
    </Link>
  ) : (
    <Link
      href={link}
      className={
        "bg-[#FAFFD0] shadow-[0_4px_0_0_rgba(46,22,14,1)] border-[1.5px] border-[#2E160E] rounded-[8px] text-[18px] align-center text-center font-semibold px-[22px] py-[10px]"
      }
    >
      {icon}
      {name}
    </Link>
  );
};
