const FactoryFunction = string => {
    const capitalizeString = () => string.toUpperCase();
    const printString = () => console.log(`---${capitalizeString()}-----`);
    return {printString};
};

const taco = FactoryFunction('taco');

printString(); // ERROR!!
capitalizeString(); // ERROR!!
taco.capitalizeString(); // ERROR!!

// only the returned function will work
// this is closure: functions retain their scope 
// even if they are passed around and called outside the scope

taco.printString();