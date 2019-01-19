var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var tank1 = new tank(100,100,"#0095DD");
var tank2 = new tank(500,500,"#FF0000");
var bullets1 = [];
var bullets2 = [];
var t1x = 1;
var t1y = 1;
var t2x = 1;
var t2y = 1;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function bulletsWork() {
  for (var i = 0; i < bullets1.length; i++) {
    bullets1[i].draw();
  }
  for (var i = 0; i < bullets2.length; i++) {
    bullets2[i].draw();
  }
}

function keyDownHandler(e) {
    if (e.keyCode == 16) {
      bullets1.push(new bullet(tank1.x, tank1.y, t1x, t1y, "#0095DD"));
    }
    if (e.keyCode == 81) {
      bullets2.push(new bullet(tank2.x, tank2.y, t2x, t2y, "#FF0000"));
    }
    if(e.key == "Right" || e.key == "ArrowRight") {
        tank1.dx = 1;
        t1y = 0;
        t1x = 1;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        tank1.dx = -1;
        t1y = 0;
        t1x = -1;
    }
    else if(e.key == "Up" || e.key == "ArrowUp") {
        tank1.dy = -1;
        t1x = 0;
        t1y = -1;
    }
    else if(e.keyCode == "Down" || e.key == "ArrowDown") {
        tank1.dy = 1;
        t1x = 0;
        t1y = 1;
    }
    if(e.keyCode == 68) {
        tank2.dx = 1
        t2y = 0;
        t2x = 1;
    }
    else if(e.keyCode == 65) {
        tank2.dx = -1
        t2y = 0;
        t2x = -1;
    }
    else if(e.keyCode == 87) {
        tank2.dy = -1
        t2x = 0;
        t2y = -1;
    }
    else if(e.keyCode == 83) {
        tank2.dy = 1
        t2x = 0;
        t2y = 1
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

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  tank1.draw();
  tank2.draw();
  bulletsWork();
}

setInterval(draw, 10);
