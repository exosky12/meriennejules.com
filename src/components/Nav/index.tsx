import Link from "next/link";
import { Button } from "@/components/Button";
import { Phone } from "lucide-react";

export const Nav = () => {
  return (
    <div className="absolute top-4 flex justify-center w-full">
      <nav className="bg-gradient-to-b from-[rgba(0,0,0,0.18)] to-[rgba(102,102,102,0.18)] flex items-center justify-between rounded-full py-[20px] px-[64px] lg:w-[1310px]">
        <Link href="/">meriennejules.com</Link>
        <div>
          <ul className="flex items-center gap-4">
            <li>
              <a href="#projets">Projets</a>
            </li>

            <li>
              <a href="#articles">Articles</a>
            </li>

            <li>
              <a href="#apropos">À propos</a>
            </li>

            <li>
              <a href="#prix">Prix</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <Button icon={<Phone />} link="/" name="Réserver un appel" />
      </nav>
    </div>
  );
};
