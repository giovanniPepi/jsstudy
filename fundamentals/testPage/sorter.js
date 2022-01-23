const sortBtn = document.querySelector("#sort1");
const sortInpt = document.querySelector("#sort1Inpt");
const sortResult = document.querySelector("#sort1Result");

sortRestArgs = (...theArgs) => {
    let sortedArgs = theArgs.sort();
    return sortedArgs;
};

sortBtn.addEventListener("click", () => {
    const newInput = sortInpt.value.split(",");
    const neatInput = newInput.map(Number);
    sortResult.textContent = sortRestArgs(...neatInput);
    document.getElementById("sort1Result").scrollIntoView();
});

/* restArgs can be sorted because they have properties like real Arrays. 
The EventListener does a trick by transforming the input from str to array and 
passing the value as an array though.*/



