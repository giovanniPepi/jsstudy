const checkBox = document.querySelector('input');
const para = document.querySelector('p');
let taskDone = false;

/*Listen for user input in checkbox and calls function */
checkBox.addEventListener('change', function() {
    checkBox.disabled = false;
    taskDone = true;
    updateAllowance();
});

/*Update allowance value based on checkbox change */
function updateAllowance() {
    if (taskDone) {
        var childAllowance = 13.99; 
    } else {
        var childAllowance = 5.99;
    }
    para.textContent = 'Child has earned R$' + childAllowance + 'this week.'
}

updateAllowance();

