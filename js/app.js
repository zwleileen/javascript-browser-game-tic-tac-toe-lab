let board;
let turn;
let winner;
let tie;
let gameStatus;

const squareEls = document.querySelectorAll(".sqr");
const messageEl = document.getElementById("message");
const player = {
  1: "X", //notes: 1 is a number, X is a string
  "-1": "0",
};
// test: console.log(player[-1]); returns 0
// test: console.log(typeof player[1]); returns string

//notes: add reset button
const resetButton = document.createElement("button");
resetButton.textContent = "Reset";
resetButton.style.marginTop = "20px";
const boardElement = document.querySelector(".board");
boardElement.appendChild(resetButton);

//notes: initialise variables, when init is called at the end, init() will run, incl the render()
const init = () => {
  board = ["", "", "", "", "", "", "", "", ""];
  turn = 1; //set number 1, not string "1"
  winner = false;
  tie = false;
  gameStatus = "";
  render(); //notes: render() runs when init is called at the end
};

//notes: define winningCombos and call a winner
const checkWinner = () => {
  const winningCombos = [
    //notes: combinations that when filled with same X or 0 would make winningCombo
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningCombos.length; i++) {
    let combo = winningCombos[i]; //notes: loops through all winningCombos
    let a = board[combo[0]]; //notes: loops within entire row of winningCombo[i]
    let b = board[combo[1]];
    let c = board[combo[2]];

    if (a && a === b && a === c) {
      //notes: check that the entire row of winningCombo[i] is the same
      winner = a;
      return; //notes: as soon as we find a winner, we exit function, instead of continuing to check all other combinations
    }
  }
  if (!winner && !board.includes("")) {
    //notes: ! means not, so !winner means no winner, and since winner is false by default, !winner returns true
    tie = true;
  }
};

const handleClick = (event) => {
  const idx = event.target.id; //notes: assigns id (0 to 8) of the target HTML square element to idx when square is clicked
  if (board[idx] || winner) {
    return; //notes: exit the function if the board array has a value or there is a winner
  } else {
    board[idx] = player[turn]; //notes: mark X or 0 in the board array initiated above
  }
  checkWinner(); //notes: checks if clicking the square creates a winner by running the checkWinner()
  if (winner) {
    //notes: update gameStatus if there is winner
    gameStatus = `${winner} Wins`;
  } else if (tie) {
    gameStatus = `It's a Tie!`;
  } else {
    turn *= -1; //notes: multiplies turn by -1 to switch players i.e. 1 becomes -1, -1 becomes 1
    gameStatus = `${player[turn]}'s Turn`;
  }
  render(); //notes: runs render()
};

const handleReset = (event) => {
  init();
};

const render = () => {
  //notes: updates the visual display on HTML, defines what render will do when called, but it is NOT called yet
  board.forEach((squareEl, idx) => {
    squareEls[idx].textContent = squareEl; //notes: squareEl is the value in the board array, and we assign it to the square elements in HTML
  });
  messageEl.textContent = gameStatus;
};

squareEls.forEach((squareEl) => {
  squareEl.addEventListener("click", handleClick);
});
resetButton.addEventListener("click", handleReset);

init(); //init is called here
