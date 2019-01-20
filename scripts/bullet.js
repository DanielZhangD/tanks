class Bullet extends GameObject {
  constructor(x, y, dx, dy, colour) {
    super(x, y, colour, 5);
    this.dx = dx*2;
    this.dy = dy*2;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.diameter, 0, Math.PI*2);
    ctx.fillStyle = this.colour;
    ctx.fill();
    ctx.closePath();
    this.x+= this.dx;
    this.y+= this.dy;
  }
}
