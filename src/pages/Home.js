import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';

const Home = () => {
    const videos = [
        {
            src: "/videos/videoANFI.mp4",
            title: "Evento Especial",
            description: "Entérate de las fechas y todas las noticias de los distintos espectáculos acá."
        },
        {
            src: "/videos/videoANFI2.mp4",
            title: "Celebración Única",
            description: "Descubre experiencias inolvidables y eventos memorables en nuestra ciudad."
        },
        {
            src: "/videos/videoANFI3.mp4",
            title: "Momentos Inolvidables",
            description: "Sé parte de la comunidad y no te pierdas ningún detalle de los eventos."
        }
    ];

    const [currentVideo, setCurrentVideo] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const videoRef = useRef(null);

    const handleNext = () => {
        setCurrentVideo((prevVideo) => (prevVideo + 1) % videos.length);
    };

    const handlePrev = () => {
        setCurrentVideo((prevVideo) =>
            prevVideo === 0 ? videos.length - 1 : prevVideo - 1
        );
    };

    const handleThumbnailClick = (index) => {
        setCurrentVideo(index);
        if (!isPaused) {
            videoRef.current.play();
        }
    };

    const togglePause = () => {
        if (isPaused) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
        setIsPaused((prevPause) => !prevPause);
    };

    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                handleNext();
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [isPaused]);

    return (
        <div className="home-container">
            <video
                ref={videoRef}
                className="background-video"
                src={videos[currentVideo].src}
                autoPlay
                loop={false}
                muted
                key={videos[currentVideo].src}
            />
            <div className="home-content">
                <h1>{videos[currentVideo].title}</h1>
                <p>{videos[currentVideo].description}</p>
            </div>
            <p className="home-description">
                {videos[currentVideo].description}
            </p>
            <div className="home-buttons">
                <button className="button">
                    <span>Obtener Entradas</span>
                    <div className="button-overlay"></div>
                </button>
                <button className="button saber-mas">
                    <span>Saber Más</span>
                    <div className="button-overlay"></div>
                </button>
            </div>
            <div className="thumbnail-controls">
            <img
                    src={img1}
                    alt="Video 1"
                    onClick={() => handleThumbnailClick(0)}
                    className={currentVideo === 0 ? 'active' : ''}
                />
                <img
                    src={img2}
                    alt="Video 2"
                    onClick={() => handleThumbnailClick(1)}
                    className={currentVideo === 1 ? 'active' : ''}
                />
                <img
                    src={img3}
                    alt="Video 3"
                    onClick={() => handleThumbnailClick(2)}
                    className={currentVideo === 2 ? 'active' : ''}
                />
            </div>
            <div className="carousel-controls">
                <button onClick={handlePrev} className="carousel-btn">❮</button>
                <button onClick={handleNext} className="carousel-btn">❯</button>
            </div>
            <button onClick={togglePause} className="pause-btn">
                {isPaused ? "▶" : "| |"}
            </button>
        </div>
    );
};

export default Home;
