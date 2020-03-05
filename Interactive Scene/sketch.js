// Interactive Scene - Definitely Thermodynamic Bouncy Ball
// Ray Dai
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let bouncy;
let bounceCoefficient = -1.01;

let gravityX;
let gravityY;

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

  xVelocity = 0;
  yVelocity = 0;
}


function draw() {
  background(220);
  // move ball if the ball is not moving too fast
  if(Math.abs(xVelocity) <= windowWidth && Math.abs(yVelocity) <= windowHeight){
    gravityX = random(-5,5);
    gravityY = random(-5,5);
    moveBall();
    image(bouncy, xCord, yCord);
    if(mouseX >= xCord && mouseX <= xCord + bouncy.width && mouseY >= yCord && mouseY <= yCord + bouncy.height){
      console.log("You died");
      noLoop();
    }
  }
  else{
    console.log("You survived");
    noLoop();
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
  else if (nextXCord < leftBorder){
    nextYCord = yCord + yVelocity / xVelocity * (leftBorder - xCord);
    if(nextYCord > topBorder && nextYCord < bottomBorder){
      xCord = leftBorder;
      yCord = nextYCord;
      xVelocity = xVelocity * bounceCoefficient;
    }
  }

  // ball running into right wall
  else if(nextXCord > rightBorder){
    nextYCord = yCord + yVelocity / xVelocity * (rightBorder - xCord);
    if(nextYCord > topBorder && nextYCord < bottomBorder){
      xCord = rightBorder;
      yCord = nextYCord;
      xVelocity = xVelocity * bounceCoefficient;
    }
  }

  // ball running into ceiling (top wall)
  else if(nextYCord <= topBorder){
    nextXCord = xCord +  xVelocity / yVelocity * (topBorder - yCord);
    if(nextXCord > leftBorder && nextXCord < rightBorder){
      xCord = nextXCord;
      yCord = topBorder;
      yVelocity = yVelocity * bounceCoefficient;
    }
  }

  // ball running into floor (bottom wall)
  else if(nextYCord >= bottomBorder){
    nextXCord = xCord + xVelocity / yVelocity * (bottomBorder - yCord);
    if(nextXCord > leftBorder && nextXCord < rightBorder){
      xCord = nextXCord;
      yCord = bottomBorder;
      yVelocity = yVelocity * bounceCoefficient;
    }
  }
}