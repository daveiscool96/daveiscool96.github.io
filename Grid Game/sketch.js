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

let wall;
let questionBlock;
//player
let blueShell;
let shellX = 0;
let shellY = 0;
let state;
let counter = 5;

function preload() {
  wall = loadImage("brickleRick.png");
  questionBlock = loadImage("questionBlock.webp");
  blueShell = loadImage("tile000.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width/COLS;
  cellHeight = width/ROWS;
  grid = create2dArray(COLS, ROWS);
  //grid = questionBlockArray(COLS, ROWS);
  //place player in grid
  grid[shellY][shellX] = 9;
  //inMotion();
}


function draw() {
  background("lightblue");
  displayGrid(grid);
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    state = "right";
    if (state === "right"){
      for (let i = 0; i < ;i++)
      shellX ++;

      if (grid[shellY][shellX+1] === 0) {
        //set direction
        
        //reset old location to white
        grid[shellY][shellX] = 0;
      
        //move
        // if (lookingRight === true) {
        //   shellX++;
        // }
    
        //set new player location
        grid[shellY][shellX] = 9;
      }
    }

  }
  

  if (keyCode === LEFT_ARROW) {
    lookingLeft = true;
    if (grid[shellY][shellX-1] === 0) {
      //reset old location to white
      grid[shellY][shellX] = 0;
      
      //move
      shellX--;

      //set new player location
      grid[shellY][shellX] = 9;
    }
  }
  else {
    lookingLeft = false;
  }
  if (keyCode === UP_ARROW) {
    lookingUp = true;
    if (grid[shellY-1][shellX] === 0) {
      //reset old location to white
      grid[shellY][shellX] = 0;
      
      //move
      shellY--;

      //set new player location
      grid[shellY][shellX] = 9;
    }
  }
  else {
    lookingUp = false;
  }
  if (keyCode === DOWN_ARROW) {
    lookingDown = true;
    if (grid[shellY+1][shellX] === 0) {
      //reset old location to white
      grid[shellY][shellX] = 0;
      
      //move
      shellY++;

      //set new player location
      grid[shellY][shellX] = 9;
    }
  }
  else {
    lookingDown = false;
  }
}
// function inMotion() {
//   if (lookingRight === true) {
//     shellX++;
//   }
// }
//only used for level creation
//should be commented out otherwise
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

//fill bricks for level creation
// function questionBlockArray(COLS, ROWS) {
//   let questionBlockArray = [];
//   for (let y=0; y<ROWS; y++) {
//     questionBlockArray.push([]);
//     for (let x=0; x<COLS; x++) {
//       questionBlockArray[y].push(1);
//     }
//   }
//   return questionBlockArray;
// }