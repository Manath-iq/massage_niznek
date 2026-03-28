import React from 'react';
import './PricesSection.css';

const PRICES = [
    {
        id: 1,
        category: 'Аппаратный массаж',
        services: [
            { name: 'Resolady (вакуум + кавитация + RF-лифтинг)', price: 2000 },
            { name: 'Эндосфера (компрессионно-вибрационный)', price: 2000 },
        ]
    },
    {
        id: 2,
        category: 'Ручной массаж',
        services: [
            { name: 'Ручной массаж на всё тело (женский)', price: 2000 },
            { name: 'Ручной массаж на всё тело (мужской)', price: 2300 },
        ]
    },
    {
        id: 3,
        category: 'Дополнительные процедуры',
        services: [
            { name: 'Миостимуляция', price: 1000 },
            { name: 'Прессотерапия', price: 1000 },
        ]
    }
];

const PACKAGES = [
    { name: 'Антицеллюлитный курс (5 сеансов Resolady)', price: 9000, saving: 1000 },
    { name: 'Лимфодренаж после тренировок (5 сеансов Эндосфера)', price: 9000, saving: 1000 },
    { name: 'Комплекс «Стройность» (Эндосфера + Прессотерапия × 5)', price: 13500, saving: 1500 },
];

export default function PricesSection() {
    return (
        <section id="prices" className="prices-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Прайс-лист</h2>
                    <p className="section-subtitle">Аппаратный и ручной массаж в Нижнекамске — прозрачные цены без скрытых доплат</p>
                </div>

                <div className="prices-grid">
                    {PRICES.map(cat => (
                        <div key={cat.id} className="price-category">
                            <h3 className="price-category-title">{cat.category}</h3>
                            <ul className="price-list">
                                {cat.services.map((s, i) => (
                                    <li key={i} className="price-item">
                                        <span className="price-name">{s.name}</span>
                                        <span className="price-dots"></span>
                                        <span className="price-value">{s.price.toLocaleString('ru-RU')} ₽</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="packages-block">
                    <h3 className="packages-title">Выгодные курсы и пакеты</h3>
                    <div className="packages-grid">
                        {PACKAGES.map((pkg, i) => (
                            <div key={i} className="package-card">
                                <div className="package-saving">Экономия {pkg.saving.toLocaleString('ru-RU')} ₽</div>
                                <p className="package-name">{pkg.name}</p>
                                <p className="package-price">{pkg.price.toLocaleString('ru-RU')} ₽</p>
                                <a
                                    href="https://wa.me/79178568489"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="package-btn"
                                >
                                    Записаться
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
