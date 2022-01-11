const clearBtn = document.querySelector("#clear");

console.log(resultArea);

clearBtn.addEventListener("click", () => {
    const historyDiv = document.querySelectorAll(".resultHistory");
    console.log(historyDiv);
    historyDiv.forEach(key => resultHistoryArea.removeChild(key));    
})