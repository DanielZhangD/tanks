class Tank extends GameObject {
  constructor(x, y, colour) {
    super(x, y, colour, 20);
    this.dx = 0;
    this.dy = 0;
    this.health = 100;
  }

  draw() {
    if (this.health > 0) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.diameter, 0, Math.PI * 2);
      ctx.fillStyle = this.colour;
      ctx.fill();
      ctx.closePath();
    } else {
      this.x = 10000;
      this.y = 10000;
    }
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
    if (this.x > 900) {
      this.x = 899;
    } else if (this.x < 0) {
      this.x = 1;
    }
    if (this.y > 600) {
      this.y = 599;
    } else if (this.y < 0) {
      this.y = 1;
    }
  }
}
