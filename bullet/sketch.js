// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function preload() {
  theImage = loadImage("bulletBill.png");
}


class Bullet {
  constructor() {
    this.x = 200;
    this.y = 500;
    this.dx = 5;
    this.height = 200;
    this.width = this.height/62083333333;
    this.image = theImage;
  }

  display() {
    image(this.image, this.x, this.y, this.width, this.height);
  }

  move() {
    this.x += this.dx;
  }

  isDead() {
    return this.x >= width;
  }
}

let bulletArray = [];
let bullet;
let theImage;



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for (let someBullet of bulletArray){
    bulletArray.move();
    bulletArray.display();
  }

  for (let i=bulletArray.length-1; i >= 0; i--) {
    if (bulletArray[i].isDead) {
      bulletArray.splice(i,1);
    }
  }
}


function keyPressed() {
  let someBullet = new Bullet();
  bulletArray.push(someBullet);
}
