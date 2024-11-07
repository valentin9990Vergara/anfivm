// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {
    return (
        <Router>
            <Navbar /> {/* Navbar solo en App.js */}
            <Routes>
                
                {/* Otras rutas de la aplicación */}
            </Routes>
        </Router>
    );
}

export default App;
