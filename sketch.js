var fixed;
var moving;

function setup() {
  createCanvas(800,400);
  fixed = createSprite(400,200,30,80);
  moving = createSprite(600,200,80,30);

  fixed.shapeColor ="green";
  moving.shapeColor ="green";
}

function draw() {
  background("black");

  moving.x = World.mouseX;
  moving.y = World.mouseY;

  if(moving.x - fixed.x <moving.width/2 + fixed.width/2 && fixed.x - moving.x <moving.width/2 + fixed.width/2 && 
    moving.y - fixed.y <moving.width/2 + fixed.width/2  && fixed.y - moving.y <moving.width/2 + fixed.width/2){
    fixed.shapeColr = "blue";
    moving.shapeColor ="blue";
  }
  else{
    fixed.shapeColor ="green";
  moving.shapeColor ="green";
  }

  drawSprites();

}










































