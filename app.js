window.addEventListener("keydown", moveAmoeba, false);

function moveAmoeba(e) {
    switch (e.keyCode) {
        case 37:
            // left key pressed
            deltaX -= 2;
            break;
        case 38:
            // up key pressed
            deltaY -= 2;
            break;
        case 39:
            // right key pressed
            deltaX += 2;
            break;
        case 40:
            // down key pressed
            deltaY += 2;
            break;
    }
    // prevent browser from using default events
    e.preventDefault();
    // redraw triangle after a key is pressed
    var draw = drawModule();
    draw.amoeba();
}