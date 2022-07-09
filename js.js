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
                    ope = operacion.id.substring(operacion.textContent.length - 2, operacion.textContent.length).trim();
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
            case 'cuadrado':
            case 'cubo':
                ope = operacion.id.substring(operacion.textContent.length - 2, operacion.textContent.length).trim();
                if (ope != 'suma' && ope != 'resta' && ope != 'multi' && ope != 'divi' && ope != 'cuadrado' && ope != 'cubo' && resultado.textContent.length > 0) {
                    numero1 = parseInt(resultado.textContent);
                    cargarNumero(resultado.textContent, val);
                    resultado.textContent = "";
                }
                break;
            case 'ce':
                limpiarPantalla();
                break;
            case 'del':
                resultado.textContent = resultado.textContent.substring(0, resultado.textContent.length - 1);
                break;
            default:
                resultado.textContent += val;
        }
    });
});

function limpiarPantalla() {
    operacion.textContent = "";
    resultado.textContent = "";
}

function cargarNumero(valor, simbolo) {
    operacion.textContent += " " + valor + " " + simbolo;
}

function calcular(numero1, numero2, ope) {
    switch (ope) {
        case 'suma':
            return numero1 + numero2;
        case 'resta':
            return numero1 - numero2;
        case 'multi':
            return numero1 * numero2;
        case 'divi':
            return numero1 / numero2;
    }
}