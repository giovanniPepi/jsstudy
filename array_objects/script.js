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

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];



createBaseHTML = () => {
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

    const lifetimeBtn = document.createElement("button");
    lifetimeBtn.setAttribute("class", "lifetimeBtn");
    lifetimeBtn.textContent = "Calculate total years lived";
    submitDivBtn.appendChild(lifetimeBtn);

    const seniorBtn = document.createElement("button");
    seniorBtn.setAttribute("class", "seniorBtn");
    seniorBtn.textContent = "Sort by seniority!";
    submitDivBtn.appendChild(seniorBtn);

    const peopleBtn = document.createElement("button");
    peopleBtn.setAttribute("class", "peopleBtn");
    peopleBtn.textContent = "Random people in alphabetical order";
    submitDivBtn.appendChild(peopleBtn);

    const dupBtn = document.createElement("button");
    dupBtn.setAttribute("class", "dupBtn");
    dupBtn.textContent = "Check duplicates in people list";
    submitDivBtn.appendChild(dupBtn);

    /*
    const aliveBirthBtn = document.createElement("button");
    aliveBirthBtn.setAttribute("class", "aliveBirthBtn");
    aliveBirthBtn.textContent = "Click for inventors alive in year: ";
    submitDivBtn.appendChild(aliveBirthBtn);

    const aliveInput = document.createElement("input")
    aliveInput.setAttribute("class", "aliveInput");
    aliveInput.value = "...year";
    submitDivBtn.appendChild(aliveInput); */

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
createEventListeners = () => {
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

    const lifetimeBtn = document.querySelector(".lifetimeBtn");
    lifetimeBtn.addEventListener("click", getLifetime);

    const seniorBtn = document.querySelector(".seniorBtn");
    seniorBtn.addEventListener("click", getSeniorInventor);

    const peopleBtn = document.querySelector(".peopleBtn");
    peopleBtn.addEventListener("click", getAlphaOrder);

    const dupBtn = document.querySelector(".dupBtn");
    dupBtn.addEventListener("click", checkDuplicate);
};

getInpt = () => {
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

checkEmpty = (value) => {
    let empty = " ";
    if (value === empty || value.length == 0) return true;
};

createResultHTML = () => {
    const resultDiv = document.querySelector(".resultDiv");    
    if (!resultDiv) {
        const resultDiv = document.createElement("div");
        resultDiv.setAttribute("class", "resultDiv");
        body.appendChild(resultDiv);
    }
};

getResultHeader = (resultName) => {
    const resultHeader = document.querySelector(".resultHeader");

    if (!resultHeader){
        const resultDiv = document.querySelector(".resultDiv");
        const resultHeader = document.createElement("p");
        resultHeader.setAttribute("class", "resultHeader");
        resultHeader.textContent = `${resultName}: `;
        resultDiv.prepend(resultHeader);
    };
}

getInventorBirth = () => {
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

getAscendingBirth = () => {
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

getDescendingBirth = () => {
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

getBornIn = () => {
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
};

getLifetime = () => {
    createResultHTML();

    resultDiv = document.querySelector(".resultDiv");
    resultDiv.innerHTML = "";

    const lifetime = inventors.reduce((total, inventor) => {
        return total + (inventor.deathYear - inventor.birthYear);
    }, 0)
    
    const yearP = document.createElement("p");
    yearP.textContent = `${lifetime} years lived in total.`;
    resultDiv.appendChild(yearP);
    getResultHeader("Total years lived by inventors: ")
};

getSeniorInventor = () => {
    createResultHTML();

    resultDiv = document.querySelector(".resultDiv");
    resultDiv.innerHTML = "";

    const oldest = inventors.sort((a, b) => {
        const current = a.deathYear - a.birthYear;
        const next = b.deathYear - b.birthYear;
        return current > next? -1 : 1;
    });
    for (senior of oldest) {
        const yearP = document.createElement("p")
        yearP.textContent = `${senior.firstName} ${senior.lastName}, ${senior.deathYear - senior.birthYear} years old.`;
        resultDiv.appendChild(yearP);
    }
  getResultHeader("Inventors by their age: ");
};

getAlphaOrder = () => {
    createResultHTML();
    resultDiv = document.querySelector(".resultDiv");
    resultDiv.innerHTML = "";

    const alpha = people.sort((lastOne, nextOne) => {
        const [aLast, aFirst] = lastOne.split (", "); //split done to str to compare last names 
        const [bLast, bFirst] = nextOne.split(", ");
        return aLast > bLast? 1:-1; //orders up based on last name alphab order;
    });
    for (let i = 0; i < alpha.length; i++){
        const yearP = document.createElement("p")
        yearP.textContent = alpha[i];
        resultDiv.appendChild(yearP);
    };
    getResultHeader("People by alphabetical order: ")
    resultDiv = document.querySelector(".resultDiv");
    resultDiv.style.height = "auto";
};

checkDuplicate= () => {    
    createResultHTML();
    resultDiv = document.querySelector(".resultDiv");
    resultDiv.innerHTML = "";
    const countedList = people.reduce((obj, item) =>{
        if(!obj[item]) {
        obj[item] = 0; // starts the obj item in the first pass
    }
        obj[item]++;
        return obj;
    }, {});    
        const yearP = dkocument.createElement("p")
        yearP.textContent = (JSON.stringify(countedList, null, 2));
        resultDiv.appendChild(yearP);   

    getResultHeader("How many times each name appears: ")
    resultDiv = document.querySelector(".resultDiv");
    resultDiv.style.height = "auto";
}

createBaseHTML();
createEventListeners();