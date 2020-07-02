a = 2;
console.log(a); // 2
var a;

console.log(a); // undefined
var a  = 2; // Solamente la declaracion de nuestra variable es elevada

nameOfDog('Teseo - Above');

// Las declaraciones de nuestras funciones son elevadas y colocadas en memoria por el motor de JS en
// la compilacion antes de interpretar nuestro codigo
function nameOfDog(name) {
    console.log(name);
}

nameOfDog('Teseo - Below');