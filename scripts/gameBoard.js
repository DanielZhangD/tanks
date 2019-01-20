const log = console.log;
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const tank1 = new Tank(100, 100, "#0095DD");
const tank2 = new Tank(500, 500, "#FF0000");
const tanks = [tank1, tank2];
let bullets1 = [];
let bullets2 = [];

const BULLET_WIDTH = 5;
const TANK_WIDTH = 10;

log(tank1);
log(tank2);

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function bulletsWork() {
  bullets1.forEach((bullet) => {
    // Check if bullet collision
    if (checkCollision(bullet)) {
      log('pow');
    } else if (false) { // Check if bullet is off screen
    } else { // Otherwise draw the bullet
      bullet.draw();
    }
  });
}

const checkCollision = (bullet) => {
  tanks.forEach((tank) => {
    if (bullet.intersects(tank)) {
      return true;
    }
  });
  return false;
};

function keyDownHandler(e) {
  if (e.keyCode == 16) {
    bullets1.push(new Bullet(tank1.x, tank1.y, 1, 1, "#0095DD"));
  }
  if (e.keyCode == 81) {
    bullets2.push(new Bullet(tank2.x, tank2.y, t2x, t2y, "#FF0000"));
  }
  if (e.key == "Right" || e.key == "ArrowRight") {
    tank1.dx = 1;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    tank1.dx = -1;
  } else if (e.key == "Up" || e.key == "ArrowUp") {
    tank1.dy = -1;
  } else if (e.keyCode == "Down" || e.key == "ArrowDown") {
    tank1.dy = 1;
  }
  tank1.move();
  //if (e.keyCode == 68) {
  //  tank2.dx = 1
  //  t2y = 0;
  //  t2x = 1;
  //} else if (e.keyCode == 65) {
  //  tank2.dx = -1
  //  t2y = 0;
  //  t2x = -1;
  //} else if (e.keyCode == 87) {
  //  tank2.dy = -1
  //  t2x = 0;
  //  t2y = -1;
  //} else if (e.keyCode == 83) {
  //  tank2.dy = 1
  //  t2x = 0;
  //  t2y = 1
  //}
}

function keyUpHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    tank1.dx = 0;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    tank1.dx = 0;
  } else if (e.key == "Up" || e.key == "ArrowUp") {
    tank1.dy = 0;
  } else if (e.key == "Down" || e.key == "ArrowDown") {
    tank1.dy = 0;
  }
  if (e.keyCode == 68) {
    tank2.dx = 0;
  } else if (e.keyCode == 65){
    tank2.dx = -0;
  } else if (e.keyCode == 87){
    tank2.dy = 0;
  } else if (e.keyCode == 83){
    tank2.dy = 0;
  }
}

const update = () => {
  draw();
};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  tank1.draw();
  tank2.draw();
  bulletsWork();
}

setInterval(update, 10);
