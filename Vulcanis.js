console.log('%cWelcome to Vulcanis, a JavaScript Physics library for generating physics of objects!', 'color: #F24405;');
console.log('%cUse OOP to create fun engines with none of the tedious work!', 'color: cyan;');
class Projectile {
  constructor(x, y, angle, force) {
    this.x = x;
    this.rx = force * Math.cos(angle);
    this.y = y;
    this.ry = -(force * Math.sin(angle));
  }
  update() {
    this.ry += 9.8;
    this.x += this.rx;
    this.y += this.ry;
  }
}
class Liquid {
  constructor(x, y, viscosity, velocity) {
    this.x = x;
    this.y = y;
    this.visc = viscosity;
    this.motion = velocity;
  }
}
class Laminar extends Liquid {
  constructor(x, y, viscosity, velocity, directionX, directionY) {
    super(x, y, viscosity, velocity);
    /* directionX and directionY must be either 1, -1, or 0. For directionX, 1 means right, -1 means left, and 0 means it doesn't move left or right. For directionY, 1 means down, -1 means up, and 0 means it doesn't move up or down. */
    this.dirX = directionX;
    this.dirY = directionY;
  }
  update() {
    this.x += (this.motion / this.visc) * this.dirX;
    this.y += (this.motion / this.visc) * this.dirY;
  }
}
class Turbulent extends Liquid {
  constructor(x, y, viscosity, velocity) {
    super(x, y, viscosity, velocity);
  }
  update() {
    this.x += (Math.random() * 2 * this.motion) - this.motion;
    this.y += (Math.random() * 2 * this.motion) - this.motion;
  }
}
