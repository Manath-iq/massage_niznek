import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';

// Точка входа для пререндера: тот же <App />, что и на клиенте.
// Разметка должна совпадать с клиентской, иначе hydrateRoot её отбросит.
export function render() {
    return renderToString(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
