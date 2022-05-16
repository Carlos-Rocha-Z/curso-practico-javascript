//Código del cuadrado
console.group("cuadrados");
const ladoCuadrado =5;
console.log("los lados del cuadrado miden: "+ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado*4;
console.log("el permimetro del cuadrado: "+ perimetroCuadrado + "cm");

const areaCuadrada = ladoCuadrado * ladoCuadrado;
console.log("el área del cuadrado: "+ areaCuadrada + "cm^2");
console.groupEnd();

//Código del triángulo
console.group("Triangulos");
const ladoTriangulo1=6;
const ladoTriangulo2=6;
const baseTriangulo=4;
console.log(
    "los lados de mi triangulo miden: " 
    + ladoTriangulo1 + "cm, " 
    + ladoTriangulo2 + "cm, " 
    + baseTriangulo 
    + "cm"
    );

const alturaTriangulo=5.5;
console.log("la altura de mi triángulo es: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro de mi triángulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area de mi triángulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

//Código del círculo
console.group("Círculo")
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm");

const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo + "cm")

const pi = Math.PI;
console.log("pi es: " + pi);
//circunferencia
const perimetroCirculo = diametroCirculo * pi;
console.log("El perimetro del circulo es: " + perimetroCirculo + "cm")

const areaCirculo = (radioCirculo * radioCirculo) * pi;
console.log("El área del círculo es: " + areaCirculo + "cm^2")

console.groupEnd();