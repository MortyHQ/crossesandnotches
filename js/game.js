class Game {
    constructor(chosenPlayer, boardSize, bot) {
        this.player = chosenPlayer;
        this.bot = bot;
        this.boardSize = boardSize;

        // this.currentState = new State(boardSize);

        this.status = "start";
    }

    static start() {
        showGameBoard();
    }
}