// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let GRAVITATIONAL_CONSTANT = 0.98;

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  window.setInterval(addBall,10);
}

function draw() {
  background(220);
  displayBall();
  moveBall();
  collisionDetection();
}

function displayBall(){
  for(let i = 0; i < ballArray.length; i++){
    fill(ballArray[i].color);
    circle(ballArray[i].x, ballArray[i].y, ballArray[i].radius);
  }
}

function addBall(){
  noStroke();
  let thisBall = {
    x: random(width),
    y: random(height),
    radius: random(25,50),
    color: color(random(255), random(255), random(255), random(255)),
  };
  ballArray.push(thisBall);
}

function moveBall() {
  for(let i=0; i<ballArray.length; i++){
    let dx = random(-10, 10);
    let dy = random(-10, 10);
    ballArray[i].x += dx;
    ballArray[i].y += dy;
  }
}

function collisionDetection(){
  for(let i=0; i<ballArray.length; i++){
    let mouseDistance = dist(mouseX, mouseY, ballArray[i].x, ballArray[i].y);
    if(mouseDistance <= ballArray[i].radius){
      ballArray.splice(i,1);
    }
  }
}

// function mousePressed(){
//   collisionDetection();
// }

function windowResized(){
  setup();
}