//minesweeper
//Ray Dai

let SQUARE_SIZE = 20;

//grids stores as [row][column]
let grids = [];

//game size is 10x10 for now
let gridWidth = 10;
let gridHeight = 10;

// the coordinate of where the grid begins
let gridX;
let gridY;

//let game run when it opens, will worry about UI later
let gameRunning = true;


function setup() {
  createCanvas(1000, 600);
  gridX = width/2-gridWidth*SQUARE_SIZE/2;
  gridY = height/2-gridHeight*SQUARE_SIZE/2;
}

//main function
function draw() {
  if(gameRunning){
    background(220);
    drawGrids(gridX, gridY, gridWidth, gridHeight);
    startGame();
  }
}

// create a button for a grid
function makeButton(m, n){
  let button = {
    row: m,
    column: n,
    xCord: n * SQUARE_SIZE + gridX,
    yCord: m * SQUARE_SIZE + gridY,
    clicked: false,
    flagged: false,
    mine: false,
    mineCount: 0,
  };
  return button;
}

// sets game to the beginning
function startGame(){
  grids = [];
  // make a button for each grid
  for(let i = 0; i < gridHeight; i++){
    let row = [];
    for(let j = 0; j < gridWidth; j++){
      row.push(makeButton(i, j));
    }
    grids.push(row);
  }
  chooseMines(10);
}

// randomize mines
function chooseMines(x){
  let choices = [];
  while(choices.length < x){
    // assign 10 grids as mines at random
    let m = Math.floor(Math.random() * 100);
    if(choices.includes(m) !== 0){
      let mine = grids[Math.floor(m/10)][m%10];
      mine.mine = true;
      choices.push(m);
      // increase mine count of neighboring squares by 1
      let neighbors = adjacentSquares(mine);
      while (neighbors.length() > 0){
        nextSquare = neighbors.pop();
        grids[nextSquare[0]][nextSquare[1]].mineCount += 1;
      }
    }
  }
}
// draws grid lines
// (x, y) is the coords for where to draw the grid with size w*h grids
function drawGrids(x, y, w, h){
  //draw vertical lines
  for(let i = 0; i <= w; i++){
    line(x + i * SQUARE_SIZE, y, x + i * SQUARE_SIZE, y + h * SQUARE_SIZE);
  }
  //draw horizontal lines
  for(let j = 0; j <= h; j++){
    line(x, y + j * SQUARE_SIZE, x + w * SQUARE_SIZE, y + j * SQUARE_SIZE);
  }
}

function mouseClicked(){
  if(mouseInRange()){
    // check which grid is clicked and record it
    let rowClicked = Math.floor((mouseY - gridY) / SQUARE_SIZE);
    let columnClicked = Math.floor((mouseX - gridX) / SQUARE_SIZE);
    let clickedSquare = grids[rowClicked][columnClicked];
    // if the grid hasn't been clicked or flagged
    if(clickedSquare.clicked === false && clickedSquare.flagged === false){
      // and the "flag" key (alt) isn't pressed
      if(keyIsDown(ALT) === false){
        // and the grid clicked is a mine, you lose 
        if(clickedSquare.mine === true){
          gameRunning = false;
          revealMines();
        }
        else{
          clickedSquare.clicked = true;
        }
      }
    }
  }
}

function keyPressed(){
  if(key === "g"){
    startGame();
  }
}

// show location of mines on screen, only used when player loses
function revealMines(){
  for(let i = 0; i < gridHeight; i++){
    for(let j = 0; j < gridWidth; j++){
      if(grids[i][j].mine){
        line(grids[i][j].xCord, grids[i][j].yCord, grids[i][j].xCord + SQUARE_SIZE, grids[i][j].yCord + SQUARE_SIZE);
        line(grids[i][j].xCord + SQUARE_SIZE, grids[i][j].yCord, grids[i][j].xCord, grids[i][j].yCord + SQUARE_SIZE);
      }
    }
  }
}

//checks if mouse is in the game area
function mouseInRange(){
  return (mouseX > gridX && mouseY > gridY && mouseX < gridX + gridWidth*SQUARE_SIZE && mouseY < gridY + gridHeight*SQUARE_SIZE);
}

function adjacentSquares(square){
  squares = []
  for (let i = -1; i <= 1; i++){
    for (let j = -1; j <= 1; j++){
      if(i !== 0 || j !== 0){
        squares.push([square.row + i, square.column + j]);
      }
    }
  }
  return squares;
}