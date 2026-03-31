import React from 'react';
import './ContactSection.css';

export default function ContactSection() {
    return (
        <footer className="contact-section">
            <div className="container contact-container">
                <div className="contact-info">
                    <h2 className="section-title text-center">Ждем вас</h2>
                    <p className="contact-description text-center">
                        Оставьте суету за порогом. Наш клуб — это место, где время принадлежит только вам.
                    </p>

                    <div className="contact-details-grid">
                        <div className="contact-item">
                            <span className="contact-label">Адрес</span>
                            <p className="contact-value">г. Нижнекамск, пр. Вахитова, 43</p>
                        </div>

                        <div className="contact-item">
                            <span className="contact-label">Телефон</span>
                            <a href="tel:+79178568489" className="contact-value" style={{ textDecoration: 'none', color: 'inherit' }}>+7 (917) 856-84-89</a>
                        </div>
                    </div>

                    <div className="social-links-centered">
                        <a href="https://instagram.com/massage_niznek" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
                        <span className="social-separator"></span>
                        <a href="https://wa.me/79178568489" target="_blank" rel="noopener noreferrer" className="social-link">WhatsApp</a>
                        <span className="social-separator"></span>
                        <a href="https://t.me/massage_niznek" target="_blank" rel="noopener noreferrer" className="social-link">Telegram</a>
                    </div>

                    <div className="contact-action text-center">
                        <a href="https://max.ru/u/f9LHodD0cOJq-lhuRmgl67A-f-L2tIH06XPcu5fknwt5YT-Lwnqn-UtN5Tw" target="_blank" rel="noopener noreferrer" className="btn-primary">Написать в Max</a>
                        <a href="https://wa.me/79178568489" target="_blank" rel="noopener noreferrer" className="btn-secondary-contact">Записаться в WhatsApp</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2026 Massage Niznek. Разработано с фокусом на эстетику.</p>
            </div>
        </footer>
    );
}
