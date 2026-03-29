import React from 'react';
import './TrustSection.css';

const STATS = [
    { value: '400+', label: 'Довольных клиентов' },
    { value: '5', label: 'Лет работы' },
    { value: '4.9', label: 'Рейтинг в Яндексе' },
    { value: '5', label: 'Видов процедур' },
];

const REVIEWS = [
    {
        name: 'Алина Р.',
        rating: 5,
        date: 'Февраль 2026',
        text: 'Хожу на Resolady уже второй курс. После первого курса из 10 сеансов объём бёдер уменьшился на 4 см. Мастер внимательная, объяснила всё про аппарат. Очень рекомендую этот аппаратный массаж в Нижнекамске!',
    },
    {
        name: 'Марьям С.',
        rating: 5,
        date: 'Октябрь 2024',
        text: 'Записалась на прессотерапию — думала, ничего особенного, но после первого же сеанса ушли отёки с ног. Сейчас делаю в комплексе с Эндосферой. Ощущение лёгкости — невероятное!',
    },
    {
        name: 'Светлана К.',
        rating: 5,
        date: 'Март 2025',
        text: 'Искала хороший аппаратный массаж в Нижнекамске — нашла Massage Niznek. Атмосфера уютная, мастер профессиональный. Эндосфера не болезненная вообще, только приятное давление. Результат виден уже на 4-й процедуре.',
    },
];

function StarRating({ count }) {
    return (
        <div className="stars" aria-label={`Оценка: ${count} из 5`}>
            {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={i < count ? 'star filled' : 'star'}>★</span>
            ))}
        </div>
    );
}

export default function TrustSection() {
    return (
        <section id="reviews" className="trust-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Нам доверяют</h2>
                    <p className="section-subtitle">Отзывы клиентов массажного салона в Нижнекамске</p>
                </div>

                {/* Статистика */}
                <div className="stats-grid">
                    {STATS.map((stat, i) => (
                        <div key={i} className="stat-item">
                            <span className="stat-value">{stat.value}</span>
                            <span className="stat-label">{stat.label}</span>
                        </div>
                    ))}
                </div>

                {/* Отзывы */}
                <div className="reviews-grid">
                    {REVIEWS.map((review, i) => (
                        <div key={i} className="review-card">
                            <div className="review-header">
                                <div className="review-avatar">
                                    {review.name.charAt(0)}
                                </div>
                                <div className="review-meta">
                                    <span className="review-name">{review.name}</span>
                                    <span className="review-date">{review.date}</span>
                                </div>
                            </div>
                            <StarRating count={review.rating} />
                            <p className="review-text">{review.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
