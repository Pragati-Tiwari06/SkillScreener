import React from "react";
import "../App.css";

export default function Header({ setShowAuth })  {
  return (
    <header className="bg-gradient-to-r from-[#C5ADC5] to-[#B2B5E0] px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between relative">

        {/* Left: Typewriter Title */}
        <div className="z-10">
          <h1 className="text-3xl font-extrabold typewriter text-[#4B3B4F] whitespace-nowrap">
            AI Resume Screener
          </h1>
          <p className="text-lg mt-2 font-medium text-[#5E5B73]">
            Smart screening made simple
          </p>
        </div>

        {/* Center: Brand Name */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-600 drop-shadow-md shadow-purple-300 animate-pulse">
            SkillScreener
          </h1>
        </div>

        {/* Right: Buttons */}
        <div className="flex gap-4 z-10">
          <a href="#about" className="text-[#4B3B4F] text-sm hover:text-[#322832] transition duration-300">
            What is this?
          </a>
          <button
  onClick={() => setShowAuth(true)}
  className="bg-white text-[#4B3B4F] font-semibold px-4 py-2 rounded hover:bg-[#e7e1ec] transition duration-300"
>
  Sign In
</button>
        </div>
      </div>
    </header>
  );
}
