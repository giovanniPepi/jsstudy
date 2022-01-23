const multiplyInpt = document.querySelector("#multiplyArgs");
const multiplyBtn = document.querySelector("#multiplyArgsBtn");
const multiplyResult = document.querySelector("#multiplyArgsResult");

function multiplyArgs(multiplier, ...theArgs) {
    //console.log("Received args with rest function: " + multiplier, theArgs);
    return theArgs.map(element => {
        return multiplier*element;
    })
}

multiplyBtn.addEventListener('click', () => {
    //console.log("Raw value from input: " + multiplyInpt.value + ' ' + typeof(multiplyInpt.value));
    const input = multiplyInpt.value.split(",")
    //console.log("Value after spliting and turning into array: " + input + ' ' + typeof(input));
    const neatInput = input.map(Number);
    //console.log("Without rest function: " + neatInput + ' ' + typeof(neatInput));
    multiplyResult.textContent = multiplyArgs(...neatInput);
    document.getElementById("multiplyArgsResult").scrollIntoView();
});
