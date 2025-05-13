import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen bg-zinc-900 pt-1"
    >
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-center">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="w-[9vw] bg-cover bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')] rounded-md h-[5.3vw] mr-[1vw]"
                  ></motion.div>
                )}
                <h1 className="uppercase text-[7.5vw] leading-[6.5vw] tracking-tighter font-bold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] mt-32 border-zinc-700 flex justify-between items-center px-20 py-5">
        {[
          "For Public And Private Companies",
          "From The First Pitch To IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md font-light tracking-tight leading-none"
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-4 py-2 rounded-full font-light text-md uppercase border-[2px] border-zinc-400">
            Start The Project
          </div>
          <div className="border-[2px] flex items-center justify-center border-zinc-400 rounded-full w-10 h-10">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
