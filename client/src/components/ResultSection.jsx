import React from "react";
import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function ResultSection({ result }) {
  const { match_score, matched, missing } = result;

  // 🎯 Feedback Message with Emoji
  const getFeedback = (score) => {
    if (score >= 85) return "🔥 Excellent match! You're ready to apply!";
    if (score >= 60) return "👍 Good match! Just a few tweaks needed.";
    if (score >= 30) return "🛠️ Needs improvement. Add more relevant skills.";
    return "❌ Poor match. Consider rewriting your resume for this job.";
  };

  // 📄 Download PDF Report
  const handleDownload = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Resume Analysis Report", 14, 20);
    doc.setFontSize(12);
    doc.text(`ATS Score: ${match_score.toFixed(2)}%`, 14, 30);
    doc.text(`Feedback: ${getFeedback(match_score)}`, 14, 40);

    autoTable(doc, {
      head: [["Matched Skills"]],
      body: matched.map((skill) => [skill]),
      startY: 50,
    });

    autoTable(doc, {
      head: [["Missing Skills"]],
      body: missing.map((skill) => [skill]),
      startY: doc.lastAutoTable.finalY + 10,
    });

    doc.save("Resume_Analysis_Report.pdf");
  };

  return (
    <section className="bg-white py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold text-center text-purple-800 mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          📊 Analysis Result
        </motion.h2>

        {/* Feedback */}
        <motion.p
          className="text-center text-lg font-medium text-gray-700 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {getFeedback(match_score)}
        </motion.p>

        {/* Flex Layout */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* ATS Score */}
          <motion.div
            className="w-56 h-56 md:w-64 md:h-64"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <CircularProgressbar
              value={match_score}
              text={`${match_score.toFixed(0)}%`}
              styles={buildStyles({
                pathColor: "#9333EA",
                textColor: "#4B3B4F",
                trailColor: "#E5E7EB",
                textSize: "24px",
              })}
            />
            <p className="text-center mt-4 text-sm text-gray-600">ATS Match Score</p>
          </motion.div>

          {/* Skills List */}
          <div className="flex flex-col gap-6 w-full md:w-1/2">
            {/* Matched Skills */}
            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">✅ Matched Skills</h3>
              <div className="flex flex-wrap gap-2">
                {matched.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Missing Skills */}
            <div>
              <h3 className="text-xl font-semibold text-red-700 mb-2">❌ Missing Skills</h3>
              <div className="flex flex-wrap gap-2">
                {missing.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Download Button */}
        <div className="text-center mt-10">
          <button
            onClick={handleDownload}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            📥 Download PDF Report
          </button>
        </div>
      </div>
    </section>
  );
}
