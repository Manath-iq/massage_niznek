import React, { useEffect, useState } from 'react';
import './HeroSection.css';

export default function HeroSection() {
    // Optional: Interactive cursor effect
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="hero-editorial">
            {/* Dynamic CSS Background */}
            <div className="hero-bg-container">
                <div className="glow-orb orb-1"></div>
                <div className="glow-orb orb-2"></div>
                <div className="noise-overlay"></div>
            </div>

            <div className="container hero-grid">
                <div className="title-wrapper">
                    {/* SEO H1 — скрытый для поисковиков, невидимый пользователю */}
                    <h1 className="sr-only">Аппаратный массаж в Нижнекамске — Resolady, Эндосфера, Прессотерапия</h1>

                    {/* Художественный заголовок — только визуальный */}
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

            {/* Decorative vertical line */}
            <div className="vertical-axis"></div>
        </section>
    );
}
