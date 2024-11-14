import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    };

    const handleCalendarClick = () => {
        // Navegará a la página de "Calendario" cuando esté disponible
        navigate('/calendar');
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo-section" onClick={handleHomeClick}>
                <img 
                    src="/logoANFI.webp" 
                    alt="Logo ANFI"
                    className="navbar-logo"
                />
                <span className="navbar-title">ANFI Villa María</span>
            </div>
            <ul className="navbar-links">
                <li onClick={() => navigate('/about')}>Sobre Nosotros</li>
                <li onClick={() => navigate('/services')}>Servicios</li>
                <li onClick={() => navigate('/contact')}>Contacto</li>
            </ul>
            <button className="navbar-calendar-button" onClick={handleCalendarClick}>
            📅
            </button>
        </nav>
    );
}

export default Navbar;
