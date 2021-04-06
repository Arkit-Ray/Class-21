var fixedRect;
var MovingRect;
var gm1,gm2,gm3,gm4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400,100,50,80);
  fixedRect.shapeColor = "green";
  fixedRect.velocityY = 5;

  MovingRect = createSprite(400,800,80,30);
  MovingRect.shapeColor = "green";
  // MovingRect.velocityY = -5;

  gm1 = createSprite(100,100,50,50);
  gm1.shapeColor = "green";
  
  gm2 = createSprite(200,100,50,50);
  gm2.shapeColor = "green";

  gm3 = createSprite(300,100,50,50);
  gm3.shapeColor = "green";

  gm4 = createSprite(400,100,50,50);
  gm4.shapeColor = "green";
}

function draw() {
  background("black"); 
  MovingRect.y = mouseY;
  MovingRect.x = mouseX;
  //isTouching();
if(isTouching(MovingRect, gm4)){
  gm4.shapeColor = "red";
  MovingRect.shapeColor = "red";
}
else{
  gm4.shapeColor = "green";
  MovingRect.shapeColor = "green";
}
//bounceOff(MovingRect,fixedRect)
  
  drawSprites();
}
