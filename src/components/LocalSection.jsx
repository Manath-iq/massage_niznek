import React from 'react';
import './LocalSection.css';
import { ADDRESS, HOURS, PHONE, PHONE_HREF, LINKS } from '../constants';
import { IconPin, IconPhone, IconClock, IconCar } from './Icon';

const DETAILS = [
    {
        Icon: IconPin,
        label: 'Адрес',
        value: ADDRESS,
        hint: 'Рядом с микрорайонами Химиков и Мира, удобный подъезд из центра',
    },
    {
        Icon: IconPhone,
        label: 'Телефон',
        value: PHONE,
        href: PHONE_HREF,
    },
    {
        Icon: IconClock,
        label: 'Режим работы',
        value: HOURS,
        hint: 'Без выходных и перерывов',
    },
    {
        Icon: IconCar,
        label: 'Парковка',
        value: 'Бесплатная',
        hint: 'Парковочные места рядом с входом',
    },
];

export default function LocalSection() {
    return (
        <section id="location" className="local section section--soft">
            <div className="container">
                <div className="section-head section-head--split">
                    <div>
                        <p className="eyebrow">Контакты</p>
                        <h2 className="section-title">Как нас найти</h2>
                    </div>
                    <p className="section-note">
                        Массажный салон в Нижнекамске — пр. Вахитова, 43. Удобный подъезд и бесплатная
                        парковка у входа.
                    </p>
                </div>

                <div className="local__grid">
                    <div className="local__map" data-reveal>
                        <iframe
                            title="Карта: Massage — пр. Вахитова, 43, Нижнекамск"
                            src="https://yandex.ru/map-widget/v1/?ll=51.821653%2C55.650978&z=17&pt=51.821653%2C55.650978,pm2rdm"
                            loading="lazy"
                            allowFullScreen
                        />
                    </div>

                    <div className="local__info" data-reveal style={{ '--reveal-delay': '0.08s' }}>
                        <ul className="local__details">
                            {DETAILS.map((d) => (
                                <li key={d.label} className="detail">
                                    <d.Icon className="detail__icon" />
                                    <div className="detail__body">
                                        <span className="detail__label">{d.label}</span>
                                        {d.href ? (
                                            <a
                                                href={d.href}
                                                className="detail__value detail__value--link"
                                            >
                                                {d.value}
                                            </a>
                                        ) : (
                                            <p className="detail__value">{d.value}</p>
                                        )}
                                        {d.hint && <p className="detail__hint">{d.hint}</p>}
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="local__buttons">
                            <a
                                href={LINKS.yandexRoute}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn--primary"
                            >
                                Проложить маршрут
                            </a>
                            <a
                                href={LINKS.twogis}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn--ghost"
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
