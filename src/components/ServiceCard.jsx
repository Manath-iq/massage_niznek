import React from 'react';
import './ServiceCard.css';

export default function ServiceCard({
    title,
    subtitle,
    description,
    imageAlt,
    imageSrc,
    price,
    index,
}) {
    return (
        <article className="service" data-reveal style={{ '--reveal-delay': `${index * 0.06}s` }}>
            <div className="service__media">
                <img src={imageSrc} alt={imageAlt} className="service__img" loading="lazy" />
                <span className="service__num">{String(index + 1).padStart(2, '0')}</span>
            </div>

            <div className="service__body">
                <div className="service__row">
                    <h3 className="service__title">{title}</h3>
                    <span className="service__price">{price}</span>
                </div>
                <p className="service__sub">{subtitle}</p>
                <p className="service__desc">{description}</p>
            </div>
        </article>
    );
}
