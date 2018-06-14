
function createEnemy(x, y) {
    return  {    
        x:x,
        y:y,
        width:22,
        height:22,
        colour: "#66ff66"
    };
}

function renderEnemy(context, anEnemy) {
    context.beginPath();
    context.rect(anEnemy.x, anEnemy.y, anEnemy.width, anEnemy.height);
    context.fillStyle = anEnemy.colour;
    context.fill();
}
