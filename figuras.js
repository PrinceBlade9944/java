//Código del cuadrado
console.group("Cuadrado");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado (lado) {
    return lado * 4;
}
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

//const areaCuadrado = ladoCuadrado * ladoCuadrado;
//console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();


//Código del triangulo
console.group("Triangulo");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;

//console.log("Los lados del triángulo miden: " + ladoTriangulo1 + "cm" + ladoTriangulo2 + "cm" + baseTriangulo + "cm");

//const alturaTriangulo = 5.5;
//console.log("La altura del triángulo mide: " + alturaTriangulo + "cm");

function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base;
} 
//console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo (base, altura) {
    return (base * altura) / 2;
}
//console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

//Código del circulo
console.group("Circulo");

//Radio
//const radioCirculo = 4;
//console.log("El radio del circulo mide: " + radioCirculo + "cm");

//Diametro
function diametroCirculo (radio) {
    return radio * 2;
}
//console.log("LEl diametro del circulo mide: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
console.log("PI es: " + PI);


//Circunferencia
function perimetroCirculo (radio) {
    const diametro =diametroCirculo(radio);
    return diametro * PI;
}
//console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");


//Área
//const areaCirculo = (radioCirculo * radioCirculo) * PI;
function areaCirculo (radio) {
    return (radio * radio) * PI;
}
//console.log("El área del circulo mide: " + areaCirculo + "cm");


console.groupEnd();

//Aquí interactuamos con HTML
function calcularPerimetroCuadrado () {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado () {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

