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
  board = ["X", "X", "X", "", "", "", "", "", ""];
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

//check if any winningCombo is achieved
for (let i = 0; i < winningCombos.length; i++) {
  let combo = winningCombos[i]; //loops through all winningCombos
  let a = board[combo[0]]; //loops within entire row of winningCombo[i]
  let b = board[combo[1]];
  let c = board[combo[2]];

  if (a && a === b && a === c) {
    //checks that the entire row of winningCombo[i] is the same
    winner = a; //
    gameStatus = `${winner} Wins`;
    return; //as soon as we find a winner, we exit function, instead of continuing to check all other combinations
  }
}

init();
