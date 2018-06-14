function createCollectable(x, y,color, points) {
    return  {    
        x:x,
        y:y,
        r:5,
        points: points,
        color:color
    };
}

function renderCollectable(context, aCollectable) {
    context.strokeStyle = aCollectable.color;
    context.lineWidth = 10;
    context.beginPath();
    context.arc(aCollectable.x,aCollectable.y, aCollectable.r, 2 * Math.PI, false);
    context.stroke();
}
