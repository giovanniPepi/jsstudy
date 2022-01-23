const primeInput = document.querySelector('#primeInput');  
const primeResult = document.querySelector('#primeResult');

let list3 = ''; 

isPrime = (num) => {
    for (let h =2; h < num; h++) {
        if( num % h === 0) {
            return false;
        }
    }
    return true;
};

primeInput.oninput = () => {
    let num = primeInput.value; 
    primeResult.textContent = `Output: `;
        while (num >= 2) {
        if (isPrime(num)) {
            list3 += ` ${num}`;
        } 
        num--;
    }
    primeResult.textContent += list3; 
    };
   

