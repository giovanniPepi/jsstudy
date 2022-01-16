const body = document.querySelector("body");
const inventors = [
    { firstName: 'Albert', lastName: 'Einstein', birthYear: 1879, deathYear: 1955 },
    { firstName: 'Isaac', lastName: 'Newton', birthYear: 1643, deathYear: 1727 },
    { firstName: 'Galileo', lastName: 'Galilei', birthYear: 1564, deathYear: 1642 },
    { firstName: 'Marie', lastName: 'Curie', birthYear: 1867, deathYear: 1934 },
    { firstName: 'Johannes', lastName: 'Kepler', birthYear: 1571, deathYear: 1630 },
    { firstName: 'Nicolaus', lastName: 'Copernicus', birthYear: 1473, deathYear: 1543 },
    { firstName: 'Max', lastName: 'Planck', birthYear: 1858, deathYear: 1947 },
    { firstName: 'Katherine', lastName: 'Blodgett', birthYear: 1898, deathYear: 1979 },
    { firstName: 'Ada', lastName: 'Lovelace', birthYear: 1815, deathYear: 1852 },
    { firstName: 'Sarah E.', lastName: 'Goode', birthYear: 1855, deathYear: 1905 },
    { firstName: 'Lise', lastName: 'Meitner', birthYear: 1878, deathYear: 1968 },
    { firstName: 'Hanna', lastName: 'Hammarström', birthYear: 1829, deathYear: 1909 }
];

createBaseHTML();
createEventListeners();

function createBaseHTML () {
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

    const getBirthBtn = document.createElement("button");
    getBirthBtn.setAttribute("class", "birthBtn");
    getBirthBtn.textContent = "List Birth Year";
    submitDivBtn.appendChild(getBirthBtn);

    const ascendingBirthBtn = document.createElement("button");
    ascendingBirthBtn.setAttribute("class", "ascendingBirthBtn");
    ascendingBirthBtn.textContent = "Ascending Birth Year";
    submitDivBtn.appendChild(ascendingBirthBtn);

    const descendingBirthBtn = document.createElement("button");
    descendingBirthBtn.setAttribute("class", "descendingBirthBtn");
    descendingBirthBtn.textContent = "Descending Birth Year";
    submitDivBtn.appendChild(descendingBirthBtn);


    const bornBirthBtn = document.createElement("button");
    bornBirthBtn.setAttribute("class", "bornBirthBtn");
    bornBirthBtn.textContent = "Check inventors born between 1820 and 1920.";
    submitDivBtn.appendChild(bornBirthBtn);

    const aliveBirthBtn = document.createElement("button");
    aliveBirthBtn.setAttribute("class", "aliveBirthBtn");
    aliveBirthBtn.textContent = "Click for inventors alive in year: ";
    submitDivBtn.appendChild(aliveBirthBtn);

    const aliveInput = document.createElement("input")
    aliveInput.setAttribute("class", "aliveInput");
    aliveInput.value = "...year";
    submitDivBtn.appendChild(aliveInput);

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

    const birthBtn = document.querySelector(".birthBtn")
    birthBtn.addEventListener("click", getInventorBirth);

    const ascendingBirthBtn = document.querySelector(".ascendingBirthBtn");
    ascendingBirthBtn.addEventListener("click", getAscendingBirth);

    const descendingBirthBtn = document.querySelector(".descendingBirthBtn");
    descendingBirthBtn.addEventListener("click", getDescendingBirth);

    const bornInBtn = document.querySelector(".bornBirthBtn");
    bornInBtn.addEventListener("click", getBornIn);
};

function getInpt () {
    let inventor = {};

    let invFirst = document.querySelector(".invFirstInpt").value;
    checkEmpty(invFirst)? console.log('invalidFirst') : inventor.firstName = invFirst;
    
    let invLast = document.querySelector(".invLastInpt").value;     
    checkEmpty(invLast)? console.log('invalidLast') : inventor.lastName = invLast;

    let invBirth = parseInt(document.querySelector(".invBirthInpt").value);
        if (isNaN(invBirth)) {
            console.log('Please enter a valid year.')
        } else {
            inventor.birthYear = invBirth;
        }

    let invDeath = parseInt(document.querySelector(".invDeathInpt").value); 
        if (isNaN(invDeath)) {
            console.log('Please enter a valid year.')
        } else {
            inventor.deathYear = invDeath;
        }

    if (invFirst && invLast && invBirth && invDeath){
        console.table(inventor);
        inventors.push(inventor);
        console.table(inventors);
    }  
}; 

function checkEmpty (value) {
    let empty = " ";
    if (value === empty || value.length == 0) return true;
};

function createResultHTML () {
    const resultDiv = document.querySelector(".resultDiv");    
    if (!resultDiv) {
        const resultDiv = document.createElement("div");
        resultDiv.setAttribute("class", "resultDiv");
        body.appendChild(resultDiv);
    }
};

function getInventorBirth () {
    createResultHTML();    
    const resultDiv = document.querySelector(".resultDiv");
    resultDiv.innerHTML = "";  
    
    for (inventor of inventors) {
        const yearP = document.createElement("p");
        yearP.textContent = `${inventor.firstName} ${inventor.lastName}: ${inventor.birthYear}`
        resultDiv.appendChild(yearP);        
    };
    getResultHeader("Inventor's birth year: ");
}

function getAscendingBirth () {
    createResultHTML(); 
    const resultDiv = document.querySelector(".resultDiv");
    resultDiv.innerHTML = "";

    const ordered = inventors.sort((a,b) =>  a.birthYear > b.birthYear? 1 : -1);

    for (inventor of ordered) {
        const yearP = document.createElement("p");
        yearP.textContent = `${inventor.firstName} ${inventor.lastName}: ${inventor.birthYear}`
        resultDiv.appendChild(yearP);
    }
    getResultHeader("Inventors by birth year: ");
};

function getDescendingBirth () {
    createResultHTML(); 
    const resultDiv = document.querySelector(".resultDiv");
    resultDiv.innerHTML = "";

    const ordered = inventors.sort((a,b) =>  a.birthYear < b.birthYear? 1 : -1);
    // 1 puts the object on top, while -1 on bottom of the list;

    for (inventor of ordered) {
        const yearP = document.createElement("p");
        yearP.textContent = `${inventor.firstName} ${inventor.lastName}: ${inventor.birthYear}`
        resultDiv.appendChild(yearP);
    }
    getResultHeader("Inventors by descending birth year: ");
};

function getBornIn () {
    createResultHTML();

    const resultDiv = document.querySelector(".resultDiv");
    resultDiv.innerHTML = "";

    const born = inventors.filter(inventor => (inventor.birthYear >=1820 && inventor.birthYear <= 1920));
    
    for (inventor of born) {
        const yearP = document.createElement("p");
        yearP.textContent = `${inventor.firstName} ${inventor.lastName}`;
        resultDiv.appendChild(yearP);
    }
    getResultHeader("Inventors born between 1820 and 1920");
}

function getResultHeader (resultName) {
    const resultHeader = document.querySelector(".resultHeader");

    if (!resultHeader){
        const resultDiv = document.querySelector(".resultDiv");
        const resultHeader = document.createElement("p");
        resultHeader.setAttribute("class", "resultHeader");
        resultHeader.textContent = `${resultName}: `;
        resultDiv.prepend(resultHeader);
    };
}