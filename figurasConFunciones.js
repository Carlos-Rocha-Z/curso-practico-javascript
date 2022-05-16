//Código del cuadrado---------------------
console.group("cuadrados");
/* const ladoCuadrado =5;
console.log("los lados del cuadrado miden: "+ladoCuadrado + "cm"); */

function perimetroCuadrado(ladoCuadrado){
return ladoCuadrado*4;
}
// console.log("el permimetro del cuadrado: "+ perimetroCuadrado + "cm");

function areaCuadrado(ladoCuadrado){
 return ladoCuadrado * ladoCuadrado;
}
// console.log("el área del cuadrado: "+ areaCuadrada + "cm^2");
console.groupEnd();

//Código del triángulo-------------------
console.group("Triangulos");
/* const ladoTriangulo1=6;
const ladoTriangulo2=6;
const baseTriangulo=4;
console.log(
    "los lados de mi triangulo miden: " 
    + ladoTriangulo1 + "cm, " 
    + ladoTriangulo2 + "cm, " 
    + baseTriangulo 
    + "cm"
    );  */

// const alturaTriangulo=5.5;
// console.log("la altura de mi triángulo es: " + alturaTriangulo + "cm");

function perimetroTriangulo(ladoT1, ladoT2, baseT){
return ladoT1 + ladoT2 + baseT;
} 
// console.log("El perimetro de mi triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(baseT, alturaT){
return (baseT * alturaT) / 2;
} 
// console.log("El area de mi triángulo es: " + areaTriangulo + "cm^2");
console.groupEnd();

//Código del círculo----------------------
console.group("Círculo")
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

function diametroCirculo(radioCirculo){
return radioCirculo * 2;
}
// console.log("El diametro del circulo es: " + diametroCirculo + "cm")

// const pi = Math.PI;
//circunferencia
function perimetroCirculo(radioCirculo){
const diametroC = diametroCirculo(radioCirculo);
return diametroC * Math.PI;
} 
// console.log("El perimetro del circulo es: " + perimetroCirculo + "cm")

function areaCirculo(radioCirculo){
return (radioCirculo * radioCirculo) * Math.PI;
}
// console.log("El área del círculo es: " + areaCirculo + "cm^2")
console.groupEnd();

//Aquí interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value =input.value;
    const perimetro =perimetroCuadrado(value);
    alert (perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado")
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}