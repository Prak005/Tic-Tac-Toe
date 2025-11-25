const board = document.querySelector(".game-board");
function createBoard() {
    board.innerHTML = "";
    for(let i=0; i<9; i++){
        const cell = document.createElement("button");
        cell.className = "cell";
        cell.dataset.index = i;
        cell.type = "button";
        board.appendChild(cell);
    }
}
createBoard();

