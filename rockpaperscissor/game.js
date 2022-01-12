const pcTurn = pcPlay();
let justPlayed = null;
const resultArea = document.querySelector(".resultArea")
const resultHistoryArea = document.querySelector(".resultHistoryArea");

function pcPlay() {
    const turn = ['rock', 'paper', 'scissors'];
    const pcRand = Math.floor(Math.random() * turn.length);
    return (turn[pcRand]);   
};

function gamePlay (usrTurn, pcTurn) {
    if ((usrTurn != 'rock') && (usrTurn != 'paper') && (usrTurn != 'scissors')) {
            return(`Please type 'Rock', 'Paper' or 'Scissors' to play.`);
        } else if (usrTurn  == pcTurn) {
            writeRound (usrTurn, pcTurn);
            return('It\'s a Draw!') 
        } else if (pcTurn == 'scissors' && usrTurn  == 'paper') {
            writeRound (usrTurn, pcTurn);
            return(`Nooo! You have lost, ${usrTurn} lose to ${pcTurn}`);
        } else if (pcTurn == 'paper' && usrTurn  == 'rock') {
            writeRound (usrTurn, pcTurn);
            return(`You have lost, ${usrTurn} lose to ${pcTurn}`);
        } else if (pcTurn == 'rock' && usrTurn  == 'scissors') {
            writeRound (usrTurn, pcTurn);
            return(`Nooo! You have lost, ${usrTurn} lose to ${pcTurn}!`);
        } else {
            writeRound (usrTurn, pcTurn);
            return(`YEAH! You have won, ${usrTurn} beats ${pcTurn}!`)
        }
    };

function playThis (n) {
    const keyChoice = document.querySelector(`.keyChoice[data-key="${n.keyCode}"]`);
    if (keyChoice == null) return; // not a game key
    if (n.keyCode === justPlayed) return; // avoids CSS stuck when repeated input
    keyChoice.classList.add('playing');
    justPlayed = n.keyCode;
    createResultDiv((gamePlay(keyChoice.id, pcPlay())));     
};

function removeTransition (n) {
    if(n.propertyName !== 'transform') return; /*is this necessary? */
    this.classList.remove('playing');
};

function createResultDiv (result) {
    const resultDiv = document.querySelector('.results')
    if (!resultDiv) {
        const resultDiv = document.createElement("div");
        resultDiv.setAttribute("class", "results");  
        resultDiv.textContent = result;
        resultArea.appendChild(resultDiv);        
    } else {
        resultDiv.textContent = result;
        archiveResult();
    };
};

function archiveResult () {
    const last = document.querySelector('#history');
    last.textContent = "Last results:";
    const historyDiv = document.createElement("div");
    const currentResult = document.querySelector('.results').textContent;

    historyDiv.setAttribute("class", "resultHistory");
    historyDiv.textContent = currentResult;
    resultHistoryArea.appendChild(historyDiv);    
};

function writeRound (usrTurn, pcTurn) {
    const header = document.querySelector(".header");
    const userResult = document.querySelector(".userPlay");
    const pcResult = document.querySelector(".pcPlay");

    if (!userResult) {
        const userResult = document.createElement("div");
        userResult.setAttribute("class", "userPlay");
        userResult.textContent = 'User pick: ' + usrTurn;
        header.appendChild(userResult);
    } else {
        userResult.textContent = 'User pick: '+ usrTurn;
    }

    if (!pcResult) {
        const pcResult = document.createElement("div");
        pcResult.setAttribute("class", "pcPlay");
        pcResult.textContent = 'Computer pick: ' + pcTurn;
        header.appendChild(pcResult);
    } else {
        pcResult.textContent = 'Computer pick: ' + pcTurn;
    }    
};

const choices = document.querySelectorAll('.keyChoice');
choices.forEach(choice => choice.addEventListener('transitionend', removeTransition));

const noClickArea = document.querySelectorAll(".userChoice");
noClickArea.forEach(click => click.addEventListener('click', () => alert("Please use the keys R, P or S to play.")));

window.addEventListener('keydown', playThis);
window.addEventListener('keyup', () => justPlayed = null)
