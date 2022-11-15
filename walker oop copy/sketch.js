// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.color = "brown";
    this.speed = 5;
    this. radius = 50;
  }

  display() {
    stroke("black");
    fill(this.color);
    circle(this.x, this.y, this. radius * 2);
  }

  move() {
    let choice = random(100);
    
    if (choice < 25) {
      this.y -= this.speed;
    }
    else if (choice < 50) {
      this.y += this.speed;
    }
    else if (choice < 75) {
      this.x += this.speed;
    }
    else {
      this.x -= this.speed;
    }
  }
}

let mike;
let kate;
let matt;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mike = new Walker(width/2, height/2);
  kate = new Walker(width/2, height/2);
  matt = new Walker(width/2, height/2);
}

function draw() {
  kate.color = "blue";
  matt.color = "white";
  matt.display();
  mike.display();
  kate.display();
  matt.move();
  mike.move();
  kate.move();
}


