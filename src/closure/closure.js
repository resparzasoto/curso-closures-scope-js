const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
};

moneyBox(5);
moneyBox(10);

const closureMoneyBox = () => {
    // Esta variable pasa al contexto de myMoneyBox y ahora reside en myMoneyBox
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    };
    return countCoins;
};

let myMoneyBox = closureMoneyBox();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);