import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [username, setUsername] = useState(null);
  const navigate  = useNavigate();

  // Check session storage for username
  useEffect(() => {
    const user = sessionStorage.getItem("username");
    if (user) {
      setUsername(user);
    }
  }, []);

  // Handle logout (clear sessionStorage)
  const handleLogout = () => {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("password"); 
    setUsername(null);
    navigate("/login"); 
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg">
      <div className="font-bold text-lg flex items-center space-x-2">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="hover:underline text-2xl">
            {username ? `Welcome, ${username}` : "E-Learning Tracker"}
          </Link>
        </motion.div>
      </div>

      <div className="space-x-6 flex items-center">
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link to="/" className="hover:underline transition">
            Dashboard
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link to="/courses" className="hover:underline transition">
            Courses
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {username ? (
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-500 transition px-4 py-2 rounded-lg text-white font-semibold"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-blue-600 hover:bg-blue-500 transition px-4 py-2 rounded-lg text-white font-semibold"
            >
              Login
            </Link>
          )}
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
