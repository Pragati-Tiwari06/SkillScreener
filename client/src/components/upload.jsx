import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function Upload({ onResult }) {
  const [resume, setResume] = useState(null);
  const [jobDesc, setJobDesc] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!resume || !jobDesc) {
      return alert("Please upload your resume and paste the job description.");
    }

    const formData = new FormData();
    formData.append("resume", resume);
    formData.append("job_description", jobDesc);

    try {
      const response = await axios.post(
        "https://skillscreener.onrender.com/analyze-resume", // ✅ correct endpoint
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      onResult(response.data);
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Something went wrong while analyzing your resume.");
    }
  };

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center text-purple-800 mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Upload Your Resume & Job Description
        </motion.h2>

        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-lg flex flex-col gap-6"
        >
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Upload Resume (PDF only)
            </label>
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => setResume(e.target.files[0])}
              className="block w-full border border-purple-300 p-2 rounded-md shadow-sm"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Paste Job Description
            </label>
            <textarea
              rows="6"
              value={jobDesc}
              onChange={(e) => setJobDesc(e.target.value)}
              className="w-full border border-purple-300 p-3 rounded-md shadow-sm resize-none"
              placeholder="Paste job description here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-800 transition duration-300"
          >
            Analyze Resume
          </button>
        </form>
      </div>
    </section>
  );
}
