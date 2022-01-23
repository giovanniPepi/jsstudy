const output = document.querySelector('.output');
output.innerHTML = '';

let i3 = 10;

while (i3 >= 0) {
    if (i3 === 10) {
        const para2 = document.createElement('p');
        para2.textContent = 'Countdown to 10!';
        output.appendChild(para2);
    } else if (i3 === 0) {
        const para2 = document.createElement('p');
        para2.textContent = 'Blast off!';
        output.appendChild(para2);
    } else {
        const para2 = document.createElement('p');
        para2.textContent = `${i3}`;
        output.appendChild(para2);
    }
    i3--;
}

