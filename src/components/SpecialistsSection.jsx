import React from 'react';
import './SpecialistsSection.css';

const SPECIALISTS = [
    {
        id: 1,
        name: 'Анна',
        role: 'Мастер аппаратного и ручного массажа',
        quote: '«Комплексный подход к вашему телу — от инновационных технологий до исцеляющей силы рук.»',
        imageSrc: '/images/anna.jpg', // Поместите фото Анны по пути public/images/anna.jpg
    },
    {
        id: 2,
        name: 'Эльмира',
        role: 'Мастер аппаратного массажа',
        quote: '«Инновационные методики для достижения безупречного силуэта и вашего идеального самочувствия.»',
        imageSrc: '/images/elmira.jpg', // Поместите фото Эльмиры по пути public/images/elmira.jpg
    }
];

export default function SpecialistsSection() {
    return (
        <section className="specialists-section">
            <div className="container">
                <div className="specialists-header">
                    <h2 className="section-title">Искусство прикосновения</h2>
                    <p className="section-subtitle">Познакомьтесь с нашими мастерами</p>
                </div>

                <div className="specialists-grid">
                    {SPECIALISTS.map((specialist, index) => (
                        <div
                            key={specialist.id}
                            className={`specialist-card ${index % 2 === 0 ? 'offset-down' : 'offset-up'}`}
                        >
                            <div className="spec-image-wrapper">
                                {specialist.imageSrc ? (
                                    <img src={specialist.imageSrc} alt={specialist.name} className="spec-image" />
                                ) : (
                                    <div className="spec-placeholder" />
                                )}
                                <div className="spec-overlay"></div>
                            </div>

                            <div className="spec-content">
                                <h3 className="spec-name">{specialist.name}</h3>
                                <p className="spec-role gold-glow-text">{specialist.role}</p>
                                <p className="spec-quote">{specialist.quote}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
