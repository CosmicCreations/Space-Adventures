function createHealth(x, y) {
    var heart =  {  
        img: new Image(),  
        x:x,
        y:y,
        //r:6,
    }
    heart.img.src = "images/Heart.png";
    return heart;
}

function renderHealth(context, aHealth) {
    //context.strokeStyle = "#ff1000";
    //context.lineWidth = 10;
    //context.beginPath();
    //context.arc(aHealth.x,aHealth.y, aHealth.r, 2 * Math.PI, false);
    //context.fillStyle = "#ff1000";
    //context.fill();
    //context.stroke();
    context.drawImage(aHealth.img, aHealth.x, aHealth.y-15,25,25)
}
