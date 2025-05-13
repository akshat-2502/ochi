import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";

function Featured() {
  const [isHovering, setHovering] = useState(false);
  const [isHovering2, setHovering2] = useState(false);

  return (
    <div data-scroll data-scroll-section className="w-full py-15">
      <div className="w-full px-15 border-b-[1px] pb-16 border-zinc-400">
        <h1 className="text-6xl font-light tracking-tight">
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards relative w-full flex gap-10 mt-10">
          <div
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className="cardcontainer w-1/2 overflow-hidden h-[72vh]"
          >
            <h1 className="text-[#CDEA68] flex overflow-hidden font-bold top-1/2 -translate-y-1/2  left-1/2 -translate-x-1/2 absolute tracking-tighter text-7xl z-[9] leading-none">
              {"SALIENCE LABS".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={isHovering ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-zinc-100"></div>
                <p>Salience Labs</p>
              </div>
              <img
                className="bg-cover rounded-xl "
                src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png"
                alt=""
              />
            </div>
          </div>
          <div
            onMouseEnter={() => setHovering2(true)}
            onMouseLeave={() => setHovering2(false)}
            className="cardcontainer w-1/2 overflow-hidden h-[72vh]"
          >
            <h1 className="text-[#CDEA68] flex overflow-hidden font-bold top-1/2 -translate-y-1/2  left-1/2 -translate-x-1/2 absolute tracking-tighter text-7xl z-[9] leading-none">
              {"BLACK BOOK".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={isHovering2 ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-zinc-100"></div>
                <p>Black Book</p>
              </div>
              <img
                className="bg-cover rounded-xl "
                src="https://ochi.design/wp-content/uploads/2022/06/Frame-3876-663x551.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
