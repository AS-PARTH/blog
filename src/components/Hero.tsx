import Image from "next/image";
import React from "react";
import banner from "@/images/background.jpg";

const Hero = () => {
  return (
    <div className="w-full max-h-screen relative">
      <Image
        src={banner}
        alt="banner image"
        className="w-full max-h-screen  object-contain"
      />
       <div className="absolute top-0 w-full h-full bg-black/30 text-gray-100 flex flex-col items-center justify-center">
        <h2 className="text-5xl md:text-7xl lg:text-[150px] font-bold">Parth Khatri</h2>
        <p className="text-xl md:text-2xl lg:text-5xl font-semibold">Web Developer</p>
      </div>
    </div>
  );
};

export default Hero;
