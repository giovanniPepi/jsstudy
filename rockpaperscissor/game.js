function game () {

    const playerSelection = prompt('Choose Rock, Paper or Scissors').toLowerCase();
    const computerSelection = computerPlay();

    function computerPlay() {
        const plays = ['rock', 'paper', 'scissors'];
        const computerRound = Math.floor(Math.random() * plays.length);
        return (plays[computerRound]);   
    } 

    function playRound (playerSelection, computerSelection) {
        if ((playerSelection != 'rock') && (playerSelection != 'paper') && (playerSelection != 'scissors') ){
            return(`Please type: 'Rock', 'Paper' or 'Scissors' to play.`);
        } else if (playerSelection  == computerSelection) {
            return('Draw!')
        } else if (computerSelection == 'scissors' && playerSelection  == 'paper') {
            return(`You lose! ${computerSelection} beats ${playerSelection}.`);
        } else if (computerSelection == 'paper' && playerSelection  == 'rock') {
            return(`You lose! ${computerSelection} beats ${playerSelection}.`);
        } else if (computerSelection == 'rock' && playerSelection  == 'scissors') {
            return(`You lose! ${computerSelection} beats ${playerSelection}.`);
        } else {
            return(`${playerSelection} beats ${computerSelection}. You win!`)
        }
}

console.log(playRound(playerSelection, computerSelection));

}

game();
game();
game();
game();
game();
