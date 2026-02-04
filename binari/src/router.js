import { Home } from './views/Home.js';
import { Conversor, attachConversorEventListeners } from './views/Conversor.js';

const routes = {
    '/': Home,
    '/decimal': { render: () => Conversor('decimal'), afterRender: () => attachConversorEventListeners('decimal') },
    '/octal': { render: () => Conversor('octal'), afterRender: () => attachConversorEventListeners('octal') },
    '/hexadecimal': { render: () => Conversor('hexadecimal'), afterRender: () => attachConversorEventListeners('hexadecimal') },
};

const router = () => {
    const app = document.getElementById('app');
    const hash = window.location.hash.slice(1) || '/';
    
    // For Home, it's just a direct render function. For Conversor views, it's an object with render and afterRender.
    const routeEntry = routes[hash];
    let renderFunction;
    let afterRenderFunction;

    if (typeof routeEntry === 'function') {
        renderFunction = routeEntry;
    } else if (routeEntry && typeof routeEntry === 'object' && routeEntry.render) {
        renderFunction = routeEntry.render;
        afterRenderFunction = routeEntry.afterRender;
    }

    if (app && renderFunction) {
        app.innerHTML = renderFunction();
        if (afterRenderFunction) {
            afterRenderFunction();
        }
    } else if (app) {
        app.innerHTML = `<h1>404 - Not Found</h1><p>La página que buscas no existe.</p>`;
    }
};

export const initRouter = () => {
    window.addEventListener('hashchange', router);
    window.addEventListener('load', router);
};
