const paraNumber = document.querySelector('#numberResult');
const inputNumber = document.querySelector('#numberInput');

inputNumber.oninput = () => {
    paraNumber.textContent = 'Output: ';
    const num = inputNumber.value;
    input.value = ''; 
    for (let i = 1; i <= num; i++) {
        let sqRoot = Math.sqrt(i);
        if (Math.floor(sqRoot) !== sqRoot) {
            continue;
        }
        paraNumber.textContent += `${i} `;
    }
}
