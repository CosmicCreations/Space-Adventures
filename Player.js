// intialise player
function initPlayer() {
    var newPlayer = {
        jumping: true,
        width: 40,
        height: 40,
        x: 0,
        x_velocity: 0,
        y: 370,
        y_velocity: 0,
        score: createScore(0),
        life: createLife(3),
        isHit: false
    };

    newPlayer.controller = {
        left: false,
        right: false,
        up: false
    }

    return newPlayer;
}

function resetController(aController) {
    aController.left = false;
    aController.right = false;
    aController.up = false;
}

function resetPlayerPosition(aPlayer) {
    aPlayer.x = 0;
    aPlayer.y = 370;
}

//set up controls
function controlPlayer(aPlayer) {
    if (aPlayer.controller.up && aPlayer.jumping == false) {
        aPlayer.y_velocity -= 20;
        aPlayer.jumping = true;
    }

    if (aPlayer.controller.left) {
        aPlayer.x_velocity -= 0.5;
    }

    if (aPlayer.controller.right) {
        aPlayer.x_velocity += 0.5;
    }
}

function checkCollisions(aPlayer, ledges, collectables, healths, enemies) {
    for (var ledge of ledges) {
        //Check upward collision 
        if (
            aPlayer.y_velocity < 0
            && aPlayer.y > ledge.y
            && aPlayer.y < ledge.y + 12          //12 is margin of line 
            && aPlayer.x > ledge.ax - aPlayer.width
            && aPlayer.x < ledge.bx
        ) {
            aPlayer.y = ledge.y;
            aPlayer.y_velocity = 0;
        }
        //Check downward collision
        if (
            aPlayer.y_velocity > 0
            && aPlayer.y > ledge.y - aPlayer.height
            && aPlayer.y < ledge.y - aPlayer.height + 12
            && aPlayer.x > ledge.ax - aPlayer.width
            && aPlayer.x < ledge.bx) {
            aPlayer.jumping = false;
            aPlayer.y = ledge.y - aPlayer.height;
            aPlayer.y_velocity = 0;
        }
    }
    // if player is falling below floor line
    if (aPlayer.y > 392 - 16 - 32) {
        aPlayer.jumping = false;
        aPlayer.y = 392 - 16 - 32;
        aPlayer.y_velocity = 0;
    }

    // if player is going off the left of the screen
    if (aPlayer.x < 0) {
        aPlayer.x = 0;
    } else if (aPlayer.x > 760) {// if player goes past right boundary
        aPlayer.x = 760;
    }

    //COLLISION FOR COLLECTABLE - REMOVE COLLECTABLE, UPDATE SCORE
    for (var collectable of collectables) {
        if (aPlayer.x + aPlayer.width > collectable.x
            && aPlayer.x - aPlayer.width + 20 < collectable.x
            && aPlayer.y + aPlayer.height > collectable.y
            && aPlayer.y - 5 < collectable.y) {
            console.log("PICKED UP ITEM");
            var index = collectables.indexOf(collectable);
            collectables.splice(index, 1); {
                if (collectable.points == 1) {
                    increaseScore(aPlayer.score);
                }
                if (collectable.points == 2) {
                    increaseScore(aPlayer.score);
                    increaseScore(aPlayer.score);
                }
            }
        }
    }

    //COLLISION FOR HEALTH - REMOVE HEALTH, UPDATE HEALTH
    for (var health of healths) {
        if (aPlayer.x + aPlayer.width > health.x
            && aPlayer.x - aPlayer.width + 20 < health.x
            && aPlayer.y + aPlayer.height > health.y
            && aPlayer.y - 5 < health.y) {
            console.log("PICKED UP ITEM");
            var index = healths.indexOf(health);
            healths.splice(index, 1); 
            increaseHealth(aPlayer.life);            
        }
    }

    enemyCollision(aPlayer, enemies);
}

function enemyCollision(aPlayer, enemies) {
    if (aPlayer.isHit) return; //Return means the function exits here.

    for (var enemy of enemies) {
        if (aPlayer.x + aPlayer.width > enemy.x
            && aPlayer.x - aPlayer.width + 20 < enemy.x
            && aPlayer.y + aPlayer.height > enemy.y
            && aPlayer.y - 5 < enemy.y) {
            aPlayer.isHit = true;
            decreaseLife(aPlayer.life);
            checkGameOver(aPlayer.life);
            setTimeout(
                () => { clearHit(aPlayer) }, 1500 //lambdr function
            );
        }
    }
}

function clearHit(aPlayer) {
    aPlayer.isHit = false;
}


function updatePlayer(aPlayer, ledges, collectables, healths, enemies) {
    controlPlayer(aPlayer);

    aPlayer.y_velocity += 1.5;// gravity
    aPlayer.x += aPlayer.x_velocity;
    aPlayer.y += aPlayer.y_velocity;
    aPlayer.x_velocity *= 0.9;// friction
    aPlayer.y_velocity *= 0.9;// gravity

    checkCollisions(aPlayer, ledges, collectables, healths, enemies);
}

function renderPlayer(context, aPlayer) {
    //Player
    context.fillStyle = "#ebd6ff";// hex for red
    context.beginPath();
    context.rect(aPlayer.x, aPlayer.y, aPlayer.width, aPlayer.height);
    context.fill();

    //Score
    renderScore(context, aPlayer.score);
    renderLife(context, aPlayer.life);
}

function attachPlayerController(aPlayer) {
    var keylistener = function (event) {
        var key_state = (event.type == "keydown") ? true : false;
        switch (event.keyCode) {
            case 37:// left key
                aPlayer.controller.left = key_state;
                break;
            case 38:// up key
                aPlayer.controller.up = key_state;
                break;
            case 39:// right key
                aPlayer.controller.right = key_state;
                break;
        }
    }

    window.addEventListener("keydown", keylistener)
    window.addEventListener("keyup", keylistener);
}