// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import the router
import { initRouter } from './router.js';

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    initRouter();
});
