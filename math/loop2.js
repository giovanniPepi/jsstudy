const name1 = 'Mustafa'; 

const para3 = document.createElement('p');

const phonebook = [
    { name : 'Chris', number : '1549' },
    { name : 'Li Kang', number : '9634' },
    { name : 'Anne', number : '9065' },
    { name : 'Francesca', number : '3001' },
    { name : 'Mustafa', number : '6888' },
    { name : 'Tina', number : '4312' },
    { name : 'Bert', number : '7780' },
    { name : 'Jada', number : '2282' },
  ]

let b = 0;

while (b <= phonebook.length-1) {     
    if (phonebook[b].name === name1) {
        let phone = phonebook[b].number;
        para3.textContent = `${name1}'s number: ${phone}`;      
        console.log(phonebook[b].name);  
        break;
    };
    b++;
}

const section = document.querySelector('section');
section.appendChild(para3);
