const dado = document.getElementById('input1');
const para = document.getElementById('result1');

function preço (num) {
    return num * num;
}

dado.onchange = function () {
    const num = parseFloat(dado.value);
    para.textContent = preço(num) + ' quadrado';
}