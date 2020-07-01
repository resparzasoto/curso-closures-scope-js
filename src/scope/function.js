
// Scope de funcion
const fruits = () => {
    var fruit = 'Apple';
    console.log(fruit);
};

fruits();
// La variable solamente existe en la funcion fruits
console.log(fruit);


const anotherFunction = () => {
    var x = 1;
    var x = 2;
    let y = 1;
    // No puede redeclararse un let
    // let y = 2;
    console.log(x);
    console.log(y);
};

anotherFunction();