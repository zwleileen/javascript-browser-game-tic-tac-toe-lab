//step 1: define required variables
let board;
let turn;
let winner;
let tie;
let gameStatus;

//step 2: store cached element references
const squareEls = document.querySelectorAll(".sqr");
const messageEl = document.getElementById("message");
// console.log((messageEl.textContent = "hello"));
const player = {
  1: "X", //1 is a number, X is a string
  "-1": "0",
};
// console.log(player[-1]); returns 0
// console.log(typeof player[1]); returns string

//step 3: initialise game state and call function
const init = () => {
  //similarly, this defines what init will do when called
  board = ["", "", "", "", "", "", "", "", ""];
  turn = 1; //set number 1, not string "1"
  winner = false;
  tie = false;
  render(); //here's where render actually gets called after we call init at the next line
};

// console.log(typeof turn); returns number
// console.log(player[turn]); returns X because turn is initialised as 1
// console.log(gameStatus);

//step 4: update board and message

//step 5: define winningCombos
const checkWinner = () => {
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
      return; //as soon as we find a winner, we exit function, instead of continuing to check all other combinations
    }
  }
};

const handleClick = (event) => {
  const idx = event.target.id; //assigns id of the target HTML element when an event happened
  if (board[idx] || winner) {
    return;
  } else {
    //exit function if board's square is filled or there is a winner
    board[idx] = player[turn];
  }
  checkWinner(); //checks if this move creates a winner
  if (winner) {
    gameStatus = `${winner} Wins`;
  } else {
    turn *= -1; //multiplies turn by -1 to switch players i.e. 1 becomes -1, -1 becomes 1
    gameStatus = `${player[turn]}'s Turn`;
  }
  render(); //update the display
};

const render = () => {
  //defines what render will do when called, but it is NOT called yet
  //declare render first before running it below
  board.forEach((squareEl, idx) => {
    squareEls[idx].textContent = squareEl;
  });
  messageEl.textContent = gameStatus;
};

squareEls.forEach((square) => {
  square.addEventListener("click", handleClick);
});

init(); //init is called here
