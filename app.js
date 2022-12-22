const player = document.querySelector('.playerChoice');
const computer = document.querySelector('.computerChoice');
const startBTN = document.querySelector('#start-btn');
const playerCount = document.querySelector('.playerCount');
const computerCount = document.querySelector('.computerCount');

const WRONG_TEXT = 'INVALID INPUT';
const PLAYER_WIN = 'YOU WIN';
const COMPUTER_WIN = 'YOU LOST';
const DRAW = 'DRAW';

class RSP {
    constructor(choice) {
        this.choice = choice;
        this.player = " ";
        this.computer = " ";
        this.playerScore = 0;
        this.computerScore = 0;
    }

    start() {
        startBTN.addEventListener("click", () => {
            this.appendChoices();
            this.compareChoices()
        })
    }

    playersChoice() {
        return prompt(
            `Make your choice! ${this.choice.join(", ")}?`,
            '').toUpperCase();

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
        const playerChoice = document.createElement('h3');
        playerChoice.appendChild(document.createTextNode(this.playersChoice()));
        player.appendChild(playerChoice);

        this.player = playerChoice.innerText;

        const computerChoice = document.createElement('h3');
        computerChoice.appendChild(document.createTextNode(this.computersChoice()));
        computer.appendChild(computerChoice);

        this.computer = computerChoice.innerText;
    };

    compareChoices() {
        console.log(this.player);
        console.log(this.computer);
        if (this.player === this.computer) {
            return DRAW
        } else if (
            (this.player === "ROCK" && this.computer === "SCISSORS") ||
            (this.player === "SCISSORS" && this.computer === "PAPER") ||
            (this.player === "PAPER" && this.computer === "ROCK")
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
         playerCount.innerHTML = this.playerScore;
    };

    updateComputerScore(){
         computerCount.innerHTML = this.computerScore;
     }
}

const game = new RSP(["ROCK", "PAPER", "SCISSORS"]);
game.start();