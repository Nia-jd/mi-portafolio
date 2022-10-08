import Navbar from "./componentes/Navbar/Navbar";
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Home from "./paginas/Home";
import Aboutme from "./paginas/Aboutme";
import Contacto from "./paginas/Contacto";
import Portafolio from "./paginas/Portafolio";
import Camera from "./paginas/Camera";

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight])

  
  return(
    <div>
      <BrowserRouter>
      <Navbar/>
        
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/aboutme" element={<Aboutme/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/portafolio" element={<Portafolio/>}/>
          <Route path="/camera" element={<Camera/>}/>
        </Routes>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
