import React, { useEffect, useState } from 'react';
import './SiteHeader.css';
import { NAV, PHONE, PHONE_HREF, LINKS } from '../constants';

export default function SiteHeader() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    return (
        <>
            <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
                <div className="site-header__inner">
                    <a href="#top" className="wordmark" aria-label="Massage — на главную">
                        <span className="wordmark__name">Massage</span>
                        <span className="wordmark__city">Нижнекамск</span>
                    </a>

                    <nav className="site-nav" aria-label="Основная навигация">
                        {NAV.map((item) => (
                            <a key={item.href} href={item.href} className="site-nav__link">
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    <div className="site-header__actions">
                        <a href={PHONE_HREF} className="site-header__phone">
                            {PHONE}
                        </a>
                        <a
                            href={LINKS.max}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn--primary btn--sm site-header__cta"
                        >
                            Записаться
                        </a>
                        <button
                            type="button"
                            className={`burger ${menuOpen ? 'is-open' : ''}`}
                            onClick={() => setMenuOpen((v) => !v)}
                            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
                            aria-expanded={menuOpen}
                        >
                            <span />
                            <span />
                        </button>
                    </div>
                </div>
            </header>

            {/* Полноэкранное меню на мобильных */}
            <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} role="dialog" aria-modal="true">
                <nav className="mobile-menu__nav">
                    {NAV.map((item, i) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="mobile-menu__link"
                            style={{ transitionDelay: `${0.05 + i * 0.04}s` }}
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
                <div className="mobile-menu__foot">
                    <a href={PHONE_HREF} className="mobile-menu__phone">
                        {PHONE}
                    </a>
                    <p className="mobile-menu__hours">Ежедневно, 8:00 — 21:00</p>
                </div>
            </div>

            {/* Закреплённая запись на мобильных */}
            <div className="mobile-cta">
                <a href={PHONE_HREF} className="btn btn--ghost mobile-cta__call">
                    Позвонить
                </a>
                <a
                    href={LINKS.max}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--primary mobile-cta__book"
                >
                    Записаться
                </a>
            </div>
        </>
    );
}
