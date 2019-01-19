var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var tank1 = new tank(100,100,"#0095DD");
var tank2 = new tank(500,500,"#FF0000");

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        tank1.dx = 1;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        tank1.dx = -1;
    }
    else if(e.key == "Up" || e.key == "ArrowUp") {
        tank1.dy = -1;
    }
    else if(e.keyCode == "Down" || e.key == "ArrowDown") {
        tank1.dy = 1;
    }
    if(e.keyCode == 68) {
        tank2.dx = 1
    }
    else if(e.keyCode == 65) {
        tank2.dx = -1
    }
    else if(e.keyCode == 87) {
        tank2.dy = -1
    }
    else if(e.keyCode == 83) {
        tank2.dy = 1
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        tank1.dx = 0;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        tank1.dx = 0;
    }
    else if(e.key == "Up" || e.key == "ArrowUp") {
        tank1.dy = 0;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        tank1.dy = 0;
    }
    if(e.keyCode == 68) {

        tank2.dx = 0;
    }
    else if(e.keyCode == 65){
        tank2.dx = -0;
    }
    else if(e.keyCode == 87){
        tank2.dy = 0;
    }
    else if(e.keyCode == 83){
        tank2.dy = 0;
    }
}

function setup() {

}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  tank1.draw();

  tank2.draw();
}

setInterval(draw, 10);
