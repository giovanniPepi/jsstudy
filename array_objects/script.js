const body = document.querySelector("body");

getHTML();

function getHTML () {
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

