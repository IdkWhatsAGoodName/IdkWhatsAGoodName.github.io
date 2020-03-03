// Interactive Scene - Definitely Thermodynamic Bouncy Ball
// Ray Dai
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let bouncy;
let bounceCoefficient = -1.1;

let gravityX = 0;
let gravityY = 0;

let xCord = 0;
let yCord = 0;
// velocity is split into horizontal and vertical vectors
let xVelocity = 0;
let yVelocity = 0;

let leftBorder;
let rightBorder;
let topBorder;
let bottomBorder;

let nextXCord;
let nextYCord;

function preload(){
  // load the ball sprite
  bouncy = loadImage("assets/bouncy_ball.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // define the borders of the ball's movement
  leftBorder = 0;
  rightBorder = windowWidth - bouncy.width;
  topBorder = 0;
  bottomBorder = windowHeight - bouncy.height;
  
  // place the ball at the center
  xCord = windowWidth/2 - bouncy.width/2;
  yCord = windowHeight/2 - bouncy.height/2;

  xVelocity = 10;
  yVelocity = 11;
}


function draw() {
  background(220);
  // move ball
  if(Math.abs(xVelocity) <= windowWidth && Math.abs(yVelocity) <= windowHeight){
    moveBall();
    image(bouncy, xCord, yCord);
    console.log(xVelocity, windowWidth, yVelocity, windowHeight);
  }
}

function moveBall() {
  // gravity accelerates ball
  xVelocity += gravityX;
  yVelocity += gravityY;
  
  // map out the location of the ball after moving
  nextXCord = xCord + xVelocity;
  nextYCord = yCord + yVelocity;
  
  // ball not running into a side wall
  if(nextXCord > leftBorder && nextXCord < rightBorder && nextYCord > topBorder && nextYCord < bottomBorder){
    xCord += xVelocity;
    yCord += yVelocity;
  }

  // ball running into left wall
  else if (nextXCord < leftBorder && Math.abs(xVelocity) > Math.abs(yVelocity)){
    yCord += yVelocity / xVelocity * (leftBorder - xCord);
    xCord = leftBorder;
    xVelocity = xVelocity * bounceCoefficient;
  }

  // ball running into right wall
  else if(nextXCord > rightBorder && Math.abs(xVelocity) > Math.abs(yVelocity)){
    yCord += yVelocity / xVelocity * (rightBorder - xCord);
    xCord = rightBorder;
    xVelocity = xVelocity * bounceCoefficient;
  }

  // ball running into ceiling (top wall)
  else if(nextYCord <= topBorder && Math.abs(yVelocity) > Math.abs(xVelocity)){
    xCord += xVelocity / yVelocity * (topBorder - yCord);
    yCord = topBorder;
    yVelocity = yVelocity * bounceCoefficient;
  }

  // ball running into floor (bottom wall)
  else if(nextYCord >= bottomBorder && Math.abs(yVelocity) > Math.abs(xVelocity)){
    xCord += xVelocity / yVelocity * (bottomBorder - yCord);
    yCord = bottomBorder;
    yVelocity = yVelocity * bounceCoefficient;
  }

}