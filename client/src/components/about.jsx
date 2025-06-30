import React from "react";
import { motion } from "framer-motion";
import { LightBulbIcon, ClockIcon, ChartBarIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

const features = [
  {
    icon: <LightBulbIcon className="h-10 w-10 text-purple-600 group-hover:animate-bounce" />,
    title: "AI-Powered Analysis",
    desc: "We use advanced NLP to match your resume with job descriptions and identify key insights.",
  },
  {
    icon: <ClockIcon className="h-10 w-10 text-purple-600 group-hover:animate-bounce" />,
    title: "Instant Feedback",
    desc: "Upload your resume and get results in seconds — no waiting, no guessing.",
  },
  {
    icon: <ChartBarIcon className="h-10 w-10 text-purple-600 group-hover:animate-bounce" />,
    title: "Skills Breakdown",
    desc: "View matched and missing skills to understand how you align with job roles.",
  },
  {
    icon: <ShieldCheckIcon className="h-10 w-10 text-purple-600 group-hover:animate-bounce" />,
    title: "Secure & Private",
    desc: "Your resume stays private — we don’t store or share your data with anyone.",
  },
];

export default function About() {
  return (
    <section  id="about" className="bg-gradient-to-b from-purple-100 via-pink-50 to-white py-16 px-6 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-purple-800"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Why Choose <span className="text-pink-500">AI Resume Screener?</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-xl shadow-md p-6 transition duration-300 hover:bg-gradient-to-br hover:from-pink-100 hover:to-purple-200 hover:shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-purple-700 group-hover:text-purple-900">{feature.title}</h3>
              <p className="text-gray-600 text-sm group-hover:text-gray-800">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
