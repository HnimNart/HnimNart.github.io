import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar.js";


import NotFound from './pages/NotFoundPage';



const title = 'Samples';


function App() {

  const [listExpanded, setListExpanded] = useState<boolean>(false);
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
