"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const swatches = [
  "black-galaxy",
  "absolute-black",
  "tan-brown",
  "blue-pearl",
  "alaska-gold",
  "viscon-white",
  "kashmir-white",
  "imperial-red",
];

const rail = ["GRANITE", "MARBLE", "MODERN", "WALL", "COMMERCIAL", "OUTDOOR"];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "14%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-base pt-20 lg:pb-14">
      {/* floating stone strip — small material samples */}
      <div className="flex items-center gap-4 overflow-x-auto px-5 pb-5 pt-6 sm:px-10">
        {swatches.slice(0, 6).map((s, i) => (
          <motion.img
            key={s}
            src={`/thumbs/${s}.jpg`}
            alt="Natural stone sample"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.07, duration: 0.7, ease }}
            className="h-14 w-14 shrink-0 rounded-md border border-line object-cover shadow-[0_10px_25px_rgba(17,17,17,0.12)]"
          />
        ))}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="ml-2 hidden shrink-0 text-[10px] font-bold uppercase leading-relaxed tracking-[0.3em] text-faint sm:block"
        >
          40+ Granite colours
          <br />
          in stock
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-12 lg:gap-10">
        {/* dominant architectural image — flush to the left edge */}
        <div className="relative lg:col-span-9">
          <div className="relative h-[64vh] overflow-hidden lg:h-[calc(100svh-220px)] lg:min-h-[560px]">
            <motion.img
              src="/gallery/Modern_bathroom_with_granite_cla_20261007200955.jpg"
              alt="Bathroom clad in dark natural marble with freestanding tub"
              style={reduce ? {} : { y: imgY }}
              initial={reduce ? { opacity: 0 } : { scale: 1.12, opacity: 0 }}
              animate={reduce ? { opacity: 1 } : { scale: 1.02, opacity: 1 }}
              transition={{ duration: 1.8, ease }}
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* subtle left-to-right gradient so the stone stays visible */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

            {/* headline block — sits lower, generous left padding */}
            <div className="absolute bottom-0 left-0 max-w-3xl pb-6 pl-12 pr-6 sm:pb-8 sm:pl-[52px]">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.9, ease }}
                className="mb-[30px] text-[10px] font-bold uppercase tracking-[0.4em] text-white/85"
              >
                Aswad Granites · Premium Natural Stone
              </motion.p>
              <h1 className="font-display text-[clamp(2.5rem,5.2vw,5.1rem)] font-medium leading-[0.92] text-white">
                <span className="block overflow-hidden pb-[0.08em]">
                  <motion.span className="block" initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ delay: 0.35, duration: 1, ease }}>
                    MODERN
                  </motion.span>
                </span>
                <span className="block overflow-hidden pb-[0.08em]">
                  <motion.span className="block" initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ delay: 0.47, duration: 1, ease }}>
                    LIVING
                  </motion.span>
                </span>
                <span className="block overflow-hidden pb-[0.08em]">
                  <motion.span className="block" initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ delay: 0.59, duration: 1, ease }}>
                    BEGINS WITH
                  </motion.span>
                </span>
                <span className="block overflow-hidden pb-[0.1em]">
                  <motion.span className="block italic" initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ delay: 0.71, duration: 1, ease }}>
                    THE SURFACE
                  </motion.span>
                </span>
              </h1>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.05, duration: 0.8, ease }}
              >
                <Link
                  href="/products"
                  className="mt-10 inline-flex items-center gap-3 bg-white px-6 py-3.5 text-[11px] font-extrabold uppercase tracking-[0.25em] text-black transition-all hover:gap-5 hover:bg-[var(--stone)]"
                >
                  Explore Collection <ArrowRight size={15} />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* floating material selector — desktop only, overlaps the image edge */}
          <div className="z-10 mx-5 mt-4 hidden sm:mx-10 lg:absolute lg:-bottom-9 lg:right-10 lg:mx-0 lg:mt-0 lg:block">
            <div className="flex items-center gap-4 overflow-x-auto border border-line bg-white px-4 py-3 shadow-[0_18px_40px_rgba(17,17,17,0.14)] lg:overflow-visible">
              <p className="hidden shrink-0 text-[10px] font-extrabold uppercase leading-relaxed tracking-[0.25em] text-ink sm:block">
                Select
                <br />
                Material
              </p>
              <span className="hidden h-10 w-px shrink-0 bg-[var(--rule)] sm:block" />
              {swatches.slice(2).map((s, i) => (
                <motion.img
                  key={s}
                  src={`/thumbs/${s}.jpg`}
                  alt="Stone sample"
                  loading="lazy"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + i * 0.07, duration: 0.7, ease }}
                  className="h-12 w-16 shrink-0 rounded border border-line object-cover"
                />
              ))}
            </div>
          </div>
        </div>

        {/* narrow editorial rail — desktop only */}
        <aside className="hidden px-5 pb-10 pt-10 sm:px-10 lg:col-span-3 lg:block lg:border-l lg:border-line lg:px-8 lg:pb-0 lg:pt-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.9, ease }}
          >
            <span className="inline-block rounded-sm bg-[var(--gold)] px-2.5 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white">
              View Collection →
            </span>
            <ul className="mt-5">
              {rail.map((c, i) => (
                <li
                  key={c}
                  className={`font-display text-[2.1rem] font-medium leading-[1.06] tracking-tight xl:text-4xl ${
                    i === 0 ? "text-ink" : "text-faint"
                  }`}
                >
                  {c}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.9 }}
            className="mt-8 border-t border-line pt-5"
          >
            <div className="flex items-center gap-1.5 text-ink">
              <span className="font-display text-2xl font-semibold">4.2</span>
              <Star size={15} fill="currentColor" />
              <span className="ml-1 text-[10px] font-bold uppercase tracking-[0.28em] text-faint">
                Google Rating
              </span>
            </div>
            <p className="mt-2 text-[13px] leading-relaxed text-muted">
              Kondhwa Budruk, Pune · Granite & Marble Dealers
            </p>
            <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.28em] text-faint">Call the yard</p>
            <a href="tel:+919686572109" className="mt-1 block font-display text-xl font-semibold leading-none tracking-wide text-ink transition-colors hover:text-gilt">
              +91 96865 72109
            </a>
          </motion.div>
        </aside>
      </div>
    </section>
  );
}
