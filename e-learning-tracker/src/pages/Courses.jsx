import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const dummyCourses = [
  {
    title: "React for Beginners",
    lessons: [
      "Introduction to React",
      "JSX and Components",
      "Props and State",
      "Handling Events",
      "React Hooks",
    ],
  },
  {
    title: "Python Fundamentals",
    lessons: [
      "Variables and Data Types",
      "Control Flow",
      "Functions and Modules",
      "File Handling",
      "OOP Basics",
    ],
  },
  {
    title: "Web Development with HTML & CSS",
    lessons: [
      "HTML Basics",
      "CSS Box Model",
      "Flexbox and Grid",
      "Responsive Design",
      "Deploying Websites",
    ],
  },
];

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(dummyCourses[0]);

  return (
    <div className="bg-slate-900 min-h-screen text-slate-100 p-10 md:px-20 flex flex-col md:flex-row gap-10">
      {/* Sidebar */}
      <div className="w-full md:w-1/3 bg-slate-800 p-6 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold mb-4">📚 Available Courses</h2>
        <ul className="space-y-4">
          {dummyCourses.map((course, idx) => (
            <li
              key={idx}
              onClick={() => setSelectedCourse(course)}
              className={`p-4 rounded-xl cursor-pointer transition hover:bg-slate-700 ${
                selectedCourse.title === course.title ? "bg-blue-600" : "bg-slate-700"
              }`}
            >
              <p className="text-lg font-semibold">{course.title}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Course Content */}
      <div className="w-full md:w-2/3 bg-slate-800 p-6 rounded-2xl shadow-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCourse.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-4">{selectedCourse.title}</h2>
            <h4 className="text-slate-300 mb-2">Course Content:</h4>
            <ul className="space-y-3 list-decimal list-inside text-slate-200">
              {selectedCourse.lessons.map((lesson, index) => (
                <li
                  key={index}
                  className="bg-slate-700 p-3 rounded-lg hover:bg-slate-600 transition"
                >
                  {lesson}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Courses;
