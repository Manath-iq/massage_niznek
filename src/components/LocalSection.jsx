import React from 'react';
import './LocalSection.css';

export default function LocalSection() {
    const yandexMapSrc =
        'https://yandex.ru/map-widget/v1/?um=constructor%3A&amp;source=constructor&amp;ll=51.823%2C55.634&amp;z=16&amp;pt=51.823,55.634,pm2rdm~51.823,55.634,pm2rdm';

    const yandexRouteUrl =
        'https://yandex.ru/maps/236/nizhnekamsk/?ll=51.821653%2C55.650978&z=17&pt=51.821653%2C55.650978';

    return (
        <section id="location" className="local-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Как нас найти</h2>
                    <p className="section-subtitle">Массажный салон в Нижнекамске — удобное расположение</p>
                </div>

                <div className="local-content">
                    {/* Карта */}
                    <div className="map-wrapper">
                        <iframe
                            title="Карта: Massage Niznek — пр. Вахитова, 43, Нижнекамск"
                            src="https://yandex.ru/map-widget/v1/?ll=51.821653%2C55.650978&z=17&pt=51.821653%2C55.650978,pm2rdm"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allowFullScreen
                            loading="lazy"
                        />
                    </div>

                    {/* Контактный блок */}
                    <div className="local-info">
                        <div className="local-detail">
                            <span className="local-icon">📍</span>
                            <div>
                                <span className="local-label">Адрес</span>
                                <p className="local-value">г. Нижнекамск, пр. Вахитова, 43</p>
                                <p className="local-hint">Рядом с микрорайонами Химиков и Мира, удобный подъезд из центра города</p>
                            </div>
                        </div>

                        <div className="local-detail">
                            <span className="local-icon">📞</span>
                            <div>
                                <span className="local-label">Телефон</span>
                                <a href="tel:+79178568489" className="local-value local-phone">
                                    +7 (917) 856-84-89
                                </a>
                            </div>
                        </div>

                        <div className="local-detail">
                            <span className="local-icon">🕐</span>
                            <div>
                                <span className="local-label">Режим работы</span>
                                <p className="local-value">Ежедневно, 9:00 — 21:00</p>
                                <p className="local-hint">Без выходных и перерывов</p>
                            </div>
                        </div>

                        <div className="local-detail">
                            <span className="local-icon">🚗</span>
                            <div>
                                <span className="local-label">Парковка</span>
                                <p className="local-value">Бесплатная</p>
                                <p className="local-hint">Парковочные места рядом с входом</p>
                            </div>
                        </div>

                        <div className="local-buttons">
                            <a
                                href={yandexRouteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="route-btn btn-primary"
                            >
                                Проложить маршрут
                            </a>
                            <a
                                href="https://go.2gis.com/zQ4BF"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="route-btn btn-secondary"
                            >
                                Открыть в 2ГИС
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
