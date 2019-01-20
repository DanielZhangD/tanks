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
    return ((this.x + this.diameter) < (object.x + object.diameter + 4) &&
     (object.x - object.diameter - 4) <  (this.x - this.diameter) &&
      (object.y + object.diameter + 4) > (this.y + this.diameter) &&
       (object.y - object.diameter - 4) < (this.y - this.diameter));
  }
}
