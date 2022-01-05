const ctofInpt = document.querySelector("#ctofInpt");
const ctofBtn = document.querySelector("#ctofBtn");
const ctofResult = document.querySelector("#ctofResult");

const ftocInpt = document.querySelector("#ftocInpt");
const ftocBtn = document.querySelector("#ftocBtn");
const ftocResult = document.querySelector("#ftocResult");

// multiply to and divide by 10 to apply proper decimal rounding.

const ftoC = function(f) {
    return c = (Math.round((f - 32) * 0.555555556 *10)/10);
};
  
const ctoF = function(c) {
    return f = (Math.round(((c * 1.8) + 32 ) *10 ) / 10);
};

ctofBtn.addEventListener("click", () => {
    ctofResult.textContent = ctoF(ctofInpt.value);
    document.getElementById("ctofResult").scrollIntoView();
});

ftocBtn.addEventListener("click", () => {
    ftocResult.textContent = ftoC(ftocInpt.value);
    document.getElementById("ftocResult").scrollIntoView();
});