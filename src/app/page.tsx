"use client";

import { Button } from "@/components/Button";
import { LampContainer } from "@/components/Lamp";
import { Cover } from "@/components/ui/cover";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="h-[100vh] w-full z-[1] bg-grid-white/[0.06] absolute flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#030815] [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)]"></div>
      </div>
      <LampContainer className="relative">
        <motion.button
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: -100 }}
          transition={{
            delay: 1,
            duration: 0.5,
            ease: "linear",
          }}
          className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px font-light leading-6  text-white inline-block"
        >
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
            <Heart size={16} />
            <span>Créer avec passion depuis plus de 4 ans</span>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </motion.button>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: -130 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-100 to-slate-500 py-4 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-7xl"
        >
          Lancez votre projet
          <br /> <Cover>en jours</Cover>, pas en mois.
        </motion.h1>
        <motion.button
          initial={{ opacity: 0, y: -150 }}
          whileInView={{ opacity: 1, y: -150 }}
          transition={{
            delay: 1,
            duration: 0.5,
            ease: "linear",
          }}
          className="mt-8 from-slate-300 to-slate-500 py-4 text-center font-bold tracking-tight"
        >
          <div className="flex space-x-4">
            <Button name="Lancer un projet" link="/contact" />
            <Button
              variant="secondary"
              name="Voir mes articles"
              link="#articles"
            />
          </div>
        </motion.button>
      </LampContainer>
    </>
  );
}
