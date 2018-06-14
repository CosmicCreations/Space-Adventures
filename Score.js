function createScore(points) {
    return  {    
        points: points,
    };
}

function increaseScore(aScore) {
    aScore.points ++;
}

function renderScore(context, aScore) {
    context.fillStyle = "#66ffff";
    context.font = "20px Comic Sans";
    context.fillText("Score: " + aScore.points, 100, 20);

}