import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <video className="background-video" src="/videos/videoANFI.mp4" autoPlay loop muted />
            <div className="home-content">
                <h1>ANFI Villa María</h1>
                <p>Bienvenidos a la plataforma oficial de espectáculos de ANFI Villa María.</p>
            </div>

            {/* Nueva sección debajo de home-content */}
            <div className="home-description">
                <p>Enterate de las fechas y todas las noticias de los distintos espectáculos acá.</p>
                <div className="home-buttons">
                    <button className="btn-primary">Obtener entradas</button>
                    <button className="btn-secondary">Saber más</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
