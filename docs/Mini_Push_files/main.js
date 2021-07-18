var Engine = null;
var Game = null;
var Utils = null;

function findGameLevel() {
    var level = 1;
    for (var i = 1; i <= 27; i += 1) {
        if (Game.dataLevels[i] == "cleared") {
            level = i;
        }
    }
    return level;
}

function startGame() {
    Engine = document.getElementById("gameFrame").contentWindow.Engine;
    Game = document.getElementById("gameFrame").contentWindow.Game;
    Utils = document.getElementById("gameFrame").contentWindow.Utils;

    Game.SINGLE_CONTROL = true;

    Engine.System.run();    
}

window.onload = startGame;