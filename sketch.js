var fixedRect, movingRect,thirdRect,fourthRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

thirdRect = createSprite(200,200,50,50)
thirdRect.velocityX = 3

fourthRect = createSprite(600,200,50,50)
fourthRect.velocityX = -3



  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(thirdRect,fourthRect);
  bounceOff(movingRect,fixedRect);
  drawSprites();
}


