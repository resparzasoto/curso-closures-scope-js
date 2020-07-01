// Global
var hello = 'Hello'; // Solamente var puede ser redeclarado
let world = 'Hello world!'; // No puede reedeclararse
const helloWorld = 'Hello world!'; // No puede redeclararse ni asignarse

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

// Declaracion global dentro de una funcion
const anotherGlobalFunction = () => {
    globalVar = 'im global';
}

anotherGlobalFunction();
console.log(globalVar);

// Declaracion local e asignacion local y global
const anotherDoubleGlobalFunction = () => {
    var localVar = globalVar = 'Im Global!';
}

anotherDoubleGlobalFunction();
console.log(globalVar);