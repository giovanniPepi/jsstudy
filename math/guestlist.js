const people = ['Chris', 'Colin', 'Anne', 'Terri', 'Phil', 'Lola',
'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: '; 
refused.textContent = 'Refused: ';

for (const person of people) {
    if (person === 'Phil' || person === 'Lola') {
        refused.textContent += `${person}, `; 
    } else {
        admitted.textContent += `${person}, `;
    }
}

refused.textContent = refused.textContent.slice(0, refused.textContent.length-2) + '.';
admitted.textContent = admitted.textContent.slice(0, admitted.textContent.length-2) + '.';