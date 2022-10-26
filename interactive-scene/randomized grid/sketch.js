// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let cols = 10;
let rows = 10;
let grid = create2dArray(cols, rows);
let cellWidth;
let cellHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width/cols;
  cellHeight = height/rows;
}

function draw() {
  background(220);
}

function displayGrid(grid) {
  for (let y=0; y<rows; y++) {
    for (let x=0; x<cols; x++) {
      fill("white");
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight)
    }
  }
}

function create2dArray(cols, rows) {
  let emptyArray = [];
  for (let y=0; y<rows; y++) {
    emptyArray.push([]);
    for (let x=0; x<cols; x++) {
      emptyArray[y].push(0);
    }
  }
  return emptyArray;
}
