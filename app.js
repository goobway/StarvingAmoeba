// listen for mouse event
canvas.addEventListener("mousemove", setMousePosition, false);
var canvasPos = getPosition(canvas);

function setMousePosition(e) {
    // assign current (x,y) position to mouseX and mouseY
    mouseX = e.clientX - canvasPos.x;
    mouseY = e.clientY - canvasPos.y;
}

function getPosition(el) {
    var xPosition = 0;
    var yPosition = 0;

    while (el) {
        xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
        yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
        el = el.offsetParent;
    }
    return {
        x: xPosition,
        y: yPosition
    };
}