"use client";

import { Button } from "@/components/Button";
import { LampContainer } from "@/components/Lamp";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: -90 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-7xl"
        >
          Lancez votre projet
          <br /> en jours, pas en mois.
        </motion.h1>
        <motion.button
          initial={{ opacity: 0, y: -90 }}
          whileInView={{ opacity: 1, y: -90 }}
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
