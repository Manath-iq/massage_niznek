import React, { useEffect, useState } from 'react';
import './HeroSection.css';

const VIDEO_SRC = '/videos/start_screen.mp4';

export default function HeroSection() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    // Mouse parallax для заголовка
    useEffect(() => {
        const onMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
        window.addEventListener('mousemove', onMove);
        return () => window.removeEventListener('mousemove', onMove);
    }, []);

    return (
        <section className="hero-editorial">

            {/* Видео-фон — только десктоп */}
            <div className="hero-video-bg">
                <video
                    src={VIDEO_SRC}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="hero-video hero-video--active"
                />
                <div className="hero-video-overlay" />
            </div>

            {/* CSS-фон — мобильный резерв + glow-эффекты */}
            <div className="hero-bg-container">
                <div className="glow-orb orb-1"></div>
                <div className="glow-orb orb-2"></div>
                <div className="noise-overlay"></div>
            </div>

            <div className="container hero-grid">
                <div className="title-wrapper">
                    <h1 className="sr-only">Аппаратный массаж в Нижнекамске — Resolady, Эндосфера, Прессотерапия</h1>
                    <div className="hero-super-title fade-in-up">
                        <span className="line indent-0">Искусство</span>
                        <span className="line indent-1">Идеального</span>
                        <span
                            className="line indent-2 offset-color interactive-glow"
                            style={{
                                textShadow: `
                                    ${(mousePos.x - window.innerWidth / 2) * 0.05}px 
                                    ${(mousePos.y - window.innerHeight / 2) * 0.05}px 
                                    30px rgba(212, 175, 55, 0.4)
                                `
                            }}
                        >
                            Тела.
                        </span>
                    </div>
                </div>

                <div className="hero-meta fade-in-up delay-2">
                    <p className="hero-philosophy">
                        Отдых, визуальная эстетика и передовые аппаратные технологии для глубокого, осознанного преображения.
                    </p>
                    <a href="#services" className="scroll-indicator-link">
                        <span className="scroll-text">Познакомиться с услугами</span>
                        <div className="scroll-line-container">
                            <div className="scroll-line-animated"></div>
                        </div>
                    </a>
                </div>
            </div>

            <div className="vertical-axis"></div>
        </section>
    );
}
