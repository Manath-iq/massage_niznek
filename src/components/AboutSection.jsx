import React from 'react';
import './AboutSection.css';
import srcAbout from '../assets/about1.webp';
import srcAbout2 from '../assets/about2.webp';

const POINTS = [
    { k: 'Аппараты', v: 'Resolady и Эндосфера — флагманы салона' },
    { k: 'Результат', v: 'Первые изменения — после 3–4 процедур' },
    { k: 'Режим', v: 'Ежедневно 8:00 — 21:00, бесплатная парковка' },
];

export default function AboutSection() {
    return (
        <section id="about" className="about section section--soft">
            <div className="container about__grid">
                <div className="about__media" data-reveal>
                    <img
                        src={srcAbout}
                        alt="Интерьер массажного салона Massage в Нижнекамске"
                        className="about__photo"
                        loading="lazy"
                    />
                    <img
                        src={srcAbout2}
                        alt="Атмосфера салона"
                        className="about__photo-inset"
                        loading="lazy"
                    />
                </div>

                <div className="about__text" data-reveal style={{ '--reveal-delay': '0.1s' }}>
                    <p className="eyebrow">О салоне</p>
                    <h2 className="section-title about__title">Размывая границы</h2>
                    <p className="about__lead">
                        Глубокое расслабление сочетается с бескомпромиссным результатом. Мы соединили
                        древние ручные техники и передовые аппаратные технологии в одном пространстве.
                    </p>

                    <ul className="about__points">
                        {POINTS.map((p) => (
                            <li key={p.k} className="about__point">
                                <span className="about__point-key">{p.k}</span>
                                <span className="about__point-val">{p.v}</span>
                            </li>
                        ))}
                    </ul>

                    <p className="about__quote">Инвестиция в ваше самочувствие, красоту и энергию.</p>
                </div>
            </div>
        </section>
    );
}
