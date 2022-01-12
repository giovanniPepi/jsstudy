const clearBtn = document.querySelector("#clear");

clearBtn.addEventListener("click", () => {
    const historyDiv = document.querySelectorAll(".resultHistory");
    historyDiv.forEach(key => resultHistoryArea.removeChild(key)); 
    
    const last = document.querySelector('#history');
    last.textContent = "";
})