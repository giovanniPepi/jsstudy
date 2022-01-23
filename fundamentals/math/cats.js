const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 
    'Caracal', 'Lion', 'Domestic', 'Luke']; 
const catResult = document.querySelector('#result');

catify = () => {
for (let i = 0; i< cats.length; i++) {
    const newCat = `${cats[i]} is a good cat.`;
    catResult.textContent += `${newCat}\n`;
}
};
const catBtn = document.querySelector('#cats');
catBtn.addEventListener('click', catify);