var x = 0
var speed 

function setup() {
  createCanvas(600,600);
  //background(255,0,255);
  //try frameRate(10)
}

function draw() {
   background(255,0,255)      
   fill(0);
  
  if(x > width){
  speed =- 3;
  }
  
   if(x < 1){
  speed =+ 3;
  }
  
  ellipse(x, 300, 50); 
  //try random(1,200))
  
  x = x + speed
}