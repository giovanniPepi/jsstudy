const leapYearBtn = document.querySelector("#leapYearBtn");
const leapYearInpt = document.querySelector("#leapYearInpt");
const leapYearResult = document.querySelector("#leapYearResult");

leapYears = (year) => {
    if (year % 100 == 0 && year % 400 == 0) {
        return true;
    } else if (year % 100 == 0) {
        return false;
    } else if (year % 4 == 0) {
        return true;
    } else return false;
}; 

leapYearBtn.addEventListener("click", () => {
    if (leapYears(leapYearInpt.value)) {
        leapYearResult.textContent = `Yes ${leapYearInpt.value} IS a leap year!`
    } else leapYearResult.textContent = `${leapYearInpt.value} is NOT a leap year!`
    document.getElementById("leapYearResult").scrollIntoView();
});