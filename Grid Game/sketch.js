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

//player sprite
let spriteArray = [];
let s1, s2, s3, s4, s5, s6;

function preload() {
  blueShell = loadImage("tile000.png");
  wall = loadImage("blockO.png");
  questionBlock = loadImage("questionBlock.webp");
  s1= loadImage("tile000.png");
  s2 = loadImage("tile001.png");
  s3 = loadImage("tile002.png");
  s4 = loadImage("tile003.png");
  s5 = loadImage("tile004.png");
  s6 = loadImage("tile005.png");
  spriteArray = [s1, s2, s3, s4, s5, s6];
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width/COLS;
  cellHeight = width/ROWS;
  grid = create2dArray(COLS, ROWS);
  grid = questionBlockArray(COLS, ROWS); //commented out bellow
  //place player in grid
  grid[shellY][shellX] = 9; 
}

function draw() {
  background("lightblue");
  displayGrid(grid);
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

//animate sprite
function animate() {
  for (let z=0; z<6; z++) {
    blueShell = spriteArray[z-1];
    image(blueShell, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
  }
}

function keyPressed() {
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
        animate();
      }
    }
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
        animate();
      }
    }
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
        animate();
      }
    }
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
        animate();
      }
    }
  }
}  
  
//   


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
        // image(blueShell, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
        animate();
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
//space to restart
//end screen
//triggered by function that counts number of question blocks and returns 0
//space to play again


