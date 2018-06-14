function createHealth(x, y) {
    return  {    
        x:x,
        y:y,
        r:6,
    };
}

function renderHealth(context, aHealth) {
    context.strokeStyle = "#ff1000";
    context.lineWidth = 10;
    context.beginPath();
    context.arc(aHealth.x,aHealth.y, aHealth.r, 2 * Math.PI, false);
    context.fillStyle = "#ff1000";
    context.fill();
    context.stroke();
}
