import React from 'react';
import './CtaSection.css';
import { LINKS, PHONE, PHONE_HREF } from '../constants';

export default function CtaSection() {
    return (
        <section className="cta-section">
            <div className="container">
                <div className="cta" data-reveal>
                    <div className="cta__text">
                        <h2 className="cta__title">Ждём вас</h2>
                        <p className="cta__lead">
                            Оставьте суету за порогом. Напишите — подберём время и процедуру под вашу
                            задачу.
                        </p>
                        <a href={PHONE_HREF} className="cta__phone">
                            {PHONE}
                        </a>
                    </div>

                    <div className="cta__actions">
                        <a
                            href={LINKS.max}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn--primary"
                        >
                            Написать в Max
                        </a>
                        <a
                            href={LINKS.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn--ghost"
                        >
                            Записаться в WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
