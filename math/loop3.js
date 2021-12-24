let h = 500; 
const paraLoop3 = document.createElement('p'); 
let list3 = '<ul>'; 

isPrime = (num) => {
    for (let h =2; h < num; h++) {
        if( num % h === 0) {
            return false;
        }
    }
    return true;
};

while (h >= 2) {
    if (isPrime(h)) {
        list3 += '<li>' + h + '</li>';
    } 
    h--;
}

list3 = list3 + '</ul';

const sectionLoop3 = document.querySelector("#loop3");
sectionLoop3.appendChild(paraLoop3);
document.getElementById('loop3').innerHTML = list3;
