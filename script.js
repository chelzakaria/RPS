let computerTurn = false;
let clear = true;

function computerPlay() {
    let tab = ['rocket', 'paper', 'scissors'];

    let x = Math.floor(Math.random() * 3);
    Draw(tab[x], "computer");
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


let playerChoice;

function game() {
    let playerScore = 0;
    let computerScore = 0;
    clear = false;

    let result;
    do {
        result = play(playerChoice, computerPlay());
    } while (result == 'none');
    Draw(result, "score");
    if (result == 'Win')
        playerScore++;
    else if (result == 'Lose')
        computerScore++;


    document.getElementById('playerScore').textContent = parseInt(document.getElementById('playerScore').textContent, 10) + playerScore;
    document.getElementById('computerScore').textContent = parseInt(document.getElementById('computerScore').textContent, 10) + computerScore;


    setTimeout(() => {
            Clear();
        },
        1100);


}


let square = document.querySelectorAll('.square');

square.forEach(obj => {
    obj.addEventListener('click', () => {
        let result;
        let score = document.getElementById('score');
        if (obj.id.charAt(obj.id.length - 1) != 2 || !clear)
            return;
        let str = obj.id.substring(0, obj.id.length - 1);

        Draw(str, "person");
        playerChoice = str;
        computerTurn = true;
        game();


    })
});





function Draw(arg, player) {
    let txt
    let elm = document.createElement('img');
    elm.style.width = '100%';
    elm.style.height = '100%';
    elm.src = "images/" + arg + ".png";
    let result;
    if (player == "person")
        result = document.getElementById('player');
    else if (player == "computer")
        result = document.getElementById('computer');
    else if (player == "score") {

        switch (arg) {
            case "Lose":
                txt = document.createElement('P');
                txt.textContent = "Lose";
                txt.className = "text";
                document.getElementById('score').appendChild(txt);
                document.getElementById('score').style.background = "#810000";


                break;
            case "Win":
                txt = document.createElement('P');
                txt.textContent = "Win";
                txt.className = "text";
                document.getElementById('score').appendChild(txt);
                document.getElementById('score').style.background = "#206a5d";
                break;
            case "Draw":
                txt = document.createElement('P');
                txt.textContent = "Draw";
                txt.className = "text";
                document.getElementById('score').appendChild(txt);
                document.getElementById('score').style.background = "#5eaaa8";
                break;
        }
        return;

    }
    if (result.innerHTML != '')
        return;
    result.appendChild(elm);
}

function Clear() {
    document.getElementById('player').innerHTML = '';
    document.getElementById('computer').innerHTML = '';
    document.getElementById('score').style.background = '';
    document.getElementById('score').innerHTML = '';
    clear = true;
}


console.log(document.getElementById('playerScore').textContent);