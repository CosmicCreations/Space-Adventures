function createLife(num) {
    return  {    
        num:num,
    };
}

function decreaseLife(aLife){
    aLife.num --;
}

function increaseHealth(aLife){
    aLife.num ++;
}

function checkGameOver(aLife, aController){
    if(aLife.num ==0){
        window.alert("Game Over! You died!");
        resetController(aController);
    }
}

function renderLife(context, aLife) {
    context.fillStyle = "#66ffff";
    context.font = "20px Comic Sans";
    context.fillText("Lives: " + aLife.num, 300, 20);

}