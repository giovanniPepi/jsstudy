const container = document.querySelector("#container");

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is a glorious text-content!';
container.appendChild(content);

const para = document.createElement('p');
para.style.color = ('red');
para.textContent = "REEEEEEEEEEEEEED";
container.appendChild(para);

const h3Text = document.createElement("h3");
h3Text.textContent = "I'm blue hu3!";
h3Text.setAttribute('style', 'color: blue', 'background: green');
container.appendChild(h3Text);

const div3 = document.createElement("div");
const divh1 = document.createElement("h1");
const divp1 = document.createElement("p");
div3.setAttribute("style", "background: pink; border: 10px solid black; padding:2rem");
div3.appendChild(divh1);
div3.appendChild(divp1);
divh1.textContent="Bitch I'm a div";
divp1.textContent="me too!";

container.appendChild(div3);

const clickMeBtn = document.querySelector("#clickMeBitch");
function youClicked () {
    alert("YOU DID IT! FOOL!");
}

clickMeBtn.addEventListener("click", youClicked);
clickMeBtn.addEventListener("click", function(e) {
    console.log(e.target);
})
clickMeBtn.addEventListener("click", function(element) {
    element.target.style.background = "blue";
});

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    })
});

const pirateCopy = document.querySelector("#pirate");
pirateCopy.addEventListener("copy", () => {
    navigator.clipboard.writeText("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    alert("Wait. That's Illegal.");
})

const annoyingMouse = document.querySelector("#mouseOver");
annoyingMouse.addEventListener("mouseover", (element) => {
    element.target.style.background = "red";
    alert("You have entered restricted air space. Leave now.");    
});


const divs = document.querySelectorAll('div');

function logText(e) {
    console.log(this.classList.value);
    e.stopPropagation();
}

divs.forEach(div => div.addEventListener('click', logText, {capture: false,
once:true
}));