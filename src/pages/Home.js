import React from 'react';
import './Home.css'; // Asegúrate de que la ruta de Home.css esté correcta

function Home() {
    return (
        <div className="home-container">
            <video 
                className="background-video"
                src={`${process.env.PUBLIC_URL}/videos/videoANFI.mp4`}
                autoPlay
                loop
                muted
            />
            <div className="home-content">
                <h1>Bienvenidos a Anfiteatro Villa María</h1>
                <p>Disfruta de nuestros eventos y servicios.</p>
            </div>
        </div>
    );
}

export default Home;
