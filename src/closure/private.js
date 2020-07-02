const person = () => {
    var saveName = 'DefaultName';
    return {
        getName: () => {
            return saveName;
        },
        setName: (name) => {
            saveName = name;
        }
    };
};

const newPerson = person();
console.log(newPerson.getName());
newPerson.setName('Rubén');
console.log(newPerson.getName());