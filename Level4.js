function initLevel4(aPlayer, level5) {
    var newLevel = {       
        background: new Image(800, 480),
        enemies: [      
        ],
        ledges: [
        ],
        collectables: [
        ],
        healths:[
        ],
        player: aPlayer,
        nextLevel: null,
        maxPoints: 1
    }
    resetPlayerPosition(aPlayer);
    newLevel.background.src = "images/space1.jpg";
    return newLevel;  
}