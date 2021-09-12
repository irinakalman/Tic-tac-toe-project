
 function GameBoard () {
     /*
     let gameBoard = [].fill("", 9);
     */
    /*      Indexes
            C1|C2|C3
        R1    0,1,2,
        R2    3,4,5,
        R3    6,7,8
    */
    // this.gameBoard = [
    //     "x", "o", "x",
    //     "o", "o", "x",
    //     "x", "o", "o"
    // ];
    this.gameBoard = new Array(9).fill(null);
    this.round = 0; // max rounds 8
    this.xTurn = true; // true if it's X's turn, starts true. Flips every round.
    let player1 = "x";
    let player2 = "o";
    // let myButtons = '';
    // this.gameBoard.forEach((_, index) => myButtons += `<button id="c${index}" onclick="playerClicked(${index})"></button>`);
    // document.getElementById('board').innerHTML = myButtons;
 }

const gb = new GameBoard();

/*
    If a boolean is passed and it's true, we reset the board.
    For each cell of the board, we get the button's id based on the cell's index and we write
    on the innerHTML. We disable the button if it has a value.
*/
function render(initiateReset = false) {
    if (initiateReset) {
        gb.gameBoard = new Array(9).fill(null);
    }
    gb.gameBoard.forEach((cell, index) => {
        const button = document.getElementById(`c${index}`);
        button.innerHTML = cell ? cell : '';
        button.disabled = !!cell;
    });
}

render();

/*
    We take the index of the button that was clicked.
    We change the cell's value (based on index 0 to 8) to 'x' if it's X's turn or to 'o' if it's not.
    We flip the boolean in our GameBoard's xTurn.
    Finally, we render the board.
*/
function playerClicked(index) {
    const value = gb.xTurn ? 'x' : 'o';
    gb.gameBoard[index] = value;
    gb.xTurn = !gb.xTurn;
    const button = document.getElementById(`c${index}`);
    button.innerHTML = value;
    button.disabled = true;
}