import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]"
      >
        <div className="flex gap-10 items-center absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100">
            <div className="relative w-2/3 h-2/3  bg-red-500 rounded-full bg-zinc-900">
              <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                PLAY
              </div>
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  transformOrigin: "center",
                }}
                className="absolute top-1/2 left-1/2 w-full h-10 "
              >
                <div className="bg-zinc-100 w-8 h-8 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100">
            <div className="relative w-2/3 h-2/3  rounded-full bg-zinc-900">
              <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                PLAY
              </div>
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  transformOrigin: "center",
                }}
                className="absolute top-1/2 left-1/2 w-full h-10"
              >
                <div className="bg-zinc-100 w-8 h-8 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
