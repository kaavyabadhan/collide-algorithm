function setup() {
  createCanvas(800,400);
  movingRect=createSprite(300, 300, 50, 30);
  movingRect.velocityX=2
  fixedRect=createSprite(600,300,50,100);
  fixedRect.velocityX=-2
}

function draw() {
  background(255,255,255); 
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2){
      fixedRect.velocityX=fixedRect.velocityX*(-1)
      movingRect.velocityX=movingRect.velocityX*(-1)
      movingRect.shapeColor="green"
      fixedRect.shapeColor="green"
  }
  else if(movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
    && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
      fixedRect.velocityY=fixedRect.velocityY*(-1)
      movingRect.velocityY=movingRect.velocityY*(-1)
      movingRect.shapeColor="green"
      fixedRect.shapeColor="green"
  }
  else{
    movingRect.shapeColor="red"
    fixedRect.shapeColor="red"
  }
  drawSprites();
}