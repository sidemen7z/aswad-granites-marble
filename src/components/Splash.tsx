"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Splash() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("aswad-splash-seen")) return;
    if (reduce) {
      sessionStorage.setItem("aswad-splash-seen", "1");
      return;
    }
    setShow(true);
    const t0 = performance.now();
    const dur = 1700;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      setCount(Math.floor(p * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setExit(true), 300);
        setTimeout(() => {
          setShow(false);
          sessionStorage.setItem("aswad-splash-seen", "1");
        }, 1250);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduce]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#f7f6f2]"
          animate={exit ? { y: "-100%" } : { y: 0 }}
          transition={{ duration: 0.95, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* logo reveal */}
          <div className="relative overflow-hidden px-6">
            <motion.img
              src="/logo-black.png"
              alt="ASWAD Premium Stone"
              initial={{ opacity: 0, scale: 0.93, y: 26 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.1, ease }}
              className="w-64 sm:w-80"
            />
            {/* light sweep across the logo */}
            <motion.div
              className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/70 to-transparent"
              initial={{ x: "-120%" }}
              animate={{ x: "360%" }}
              transition={{ duration: 1.2, delay: 0.45, ease: "easeInOut" }}
            />
          </div>

          {/* tagline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8, ease }}
            className="mt-6 text-[10px] font-bold uppercase tracking-[0.5em] text-muted"
          >
            Kondhwa Budruk · Pune
          </motion.p>

          {/* progress */}
          <div className="mt-10 w-56">
            <div className="relative h-px w-full overflow-hidden bg-ink/10">
              <div
                className="absolute inset-y-0 left-0 bg-[var(--gold)] transition-[width] duration-100"
                style={{ width: `${count}%` }}
              />
            </div>
            <div className="mt-3 flex justify-between text-[10px] font-bold tracking-[0.3em] text-faint">
              <span>PREMIUM STONE</span>
              <span className="text-ink">{count}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
