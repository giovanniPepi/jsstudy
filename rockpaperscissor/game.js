function playGame () {
    const usrTurn = prompt('Choose Rock, Paper or Scissors').toLowerCase();
    const pcTurn = pcPlay();

    function pcPlay() {
        const turn = ['rock', 'paper', 'scissors'];
        const pcRand = Math.floor(Math.random() * turn.length);
        return (turn[pcRand]);   
    } 
    function playTurn (usrTurn, pcTurn) {
        if ((usrTurn != 'rock') && (usrTurn != 'paper') && 
        (usrTurn != 'scissors')) {
            return(`Please type 'Rock', 'Paper' or 'Scissors' to play.`);
        } else if (usrTurn  == pcTurn) {
            return('Draw!')
        } else if (pcTurn == 'scissors' && usrTurn  == 'paper') {
            return(`You lose! ${pcTurn} beats ${usrTurn}.`);
        } else if (pcTurn == 'paper' && usrTurn  == 'rock') {
            return(`You lose! ${pcTurn} beats ${usrTurn}.`);
        } else if (pcTurn == 'rock' && usrTurn  == 'scissors') {
            return(`You lose! ${pcTurn} beats ${usrTurn}.`);
        } else {
            return(`${usrTurn} beats ${pcTurn}. You win!`)
        }
    }
console.log(playTurn(usrTurn, pcTurn));
}
playGame();
playGame();
playGame();
playGame();
playGame();

