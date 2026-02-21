import React from 'react';
import './ServiceCard.css';

export default function ServiceCard({ title, subtitle, description, imageAlt, cardNumber, imageSrc }) {
    return (
        <article className="card-editorial">
            <div className="card-bg-number">{cardNumber}</div>
            <div className="card-visual-editorial">
                {imageSrc ? (
                    <img src={imageSrc} alt={imageAlt} className="card-image-actual" />
                ) : (
                    <div className="img-placeholder">
                        <span>{imageAlt}</span>
                    </div>
                )}
            </div>

            <div className="card-content-editorial">
                <p className="card-sup-title">{subtitle}</p>
                <h3 className="card-title-editorial">{title}</h3>
                <p className="card-desc-editorial">{description}</p>
            </div>
        </article>
    );
}
