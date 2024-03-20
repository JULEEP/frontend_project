import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home'; // Import the Home component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
