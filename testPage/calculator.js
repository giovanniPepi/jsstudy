const calcOutput = document.querySelector("#calcResult");

const addBtn = document.querySelector("#calcAdd");
const calcInpt = document.querySelector("#calcInpt");
const subtractBtn = document.querySelector("#calcSubtract");
const multiply1Btn = document.querySelector("#calcMultiply");
const powerBtn = document.querySelector("#calcPower");
const factBtn = document.querySelector("#calcFactor");

const add = function(...theArgs) {
    return theArgs.reduce((previous, current) => {
      return previous + current; 
  });
};
const subtract = function(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous - current;
  });
};

const multiply = function(array){
  return array.reduce((previous, current) => {
    return previous * current;
  });
};

const power = function(array) {
  return array.reduce((previous, current) => {
    return Math.pow(previous, current);
  });
};

const factorial = function(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial (n -1);
  }
};

const getFact = function (neatInput) { //iterates through array input
  for (let i = 0; i < neatInput.length; i++){
    return factorial(neatInput[i]);
  }
}

getNeatInput = () => {
  const input = calcInpt.value.split(","); // calcInpt is string, need to be converted to object
  const neatInput = input.map(Number); // maps array to int to be used in calc.
  return neatInput;  
}

getOutputArea = () => {
  calcOutput.innerHTML = "";
  const para = document.createElement("p");
  return para;
};

getFocus = () => {
  document.getElementById('calcResult').scrollIntoView();
}

addBtn.addEventListener("click", () => {
    const neatInput = getNeatInput();
    const para = getOutputArea();
    para.textContent = add(...neatInput);
    calcOutput.appendChild(para);
    getFocus();
})

subtractBtn.addEventListener("click", () => {
  const neatInput = getNeatInput();
  const para = getOutputArea();
  para.textContent = subtract(...neatInput);
  calcOutput.appendChild(para);
  getFocus();
});

multiply1Btn.addEventListener("click", () => {
  const neatInput = getNeatInput();
  const para = getOutputArea();
  para.textContent = multiply(neatInput);
  calcOutput.appendChild(para);
  getFocus();
})

powerBtn.addEventListener("click", () => {
  const neatInput = getNeatInput();
  const para = getOutputArea(); 
  para.textContent = power(neatInput);
  calcOutput.appendChild(para);
  getFocus();
})

factBtn.addEventListener("click", () => {
  const neatInput = getNeatInput();
  const para = getOutputArea();
  para.textContent = getFact(neatInput);
  calcOutput.appendChild(para);
  getFocus();
})

