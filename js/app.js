//step 1: define required variables
let board;
let turn;
let winner;
let tie;

//step 2: store cached element references
const squareEls = document.querySelectorAll(".sqr");
const messageEl = document.getElementById("message");
// console.log((messageEl.textContent = "hello"));
const player = {
  1: "X",
  "-1": "0",
};

//step 3: initialise game state and call function
const init = () => {
  board = ["", "", "", "", "", "", "", "", ""];
  turn = "1";
  winner = false;
  tie = false;
  render();
};

//step 4: update board and message
gameStatus = `${player[turn]}'s Turn`;
const render = () => {
  board.forEach((squareEl, idx) => {
    squareEls[idx].textContent = squareEl;
  });
  messageEl.textContent = gameStatus;
};
//step 5: define winningCombos
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

init();
