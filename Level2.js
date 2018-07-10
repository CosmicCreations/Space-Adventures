function initLevel2(aPlayer, level3) {
    var newLevel = {
        background: new Image(800, 480),
        enemies: [
            createEnemy(250, 300),
            createEnemy(400, 226),
            createEnemy(740, 300),
            createEnemy(640, 151),
            createEnemy(700, 76),
            createEnemy(450, 76),
            createEnemy(200, 76)
        ],
        ledges: [
            createLedge(0, 800, 388),
            createLedge(250, 400, 325),
            createLedge(600, 800, 325),
            createLedge(0, 50, 325),
            createLedge(400, 800, 250),
            createLedge(70, 140, 250),
            createLedge(0, 40, 175),
            createLedge(500, 700, 175),
            createLedge(300, 450, 175),
            createLedge(70, 300, 100),
            createLedge(400, 800, 100)
        ],
        collectables: [
            createCollectable(200, 360,"#0061ff", 2),
            createCollectable(300, 360,"#66ffff", 1),
            createCollectable(400, 360,"#66ffff", 1),
            createCollectable(500, 360,"#66ffff", 1),
            createCollectable(600, 360,"#0061ff", 2),
            createCollectable(20, 295,"#66ffff", 1),
            createCollectable(300, 295,"#0061ff", 2),
            createCollectable(700, 295,"#66ffff", 1),
            createCollectable(660, 295,"#66ffff", 1),
            createCollectable(500, 295,"#66ffff", 1),
            createCollectable(150, 295,"#66ffff", 1),
            createCollectable(600, 225,"#66ffff", 1),
            createCollectable(695, 145,"#0061ff", 2),
            createCollectable(550, 145,"#0061ff", 2),
            createCollectable(400, 145,"#66ffff", 1),
            createCollectable(20, 76,"#0061ff", 2),  
            createCollectable(530, 76,"#0061ff", 2),
            createCollectable(650, 76,"#66ffff", 1)   
          ],

          healths:[
            createHealth(200, 250),
            createHealth(770, 67)
        ],
          player: aPlayer,
          nextLevel: level3,
          maxPoints: 50
    }
    console.log("level2");
    newLevel.background.src = "images/space2.jpg";
    return newLevel;
}