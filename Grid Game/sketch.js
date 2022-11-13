// Shell Smash
// David Hutcheson
// Extra for Experts:

//structure
const ROWS = 40;
const COLS = 40;
let grid;
let cellWidth;
let cellHeight;

//environment
let wall;
let questionBlock;

//player
let blueShell;
let shellX = 19;
let shellY = 10;
let directionState;

//player sprite
let spriteArray;


function preload() {
  wall = loadImage("brickleRick.png");
  questionBlock = loadImage("questionBlock.webp");
  spriteArray = [loadImage("tile000.png"), loadImage("tile001.png"), loadImage("tile002.png"), loadImage("tile003.png"), loadImage("tile004.png"), loadImage("tile005.png")];
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width/COLS;
  cellHeight = width/ROWS;
  grid = create2dArray(COLS, ROWS);
  //grid = questionBlockArray(COLS, ROWS); //commented out bellow
  //place player in grid
  grid[shellY][shellX] = 9; 
  //inMotion(); //may have use later
  animate(); //should work later
}

function draw() {
  background("lightblue");
  displayGrid(grid);
}

//will be replaced with level
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

//animate sprite
function animate() {
  for (let i = 0; i < spriteArray.length; i++) {
    blueShell = spriteArray[i];
  }
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW || keyPressed(68)) {
      for (let i = 0; i < 5; i++) {
        //reset old location
        grid[shellY][shellX] = 10;
        //move
        shellX ++; 
        //set new player location
        grid[shellY][shellX] = 9;
      }
    }

  }
  

  if (keyCode === LEFT_ARROW || keyPressed(65)) {
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
  if (keyCode === UP_ARROW || keyPressed(87)) {
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
  if (keyCode === DOWN_ARROW || keyPressed(83)) {

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

//make so it stays blue when touched
//places things in grid
function displayGrid(grid) {
  for (let y=0; y<ROWS; y++) {
    for (let x=0; x<COLS; x++) {
      if (grid[y][x] === 0) {
        //make question block
        image(questionBlock, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      else if (grid[y][x] === 1) {
        //make a wall
        image(wall, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      else if (grid[y][x] === 9) {
        //make player
        image(blueShell, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      else if (grid[y][x] === 10) {
        //make blue
        fill("lightblue");
      }
    }
  }
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