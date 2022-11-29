// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let blake;

function setup() {
  createCanvas(windowWidth, windowHeight);
  blake = new Walker(width/2, height/2, "blue");
}

function draw() {
  blake.move();
  blake.display();
}

class Walker {
  constructor(x, y, theColor) {
    this.x = x;
    this.y = y;
    this.color = theColor;
    this.speed = 4;
    this.radius = 1;
  }

  display() {
    fill(this.color);
    stroke(this.color);
    circle(this.x, this.y, radius*2);
  }

  move() {
    let theChoice = random(100);

    if (theChoice < 25) { //up
      this.y -= this.speed;
    }
    else if (theChoice < 50) { //down
      this.y += this.speed;
    }
    else if (theChoice < 75) { //left
      this.x -= this.speed;
    }
    else { //right
      this.x += this.speed;
    }
  }
}