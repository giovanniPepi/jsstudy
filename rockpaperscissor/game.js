const pcTurn = pcPlay();
let justPlayed = null;
let usrScore = 0;
let pcScore = 0; 
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
            ++usrScore;
            ++pcScore;
            return(`It\'s a Draw! You choose ${usrTurn}, computer chooses ${pcTurn} too.`); 
        } else if (pcTurn == 'scissors' && usrTurn  == 'paper') {
            writeRound (usrTurn, pcTurn);
            ++pcScore;
            return(`Nooo! You have lost, you choose ${usrTurn}, computer chooses ${pcTurn}.`);
        } else if (pcTurn == 'paper' && usrTurn  == 'rock') {
            writeRound (usrTurn, pcTurn);
            ++pcScore;
            return(`Noo! You have lost, you choose ${usrTurn}, computer chooses ${pcTurn}.`);
        } else if (pcTurn == 'rock' && usrTurn  == 'scissors') {
            writeRound (usrTurn, pcTurn);
            ++pcScore;
            return(`Nooo! You have lost, you choose ${usrTurn}, computer chooses ${pcTurn}.`);
        } else {
            writeRound (usrTurn, pcTurn);
            ++usrScore;
            return(`YEAH! You have won, you choose ${usrTurn}, computer chooses ${pcTurn}.`)
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

function writeRound () {
    const header = document.querySelector(".header");
    const userResult = document.querySelector(".userPlay");
    const pcResult = document.querySelector(".pcPlay");

    if (!userResult) {
        const userResult = document.createElement("div");    
        userResult.setAttribute("class", "userPlay");
        userResult.textContent = 'User score: ' + usrScore;
        header.appendChild(userResult);

    } else {
        userResult.textContent = 'User score: ' + usrScore;
    };

    if (!pcResult) {
        const pcResult = document.createElement("div");
        pcResult.setAttribute("class", "pcPlay");
       
        pcResult.textContent = 'Computer score: ' + pcScore;
        header.appendChild(pcResult);
    } else {
        pcResult.textContent = 'Computer score: ' + pcScore;
    }    
};

const choices = document.querySelectorAll('.keyChoice');
choices.forEach(choice => choice.addEventListener('transitionend', removeTransition));

const noClickArea = document.querySelectorAll(".userChoice");
noClickArea.forEach(click => click.addEventListener('click', () => alert("Please use the keys R, P or S to play.")));

window.addEventListener('keydown', playThis);
window.addEventListener('keyup', () => justPlayed = null)


