const result = document.querySelector('#result'); 

calc = () => {
    for (let i =1; i<20; i++) {
        const newResult = `${i} x ${i} = ${i*i}`;
        result.textContent += `${newResult}\n`;
    }
    result.textContent += '\n.. finished!\n';
}

const calcBtn = document.querySelector('#calc');
calcBtn.addEventListener('click', calc); 
