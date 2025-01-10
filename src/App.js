import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Home from './pages/home';
import AboutUs from './pages/aboutUs';

function App() {
  return (
    <div className="w-full bg-gray-200 dark:bg-black min-h-screen">
      <div className="max-w-7xl w-11/12 mx-auto px-4 pt-4 flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
