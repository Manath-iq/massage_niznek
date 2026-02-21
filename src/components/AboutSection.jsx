import React from 'react';
import './AboutSection.css';
import srcAbout from '../assets/about1.PNG';
import srcAbout2 from '../assets/about2.PNG';

export default function AboutSection() {
    return (
        <section className="about-editorial">
            <div className="container about-flex">
                <div className="about-visual-editorial fade-in-up">
                    <div className="aesthetic-frame-editorial">
                        <div className="photo-placeholder-editorial">
                            <img src={srcAbout} alt="Детали интерьера и эстетика" className="about-image-actual" />
                        </div>
                        <div className="glass-accent">
                            <img src={srcAbout2} alt="Атмосфера" className="glass-image" />
                        </div>
                    </div>
                </div>

                <div className="about-text-editorial fade-in-up delay-1">
                    <h2 className="section-title-editorial">Размывая границы</h2>
                    <p className="about-description-editorial">
                        Глубокое расслабление сочетается с бескомпромиссным результатом.
                        Мы соединили древние ручные техники и передовые аппаратные технологии в одном пространстве.
                    </p>
                    <div className="about-highlight">
                        Инвестиция в ваше самочувствие, красоту и энергию.
                    </div>
                </div>
            </div>
        </section>
    );
}
