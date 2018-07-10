
function createEnemy(x, y) {
    var enemy = {  
        img: new Image(),  
        x:x,
        y:y,
        //width:22,
        //height:22,
        //colour: "#66ff66"
    }
    enemy.img.src = "images/Enemy.png";
    return enemy;
}

function renderEnemy(context, anEnemy) {
   // context.beginPath();
    //context.rect(anEnemy.x, anEnemy.y, anEnemy.width, anEnemy.height);
    //context.fillStyle = anEnemy.colour;
    //context.fill();
    context.drawImage(anEnemy.img, anEnemy.x,anEnemy.y, 22,22);
}
