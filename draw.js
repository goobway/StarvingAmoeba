// hide the canvas before "start" is pressed
$(function() {
    $("#canvas").hide();
});

function startGame() {
    // when user clicks "start", show the canvas
    // draw on canvas
    $("#btn").hide();
    var timeleft = 3;
    var downloadTimer = setInterval(function() {
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML = "Go!";
        } else {
            document.getElementById("countdown").innerHTML = timeleft + "...";
        }
        timeleft -= 1;
    }, 1000);
    $("#start-menu").hide();
    $("#canvas").show();
    drawModule();
}

// draw the game
function drawModule() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // draw food in random locations
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

function amoebaUpdate() {
    // find position difference between mouse and amoeba
    deltaX = mouseX - xPosition;
    deltaY = mouseY - yPosition;
    // slow amoeba destination arrival time 
    xPosition += (deltaX / 30);
    yPosition += (deltaY / 30);
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    // draw amoeba
    ctx.beginPath();
    ctx.arc(xPosition, yPosition, 16, 0, 2 * Math.PI, true);
    ctx.fillStyle = "green";
    ctx.fill();

    requestAnimationFrame(amoebaUpdate);
}
amoebaUpdate();