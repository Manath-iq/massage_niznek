import React from 'react';

/* Тонкие штриховые иконки вместо эмодзи */

const base = {
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.4,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
};

export function IconPin(props) {
    return (
        <svg {...base} {...props}>
            <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
            <circle cx="12" cy="10" r="2.6" />
        </svg>
    );
}

export function IconPhone(props) {
    return (
        <svg {...base} {...props}>
            <path d="M6.5 3.5h3l1.5 4-2 1.4a12 12 0 0 0 6.1 6.1l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2Z" />
        </svg>
    );
}

export function IconClock(props) {
    return (
        <svg {...base} {...props}>
            <circle cx="12" cy="12" r="8.5" />
            <path d="M12 7.5V12l3 1.8" />
        </svg>
    );
}

export function IconCar(props) {
    return (
        <svg {...base} {...props}>
            <path d="M4 16v2.5M20 16v2.5M3.5 15.5v-3l1.8-4.2A2 2 0 0 1 7.1 7h9.8a2 2 0 0 1 1.8 1.3l1.8 4.2v3a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1Z" />
            <path d="M4 12.5h16" />
            <circle cx="7.5" cy="15.5" r="0.6" fill="currentColor" />
            <circle cx="16.5" cy="15.5" r="0.6" fill="currentColor" />
        </svg>
    );
}

export function IconArrow(props) {
    return (
        <svg {...base} width={16} height={16} {...props}>
            <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
    );
}

export function IconStar({ filled = true, ...props }) {
    return (
        <svg
            {...base}
            width={14}
            height={14}
            fill={filled ? 'currentColor' : 'none'}
            strokeWidth={filled ? 0 : 1.2}
            {...props}
        >
            <path d="m12 3.6 2.5 5.1 5.6.8-4 3.9 1 5.6-5.1-2.7-5 2.7 1-5.6-4.1-3.9 5.6-.8Z" />
        </svg>
    );
}

export function IconPlus({ open = false, ...props }) {
    return (
        <svg {...base} width={18} height={18} {...props}>
            <path d="M4 12h16" />
            <path
                d="M12 4v16"
                style={{
                    transformOrigin: 'center',
                    transform: open ? 'scaleY(0)' : 'scaleY(1)',
                    transition: 'transform .35s cubic-bezier(.22,1,.36,1)',
                }}
            />
        </svg>
    );
}
