// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// let x, y, direction, speed, w, h;
let x = 0;
let y = 0;
let speed = 10;
let direction = "r";
let w = 50;
let h = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // x = 0;
  // y = 0;
  // speed = 10;
  // direction = "r";
  // w = 50;
  // h = 50;
}

function draw() {
  fill(0);
  background(220);

  //set direction
  if(x <= 0 && y <= 0){
    x = 0;
    y = 0;
    direction = "r";
  }
  else if(x >= windowWidth && y <= 0){
    x = windowWidth;
    y = 0;
    direction = "d";
  }
  else if(x >= windowWidth && y >= windowHeight){
    x = windowWidth;
    y = windowHeight;
    direction = "l";
  }
  else{
    x = 0;
    y = windowHeight;
    direction = "u";
  }
  console.log(direction);
  
  //move towards direction
  if(direction === "r"){
    x += speed;
  }
  else if(direction === "d"){
    y += speed;
  }
  else if(direction === "l"){
    x -= speed;
  }
  else{
    y -= speed;
  }
  rect(x, y, w, h);
  
}
