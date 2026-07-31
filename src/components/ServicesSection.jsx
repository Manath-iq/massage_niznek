import React from 'react';
import ServiceCard from './ServiceCard';
import './ServicesSection.css';
import { LINKS } from '../constants';
import { IconArrow } from './Icon';
import srcResolady from '../assets/resolady.webp';
import srcEndosphere from '../assets/endosphere.webp';
import srcPresso from '../assets/presso.webp';
import srcMiostimul from '../assets/miostimul.webp';
import srcManual from '../assets/manual.webp';

const SERVICES_DATA = [
    {
        id: 1,
        title: 'Resolady',
        subtitle: 'Вакуум, кавитация и RF-лифтинг',
        description:
            'Аппаратная методика для эффективного моделирования фигуры. Борется с целлюлитом и дряблостью кожи без хирургии.',
        imageAlt: 'Процедура Resolady',
        imageSrc: srcResolady,
        price: '2 000 ₽',
    },
    {
        id: 2,
        title: 'Эндосфера',
        subtitle: 'Мягкий лимфодренаж и микровибрация',
        description:
            'Создаёт эффект «лимфатического насоса», улучшает кровообращение и снимает мышечное напряжение без боли.',
        imageAlt: 'Аппарат Эндосфера',
        imageSrc: srcEndosphere,
        price: '2 000 ₽',
    },
    {
        id: 3,
        title: 'Прессотерапия',
        subtitle: 'Пневмокомпрессионный массаж',
        description:
            'Выводит лишнюю жидкость и токсины, уменьшает отёки и дарит ощущение абсолютной лёгкости.',
        imageAlt: 'Манжеты прессотерапии',
        imageSrc: srcPresso,
        price: '1 000 ₽',
    },
    {
        id: 4,
        title: 'Миостимуляция',
        subtitle: 'Скульптурирование импульсами',
        description:
            'Заставляет мышцы сокращаться. Сжигает жир, моделирует контуры и тонизирует тело, пока вы отдыхаете.',
        imageAlt: 'Электростимуляция',
        imageSrc: srcMiostimul,
        price: '1 000 ₽',
    },
    {
        id: 5,
        title: 'Ручной массаж',
        subtitle: 'Классические техники',
        description:
            'Глубокая проработка мышц и фасций. Идеальное расслабление: для снятия зажимов в теле или лица.',
        imageAlt: 'Сеанс ручного массажа',
        imageSrc: srcManual,
        price: 'от 2 000 ₽',
    },
];

export default function ServicesSection() {
    return (
        <section id="services" className="services section">
            <div className="container">
                <div className="section-head section-head--split">
                    <div>
                        <p className="eyebrow">Услуги</p>
                        <h2 className="section-title">Искусство преображения</h2>
                    </div>
                    <p className="section-note">
                        Пять методик — аппаратные и ручные. Подбираем программу под задачу: отёки,
                        целлюлит, тонус кожи или снятие напряжения.
                    </p>
                </div>

                <div className="services__grid rail">
                    {SERVICES_DATA.map((service, index) => (
                        <ServiceCard key={service.id} index={index} {...service} />
                    ))}
                </div>

                <div className="services__foot">
                    <p className="services__foot-text">
                        Не уверены, что подойдёт именно вам? Подскажем в переписке за пару минут.
                    </p>
                    <a
                        href={LINKS.max}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-arrow"
                    >
                        Задать вопрос и записаться <IconArrow />
                    </a>
                </div>
            </div>
        </section>
    );
}
