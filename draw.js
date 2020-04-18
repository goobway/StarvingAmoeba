function startGame() {
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
}


// var drawModule = function() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     var food = function(num, radius, maxX, maxY) {
//         for (var i = 0; i <= num; i++) {
//             ctx.beginPath();
//             var randomX = Math.random(i) * maxX;
//             var randomY = Math.random(i) * maxY;
//             ctx.arc(randomX, randomY, radius, 0, 2 * Math.PI);
//             ctx.fillStyle = "blue";
//             ctx.fill();
//             ctx.closePath();
//         }
//     }
//     food(20, 5, 720, 480);

//     var scoreBoard = function() {
//         // player score banner
//         ctx.fillStyle = "black";
//         ctx.fillRect(0, 0, 720, 48);
//         // player score text
//         ctx.fillStyle = "white";
//         ctx.font = "16pt sans-serif";
//         ctx.fillText("Score: " + score, 16, 32);
//     }
//     scoreBoard();

//     var amoeba = function() {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         // amoeba
//         ctx.beginPath();
//         ctx.arc(centerX + deltaX, centerY + deltaY, 16, 0, 2 * Math.PI);
//         ctx.fillStyle = "green";
//         ctx.fill();
//         ctx.strokeStyle = "green";
//         ctx.stroke();
//         ctx.closePath();
//     }
//     drawModule.amoeba = amoeba;
// }

// drawModule();