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
    this. radius = 25;
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

let walkerArray = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnWalker();
}

function draw() {
  for (let i=0; i<walkerArray.length; i++) {
    walkerArray[i].move();
    walkerArray[i].display();
  }
}

function spawnWalker() {
  let mike = new Walker(random(0,width), random(0, height));
  let someColor = color(random(255), random(255), random(255));
  mike.color = someColor;
  walkerArray.push(mike);
}

function keyPressed() {
  spawnWalker();
}
