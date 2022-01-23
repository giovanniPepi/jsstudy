console.time();

let nn = 10; 

nextPrime: 
for (let i = 2; i <=nn; i++) { // 2
    for (let j = 2; j < i; j++) { // 2
        if (i % j === 0) continue nextPrime;
    }    
    console.log(i); 
}
console.timeEnd();