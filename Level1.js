window.alert("Welcome to Space Adventures! Collect stars and advance to the next level. Larger stars are worth double points! Collect hearts to gain health. Use the arrow keys to navigate the player. Be careful of the monsters, you'll lose lives. Good Luck!" );
function initLevel1(aPlayer, level2) {
    var newLevel = {
        background: new Image(800, 480),
        enemies: [
            createEnemy(600, 226),
            createEnemy(55, 226),            
        ],
        ledges: [
            createLedge(0, 800, 388),
            createLedge(0, 150, 325),
            createLedge(250, 700, 325),
            createLedge(500, 800, 250),
            createLedge(0, 400, 250),
            createLedge(0, 50, 175),
            createLedge(200, 250, 175),
            createLedge(350, 500, 175),
            createLedge(0, 150, 100),
            createLedge(500, 600, 100),
            createLedge(700, 800, 100)
        ],
        collectables: [
            createCollectable(300, 360,"#0061ff", 2),
            createCollectable(250, 360,"#66ffff", 1),
            createCollectable(450, 360,"#66ffff", 1),
            createCollectable(550, 360,"#66ffff", 1),
            createCollectable(750, 360,"#0061ff", 2),
            createCollectable(200, 360,"#66ffff", 1),
            createCollectable(400, 295,"#66ffff", 1),
            createCollectable(100, 295,"#66ffff", 1),    
            createCollectable(200, 295,"#66ffff", 1),
            createCollectable(300, 225,"#66ffff", 1),
            createCollectable(730, 225,"#66ffff", 1),
            createCollectable(100, 225,"#66ffff", 1),    
            createCollectable(400, 145,"#0061ff", 2),
            createCollectable(220, 145,"#0061ff", 1),
            createCollectable(750, 76,"#0061ff", 2),
            createCollectable(750, 76,"#0061ff", 2),
            createCollectable(600, 76,"#0061ff", 2),
            createCollectable(50, 76,"#0061ff", 2)
        ],
        healths:[
            createHealth(700, 225)
        ],

          player: aPlayer,
          nextLevel: level2,
          maxPoints: 25

    }
    resetPlayerPosition(aPlayer);
    newLevel.background.src = "images/space1.jpg";
    return newLevel;
}