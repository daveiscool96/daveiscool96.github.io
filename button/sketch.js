// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Button OOP

class Button {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  display() {
    
    rect(this.x, this.y, this.width, this.height);
  }

  isInside(x, y) {
    let leftSide = this.x;
    let rightSide = this.x + this.width;
    let topSide = this.y;
    let bottomSide = this.y + this.height;

    return x > leftSide && x < rightSide &&
           y > topSide && y < bottomSide;
  }
}

let buttonOne = new Button(200, 300, buttonWidth, buttonHeight);
let buttonTwo = new Button(200, 600, buttonWidth, buttonHeight);
let backgroundColor = "lightgrey";

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  buttonOne.display();
  buttonTwo.display();
}

function mousePressed() {
  if (buttonOne.isInside(mouseX, mouseY)) {
    ;
  }
  if (buttonTwo.isInside(mouseX, mouseY)) {
    ;
  }
}