const select = document.querySelector ('select');
const html = document.querySelector('html'); 
document.body.style.padding = '10px';


function update(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor; 
}

select.onchange = function () {
    const choice = select.value;

    switch(choice) {
        case 'white':
            update('white', 'black');
            break;

        case 'black':
            update('black', 'white');
            break;

        case "purple":
            update ('purple', 'white');
            break;

        case "yellow":
            update ('yellow', 'grey');
            break;
        
        case "green":
            update('green', 'orange');
            break;

    }
}
