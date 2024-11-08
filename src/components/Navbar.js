
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo-section" onClick={handleHomeClick}>
                <img 
                    src="/logoANFI.webp" 
                    
                    className="navbar-logo"
                />
                <span className="navbar-title">ANFI Villa María</span>
            </div>
            <ul className="navbar-links">
                <li onClick={() => navigate('/about')}>Sobre Nosotros</li>
                <li onClick={() => navigate('/services')}>Servicios</li>
                <li onClick={() => navigate('/contact')}>Contacto</li>
            </ul>
        </nav>
    );
}

export default Navbar;
