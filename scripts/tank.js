function tank(x, y, colour) {
  this.x = x;
  this.y = y;
  this.dx = 0;
  this.dy = 0;
  this.health = 100;

  this.draw = function() {
    if (this.health > 0) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, 10, 0, Math.PI*2);
      ctx.fillStyle = colour;
      ctx.fill();
      ctx.closePath();
      this.x+= this.dx;
      this.y+= this.dy;
    }
  }

}
