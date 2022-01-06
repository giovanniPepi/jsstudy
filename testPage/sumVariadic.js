const sumInpt = document.querySelector("#sum");
const sumResult = document.querySelector("#sumResult");
const sumBtn = document.querySelector("#sumButton");

function sum(...theArgs) {
    return theArgs.reduce((previous, current) => {
        return previous + current; 
    });
  };
  
sumBtn.addEventListener('click', function () {
    const inputNumbers = sumInpt.value.split(",");
    const neatInputNumbers = inputNumbers.map(Number);
    sumResult.textContent = sum(...neatInputNumbers);
    document.getElementById("sumResult").scrollIntoView();
});