var fixedRect, movingRect;
var object1,object2,object3,object4,object5

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  object1 = createSprite(200, 200, 50, 80);
  object1.shapeColor = "green";
  object2 = createSprite(300, 200, 50, 80);
  object2.shapeColor = "green";
  object3 = createSprite(400, 200, 50, 80);
  object3.shapeColor = "green";
  object4 = createSprite(500, 200, 50, 80);
  object4.shapeColor = "green";
  object5 = createSprite(600, 200, 50, 80);
  object5.shapeColor = "green";

  object5.velocityY = 5;
  fixedRect.velocityY = -5;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,object3)){
   
    movingRect.shapeColor = "red";
    object3.shapeColor = "red";

  }
  else{
    movingRect.shapeColor = "green";
    object3.shapeColor = "green";
  }
   

bounceOff(object5,fixedRect);

  drawSprites();
}


