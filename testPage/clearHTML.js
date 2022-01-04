const clearBtn = document.querySelector("#clearBtn");

clearBtn.addEventListener('click', () => {
    resultLongString.textContent =""; // global const loaded in longerString.js
    sumResult.textContent = "";
})
