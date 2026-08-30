import React from 'react';
import './SpecialistsSection.css';

const SPECIALISTS = [
    {
        id: 1,
        name: 'Анна',
        role: 'Аппаратный и ручной массаж',
        quote: 'Комплексный подход к вашему телу — от инновационных технологий до исцеляющей силы рук.',
        imageSrc: 'images/anna.jpg',
    },
    {
        id: 2,
        name: 'Эльмира',
        role: 'Аппаратный массаж',
        quote: 'Инновационные методики для достижения безупречного силуэта и вашего идеального самочувствия.',
        imageSrc: 'images/elmira.jpg',
    },
    {
        id: 3,
        name: 'Ульяна',
        role: 'Аппаратный массаж',
        quote: 'Каждая программа выстроена под ваше состояние — мягко, последовательно и с видимым результатом.',
        imageSrc: 'images/ulyana.jpg',
    },
];

export default function SpecialistsSection() {
    return (
        <section id="team" className="team section">
            <div className="container">
                <div className="section-head section-head--split">
                    <div>
                        <p className="eyebrow">Мастера</p>
                        <h2 className="section-title">Искусство прикосновения</h2>
                    </div>
                    <p className="section-note">
                        Работают с аппаратами ежедневно и подбирают программу под ваше состояние, а не
                        по шаблону.
                    </p>
                </div>

                <div className="team__rail rail">
                    {SPECIALISTS.map((s, i) => (
                        <article
                            key={s.id}
                            className="member"
                            data-reveal
                            style={{ '--reveal-delay': `${i * 0.08}s` }}
                        >
                            <div className="member__media">
                                <img
                                    src={s.imageSrc}
                                    alt={`${s.name} — мастер массажа, Massage`}
                                    className="member__img"
                                    loading="lazy"
                                    width="900"
                                    height="1200"
                                />
                            </div>
                            <div className="member__body">
                                <h3 className="member__name">{s.name}</h3>
                                <p className="member__role">{s.role}</p>
                                <p className="member__quote">«{s.quote}»</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
