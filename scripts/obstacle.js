class Obstacle extends GameObject {
  constructor(x, y, colour) {
    super(x, y, colour);
    this.diameter = 30;
  }

  draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.diameter, 0, Math.PI*2);
      ctx.fillStyle = this.colour;
      ctx.fill();
      ctx.closePath();
  }

  collision(tank) {
    if (this.x + 30 < tank.x + 15 && this.x - 5 > tank.x - 15 &&
    this.y + 5 < tank.y + 15 && this.y - 5 > tank.y - 15) {
      tank.health -= 10;
      this.x = 90000;
      this.y = 90000;
    }
  }

}
