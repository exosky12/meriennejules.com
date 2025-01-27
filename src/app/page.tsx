"use client";

import { Button } from "@/components/Button";
import { LampContainer } from "@/components/Lamp";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div className="h-[100vh] w-full z-[1] bg-grid-white/[0.06] absolute flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#030815] [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)]"></div>
      </div>
      <LampContainer className="relative">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: -110 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-100 to-slate-500 py-4 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-7xl"
        >
          Lancez votre projet
          <br /> en jours, pas en mois.
        </motion.h1>
        <motion.button
          initial={{ opacity: 0, y: -110 }}
          whileInView={{ opacity: 1, y: -110 }}
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
