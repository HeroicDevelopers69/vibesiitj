import { Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Index from './pages/index';
import AboutUs from './pages/aboutUs';

function App() {
  return (
    <div className="w-full bg-black min-h-screen text-white">
      <div className="max-w-7xl w-11/12 mx-auto px-4 pt-4 flex flex-col">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
