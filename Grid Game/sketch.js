// Shell Smash
// David Hutcheson
// Extra for Experts:  

let state = "start";
//structure
const ROWS = 40;
const COLS = 40;
let grid;
let cellWidth;
let cellHeight;

//environment
let wall;
let questionBlock;

// levels
let L1;
// let L2;
let L3;

//player
let blueShell;
let shellX = 19;
let shellY = 10;

//player sprite
let spriteArray = [];
let t = 0;

function preload() {
  wall = loadImage("blockO.png");
  questionBlock = loadImage("questionBlock.webp");
  spriteArray = [loadImage("tile000.png"), loadImage("tile001.png"), loadImage("tile002.png"), loadImage("tile003.png"), loadImage("tile004.png"), loadImage("tile005.png")];
  blueShell = loadImage("tile000.png");
  L1 = loadJSON("level1.json");
  // L2 = loadJSON("level2.json");
  L3 = loadJSON("level3.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width/COLS;
  cellHeight = width/ROWS;
  grid = create2dArray(COLS, ROWS);
  grid = questionBlockArray(COLS, ROWS);
  //place player in grid
  grid[shellY][shellX] = 9; 
  grid = L1;
}

function draw() {
  if (state === "start") {
    startScreen()
  }
  if (state = "game") {
    background("lightblue");
    displayGrid(grid);
  }
}

function startScreen() {
  fill("white");
  textSize(50);
  text("Press Space to Begin!", 480, 490);
}

//level creator
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

//fill bricks for level creation
function questionBlockArray(COLS, ROWS) {
  let questionBlockArray = [];
  for (let y=0; y<ROWS; y++) {
    questionBlockArray.push([]);
    for (let x=0; x<COLS; x++) {
      questionBlockArray[y].push(1);
    }
  }
  return questionBlockArray;
}

//next level
function next() {
  
}

function keyPressed() {
  if (key === "1") {
    grid = L1;
  }
  // if (key === "2") {
  //   grid = L2;
  // }
  if (key === "3") {
    grid = L3;
  }

  if (keyCode === RIGHT_ARROW) {
    for (let i = 0; i < 20; i++) {
      //if no brick move
      if (grid[shellY][shellX+1] !== 1) {
        //make old location blue
        grid[shellY][shellX] = 10;
        //move
        shellX++;
        //set new player location
        grid[shellY][shellX] = 9;
        
      }
    }
    animate();
  }

  if (keyCode === LEFT_ARROW) {
    for (let i = 0; i < 20; i++) {
      if (grid[shellY][shellX-1] !== 1) {
        //make old location blue
        grid[shellY][shellX] = 10;
        //move
        shellX--;
        //set new player location
        grid[shellY][shellX] = 9;
        
      }
    }
    animate();
  }

  if (keyCode === UP_ARROW) {
    for (let i = 0; i < 20; i++) {
      //if no brick move
      if (grid[shellY-1][shellX] !== 1) {
        //make old location blue
        grid[shellY][shellX] = 10;
        //move
        shellY--;
        //set new player location
        grid[shellY][shellX] = 9;
        
      }
    }
    animate();
  }

  if (keyCode === DOWN_ARROW) {
    for (let i = 0; i < 20; i++) {
      //if no brick move
      if (grid[shellY+1][shellX] !== 1) {
        //make old location blue
        grid[shellY][shellX] = 10;
        //move
        shellY++;
        //set new player location
        grid[shellY][shellX] = 9;
        
      }
    }
    animate();
  }
}  

function animate() {
if (t === 6) {
  t = 0;
}

blueShell = spriteArray[t];
t++
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

//start screen
//space to start
//when complete next level
//when complete last level
//end screen
//triggered by function that counts number of question blocks and returns 0
//space to play again