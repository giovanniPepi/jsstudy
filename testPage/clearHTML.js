const clearBtn = document.querySelector("#clearBtn");

clearBtn.addEventListener('click', () => {
    resultLongString.textContent =""; // global const loaded in longerString.js
    sumResult.textContent = "";
    multiplyResult.textContent="";
    sort1Result.textContent="";
    leapYearResult.textContent="";    
    ctofResult.textContent="";
    ftocResult.textContent="";
})
