import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Dashboard = () => {
  const [todos, setTodos] = useState([
    { text: "Watch Redux tutorial", done: false },
    { text: "Finish Module 5 quiz", done: true },
    { text: "Read FastAPI docs", done: false },
  ]);
  const [username, setUsername] = useState(null); // State to hold username from sessionStorage
  const navigate = useNavigate();

  // Check if username exists in sessionStorage when the component mounts
  useEffect(() => {
    const storedUsername = sessionStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername); // Set username if found
    }
  }, []);

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  const addTodo = (e) => {
    e.preventDefault();
    const newTask = e.target.task.value;
    if (newTask.trim()) {
      setTodos([...todos, { text: newTask, done: false }]);
      e.target.reset();
    }
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <div className="bg-slate-900 min-h-screen text-slate-100 px-4 py-10 md:px-20 space-y-20">
      {/* Conditionally render based on whether the username is found */}
      {username ? (
        <>
          {/* 👋 Welcome Text */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold">Hi {username}! Welcome to the Tracker 🎉</h1>
            <p className="mt-2 text-slate-400 text-lg">Stay organized and track your e-learning journey.</p>
          </div>

          {/* ✅ To-Do Section */}
          <div className="bg-slate-800 p-8 rounded-3xl shadow-xl max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">📝 Your To-Do List</h2>

            <form onSubmit={addTodo} className="flex gap-4 mb-6">
              <input
                type="text"
                name="task"
                placeholder="Add a new task..."
                className="bg-slate-700 px-4 py-3 rounded-lg w-full focus:outline-none text-white text-lg placeholder-slate-400"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 transition px-6 py-3 rounded-lg text-white font-semibold"
              >
                Add
              </button>
            </form>

            <ul className="space-y-4">
              <AnimatePresence>
                {todos.map((todo, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className={`flex items-center justify-between bg-slate-700 p-4 rounded-xl shadow group ${
                      todo.done ? "opacity-50" : ""
                    }`}
                  >
                    <label className="flex items-center gap-4 cursor-pointer w-full">
                      <input
                        type="checkbox"
                        checked={todo.done}
                        onChange={() => toggleTodo(index)}
                        className="w-5 h-5 accent-blue-500 transition-transform duration-150 scale-100 group-hover:scale-110"
                      />
                      <span
                        className={`text-lg ${
                          todo.done ? "line-through text-slate-400" : "text-slate-100"
                        }`}
                      >
                        {todo.text}
                      </span>
                    </label>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          </div>

          {/* 📊 Progress Overview */}
          <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">📊 Progress Overview</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-700 p-4 rounded-xl text-center">
                <p className="text-4xl font-bold text-blue-400">75%</p>
                <p className="text-slate-300 mt-2">Course Completion</p>
              </div>
              <div className="bg-slate-700 p-4 rounded-xl text-center">
                <p className="text-4xl font-bold text-green-400">42</p>
                <p className="text-slate-300 mt-2">Modules Completed</p>
              </div>
              <div className="bg-slate-700 p-4 rounded-xl text-center">
                <p className="text-4xl font-bold text-yellow-400">5h 12m</p>
                <p className="text-slate-300 mt-2">Total Study Time</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="bg-slate-900 text-slate-100 min-h-screen flex flex-col items-center justify-center space-y-12 px-6 py-10 md:px-20 md:py-16">
          {/* Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Welcome to the E-Learning Tracker! 🎉
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-400">
              Your journey to mastering e-learning starts here. Stay organized, track your progress, and achieve your learning goals!
            </p>
            <button
              onClick={handleLoginRedirect}
              className="mt-8 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg text-xl transition-all duration-300"
            >
              Login to Start
            </button>
          </motion.div>
    
          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-12 text-center"
          >
            <div className="bg-slate-800 p-8 rounded-xl shadow-xl">
              <h3 className="text-2xl font-bold text-blue-400">Organize Your Learning</h3>
              <p className="mt-4 text-slate-300">
                Keep track of all your courses, tasks, and goals in one place. Stay on top of your study schedule with ease!
              </p>
            </div>
            <div className="bg-slate-800 p-8 rounded-xl shadow-xl">
              <h3 className="text-2xl font-bold text-green-400">Track Your Progress</h3>
              <p className="mt-4 text-slate-300">
                Visualize your progress with detailed overviews and statistics. Know exactly where you stand in your learning journey.
              </p>
            </div>
            <div className="bg-slate-800 p-8 rounded-xl shadow-xl">
              <h3 className="text-2xl font-bold text-yellow-400">Set & Achieve Goals</h3>
              <p className="mt-4 text-slate-300">
                Set goals, track your study time, and achieve your targets. Reach new heights with consistent learning habits!
              </p>
            </div>
          </motion.div>
    
          {/* About Us Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-200">About Us</h2>
            <p className="text-lg text-slate-300">
              The E-Learning Tracker was designed with students, professionals, and lifelong learners in mind. Our goal is to simplify the process of tracking your learning activities, helping you stay organized, focused, and motivated.
            </p>
            <p className="text-lg text-slate-300">
              Whether you're learning a new programming language, completing a certification course, or simply pursuing personal development, this tool will help you stay on track.
            </p>
          </motion.div>
    
          {/* Call-to-Action Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-200">Start Your Learning Journey</h2>
            <p className="text-lg text-slate-300 mt-4">
              Ready to get started? Login now and begin tracking your learning progress today!
            </p>
            <button
              onClick={handleLoginRedirect}
              className="mt-6 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg text-xl transition-all duration-300"
            >
              Login to Start
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
