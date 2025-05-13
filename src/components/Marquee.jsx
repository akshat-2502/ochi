import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.001"
      className="w-full py-[60px] rounded-tl-3xl rounded-tr-3xl bg-[#004D43]"
    >
      <div className="text relative border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden">
        <motion.h1
          style={{ willChange: "transform" }}
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[19vw] leading-none uppercase mt-0 tracking-tighter pr-20 font-extrabold pt-10"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          style={{ willChange: "transform" }}
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[19vw] leading-none uppercase mt-0 tracking-tighter pr-20 font-extrabold pt-10"
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
