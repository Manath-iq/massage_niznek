import React from 'react';
import ServiceCard from './ServiceCard';
import './ServicesSection.css';
import srcResolady from '../assets/resolady.PNG';
import srcEndosphere from '../assets/endosphere.PNG';
import srcPresso from '../assets/presso.PNG';
import srcMiostimul from '../assets/miostimul.PNG';
import srcManual from '../assets/manual.PNG';

const SERVICES_DATA = [
    {
        id: 1,
        title: 'Resolady',
        subtitle: 'Вакуумный массаж, кавитация и RF-лифтинг',
        description: 'Аппаратная методика для эффективного моделирования фигуры. Борется с целлюлитом и дряблостью кожи без хирургии.',
        imageAlt: 'Процедура Resolady',
        imageSrc: srcResolady
    },
    {
        id: 2,
        title: 'Эндосфера',
        subtitle: 'Мягкий лимфодренаж и микровибрация',
        description: 'Создает эффект "лимфатического насоса", улучшает кровообращение и снимает мышечное напряжение без боли.',
        imageAlt: 'Аппарат Эндосфера',
        imageSrc: srcEndosphere
    },
    {
        id: 3,
        title: 'Прессотерапия',
        subtitle: 'Пневмокомпрессионный массаж',
        description: 'Выводит лишнюю жидкость, токсины, уменьшает отеки и дарит ощущение абсолютной легкости.',
        imageAlt: 'Манжеты прессотерапии',
        imageSrc: srcPresso
    },
    {
        id: 4,
        title: 'Миостимуляция',
        subtitle: 'Скульптурирование импульсами тока',
        description: 'Заставляет мышцы сокращаться. Сжигает жир, моделирует контуры и тонизирует тело, пока вы отдыхаете.',
        imageAlt: 'Электростимуляция',
        imageSrc: srcMiostimul
    },
    {
        id: 5,
        title: 'Ручной массаж',
        subtitle: 'Классические техники',
        description: 'Глубокая проработка мышц и фасций. Идеальное расслабление: для снятия зажимов в теле или лица.',
        imageAlt: 'Сеанс ручного массажа',
        imageSrc: srcManual
    }
];

export default function ServicesSection() {
    return (
        <section id="services" className="services-section">
            <div className="container services-header text-center">
                <h2 className="section-title">Искусство преображения</h2>
                <p className="section-subtitle">Свайпните, чтобы ознакомиться с услугами</p>
            </div>

            <div className="carousel-container">
                <div className="services-carousel">
                    {SERVICES_DATA.map((service, index) => (
                        <ServiceCard
                            key={service.id}
                            title={service.title}
                            subtitle={service.subtitle}
                            description={service.description}
                            imageAlt={service.imageAlt}
                            imageSrc={service.imageSrc}
                            cardNumber={`0${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
