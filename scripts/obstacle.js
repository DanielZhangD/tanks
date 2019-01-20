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
}
