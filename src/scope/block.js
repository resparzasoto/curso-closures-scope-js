const fruits = () => {
    if (true) {
        var fruits1 = 'apple'; // Asignacion local del scope en el ambito de la funcion
        let fruits2 = 'banana'; // Asignacion local del scope en el ambito del bloque
        const fruits3 = 'kiwi'; // Asignacion local del scope en el ambito del bloque

        console.log(fruits2);
        console.log(fruits3);
    }
    // console.log(fruits1);
    // console.log(fruits2);
    console.log(fruits1);
};

fruits();

let x = 1;
{
    let x = 2;
    console.log(x);
}
console.log(x);

var y = 1;
{
    var y = 2;
    console.log(y);
}
console.log(y);

const anotherFunctionVar = () => {
    console.log('For con Var');
    for (var i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
};

anotherFunctionVar();

const anotherFunctionLet = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
    console.log('For con Let');
};

anotherFunctionLet();