import React from 'react';
import './ContactSection.css';
import { ADDRESS, HOURS, PHONE, PHONE_HREF, LINKS, NAV } from '../constants';

const SOCIALS = [
    { href: LINKS.max, label: 'Max' },
    { href: LINKS.whatsapp, label: 'WhatsApp' },
    { href: LINKS.telegram, label: 'Telegram' },
    { href: LINKS.instagram, label: 'Instagram' },
];

export default function ContactSection() {
    return (
        <footer className="footer">
            <div className="container">
                {/* Подвал */}
                <div className="footer__grid">
                    <div className="footer__col">
                        <span className="footer__brand">Massage Niznek</span>
                        <p className="footer__muted">Аппаратный и ручной массаж в Нижнекамске</p>
                    </div>

                    <div className="footer__col">
                        <span className="footer__label">Контакты</span>
                        <a href={PHONE_HREF} className="footer__phone">
                            {PHONE}
                        </a>
                        <p className="footer__muted">{ADDRESS}</p>
                        <p className="footer__muted">{HOURS}</p>
                    </div>

                    <div className="footer__col">
                        <span className="footer__label">Разделы</span>
                        <nav className="footer__links">
                            {NAV.map((item) => (
                                <a key={item.href} href={item.href}>
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div className="footer__col">
                        <span className="footer__label">Мы на связи</span>
                        <nav className="footer__links">
                            {SOCIALS.map((s) => (
                                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                                    {s.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>© 2026 Massage Niznek</p>
                    <p>г. Нижнекамск, пр. Вахитова, 43</p>
                </div>
            </div>
        </footer>
    );
}
