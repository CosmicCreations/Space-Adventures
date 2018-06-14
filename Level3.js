function initLevel3(aPlayer, level4) {
    console.log("level: 3");
    var newLevel = {
        background: new Image(800, 480),
        enemies: [
            createEnemy(500, 362),
            createEnemy(200, 362),
            createEnemy(300, 300),
            createEnemy(0, 300),
            createEnemy(700, 226),
            createEnemy(500, 226),
            createEnemy(150,155),
            createEnemy(760,155),
            createEnemy(250,76),
            createEnemy(500,76),
            createEnemy(610,76)    
        ],
        ledges: [
            createLedge(0, 800, 388),
            createLedge(0, 130, 325),
            createLedge(300, 500, 325),
            createLedge(600, 800, 325),
            createLedge(0, 100, 250),
            createLedge(400, 800, 250),
            createLedge(60, 210, 175),
            createLedge(300, 400, 175),
            createLedge(700, 800, 175),
            createLedge(150, 350, 100),
            createLedge(450, 650, 100)
        ],
        collectables: [
            createCollectable(300, 360,"#0061ff", 2),
            createCollectable(250, 360,"#66ffff", 1),
            createCollectable(140, 360,"#66ffff", 1),
            createCollectable(450, 360,"#66ffff", 1),
            createCollectable(550, 360,"#66ffff", 1),
            createCollectable(750, 360,"#0061ff", 2),
            createCollectable(100, 295,"#0061ff", 2),
            createCollectable(400, 295,"#66ffff", 1),
            createCollectable(750, 295,"#0061ff", 2),    
            createCollectable(30, 225,"#66ffff", 1),
            createCollectable(200, 225,"#0061ff", 2),
            createCollectable(600, 225,"#66ffff", 1),    
            createCollectable(715, 145,"#66ffff", 1),
            createCollectable(300, 145,"#66ffff", 1),
            createCollectable(550, 76,"#66ffff", 1),
            createCollectable(700, 76,"#66ffff", 1),
            createCollectable(200, 76,"#0061ff", 2),
            createCollectable(10, 76,"#0061ff", 2)
        ],
        healths: [
            createHealth(400, 225),
            createHealth(300, 225)
        ],
        
        player: aPlayer,
        nextLevel: level4,
        maxPoints: 75
    }
    resetPlayerPosition(aPlayer);
    newLevel.background.src = "images/space3.jpg";
    return newLevel;
}