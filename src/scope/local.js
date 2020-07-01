const helloWorld = () => {
    const hello = 'Hello World';
    console.log(hello);
};

helloWorld();
console.log(hello);

var scope = 'im a global';

const functionScope = () => {
    var scope = 'im a just a local';
    const func = () => {
        return scope;
    };
    console.log(func());
};

functionScope();
console.log(scope);
