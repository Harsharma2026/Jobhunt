import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';

import Landing from './pages/landing';



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route path="/landing" element={<Landing/>} />
        {/* <Route path="/slider" element={<Slider/>} /> */}
      </Routes>
    </Router>
  );
}
