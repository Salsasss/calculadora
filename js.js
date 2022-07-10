let operacion = document.querySelector(".operacion");
let resultado = document.querySelector(".resultado");
let botones = document.querySelectorAll(".boton");

let ope = "";
let numero1 = 0;
let numero2 = 0;
let limpiarP = false;

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        let val = boton.id;

        if (limpiarP) {
            limpiarPantalla();
            limpiarP = false;
        }

        switch (val) {
            case 'igual':
                if (resultado.textContent.length > 0) {
                    ope = operacion.textContent.substring(operacion.textContent.length - 2, operacion.textContent.length).trim();
                    numero2 = parseInt(resultado.textContent);
                    operacion.textContent += " " + numero2 + " = ";
                    resultado.textContent = calcular(numero1, numero2, ope);
                    limpiarP = true;
                }
                break;
            case 'suma':
            case 'resta':
            case 'multi':
            case 'divi':
                ope = operacion.textContent.substring(operacion.textContent.length - 2, operacion.textContent.length).trim();
                if (ope != '+' && ope != '-' && ope != 'x' && ope != '÷' && resultado.textContent.length > 0) {
                    numero1 = parseInt(resultado.textContent);
                    cargarNumero(resultado.textContent, boton.textContent);
                    resultado.textContent = "";
                }
                break;
            case 'cuadrado':
            case 'cubo':
            case 'raiz':
                if (resultado.textContent.length > 0) {
                    numero1 = parseInt(resultado.textContent);
                    cargarUnNumero(numero1, val);
                    resultado.textContent = calcularUnNumero(numero1, val);
                    limpiarP = true;
                }
                break;
            case 'ce':
                limpiarPantalla();
                break;
            case 'del':
                resultado.textContent = resultado.textContent.substring(0, resultado.textContent.length - 1);
                break;
            default:
                resultado.textContent += boton.textContent;
        }
    });
});

function limpiarPantalla() {
    operacion.textContent = "";
    resultado.textContent = "";
}

function cargarNumero(valor, simbolo) {
    operacion.textContent += valor + " " + simbolo;
}

function cargarUnNumero(valor, simbolo) {
    switch (simbolo) {
        case 'cuadrado':
            operacion.textContent = valor + "² =";
            break;
        case 'cubo':
            operacion.textContent = valor + "³ =";
            break;
        case 'raiz':
            operacion.textContent = "√" + valor + " = ";
            break;
    }
}

function calcular(numero1, numero2, ope) {
    switch (ope) {
        case '+':
            return numero1 + numero2;
        case '-':
            return numero1 - numero2;
        case 'x':
            return numero1 * numero2;
        case '÷':
            return numero1 / numero2;
    }
}

function calcularUnNumero(numero, ope) {
    switch (ope) {
        case 'cuadrado':
            return Math.pow(numero1, 2);
        case 'cubo':
            return Math.pow(numero1, 3);
        case 'raiz':
            return Math.sqrt(numero1);
    }
}