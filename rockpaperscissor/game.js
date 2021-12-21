function playGame () {
    const usrChoice = prompt('Choose Rock, Paper or Scissors').toLowerCase();
    const cpuChoice = cpuPlay();

    function cpuPlay() {
        const plays = ['rock', 'paper', 'scissors'];
        const cpuRand = Math.floor(Math.random() * plays.length);
        return (plays[cpuRand]);   
    } 
 
    function playRound (usrChoice, cpuChoice) {
        if ((usrChoice != 'rock') && (usrChoice != 'paper') && (usrChoice != 'scissors') ){
            return(`Please type: 'Rock', 'Paper' or 'Scissors' to play.`);
        } else if (usrChoice  == cpuChoice) {
            return('Draw!')
        } else if (cpuChoice == 'scissors' && usrChoice  == 'paper') {
            return(`You lose! ${cpuChoice} beats ${usrChoice}.`);
        } else if (cpuChoice == 'paper' && usrChoice  == 'rock') {
            return(`You lose! ${cpuChoice} beats ${usrChoice}.`);
        } else if (cpuChoice == 'rock' && usrChoice  == 'scissors') {
            return(`You lose! ${cpuChoice} beats ${usrChoice}.`);
        } else {
            return(`${usrChoice} beats ${cpuChoice}. You win!`)
        }
    }
console.log(playRound(usrChoice, cpuChoice));
}

playGame();
playGame();
playGame();
playGame();
playGame();

