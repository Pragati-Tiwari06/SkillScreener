import React from "react";
import { motion } from "framer-motion";
import resumeImage from "../assets/resume.png";

export default function Intro({ scrollToUpload }) {
  return (
    <section className="bg-white text-gray-800 px-4 py-16 md:py-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left: Intro Text */}
        <motion.div
          className="md:w-1/2 text-[#4B3B4F]"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Your <span className="text-purple-700">AI Resume Buddy</span>
          </h2>
          <p className="text-lg text-[#5E5B73] mb-6">
            Tired of guessing what hiring managers want? Our AI-powered screener compares your resume with the job description,
            highlights your strengths, and identifies missing skills — helping you apply with confidence!
          </p>
          <button
            onClick={scrollToUpload}
            className="bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition duration-300"
          >
            Get Started
          </button>
        </motion.div>

        {/* Right: Resume Image */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <img
            src={resumeImage}
            alt="Resume Preview"
            className="rounded-xl shadow-lg w-full max-w-md mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
