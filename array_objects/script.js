const body = document.querySelector("body");
const inventors = [];

createHTML();
createEventListeners();

function createHTML () {
    const mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", "mainDiv");

    const invFirst = document.createElement("p");
    invFirst.setAttribute("class", "invFirst");
    invFirst.textContent="Please enter the inventor first name:";
    const invFirstInpt = document.createElement("input");
    invFirstInpt.setAttribute("class", "invFirstInpt");
  
    const invLast = document.createElement("p");
    invLast.setAttribute("class", "invLast");
    invLast.textContent="Please the inventor's last name:";
    const invLastInpt = document.createElement("input");
    invLastInpt.setAttribute("class", "invLastInpt");
  
    const invBirth = document.createElement("p");
    invBirth.setAttribute("class", "invBirth");
    invBirth.textContent="Please enter the birth year:";
    const invBirthInpt = document.createElement("input");
    invBirthInpt.setAttribute("class", "invBirthInpt");
  
    const invDeath = document.createElement("p");
    invDeath.setAttribute("class", "invDeath");
    invDeath.textContent="Please enter the decease year:";
    const invDeathInpt = document.createElement("input");
    invDeathInpt.setAttribute("class", "invDeathInpt");
  

    const submitDivBtn = document.createElement("div");
    submitDivBtn.setAttribute("class", "submitDivBtn");

    const submitBtn = document.createElement("button");
    submitBtn.setAttribute("class", "submitBtn");
    submitBtn.textContent = "Submit!";
    submitDivBtn.appendChild(submitBtn);

    mainDiv.appendChild(invFirst);
    mainDiv.appendChild(invFirstInpt);
    mainDiv.appendChild(invLast);
    mainDiv.appendChild(invLastInpt);
    mainDiv.appendChild(invBirth);
    mainDiv.appendChild(invBirthInpt);
    mainDiv.appendChild(invDeath);
    mainDiv.appendChild(invDeathInpt);
    mainDiv.appendChild(submitDivBtn);

    body.prepend(mainDiv);
}

function createEventListeners () {
    const submitBtn = document.querySelector(".submitBtn");    
    submitBtn.addEventListener("click", getInpt);
};

function getInpt () {
    let inventor = {};

    let invFirst = document.querySelector(".invFirstInpt").value; 
    checkEmpty(invFirst)? alert('Invalid first name') : inventor.firstName = invFirst;
    
    let invLast = document.querySelector(".invLastInpt").value;     
    checkEmpty(invLast)? alert("Invalid last name.") : inventor.lastName = invLast;

    let invBirth = document.querySelector(".invBirthInpt").value;
        if (checkEmpty(invBirth)) {
            alert ("Invalid birth year");
        } else if (checkNumber(invBirth)) {
            inventor.birthYear = invBirth;
        };

    let invDeath = document.querySelector(".invDeathInpt").value; 
        if (checkEmpty(invDeath)) {
            alert ("Invalid decease year.");
        } else if (checkNumber(invDeath)) {
            inventor.birthYear = invDeath;
        };

    console.log(inventor);
    inventors.push(inventor);
    console.log(inventors);
}; 

function checkNumber (value) {
    if (typeof value === NaN) {
        return alert("Please enter a valid number!");
    } else return true;
}

function checkEmpty (value) {
    let empty = " ";
    if (empty || value.length == 0) return true;
};

