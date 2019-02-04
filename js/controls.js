let globalSetting = {};

for (let k = 0; k !== 1; k++) {
    let playerOption = document.getElementsByClassName("player not-chosen");
    let levelOption = document.getElementsByClassName("level not-chosen");

    for (let i = 0; i < playerOption.length; i++) {
        playerOption[i].onclick = function () {
            let chosen = document.getElementsByClassName("player chosen");
            if (chosen.length > 0) {
                chosen[0].className = chosen[0].className.replace("chosen", "not-chosen");
                this.className = this.className.replace("not-chosen", "chosen");
            } else {
                this.className = this.className.replace("not-chosen", "chosen");
            }
        }
    }


    for (let i = 0; i < levelOption.length; i++) {
        levelOption[i].onclick = function () {
            let chosen = document.getElementsByClassName("level chosen");
            if (chosen.length > 0) {
                chosen[0].className = chosen[0].className.replace("chosen", "not-chosen");
                this.className = this.className.replace("not-chosen", "chosen");
            } else {
                this.className = this.className.replace("not-chosen", "chosen");
            }
        }
    }

    document.getElementsByClassName("start")[0].onclick = function () {
        let boardSize = document.getElementsByClassName("board-size-input")[0].value;
        let chosenPlayer = document.getElementsByClassName("player chosen")[0];
        let chosenLevel = document.getElementsByClassName("level chosen")[0];

        if (boardSize.indexOf(".") === -1) {
            if (boardSize !== "" && typeof boardSize !== "undefined") {
                boardSize = parseInt(boardSize);
                if (boardSize < 3 || boardSize > 10) {
                    alert("Choose board size between 3 and 10!")
                } else {
                    if (typeof chosenLevel !== "undefined" && typeof chosenPlayer !== "undefined") {
                        chosenPlayer = chosenPlayer.innerHTML;
                        chosenLevel = chosenLevel.innerHTML;

                        let bot = new Bot(chosenLevel);
                        globalSetting.game = new Game(chosenPlayer, boardSize, bot);

                        bot.play(globalSetting.game);

                        Game.start();
                    } else alert("You must choose your player and opponent level before starting the game!");
                }
            } else alert("You must choose board size before starting the game!")
        } else alert("Do you really want to see a fraction size of field?")
    }
}
