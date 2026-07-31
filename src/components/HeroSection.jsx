import React from 'react';
import './HeroSection.css';
import { LINKS, ADDRESS } from '../constants';
import { IconStar } from './Icon';

const VIDEO_SRC = '/videos/start_screen.mp4';
// Постер показывается мгновенно, пока подгружается видео — от него зависит LCP
const POSTER_SRC = '/videos/hero_poster.jpg';

export default function HeroSection() {
    return (
        <section className="hero" id="top">
            <div className="hero__media">
                <video
                    src={VIDEO_SRC}
                    poster={POSTER_SRC}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="hero__video"
                />
                <div className="hero__scrim" />
            </div>

            <div className="hero__inner container">
                <p className="hero__eyebrow">
                    <span>Massage Niznek</span>
                    <span className="hero__dot" />
                    <span>{ADDRESS.replace('г. Нижнекамск, ', '')}</span>
                </p>

                <h1 className="hero__title">
                    Аппаратный массаж{' '}
                    <span className="hero__title-sub">в Нижнекамске</span>
                    {/* хвост прежнего H1 — важен для поиска, визуально не нужен */}
                    <span className="sr-only"> — Resolady, Эндосфера, Прессотерапия</span>
                </h1>

                <p className="hero__lead">
                    Resolady, эндосфера, прессотерапия и ручной массаж. Спокойное пространство,
                    внимательные мастера и видимый результат уже с третьей процедуры.
                </p>

                <div className="hero__actions">
                    <a
                        href={LINKS.max}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--primary"
                    >
                        Записаться
                    </a>
                    <a href="#services" className="btn btn--ghost">
                        Смотреть услуги
                    </a>
                </div>

                <ul className="hero__facts">
                    <li className="hero__fact">
                        <IconStar className="hero__star" />
                        <span>
                            <strong>4.9</strong> в Яндексе
                        </span>
                    </li>
                    <li className="hero__fact">
                        <strong>400+</strong> клиентов
                    </li>
                    <li className="hero__fact">
                        <strong>8:00 — 21:00</strong> без выходных
                    </li>
                </ul>
            </div>

            <a href="#about" className="hero__scroll" aria-label="Листать дальше">
                <span className="hero__scroll-line" />
            </a>
        </section>
    );
}
