// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = x;
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.diameter = 2;
    this.color = color(random(255), random(255), random(255));
  }
}

function move() {
  this.x += this.dx;
  this.y += this.dy;
}

function display() {
  fill(this.color);
  stroke(this.color);
  circle(this.x, this.y, this.diameter);
}

let theFireworks = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for (let i=0; i< theFireworks.length; i++) {
    theFireworks[i].move();
    theFireworks[i].display();
  }
}

function mousePressed() {
  for (let i=0; i<100; i++) {
    let someParticle = new Particle(mouseX, mouseY);
    theFireworks.push(someParticle);
  }
}