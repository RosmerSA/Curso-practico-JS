
// Código del cuadrado.


console.group('Cuadrados');

function perimetroCuadrado(lado) {
    return (lado * 4) + "cm";
}

function areaCuadrado(lado) {
    return (lado * lado) + "cm^2";
}

console.groupEnd();

// Código del triangulo

console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base) {
    return (lado1 + lado2 + base) + "cm";
}

function areaTriangulo(base, altura){
    return  ((base * altura) / 2) + "cm^2";
}

console.groupEnd();

// Código Circulo

console.group("Circulo");

function diametroCirculo(radio){
    return (radio * 2) + "cm";
}
// PI 

const PI = Math.PI;

// Circunferencia

function perimetroCirculo(radio) {
    return Math.round((diametroCirculo(radio) * PI) + "cm");
}

// Area

function areaCirculo(radio){
    return Math.round(((radio * radio) * PI) + "cm");
}

console.groupEnd();


// INTERACTUANDO CON HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

// Reto matemáticas con JavaScript

const trianguloIsosceles = function(ladoA, ladoB, base) {
    if (ladoA === ladoB && ladoA != base) {
        const altura = Math.sqrt((ladoA * ladoB) - ((base * base)/ 4));
        return alert("La altura de tu triangulo es: " + altura);
    } else if(ladoA && ladoB === base) {
        alert("Estas medidas corresponden a un triangulo equilatero");

    } else {
        alert("Estos datos no corresponden a un triangulo Isosceles");
    }
}

