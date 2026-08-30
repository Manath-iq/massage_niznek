import React from 'react';
import './TrustSection.css';
import { IconStar } from './Icon';

const STATS = [
    { value: '400+', label: 'довольных клиентов' },
    { value: '5', label: 'лет работы' },
    { value: '4.9', label: 'рейтинг в Яндексе' },
    { value: '5', label: 'видов процедур' },
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
        text: 'Искала хороший аппаратный массаж в Нижнекамске — нашла Massage. Атмосфера уютная, мастер профессиональный. Эндосфера не болезненная вообще, только приятное давление. Результат виден уже на 4-й процедуре.',
    },
];

function StarRating({ count }) {
    return (
        <div className="stars" aria-label={`Оценка: ${count} из 5`}>
            {Array.from({ length: 5 }).map((_, i) => (
                <IconStar key={i} filled={i < count} className={i < count ? 'star--on' : 'star--off'} />
            ))}
        </div>
    );
}

export default function TrustSection() {
    return (
        <section id="reviews" className="trust section section--soft">
            <div className="container">
                {/* Цифры — типографической строкой, без плашек */}
                <ul className="stats" data-reveal>
                    {STATS.map((stat, i) => (
                        <li key={i} className="stat">
                            <span className="stat__value">{stat.value}</span>
                            <span className="stat__label">{stat.label}</span>
                        </li>
                    ))}
                </ul>

                <div className="section-head section-head--split trust__head">
                    <div>
                        <p className="eyebrow">Отзывы</p>
                        <h2 className="section-title">Нам доверяют</h2>
                    </div>
                    <p className="section-note">
                        Живые отзывы клиентов салона в Нижнекамске — о результате, ощущениях и мастерах.
                    </p>
                </div>

                <div className="reviews">
                    {REVIEWS.map((review, i) => (
                        <figure
                            key={i}
                            className="review"
                            data-reveal
                            style={{ '--reveal-delay': `${i * 0.07}s` }}
                        >
                            <StarRating count={review.rating} />
                            <blockquote className="review__text">{review.text}</blockquote>
                            <figcaption className="review__meta">
                                <span className="review__name">{review.name}</span>
                                <span className="review__date">{review.date}</span>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
