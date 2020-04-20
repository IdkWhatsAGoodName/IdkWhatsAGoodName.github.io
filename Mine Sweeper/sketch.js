// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let SQUARE_SIZE = 20;

let grids = [];

let xDimensions = 10;
let yDimensions = 10;

let gameRunning = true;


function setup() {
  createCanvas(200, 200);
}

function draw() {
  if(gameRunning){
    background(220);
    drawGrids();
  }
}

// create a button
function makeButton(m, n){
  let button = {
    x: m,
    y: n,
    clicked: false,
    flagged: false,
    mine: false,
  };
  return button;
}

// sets game to the beginning
function startGame(){
  grids = [];
  // make a button for each grid
  for(let i = 0; i < 10; i++){
    let row = [];
    for(let j = 0; j < 10; j++){
      row.push(makeButton(i*SQUARE_SIZE, j*SQUARE_SIZE));
    }
    grids.push(row);
  }
  let choices = [];
  // randomize mines
  while(choices.length < 10){
    // assign 10 grids as mines at random
    let n = Math.floor(Math.random() * 100);
    if(choices.includes(n) !== 0){
      grids[Math.floor(n/10)-1][n%10-1].mine = true;
      choices.push(n);
    }
  }
}

// draws grid lines
function drawGrids(){
  for(let i = 0; i <= width; i += SQUARE_SIZE){
    line(i, 0, i, width);
    line(0, i, 200, i);
  }
}

function mouseClicked(){
  if(mouseX <= 200 && mouseY <= 200){
    // check which grid is clicked and record it
    let rowClicked = Math.floor(mouseY / SQUARE_SIZE) - 1;
    let columnClicked = Math.floor(mouseX / SQUARE_SIZE) - 1;
    let clickedSquare = grids[rowClicked][columnClicked];
    // if the grid hasn't been clicked or flagged
    if(clickedSquare.clicked === false && clickedSquare.flagged === false){
      // and the "flag" key (alt) isn't pressed
      if(keyIsDown(ALT) === false){
        // and the grid clicked is a mine, you lose 
        if(grids[i].mine === true){
          gameRunning = false;
          revealMines();
        }
        else{
          grids[i].clicked = true;
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
  for(let i = 0; i < grids.length; i++){
    for(let j = 0; j < grids[i].length; j++){
      if(grids[i][j].mine){
        line(grids[i][j].x, grids[i][j].y, grids[i][j].x + SQUARE_SIZE, grids[i][j].y + SQUARE_SIZE);
        line(grids[i][j].x + SQUARE_SIZE, grids[i][j].y, grids[i][j].x, grids[i][j].y + SQUARE_SIZE);
      }
    }
  }
}