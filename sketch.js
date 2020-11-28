var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 70, 50);
  fixedRect.shapeColor = "yellow";

  movingRect = createSprite(400, 200, 70, 50);
  movingRect.shapeColor = "yellow";
}

function draw() {
  background(0, 0, 0); 
  
  fixedRect.debug = true;
  movingRect.debug = true;

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(fixedRect.x - movingRect.x === fixedRect.width / 2 + movingRect.width / 2
    || movingRect.x - fixedRect.x === fixedRect.width / 2 + movingRect.width / 2
    || fixedRect.y - movingRect.y === fixedRect.height / 2 + movingRect.height / 2
    || movingRect.y - fixedRect.y === fixedRect.height / 2 + movingRect.height / 2){
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }
  else{
    fixedRect.shapeColor = "yellow";
    movingRect.shapeColor = "yellow";
  }
  
  console.log(movingRect.y - fixedRect.y);

  drawSprites();
}