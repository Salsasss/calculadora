let operacion = document.querySelector(".operacion");
let resultado = document.querySelector(".resultado");
let botones = document.querySelectorAll(".boton");

let ope = "";
let numero1 = 0;
let numero2 = 0;

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        let val = boton.textContent;

        switch (val) {
            case '=':
                ope = operacion.textContent.substring(operacion.textContent.length - 2, operacion.textContent.length).trim();
                numero2 = resultado.textContent;
                resultado.textContent = "";
                operacion.textContent += " " + numero2 + " = " + calcular(numero1, numero2, ope);
                break;
            case '+':
            case "-":
            case 'x':
            case '/':
                ope = operacion.textContent.substring(operacion.textContent.length - 2, operacion.textContent.length).trim();
                if (ope != "+" && ope != "-" && ope != "x" && ope != "/" && resultado.textContent.length > 0) {
                    numero1 = resultado.textContent;
                    cargarNumero(resultado.textContent, val);
                    resultado.textContent = "";
                }
                break;
            case 'CE':
                resultado.textContent = "";
                break;
            case 'del':
                resultado.textContent = resultado.textContent.substring(0, resultado.textContent.length - 1);
                break;
            default:
                resultado.textContent += val;
        }
    });
});

function cargarNumero(valor, simbolo) {
    operacion.textContent += " " + valor + " " + simbolo;
}

function calcular() {
    console.log(numero1);
    console.log(numero2);
    console.log(ope);
    switch (ope) {
        case "+":
            return numero1 + numero2;
        case "-":
            return numero1 - numero2;
        case "x":
            return numero1 * numero2;
        case "/":
            return numero1 / numero2;
    }
}