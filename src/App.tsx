import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar.js";

import NotFound from './pages/NotFoundPage';
import Simulator from './pages/Simulator/Simulator.js';
import HomePage from './pages/HomePage.js';


function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Simulator" element={<Simulator />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
