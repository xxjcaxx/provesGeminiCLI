export const Home = () => {
    return /*html*/`
        <div class="container text-center">
            <h1 class="display-4 fw-bold mb-3">Bienvenido a <span class="highlight">Binary Master</span></h1>
            <p class="lead mb-5">Tu centro de aprendizaje interactivo para dominar los sistemas numéricos.</p>
            
            <div class="row g-4 justify-content-center">
                <div class="col-lg-4 col-md-6">
                    <div class="card h-100 shadow">
                        <div class="card-body p-4 d-flex flex-column">
                            <h2 class="card-title h3"><i class="fa-solid fa-calculator highlight me-2"></i> A Decimal</h2>
                            <p class="card-text flex-grow-1">Aprende cómo cada dígito binario (bit) representa una potencia de 2 para formar un número decimal.</p>
                            <a href="#/decimal" class="btn btn-primary mt-auto">Ir al conversor</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="card h-100 shadow">
                        <div class="card-body p-4 d-flex flex-column">
                            <h2 class="card-title h3"><i class="fa-solid fa-list-ol highlight me-2"></i> A Octal</h2>
                            <p class="card-text flex-grow-1">Descubre el atajo de agrupar bits en conjuntos de 3 para una conversión rápida y eficiente al sistema octal.</p>
                            <a href="#/octal" class="btn btn-primary mt-auto">Ir al conversor</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="card h-100 shadow">
                        <div class="card-body p-4 d-flex flex-column">
                            <h2 class="card-title h3"><i class="fa-solid fa-x-ray highlight me-2"></i> A Hexadecimal</h2>
                            <p class="card-text flex-grow-1">Domina la agrupación de bits en conjuntos de 4 para convertir a hexadecimal, el lenguaje de la memoria.</p>
                            <a href="#/hexadecimal" class="btn btn-primary mt-auto">Ir al conversor</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-5 p-4 result-card shadow-sm">
                <h3 class="fw-bold"><i class="fa-solid fa-graduation-cap me-2"></i> Action Plan de Estudio</h3>
                <p>Te recomendamos seguir este orden para un aprendizaje óptimo:</p>
                <ol class="list-inline">
                    <li class="list-inline-item mx-2"><strong>1. Decimal:</strong> Entiende la base.</li>
                    <li class="list-inline-item mx-2"><strong>2. Hexadecimal:</strong> El más usado.</li>
                    <li class="list-inline-item mx-2"><strong>3. Octal:</strong> Refuerza conceptos.</li>
                </ol>
            </div>
        </div>
    `;
};
