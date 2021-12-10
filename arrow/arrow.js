const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

// Ternary operator to add if/else to this function //
textBox.addEventListener('keydown', event => (event.key === 'z' | event.key === 'Z')? output.textContent = alert(`OH MY GOD! ARE YOU SERIOUSLY TRYING TO PRESS THE FUCKING LETTER Z???????? WHAT THE HELL ARE YOU EVEN THINKING? DO NOT FUCKING PRESS Z! THIS COULD LEAD TO TOTAL SYSTEM FAILURE!`) : output.textContent = `You pressed "${event.key}".`);

