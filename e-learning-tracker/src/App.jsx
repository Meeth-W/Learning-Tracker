import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Courses from './pages/Courses';

function App() {
  return (
    <>
      <Navbar />
      <div className="p-4 background-slate-100">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
