const WRONG_TEXT = 'INVALID INPUT';
const PLAYER_WIN = 'YOU WIN';
const COMPUTER_WIN = 'YOU LOST';
const DRAW = 'DRAW';

class RSP {
    constructor(choice) {
        this.choice = choice;
        this.playerScore = 0;
        this.computerScore = 0;
    }

    start() {
        const startBTN = document.querySelector('#start-btn');
        startBTN.addEventListener("click", () => {
            this.appendChoices();
            this.compareChoices()
        })
    }

    playersChoice() {
        const msg = prompt(
            `Make your choice! ${this.choice.join(", ")}?`,
            '').toUpperCase();

        return this.choice.filter(choice => Array.from(choice)[0] === Array.from(msg)[0])[0] || msg;
    }

    computersChoice() {
        const randomSelection = Math.random();
        if (randomSelection < 0.34) {
            return "ROCK";
        } else if (randomSelection < 0.67) {
            return "PAPER"
        } else {
            return "SCISSORS"
        }
    };

    appendChoices() {
        const prevPlayerChoice = document.querySelector(".playerChoice span");
        if (prevPlayerChoice !== null) prevPlayerChoice.remove();
        const playerSpan = document.createElement("span")
        const playerChoice = document.querySelector('.playerChoice');
        playerChoice.appendChild(playerSpan)
        playerSpan.appendChild(document.createTextNode(this.playersChoice()));

        const prevComputerChoice = document.querySelector(".computerChoice span");
        if (prevComputerChoice !== null) prevComputerChoice.remove();
        const computerSpan = document.createElement("span")
        const computerChoice = document.querySelector('.computerChoice');
        computerChoice.appendChild(computerSpan);
        computerSpan.appendChild(document.createTextNode(this.computersChoice()));
    };

    compareChoices() {
        let player = document.querySelector('.playerChoice').textContent;
        let computer = document.querySelector('.computerChoice').textContent;

        if (player === computer) {
            return DRAW
        } else if (
            (player === "ROCK" && computer === "SCISSORS") ||
            (player === "SCISSORS" && computer === "PAPER") ||
            (player === "PAPER" && computer === "ROCK")
        ) {
            this.playerScore++
            this.updatePlayerScore();
            return PLAYER_WIN;
        } else {
            this.computerScore++
            this.updateComputerScore();
            return COMPUTER_WIN
        }
    };

    updatePlayerScore(){
        const playerCount = document.querySelector('.playerCount');
        playerCount.innerHTML = this.playerScore;
    };

    updateComputerScore(){
        const computerCount = document.querySelector('.computerCount');
        computerCount.innerHTML = this.computerScore;
     }
}

const game = new RSP(["ROCK", "PAPER", "SCISSORS"]);
game.start();