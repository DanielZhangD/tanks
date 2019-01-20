class Tank extends GameObject {
  constructor(x, y, colour) {
    super(x, y, colour, 10);
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
      this.x+= this.dx;
      this.y+= this.dy;
    }
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
  }
}
