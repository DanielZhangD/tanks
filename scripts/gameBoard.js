const log = console.log;
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const tank1 = new Tank(100, 100, "#0095DD");
const tank2 = new Tank(500, 500, "#FF0000");
const tanks = [tank1, tank2];
let bullets1 = [];
let bullets2 = [];
let t1x = 1;
let t2x = 1;
let t1y = 0;
let t2y = 0;
let obstacles = [];

const BULLET_WIDTH = 5;
const TANK_WIDTH = 20;

log(tank1);
log(tank2);

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

//function createObstacles() {
  for (var i = 0; i < 5; i++) {
    obstacles.push(new Obstacle(Math.floor(Math.random() * Math.floor(875)), Math.floor(Math.random() * Math.floor(575)), "#003300"));
  }
//}

function bulletsWork() {
  bullets1.forEach((bullet) => {
    // Check if bullet collision
    if (checkCollision(bullet, tank2)) {
      log('pow');
      tank2.health -= 10;
      bullet.x = 99999;
      bullet.y = 99999;
    } else if (false) { // Check if bullet is off screen
    } else { // Otherwise draw the bullet
      bullet.draw();
    }
  });
  bullets2.forEach((bullet) => {
    // Check if bullet collision
    if (checkCollision(bullet, tank1)) {
      log('pow');
      tank1.health -= 10;
      bullet.x = 99999;
      bullet.y = 99999;
    } else if (false) { // Check if bullet is off screen
    } else { // Otherwise draw the bullet
      bullet.draw();
    }
  });
}

function obstacleWork() {
  obstacles.forEach((obstacle) => {
    bullets2.forEach((bullet) =>  {
      if (checkCollision(bullet, obstacle)) {
        bullet.x = 99999;
        bullet.y = 99999;
      }
    });
    bullets1.forEach((bullet) =>  {
      if (checkCollision(bullet, obstacle)) {
        bullet.x = 99999;
        bullet.y = 99999;
      }
    });
    tanks.forEach((tank) => {
      if (checkCollision(tank, obstacle)) {
        tank.x -= tank.dx;
        tank.y -= tank.dy;
      }
    });
    obstacle.draw();
  });
}

const checkCollision = (bullet, tank) => {
  if (bullet.intersects(tank)) {
    console.log("hihi");
    return true;
  }
  return false;
};

function keyDownHandler(e) {
  if (e.keyCode == 16) {
    bullets1.push(new Bullet(tank1.x, tank1.y, t1x, t1y, "#0095DD"));
  }
  if (e.keyCode == 81) {
    bullets2.push(new Bullet(tank2.x, tank2.y, t2x, t2y, "#FF0000"));
  }
  if (e.key == "Right" || e.key == "ArrowRight") {
    tank1.dx = 1;
    t1y = 0;
    t1x = 1;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    tank1.dx = -1;
    t1y = 0;
    t1x = -1;
  } else if (e.key == "Up" || e.key == "ArrowUp") {
    tank1.dy = -1;
    t1x = 0;
    t1y = -1;
  } else if (e.keyCode == "Down" || e.key == "ArrowDown") {
    tank1.dy = 1;
    t1x = 0;
    t1y = 1
  }
  if (e.keyCode == 68) {
    tank2.dx = 1
    t2y = 0;
    t2x = 1;
  } else if (e.keyCode == 65) {
    tank2.dx = -1
    t2y = 0;
    t2x = -1;
  } else if (e.keyCode == 87) {
    tank2.dy = -1
    t2x = 0;
    t2y = -1;
  } else if (e.keyCode == 83) {
    tank2.dy = 1
    t2x = 0;
    t2y = 1
  }
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
  tank1.move();
  tank2.move();
  draw();
};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  tank1.draw();
  tank2.draw();
  bulletsWork();
  obstacleWork();
}

setInterval(update, 10);
