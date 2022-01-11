const pcTurn = pcPlay();
let justPlayed = null;

function pcPlay() {
    const turn = ['rock', 'paper', 'scissors'];
    const pcRand = Math.floor(Math.random() * turn.length);
    return (turn[pcRand]);   
};

function gamePlay (usrTurn, pcTurn) {
    console.log(usrTurn, pcTurn, typeof usrTurn, typeof pcTurn);
    if ((usrTurn != 'rock') && (usrTurn != 'paper') && (usrTurn != 'scissors')) {
            return(`Please type 'Rock', 'Paper' or 'Scissors' to play.`);
        } else if (usrTurn  == pcTurn) {
            return('It\'s a Draw!')
        } else if (pcTurn == 'scissors' && usrTurn  == 'paper') {
            return(`Nooo! You have lost, ${usrTurn} lose to ${pcTurn}`);
        } else if (pcTurn == 'paper' && usrTurn  == 'rock') {
            return(`You have lost, ${usrTurn} lose to ${pcTurn}`);
        } else if (pcTurn == 'rock' && usrTurn  == 'scissors') {
            return(`Nooo! You have lost, ${usrTurn} lose to ${pcTurn}!`);
        } else {
            return(`YEAH! You have won, ${usrTurn} beats ${pcTurn}!`)
        }
    };

function playThis (n) {
    const keyChoice = document.querySelector(`.keyChoice[data-key="${n.keyCode}"]`);
    if (keyChoice == null) return; // not a game key
    if (n.keyCode === justPlayed) return; // avoids CSS stuck when repeated input
    keyChoice.classList.add('playing');
    justPlayed = n.keyCode;
    console.log(gamePlay(keyChoice.id, pcPlay()));  
};

function removeTransition (n) {
    if(n.propertyName !== 'transform') return; /*is this necessary? */
    this.classList.remove('playing');
};

const choices = document.querySelectorAll('.keyChoice');
choices.forEach(choice => choice.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playThis);
window.addEventListener('keyup', () => justPlayed = null)
