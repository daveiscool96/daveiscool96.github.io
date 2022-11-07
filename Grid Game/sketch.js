// Mario Maker
// David Hutcheson
// 
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const ROWS = 40;
const COLS = 40;
let grid;
let cellWidth;
let cellHeight;
let playerX = 0;
let playerY = 0;
let wall;
let empty;
let blueShell;
let trail;
let cnv;

function preload() {
  wall = loadImage("brickleRick.png");
  empty = loadImage("whiteSquare.png");
  blueShell = loadImage("blueShell.webp");
}

function setup() {
  
  cnv = createCanvas(windowWidth, windowHeight);
  centerCanvas();
  cellWidth = width/COLS;
  cellHeight = width/ROWS;
  grid = createRandom2dArray(COLS, ROWS);
  //place player in grid
  grid[playerY][playerX] = 9;
}
function centerCanvas() {
  
}

function draw() {
  background("black");
  displayGrid(grid);
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    if (grid[playerY][playerX+1] === 0) {
      //reset old location to white
      grid[playerY][playerX] = 0;
      
      //move
      playerX++;

      //set new player location
      grid[playerY][playerX] = 9;
    }
  }

  if (keyCode === LEFT_ARROW) {
    if (grid[playerY][playerX-1] === 0) {
      //reset old location to white
      grid[playerY][playerX] = 0;
      
      //move
      playerX--;

      //set new player location
      grid[playerY][playerX] = 9;
    }
  }

  if (keyCode === UP_ARROW) {
    if (grid[playerY-1][playerX] === 0) {
      //reset old location to white
      grid[playerY][playerX] = 0;
      
      //move
      playerY--;

      //set new player location
      grid[playerY][playerX] = 9;
    }
  }

  if (keyCode === DOWN_ARROW) {
    if (grid[playerY+1][playerX] === 0) {
      //reset old location to white
      grid[playerY][playerX] = 0;
      
      //move
      playerY++;

      //set new player location
      grid[playerY][playerX] = 9;
    }
  }
}

function mousePressed() {
  let xPos = Math.floor(mouseX/cellWidth);
  let yPos = Math.floor(mouseY/cellHeight);

  if (grid[yPos][xPos] === 0) {
    grid[yPos][xPos] = 1;
  }
  else if (grid[yPos][xPos] === 1) {
    grid[yPos][xPos] = 0;
  }
}

function displayGrid(grid) {
  for (let y=0; y<ROWS; y++) {
    for (let x=0; x<COLS; x++) {
      if (grid[y][x] === 0) {
        // 
        image(empty, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      else if (grid[y][x] === 1) {
        // fill("black");
        image(wall, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      else if (grid[y][x] === 9) {
        // fill("red");
        // rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
        image(empty, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
        image(blueShell, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
    }
  }
}

function create2dArray(COLS, ROWS) {
  let emptyArray = [];
  for (let y=0; y<ROWS; y++) {
    emptyArray.push([]);
    for (let x=0; x<COLS; x++) {
      emptyArray[y].push(0);
    }
  }
  return emptyArray;
}

function createRandom2dArray(COLS, ROWS) {
  let emptyArray = [];
  for (let y=0; y<ROWS; y++) {
    emptyArray.push([]);
    for (let x=0; x<COLS; x++) {
      if (random(100) < 50) {
        emptyArray[y].push(0);
      }
      else {
        emptyArray[y].push(1);
      }
    }
  }
  return emptyArray;
}