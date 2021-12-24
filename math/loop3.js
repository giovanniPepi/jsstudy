let h = 500; 
const paraLoop3 = document.createElement('p'); 

isPrime = (num) => {
    for (let h =2; h < num; h++) {
        if( num % h === 0) {
            return false;
        }
    }
    return true;
}

const sectionLoop3 = document.querySelector(".loop3");
sectionLoop3.appendChild(paraLoop3);