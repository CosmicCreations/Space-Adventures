
function createLedge(ax, bx, y) {
    return  {    
        ax:ax,
        bx:bx, 
        y:y,
        colour:"#00ffc5"
    };
}

function renderLedge(context, aLedge) {
    context.strokeStyle = aLedge.colour;  
    context.lineWidth = 4;
    context.beginPath();
    context.moveTo(aLedge.ax, aLedge.y);
    context.lineTo(aLedge.bx, aLedge.y);
    context.stroke();
}