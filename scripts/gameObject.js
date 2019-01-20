class GameObject {
  constructor(x, y, colour, diameter) {
    this.x = x;
    this.y = y;
    this.colour = colour;
    this.diameter = diameter;
  }

  draw() {
    throw new Error("Method 'draw()' must be implemented.");
  }

  intersects(object) {
    return !(object.x > (this.x + this.diameter) || (object.x + object.diameter) <  this.x || object.y > (this.y + this.diameter) || (object.y + object.diameter) < this.y);
  }
}
