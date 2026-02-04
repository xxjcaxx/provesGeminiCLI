const conversionLogic = {
    decimal: {
        title: "Binario a Decimal",
        description: "Cada dígito en un número binario se multiplica por 2 elevado a la potencia de su posición (empezando desde 0 a la derecha).",
        convert: (binary) => {
            const steps = [];
            let decimal = 0;
            const reversedBinary = binary.split('').reverse().join('');
            for (let i = 0; i < reversedBinary.length; i++) {
                const bit = parseInt(reversedBinary[i]);
                if (bit === 1) {
                    const power = Math.pow(2, i);
                    decimal += power;
                    steps.push(`El bit en la posición ${i} es <span class="highlight">1</span>, sumamos 2<sup>${i}</sup> = <span class="highlight">${power}</span>`);
                } else {
                    steps.push(`El bit en la posición ${i} es 0, no sumamos nada.`);
                }
            }
            const finalStep = `Suma total: <span class="highlight">${decimal}</span>`;
            return { result: decimal, steps, finalStep };
        }
    },
    octal: {
        title: "Binario a Octal",
        description: "Agrupa los dígitos binarios en conjuntos de 3 de derecha a izquierda (añadiendo ceros a la izquierda si es necesario). Luego, convierte cada grupo a su equivalente octal.",
        convert: (binary) => {
            const steps = [];
            let paddedBinary = binary;
            while (paddedBinary.length % 3 !== 0) {
                paddedBinary = '0' + paddedBinary;
            }
            steps.push(`1. Aseguramos que la longitud sea múltiplo de 3: <span class="highlight">${paddedBinary}</span>`);

            const groups = paddedBinary.match(/.{1,3}/g) || [];
            steps.push(`2. Agrupamos en conjuntos de 3: <span class="highlight">${groups.join(' | ')}</span>`);
            
            const octalDigits = groups.map(group => {
                const octalDigit = parseInt(group, 2).toString(8);
                steps.push(`   - Grupo <span class="highlight">${group}</span> = <span class="highlight">${octalDigit}</span> en octal`);
                return octalDigit;
            });

            const result = octalDigits.join('');
            const finalStep = `Resultado final: <span class="highlight">${result}</span>`;
            return { result, steps, finalStep };
        }
    },
    hexadecimal: {
        title: "Binario a Hexadecimal",
        description: "Agrupa los dígitos binarios en conjuntos de 4 de derecha a izquierda (añadiendo ceros si es necesario). Convierte cada grupo a su equivalente hexadecimal (0-9, A-F).",
        convert: (binary) => {
            const steps = [];
            let paddedBinary = binary;
            while (paddedBinary.length % 4 !== 0) {
                paddedBinary = '0' + paddedBinary;
            }
            steps.push(`1. Aseguramos que la longitud sea múltiplo de 4: <span class="highlight">${paddedBinary}</span>`);

            const groups = paddedBinary.match(/.{1,4}/g) || [];
            steps.push(`2. Agrupamos en conjuntos de 4: <span class="highlight">${groups.join(' | ')}</span>`);

            const hexDigits = groups.map(group => {
                const hexDigit = parseInt(group, 2).toString(16).toUpperCase();
                steps.push(`   - Grupo <span class="highlight">${group}</span> = <span class="highlight">${hexDigit}</span> en hexadecimal`);
                return hexDigit;
            });
            
            const result = hexDigits.join('');
            const finalStep = `Resultado final: <span class="highlight">${result}</span>`;
            return { result, steps, finalStep };
        }
    }
};

const handleConversion = (type) => {
    const binaryInput = document.getElementById('binaryInput');
    const resultContainer = document.getElementById('resultContainer');
    const binaryValue = binaryInput.value.trim();

    if (!/^[01]+$/.test(binaryValue)) {
        resultContainer.innerHTML = `<div class="alert alert-danger">Por favor, introduce un número binario válido (solo 0s y 1s).</div>`;
        return;
    }

    const { result, steps, finalStep } = conversionLogic[type].convert(binaryValue);

    resultContainer.innerHTML = `
        <h3 class="fw-bold">Paso a Paso:</h3>
        ${steps.map(step => `<div class="step">${step}</div>`).join('')}
        <div class="alert alert-success mt-3 fs-4 text-center">
            ${finalStep}
        </div>
    `;
};

export const attachConversorEventListeners = (type) => {
    const conversorForm = document.getElementById('conversorForm');
    if (conversorForm) {
        conversorForm.addEventListener('submit', (e) => {
            e.preventDefault();
            handleConversion(type);
        });
    }
};

export const Conversor = (type) => {
    const { title, description } = conversionLogic[type];

    return /*html*/`
        <div class="row justify-content-center">
            <div class="col-lg-9">
                <div class="card shadow-lg">
                    <div class="card-body p-lg-5 p-4">
                        <h1 class="card-title text-center mb-3"><i class="fa-solid fa-sync-alt highlight me-2"></i> ${title}</h1>
                        <p class="text-center mb-4 lead">${description}</p>
                        
                        <form id="conversorForm" class="mb-5">
                            <div class="mb-3">
                                <label for="binaryInput" class="form-label fs-5">Número Binario</label>
                                <input type="text" class="form-control form-control-lg text-center" id="binaryInput" placeholder="Ej: 1101" required pattern="[01]+">
                            </div>
                            <div class="d-grid">
                                <button type="submit" class="btn btn-primary btn-lg">Convertir</button>
                            </div>
                        </form>

                        <div id="resultContainer"></div>
                    </div>
                </div>
                
                <div class="card mt-4 shadow-sm">
                    <div class="card-body p-4">
                        <h4 class="fw-bold"><i class="fa-solid fa-star highlight me-2"></i> Survival Tips</h4>
                        <ul class="list-unstyled mb-0">
                            <li class="mb-2"><i class="fa-solid fa-caret-right highlight me-2"></i>Recuerda que las posiciones se cuentan de <strong>derecha a izquierda</strong>, empezando en 0.</li>
                            <li class="mb-2"><i class="fa-solid fa-caret-right highlight me-2"></i>Para Octal, los grupos son de 3 bits. Para Hexadecimal, de 4. ¡No los confundas!</li>
                            <li><i class="fa-solid fa-caret-right highlight me-2"></i>Si el último grupo de la izquierda no tiene suficientes bits, ¡rellena con ceros por la <strong>izquierda</strong>!</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
};
