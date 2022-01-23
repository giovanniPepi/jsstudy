const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather () {
    const choice = select.value;
    
    switch (choice) {
        case 'sunny': 
            para.textContent = 'It\'s sunny outside, wear sunscreen!'; 
            break;
        case 'rainy': 
            para.textContent = 'It\'s raining, please get an umbrella before you go';
            break;
        case 'snowing':
            para.textContent = 'It\'s snowing, be careful!'; 
            break; 
        case 'overcast':
            para.textContent = "It's cloudy, with a 30% possibility of raining today";
            break; 
        default: 
            para.textContent = ''; 
        }
    }