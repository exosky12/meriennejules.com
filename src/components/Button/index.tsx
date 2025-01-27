import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  name: string;
  variant?: "primary" | "secondary";
  link: string;
  icon?: ReactNode;
};

export const Button = ({ name, variant = "primary", link }: ButtonProps) => {
  return variant === "primary" ? (
    <Link
      href={link}
      className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        {name}
      </span>
    </Link>
  ) : (
    <Link
      href={link}
      className="relative inline-flex h-12 overflow-hidden rounded-lg p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
    >
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-800 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        {name}
      </span>
    </Link>
  );
};
