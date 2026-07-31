import { useEffect } from 'react';

/**
 * Плавное появление блоков при скролле.
 * Любой элемент с атрибутом data-reveal получает класс is-visible,
 * когда попадает во вьюпорт. Работает один раз на элемент.
 */
export default function useReveal() {
    useEffect(() => {
        const nodes = document.querySelectorAll('[data-reveal]:not(.is-visible)');
        if (!nodes.length) return;

        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduce || !('IntersectionObserver' in window)) {
            nodes.forEach((n) => n.classList.add('is-visible'));
            return;
        }

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        io.unobserve(entry.target);
                    }
                });
            },
            { rootMargin: '0px 0px -12% 0px', threshold: 0.08 }
        );

        nodes.forEach((n) => {
            // Блоки, оказавшиеся выше вьюпорта при загрузке (перезагрузка на середине
            // страницы, переход по якорю), не пересекут его никогда — показываем сразу.
            if (n.getBoundingClientRect().bottom <= 0) {
                n.classList.add('is-visible');
                return;
            }
            io.observe(n);
        });

        // Страховка: в скрытой вкладке браузер не вызывает колбэки observer'а.
        // Если что-то в зоне видимости всё ещё не проявилось — показываем вручную.
        const failsafe = setTimeout(() => {
            nodes.forEach((n) => {
                if (n.classList.contains('is-visible')) return;
                if (n.getBoundingClientRect().top < window.innerHeight) {
                    n.classList.add('is-visible');
                    io.unobserve(n);
                }
            });
        }, 2000);

        return () => {
            clearTimeout(failsafe);
            io.disconnect();
        };
    }, []);
}
