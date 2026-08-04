/**
 * Пререндер: вставляет статический HTML приложения в dist/index.html.
 *
 * Запускается после `vite build` (клиент) и `vite build --ssr` (серверный бандл).
 * Без него сервер отдаёт пустой <div id="root"></div>, и весь текст страницы
 * существует только после выполнения JS — Яндекс такой контент индексирует плохо.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const indexPath = path.join(root, 'dist', 'index.html');
const serverEntry = path.join(root, '.ssr-build', 'entry-server.js');
const PLACEHOLDER = '<div id="root"></div>';

if (!fs.existsSync(serverEntry)) {
    throw new Error(`Не найден серверный бандл: ${serverEntry}. Сначала выполните vite build --ssr.`);
}

const { render } = await import(pathToFileURL(serverEntry).href);
const appHtml = render();

// Пустой результат означал бы, что мы молча задеплоим ту же пустую страницу.
if (!appHtml || appHtml.length < 1000) {
    throw new Error(`Пререндер вернул подозрительно короткий HTML (${appHtml?.length ?? 0} символов).`);
}

const template = fs.readFileSync(indexPath, 'utf8');
if (!template.includes(PLACEHOLDER)) {
    throw new Error(`В dist/index.html не найден ${PLACEHOLDER} — пререндер не может встроить разметку.`);
}

// Функция-заменитель, а не строка: в тексте страницы есть «$», который
// String.replace иначе трактует как спецпоследовательность ($&, $$ и т.д.).
const html = template.replace(PLACEHOLDER, () => `<div id="root">${appHtml}</div>`);

fs.writeFileSync(indexPath, html);

const kb = (Buffer.byteLength(html) / 1024).toFixed(1);
console.log(`prerender: dist/index.html — ${kb} kB, разметка приложения встроена`);
