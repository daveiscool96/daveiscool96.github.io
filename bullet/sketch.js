// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function preload() {
  Bullet = loadImage("bulletBill.png");
  gun = loadImage("GUN.png");
}


class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 5;
    this.height = 200;
    this.width = this.height/62083333333;
  }

  display() {
    gun();
    Bullet();
  }

  move() {
      this.x += this.speed;
  }

let bulletArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnBullet();
}

function draw() {
  for (let i = 0; i < bulletArray.length; i++) {
    bulletArray[i].move();
    bulletArray[i].display();
  }
}

function spawnBullet() {
  let michael = new Bullet(random(width), random(height));
  let someColor = color(random(255), random(255), random(255));
  michael.color = someColor;
  bulletArray.push(michael);
}

function keyPressed() {
  spawnBullet();
}
