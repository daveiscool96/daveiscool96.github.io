// Shell Smash
// David Hutcheson
// 
//
// Extra for Experts:
// 

const ROWS = 40;
const COLS = 40;
let grid;
let cellWidth;
let cellHeight;
let shellX = 0;
let shellY = 0;
let wall;
let questionBlock;
let blueShell;
let cnv;

function preload() {
  wall = loadImage("brickleRick.png");
  questionBlock = loadImage("whiteSquare.png");
  blueShell = loadImage("tile000.png");
}

function setup() {
  
  cnv = createCanvas(windowWidth, windowHeight);
  centerCanvas();
  cellWidth = width/COLS;
  cellHeight = width/ROWS;
  grid = createRandom2dArray(COLS, ROWS);
  //place player in grid
  grid[shellY][shellX] = 9;
}
function centerCanvas() {
  
}

function draw() {
  background("blue");
  displayGrid(grid);
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    if (grid[shellY][shellX+1] === 0) {
      //reset old location to white
      grid[shellY][shellX] = 0;
      
      //move
      shellX++;

      //set new player location
      grid[shellY][shellX] = 9;
    }
  }

  if (keyCode === LEFT_ARROW) {
    if (grid[shellY][shellX-1] === 0) {
      //reset old location to white
      grid[shellY][shellX] = 0;
      
      //move
      shellX--;

      //set new player location
      grid[shellY][shellX] = 9;
    }
  }

  if (keyCode === UP_ARROW) {
    if (grid[shellY-1][shellX] === 0) {
      //reset old location to white
      grid[shellY][shellX] = 0;
      
      //move
      shellY--;

      //set new player location
      grid[shellY][shellX] = 9;
    }
  }

  if (keyCode === DOWN_ARROW) {
    if (grid[shellY+1][shellX] === 0) {
      //reset old location to white
      grid[shellY][shellX] = 0;
      
      //move
      shellY++;

      //set new player location
      grid[shellY][shellX] = 9;
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
        image(questionBlock, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      else if (grid[y][x] === 1) {
        // fill("black");
        image(wall, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      else if (grid[y][x] === 9) {
        // fill("red");
        // rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
        image(questionBlock, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
        image(blueShell, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
    }
  }
}

function create2dArray(COLS, ROWS) {
  let questionBlockArray = [];
  for (let y=0; y<ROWS; y++) {
    questionBlockArray.push([]);
    for (let x=0; x<COLS; x++) {
      questionBlockArray[y].push(0);
    }
  }
  return questionBlockArray;
}

function createRandom2dArray(COLS, ROWS) {
  let questionBlockArray = [];
  for (let y=0; y<ROWS; y++) {
    questionBlockArray.push([]);
    for (let x=0; x<COLS; x++) {
      if (random(100) < 50) {
        questionBlockArray[y].push(0);
      }
      else {
        questionBlockArray[y].push(1);
      }
    }
  }
  return questionBlockArray;
}