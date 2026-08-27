import React from 'react';
import './PricesSection.css';
import { LINKS } from '../constants';

const PRICES = [
    {
        id: 1,
        category: 'Аппаратный массаж',
        services: [
            { name: 'Resolady — вакуум, кавитация, RF-лифтинг', price: 2000 },
            { name: 'Эндосфера — компрессионно-вибрационный', price: 2000 },
        ],
    },
    {
        id: 2,
        category: 'Ручной массаж',
        services: [
            { name: 'На всё тело, женский', price: 2000 },
            { name: 'На всё тело, мужской', price: 2300 },
        ],
    },
    {
        id: 3,
        category: 'Дополнительно',
        services: [
            { name: 'Миостимуляция', price: 1000 },
            { name: 'Прессотерапия', price: 1000 },
        ],
    },
];

const PACKAGES = [
    { name: 'Антицеллюлитный курс', detail: '10 сеансов Resolady', price: 19000, saving: 1000 },
    {
        name: 'Лимфодренаж после тренировок',
        detail: '10 сеансов Эндосферы',
        price: 19000,
        saving: 1000,
    },
    {
        name: 'Комплекс «Стройность»',
        detail: 'Resolady + прессотерапия × 5',
        price: 14000,
        saving: 1000,
    },
];

const rub = (n) => `${n.toLocaleString('ru-RU')} ₽`;

export default function PricesSection() {
    return (
        <section id="prices" className="prices section section--soft">
            <div className="container">
                <div className="section-head section-head--split">
                    <div>
                        <p className="eyebrow">Цены</p>
                        <h2 className="section-title">Прайс-лист</h2>
                    </div>
                    <p className="section-note">
                        Прозрачные цены без скрытых доплат. Любой курс выгоднее разовых сеансов
                        на 1 000 ₽.
                    </p>
                </div>

                <div className="prices__list">
                    {PRICES.map((cat) => (
                        <div key={cat.id} className="price-group" data-reveal>
                            <h3 className="price-group__title">{cat.category}</h3>
                            <ul className="price-group__items">
                                {cat.services.map((s, i) => (
                                    <li key={i} className="price-row">
                                        <span className="price-row__name">{s.name}</span>
                                        <span className="price-row__value">{rub(s.price)}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="packages">
                    <div className="packages__head">
                        <h3 className="packages__title">Курсы и пакеты</h3>
                        <p className="packages__note">
                            Экономия 1 000 ₽ на каждом курсе. * Действует не у всех специалистов
                        </p>
                    </div>

                    <div className="packages__grid rail">
                        {PACKAGES.map((pkg, i) => (
                            <article
                                key={i}
                                className="package"
                                data-reveal
                                style={{ '--reveal-delay': `${i * 0.07}s` }}
                            >
                                <p className="package__saving">Экономия {rub(pkg.saving)}</p>
                                <h4 className="package__name">{pkg.name}</h4>
                                <p className="package__detail">{pkg.detail}</p>
                                <p className="package__price">{rub(pkg.price)}</p>
                                <a
                                    href={LINKS.max}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn--ghost btn--block package__btn"
                                >
                                    Записаться
                                </a>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
