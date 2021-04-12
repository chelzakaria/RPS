function computerPlay() {
    let tab = ['Rocket', 'Paper', 'Scissors'];

    let x = Math.floor(Math.random() * 3);

    return tab[x];

}

function play(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection;
    console.log(computer);
    let result = 'none';
    switch (player) {
        case "rocket":
            if (computer.toLowerCase() == "scissors")
                result = "Win";
            else
            if (computer.toLowerCase() == "paper")
                result = "Lose";
            else
                result = "Draw";
            break;
        case "paper":
            if (computer.toLowerCase() == "scissors")
                result = "Lose";
            else
            if (computer.toLowerCase() == "paper")
                result = "Draw";
            else
                result = "Win";
            break;
        case "scissors":
            if (computer.toLowerCase() == "scissors")
                result = "Draw";
            else
            if (computer.toLowerCase() == "paper")
                result = "Win";
            else
                result = "Lose";
            break;
    }
    return result;

}

// console.log(computerPlay());
//play('RoCket', computerPlay());

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerChoice;
        let result;
        do {
            playerChoice = prompt('Enter your choise : ');
            result = play(playerChoice, computerPlay());
        } while (result == 'none');

        if (result == 'Win')
            playerScore++;
        else if (result == 'Lose')
            computerScore++;

        console.log('player : ' + playerScore + ' computer : ' + computerScore);

    }
    if (playerScore > computerScore)
        alert('You won !');
    else if (playerScore < computerScore)
        alert('You lost!');
    else alert('Draw!');
}