import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar.js";


import NotFound from './pages/NotFoundPage';


function App() {

  return (
    <div>
      <Navbar />
      <Router>
          <Routes>
            <Route path="/"/>
            <Route path="*" element={<NotFound />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
