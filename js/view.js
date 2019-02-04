let viewSetting = {};

viewSetting.controlsVisible = true;

viewSetting.currentView = "";

function createGameBoard() {
    let rows = [];
    let cells = [];

    for (let i = 0; i < globalSetting.game.boardSize; i++) {
        rows[i] = document.createElement("div");
        rows[i].className = "row"
    }

    for (let j = 0; j < Math.pow(globalSetting.game.boardSize, 2); j++) {
        cells[j] = document.createElement("div");
        cells[j].className = "cell";
    }
    let k = 0;
    for (let i = 0; i < globalSetting.game.boardSize; i++) {
        for (let j = 0; j < globalSetting.game.boardSize; j++, k++) {
            rows[i].appendChild(cells[k]);
        }
    }
    return rows;
}

function showGameBoard() {
    if (viewSetting.controlsVisible) {
        document.getElementsByClassName("controls-container")[0].hidden = true;
        viewSetting.controlsVisible = false;
        let gameBoardContainer = document.getElementsByClassName("game-board-container")[0];
        createGameBoard().map(row => gameBoardContainer.appendChild(row));
    }
}