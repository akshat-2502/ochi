import React from "react";

function About() {
  return (
    <div className="w-full bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="text-[3.5vw] leading-[4.5vw] tracking-tight pe-30 font-light px-15 py-20">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to <u>raise funds, sell products, explain complex ideas,</u>{" "}
        and <u>hire great people.</u>
      </h1>
      <span className="mt-50">
        <hr />
      </span>
      <div className="w-full py-5 flex px-15">
        <div className="w-1/2">
          <h1 className="text-5xl font-light">Our Approach:</h1>
          <button className="mt-10 flex items-center gap-10 px-6 py-4 font-light bg-zinc-900 rounded-full text-zinc-100">
            READ MORE
            <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[60vh] bg-[url('./images/img.jpg')] bg-no-repeat bg-contain bg-center rounded-3xl"></div>
      </div>
    </div>
  );
}

export default About;
