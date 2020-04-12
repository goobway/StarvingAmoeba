var drawModule = function() {

    var amoeba = function() {
        ctx.beginPath();
        ctx.arc(centerX + deltaX, centerY + deltaY, 16, 0, 2 * Math.PI);
        ctx.fillStyle = "green";
        ctx.fill();
        ctx.strokeStyle = "green";
        ctx.stroke();
    }
    amoeba();
    drawModule.amoeba = amoeba;

    var food = function(num, radius, maxX, maxY) {
        for (var i = 0; i <= num; i++) {
            ctx.beginPath();
            var randomX = Math.random(i) * maxX;
            var randomY = Math.random(i) * maxY;
            ctx.arc(randomX, randomY, radius, 0, 2 * Math.PI);
            ctx.fillStyle = "blue";
            ctx.fill();
            ctx.closePath();
        }
    }
    food(20, 5, 720, 480);

    var scoreBoard = function() {
        // player score banner
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, 720, 48);
        // player score text
        ctx.fillStyle = "white";
        ctx.font = "16pt sans-serif";
        ctx.fillText("Score: " + score, 16, 32);
    }
    scoreBoard();
}

drawModule();