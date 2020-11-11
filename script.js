const player = document.querySelector('.playerChoice');
const computer = document.querySelector('.computerChoice');
const startBTN = document.querySelector('#start-btn');
const playerCount = document.querySelector('.playerCount');
const computerCount = document.querySelector('.computerCount');

let playerScore = 0;
let computerScore = 0;

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const WRONG_TEXT= 'INVALID INPUT';
const PLAYER_WIN = 'YOU WIN';
const COMPUTER_WIN = 'YOU LOST';
const DRAW = 'DRAW';

startBTN.addEventListener('click', (event) => {
    event.preventDefault();

    /**
     * To get player's choice
     * @returns {string}
     * @constructor
     */
    const PLAYER_SELECTION = () => {
        const selection = prompt(
            `Make your choice! ${ROCK}, ${PAPER} or ${SCISSORS}?`,
            '').toUpperCase();

        if (selection !== ROCK
            &&
            selection !== PAPER
            &&
            selection !== SCISSORS) {
            console.log(WRONG_TEXT)
            return;
        }
        return selection;
    };

    /**
     * To get computer's choice
     * @returns {string}
     * @constructor
     */
    const COMPUTER_SELECTION = () => {
        const randomSelection = Math.random();
        if(randomSelection < 0.34) {
            return ROCK;
        } else if (randomSelection < 0.67) {
            return PAPER
        } else {
            return SCISSORS
        }
    };

    function updatePlayerScore(){
        playerCount.innerHTML = playerScore;
    };

    function updateComputerScore(){
        computerCount.innerHTML = computerScore;
    };
    /**
     * To get winner of the round
     * @param playerSelection
     * @param computerSelection
     * @returns {string}
     */
    const getWinner = (playerSelection, computerSelection) => {
        const playerChoice = document.createElement('h3');
        const computerChoice = document.createElement('h3');

        playerChoice.appendChild(document.createTextNode(playerSelection))
        computerChoice.appendChild(document.createTextNode(computerSelection))

        player.appendChild(playerChoice);
        computer.appendChild(computerChoice);

        if (playerSelection === computerSelection) {
            return DRAW
        } else if (
            (playerSelection === ROCK && computerSelection === SCISSORS) ||
            (playerSelection === SCISSORS && computerSelection === PAPER) ||
            (playerSelection === PAPER && computerSelection === ROCK)
        ) {
            playerScore++
            updatePlayerScore();
            return PLAYER_WIN;
        } else {
            computerScore++
            updateComputerScore();
            return COMPUTER_WIN
        }


        // playerSelection === computerSelection
        //     ? DRAW
        //     : (playerSelection === ROCK && computerSelection === SCISSORS) ||
        //     (playerSelection === SCISSORS && computerSelection === PAPER) ||
        //     (playerSelection === PAPER && computerSelection === ROCK)
        //     ? PLAYER_WIN
        //     : COMPUTER_WIN
    }

    console.log(getWinner(PLAYER_SELECTION(), COMPUTER_SELECTION()));

});