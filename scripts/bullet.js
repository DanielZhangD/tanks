function bullet(x, y, dx, dy, colour){
  this.x = x;
  this.y = y;
  this.dx = dx*2;
  this.dy = dy*2;
  this.colour = colour;

  this.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 5, 0, Math.PI*2);
    ctx.fillStyle = colour;
    ctx.fill();
    ctx.closePath();
    this.x+= this.dx;
    this.y+= this.dy;
  }
}
