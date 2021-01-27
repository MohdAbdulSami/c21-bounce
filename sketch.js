var fixedRect, movingRect,a,b,c,d;

function setup() {
  createCanvas(1200,800);
  a = createSprite(100, 100, 50, 80);
  a.shapeColor = "green";
  b = createSprite(200, 100, 50, 80);
  b.shapeColor = "green";
  c = createSprite(300, 100, 50, 80);
  c.shapeColor = "green"; 
  d= createSprite(400, 100, 50, 80);
  d.shapeColor = "green";
  fixedRect = createSprite(700, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(300,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityX=5;
 fixedRect.velocityX=-5;
}


function draw() {
  background(0,0,0);  
 // movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

 
  if(isTouching(a,movingRect)){

    movingRect.shapeColor = "red";
    a.shapeColor = "red";

  }
  else{
    movingRect.shapeColor = "green";
    a.shapeColor = "green";

  }

 bounceoff();
  drawSprites();
}

function isTouching(obj1,obj2) {
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2
    && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
    && obj2.y - obj1.y < obj2.height/2 + obj1.height/2) {
  
      return true;
}
else {
  return false;
}
}

function bounceoff() {

if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
  && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2){

movingRect.velocityX=movingRect.velocityX *(-1);
fixedRect.velocityX=fixedRect.velocityX *(-1);
}

if(movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
  && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){

    movingRect.velocityY=movingRect.velocityY *(-1);
    fixedRect.velocityY=fixedRect.velocityY *(-1);


}
  
}
