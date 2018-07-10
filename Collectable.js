function createCollectable(x, y,color, points) {
    var collectable={
        img: new Image(),
        x:x,
        y:y,
        //r:5,
        points: points,
        color:color        
    }
    collectable.img.src = "images/starz.png";
    return  collectable;
}

function renderCollectable(context, aCollectable) {
    //context.strokeStyle = aCollectable.color;
    //context.lineWidth = 10;
    //context.beginPath();
    //context.arc(aCollectable.x,aCollectable.y, aCollectable.r, 2 * Math.PI, false);
    //context.stroke();
    if (aCollectable.points == 2) {
        context.drawImage(aCollectable.img,aCollectable.x,(aCollectable.y)-20,33,33);
    }  else {
    context.drawImage(aCollectable.img,aCollectable.x,(aCollectable.y)-20,25,25);
    }
    
}
