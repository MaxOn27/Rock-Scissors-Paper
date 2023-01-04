import {utilities} from "./utils.js";

const WRONG_TEXT = 'INVALID INPUT';
const PLAYER_WIN = 'YOU WIN';
const COMPUTER_WIN = 'YOU LOST';
const DRAW = 'DRAW';
const utils = new utilities();

class RSP {
    constructor(choice) {
        this.choice = choice;
        this.playerScore = 0;
        this.computerScore = 0;
    }

    start() {
        const startBTN = document.querySelector('#start-btn');
        startBTN.addEventListener("click", () => {
            utils.setChoice(".playerChoice", this.playersChoice);
            utils.setChoice(".computerChoice", this.computersChoice);
            this.compareChoices();
        })
    }

    playersChoice() {
        const msg = prompt(
            // `Make your choice! ${this.choice.join(", ")}?`,
            `Make your choice! ROCK, PAPER, SCISSORS?`,
            '').toUpperCase();

        // return this.choice.filter(choice => Array.from(choice)[0] === Array.from(msg)[0])[0] || msg;
        return ["ROCK", "PAPER", "SCISSORS"].filter(choice => Array.from(choice)[0] === Array.from(msg)[0])[0] || msg;
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

const rsp = new RSP(["ROCK", "PAPER", "SCISSORS"]);
rsp.start();