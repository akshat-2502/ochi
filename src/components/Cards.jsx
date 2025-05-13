import React from "react";

function Cards() {
  return (
    <div className="w-full h-[70vh] bg-zinc-200 flex items-center px-15 gap-3">
      <div className="cardcontainer w-1/2 h-[50vh]">
        <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center ">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="rounded-full border-[#c2e166] text-[13px] text-[#c2e166] font-light absolute left-8 bottom-8 px-5 py-1 border-1">
            &copy;2019-2025
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-3 w-1/2 h-[50vh]">
        <div className="card relative flex items-center justify-center w-1/2 rounded-xl h-full bg-[#212121] ">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="rounded-full border-zinc-200 text-[13px] text-zinc-200 font-light absolute left-8 bottom-8 px-5 py-1 border-1">
            RATING 5.0 ON CLUTCH
          </button>
        </div>
        <div className="card relative flex items-center justify-center w-1/2 rounded-xl h-full bg-[#212121] ">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="rounded-full border-zinc-200 text-[13px] text-zinc-200 font-light absolute left-8 bottom-8 px-5 py-1 border-1">
            BUSINESS BOOTCAMP ALUMINI
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
